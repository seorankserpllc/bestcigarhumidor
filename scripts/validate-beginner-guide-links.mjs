import fs from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';

async function load(filename, exportName) {
  const file = path.join(process.cwd(), 'src', 'data', filename);
  const source = await fs.readFile(file, 'utf8');
  const js = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    fileName: file,
  }).outputText;
  const mod = await import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
  return mod[exportName];
}

const [guides, products, getAmazonUrl] = await Promise.all([
  load('guides.ts', 'CIGAR_GUIDES'),
  load('products.ts', 'AMAZON_PRODUCTS'),
  (async () => {
    const file = path.join(process.cwd(), 'src', 'utils', 'amazonLinks.ts');
    const source = await fs.readFile(file, 'utf8');
    const js = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
      fileName: file,
    }).outputText;
    const mod = await import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
    return mod.getAmazonUrl;
  })(),
]);

const guide = guides.find(item => item.slug === 'best-humidors-for-beginners');
if (!guide) throw new Error('Beginner guide is missing');
if (/amazon\.com\/s\?|amzn\.to/i.test(JSON.stringify(guide))) throw new Error('Guide contains a search or short Amazon URL');
if (guide.featuredProductIds.length !== 4 || new Set(guide.featuredProductIds).size !== 4) throw new Error('Expected four distinct products');
for (const id of guide.featuredProductIds) {
  const product = products.find(item => item.id === id);
  if (!product || !/^[A-Z0-9]{10}$/.test(product.asin || '')) throw new Error('Missing verified ASIN for ' + id);
  const expected = 'https://www.amazon.com/dp/' + product.asin + '?tag=bestcigarhumidor0c-20';
  const actual = getAmazonUrl(product.amazonSearchQuery, product.asin);
  if (actual !== expected) throw new Error('Wrong destination for ' + id + ': ' + actual);
  console.log(id + ' -> ' + actual);
}
console.log('All beginner guide product CTAs resolve to direct tagged ASIN pages.');
