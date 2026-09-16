import fs from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';

const siteOrigin = 'https://www.bestcigarhumidor.com';
const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');

function escapeAttribute(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function replaceMeta(html, attribute, name, content) {
  const pattern = new RegExp(`<meta\\s+${attribute}="${name}"\\s+content="[^"]*"\\s*\\/?>`, 'i');
  const tag = `<meta ${attribute}="${name}" content="${escapeAttribute(content)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function addHeadMarkup(html, markup) {
  return html.replace('</head>', `${markup}\n  </head>`);
}

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

function guideHtml(baseHtml, guide, products) {
  const canonicalUrl = `${siteOrigin}/guides/${guide.slug}`;
  const title = `${guide.title} | Best Cigar Humidor`;
  const description = guide.subtitle || guide.excerpt;
  const imageUrl = `${siteOrigin}/finder-lounge-original.png`;
  const wordCount = guide.sections
    .map((section) => section.contentMarkdown)
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        headline: guide.title,
        description,
        url: canonicalUrl,
        mainEntityOfPage: canonicalUrl,
        image: imageUrl,
        datePublished: guide.publishedDate,
        dateModified: guide.reviewedDate,
        articleSection: guide.categoryLabel,
        wordCount,
        author: { '@type': 'Organization', name: guide.author },
        publisher: {
          '@type': 'Organization',
          name: 'Best Cigar Humidor',
          url: siteOrigin,
          logo: { '@type': 'ImageObject', url: `${siteOrigin}/logo.svg` },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteOrigin },
          { '@type': 'ListItem', position: 2, name: 'Editorial Guides', item: `${siteOrigin}/guides` },
          { '@type': 'ListItem', position: 3, name: guide.title, item: canonicalUrl },
        ],
      },
    ],
  };

  if (guide.comparisonRows?.length) {
    schema['@graph'].push({
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: guide.comparisonRows.length,
      itemListElement: guide.comparisonRows.map((row, index) => {
        const product = products.find(item => item.id === row.productId);
        if (!product) throw new Error('Unknown guide comparison product: ' + row.productId);
        return {
          '@type': 'ListItem',
          position: index + 1,
          name: product.name,
          url: siteOrigin + '/product/' + product.slug,
        };
      }),
    });
  }
  if (guide.faqs?.length) {
    schema['@graph'].push({
      '@type': 'FAQPage',
      mainEntity: guide.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }
  let html = baseHtml.replace(/<title>.*?<\/title>/i, `<title>${escapeAttribute(title)}</title>`);
  html = replaceMeta(html, 'name', 'description', description);
  html = replaceMeta(html, 'property', 'og:title', title);
  html = replaceMeta(html, 'property', 'og:description', description);
  html = replaceMeta(html, 'property', 'og:image', imageUrl);
  html = replaceMeta(html, 'property', 'og:site_name', 'Best Cigar Humidor');
  html = replaceMeta(html, 'property', 'og:type', 'article');
  html = replaceMeta(html, 'property', 'og:url', canonicalUrl);
  html = replaceMeta(html, 'name', 'twitter:card', 'summary_large_image');
  html = replaceMeta(html, 'name', 'twitter:title', title);
  html = replaceMeta(html, 'name', 'twitter:description', description);
  html = replaceMeta(html, 'name', 'twitter:image', imageUrl);
  html = addHeadMarkup(html, `    <link rel="canonical" href="${canonicalUrl}" />`);
  html = addHeadMarkup(html, `    <script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`);
  return html;
}

function guidesHubHtml(baseHtml) {
  const canonicalUrl = `${siteOrigin}/guides`;
  const title = 'Cigar Humidor Guides | Best Cigar Humidor';
  const description = 'Independent cigar-storage guides covering humidor selection, humidity, temperature, materials, travel, maintenance, and practical DIY options.';
  let html = baseHtml.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  html = replaceMeta(html, 'name', 'description', description);
  html = replaceMeta(html, 'property', 'og:title', title);
  html = replaceMeta(html, 'property', 'og:description', description);
  html = replaceMeta(html, 'property', 'og:url', canonicalUrl);
  html = addHeadMarkup(html, `    <link rel="canonical" href="${canonicalUrl}" />`);
  return html;
}

const guides = await loadData('guides.ts', 'CIGAR_GUIDES');
const products = await loadData('products.ts', 'AMAZON_PRODUCTS');
const baseHtml = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
const guidesDir = path.join(distDir, 'guides');
await fs.mkdir(guidesDir, { recursive: true });

await fs.writeFile(path.join(distDir, 'guides.html'), guidesHubHtml(baseHtml));
for (const guide of guides) {
  await fs.writeFile(path.join(guidesDir, `${guide.slug}.html`), guideHtml(baseHtml, guide, products));
}

const sitemapEntries = [
  { url: siteOrigin, lastmod: new Date().toISOString().slice(0, 10) },
  { url: `${siteOrigin}/guides`, lastmod: new Date().toISOString().slice(0, 10) },
  ...guides.map((guide) => ({
    url: `${siteOrigin}/guides/${guide.slug}`,
    lastmod: guide.reviewedDate,
  })),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(({ url, lastmod }) => `  <url><loc>${url}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}
</urlset>
`;
await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap);

console.log(`Generated ${guides.length} crawlable guide pages and sitemap.xml.`);
