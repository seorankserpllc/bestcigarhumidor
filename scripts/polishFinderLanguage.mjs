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
`We’ll show you the best ready-made humidors and practical DIY options for your needs.`,
`We’ll show you top-rated ready-made products and practical DIY options for your needs.`
]]);

replaceExact('src/utils/matchingEngine.ts', [[
`Your focus on mobility and portable smoking points directly to a rugged, crushproof travel humidor.`,
`You plan to take cigars with you, so a compact hard travel case is the clearest fit.`
], [
`With a targeted collection of ~\${Math.round(targetCapacity)} cigars, a compact desktop or sealed container gives you maximum freshness without wasted dead space.`,
`With room for about \${Math.round(targetCapacity)} cigars, a compact humidor or tight storage container should give you enough space without being oversized.`
], [
`For 30-90 sticks, a 7L Tupperdor, acrylic humidor, or standard wooden desktop chest represents the sweet spot for easy access and organization.`,
`For 30–90 cigars, a medium airtight container, acrylic humidor, or wood desktop humidor offers useful space without taking over the room.`
], [
`Holding ~\${Math.round(targetCapacity)} cigars is the inflection point where traditional wooden boxes become cramped and electric wineadors or coolidors deliver vastly superior stability.`,
`A collection of about \${Math.round(targetCapacity)} cigars needs more room than most desktop boxes, so a larger cabinet, electric humidor, or cooler setup makes more sense.`
], [
`A 250-600 stick collection demands serious cubic volume. Insulated coolidors and high-capacity 48L wineadors shine for storing multiple factory boxes.`,
`A collection of 250–600 cigars needs substantial shelf space. Larger electric humidors, cabinets, and cooler setups are easier to organize.`
], [
`A collection exceeding 600 cigars requires dedicated architectural storage: either a large furniture cabinet with active micro-fan humidification or high-volume marine coolidors.`,
`More than 600 cigars calls for dedicated storage, such as a large cabinet or multiple high-capacity containers.`
], [
`Storing original factory cigar boxes requires deep flat shelf footprints that typical desktop humidors cannot accommodate.`,
`Full cigar boxes need deeper, flatter shelf space than most desktop humidors provide.`
]]);
