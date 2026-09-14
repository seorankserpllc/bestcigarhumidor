import fs from 'node:fs';

const replaceExact = (file, replacements) => {
  let source = fs.readFileSync(file, 'utf8');
  for (const [from, to] of replacements) {
    if (!source.includes(from)) throw new Error(`Expected text not found in ${file}: ${from.slice(0, 100)}`);
    source = source.replace(from, to);
  }
  fs.writeFileSync(file, source);
};

replaceExact('src/components/Wizard/HumidorWizard.tsx', [[
`import type { QuizAnswers, ClimateZone, ElevationTier, RoomPlacement, StorageFormat, ControlPreference, BuildPreference } from '../../types/humidor';`,
`import type { QuizAnswers, ClimateZone, RoomPlacement, StorageFormat, ControlPreference, BuildPreference } from '../../types/humidor';`
]]);

replaceExact('src/components/Results/ResultsView.tsx', [[
`    primaryMatchScore,
`, ``
], [
`case 'tupperdor': return 'The Airtight Tupperdor (DIY Build)';`, `case 'tupperdor': return 'Airtight storage container';`
], [
`case 'acrylic': return 'Modern Acrylic Display Humidor';`, `case 'acrylic': return 'Clear acrylic humidor';`
], [
`case 'desktop_wood': return 'Artisan Spanish Cedar Desktop Humidor';`, `case 'desktop_wood': return 'Classic wood desktop humidor';`
], [
`case 'electric_wineador': return 'Smart Electric Wineador (Climate Controlled)';`, `case 'electric_wineador': return 'Temperature-controlled humidor';`
], [
`case 'coolidor': return 'The Heavy-Duty Marine Coolidor (DIY Build)';`, `case 'coolidor': return 'High-capacity cooler setup';`
], [
`case 'cabinet': return 'Luxury Furniture Tower Cabinet';`, `case 'cabinet': return 'Large furniture-style cabinet';`
], [
`case 'travel_case': return 'Rugged Crushproof Travel Armor';`, `case 'travel_case': return 'Hard travel humidor';`
], [
`default: return 'Specialized Cigar Humidor';`, `default: return 'Cigar humidor';`
], [
`                <span>Top Match: {primaryMatchScore}% Compatibility</span>`, `                <span>Best fit for your answers</span>`
], [
`                Engineered for your climate & collection`, `                Chosen for your collection, room, and budget`
], [
`              Target Boveda RH`, `              Starting humidity level`
], [
`              {climateAnalysis.moldBeetleRisk === 'High' ? '⚠️ High Beetle Guard' : 'Optimal Flavor Burn'}`, `              Verify with a calibrated hygrometer`
], [
`            Climate & Altitude Physics Advisory`, `            What to know about your room`
], [
`              Elevation Impact`, `              Elevation context`
], [
`              Regional Ambient Atmosphere`, `              Room climate`
], [
`              Beetle & Mold Risk:`, `              Storage risk:`
], [
`              The Decision: Buy Turnkey vs. Build DIY`, `              Your two best paths`
], [
`                    Option A: Buy Turnkey`, `                    Ready-made option`
], [
`                  <span className="text-xs text-stone-400 font-medium">Ready Out of the Box</span>`, `                  <span className="text-xs text-stone-400 font-medium">Little or no assembly</span>`
], [
`                    Check Price on Amazon`, `                    Top product`
], [
`<span>({topBuyProduct.reviewCount.toLocaleString()} Amazon reviews)</span>`, `<span>({topBuyProduct.reviewCount.toLocaleString()} retailer reviews)</span>`
], [
`<span>Read Full In-Depth Review & Lab Scorecard</span>`, `<span>Read our full review</span>`
], [
`<span>Check Price on Amazon</span>`, `<span>Check current price</span>`
], [
`                    Option B: Build DIY`, `                    DIY option`
], [
`                  <span className="text-xs text-emerald-400 font-semibold">100% Airtight Seal</span>`, `                  <span className="text-xs text-emerald-400 font-semibold">Strong gasket seal</span>`
], [
`<span className="text-xs text-stone-400 block">Total BOM Cost</span>`, `<span className="text-xs text-stone-400 block">Estimated cost</span>`
], [
`                      Required Amazon Parts:`, `                      What you’ll need:`
], [
`<span>Open Full DIY Assembly Blueprint & Shopping Cart</span>`, `<span>Open the step-by-step build guide</span>`
], [
`              Day-One Setup Accessories Kit`, `              What you need to get started`
], [
`              A humidor without accurate humidity control and monitoring is just a wooden box. These accessories ensure perfect smokeability.`, `              These basics help you set up the humidor and keep an eye on its conditions.`
], [
`<span>Retake Quiz & Adjust Parameters</span>`, `<span>Change my answers</span>`
], [
`<span>Explore All {primaryArchetype.replace('_', ' ')} Models</span>`, `<span>See more options</span>`
]]);

replaceExact('src/utils/matchingEngine.ts', [[
`  // 3. Climate & Elevation Scoring
  const isHighAltitude = answers.elevationTier === 'high_altitude' || answers.elevationTier === 'extreme_altitude';

  if (isHighAltitude) {
    scores.tupperdor += 25;
    scores.electric_wineador += 25;
    scores.acrylic += 20;
    scores.desktop_wood -= 25;
    whyThisChoice.push('At high altitude, thinner air and low moisture vapor pressure cause wooden desktop humidors to transpire rapidly. Airtight gaskets and electric seals prevent moisture leaks.');
  }

`,
`  // 3. Room climate scoring. Elevation is context, not an automatic RH correction.
`
], [
`      whyThisChoice.push('Living in a hot/humid climate without central AC creates severe tobacco beetle risk (>72°F). An electric humidor with active thermoelectric cooling is a crucial safeguard.');`,
`      whyThisChoice.push('Your room may stay warm for long periods, so a temperature-controlled humidor is worth considering. Check the model’s operating range before buying.');`
], [
`    whyThisChoice.push('Desert ambient air (<20% RH) relentlessly saps moisture from wood. Hermetically sealed containers or electric wineadors eliminate constant refilling.');`,
`    whyThisChoice.push('Dry indoor air makes a dependable gasket especially useful and reduces how often humidity control needs attention.');`
], [
`    whyThisChoice.push('Garages suffer dramatic thermal swings that ruin cigars. Only insulated marine coolers or dual heating/cooling electric wineadors provide true thermal protection.');`,
`    whyThisChoice.push('Because garage temperatures can swing widely, verify the room range first and choose a suitably rated insulated or temperature-controlled option.');`
], [
`      whyThisChoice.push('Your living space warrants a high-end showpiece: fine Spanish cedar craftsmanship or an illuminated stainless-steel wineador cabinet.');`,
`      whyThisChoice.push('Because the humidor will be on display, the recommendation gives more weight to furniture-quality wood, acrylic, or a finished cabinet.');`
], [
`    whyThisChoice.push('You indicated a preference for "set-and-forget" convenience: 100% airtight seals paired with Boveda 2-way packs require virtually zero maintenance.');`,
`    whyThisChoice.push('You prefer a low-maintenance setup, so the recommendation favors a tight gasket and simple humidity packs.');`
], [
`    whyThisChoice.push('Your preference for maximum value / DIY building makes a custom Tupperdor or Coolidor build unbeatable, delivering commercial performance at 75% lower cost.');`,
`    whyThisChoice.push('You prefer value or a DIY route, so the recommendation favors simple containers and coolers with dependable gasket seals.');`
], [
`  // Recommended Buy Products
  const recommendedBuyProducts = AMAZON_PRODUCTS.filter(
    p => p.category === primaryArchetype || (primaryArchetype === 'tupperdor' && p.category === 'acrylic')
  ).slice(0, 3);`,
`  // Ready-made products: prioritize budget fit, usable capacity, rating, and review depth.
  const recommendedBuyProducts = AMAZON_PRODUCTS.filter(
    p => p.category === primaryArchetype || (primaryArchetype === 'tupperdor' && p.category === 'acrylic')
  ).sort((a, b) => {
    const aBudgetFit = a.price <= answers.budgetMax ? 1 : 0;
    const bBudgetFit = b.price <= answers.budgetMax ? 1 : 0;
    if (aBudgetFit !== bBudgetFit) return bBudgetFit - aBudgetFit;
    const aCapacityFit = a.capacitySticks >= targetCapacity ? 1 : 0;
    const bCapacityFit = b.capacitySticks >= targetCapacity ? 1 : 0;
    if (aCapacityFit !== bCapacityFit) return bCapacityFit - aCapacityFit;
    if (a.rating !== b.rating) return b.rating - a.rating;
    return b.reviewCount - a.reviewCount;
  }).slice(0, 3);`
], [
`    ? \`Building a custom \${recommendedDIYBlueprint?.title} saves you roughly $\${costDiff.toFixed(0)} while delivering equal or superior humidity retention compared to retail alternatives.\`
    : \`An off-the-shelf \${recommendedBuyProducts[0]?.name || 'Humidor'} is recommended for your aesthetic and storage desires, but building a DIY alternative can cut your upfront costs by $\${costDiff.toFixed(0)}.\`;`,
`    ? \`A simple \${recommendedDIYBlueprint?.title} may save about $\${costDiff.toFixed(0)} compared with the ready-made option.\`
    : \`A ready-made \${recommendedBuyProducts[0]?.name || 'humidor'} best matches your preference for appearance and convenience. The DIY option may save about $\${costDiff.toFixed(0)}.\`;`
], [
`        'Finished, elegant furniture presentation ready to display in living spaces',
        'Built-in Spanish cedar trays and integrated digital displays',
        'Zero assembly time required; backed by manufacturer warranty'`,
`        'Finished appearance that is ready to display',
        'Included trays and controls vary by model',
        'Little or no assembly, with manufacturer support'`
], [
`        '100% hermetic seal that never warps, shrinks, or leaks moisture',`, `        'A dependable gasket seal with fewer moving parts',`
]]);

const cssFile = 'src/index.css';
let css = fs.readFileSync(cssFile, 'utf8');
if (!css.includes('.finder-lounge-hero {')) {
  css += `

/* Humidor Finder — warm leather-club atmosphere */
.finder-lounge-hero { position: relative; min-height: 540px; overflow: hidden; border-radius: 30px; border: 1px solid rgba(180, 83, 9, 0.42); box-shadow: 0 28px 80px rgba(0, 0, 0, 0.62), inset 0 0 0 1px rgba(251, 191, 36, 0.05); }
.finder-lounge-hero__image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 68%; filter: saturate(0.82) contrast(1.08) brightness(0.72); }
.finder-lounge-hero__shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(10, 6, 4, 0.98) 0%, rgba(17, 9, 5, 0.9) 44%, rgba(20, 10, 5, 0.34) 72%, rgba(6, 4, 3, 0.22) 100%), linear-gradient(0deg, rgba(9, 5, 3, 0.72), transparent 45%); }
.finder-lounge-hero__content { position: relative; z-index: 2; min-height: 540px; max-width: 690px; padding: clamp(36px, 7vw, 86px); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 20px; text-align: left; }
.finder-trust-pill { display: inline-flex; align-items: center; gap: 6px; padding: 7px 10px; border: 1px solid rgba(217, 119, 6, 0.42); border-radius: 999px; background: rgba(16, 9, 6, 0.68); backdrop-filter: blur(8px); }
.finder-trust-pill::before { content: ''; width: 5px; height: 5px; border-radius: 99px; background: #f59e0b; box-shadow: 0 0 10px rgba(245, 158, 11, 0.8); }
.finder-primary-button { display: inline-flex; align-items: center; gap: 12px; padding: 13px 18px; border-radius: 12px; color: #1c0d06; background: linear-gradient(135deg, #f4c76c, #c87a24); border: 1px solid rgba(254, 243, 199, 0.5); font-size: 14px; font-weight: 800; box-shadow: 0 12px 30px rgba(78, 35, 8, 0.44); transition: transform 160ms ease, filter 160ms ease; }
.finder-primary-button:hover { transform: translateY(-1px); filter: brightness(1.08); }
.finder-card { background: radial-gradient(circle at 84% 0%, rgba(158, 73, 29, 0.17), transparent 31%), radial-gradient(circle at 14px 14px, rgba(255, 222, 173, 0.025) 1px, transparent 1.5px), linear-gradient(145deg, #21110c, #130b08 62%, #0d0806); background-size: auto, 28px 28px, auto; box-shadow: 0 26px 70px rgba(0, 0, 0, 0.58), inset 0 1px rgba(255, 225, 180, 0.035); }
.finder-wizard button { min-height: 42px; }
.finder-wizard input[type='range'] { accent-color: #d9912b; }
@media (max-width: 640px) { .finder-lounge-hero { margin-inline: 12px; min-height: 570px; border-radius: 22px; } .finder-lounge-hero__image { object-position: 58% center; } .finder-lounge-hero__shade { background: linear-gradient(0deg, rgba(9, 5, 3, 0.98) 0%, rgba(15, 8, 5, 0.88) 58%, rgba(10, 6, 4, 0.45) 100%); } .finder-lounge-hero__content { min-height: 570px; padding: 32px 24px; justify-content: flex-end; } }
`;
  fs.writeFileSync(cssFile, css);
}
