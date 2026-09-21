import type { AmazonProduct } from '../types/humidor';

export const AMAZON_PRODUCTS: AmazonProduct[] = [
  // ================= DESKTOP HUMIDORS =================
  {
    id: 'klaro-renzo',
    slug: 'klaro-renzo-glass-top-humidor-review',
    name: 'Klaro Renzo Glass Top Desktop Humidor with Hydro System',
    brand: 'Klaro by Case Elegance',
    category: 'desktop_wood',
    price: 0, // internal budget ref
    priceBracket: '$$',
    priceTierFormatted: '$$ (Moderate: $50–$120)',
    capacitySticks: 40,
    asin: 'B07GXSVH1H',
    amazonSearchQuery: 'Klaro Renzo Glass Top Desktop Humidor Case Elegance',
    imageUrl: 'https://m.media-amazon.com/images/I/71oos8oKskL._AC_SL1200_.jpg',
    description: 'The standard-bearer for modern desktop wooden humidors. Features an innovative patent-pending Hydro System with custom peg trays and a front digital hygrometer with rubber gasket seal.',
    highlights: ['Embedded Front Digital Hygrometer', 'Spanish Cedar Co-molded Interior', 'Accessory Storage Drawer', 'Includes Hydro Solution'],
    pros: ['Beautiful walnut finish looks majestic on desks', 'Front-facing digital hygrometer eliminates lid-opening', 'Patent-pending Hydro Tray seals better than standard sponges'],
    cons: ['Real-world capacity is 25-35 Churchills/Toros (40 for smaller coronas)', 'Glass top requires proper seasoning patience'],
    bestFor: 'Daily enthusiasts wanting an elegant, modern display piece for home or executive office.',
    sealRating: 7.8,
    dimensions: '9" x 8.5" x 5.5"',
    material: 'Spanish Cedar & Walnut Finish',
    scorecard: {
      sealIntegrity: 7.8,
      thermalStability: 6.5,
      humidityRetention: 8.0,
      craftsmanship: 9.0,
      valueScore: 8.6,
    },
    realWorldCapacity: {
      coronas: 40,
      robustos: 32,
      torosChurchills: 26,
      gordos: 18,
      factoryBoxes: 0,
      notes: 'Advertised as 50-count, but comfortably holds 25-32 standard 50-52 ring gauge cigars with the hydro tray installed.'
    },
    unitSpecificSeasoning: [
      'Unbox unit and do NOT wipe the wood down with wet sponges (this will raise the cedar grain and warp the lid).',
      'Fill the included Hydro Tray reservoir with the provided Klaro Propylene Glycol solution up to the indicator mark.',
      'Close the lid with the digital hygrometer active and allow 10-14 days without opening.',
      'Once the digital gauge reads above 68% RH consistently for 48 hours, load your cigars.'
    ],
    whoShouldBuy: [
      'Smokers with 15-30 premium cigars wanting a handsome living room or desk centerpiece.',
      'Enthusiasts who dislike opening the lid just to check humidity.',
      'Gift buyers looking for an all-in-one package with included accessories drawer and solution.'
    ],
    whoShouldAvoid: [
      'Smokers who purchase full factory boxes of 20-25 cigars (cannot fit boxes).',
      'Residents of arid mountain zones (Denver, 5000+ ft) who want a zero-maintenance airtight seal.'
    ],
    failureModesToWatch: [
      'Front hygrometer battery cover must be firmly pressed in to maintain front bezel seal.',
      'Ensure the silicone gasket around the glass window remains undisturbed during seasonal dusting.'
    ],
    faqs: [
      {
        question: "Does the glass top on the Klaro Renzo leak humidity over time?",
        answer: "The product design uses a sealed glass perimeter, but every wood humidor exchanges some moisture with the room. In a dry climate, calibrate the hygrometer, use enough humidity packs, and watch the first two weeks of readings before trusting the setup.",
        category: 'troubleshooting'
      },
      {
        question: "Is the Klaro Renzo worth it compared to an airtight tupperdor?",
        answer: "If aesthetic presentation, an executive mahogany desk presence, and Spanish cedar aroma are your priorities, the Renzo delivers exceptional value. While a Sistema tupperdor offers 100% airtight hermetic efficiency at a lower cost, the Renzo offers an accessory storage drawer, embedded front-facing digital hygrometer, and beautiful living-space display appeal.",
        category: 'buying_decision'
      },
      {
        question: "Can I use Boveda packs instead of the included Klaro Hydro System?",
        answer: "Yes. While the included Hydro Tray works efficiently with propylene glycol solution, many collectors prefer using two 60g Boveda 69% packs placed at the bottom for completely hands-off, zero-maintenance two-way humidity regulation.",
        category: 'maintenance'
      },
      {
        question: "How many cigars can the Klaro Renzo realistically hold?",
        answer: "Although marketed as a 50-count humidor, in real-world collector scenarios with modern 50–54 ring gauge Robustos and Toros, it comfortably fits 28 to 34 cigars without overcrowding or choking airflow around the humidification tray.",
        category: 'buying_decision'
      },
      {
        question: "Should I wipe the cedar wood down with a damp sponge during seasoning?",
        answer: "Never wipe Spanish cedar with a damp sponge. Direct liquid water causes wood grain lifting, warping of the precision lid lip, and premature mold growth. Season exclusively by allowing the filled Hydro Tray or two 84% Boveda seasoning packs to sit closed for 14 full days.",
        category: 'maintenance'
      },
    ],
    diyAlternativeBlueprintId: 'blueprint-tupperdor-7l',
    relatedGuideSlugs: ['glass-top-humidor-truth-leaks-sealing', 'spanish-cedar-biology-guide', 'best-desktop-humidors']
  },
  {
    id: 'klaro-octodor',
    slug: 'klaro-octodor-large-glass-top-humidor-review',
    name: 'Klaro Octodor Large Glass Top Cigar Humidor with Hydro Tray',
    brand: 'Klaro by Case Elegance',
    category: 'desktop_wood',
    price: 0, // internal budget ref
    priceBracket: '$$$',
    priceTierFormatted: '$$$ (Mid-Tier: $150–$250)',
    capacitySticks: 100,
    asin: 'B082P929XD',
    amazonSearchQuery: 'Klaro Octodor Large Glass Top Humidor Case Elegance',
    imageUrl: 'https://m.media-amazon.com/images/I/818TPGJ5rsL._AC_SL1500_.jpg',
    description: 'A heavy-duty, high-capacity flagship desktop humidor. Boasts an octagon-edged heavy construction, thick Spanish cedar lining, removable cedar tray, and deep lower reservoir.',
    highlights: ['Fits up to 100 sticks', 'Removable Spanish Cedar Tray', 'Recessed Magnetic Hydro Channel', 'Heavy Solid Wood Lid with Gasket'],
    pros: ['Significant weight creates a tight perimeter seal', 'Removable upper tray allows great stick separation', 'Built-in accessory drawer with velvet lining'],
    cons: ['Needs thorough 14-day seasoning due to high cedar mass', 'Heavy footprint requires dedicated credenza space'],
    bestFor: 'Serious collectors wanting a large, stately desktop showpiece without going full electric.',
    sealRating: 8.4,
    dimensions: '13.8" x 10.2" x 7.5"',
    material: 'Spanish Cedar & Piano Finish',
    scorecard: {
      sealIntegrity: 8.4,
      thermalStability: 7.2,
      humidityRetention: 8.5,
      craftsmanship: 9.3,
      valueScore: 8.4,
    },
    realWorldCapacity: {
      coronas: 90,
      robustos: 75,
      torosChurchills: 60,
      gordos: 45,
      factoryBoxes: 0,
      notes: 'Upper cedar tray holds 25-30 robustos while the deep lower reservoir easily accommodates 40-50 cigars.'
    },
    unitSpecificSeasoning: [
      'Place 3x Boveda 84% Seasoning packs inside (or fill both sides of the hydro tray with solution).',
      'Keep closed for a minimum of 14 full days. The dense cedar absorbs approximately 60-80ml of water vapor before reaching equilibrium.',
      'Do not rush this unit: loading cigars early into thirsty cedar will cause wrappers to crack.'
    ],
    whoShouldBuy: [
      'Collectors with 50-75 premium sticks who want an imposing, luxurious credenza centerpiece.',
      'Smokers who want separate upper and lower tiers for mild vs maduro vitolas.'
    ],
    whoShouldAvoid: [
      'Anyone needing to store full wooden factory boxes.',
      'Small apartment dwellers with restricted desk space.'
    ],
    failureModesToWatch: [
      'Ensure the upper wooden tray does not snag the bottom hygrometer cable if modifying accessories.'
    ],
    faqs: [
      {
        question: "How does the Octodor differ from the smaller Renzo desktop?",
        answer: "The Octodor features nearly double the interior cubic volume, heavy octagonal beveled corners, a removable Spanish cedar lift-out tray with slotted dividers, and a recessed magnetic hydro channel in the base that saves valuable cigar storage space.",
        category: 'comparison'
      },
      {
        question: "How many 52+ ring gauge cigars can the Octodor hold comfortably?",
        answer: "Plan on roughly 60–75 standard Toros or Churchills, or up to about 90 smaller coronas. Actual capacity changes with ring gauge, airflow spacing, and how much room the humidification system uses.",
        category: 'buying_decision'
      },
      {
        question: "How long does the Octodor take to season properly?",
        answer: "Due to the thick, dense Spanish cedar lining, the Octodor requires a full 14 days of seasoning. Place 3x Boveda 84% seasoning packs inside (or fill both sides of the hydro tray with solution) and keep the lid shut. Do not rush this process: thirsty cedar will siphon essential oils from your wrappers.",
        category: 'maintenance'
      },
      {
        question: "Does the Octodor come with everything needed to start?",
        answer: "Yes, Klaro packages the Octodor with two bottles of Propylene Glycol Hydro Solution, seasoning crystals, a pre-calibrated digital hygrometer, and a velvet-lined pull-out accessory drawer for lighters and cutters.",
        category: 'buying_decision'
      },
    ],
    diyAlternativeBlueprintId: 'blueprint-tupperdor-7l',
    relatedGuideSlugs: ['glass-top-humidor-truth-leaks-sealing', 'spanish-cedar-biology-guide', 'best-desktop-humidors']
  },
  {
    id: 'woodronic-3drawer',
    slug: 'woodronic-3-drawer-spanish-cedar-cabinet-review',
    name: 'Woodronic 3-Drawer Handmade Spanish Cedar Cabinet Humidor',
    brand: 'Woodronic',
    category: 'desktop_wood',
    price: 0, // internal budget ref
    priceBracket: '$$$',
    priceTierFormatted: '$$$ (Mid-Tier: $120–$200)',
    capacitySticks: 120,
    asin: 'B0CXXNHCP4',
    amazonSearchQuery: 'Woodronic 3 Drawer Handmade Cigar Humidor Cabinet Spanish Cedar',
    imageUrl: 'https://m.media-amazon.com/images/I/61+G+6E22+L._AC_SL1200_.jpg',
    description: 'A vertical desktop cabinet with 3 independent Spanish cedar sliding drawers and acrylic viewing front. Ideal for organizing cigars by brand, strength, or aging date.',
    highlights: ['3 Slide-out Spanish Cedar Drawers', 'Crystal Clear Acrylic Door', 'Accurate Electronic Hygrometer', 'Compact Vertical Footprint'],
    pros: ['Categorize mild, medium, and maduro in separate drawers', 'Vertical orientation saves precious desk real estate', 'Magnetic door closure with perimeter sealing'],
    cons: ['Opening drawers lets air escape faster than top-down boxes', 'Drawers fit standard vitolas; very long Churchills must sit diagonally'],
    bestFor: 'Organizers who want easy access to diverse cigar selections without digging.',
    sealRating: 7.9,
    dimensions: '9.8" x 9.8" x 13.4"',
    material: 'Natural Spanish Cedar & Ebony Finish',
    scorecard: {
      sealIntegrity: 7.9,
      thermalStability: 6.8,
      humidityRetention: 7.8,
      craftsmanship: 8.6,
      valueScore: 8.8,
    },
    realWorldCapacity: {
      coronas: 110,
      robustos: 85,
      torosChurchills: 65,
      gordos: 40,
      factoryBoxes: 0,
      notes: 'Each drawer accommodates approximately 25-30 robustos. Vertical design prevents bottom cigars from being crushed.'
    },
    unitSpecificSeasoning: [
      'Pull out all 3 cedar drawers and place one Boveda 84% pack inside each drawer.',
      'Latch door closed for 14 days.',
      'Replace with one 69% Boveda pack per drawer.'
    ],
    whoShouldBuy: [
      'Smokers who love organizing their collection by wrapper (Connecticut, Habano, Maduro) across distinct drawers.'
    ],
    whoShouldAvoid: [
      'Smokers in desert regions who open the humidor 5+ times per day.'
    ],
    failureModesToWatch: [
      'Ensure drawer divider pins are seated flush so drawers do not rub against the magnetic front door.'
    ],
    diyAlternativeBlueprintId: 'blueprint-tupperdor-7l',
    relatedGuideSlugs: ['spanish-cedar-biology-guide', 'glass-top-humidor-truth-leaks-sealing']
  },

  // ================= ELECTRIC / WINEADORS =================
  {
    id: 'needone-23l',
    slug: 'needone-23l-electric-cigar-humidor-review',
    name: 'NEEDONE 23L Electric Cigar Humidor with Cooling Control',
    brand: 'NEEDONE',
    category: 'electric_wineador',
    price: 0,
    priceBracket: '$$$',
    priceTierFormatted: '$$$ (Mid-range electric)',
    capacitySticks: 150,
    asin: 'B09DCCYYKP',
    amazonSearchQuery: 'NEEDONE 23L Electric Cigar Humidor Thermoelectric Cooling B09DCCYYKP',
    imageUrl: 'https://m.media-amazon.com/images/I/61JV866G-5L._AC_SL1500_.jpg',
    description: 'An established 23L thermoelectric cabinet with cooling control, Spanish cedar shelves and a digital hygrometer. It does not provide active heating or automatic humidity control.',
    highlights: ['23L cabinet', 'Thermoelectric cooling', 'Spanish cedar shelves and drawer', 'Digital temperature display'],
    pros: ['Longer marketplace track record than most electric alternatives', 'Useful size for a growing collection', 'Quiet thermoelectric cooling'],
    cons: ['Cooling only—not a heater', 'Humidity still requires packs or another humidifier', 'Advertised capacity assumes smaller cigars'],
    bestFor: 'Indoor rooms that run warm and collections of roughly 75–125 larger cigars.',
    sealRating: 8.6,
    electricFeatures: { heating: false, cooling: true, tempRange: '54°F–74°F (listed)', activeHumidity: false },
    scorecard: { sealIntegrity: 8.6, thermalStability: 8.8, humidityRetention: 8.4, craftsmanship: 8.4, valueScore: 8.7 },
    diyAlternativeBlueprintId: 'blueprint-converted-wineador',
    relatedGuideSlugs: ['electric-wineador-masterclass-heating-cooling', 'best-electric-cigar-humidors']
  },
  {
    id: 'kingchii-33l',
    slug: 'kingchii-33l-electric-cigar-humidor-review',
    name: 'KingChii 33L Electric Cigar Humidor',
    brand: 'KingChii',
    category: 'electric_wineador',
    price: 0,
    priceBracket: '$$$',
    priceTierFormatted: '$$$ (Mid-range electric)',
    capacitySticks: 250,
    asin: 'B0B93HN22D',
    amazonSearchQuery: 'KingChii 33L Electric Cigar Humidor B0B93HN22D',
    imageUrl: 'https://m.media-amazon.com/images/I/61NyVcJO0hL._AC_SL1200_.jpg',
    description: 'A 33L temperature-control cabinet with four Spanish cedar shelves and a digital hygrometer. KingChii advertises both heating and cooling for this model; humidity still needs separate monitoring and management.',
    highlights: ['33L interior', 'Four cedar shelves', 'Manufacturer-listed heating and cooling', 'Advertised 250-count capacity'],
    pros: ['Strong balance of capacity and footprint', 'Current listing has a meaningful review history', 'Removable shelf layout'],
    cons: ['Verify the room fits the manufacturer operating limits', 'Requires separate humidity control', 'Real capacity falls with larger ring gauges and boxes'],
    bestFor: 'Collectors who want a medium electric cabinet without moving to furniture-sized storage.',
    sealRating: 8.5,
    electricFeatures: { heating: true, cooling: true, tempRange: '54°F–74°F (maker-listed)', activeHumidity: false },
    scorecard: { sealIntegrity: 8.5, thermalStability: 8.7, humidityRetention: 8.3, craftsmanship: 8.2, valueScore: 8.8 },
    diyAlternativeBlueprintId: 'blueprint-converted-wineador',
    relatedGuideSlugs: ['electric-wineador-masterclass-heating-cooling', 'best-electric-cigar-humidors']
  },
  {
    id: 'kingchii-16l',
    slug: 'kingchii-16l-electric-cigar-humidor-review',
    name: 'KingChii 16L Electric Cigar Humidor',
    brand: 'KingChii',
    category: 'electric_wineador',
    price: 0,
    priceBracket: '$$',
    priceTierFormatted: '$$ (Compact electric)',
    capacitySticks: 100,
    asin: 'B0BQJ5H5YT',
    amazonSearchQuery: 'KingChii 16L Electric Cigar Humidor B0BQJ5H5YT',
    imageUrl: 'https://m.media-amazon.com/images/I/61b2IOQJoNL._AC_SL1500_.jpg',
    description: 'A compact 16L cabinet with two Spanish cedar storage layers. KingChii advertises heating and cooling for this model; humidity still needs separate monitoring and management.',
    highlights: ['Compact 16L cabinet', 'Two cedar storage layers', 'Manufacturer-listed heating and cooling', 'Advertised 100-count capacity'],
    pros: ['Smaller footprint for an office or bedroom', 'Established listing within the KingChii range', 'Simple temperature control'],
    cons: ['Verify the room fits the manufacturer operating limits', 'No active humidity control', 'Best with fewer than the advertised 100 large cigars'],
    bestFor: 'Smaller indoor collections that need temperature control in a compact cabinet.',
    sealRating: 8.4,
    electricFeatures: { heating: true, cooling: true, tempRange: '54°F–74°F (maker-listed)', activeHumidity: false },
    scorecard: { sealIntegrity: 8.4, thermalStability: 8.6, humidityRetention: 8.2, craftsmanship: 8.1, valueScore: 8.5 },
    diyAlternativeBlueprintId: 'blueprint-converted-wineador',
    relatedGuideSlugs: ['electric-wineador-masterclass-heating-cooling', 'best-electric-cigar-humidors']
  },

  // ================= ACRYLIC & AIRTIGHT =================
  {
    id: 'prestige-aj25-acrylic',
    slug: 'prestige-aj25-acrylic-humidor-review',
    name: 'Prestige Import Group AJ25 Acrylic Humidor Jar',
    brand: 'Prestige Import Group',
    category: 'acrylic',
    price: 0,
    priceBracket: '$',
    priceTierFormatted: '$ (Budget airtight storage)',
    capacitySticks: 25,
    asin: 'B00J21X9IS',
    amazonSearchQuery: 'Prestige Import Group AJ25 Acrylic Humidor B00J21X9IS',
    imageUrl: 'https://m.media-amazon.com/images/I/71irYnK9tkL._AC_SL1200_.jpg',
    description: 'A proven clear acrylic jar with a gasketed lid, humidifier and Spanish cedar lining on the bottom. Its long marketplace history makes it a safer recommendation than newer, lightly reviewed acrylic boxes.',
    highlights: ['Clear acrylic body', 'Spanish cedar bottom lining', 'Compact 25-count format', 'No wood-box seasoning required'],
    pros: ['Simple airtight design', 'Long review history', 'Easy to inspect without opening'],
    cons: ['Included humidifier can be replaced with a two-way pack', 'Capacity depends heavily on cigar size'],
    bestFor: 'Beginners and small collections that prioritize a dependable seal over furniture styling.',
    sealRating: 9.3,
    material: 'Acrylic with Spanish cedar bottom lining',
    scorecard: { sealIntegrity: 9.3, thermalStability: 6.8, humidityRetention: 9.2, craftsmanship: 7.8, valueScore: 9.0 },
    diyAlternativeBlueprintId: 'blueprint-tupperdor-7l',
    relatedGuideSlugs: ['science-of-airtight-tupperdors']
  },
  {
    id: 'xifei-acrylic-jar',
    slug: 'xifei-acrylic-humidor-jar-review',
    name: 'XIFEI Acrylic Humidor Jar with Hygrometer',
    brand: 'XIFEI',
    category: 'acrylic',
    price: 0,
    priceBracket: '$',
    priceTierFormatted: '$ (Budget airtight storage)',
    capacitySticks: 18,
    asin: 'B07H244RDZ',
    amazonSearchQuery: 'XIFEI Acrylic Humidor Jar B07H244RDZ',
    imageUrl: 'https://m.media-amazon.com/images/I/61MDeIjeJML._AC_SL1200_.jpg',
    description: 'A compact clear acrylic jar with a clasp seal, humidifier and hygrometer. It is one of the most established airtight cigar jars currently listed on Amazon.',
    highlights: ['Clasp-and-gasket seal', 'Clear acrylic body', 'Integrated hygrometer', 'About 18-cigar advertised capacity'],
    pros: ['Large marketplace review history', 'Compact and easy to monitor', 'Good low-cost secondary storage'],
    cons: ['Small capacity', 'Calibrate the included hygrometer before relying on it'],
    bestFor: 'Casual smokers and small office or travel-prep collections.',
    sealRating: 9.2,
    scorecard: { sealIntegrity: 9.2, thermalStability: 6.5, humidityRetention: 9.1, craftsmanship: 7.5, valueScore: 9.2 },
    diyAlternativeBlueprintId: 'blueprint-tupperdor-7l',
    relatedGuideSlugs: ['science-of-airtight-tupperdors', 'best-desktop-humidors']
  },

  // ================= TRAVEL HUMIDORS =================
  {
    id: 'cigar-caddy-10',
    slug: 'cigar-caddy-10-travel-humidor-review',
    name: 'Cigar Caddy 3240 Ten-Cigar Travel Humidor',
    brand: 'Cigar Caddy',
    category: 'travel_case',
    price: 0,
    priceBracket: '$$',
    priceTierFormatted: '$$ (Rugged travel case)',
    capacitySticks: 10,
    asin: 'B001CRWDBE',
    amazonSearchQuery: 'Cigar Caddy 3240 10 Cigar Travel Humidor B001CRWDBE',
    imageUrl: 'https://m.media-amazon.com/images/I/71NZ0AK2yUL._AC_SL1200_.jpg',
    description: 'A long-running hard travel case with an airtight seal, crush-resistant shell and foam protection for up to ten Churchill-sized cigars.',
    highlights: ['Ten-cigar format', 'Water-resistant hard shell', 'Airtight perimeter seal', 'Protective foam interior'],
    pros: ['Established listing and proven form factor', 'Compact enough for carry-on luggage', 'Strong physical protection'],
    cons: ['Foam interior is less elegant than cedar', 'Use a small two-way pack instead of overfilling the humidifier disc'],
    bestFor: 'Flights, golf days and weekend trips with five to ten cigars.',
    sealRating: 9.6,
    scorecard: { sealIntegrity: 9.6, thermalStability: 7.4, humidityRetention: 9.5, craftsmanship: 8.5, valueScore: 8.8 },
    relatedGuideSlugs: ['best-travel-humidors', 'travelers-cigar-handbook-tsa-torch-pressure']
  },
  {
    id: 'flauno-travel-5',
    slug: 'flauno-five-cigar-travel-humidor-review',
    name: 'Flauno Five-Cigar Waterproof Travel Humidor',
    brand: 'Flauno',
    category: 'travel_case',
    price: 0,
    priceBracket: '$',
    priceTierFormatted: '$ (Compact travel kit)',
    capacitySticks: 5,
    asin: 'B0956TGQ5G',
    amazonSearchQuery: 'Flauno Travel Cigar Humidor Case B0956TGQ5G',
    imageUrl: 'https://m.media-amazon.com/images/I/71lDNvvHBVL._AC_SL1200_.jpg',
    description: 'A compact waterproof-style hard case with foam protection, a humidifier disc and an included cutter. It currently combines strong buyer feedback with a substantial review history.',
    highlights: ['Five-cigar capacity', 'Crush-resistant hard shell', 'Airtight seal', 'Included cutter'],
    pros: ['Top current search result for rugged travel humidors', 'Easy size for a day bag', 'Good value as a starter travel kit'],
    cons: ['Only holds about five cigars', 'Accessory quality is secondary to the case itself'],
    bestFor: 'Short trips and smokers who carry only a few cigars at a time.',
    sealRating: 9.5,
    scorecard: { sealIntegrity: 9.5, thermalStability: 7.2, humidityRetention: 9.4, craftsmanship: 8.2, valueScore: 9.1 },
    relatedGuideSlugs: ['best-travel-humidors', 'travelers-cigar-handbook-tsa-torch-pressure']
  },
  {
    id: 'cigar-caddy-40',
    slug: 'cigar-caddy-40-travel-humidor-review',
    name: 'Cigar Caddy 40-Cigar Waterproof Travel Humidor',
    brand: 'Cigar Caddy',
    category: 'travel_case',
    price: 0,
    priceBracket: '$$',
    priceTierFormatted: '$$ (Large rugged travel case)',
    capacitySticks: 40,
    asin: 'B0055QM9NA',
    amazonSearchQuery: 'Cigar Caddy 40 Cigar Travel Humidor B0055QM9NA',
    imageUrl: 'https://m.media-amazon.com/images/I/71amnSxKg4L._AC_SL1200_.jpg',
    description: 'A large black-matte hard travel case. The current listing and maker identify a 40-cigar capacity, ABS molded shell, foam interior, locking clasps, stainless-steel latch hinges and a humidifier disc in the lid.',
    highlights: ['Listing claim: up to 40 cigars', 'ABS molded hard case', 'Foam interior', 'One humidifier disc in the lid'],
    pros: ['Useful capacity tier for groups and longer trips', 'Maker lists replaceable locking clasps and stainless-steel latch hinges', 'Handle and large format simplify carrying a shared selection'],
    cons: ['Large 12.25 × 9.75 × 5.375-inch footprint', 'Passive case does not regulate temperature', 'Usable count falls with thick, long or tubed cigars'],
    bestFor: 'Group trips and extended travel where five- or ten-cigar cases are genuinely too small.',
    sealRating: 0,
    dimensions: '12.25" × 9.75" × 5.375" (maker-listed)',
    material: 'ABS molded plastic with foam interior (listing information)',
    relatedGuideSlugs: ['best-travel-humidors', 'travelers-cigar-handbook-tsa-torch-pressure']
  },

  // ================= CABINET HUMIDORS =================
  {
    id: 'marvero-300-cabinet',
    slug: 'marvero-300-count-walnut-cigar-cabinet-review',
    name: 'Marvero 300-Count Walnut Cigar Humidor Cabinet',
    brand: 'Marvero',
    category: 'cabinet',
    price: 0,
    priceBracket: '$$$$',
    priceTierFormatted: '$$$$ (Large wood cabinet)',
    capacitySticks: 300,
    asin: 'B0CRB2P122',
    amazonSearchQuery: 'Marvero 300 Count Walnut Cigar Humidor Cabinet B0CRB2P122',
    imageUrl: 'https://m.media-amazon.com/images/I/81cVaWnLUEL._AC_SL1200_.jpg',
    description: 'A large non-electric walnut-finish cabinet with cedar drawers, a digital hygrometer and included humidification accessories. It replaces the previous listing, which incorrectly linked to a small desktop model.',
    highlights: ['Advertised 300-count capacity', 'Cedar drawer storage', 'Digital hygrometer', 'Furniture-style walnut finish'],
    pros: ['Meaningful marketplace review history for a large cabinet', 'Better organization than a single deep box', 'Suitable for a dedicated lounge'],
    cons: ['Not temperature controlled', 'Advertised capacity assumes smaller cigars', 'Included humidifiers should be monitored with a calibrated gauge'],
    bestFor: 'Large indoor collections kept in a temperature-stable room.',
    sealRating: 8.2,
    material: 'Walnut-finish cabinet with cedar drawers',
    scorecard: { sealIntegrity: 8.2, thermalStability: 8.0, humidityRetention: 8.1, craftsmanship: 8.6, valueScore: 8.4 },
    diyAlternativeBlueprintId: 'blueprint-cabinet-conversion',
    relatedGuideSlugs: ['spanish-cedar-biology-guide']
  },

  // ================= DIY PARTS =================
  {
    id: 'sistema-236oz',
    slug: 'sistema-236oz-7l-airtight-container-tupperdor-core-review',
    name: 'Sistema Klip It Collection 236 Oz (7.0 Liter) Airtight Container',
    brand: 'Sistema',
    category: 'diy_part',
    subCategory: 'tupperdor_core',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $25)',
    capacitySticks: 80,
    asin: 'B00284AG5U',
    amazonSearchQuery: 'Sistema 1870 Klip It Collection 236 Ounce 7.0 Liter Food Storage',
    imageUrl: 'https://m.media-amazon.com/images/I/61a5OLd878L._AC_SL1200_.jpg',
    description: 'The undisputed king of DIY Tupperdors. BPA-free food grade polypropylene with 4 heavy-duty locking clips and an inner flexible rubber gasket. Dimensions fit two standard Spanish cedar trays perfectly.',
    highlights: ['236 oz / 7.0 Liter Volume', 'Patented Easy-Locking Clips', 'Flexible Inner Gasket for 100% Hermetic Seal', 'BPA & Phthalate Free'],
    pros: ['Costs under $20 yet holds humidity better than a $500 wooden humidor', 'Never warps, leaks, or needs seasonal re-seasoning', 'Fits two standard 12.5" x 7.5" cedar trays stackable'],
    cons: ['Industrial utility appearance (plastic tub)', 'Needs initial soap & warm water wash to clear factory smell'],
    bestFor: 'The heart of the famous $45 DIY Tupperdor build.',
    sealRating: 10.0,
    dimensions: '13.8" x 10.8" x 3.5"',
    scorecard: {
      sealIntegrity: 10.0,
      thermalStability: 6.8,
      humidityRetention: 10.0,
      craftsmanship: 8.5,
      valueScore: 10.0,
    },
    realWorldCapacity: {
      coronas: 90,
      robustos: 75,
      torosChurchills: 60,
      gordos: 40,
      factoryBoxes: 0,
      notes: 'Fits two stacked Mantello cedar trays or one cedar tray plus loose cigars.'
    },
    unitSpecificSeasoning: [
      'Wash with warm Dawn dish soap and water, let dry in sunshine for 3 hours to remove factory plastic aroma.',
      'Season cedar trays separately before stacking.'
    ],
    whoShouldBuy: [
      'Value-conscious aficionados who prioritize flawless smokeability and zero humidity leaks over wooden furniture aesthetics.'
    ],
    whoShouldAvoid: [
      'Buyers looking for an executive desk showpiece to impress dinner guests.'
    ],
    failureModesToWatch: [
      'Open lid for 30 seconds every 3-4 weeks to allow fresh oxygen exchange.'
    ],
    diyAlternativeBlueprintId: 'blueprint-tupperdor-7l',
    relatedGuideSlugs: ['science-of-airtight-tupperdors', 'high-altitude-cigar-preservation']
  },
  {
    id: 'spanish-cedar-tray-mantello',
    slug: 'mantello-spanish-cedar-cigar-tray-review',
    name: 'Mantello Spanish Cedar Cigar Trays with Adjustable Dividers (2 Pack)',
    brand: 'Mantello Cigars',
    category: 'diy_part',
    subCategory: 'cedar_tray',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $25)',
    capacitySticks: 40,
    asin: 'B079V3KYT7',
    amazonSearchQuery: 'Mantello Spanish Cedar Cigar Tray with Adjustable Divider',
    imageUrl: 'https://m.media-amazon.com/images/I/71oy2F3b3bL._AC_SL1500_.jpg',
    description: 'Genuine solid kiln-dried Spanish cedar (Cedrela odorata) slatted tray with movable divider. Engineered to fit inside 7L containers or wineador shelves for air circulation.',
    highlights: ['100% Authentic Kiln-Dried Spanish Cedar', 'Slatted Base for 360° Air Flow', 'Movable Partition Divider', 'Repels Tobacco Beetles & Promotes Aroma'],
    pros: ['Provides the true cedar scent and aging chemistry to any plastic or cooler humidor', 'Slats allow humidity to circulate freely underneath sticks', 'Perfect dimensions for Sistema 7L or Igloo coolers'],
    cons: ['Needs initial 14-day seasoning with Boveda 84% before loading cigars'],
    bestFor: 'Adding authentic cedar aging to DIY Tupperdors and Coolidors.',
    sealRating: 8.0,
    dimensions: '12.5" x 7.5" x 2.25"',
    scorecard: {
      sealIntegrity: 8.0,
      thermalStability: 7.5,
      humidityRetention: 8.5,
      craftsmanship: 9.0,
      valueScore: 9.6,
    },
    realWorldCapacity: {
      coronas: 45,
      robustos: 35,
      torosChurchills: 28,
      gordos: 20,
      factoryBoxes: 0,
      notes: 'Slatted base allows water vapor to circulate 360 degrees around cigar wrappers.'
    },
    unitSpecificSeasoning: [
      'Season inside an airtight bag with one Boveda 84% pack for 10-14 days before loading cigars.'
    ],
    whoShouldBuy: [
      'Anyone building a Tupperdor, Coolidor, or lining a wine cooler.'
    ],
    whoShouldAvoid: [
      'Those who already own fully lined wooden humidors.'
    ],
    failureModesToWatch: [
      'Do not wet directly with water; seasoning with vapor prevents warp.'
    ],
    diyAlternativeBlueprintId: 'blueprint-tupperdor-7l',
    relatedGuideSlugs: ['spanish-cedar-biology-guide', 'science-of-airtight-tupperdors']
  },
  {
    id: 'igloo-marine-cooler-54',
    slug: 'igloo-marine-ultra-54-quart-cooler-coolidor-review',
    name: 'Igloo Marine Ultra 54-Quart High Performance Marine Cooler',
    brand: 'Igloo',
    category: 'diy_part',
    subCategory: 'coolidor_core',
    price: 0, // internal budget ref
    priceBracket: '$$',
    priceTierFormatted: '$$ (Moderate: $45–$75)',
    capacitySticks: 450,
    asin: 'B006H0L5TM',
    amazonSearchQuery: 'Igloo Marine Ultra 54 Quart Cooler High Performance UV Inhibitors',
    imageUrl: 'https://m.media-amazon.com/images/I/61f4dwrJrgL._AC_SL1200_.jpg',
    description: 'The ultimate base for the legendary "Coolidor". Heavy Ultratherm foam insulation in body and lid, marine-grade latches, and UV inhibitors. Stores 10-15 entire cigar boxes effortlessly.',
    highlights: ['54 Quart (51L) Capacity', 'Heavy Ultratherm Foam Insulation', 'Marine Grade Stainless Steel Hinges', 'Threaded Drain Plug with Rubber Seal'],
    pros: ['Stores 400+ cigars in original factory boxes for under $70', 'Immense thermal mass buffers against indoor heat waves', 'Zero humidity loss through insulated walls'],
    cons: ['Requires baking soda wash to remove factory plastic smell before use', 'Takes up closet or floor space'],
    bestFor: 'Box collectors and bulk aging enthusiasts who need maximum stick capacity at minimum cost.',
    sealRating: 9.7,
    dimensions: '26.4" x 15.5" x 15.5"',
    scorecard: {
      sealIntegrity: 9.7,
      thermalStability: 9.5,
      humidityRetention: 9.8,
      craftsmanship: 8.8,
      valueScore: 9.9,
    },
    realWorldCapacity: {
      coronas: 550,
      robustos: 450,
      torosChurchills: 380,
      gordos: 260,
      factoryBoxes: 14,
      notes: 'Can store 12-14 standard 20-count factory wooden boxes stacked with space for loose trays on top.'
    },
    unitSpecificSeasoning: [
      'Wipe down with warm baking soda water, air out for 48 hours.',
      'Seal drain plug tightly with Teflon tape.',
      'Load factory boxes and two Boveda 320g 65% packs.'
    ],
    whoShouldBuy: [
      'Collectors buying full boxes who refuse to spend $1,500 on furniture cabinets.'
    ],
    whoShouldAvoid: [
      'Those wanting living room display furniture.'
    ],
    failureModesToWatch: [
      'Do not forget to tighten the bottom drain cap with Teflon tape.'
    ],
    diyAlternativeBlueprintId: 'blueprint-coolidor-marine',
    relatedGuideSlugs: ['science-of-airtight-tupperdors', 'high-altitude-cigar-preservation']
  },
  {
    id: 'spanish-cedar-planks-diy',
    slug: 'spanish-cedar-thin-lumber-planks-diy-lining-review',
    name: 'Spanish Cedar Thin Stock Lumber Board (3/8" x 6" x 36")',
    brand: 'Woodcraft / Barrington',
    category: 'diy_part',
    subCategory: 'cabinet_lining',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $35)',
    capacitySticks: 0,
    asin: 'B0B2VKCNHT',
    amazonSearchQuery: 'Kiln Dried Spanish Cedar Lumber Thin Boards for Humidor Cabinet DIY',
    imageUrl: 'https://m.media-amazon.com/images/I/31nNV0g8z2L.jpg',
    description: 'True Spanish Cedar (Cedrela odorata) surfaced 4 sides (S4S). Essential raw material for lining wineador conversions, custom armoires, or DIY humidor boxes.',
    highlights: ['Genuine Cedrela Odorata (Not Western Red Cedar)', 'Surfaced Smooth Both Sides', 'Ideal 1/4" Thickness for Lining', 'Kiln Dried to Prevent Sap Weeping'],
    pros: ['Imparts authentic cigar aging aroma and natural insect deterrence', 'Easy to cut with basic handsaw or miter box', 'No harmful chemicals or aromatic cedar resins'],
    cons: ['Requires light sanding and measurement/cutting skills'],
    bestFor: 'Advanced DIY builders lining a custom cabinet, wineador, or wooden box.',
    sealRating: 8.5,
    scorecard: {
      sealIntegrity: 8.5,
      thermalStability: 8.0,
      humidityRetention: 9.0,
      craftsmanship: 9.5,
      valueScore: 9.2,
    },
    unitSpecificSeasoning: [
      'Install with food-grade silicone (never PVA wood glue or liquid nails). Allow silicone to cure 72 hours before closing door.'
    ],
    whoShouldBuy: [
      'Custom cabinet and wineador DIY converters.'
    ],
    whoShouldAvoid: [
      'Anyone wanting ready-to-use plug and play.'
    ],
    diyAlternativeBlueprintId: 'blueprint-cabinet-conversion',
    relatedGuideSlugs: ['spanish-cedar-biology-guide']
  },

  // ================= SMART HYGROMETERS =================
  {
    id: 'govee-bluetooth-hygrometer',
    slug: 'govee-bluetooth-digital-hygrometer-h5075-review',
    name: 'Govee Bluetooth Digital Hygrometer Thermometer (H5075)',
    brand: 'Govee',
    category: 'hygrometer',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $20)',
    capacitySticks: 0,
    asin: 'B07Y36FWTT',
    amazonSearchQuery: 'Govee Bluetooth Hygrometer Thermometer H5075 with LCD Screen',
    imageUrl: 'https://m.media-amazon.com/images/I/61Vm0Qx+NEL._AC_SL1200_.jpg',
    description: 'The most popular smart humidor sensor in the cigar community. Swiss-made Sensirion sensor with ±0.5°F and ±3% RH accuracy. High-contrast LCD screen plus 260-ft Bluetooth range with 2-year data export.',
    highlights: ['Swiss Sensirion High-Precision Sensor', 'Clear LCD Display with Min/Max', '260-ft Bluetooth App Connectivity', 'Alert Notifications for Temp/RH Spikes'],
    pros: ['Check humidity from your phone without opening humidor and breaking seal', 'App displays hourly/daily humidity trend graphs', 'Calibration offset can be adjusted in 0.1% increments in app'],
    cons: ['Bluetooth only (needs to be within 200 ft; use H5179 for Wi-Fi remote check)'],
    bestFor: 'Must-have companion for EVERY humidor setup (Tupperdor, desktop, wineador).',
    sealRating: 10.0,
    scorecard: {
      sealIntegrity: 10.0,
      thermalStability: 9.8,
      humidityRetention: 10.0,
      craftsmanship: 9.4,
      valueScore: 9.9,
    },
    unitSpecificSeasoning: [
      'Perform the 24-hour Boveda 75% calibration test and input calibration offset into Govee Home app settings.'
    ],
    whoShouldBuy: [
      'Every cigar smoker regardless of whether they have a $20 Tupperdor or $2,000 Cabinet.'
    ],
    whoShouldAvoid: [
      'Smokers who refuse to use smartphone apps.'
    ],
    relatedGuideSlugs: ['high-altitude-cigar-preservation', 'science-of-airtight-tupperdors']
  },
  {
    id: 'govee-wifi-hygrometer',
    slug: 'govee-wifi-thermometer-hygrometer-h5179-review',
    name: 'Govee Wi-Fi Thermometer Hygrometer Sensor (H5179)',
    brand: 'Govee',
    category: 'hygrometer',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $40)',
    capacitySticks: 0,
    asin: 'B0872ZWV8X',
    amazonSearchQuery: 'Govee WiFi Thermometer Hygrometer Sensor H5179 Remote App Alert',
    imageUrl: 'https://m.media-amazon.com/images/I/61UNq0X0rwL._AC_SL1200_.jpg',
    description: 'Direct Wi-Fi connected smart sensor. Sends instant push notifications to your smartphone anywhere in the world if humidity drops below your target or temperature spikes into the beetle danger zone.',
    highlights: ['Direct Wi-Fi (No Hub Needed)', 'Worldwide Remote Monitoring', 'Custom Push & Email Alerts', 'Historical Data Cloud Storage'],
    pros: ['Check humidor status while traveling abroad on vacation', 'Instant alerts if AC fails or humidifier runs dry', 'No need to be near the humidor'],
    cons: ['No front LCD screen (all data viewed in smartphone app)', 'Slightly higher battery usage than Bluetooth models'],
    bestFor: 'Frequent travelers and high-value collection owners requiring 24/7 security.',
    sealRating: 10.0,
    scorecard: {
      sealIntegrity: 10.0,
      thermalStability: 9.8,
      humidityRetention: 10.0,
      craftsmanship: 9.3,
      valueScore: 9.5,
    },
    unitSpecificSeasoning: [
      'Calibrate with 75% salt bag before placing into humidor.'
    ],
    whoShouldBuy: [
      'Frequent travelers and owners of collections exceeding $1,000 in value.'
    ],
    whoShouldAvoid: [
      'Smokers wanting a quick visual glance on an LCD screen.'
    ],
    relatedGuideSlugs: ['travelers-cigar-handbook-tsa-torch-pressure', 'high-altitude-cigar-preservation']
  },
  {
    id: 'caliber-v-hygrometer',
    slug: 'oasis-caliber-v-digital-hygrometer-review',
    name: 'Oasis Caliber V Digital Hygrometer and Thermometer',
    brand: 'Cigar Oasis',
    category: 'hygrometer',
    price: 0,
    priceBracket: '$',
    priceTierFormatted: '$ (Dedicated digital gauge)',
    capacitySticks: 0,
    asin: 'B00JXOKQVW',
    amazonSearchQuery: 'Oasis Caliber V Digital Hygrometer B00JXOKQVW',
    imageUrl: 'https://m.media-amazon.com/images/I/71kn6OW7e9L._AC_SL1200_.jpg',
    description: 'A slim dedicated humidity and temperature display for users who prefer an in-humidor readout instead of a phone app. This is the current Caliber V model rather than the older Caliber IV.',
    highlights: ['Humidity and temperature display', 'Slim in-humidor profile', 'No phone required', 'User-calibratable'],
    pros: ['Straightforward dedicated display', 'Long marketplace history', 'Fits many desktop humidors'],
    cons: ['No remote alerts', 'Calibrate before use'],
    bestFor: 'Traditional humidors that need a readable internal digital gauge.',
    sealRating: 8.8,
    relatedGuideSlugs: ['high-altitude-cigar-preservation']
  },

  // ================= HUMIDIFICATION =================
  {
    id: 'boveda-65-brick',
    slug: 'boveda-65-rh-size-60-12-pack-review',
    name: 'Boveda 65% RH Size 60 Humidity Packs (12 Count)',
    brand: 'Boveda',
    category: 'humidification',
    price: 0,
    priceBracket: '$$',
    priceTierFormatted: '$$ (12-pack)',
    capacitySticks: 300,
    asin: 'B00CPPG228',
    amazonSearchQuery: 'Boveda 65 Size 60 12 Count B00CPPG228',
    imageUrl: 'https://m.media-amazon.com/images/I/81jPc4x3RjL._AC_SL1200_.jpg',
    description: 'A 12-count box of Size 60 two-way humidity packs for long-term cigar storage at 65% RH.',
    highlights: ['65% RH target', 'Twelve Size 60 packs', 'Two-way humidity control', 'No refilling'],
    pros: ['Established high-feedback listing', 'Useful for airtight storage and lower-RH preferences', 'Simple replacement schedule'],
    cons: ['Use enough packs for the enclosure', 'Not a substitute for temperature control'],
    bestFor: 'Airtight containers and smokers who prefer a slightly drier draw and burn.',
    sealRating: 10,
    relatedGuideSlugs: ['science-of-airtight-tupperdors']
  },
  {
    id: 'boveda-69-brick',
    slug: 'boveda-69-rh-size-60-12-pack-review',
    name: 'Boveda 69% RH Size 60 Humidity Packs (12 Count)',
    brand: 'Boveda',
    category: 'humidification',
    price: 0,
    priceBracket: '$$',
    priceTierFormatted: '$$ (12-pack)',
    capacitySticks: 300,
    asin: 'B00CPPG21Y',
    amazonSearchQuery: 'Boveda 69 Size 60 12 Count B00CPPG21Y',
    imageUrl: 'https://m.media-amazon.com/images/I/81FH8PnY7mL._AC_SL1200_.jpg',
    description: 'A 12-count box of Size 60 two-way humidity packs for general cigar storage at 69% RH.',
    highlights: ['69% RH target', 'Twelve Size 60 packs', 'Two-way humidity control', 'No refilling'],
    pros: ['Established high-feedback listing', 'Common choice for seasoned wood humidors', 'Simple maintenance'],
    cons: ['May run too moist in highly airtight containers', 'Not a substitute for temperature control'],
    bestFor: 'Seasoned wooden humidors that stabilize below the pack rating.',
    sealRating: 10,
    relatedGuideSlugs: ['glass-top-humidor-truth-leaks-sealing']
  },
  {
    id: 'boveda-72-brick',
    slug: 'boveda-72-rh-size-60-12-pack-review',
    name: 'Boveda 72% RH Size 60 Humidity Packs (12 Count)',
    brand: 'Boveda',
    category: 'humidification',
    price: 0,
    priceBracket: '$$',
    priceTierFormatted: '$$ (12-pack)',
    capacitySticks: 300,
    asin: 'B00CPPG23W',
    amazonSearchQuery: 'Boveda 72 Size 60 12 Count B00CPPG23W',
    imageUrl: 'https://m.media-amazon.com/images/I/81iGnM0Sg9L._AC_SL1200_.jpg',
    description: 'A 12-count box of Size 60 two-way humidity packs intended for dry environments or porous wooden enclosures that stabilize below the pack rating.',
    highlights: ['72% RH target', 'Twelve Size 60 packs', 'Two-way humidity control', 'For dry or porous storage'],
    pros: ['Correctly links to the 72% product', 'Established listing', 'Useful when a calibrated gauge proves lower output is insufficient'],
    cons: ['Usually too humid for airtight plastic or acrylic storage', 'Use only after observing a stable low reading'],
    bestFor: 'Dry rooms and porous wooden humidors that cannot maintain the desired internal RH with 69% packs.',
    sealRating: 10,
    relatedGuideSlugs: ['high-altitude-cigar-preservation']
  },
  {
    id: 'boveda-84-seasoning',
    slug: 'boveda-84-rh-size-60-seasoning-12-pack-review',
    name: 'Boveda 84% RH Size 60 Seasoning Packs (12 Count)',
    brand: 'Boveda',
    category: 'humidification',
    price: 0,
    priceBracket: '$$',
    priceTierFormatted: '$$ (12-pack seasoning supply)',
    capacitySticks: 300,
    asin: 'B00CPPG2RI',
    amazonSearchQuery: 'Boveda 84 Seasoning Size 60 12 Count B00CPPG2RI',
    imageUrl: 'https://m.media-amazon.com/images/I/81Lm6NoeQRL._AC_SL1200_.jpg',
    description: 'A 12-count box of Size 60 seasoning packs made for preparing empty wooden humidors before adding cigars.',
    highlights: ['84% RH seasoning level', 'Twelve Size 60 packs', 'For empty wood humidors', 'No direct wetting of cedar'],
    pros: ['Avoids wiping cedar with liquid water', 'Established high-feedback listing', 'Easy closed-lid process'],
    cons: ['Not for ongoing cigar storage', 'Requires time before loading cigars'],
    bestFor: 'New or fully dried wooden humidors that need controlled seasoning.',
    sealRating: 10,
    relatedGuideSlugs: ['spanish-cedar-biology-guide', 'glass-top-humidor-truth-leaks-sealing']
  },
  {
    id: 'boveda-320g-65',
    slug: 'boveda-320g-large-humidity-control-pack-review',
    name: 'Boveda 320g Large Humidity Control Pack (65% RH) with Mounting Plate',
    brand: 'Boveda',
    category: 'humidification',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $35)',
    capacitySticks: 150,
    asin: 'B01MR6PUXF',
    amazonSearchQuery: 'Boveda 320 Gram 65 RH Humidity Control Pack with Metal Mounting Plate',
    imageUrl: 'https://m.media-amazon.com/images/I/81VrvLazlqL._AC_SL1200_.jpg',
    description: 'Industrial-grade humidity brick. Equivalent to more than six 60g packs combined. Ideal for Coolidors, wineadors, and large 100-250 stick wooden desktop cabinets.',
    highlights: ['Equals Six 60g Packs in One Unit', 'Lasts up to 1-2 Years in Sealed Units', 'Rigid Protective Casing', 'Optional Magnetic Mounting Plate'],
    pros: ['Eliminates clutter of numerous small packets', 'Enormous surface area provides rapid humidity recovery after lid opening', 'Zero maintenance for years in a Coolidor'],
    cons: ['Larger footprint requires dedicated shelf space'],
    bestFor: 'Coolidors, electric wineadors, and large desktop cabinets.',
    sealRating: 10.0,
    scorecard: {
      sealIntegrity: 10.0,
      thermalStability: 9.9,
      humidityRetention: 10.0,
      craftsmanship: 9.8,
      valueScore: 9.6,
    },
    whoShouldBuy: [
      'Owners of Coolidors, 23L/48L Wineadors, or large cabinet humidors.'
    ],
    whoShouldAvoid: [
      'Small 25-50 count desktop boxes with tight clearance.'
    ],
    relatedGuideSlugs: ['electric-wineador-masterclass-heating-cooling', 'science-of-airtight-tupperdors']
  },
  {
    id: 'cigar-oasis-plus-4',
    slug: 'cigar-oasis-plus-4-electronic-humidifier-review',
    name: 'Cigar Oasis Plus 4.0 Electronic Humidifier',
    brand: 'Cigar Oasis',
    category: 'humidification',
    price: 0,
    priceBracket: '$$$',
    priceTierFormatted: '$$$ (Active cabinet humidifier)',
    capacitySticks: 1000,
    asin: 'B00K1XBX5C',
    amazonSearchQuery: 'Cigar Oasis Plus 4.0 B00K1XBX5C',
    imageUrl: 'https://m.media-amazon.com/images/I/71Yza3oeVPL._AC_SL1200_.jpg',
    description: 'The current Plus 4.0 active humidifier for larger cabinets, with a refill cartridge, fan-driven vapor circulation and digital controls.',
    highlights: ['Active fan circulation', 'Digital humidity control', 'Refillable cartridge', 'Listed for 300–1,000 cigars'],
    pros: ['Better suited to large cabinets than passive packs alone', 'Established specialist brand', 'Replaceable refill cartridge'],
    cons: ['Requires power and periodic refilling', 'Current marketplace feedback is more mixed than passive Boveda products'],
    bestFor: 'Large cabinets and coolidors that need active humidity circulation.',
    sealRating: 8.5,
    relatedGuideSlugs: ['electric-wineador-masterclass-heating-cooling']
  },

  // ================= CUTTERS, LIGHTERS & ACCESSORIES =================
  {
    id: 'colibri-v-cut',
    slug: 'colibri-deep-v-cut-cigar-cutter-review',
    name: 'Colibri Deep V-Cut Heavy-Duty Cigar Cutter',
    brand: 'Colibri',
    category: 'accessory',
    subCategory: 'cutter',
    price: 0, // internal budget ref
    priceBracket: '$$',
    priceTierFormatted: '$$ (Moderate: $40–$65)',
    capacitySticks: 0,
    asin: 'B00MBNJ1A4',
    amazonSearchQuery: 'Colibri V-Cut Cigar Cutter Deep Wedge Stainless Steel Blade',
    imageUrl: 'https://m.media-amazon.com/images/I/61-qcz4ym4L._AC_SL1200_.jpg',
    description: 'The undisputed favorite cutter among cigar sommeliers. Contoured spring-loaded release cuts a deep, clean wedge up to 60 ring gauge without cracking delicate wrapper leaf.',
    highlights: ['Engineered Deep Wedge V-Cut', 'Cuts up to 60+ Ring Gauge', 'Surgical 440 Stainless Steel Blade', 'Ergonomic Rubberized Grip Finish'],
    pros: ['Provides effortless draw without destroying cigar cap', 'Works on figurados, torpedos, and robustos', 'Heavy, indestructible tactile feel in hand'],
    cons: ['Premium price tag compared to plastic cutters'],
    bestFor: 'Every cigar smoker seeking the cleanest, most consistent draw possible.',
    sealRating: 10.0,
    scorecard: {
      sealIntegrity: 10.0,
      thermalStability: 10.0,
      humidityRetention: 10.0,
      craftsmanship: 9.9,
      valueScore: 9.6,
    },
    whoShouldBuy: [
      'Anyone who loves large ring gauge or torpedo cigars and hates loose tobacco flakes on their tongue.'
    ],
    whoShouldAvoid: [
      'Smokers who exclusively prefer punch cuts.'
    ],
    relatedGuideSlugs: ['travelers-cigar-handbook-tsa-torch-pressure']
  },
  {
    id: 'mrs-brog-triple-torch',
    slug: 'mrs-brog-triple-flame-torch-lighter-review',
    name: 'Mrs. Brog Triple-Flame Torch Lighter with Cigar Punch',
    brand: 'Mrs. Brog',
    category: 'accessory',
    subCategory: 'lighter',
    price: 0,
    priceBracket: '$',
    priceTierFormatted: '$ (Budget torch)',
    capacitySticks: 0,
    asin: 'B01HMTWTD2',
    amazonSearchQuery: 'Mrs Brog Triple Flame Torch Lighter B01HMTWTD2',
    imageUrl: 'https://m.media-amazon.com/images/I/81RFAupSZtL._AC_SL1200_.jpg',
    description: 'A refillable triple-flame torch with an integrated cigar punch and a well-established marketplace history.',
    highlights: ['Triple jet flame', 'Built-in cigar punch', 'Adjustable flame', 'Butane not included'],
    pros: ['Large review history', 'Fast lighting for larger ring gauges', 'Integrated punch'],
    cons: ['Triple jets use fuel quickly', 'Torch lighters are subject to airline restrictions'],
    bestFor: 'Outdoor use and smokers who want a budget multi-jet lighter.',
    sealRating: 8.2,
    relatedGuideSlugs: ['travelers-cigar-handbook-tsa-torch-pressure']
  },
  {
    id: 'boveda-calibration-kit',
    slug: 'boveda-one-step-75-hygrometer-calibration-kit-review',
    name: 'Boveda One-Step 75% RH Hygrometer Calibration Kit',
    brand: 'Boveda',
    category: 'accessory',
    subCategory: 'calibration',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $15)',
    capacitySticks: 0,
    asin: 'B000A3UBLA',
    amazonSearchQuery: 'Boveda One Step Hygrometer Calibration Kit 75 Percent RH',
    imageUrl: 'https://m.media-amazon.com/images/I/61bJ1fEGCaL._AC_SL1000_.jpg',
    description: 'A sealed calibration pouch with a 75% RH reference pack. Insert a digital or analog hygrometer, close the pouch, follow Boveda’s timing instructions, and record any offset.',
    highlights: ['75% RH Reference Point', 'High-Barrier Multi-Layer Foil Pouch', 'Universal Compatibility (Digital & Analog)', 'Simple Calibration Check'],
    pros: ['Far cleaner and more accurate than DIY wet salt bottle cap methods', 'Gives you 100% confidence in your hygrometer readings'],
    cons: ['Single-use or reusable for ~3-6 months if sealed tightly'],
    bestFor: 'Calibrating any new hygrometer before putting it into service.',
    sealRating: 10.0,
    scorecard: {
      sealIntegrity: 10.0,
      thermalStability: 10.0,
      humidityRetention: 10.0,
      craftsmanship: 10.0,
      valueScore: 9.8,
    },
    whoShouldBuy: [
      'Every cigar smoker before stocking sticks in a new humidor.'
    ],
    whoShouldAvoid: [
      'Anyone whose sensor has already been checked recently and remains stable.'
    ],
    relatedGuideSlugs: ['high-altitude-cigar-preservation']
  }
];
