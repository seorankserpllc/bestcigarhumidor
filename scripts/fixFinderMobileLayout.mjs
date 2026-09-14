import fs from 'node:fs';

const replaceExact = (file, replacements) => {
  let source = fs.readFileSync(file, 'utf8');
  for (const [from, to] of replacements) {
    if (!source.includes(from)) throw new Error(`Expected text not found in ${file}: ${from.slice(0, 100)}`);
    source = source.replace(from, to);
  }
  fs.writeFileSync(file, source);
};

replaceExact('src/App.tsx', [[
`Answer a few simple questions about your collection, your room, and your budget. We’ll show you top-rated ready-made products and practical DIY options for your needs.`,
`Tell us about your cigars, your room, and your budget. We’ll show you clear ready-made and DIY matches.`
]]);

replaceExact('src/components/Wizard/HumidorWizard.tsx', [[
`        <div className="flex flex-wrap gap-2">`,
`        <div className="w-full min-w-0 grid grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-wrap">`
]]);

const cssFile = 'src/index.css';
let css = fs.readFileSync(cssFile, 'utf8');
css = css.replace(
  `.finder-lounge-hero__content { position: relative; z-index: 2; min-height: 540px; max-width: 690px;`,
  `.finder-lounge-hero__content { position: relative; z-index: 2; width: 100%; min-height: 540px; max-width: 690px;`
);
css = css.replace(
  `@media (max-width: 640px) { .finder-lounge-hero { margin-inline: 12px;`,
  `.finder-lounge-hero__content > * { max-width: 100%; }\n+@media (max-width: 640px) { .finder-lounge-hero { width: calc(100% - 24px); margin-inline: 12px;`
);
fs.writeFileSync(cssFile, css);
