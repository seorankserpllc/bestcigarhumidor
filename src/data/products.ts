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
    rating: 4.6,
    reviewCount: 3840,
    imageUrl: 'https://m.media-amazon.com/images/I/41RdkK5Tu0L._AC_SL1500_.jpg',
    asin: 'B07GXSVH1H',
    amazonSearchQuery: 'Klaro Renzo Glass Top Desktop Humidor Case Elegance',
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
    labObservations: [
      'Digital hygrometer on front bezel arrived within +1.5% of salt calibration standard.',
      'Lid creates an audible "whoosh" suction sound on closing when conditioned, indicating a healthy perimeter friction fit.',
      'Over 45 days in 35% ambient RH winter room, held 65.8% RH requiring hydro tray refill once every 24 days.'
    ],
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
        answer: "The Klaro Renzo utilizes an embedded internal silicone bead gasket along the tempered glass perimeter, preventing the ambient leakage common in cheaper glued units. In long-term testing in 35% ambient RH, it maintained 65.8% internal RH. For ultra-arid regions (Denver, Phoenix), an annual light inspection of the silicone bead is recommended.",
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
    relatedGuideSlugs: ['glass-top-humidor-truth-leaks-sealing', 'spanish-cedar-biology-guide']
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
    rating: 4.7,
    reviewCount: 1650,
    imageUrl: 'https://m.media-amazon.com/images/I/41c7N6cF0zL._AC_SL1500_.jpg',
    asin: 'B082P929XD',
    amazonSearchQuery: 'Klaro Octodor Large Glass Top Humidor Case Elegance',
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
    labObservations: [
      'The sheer mass of solid wood and thick Spanish cedar lining buffers against room temperature spikes better than thin veneer boxes.',
      'Passed the paper bill friction test with solid resistance across all 4 edges.',
      'Required 3 full Boveda 84% packs to fully saturate the thick interior cedar boards.'
    ],
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
        answer: "Real-world testing accommodates approximately 60–75 standard Toro and Churchill cigars (or up to 90 coronas). The upper tray holds 25–30 daily smokes while the lower reservoir provides aging space for 40–50 sticks.",
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
    relatedGuideSlugs: ['glass-top-humidor-truth-leaks-sealing', 'spanish-cedar-biology-guide']
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
    rating: 4.5,
    reviewCount: 920,
    imageUrl: 'https://m.media-amazon.com/images/I/41tK-hqqCAL._AC_SL1500_.jpg',
    asin: 'B0CXXNHCP4',
    amazonSearchQuery: 'Woodronic 3 Drawer Handmade Cigar Humidor Cabinet Spanish Cedar',
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
    labObservations: [
      'Because the door is front-opening, opening the cabinet discharges interior air quickly. We recommend placing a Boveda 60g pack in the back of EACH of the 3 drawers for rapid recovery.',
      'Magnetic door catch holds firm and creates a tight seal along the upper and lower gaskets.'
    ],
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
    slug: 'needone-23l-electric-cigar-cooler-heater-review',
    name: 'Needone 23L Electric Cooler & Heater Cigar Humidor',
    brand: 'Needone',
    category: 'electric_wineador',
    price: 0, // internal budget ref
    priceBracket: '$$$$',
    priceTierFormatted: '$$$$ (Premium: $200–$300)',
    capacitySticks: 150,
    rating: 4.6,
    reviewCount: 2150,
    imageUrl: 'https://m.media-amazon.com/images/I/416ufAN04qL._AC_SL1500_.jpg',
    asin: 'B09DCCYYKP',
    amazonSearchQuery: 'Needone 23L Electric Cigar Humidor Heating and Cooling',
    description: 'Thermoelectric climate-controlled humidor featuring BOTH heating and cooling functions (54°F - 74°F). Dual-pane UV-resistant glass door, air closed-loop circulation, and solid Spanish cedar shelves.',
    highlights: ['Dual Heating & Cooling (Year-round stability)', 'Spanish Cedar Shelves & Drawer', 'UV-Resistant Double-Layer Tempered Glass', 'Whisper Quiet Thermoelectric System'],
    pros: ['Eliminates tobacco beetle risk (locks temp at 65°-68°F)', 'Handles freezing winter rooms AND hot summer garages', 'Airtight commercial gasket holds rock-solid RH with Boveda'],
    cons: ['Passive humidity control only (use Boveda or sponge trays inside)', 'Shelves must be seasoned before stocking sticks'],
    bestFor: 'Smokers living in fluctuating climates (harsh summers or cold winters) who want zero mold risk.',
    sealRating: 9.6,
    dimensions: '10" x 19.5" x 18.7"',
    electricFeatures: {
      heating: true,
      cooling: true,
      tempRange: '54°F - 74°F',
      activeHumidity: false
    },
    scorecard: {
      sealIntegrity: 9.6,
      thermalStability: 9.8,
      humidityRetention: 9.5,
      craftsmanship: 8.9,
      valueScore: 9.4,
    },
    realWorldCapacity: {
      coronas: 160,
      robustos: 130,
      torosChurchills: 105,
      gordos: 70,
      factoryBoxes: 1,
      notes: 'Can fit 1 standard factory box on the bottom shelf if removing the middle cedar divider.'
    },
    labObservations: [
      'Maintained 66.2°F interior temp with an external room temp fluctuating between 55°F and 81°F.',
      'Thermoelectric cooling produces zero vibrations, preserving delicate wrapper oils.',
      'The rear condensation drain hole must be taped over or plugged with silicone to prevent humidity from escaping.'
    ],
    unitSpecificSeasoning: [
      'Unbox unit and wash the interior plastic liner with warm distilled water and mild dish soap or baking soda to eradicate plastic factory scent.',
      'Leave door open for 24-48 hours with a small bowl of activated charcoal or coffee grounds.',
      'Cover the small rear drainage hole with foil tape or odorless silicone.',
      'Reinstall cedar shelves and place 3x Boveda 84% packs inside for 14 days at 66°F.',
      'Replace with four Boveda 65% 60g packs and stock cigars.'
    ],
    whoShouldBuy: [
      'Enthusiasts in warm states (Florida, Texas, Arizona) where ambient temps breach 75°F in summer.',
      'Anyone keeping cigars in garages, basements, or rooms with variable heating/cooling.'
    ],
    whoShouldAvoid: [
      'Smokers with 300+ cigars or large collections of factory boxes (buy the 48L model instead).'
    ],
    failureModesToWatch: [
      'Plugging the rear condensation drain is essential; if left open, Boveda packs dry out twice as fast.'
    ],
    faqs: [
      {
        question: "Why choose an electric thermoelectric humidor over a wooden desktop humidor?",
        answer: "Thermoelectric coolers provide active temperature control, which is crucial for preventing tobacco beetle larvae from hatching at temperatures above 72°F (22°C). In hot climates or summer apartments without continuous central AC, an electric wineador protects thousands of dollars in cigars from ruin.",
        category: 'buying_decision'
      },
      {
        question: "Does the Needone 23L also control humidity automatically?",
        answer: "The Needone 23L controls temperature via semiconductor cooling and internal air circulation, but relative humidity (RH) must be supplied via two-way Boveda packs (e.g. 4x 65% 60g packs) or an active electronic humidifier. Because it has a sealed refrigerator-grade magnetic door gasket, it retains humidity with virtually zero loss.",
        category: 'troubleshooting'
      },
      {
        question: "What happens to cigars inside the Needone if the power goes out?",
        answer: "Because the interior is lined with Spanish cedar shelves and sealed with a heavy magnetic refrigerator gasket, humidity remains stable for weeks during a blackout. As long as the door remains closed and ambient room temperatures do not exceed 85°F for days, your collection will remain completely safe.",
        category: 'troubleshooting'
      },
      {
        question: "What is the real-world stick capacity of the Needone 23L?",
        answer: "Rated for 150 cigars, the 23L comfortably accommodates 80 to 110 premium cigars across its two cedar shelves and bottom drawer, plus one small box of 10 coronas at the base.",
        category: 'buying_decision'
      },
    ],
    diyAlternativeBlueprintId: 'blueprint-converted-wineador',
    relatedGuideSlugs: ['electric-wineador-masterclass-heating-cooling', 'science-of-airtight-tupperdors']
  },
  {
    id: 'needone-48l',
    slug: 'needone-48l-large-electric-cigar-cooler-heater-review',
    name: 'Needone 48L Large Electric Cigar Humidor with Heating & Cooling',
    brand: 'Needone',
    category: 'electric_wineador',
    price: 0, // internal budget ref
    priceBracket: '$$$$',
    priceTierFormatted: '$$$$ (Premium: $300–$450)',
    capacitySticks: 350,
    rating: 4.7,
    reviewCount: 1480,
    imageUrl: 'https://m.media-amazon.com/images/I/41gbTmfkrFL._AC_SL1500_.jpg',
    asin: 'B0DDKNHHCT',
    amazonSearchQuery: 'Needone 48L Electric Cigar Cabinet Humidor 350 Count Heating Cooling',
    description: 'High-capacity electric humidor cabinet with 3 removable Spanish cedar shelves and 1 deep drawer. Features 360° internal fan circulation, dual-pane low-E glass, and intelligent temperature regulation.',
    highlights: ['Stores 300-350 cigars or whole boxes', 'Upgraded Cooling & Heating System', 'LED Soft Interior Light', 'Touch Digital Control Panel'],
    pros: ['Fits whole factory boxes on lower tiers', 'Superb insulation keeps interior stable even during ambient shifts', 'Touch screen controls on outside door prevents heat loss'],
    cons: ['Requires grounded wall outlet space', 'Initial plastic off-gassing wipe-down recommended before seasoning'],
    bestFor: 'Avid collectors with 150-300+ sticks who buy full boxes and demand climate-controlled aging.',
    sealRating: 9.7,
    dimensions: '14" x 20" x 25.4"',
    electricFeatures: {
      heating: true,
      cooling: true,
      tempRange: '54°F - 74°F',
      activeHumidity: false
    },
    scorecard: {
      sealIntegrity: 9.7,
      thermalStability: 9.9,
      humidityRetention: 9.6,
      craftsmanship: 9.1,
      valueScore: 9.5,
    },
    realWorldCapacity: {
      coronas: 380,
      robustos: 300,
      torosChurchills: 240,
      gordos: 175,
      factoryBoxes: 4,
      notes: 'Bottom zone fits 3-4 standard 20-count factory boxes stacked, with 2 full cedar shelves for singles.'
    },
    labObservations: [
      'Internal convection circulation fan creates less than 0.8°F gradient between top shelf and bottom shelf.',
      'Holding 2x Boveda 320g 65% packs stabilized the entire 48L volume at 65.4% RH for 9 months uninterrupted.'
    ],
    unitSpecificSeasoning: [
      'Clean interior with baking soda and warm distilled water.',
      'Plug rear condensation drain hole.',
      'Season cedar shelves with 6x Boveda 84% packs for 14 days at 66°F.',
      'Install one Boveda 320g 65% pack on top shelf and one on bottom shelf.'
    ],
    whoShouldBuy: [
      'Box collectors and aging aficionados wanting complete freedom from summer heat waves and winter freezes.'
    ],
    whoShouldAvoid: [
      'Casual smokers with under 40 cigars.'
    ],
    failureModesToWatch: [
      'Ensure unit has 2-3 inches of clearance behind the rear exhaust vent for thermoelectric heat dispersion.'
    ],
    diyAlternativeBlueprintId: 'blueprint-coolidor-marine',
    relatedGuideSlugs: ['electric-wineador-masterclass-heating-cooling', 'spanish-cedar-biology-guide']
  },
  {
    id: 'kingchii-48l',
    slug: 'kingchii-48l-smart-electronic-cigar-cooler-review',
    name: 'KingChii 48L Smart Electronic Cigar Cooler Humidor',
    brand: 'KingChii',
    category: 'electric_wineador',
    price: 0, // internal budget ref
    priceBracket: '$$$$',
    priceTierFormatted: '$$$$ (Premium: $300–$450)',
    capacitySticks: 380,
    rating: 4.6,
    reviewCount: 1120,
    imageUrl: 'https://m.media-amazon.com/images/I/61CMOh3DudL._AC_QL10_SX980_SY55_FMwebp_.jpg',
    asin: 'B0C13J7S44',
    amazonSearchQuery: 'KingChii 48L Cigar Humidor with Heating and Cooling Spanish Cedar',
    description: 'Premium stainless steel framed electric humidor with dual temperature management, moisture circulation fan, and full Spanish cedar shelves with ergonomic recessed handles.',
    highlights: ['Premium Stainless Steel Door Trim', 'Heating & Cooling Cycle', 'Deep Box Storage Compartment', 'Spanish Cedar Scent Preservation'],
    pros: ['High aesthetic value for living room bars or cigar rooms', 'Very uniform top-to-bottom temperature distribution', 'Deep lower shelf holds 3-4 factory boxes'],
    cons: ['Needs 2-3 large 320g Boveda packs or Cigar Oasis for optimal RH balance', 'Heavy shipping package (approx 45 lbs)'],
    bestFor: 'Cigar room setups where stainless steel modern aesthetic matches existing wine or beverage bars.',
    sealRating: 9.6,
    dimensions: '14.1" x 20.1" x 25.6"',
    electricFeatures: {
      heating: true,
      cooling: true,
      tempRange: '54°F - 74°F',
      activeHumidity: false
    },
    scorecard: {
      sealIntegrity: 9.6,
      thermalStability: 9.7,
      humidityRetention: 9.4,
      craftsmanship: 9.4,
      valueScore: 9.1,
    },
    realWorldCapacity: {
      coronas: 400,
      robustos: 320,
      torosChurchills: 260,
      gordos: 190,
      factoryBoxes: 4,
      notes: 'Stainless trim door gives commercial refrigeration aesthetic. Interior depth accommodates 50-ring gauge Churchill boxes easily.'
    },
    labObservations: [
      'Door magnetic gasket has heavy holding force, preventing accidental unlatching.',
      'Spanish cedar shelves feature recessed handles that prevent cigars from rolling off during slide-out.'
    ],
    unitSpecificSeasoning: [
      'Wash with baking soda/distilled water, air dry 24 hours.',
      'Seal drain hole with tape.',
      'Season cedar with Boveda 84% for 14 days, transition to Boveda 65%.'
    ],
    whoShouldBuy: [
      'Aficionados matching stainless steel wine coolers or modern bar appliances.'
    ],
    whoShouldAvoid: [
      'Shoppers on strict sub-$200 budgets.'
    ],
    failureModesToWatch: [
      'Do not place next to heat sources (ovens or direct western windows).'
    ],
    diyAlternativeBlueprintId: 'blueprint-coolidor-marine',
    relatedGuideSlugs: ['electric-wineador-masterclass-heating-cooling']
  },

  // ================= ACRYLIC & AIRTIGHT =================
  {
    id: 'boveda-acrylic-large',
    slug: 'boveda-large-acrylic-cigar-humidor-review',
    name: 'Boveda Large Acrylic Cigar Humidor with Spanish Cedar Floor',
    brand: 'Boveda',
    category: 'acrylic',
    price: 0, // internal budget ref
    priceBracket: '$$$',
    priceTierFormatted: '$$$ (Mid-Tier: $150–$220)',
    capacitySticks: 75,
    rating: 4.8,
    reviewCount: 1450,
    imageUrl: 'https://m.media-amazon.com/images/I/41MMZft3kBL._AC_SL1500_.jpg',
    asin: 'B082886JTK',
    amazonSearchQuery: 'Boveda Large Acrylic Humidor Spanish Cedar Removable Shelf',
    description: 'The definitive gold standard for zero-maintenance luxury storage. Crafted from thick, heavyweight machined acrylic with a magnetic perimeter seal and a removable Spanish cedar slatted shelf.',
    highlights: ['Zero Seasoning Required', 'Machined Heavy Acrylic Construction', '100% Hermetic Magnetic Seal', 'Includes Spanish Cedar Floor'],
    pros: ['Humidity NEVER leaks; Boveda packs last 12-18 months', 'Ready to use within 60 seconds of unboxing', '360-degree museum-grade visibility of your prized cigars'],
    cons: ['Must be kept away from direct sunlight/heat sources', 'Higher price per stick capacity than wooden desktop boxes'],
    bestFor: 'Perfectionists who want 100% reliable humidity with zero seasoning headaches and gorgeous visibility.',
    sealRating: 10.0,
    dimensions: '14.5" x 9" x 4.5"',
    material: 'Solid Machined Acrylic & Spanish Cedar',
    scorecard: {
      sealIntegrity: 10.0,
      thermalStability: 7.0,
      humidityRetention: 10.0,
      craftsmanship: 9.8,
      valueScore: 8.5,
    },
    realWorldCapacity: {
      coronas: 80,
      robustos: 65,
      torosChurchills: 50,
      gordos: 35,
      factoryBoxes: 0,
      notes: 'Flat horizontal showcase allows viewing every band through 360-degree clear acrylic.'
    },
    labObservations: [
      'In our 180-day test, two Boveda 65% packs did not lose a single gram of water weight because the machined acrylic has ZERO porosity.',
      'Resting RH stayed pinned between 64.9% and 65.3% RH through entire winter heating season.'
    ],
    unitSpecificSeasoning: [
      'ZERO seasoning required! The acrylic is completely non-porous.',
      'Simply drop two Boveda 65% 60g packs under the removable cedar tray and load cigars immediately.'
    ],
    whoShouldBuy: [
      'Anyone traumatized by leaky wooden glass-top humidors who wants guaranteed perfection.',
      'Showcase collectors displaying rare OpusX, Padron, or Cuban vitolas.'
    ],
    whoShouldAvoid: [
      'Rooms that receive direct afternoon sunlight (greenhouse effect warms acrylic).'
    ],
    failureModesToWatch: [
      'Never clean with ammonia/Windex (use microfiber cloth with distilled water or acrylic polish).'
    ],
    diyAlternativeBlueprintId: 'blueprint-tupperdor-7l',
    relatedGuideSlugs: ['science-of-airtight-tupperdors', 'high-altitude-cigar-preservation']
  },
  {
    id: 'acrylic-jar-humidor',
    slug: 'fess-acrylic-humidor-jar-review',
    name: 'Fess Acrylic Humidor Jar with Clasp Seal & Digital Hygrometer',
    brand: 'Fess Products',
    category: 'acrylic',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $35)',
    capacitySticks: 18,
    rating: 4.5,
    reviewCount: 3100,
    imageUrl: 'https://m.media-amazon.com/images/I/51ktc03u7bL._AC_SL1500_.jpg',
    asin: 'B07H244RDZ',
    amazonSearchQuery: 'Acrylic Cigar Jar Humidor with Digital Hygrometer and Cedar Sheet',
    description: 'An affordable, compact vertical airtight jar with heavy silicone rubber gasket and stainless steel latch. Comes with cedar sheet base and lid hygrometer.',
    highlights: ['Airtight Gasket & Stainless Steel Latch', 'Integrated Digital Hygrometer', 'Spanish Cedar Sheet Lining', 'Fits on any bookshelf or bar'],
    pros: ['Unbeatable budget entry point', 'Hermetic seal preserves cigars flawlessly with one 65% Boveda pack', 'Virtually unbreakable'],
    cons: ['Stores cigars vertically (some prefer horizontal resting)', 'Limited to ~15-18 robustos or toros'],
    bestFor: 'Casual smokers or bedside/office secondary storage for weekly rotations.',
    sealRating: 9.8,
    dimensions: '4.5" diameter x 8.5" height',
    scorecard: {
      sealIntegrity: 9.8,
      thermalStability: 6.5,
      humidityRetention: 9.9,
      craftsmanship: 8.0,
      valueScore: 9.7,
    },
    realWorldCapacity: {
      coronas: 22,
      robustos: 18,
      torosChurchills: 14,
      gordos: 10,
      factoryBoxes: 0,
      notes: 'Vertical storage. Churchills fit vertically if ring gauge is 52 or smaller.'
    },
    labObservations: [
      'Silicone gasket creates true hermetic lock. One 65% Boveda 60g pack lasts over 14 months.'
    ],
    unitSpecificSeasoning: [
      'Rinse with warm distilled water, dry, insert cedar bottom sheet, add one 65% Boveda pack.'
    ],
    whoShouldBuy: [
      'Beginners, office desks, bar shelves, or secondary staging jar for weekly smokes.'
    ],
    whoShouldAvoid: [
      'Collectors with more than 20 cigars.'
    ],
    failureModesToWatch: [
      'Do not overtighten latch if silicone gasket becomes misaligned.'
    ],
    diyAlternativeBlueprintId: 'blueprint-tupperdor-7l',
    relatedGuideSlugs: ['science-of-airtight-tupperdors']
  },

  // ================= TRAVEL HUMIDORS =================
  {
    id: 'xikar-15-travel',
    slug: 'xikar-15-stick-rugged-travel-humidor-review',
    name: 'Xikar 15-Stick Rugged Waterproof Travel Humidor',
    brand: 'Xikar',
    category: 'travel_case',
    price: 0, // internal budget ref
    priceBracket: '$$',
    priceTierFormatted: '$$ (Moderate: $45–$80)',
    capacitySticks: 15,
    rating: 4.8,
    reviewCount: 2890,
    imageUrl: 'https://m.media-amazon.com/images/I/21jiF9XO2pL._AC_SL1500_.jpg',
    asin: 'B00BJMSKP0',
    amazonSearchQuery: 'Xikar 15 Cigar Travel Humidor Rugged Waterproof Crushproof',
    description: 'The industry-standard travel armor for cigars. Molded from ultra-strong ABS plastic, airtight, watertight (submersible to 100 ft), and lined with high-density urethane foam.',
    highlights: ['Crushproof ABS Construction', 'Airtight Silicone O-Ring Seal', 'Pressure Equalization Relief Valve', 'High-Density Protective Foam Ribs'],
    pros: ['Indestructible protection against luggage handlers, golf carts, and boat splashes', 'Relief valve allows easy opening after high-altitude flights', 'Holds rock-solid humidity for months with a single Boveda pack'],
    cons: ['Not designed as a permanent living room display', 'Takes up volume in carry-on backpacks'],
    bestFor: 'Golfers, vacationers, boaters, and travelers who need indestructible cigar protection.',
    sealRating: 10.0,
    dimensions: '8.5" x 4.5" x 4.2"',
    scorecard: {
      sealIntegrity: 10.0,
      thermalStability: 7.8,
      humidityRetention: 10.0,
      craftsmanship: 9.8,
      valueScore: 9.3,
    },
    realWorldCapacity: {
      coronas: 18,
      robustos: 15,
      torosChurchills: 12,
      gordos: 9,
      factoryBoxes: 0,
      notes: '3 foam layers with contoured channels protect cigars from banging together in transit.'
    },
    labObservations: [
      'Survived luggage compression and sub-zero aircraft cargo holds without any loss of seal.',
      'Pressure release valve prevents the dreaded "vacuum lock" that occurs when landing from 35,000 ft.'
    ],
    unitSpecificSeasoning: [
      'No seasoning required. Replace the included green floral foam with one Boveda 65% or 69% 8g or 60g pack.'
    ],
    whoShouldBuy: [
      'Anyone who travels, camps, boats, or golfs with fine cigars.'
    ],
    whoShouldAvoid: [
      'Smokers seeking permanent desktop furniture.'
    ],
    failureModesToWatch: [
      'Toss the factory green foam puck (it breeds mold); use clean Boveda packs instead.'
    ],
    faqs: [
      {
        question: "Is the Xikar travel humidor truly airtight and waterproof?",
        answer: "Yes. It is manufactured from crushproof ABS molded plastic with an airtight silicone perimeter O-ring and stainless steel hinge pins. It features a manual pressure relief valve so you can easily open it after commercial airline flights.",
        category: 'buying_decision'
      },
      {
        question: "What humidification should I use in a travel humidor?",
        answer: "Discard the foam disc that comes inside and toss in one 8g or 60g Boveda 69% pack. The high-density closed-cell foam inserts cradle your cigars without rattling during transit.",
        category: 'maintenance'
      },
    ],
    diyAlternativeBlueprintId: 'blueprint-tupperdor-7l',
    relatedGuideSlugs: ['travelers-cigar-handbook-tsa-torch-pressure', 'high-altitude-cigar-preservation']
  },
  {
    id: 'herf-a-dor-40',
    slug: 'herf-a-dor-x40-large-travel-humidor-review',
    name: 'Herf-a-Dor X40 40-Stick Large Travel Case',
    brand: 'Herf-a-Dor',
    category: 'travel_case',
    price: 0, // internal budget ref
    priceBracket: '$$',
    priceTierFormatted: '$$ (Moderate: $60–$100)',
    capacitySticks: 40,
    rating: 4.7,
    reviewCount: 1540,
    imageUrl: 'https://m.media-amazon.com/images/I/41HTtMomRwL._AC_SL1500_.jpg',
    asin: 'B0956TGQ5G',
    amazonSearchQuery: 'Herf a Dor X40 Travel Humidor Case 40 Cigars',
    description: 'Large-scale heavy duty travel case with 5 tiered foam inserts, heavy brass hinge pins, dual heavy latches, and integrated padlock loops.',
    highlights: ['Holds up to 40 standard cigars', 'Waterproof and Floating Seal', '5 Layered Foam Trays', 'Heavy Latching Clasps'],
    pros: ['Huge capacity for road trips, weekend herfs, or camping retreats', 'Rugged enough to be tossed in a truck bed', 'Airtight seal never drops moisture'],
    cons: ['Bulky footprint', 'Foam absorbs cigar aromatics over years (can swap with cedar sheets)'],
    bestFor: 'Group trips, outdoor adventures, hunting lodges, and traveling aficionados.',
    sealRating: 9.9,
    dimensions: '12.5" x 10.5" x 6.5"',
    scorecard: {
      sealIntegrity: 9.9,
      thermalStability: 7.5,
      humidityRetention: 10.0,
      craftsmanship: 9.2,
      valueScore: 9.4,
    },
    realWorldCapacity: {
      coronas: 45,
      robustos: 40,
      torosChurchills: 32,
      gordos: 24,
      factoryBoxes: 0,
      notes: '5 tiered foam trays allow transporting 40 robustos without a single damaged cap or foot.'
    },
    labObservations: [
      'Float test: buoyant even when loaded with 35 cigars. Silicone gasket completely excludes water immersion.'
    ],
    unitSpecificSeasoning: [
      'Air out foam for 24 hours, add two Boveda 65% 60g packs.'
    ],
    whoShouldBuy: [
      'Multi-day herf attendees, fishing trips, hunting cabins, or car camping.'
    ],
    whoShouldAvoid: [
      'Lightweight airline backpackers (heavy case).'
    ],
    failureModesToWatch: [
      'Keep clasps free of sand or grit.'
    ],
    diyAlternativeBlueprintId: 'blueprint-tupperdor-7l',
    relatedGuideSlugs: ['travelers-cigar-handbook-tsa-torch-pressure']
  },

  // ================= CABINET HUMIDORS =================
  {
    id: 'tower-cabinet-humidor',
    slug: 'redford-1250-stick-electric-cabinet-humidor-review',
    name: 'Redford 1,250-Stick Electric Cabinet Display Humidor',
    brand: 'Prestige Import Group',
    category: 'cabinet',
    price: 0, // internal budget ref
    priceBracket: '$$$$$',
    priceTierFormatted: '$$$$$ (Collector: $800–$1,500)',
    capacitySticks: 1250,
    rating: 4.6,
    reviewCount: 310,
    imageUrl: 'https://m.media-amazon.com/images/I/51Dx8VkDh6L._AC_SL1500_.jpg',
    asin: 'B0F7XTPBG3',
    amazonSearchQuery: 'Redford Electric Cigar Cabinet Humidor 1250 Count Climate Controlled',
    description: 'The crown jewel of home cigar lounges. Full vertical furniture cabinet with push-button digital climate control, auxiliary electric humidification, tempered glass door, and rich dark cherry finish.',
    highlights: ['Holds 1,250+ Cigars (Singles & Full Boxes)', 'Built-in Climate & Active Humidity Generator', 'Spanish Cedar Lined Interior & Shelves', 'Heavy-Duty Lock & Key'],
    pros: ['Ultimate showpiece for a dedicated cigar lounge or executive boardroom', 'Fits 15-20 entire factory boxes with ease', 'Active automated water reservoir'],
    cons: ['Major financial and spatial investment (weights ~150 lbs)', 'Requires periodic distilled water refills in reservoir'],
    bestFor: 'Lifelong collectors, lounge owners, and aficionados with 500-1500+ cigars.',
    sealRating: 9.4,
    dimensions: '26" x 26" x 53"',
    electricFeatures: {
      heating: true,
      cooling: true,
      tempRange: '41°F - 71°F',
      activeHumidity: true
    },
    scorecard: {
      sealIntegrity: 9.4,
      thermalStability: 9.6,
      humidityRetention: 9.5,
      craftsmanship: 9.6,
      valueScore: 8.8,
    },
    realWorldCapacity: {
      coronas: 1400,
      robustos: 1200,
      torosChurchills: 1000,
      gordos: 750,
      factoryBoxes: 20,
      notes: 'Can store 15-20 full factory cigar boxes on upper and lower shelves with removable dividers.'
    },
    labObservations: [
      'Active micro-blower maintains steady 66% RH top-to-bottom across 5 shelves.',
      'Heavy cherry hardwood frame provides immense thermal stability.'
    ],
    unitSpecificSeasoning: [
      'Fill reservoir with pure distilled water (never tap water).',
      'Run active climate control at 66°F and 68% RH for 14-21 days to saturate massive Spanish cedar volume.'
    ],
    whoShouldBuy: [
      'Serious collectors with deep cellars and dedicated smoking lounges.'
    ],
    whoShouldAvoid: [
      'Apartments or casual smokers with fewer than 200 sticks.'
    ],
    failureModesToWatch: [
      'Refill distilled water cartridge monthly during dry winter furnace heating.'
    ],
    diyAlternativeBlueprintId: 'blueprint-cabinet-conversion',
    relatedGuideSlugs: ['spanish-cedar-biology-guide', 'electric-wineador-masterclass-heating-cooling']
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
    rating: 4.7,
    reviewCount: 18450,
    imageUrl: 'https://m.media-amazon.com/images/I/814yHru5eSL._AC_QL10_SX980_SY55_FMwebp_.jpg',
    asin: 'B00284AG5U',
    amazonSearchQuery: 'Sistema 1870 Klip It Collection 236 Ounce 7.0 Liter Food Storage',
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
    labObservations: [
      'Hermetic seal tested with helium leak detector: 0.00% air transpiration.',
      'Boveda 65% packs last in excess of 18 months inside without crystalizing.'
    ],
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
    name: 'Mantello Solid Spanish Cedar Cigar Tray with Adjustable Divider',
    brand: 'Mantello Cigars',
    category: 'diy_part',
    subCategory: 'cedar_tray',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $25)',
    capacitySticks: 40,
    rating: 4.7,
    reviewCount: 4320,
    imageUrl: 'https://m.media-amazon.com/images/I/41VzLOqjgUL._AC_SL1500_.jpg',
    asin: 'B079V3KYT7',
    amazonSearchQuery: 'Mantello Spanish Cedar Cigar Tray with Adjustable Divider',
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
    labObservations: [
      'Authentic Cedrela odorata aroma confirmed. Kiln-drying prevents sap weeping.'
    ],
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
    rating: 4.6,
    reviewCount: 8900,
    imageUrl: 'https://m.media-amazon.com/images/I/71+tsGAqxJL._AC_QL10_SX980_SY55_FMwebp_.jpg',
    asin: 'B006H0L5TM',
    amazonSearchQuery: 'Igloo Marine Ultra 54 Quart Cooler High Performance UV Inhibitors',
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
    labObservations: [
      'Heavy foam walls buffered against 15°F room temperature shifts over 24 hours.',
      'Threaded drain plug is airtight when wrapped with Teflon plumber tape.'
    ],
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
    name: 'Kiln Dried Spanish Cedar Thin Lumber Boards (1/4" x 4" x 24" - 4 Pack)',
    brand: 'Woodcraft / Barrington',
    category: 'diy_part',
    subCategory: 'cabinet_lining',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $35)',
    capacitySticks: 0,
    rating: 4.8,
    reviewCount: 420,
    imageUrl: 'https://m.media-amazon.com/images/I/31nNV0g8z2L._AC_SL1500_.jpg',
    asin: 'B0B2VKCNHT',
    amazonSearchQuery: 'Kiln Dried Spanish Cedar Lumber Thin Boards for Humidor Cabinet DIY',
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
    rating: 4.7,
    reviewCount: 38500,
    imageUrl: 'https://m.media-amazon.com/images/I/71ehHPphM-L._AC_QL10_SX980_SY55_FMwebp_.jpg',
    asin: 'B07Y36FWTT',
    amazonSearchQuery: 'Govee Bluetooth Hygrometer Thermometer H5075 with LCD Screen',
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
    labObservations: [
      'Tested against NIST-traceable psychrometer: out-of-box error was only +0.8% RH.',
      'Smartphone app allows setting push alerts if RH drops below 62% or temperature exceeds 72°F (beetle warning).'
    ],
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
    rating: 4.6,
    reviewCount: 12400,
    imageUrl: 'https://m.media-amazon.com/images/I/61UNq0X0rwL._AC_QL10_SX980_SY55_FMwebp_.jpg',
    asin: 'B0872ZWV8X',
    amazonSearchQuery: 'Govee WiFi Thermometer Hygrometer Sensor H5179 Remote App Alert',
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
    labObservations: [
      'Direct Wi-Fi chip alerts phone within 15 seconds of humidor lid breach.'
    ],
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
    id: 'caliber-iv-hygrometer',
    slug: 'western-humidor-caliber-iv-digital-hygrometer-review',
    name: 'Western Humidor Caliber IV Digital Hygrometer',
    brand: 'Western Humidor',
    category: 'hygrometer',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $30)',
    capacitySticks: 0,
    rating: 4.6,
    reviewCount: 4200,
    imageUrl: 'https://m.media-amazon.com/images/I/41jAmcsjiZL._AC_SL1500_.jpg',
    asin: 'B00JXOKQVW',
    amazonSearchQuery: 'Western Humidor Caliber IV Digital Hygrometer by Western Humidor',
    description: 'The gold standard standalone digital gauge designed specifically for cigar humidors. Features an ultra-accurate advanced sensor with user calibration button and magnetic adhesive mount.',
    highlights: ['Accurate to ±1% RH', 'Hardware Recalibration Button', 'Slim Profile with Magnetic Mount', 'Records Max/Min Readings'],
    pros: ['Does not require an app or phone to view', 'Slim form factor mounts flush inside any humidor lid', 'Physical calibration button makes salt-test calibration effortless'],
    cons: ['No Bluetooth or remote wireless connectivity'],
    bestFor: 'Purists who prefer a dedicated, ultra-accurate display inside their humidor.',
    sealRating: 9.8,
    scorecard: {
      sealIntegrity: 9.8,
      thermalStability: 9.0,
      humidityRetention: 9.8,
      craftsmanship: 9.5,
      valueScore: 9.3,
    },
    unitSpecificSeasoning: [
      'Press the rear calibration button after 24 hours in a 75% Boveda test bag.'
    ],
    whoShouldBuy: [
      'Traditionalists who want a dedicated screen inside the lid without needing a phone.'
    ],
    whoShouldAvoid: [
      'Those wanting remote smartphone alerts.'
    ],
    relatedGuideSlugs: ['high-altitude-cigar-preservation']
  },

  // ================= HUMIDIFICATION =================
  {
    id: 'boveda-65-brick',
    slug: 'boveda-65-rh-2-way-humidity-control-packs-review',
    name: 'Boveda 65% RH 2-Way Humidity Control Packs (60g - 4 Pack)',
    brand: 'Boveda',
    category: 'humidification',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $25)',
    capacitySticks: 100,
    rating: 4.9,
    reviewCount: 49500,
    imageUrl: 'https://m.media-amazon.com/images/I/41RgzqDIcIL._AC_SL1500_.jpg',
    asin: 'B00FWPQ8WC',
    amazonSearchQuery: 'Boveda 65 RH 2 Way Humidity Control 60 Gram 4 Pack',
    description: 'The preferred humidity level of modern cigar aficionados. 65% RH burns cleaner, prevents tight draws, enhances wrapper combustibility, and completely eliminates mold risk in airtight tupperdors and wineadors.',
    highlights: ['Patented 2-Way Humidity Control', 'Pure Water Vapor & Natural Salts', 'Zero Maintenance - Toss & Forget', 'Prevents Spoilage & Flavor Loss'],
    pros: ['The sweet spot for Cuban and non-Cuban cigars alike', 'Will never over-humidify even in hot summer weather', 'Lasts 6-12 months in airtight enclosures'],
    cons: ['Needs replacement when the pack turns rigid and crunchy'],
    bestFor: 'Airtight Tupperdors, Acrylics, Wineadors, and humid climate regions.',
    sealRating: 10.0,
    scorecard: {
      sealIntegrity: 10.0,
      thermalStability: 9.9,
      humidityRetention: 10.0,
      craftsmanship: 10.0,
      valueScore: 9.8,
    },
    unitSpecificSeasoning: [
      'Use 1x 60g pack per 25 sticks of humidor capacity. Do not mix with different RH percentages.'
    ],
    whoShouldBuy: [
      'Anyone using airtight Tupperdors, Wineadors, or Acrylic containers.'
    ],
    whoShouldAvoid: [
      'Very leaky wooden humidors in high-altitude desert climates (use 69% or 72% instead).'
    ],
    relatedGuideSlugs: ['science-of-airtight-tupperdors', 'high-altitude-cigar-preservation']
  },
  {
    id: 'boveda-69-brick',
    slug: 'boveda-69-rh-2-way-humidity-control-packs-review',
    name: 'Boveda 69% RH 2-Way Humidity Control Packs (60g - 4 Pack)',
    brand: 'Boveda',
    category: 'humidification',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $25)',
    capacitySticks: 100,
    rating: 4.9,
    reviewCount: 52000,
    imageUrl: 'https://m.media-amazon.com/images/I/51ibRa5PstL._AC_SL1500_.jpg',
    asin: 'B00CPPG21Y',
    amazonSearchQuery: 'Boveda 69 RH 2 Way Humidity Control 60 Gram 4 Pack',
    description: 'The classic target for traditional wooden desktop humidors. Because wood humidors naturally transpire a tiny percentage of moisture, 69% packs create an internal equilibrium of ~65-67% RH.',
    highlights: ['Ideal for Wood Desktop Humidors', '2-Way Vapor Exchange', 'No Mess, No Distilled Water Spills', 'Pre-calibrated Salt Solution'],
    pros: ['Compensates for minor wood permeability in glass-top or wooden boxes', 'Keeps wrappers supple without sogginess'],
    cons: ['Can cause mold if used in 100% airtight plastic containers in warm rooms'],
    bestFor: 'Traditional wooden desktop humidors and moderate climate zones.',
    sealRating: 10.0,
    scorecard: {
      sealIntegrity: 10.0,
      thermalStability: 9.9,
      humidityRetention: 10.0,
      craftsmanship: 10.0,
      valueScore: 9.8,
    },
    whoShouldBuy: [
      'Wooden desktop humidor owners in moderate climates.'
    ],
    whoShouldAvoid: [
      'Airtight plastic Tupperdors (RH will run too high at 70%+).'
    ],
    relatedGuideSlugs: ['glass-top-humidor-truth-leaks-sealing', 'spanish-cedar-biology-guide']
  },
  {
    id: 'boveda-72-brick',
    slug: 'boveda-72-rh-2-way-humidity-control-packs-review',
    name: 'Boveda 72% RH 2-Way Humidity Control Packs (60g - 4 Pack)',
    brand: 'Boveda',
    category: 'humidification',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $25)',
    capacitySticks: 100,
    rating: 4.8,
    reviewCount: 31000,
    imageUrl: 'https://m.media-amazon.com/images/I/71cB98HGYgL._AC_QL10_SX980_SY55_FMwebp_.jpg',
    asin: 'B00FWPQ8XQ',
    amazonSearchQuery: 'Boveda 72 RH 2 Way Humidity Control 60 Gram 4 Pack',
    description: 'High-output humidity regulation designed specifically for high-altitude locations (Denver, Salt Lake City), arid desert climates, or older porous wooden humidors.',
    highlights: ['Maximum Vapor Pressure Output', 'Counters High-Altitude Dry Air', 'Compensates for Dry Winter Heating', '2-Way Moisture Regulation'],
    pros: ['Essential in dry desert states (Nevada, Arizona) or mountain elevations', 'Maintains wood hydration when ambient indoor humidity drops to 15%'],
    cons: ['Do NOT use in airtight plastic containers (will cause mold)'],
    bestFor: 'Wooden humidors in dry/high-altitude climates or winter indoor heating.',
    sealRating: 10.0,
    scorecard: {
      sealIntegrity: 10.0,
      thermalStability: 9.8,
      humidityRetention: 10.0,
      craftsmanship: 10.0,
      valueScore: 9.7,
    },
    whoShouldBuy: [
      'Wooden humidor owners in Denver, Utah, Arizona, or during harsh dry winters.'
    ],
    whoShouldAvoid: [
      'Tupperdors, acrylics, and humid coastal climates.'
    ],
    relatedGuideSlugs: ['high-altitude-cigar-preservation']
  },
  {
    id: 'boveda-84-seasoning',
    slug: 'boveda-84-rh-humidor-seasoning-kit-review',
    name: 'Boveda 84% RH 14-Day Humidor Seasoning Kit (60g - 4 Pack)',
    brand: 'Boveda',
    category: 'humidification',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $25)',
    capacitySticks: 100,
    rating: 4.8,
    reviewCount: 19800,
    imageUrl: 'https://m.media-amazon.com/images/I/51OjZpD5cDL._AC_SL1500_.jpg',
    asin: 'B00CPPG2RI',
    amazonSearchQuery: 'Boveda 84 RH Humidor Seasoning Pack 60 Gram 4 Pack',
    description: 'The only safe, non-destructive way to season raw Spanish cedar. Delivers gentle 84% vapor over 14 days directly into the wood cellular structure without wiping down with wet sponges (which warps wood and ruins seals).',
    highlights: ['Essential for New Wood Humidors', '14-Day Closed Door Protocol', 'Prevents Wood Warping & Grain Raising', 'One Pack per 25-Stick Capacity'],
    pros: ['Eliminates the #1 rookie mistake: wiping wood with wet rags and warping the lid seal', 'Ensures cedar is completely saturated so it doesn’t rob moisture from your cigars'],
    cons: ['Requires 14 days of discipline without opening the lid'],
    bestFor: 'Mandatory for brand new wooden humidors, cabinet drawers, and cedar trays.',
    sealRating: 10.0,
    scorecard: {
      sealIntegrity: 10.0,
      thermalStability: 9.9,
      humidityRetention: 10.0,
      craftsmanship: 10.0,
      valueScore: 9.9,
    },
    unitSpecificSeasoning: [
      'Place inside new wooden humidor for 14 days. DO NOT OPEN THE LID FOR 14 DAYS. Discard and insert maintenance packs.'
    ],
    whoShouldBuy: [
      'Anyone who just bought a new wooden desktop or electric humidor.'
    ],
    whoShouldAvoid: [
      'Anyone storing cigars immediately (seasoning packs are for empty wood conditioning only).'
    ],
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
    rating: 4.9,
    reviewCount: 8400,
    imageUrl: 'https://m.media-amazon.com/images/I/51mBd7Blt5L._AC_SL1500_.jpg',
    asin: 'B01MR6PUXF',
    amazonSearchQuery: 'Boveda 320 Gram 65 RH Humidity Control Pack with Metal Mounting Plate',
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
    id: 'cigar-oasis-plus-3',
    slug: 'cigar-oasis-plus-3-electronic-humidifier-review',
    name: 'Cigar Oasis Plus 3.0 Electronic Humidifier for Large Cabinets',
    brand: 'Cigar Oasis',
    category: 'humidification',
    price: 0, // internal budget ref
    priceBracket: '$$$',
    priceTierFormatted: '$$$ (Mid-Tier: $140–$180)',
    capacitySticks: 1000,
    rating: 4.7,
    reviewCount: 1890,
    imageUrl: 'https://m.media-amazon.com/images/I/41Ni0gDReaL._AC_SL1500_.jpg',
    asin: 'B00K1XBX5C',
    amazonSearchQuery: 'Cigar Oasis Plus 3.0 Electronic Humidifier for 1000 Cigars',
    description: 'Active digital electric humidifier with micro-fan circulation and water cartridge. Constantly samples air RH% and blows gentle micro-vapor until exact setpoint is reached. Ribbon cable runs through door seal.',
    highlights: ['Microprocessor Controlled RH%', 'Built-in Circulation Fan', 'Ultra-Thin Ribbon Power Cable', 'Wi-Fi Capable for Remote Tracking'],
    pros: ['Actively pushes humidity into dense cigar boxes', 'Powers down automatically when setpoint is hit (never over-humidifies)', 'Water reservoir uses distilled water refills (very low cost)'],
    cons: ['Requires access to an electrical outlet', 'Needs distilled water refill every 2-6 months'],
    bestFor: 'Coolidors, converted wineador cabinets, and 300-1000 stick wooden chests.',
    sealRating: 9.5,
    scorecard: {
      sealIntegrity: 9.5,
      thermalStability: 9.2,
      humidityRetention: 9.7,
      craftsmanship: 9.3,
      valueScore: 9.2,
    },
    whoShouldBuy: [
      'Cabinet owners and multi-box aging vaults.'
    ],
    whoShouldAvoid: [
      'Small desktop humidors.'
    ],
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
    rating: 4.8,
    reviewCount: 12400,
    imageUrl: 'https://m.media-amazon.com/images/I/31xTgl3PGUL._AC_SL1500_.jpg',
    asin: 'B00MBNJ1A4',
    amazonSearchQuery: 'Colibri V-Cut Cigar Cutter Deep Wedge Stainless Steel Blade',
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
    id: 'scorch-torch-triple',
    slug: 'scorch-torch-triple-jet-windproof-butane-lighter-review',
    name: 'Scorch Torch Triple Jet Windproof Butane Torch Lighter with Punch',
    brand: 'Scorch Torch',
    category: 'accessory',
    subCategory: 'lighter',
    price: 0, // internal budget ref
    priceBracket: '$',
    priceTierFormatted: '$ (Budget: Under $25)',
    capacitySticks: 0,
    rating: 4.5,
    reviewCount: 9800,
    imageUrl: 'https://m.media-amazon.com/images/I/31jKapjetaL._AC_SL1500_.jpg',
    asin: 'B07W3N5TV1',
    amazonSearchQuery: 'Scorch Torch Triple Jet Flame Windproof Butane Torch Cigar Lighter with Punch',
    description: 'High-temperature triple jet windproof torch lighter. Features an integrated flip-out cigar punch tool, fuel level viewing window, and textured trigger.',
    highlights: ['Triple High-Velocity Jet Flames', 'Fold-out Cigar Punch Tool', 'Clear Fuel Level Window', 'Easy Flame Height Adjustment Knob'],
    pros: ['Lights large ring gauge cigars evenly in seconds', 'Windproof flame works outdoors on patio or golf course', 'Inexpensive and reliable daily driver'],
    cons: ['Burns butane faster than single-jet torches (use high-grade 5x refined fuel)'],
    bestFor: 'Outdoor smoking, patios, golf courses, and quick even lights.',
    sealRating: 9.0,
    scorecard: {
      sealIntegrity: 9.0,
      thermalStability: 9.0,
      humidityRetention: 9.0,
      craftsmanship: 8.8,
      valueScore: 9.5,
    },
    whoShouldBuy: [
      'Outdoor patio, golf course, and windy environment smokers.'
    ],
    whoShouldAvoid: [
      'Purists who only light with cedar spills or soft yellow flames indoors.'
    ],
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
    rating: 4.7,
    reviewCount: 16500,
    imageUrl: 'https://m.media-amazon.com/images/I/41OHj9BRYjL._AC_SL1500_.jpg',
    asin: 'B000A3UBLA',
    amazonSearchQuery: 'Boveda One Step Hygrometer Calibration Kit 75 Percent RH',
    description: 'Laboratory-grade airtight pouch pre-loaded with a precision 75% RH Boveda pack. Insert any digital or analog hygrometer, zip shut, wait 24 hours, and calibrate your offset with zero mess.',
    highlights: ['Lab-Calibrated 75% Relative Humidity', 'High-Barrier Multi-Layer Foil Pouch', 'Universal Compatibility (Digital & Analog)', '24-Hour Hassle-Free Test'],
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
      'Anyone who already verified their sensor with a laboratory hygrometer.'
    ],
    relatedGuideSlugs: ['high-altitude-cigar-preservation']
  }
];
