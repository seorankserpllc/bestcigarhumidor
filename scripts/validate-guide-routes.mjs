import fs from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const guideDir = path.join(distDir, 'guides');
const expectedOrigin = 'https://www.bestcigarhumidor.com';

const vercel = JSON.parse(await fs.readFile(path.join(rootDir, 'vercel.json'), 'utf8'));
if (vercel.cleanUrls !== true) throw new Error('vercel.json must enable cleanUrls.');
for (const rewrite of vercel.rewrites || []) {
  if (rewrite.destination.endsWith('.html')) {
    throw new Error(`cleanUrls rewrite must not include .html: ${rewrite.destination}`);
  }
}

const sourceFiles = [
  path.join(rootDir, 'src', 'components', 'Guides', 'GuideReader.tsx'),
  path.join(rootDir, 'src', 'components', 'Guides', 'GuidesHub.tsx'),
  path.join(rootDir, 'src', 'components', 'Header.tsx'),
];
for (const sourceFile of sourceFiles) {
  const source = await fs.readFile(sourceFile, 'utf8');
  if (source.includes('#/guide/') || source.includes('#/guides')) {
    throw new Error(`Legacy fragment guide URL remains in ${sourceFile}`);
  }
}

const sitemap = await fs.readFile(path.join(distDir, 'sitemap.xml'), 'utf8');
const guideFiles = (await fs.readdir(guideDir)).filter((file) => file.endsWith('.html'));
if (guideFiles.length === 0) throw new Error('No generated guide entry pages found.');

for (const filename of guideFiles) {
  const slug = filename.slice(0, -'.html'.length);
  const canonical = `${expectedOrigin}/guides/${slug}`;
  const html = await fs.readFile(path.join(guideDir, filename), 'utf8');
  if (!html.includes(`<link rel="canonical" href="${canonical}"`)) {
    throw new Error(`Missing canonical metadata for ${slug}`);
  }
  if (!html.includes('"@type":"Article"') || !html.includes('"@type":"BreadcrumbList"')) {
    throw new Error(`Missing Article or BreadcrumbList schema for ${slug}`);
  }
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) {
    throw new Error(`Sitemap is missing ${canonical}`);
  }
}

console.log(`Validated ${guideFiles.length} real guide routes, canonicals, schemas, and sitemap entries.`);
