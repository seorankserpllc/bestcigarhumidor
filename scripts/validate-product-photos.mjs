import fs from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';

const rootDir = process.cwd();
const errors = [];

async function loadData(filename, exportName) {
  const sourcePath = path.join(rootDir, 'src', 'data', filename);
  const source = await fs.readFile(sourcePath, 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: sourcePath,
  }).outputText;
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`;
  const module = await import(moduleUrl);
  return module[exportName];
}

async function sourceFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(filename) : /\.tsx?$/.test(entry.name) ? [filename] : [];
  }));
  return nested.flat();
}

function validAmazonImage(value) {
  if (typeof value !== 'string' || !value) return false;
  try {
    const url = new URL(value);
    const allowedHosts = new Set([
      'm.media-amazon.com',
      'images-na.ssl-images-amazon.com',
      'images-eu.ssl-images-amazon.com',
    ]);
    return url.protocol === 'https:'
      && allowedHosts.has(url.hostname)
      && /^\/images\/I\/[^/]+\.(?:jpe?g|png|webp)$/i.test(url.pathname)
      && !url.username && !url.password;
  } catch {
    return false;
  }
}

function matchesListing(value, asin) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && url.hostname === 'www.amazon.com'
      && (url.pathname.endsWith(`/dp/${asin}`) || url.pathname.endsWith(`/gp/product/${asin}`));
  } catch {
    return false;
  }
}

async function verifyRemote(imageUrls) {
  let nextIndex = 0;
  const workers = Array.from({ length: Math.min(5, imageUrls.length) }, async () => {
    while (nextIndex < imageUrls.length) {
      const imageUrl = imageUrls[nextIndex++];
      try {
        const response = await fetch(imageUrl, { signal: AbortSignal.timeout(20000) });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const contentType = response.headers.get('content-type') || '';
        if (!contentType.toLowerCase().startsWith('image/')) {
          await response.body?.cancel();
          throw new Error(`expected image content type, got ${contentType || '(none)'}`);
        }
        const bytes = (await response.arrayBuffer()).byteLength;
        if (bytes < 1024) throw new Error(`image response is only ${bytes} bytes`);
      } catch (error) {
        errors.push(`${imageUrl}: ${error.message}`);
      }
    }
  });
  await Promise.all(workers);
}

const [guides, products] = await Promise.all([
  loadData('guides.ts', 'CIGAR_GUIDES'),
  loadData('products.ts', 'AMAZON_PRODUCTS'),
]);
if (!Array.isArray(guides) || guides.length === 0) throw new Error('No guides found.');
if (!Array.isArray(products) || products.length === 0) throw new Error('No products found.');

const productIds = new Set();
const imageUrls = new Set();
const photoSources = JSON.parse(await fs.readFile(path.join(rootDir, 'scripts', 'data', 'amazon-product-photos.json'), 'utf8'));
for (const product of products) {
  if (!product.id || productIds.has(product.id)) errors.push(`Missing or duplicate product ID: ${product.id}`);
  productIds.add(product.id);
  if (!validAmazonImage(product.imageUrl)) {
    errors.push(`${product.id}: missing or invalid Amazon CDN product photo`);
  } else {
    imageUrls.add(product.imageUrl);
  }
  const source = photoSources[product.id];
  if (!source || source.asin !== product.asin || source.imageUrl !== product.imageUrl
    || !matchesListing(source.sourceUrl, product.asin) || !source.verifiedAt) {
    errors.push(`${product.id}: photo must match its verified Amazon listing in scripts/data/amazon-product-photos.json`);
  }
}

const guideSlugs = new Set();
const referencedProductIds = new Set();
let featuredReferences = 0;
let comparisonReferences = 0;
for (const guide of guides) {
  if (!guide.slug || guideSlugs.has(guide.slug)) errors.push(`Missing or duplicate guide slug: ${guide.slug}`);
  guideSlugs.add(guide.slug);
  if (!Array.isArray(guide.featuredProductIds) || guide.featuredProductIds.length === 0) {
    errors.push(`${guide.slug}: no featured products to photograph`);
  }
  const featuredIds = guide.featuredProductIds || [];
  const comparisonIds = (guide.comparisonRows || []).map(row => row.productId);
  featuredReferences += featuredIds.length;
  comparisonReferences += comparisonIds.length;
  for (const productId of [...featuredIds, ...comparisonIds]) {
    referencedProductIds.add(productId);
    if (!productIds.has(productId)) errors.push(`${guide.slug}: unknown product ${productId}`);
  }
}

const files = await sourceFiles(path.join(rootDir, 'src'));
const sources = await Promise.all(files.map(async filename => [filename, await fs.readFile(filename, 'utf8')]));
for (const [filename, source] of sources) {
  if (source.includes('useBrandedProductArt')) {
    errors.push(`${path.relative(rootDir, filename)}: product photos must not be overridden by branded artwork`);
  }
}
const cardsPath = path.join(rootDir, 'src', 'components', 'Guides', 'GuideProductCards.tsx');
const cards = sources.find(([filename]) => filename === cardsPath)?.[1] || '';
if (cards.includes('GuideFeatureArt')) errors.push('GuideProductCards.tsx must render product photos instead of GuideFeatureArt.');
const photoComponents = cards.match(/<ProductImage\b[\s\S]*?\/>/g) || [];
if (photoComponents.length < 2 || photoComponents.some(component => !/src=\{product\.imageUrl\}/.test(component))) {
  errors.push('GuideProductCards.tsx must use ProductImage with product.imageUrl for both cards and inline offers.');
}

if (process.argv.includes('--remote')) await verifyRemote([...imageUrls]);
if (errors.length) throw new Error(`Product photo validation failed:\n- ${errors.join('\n- ')}`);

console.log(`Validated ${guides.length} guides, ${products.length} products, ${referencedProductIds.size} referenced products, and ${imageUrls.size} unique Amazon photos (${featuredReferences} featured and ${comparisonReferences} comparison references).`);
if (process.argv.includes('--remote')) console.log(`All ${imageUrls.size} photo GETs returned substantial image responses.`);
