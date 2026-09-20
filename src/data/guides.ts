import type { CigarGuide } from '../types/humidor';

const editorialByline = {
  author: 'Best Cigar Humidor Editorial Desk',
  authorRole: 'Independent storage research & fact-checking',
  reviewedDate: '2026-09-14',
};

export const CIGAR_GUIDES: CigarGuide[] = [
  {
    id: 'best-travel-humidors',
    slug: 'best-travel-humidors',
    title: 'Best Travel Humidors: 5, 10, and 40-Cigar Cases Compared',
    subtitle: 'Choose a hard case by the cigars you actually carry, the protection you need, and the room left for humidity control.',
    category: 'selection',
    categoryLabel: 'Travel & Mobility',
    readTimeMinutes: 9,
    ...editorialByline,
    publishedDate: '2026-09-19',
    reviewedDate: '2026-09-19',
    heroVisual: 'travel',
    excerpt: 'Three verified hard travel humidors compared by realistic use case, listed capacity, included components, bulk, and flight-planning tradeoffs.',
    featuredProductIds: ['flauno-travel-5', 'cigar-caddy-10', 'cigar-caddy-40'],
    comparisonRows: [
      {
        productId: 'flauno-travel-5',
        fit: 'Day trip or compact weekend kit',
        capacity: 'Listing: five medium cigars, or four at 52 ring gauge',
        tradeoff: 'Smallest footprint; cutter and disc use some interior room'
      },
      {
        productId: 'cigar-caddy-10',
        fit: 'Weekend trip or a few cigars to share',
        capacity: 'Listing: up to ten Churchill cigars',
        tradeoff: 'More flexible than a five-count case, but bulkier in a day bag'
      },
      {
        productId: 'cigar-caddy-40',
        fit: 'Group travel or a longer stay',
        capacity: 'Listing and maker claim: up to 40 cigars',
        tradeoff: 'Large 12.25 × 9.75 × 5.375-inch case; capacity varies with cigar size'
      }
    ],
    useBrandedProductArt: true,
    relatedBlueprintIds: ['blueprint-tupperdor-7l'],
    sections: [
      {
        id: 'how-we-chose',
        title: '1. What these travel picks mean',
        contentMarkdown: `This guide compares three useful travel sizes: a compact five-cigar kit, a ten-cigar hard case, and a large forty-cigar case. We checked each product's current size, included accessories, and construction. We have not personally drop-tested or water-tested these cases, so protection and capacity claims come from the maker.

A hard case protects cigars from bumps and crushing, but it does not control temperature. Never leave one in a hot car. Choose the smallest case that comfortably fits the cigars and accessories you actually carry.

**Affiliate disclosure:** Best Cigar Humidor may earn a commission when you use a product buying link, at no extra cost to you. We do not publish Amazon prices, star ratings, review counts, badges, or claims of ownership.`
      },
      {
        id: 'comparison',
        title: '2. Compare the three capacity tiers',
        contentMarkdown: `Estimate how many cigars you will carry on a normal trip, then add only a little working room. Oversizing adds bulk; overpacking can press feet, caps, and wrappers into the foam or accessories. Advertised counts are fit claims, not measurements from our editorial team. Long Churchills, thick cigars, tubes, a cutter, and the humidity source all change usable capacity.

The decision table is intentionally practical. Choose the five-count for compact carry, the ten-count when you want a margin for a weekend, and the forty-count only when a group or extended trip justifies luggage-sized storage.`
      },
      {
        id: 'flauno-five',
        title: '3. Flauno five-cigar case: compact kit',
        contentMarkdown: `The [Flauno five-cigar travel case](/product/flauno-five-cigar-travel-humidor-review) is the smallest option here. It is designed for up to five medium-size cigars and includes a cutter. Its hard shell, two clasps, sealed edge, and shaped foam make it a practical day-trip kit.

**Choose it if** you normally carry three to five cigars and want everything in one compact case. **Choose the ten-count instead if** you carry larger cigars, need more room around the wrappers, or expect to share. The included humidifier still needs careful setup; keep free liquid away from the cigars and check the humidity before a long trip.`
      },
      {
        id: 'cigar-caddy-ten',
        title: '4. Cigar Caddy 3240: middle-size hard case',
        contentMarkdown: `The [Cigar Caddy 3240](/product/cigar-caddy-10-travel-humidor-review) is the middle-size choice. It is designed for up to ten cigars and adds a protective foam interior, two clasps, a humidifier, a carrying lanyard, and a pressure-release valve for easier opening after a flight.

**Choose it if** a five-cigar case is often too tight but a forty-cigar case is far more than you need. **Choose the Flauno if** compact size and an included cutter matter more. **Choose the forty-count if** you regularly pack for a group. Keep cutters and other hard accessories away from the wrappers.`
      },
      {
        id: 'cigar-caddy-forty',
        title: '5. Cigar Caddy 40: group-trip capacity',
        contentMarkdown: `The [Cigar Caddy 40](/product/cigar-caddy-40-travel-humidor-review) is the large group-trip option. It uses a molded hard shell, locking clasps, sturdy hinges, protective foam, and a humidifier in the lid. At roughly 12 × 10 × 5 inches, it is closer to a small equipment case than a pocket humidor.

**Choose it if** you are packing for a group, carrying a broad selection, or taking a longer trip. **Choose a smaller case if** you usually bring only a few cigars. Forty cigars is the maker's maximum; thick, tubed, or unusually long cigars will reduce the real fit. Set up and check the case before departure instead of adding water at the last minute.`
      },
      {
        id: 'pack-and-monitor',
        title: '6. Pack for protection and stable humidity',
        contentMarkdown: `Tobacco exchanges moisture with surrounding air, and published sorption research shows that equilibrium moisture changes with RH and tobacco type. That supports monitoring the actual case instead of assuming an “airtight” label or humidifier disc guarantees cigar condition. NIST calibrates humidity instruments against known humidified air; at home, the practical lesson is to compare a small hygrometer with a trusted reference and treat every display as a measurement with uncertainty.

1. Air out a new case open until no packaging or foam odor remains. Clean only as its maker directs and let every part dry fully.
2. Check that the gasket, hinge, and clasps are clean and undamaged. A marketing claim does not replace inspecting the case you received.
3. Use one humidity method in the amount its maker specifies. Do not let free liquid touch cigars or pool in the foam.
4. Close the loaded case before departure and watch the trend with a checked compact hygrometer when trip length justifies one.
5. Arrange cigars so feet and caps are not pressed against the cutter, humidifier, or clasps. Do not force the lid.
6. Keep the case away from direct sun, heaters, and parked vehicles. These passive cases do not regulate temperature.

For home storage after the trip, move the cigars back to a properly monitored humidor. The [humidor finder](/) compares permanent formats, while the [beginner humidor guide](/guides/best-humidors-for-beginners) explains why a travel case is usually not the best primary collection box.`
      },
      {
        id: 'flying',
        title: '7. A humidor does not make every accessory flight-safe',
        contentMarkdown: `For U.S. flights, check the TSA and FAA again before each departure and check the airline as well. FAA guidance updated April 13, 2026 says torch, blue-flame, and jet-flame lighters are not allowed in the cabin or ordinary checked baggage. It permits one absorbed-liquid or ordinary butane lighter per passenger in carry-on or on the person, subject to the detailed restrictions on its page. Butane refills are forbidden. TSA says cigar cutters are generally allowed in carry-on but notes that screening officers make the final decision.

The presence of a cigar cutter, lighter pocket, pressure feature, or “travel” label does not override those rules. Pack the case so a gate-checked carry-on can be reorganized without losing restricted items, and never assume a cigar humidor is a DOT-approved lighter case. Our [flying-with-cigars guide](/guides/travelers-cigar-handbook-tsa-torch-pressure) keeps the equipment rules separate from the storage decision.`
      },
    ],
    faqs: [
      {
        question: 'What size travel humidor should I buy?',
        answer: 'Count what you normally carry, include the dimensions of your longest and thickest cigars, and leave room for the humidity source without compressing wrappers. Five suits a compact outing, ten adds weekend flexibility, and forty is mainly for groups or extended travel.'
      },
      {
        question: 'Do advertised cigar counts include large ring gauges?',
        answer: 'Not reliably. The Flauno listing is unusually specific—five medium cigars or four at 52 ring gauge—but other counts are maker or listing maximums. Thick, long, or tubed cigars and accessories can reduce usable capacity.'
      },
      {
        question: 'Does a travel humidor control temperature?',
        answer: 'No. These are passive hard cases. They may protect against impacts and slow moisture exchange, but they cannot cool a hot car, heat a cold bag, or hold a chosen temperature.'
      },
      {
        question: 'Can I bring the included cigar cutter on a U.S. flight?',
        answer: 'TSA currently lists cigar cutters as generally allowed in carry-on, while recommending checked baggage and reserving final discretion to the officer. Recheck the current TSA page and your airline before travel.'
      },
      {
        question: 'Can I pack a torch lighter inside the travel humidor?',
        answer: 'Not as a way around flight rules. FAA says torch, blue-flame, and jet-flame lighters are not allowed in the cabin or ordinary checked baggage. A cigar humidor is not a DOT-approved lighter container.'
      }
    ],
    sources: [
      {
        label: 'Moisture sorption isotherms of various tobaccos',
        publisher: 'Agricultural and Biological Chemistry, 1978',
        url: 'https://doi.org/10.1271/bbb1961.42.2285',
        sourceType: 'Peer-reviewed research'
      },
      {
        label: 'Hygrometers and relative-humidity calibration',
        publisher: 'National Institute of Standards and Technology',
        url: 'https://www.nist.gov/pml/sensor-science/thermodynamic-metrology/hygrometers',
        sourceType: 'Government / technical reference'
      },
      {
        label: 'PackSafe: lighters',
        publisher: 'Federal Aviation Administration',
        url: 'https://www.faa.gov/hazmat/packsafe/lighters',
        sourceType: 'Government / regulation'
      },
      {
        label: 'What Can I Bring? Cigar cutters',
        publisher: 'Transportation Security Administration',
        url: 'https://www.tsa.gov/travel/security-screening/whatcanibring/items/cigar-cutters',
        sourceType: 'Government / regulation'
      },
      {
        label: 'Cigar Caddy 40 specifications (HUM-CC40)',
        publisher: 'Quality Importers',
        url: 'https://www.qualityimporters.com/cigar-caddyr-40ct-black-40-ct',
        sourceType: 'Manufacturer instructions'
      }
    ]
  },
  {
  "id": "best-electric-cigar-humidors",
  "slug": "best-electric-cigar-humidors",
  "title": "Best Electric Cigar Humidors: 16L, 23L, and 33L Compared",
  "subtitle": "Choose a cabinet by room temperature, usable space, and humidity setup—not the largest advertised cigar count.",
  "category": "selection",
  "categoryLabel": "Electric & Tech",
  "readTimeMinutes": 9,
  "author": "Best Cigar Humidor Editorial Desk",
  "authorRole": "Independent storage research & fact-checking",
  "publishedDate": "2026-09-17",
  "reviewedDate": "2026-09-17",
  "heroVisual": "wineador",
  "excerpt": "Three verified electric cabinets compared by collection size, temperature function, humidity workload, and setup tradeoffs.",
  "featuredProductIds": [
    "kingchii-16l",
    "needone-23l",
    "kingchii-33l"
  ],
  "comparisonRows": [
    {
      "productId": "kingchii-16l",
      "fit": "Small space or smaller collection",
      "capacity": "16 L; maker/listing claim up to 100 cigars",
      "tradeoff": "Compact shelves leave less room for boxes and larger cigars"
    },
    {
      "productId": "needone-23l",
      "fit": "Warm indoor room needing cooling",
      "capacity": "23 L; listing claim up to 150 cigars",
      "tradeoff": "Listing describes cooling control; do not assume it heats"
    },
    {
      "productId": "kingchii-33l",
      "fit": "More loose cigars or a few boxes",
      "capacity": "33 L; maker/listing claim up to 250 cigars",
      "tradeoff": "Larger footprint and more wood to condition"
    }
  ],
  "useBrandedProductArt": true,
  "relatedBlueprintIds": [
    "blueprint-converted-wineador"
  ],
  "sections": [
    {
      "id": "how-we-chose",
      "title": "1. What these picks mean",
      "contentMarkdown": "These are three **size and use-case choices**, not lab-tested performance winners. We checked each current product page for cabinet size, advertised capacity, cedar storage, and temperature functions. We have not personally measured temperature stability, humidity consistency, power use, or noise, so those claims come from the maker.\n\n**Affiliate disclosure:** Best Cigar Humidor may earn a commission when you use a product buying link, at no extra cost to you. We do not publish live prices, star ratings, or review counts. The comparison below is editorial guidance for choosing a format, not a claim that one cabinet is objectively best for every room."
    },
    {
      "id": "comparison",
      "title": "2. Compare the three cabinet sizes",
      "contentMarkdown": "Start with the **temperature of the room where the cabinet will run**. Then estimate the space taken by your actual cigar lengths, ring gauges, boxes, humidity source, and the shelves. The stated 100, 150, and 250 counts are maker or listing maximums, not our measured fit. A shelf of large cigars or a factory box can use the space differently from rows of small loose cigars.\n\nThe table summarizes the practical buying decision. None of these product names by itself proves automatic humidity control. Plan to read the exact manual, provide the specified humidity method, and check an independent hygrometer after setup."
    },
    {
      "id": "kingchii-16",
      "title": "3. KingChii 16L: compact cabinet",
      "contentMarkdown": "The current Amazon page for the [KingChii 16L review](/product/kingchii-16l-electric-cigar-humidor-review) identifies a two-layer, 100-count electric cabinet with Spanish cedar storage and a hygrometer. KingChii's own 16L page says its semiconductor system can heat and cool within a stated 54–74°F setting range. Treat that as a manufacturer specification, not proof it will hold every set point in every room.\n\n**Choose it if** floor or desk space matters and you store a modest rotation of loose cigars. **Choose another size if** you want to keep factory boxes or many long, thick cigars. The nominal 100-count figure can shrink quickly with those layouts. The hygrometer tells you something about RH, but the temperature controller alone does not add or remove the water needed to maintain your chosen RH."
    },
    {
      "id": "needone-23",
      "title": "4. NEEDONE 23L: cooling-focused middle size",
      "contentMarkdown": "The [NEEDONE 23L](/product/needone-23l-electric-cigar-humidor-review) is a cooling-only cabinet with Spanish cedar storage, a hygrometer, and room for a growing collection. It does not heat the cabinet or control humidity automatically.\n\n**Choose it if** your indoor room tends to run warmer than your preferred storage temperature and the smaller 16 L option is too tight. **Choose a heating-capable model instead if** the room can become cold. Leave ventilation space around the cabinet, and avoid direct sun or an unconditioned garage."
    },
    {
      "id": "kingchii-33",
      "title": "5. KingChii 33L: room for a growing collection",
      "contentMarkdown": "The current [KingChii 33L review](/product/kingchii-33l-electric-cigar-humidor-review) links to the four-layer, 250-count Amazon variant. The maker describes heating and cooling temperature control, Spanish cedar storage, and a stated 54–74°F setting range. Those are advertised specifications. They do not establish independent temperature accuracy or humidity uniformity.\n\n**Choose it if** you need more flexible shelf space for a growing mix of cigars and a few small boxes. **Choose a smaller unit if** most days you hold only a handful of cigars or space and energy use matter more than spare capacity. The 33 L interior gives more arrangement options, but each cedar surface and cigar load changes the humidity balance during setup. Verify RH at more than one shelf over time before trusting a single front display."
    },
    {
      "id": "setup",
      "title": "6. Set up the cabinet before loading valuable cigars",
      "contentMarkdown": "Tobacco exchanges moisture with surrounding air; published tobacco sorption research supports monitoring the storage environment rather than assuming a fixed setting guarantees cigar condition. NIST's hygrometer calibration guidance is a reminder that RH readouts are measurements with uncertainty. A built-in display is useful, but compare it with a checked independent instrument.\n\n1. Measure the intended room's high and low temperatures for several days. Match them to the **exact manual's** ambient limits, heating or cooling functions, and ventilation clearance.\n2. Let a shipped cabinet stand and acclimate for the period its manual specifies. Clean it only as directed. Check for odors and confirm the door closes properly.\n3. Condition unfinished cedar using the cabinet and humidity-source maker's instructions. Keep free water away from cigars, electronics, and unfinished wood unless the manual specifically directs otherwise.\n4. Put a checked hygrometer on a shelf, run the empty cabinet with the selected humidity method, and observe the trend. Add cigars gradually. Recheck after the load changes.\n5. If the readings drift, verify the instrument, door, humidity source, and room conditions before changing multiple settings at once. Watch for condensation and follow the manual's drainage directions.\n\nOur [electric wineador setup guide](/guides/electric-wineador-masterclass-heating-cooling) explains temperature functions, drainage, and cedar conditioning in more detail. The [humidor finder](/) can help decide whether an electric cabinet fits your room and collection."
    },
    {
      "id": "when-to-skip",
      "title": "7. When a passive humidor makes more sense",
      "contentMarkdown": "If the room already stays near your desired storage temperature, an electric cabinet may add cost, space, electricity use, and setup without solving a temperature problem. A compact [acrylic jar or wood desktop option](/guides/best-humidors-for-beginners) may suit a small rotation. A sealed food container can offer more room with simple humidity monitoring, though it does not cool or heat. If you need to carry cigars, choose a protective travel case rather than moving a plugged-in cabinet. The buying question is the room's measured condition and the collection's real dimensions, not a universal 'electric is better' rule."
    }
  ],
  "faqs": [
    {
      "question": "Does an electric cigar humidor control humidity automatically?",
      "answer": "Do not infer that from the word electric. These listings emphasize temperature control and include hygrometers, but you still need the humidity method required by the exact manual and should verify RH with a checked instrument."
    },
    {
      "question": "Are the advertised 100, 150, and 250 cigar counts realistic for large cigars?",
      "answer": "They are maker or listing claims, not our measured counts. Thick or long cigars, boxes, dividers, and the humidification method reduce usable space. Compare interior layout with your actual cigars before ordering."
    },
    {
      "question": "Will the NEEDONE 23L heat a cold room?",
      "answer": "No. This NEEDONE 23L model cools but does not heat. NEEDONE sells other versions with heating, so check the product title and manual before buying if your room becomes cold."
    },
    {
      "question": "Can I put an electric humidor in a garage?",
      "answer": "Only if the exact manual allows the garage's measured hot and cold temperatures and you can provide required ventilation. Unconditioned spaces can exceed a cabinet's operating limits."
    }
  ],
  "sources": [
    {
      "label": "Hygrometers and relative-humidity calibration",
      "publisher": "National Institute of Standards and Technology",
      "url": "https://www.nist.gov/pml/sensor-science/thermodynamic-metrology/hygrometers",
      "sourceType": "Government / technical reference"
    },
    {
      "label": "Moisture sorption isotherms of various tobaccos",
      "publisher": "Agricultural and Biological Chemistry, 1978",
      "url": "https://doi.org/10.1271/bbb1961.42.2285",
      "sourceType": "Peer-reviewed research"
    },
    {
      "label": "KingChii 16L specifications",
      "publisher": "KingChii",
      "url": "https://www.kingchii.com/products/16l-electric-humidity-control-cabinet",
      "sourceType": "Manufacturer instructions"
    },
    {
      "label": "KingChii 33L specifications",
      "publisher": "KingChii",
      "url": "https://www.kingchii.com/products/kingchii-33l-electric-cigar-humidor",
      "sourceType": "Manufacturer instructions"
    },
    {
      "label": "NEEDONE 23L cooling cabinet product family",
      "publisher": "NEEDONE",
      "url": "https://needonelife.com/products/no-23a-cigar-humidor-23l-cooling-electronic-cabinet",
      "sourceType": "Manufacturer instructions"
    }
  ]
},
  {
  "id": "best-humidors-beginners",
  "slug": "best-humidors-for-beginners",
  "title": "Best Humidors for Beginners: Four Storage Paths",
  "subtitle": "Choose a first humidor by collection size, room conditions, setup effort, and where you will use it.",
  "category": "selection",
  "categoryLabel": "Buying Guides",
  "readTimeMinutes": 8,
  "author": "Best Cigar Humidor Editorial Desk",
  "authorRole": "Independent storage research & fact-checking",
  "publishedDate": "2026-09-16",
  "reviewedDate": "2026-09-16",
  "heroVisual": "tupperdor",
  "excerpt": "A practical comparison of a compact acrylic jar, 7 L DIY container, cedar desktop box, and hard travel case—without pretending one format suits everyone.",
  "featuredProductIds": [
    "prestige-aj25-acrylic",
    "sistema-236oz",
    "klaro-renzo",
    "flauno-travel-5"
  ],
  "comparisonRows": [
    {
      "productId": "prestige-aj25-acrylic",
      "fit": "Small home collection",
      "capacity": "Maker claims up to 25; fewer with larger ring gauges",
      "tradeoff": "Easy to inspect, but narrow jar access and no cooling"
    },
    {
      "productId": "sistema-236oz",
      "fit": "Flexible budget storage",
      "capacity": "7 L volume; count depends on cigar size and layout",
      "tradeoff": "Roomy, plain looking, and needs separate RH monitoring"
    },
    {
      "productId": "klaro-renzo",
      "fit": "Display on a desk or shelf",
      "capacity": "Maker lists about 28–30 at 52 ring gauge",
      "tradeoff": "Cedar needs conditioning; glass and wood require monitoring"
    },
    {
      "productId": "flauno-travel-5",
      "fit": "Day trips and short travel",
      "capacity": "Listing says five medium cigars or four at 52 ring gauge",
      "tradeoff": "Protective small case, cramped for everyday collecting"
    }
  ],
  "useBrandedProductArt": true,
  "relatedBlueprintIds": [
    "blueprint-tupperdor-7l"
  ],
  "sections": [
    {
      "id": "quick-choice",
      "title": "1. Start with the job, not a universal winner",
      "contentMarkdown": "The first question is how many cigars you expect to keep at one time and where the container will sit. A tightly packed \"25 count\" jar can hold fewer large cigars; a 7 L food container offers more layout flexibility but no furniture appeal. A travel case solves impact and packing, not a growing home collection. All four choices below are passive containers. None chills a warm room or heats a cold one.\n\n**Our selection rule:** Favor a verified exact listing, a closure you can inspect, a size that leaves space around the cigars, and a setup you will actually maintain. The format labels are use cases, not measured performance awards. We did not buy or test these units. Product details below come from their current Amazon listings or, for Renzo, its maker's specifications.\n\n**Affiliate disclosure:** If you buy through a product link, Best Cigar Humidor may earn a commission. This does not change your price. The picks are editorial judgments based on disclosed specifications and storage needs."
    },
    {
      "id": "comparison",
      "title": "2. Compare the four beginner formats",
      "contentMarkdown": "Use the comparison below as a starting point. Capacity figures are manufacturer or listing claims, not our measured counts. A cigar's length, ring gauge, packaging, and the space taken by a humidifier all change the fit.\n\nThe most useful distinction is **home storage versus transport**. The jar, container, and Renzo can stay on a shelf in a temperature-stable room. The Flauno case is sized for carrying a few cigars; choose another format if you intend to build a collection."
    },
    {
      "id": "prestige",
      "title": "3. Prestige AJ25: compact acrylic starter jar",
      "contentMarkdown": "The [Prestige Import Group AJ25 review](/product/prestige-aj25-acrylic-humidor-review) covers the jar in detail. Its current Amazon listing identifies a 25 count acrylic jar with a clasp, rubber gasket, Spanish cedar lining on the bottom, and a removable round humidifier. Those are listing claims, not a measured seal or capacity test.\n\n**Choose it if** you keep a small rotation and want to see the contents without lifting the lid. A separate calibrated hygrometer makes the inside condition easier to judge. **Choose something else if** you expect to store boxes, use thick cigars, or want convenient access to cigars at the bottom. The included humidifier is a starting accessory; follow its directions and verify the settled RH instead of assuming the jar will self regulate. Acrylic needs no wood conditioning, although the cedar insert should be clean and dry before loading."
    },
    {
      "id": "sistema",
      "title": "4. Sistema KLIP IT 7 L: practical DIY storage",
      "contentMarkdown": "The current listing for the [Sistema KLIP IT 7 L container](/product/sistema-236oz-7l-airtight-container-tupperdor-core-review) describes a 7 L food storage box with clips and a flexible lid seal. It is not sold as a complete cigar humidor: add an appropriately sized humidity source and a calibrated hygrometer. The site's [tupperdor setup guide](/guides/science-of-airtight-tupperdors) and DIY blueprint explain the layout.\n\n**Choose it if** you want flexible capacity without paying for display woodwork. Wash and fully dry a new food container before adding cigars, check for any lingering odor, and avoid squeezing cigars against the lid. **Choose something else if** you want a display piece or a ready-made humidification kit. The listing's food-storage seal does not prove a precise RH will hold forever, and the container cannot cool its contents."
    },
    {
      "id": "renzo",
      "title": "5. Case Elegance Renzo: desktop presentation",
      "contentMarkdown": "The [Renzo review](/product/klaro-renzo-glass-top-humidor-review) is the display-focused option. Its maker lists a glass top, cedar lining, front digital hygrometer, accessory drawer, and two Hydro Channels. The current Amazon page is the brown Renzo variant. Case Elegance's capacity chart estimates about 28–30 cigars at 52 ring gauge; larger cigars leave less usable space.\n\n**Choose it if** the box will live in a visible, conditioned room and you are willing to monitor a wood humidor. Follow the maker's Renzo seasoning directions before adding cigars, then check the hygrometer against a known reference. **Choose something else if** you need immediate no-setup storage, keep factory boxes, or have a room whose temperature swings beyond your storage plan. A digital display is a convenience, not proof that the whole box maintains one RH. The hydro system controls moisture only; it does not regulate temperature."
    },
    {
      "id": "flauno",
      "title": "6. Flauno five-cigar case: a travel companion",
      "contentMarkdown": "The [Flauno five-cigar case review](/product/flauno-five-cigar-travel-humidor-review) covers a compact hard case. Its current Amazon listing includes a humidifier disc and cutter and claims room for up to five medium cigars or four at 52 ring gauge. The physical protection and small format make sense for a day bag or short trip, while the foam and accessories reduce the room available for unusually large cigars.\n\n**Choose it if** you often carry only a few cigars. **Choose something else if** this would be your only home storage or you need a box of cigars for a longer trip. Check the seal, disc, and actual RH before departure. A travel case should not be left in a hot car; it has no active cooling. For flights, read our [current U.S. packing guide](/guides/travelers-cigar-handbook-tsa-torch-pressure) before packing cutters or lighters."
    },
    {
      "id": "setup",
      "title": "7. A first-week setup that avoids guesswork",
      "contentMarkdown": "Tobacco absorbs and releases moisture as surrounding humidity changes; research on tobacco sorption supports watching the actual environment rather than treating a single RH number as a guarantee. NIST's hygrometer calibration work also shows why a displayed number is a measurement that needs a trustworthy reference. For a household instrument, follow its calibration instructions and look for a stable trend before changing the humidity source.\n\n1. Put the container in the room where you will use it, away from direct sun and heat sources. Measure the room temperature; passive containers cannot correct it.\n2. Clean and dry the acrylic jar, travel case, or food container as appropriate. Follow Case Elegance's conditioning instructions for the cedar Renzo.\n3. Add one humidity method at the maker's recommended amount. Keep liquid away from cigars and unfinished wood surfaces.\n4. Place a checked hygrometer where it can read the storage air, close the container, and watch the trend before loading valuable cigars.\n5. Add cigars with breathing room. Recheck after loading, then adjust one variable at a time if the reading remains outside the range you chose.\n\nFor a deeper explanation of moisture buffering, see the [Spanish cedar guide](/guides/spanish-cedar-biology-guide). For comparing storage types against your budget and room, use the [humidor finder](/)."
    }
  ],
  "faqs": [
    {
      "question": "Do I need to season an acrylic jar or plastic tupperdor?",
      "answer": "No wood box seasoning is needed for the plastic enclosure. Clean and dry it, then install a humidity source and checked hygrometer. If you add unfinished cedar, follow the cedar supplier's conditioning guidance and watch the RH trend."
    },
    {
      "question": "Is a 25 count jar enough for 25 large cigars?",
      "answer": "The 25 count is the listing's capacity claim. Thick or long cigars and the included humidifier reduce usable space. Buy for your actual cigar dimensions and leave room to retrieve them without crushing wrappers."
    },
    {
      "question": "Will a desktop humidor keep cigars cool in summer?",
      "answer": "A passive wood box, acrylic jar, or plastic container cannot actively cool. Measure the room where it will sit. If that room runs warm, improve the location or evaluate a correctly specified electric cabinet."
    },
    {
      "question": "Can a travel case replace a home humidor?",
      "answer": "It can hold a few cigars for a short period when its humidity is monitored, but the Flauno's stated four to five cigar capacity makes it restrictive for a growing home collection."
    }
  ],
  "sources": [
    {
      "label": "Moisture sorption isotherms of various tobaccos",
      "publisher": "Agricultural and Biological Chemistry, 1978",
      "url": "https://www.tandfonline.com/doi/abs/10.1080/00021369.1978.10863351",
      "sourceType": "Peer-reviewed research"
    },
    {
      "label": "Hygrometers and relative-humidity calibration",
      "publisher": "National Institute of Standards and Technology",
      "url": "https://www.nist.gov/pml/sensor-science/thermodynamic-metrology/hygrometers",
      "sourceType": "Government / technical reference"
    },
    {
      "label": "Renzo specifications and capacity chart",
      "publisher": "Case Elegance",
      "url": "https://caseelegance.com/products/glass-top-cedar-humidor-with-front-digital-hygrometer",
      "sourceType": "Manufacturer instructions"
    },
    {
      "label": "Renzo seasoning instructions",
      "publisher": "Case Elegance",
      "url": "https://caseelegance.com/blogs/humidors/new-unboxing-seasoning-instructions-the-popular-glass-top-humidor",
      "sourceType": "Manufacturer instructions"
    }
  ]
},
  {
    id: 'wineador-masterclass',
    slug: 'electric-wineador-masterclass-heating-cooling',
    title: 'Electric Wineadors: Cooling, Heating, Drainage & Setup',
    subtitle: 'How to choose the right temperature-control system, verify the cabinet seal, and condition cedar without creating a condensation problem.',
    category: 'selection',
    categoryLabel: 'Electric & Tech',
    readTimeMinutes: 7,
    ...editorialByline,
    publishedDate: '2026-08-15',
    heroVisual: 'wineador',
    excerpt: 'A wineador can reduce room-temperature swings, but only if its operating range matches the room and its humidity system is set up deliberately.',
    featuredProductIds: ['needone-23l', 'kingchii-33l', 'kingchii-16l', 'boveda-320g-65'],
    relatedBlueprintIds: ['blueprint-converted-wineador'],
    sections: [
      {
        id: 'what-a-wineador-solves',
        title: '1. What a Wineador Actually Solves',
        contentMarkdown: `Cigars benefit from a **stable** environment. Many collectors use 65–69% RH and roughly 65–70°F (18–21°C) as a practical storage range, but it is a convention rather than a universal laboratory-derived optimum. Tobacco is hygroscopic, so its equilibrium moisture changes with surrounding RH and temperature. Experimental research also shows that cigarette-beetle development and reproduction change substantially with temperature.

An electric cabinet helps with temperature control and insulation. It does not automatically control humidity unless the model has an active humidity system. Most owners still need humidity packs or another properly sized humidification method, plus a calibrated hygrometer.

Treat 70°F as a conservative operating target, not a magic hatching line. Cigarette-beetle development depends on temperature and time; extension guidance notes that adults are active above about 65°F. Cooler, steady storage reduces risk but cannot repair an existing infestation.`,
        callout: {
          type: 'warning',
          title: 'Use a Range, Not a Mythical Threshold',
          text: 'Aim for stable storage at or below about 70°F. Do not imply that every egg suddenly hatches at 72°F.'
        }
      },
      {
        id: 'cooling-vs-heating',
        title: '2. Cooling-Only vs. Heating-and-Cooling',
        contentMarkdown: `Choose the control system from the **coldest and warmest temperatures in the room**, not from the climate outdoors.

- **Cooling-only units** can work in a conditioned room that never falls below the desired cabinet set point.
- **Heating-and-cooling units** are useful when the room becomes colder than the storage target.
- **Garages and unconditioned spaces** may exceed a unit’s rated operating range. Check the manufacturer’s ambient-temperature limits before buying.

Thermoelectric and compressor systems behave differently, and features vary by model. Verify the product manual rather than assuming every wineador uses a Peltier cooler or includes a heater.`,
        callout: {
          type: 'tip',
          title: 'Measure the Room First',
          text: 'Log the intended location for a week. Its actual high and low temperatures tell you whether heating is necessary.'
        }
      },
      {
        id: 'drainage-and-condensation',
        title: '3. Drain Holes: Test Before You Seal',
        contentMarkdown: `Some converted beverage coolers have a drain or service opening. It can contribute to humidity loss, but it also exists to manage water. Permanently sealing it without understanding the appliance can trap condensation or conflict with the manufacturer’s instructions.

Use this safer sequence:

1. Read the manual and identify the opening’s purpose.
2. Run the empty cabinet at its target temperature with a calibrated hygrometer and humidity packs.
3. Check for standing water, frost, or persistent RH loss over several days.
4. If the manual permits closure and no condensation is present, test a removable, odor-free plug before making any permanent change.

There is no credible universal figure showing that sealing a drain improves retention by 40%. The effect depends on the opening, seal, room, and cabinet design.`,
        callout: {
          type: 'alert',
          title: 'Do Not Defeat Drainage Blindly',
          text: 'Condensation risk is real. Preserve drainage unless the manual and a controlled test support closing the opening.'
        }
      },
      {
        id: 'condition-the-cedar',
        title: '4. Condition Cedar, Then Verify',
        contentMarkdown: `New cedar shelves can absorb moisture while they approach equilibrium. Clean the cabinet according to its manual, air out manufacturing odors, and install a calibrated hygrometer before adding cigars.

For removable unfinished cedar, follow the humidity-control maker’s instructions. **If you are using Boveda B84 specifically**, Boveda instructs users to place the packs in an empty wood humidor, keep it closed for 14 days, remove the B84 packs, and then install maintenance packs. Those timing and usage details are manufacturer instructions, not independent scientific findings. Do not wipe cedar with water; uneven wetting can raise grain or warp thin parts.

After conditioning, install one chosen maintenance RH level and wait for the empty cabinet to stabilize. Add cigars only after temperature and RH remain steady. Follow the chosen humidity product’s instructions rather than combining different systems or RH levels.`
      }
    ],
    sources: [
      { label: 'Cigarette Beetle (E-239)', publisher: 'Purdue University Extension', url: 'https://extension.entm.purdue.edu/publications/E-239/E-239.pdf', sourceType: 'Government / extension' },
      { label: 'Temperature effects on cigarette-beetle growth and reproduction', publisher: 'Insects, 2021', url: 'https://doi.org/10.3390/insects12121103', sourceType: 'Peer-reviewed research' },
      { label: 'Moisture sorption isotherms of various tobaccos', publisher: 'Agricultural and Biological Chemistry, 1978', url: 'https://doi.org/10.1271/bbb1961.42.2285', sourceType: 'Peer-reviewed research' },
      { label: 'B84 seasoning directions for an empty wood humidor', publisher: 'Boveda', url: 'https://store.bovedainc.com/products/boveda-for-cigars-seasoning', sourceType: 'Manufacturer instructions' },
    ]
  },
  {
    id: 'glass-top-truth-leaks',
    slug: 'glass-top-humidor-truth-leaks-sealing',
    title: 'Glass-Top Humidors: How to Test and Improve the Seal',
    subtitle: 'A measured diagnostic process for lid and glazing leaks—without unsupported failure rates or risky one-size-fits-all repairs.',
    category: 'maintenance',
    categoryLabel: 'Woodcraft & Care',
    readTimeMinutes: 6,
    ...editorialByline,
    publishedDate: '2026-07-28',
    heroVisual: 'glass-top',
    excerpt: 'Glass is not automatically a liability. Track humidity first, locate the actual leak, and repair only the joint that has failed.',
    featuredProductIds: ['klaro-renzo', 'klaro-octodor', 'woodronic-3drawer', 'boveda-84-seasoning'],
    relatedBlueprintIds: ['blueprint-tupperdor-7l'],
    sections: [
      {
        id: 'glass-and-wood',
        title: '1. Why Mixed Materials Need Flexible Joints',
        contentMarkdown: `Wood exchanges moisture with the surrounding air and changes dimension as its moisture content changes. Glass is far less responsive to humidity. A well-built glass-top humidor accommodates that difference with sound joinery and a flexible glazing seal.

That does **not** mean most glass-top humidors leak. The previous “70%” claim had no supporting dataset and has been removed. Build quality, lid fit, hardware alignment, glazing, and room conditions all matter more than the mere presence of glass.`,
        callout: {
          type: 'science',
          title: 'The Useful Principle',
          text: 'Wood movement is real; a universal glass-top failure rate is not. Diagnose the individual box.'
        }
      },
      {
        id: 'diagnose-the-seal',
        title: '2. Diagnose the Seal Before Repairing It',
        contentMarkdown: `Begin with data rather than a “whoosh” sound.

1. Calibrate the hygrometer or compare it with a known reference.
2. Condition the empty wood humidor as directed, then install one RH level of maintenance packs.
3. Place the humidor away from sun, vents, and exterior walls and log RH for several days.
4. Check whether the reading stabilizes within the humidity product’s expected tolerance.

A paper-strip test around the lid can reveal a large local gap, but it is not a pressure test. A flashlight may show a visible glazing gap, but the absence of light does not prove a vapor-tight seal. Also inspect hinge alignment, lid twist, and debris on the mating surfaces.`,
        callout: {
          type: 'tip',
          title: 'Watch the Trend',
          text: 'A stable multi-day RH log is more useful than a single reading or a lid sound.'
        }
      },
      {
        id: 'repair-options',
        title: '3. Repair the Smallest Confirmed Problem',
        contentMarkdown: `If the humidor is under warranty, contact the maker first. For a loose glass joint, use only an adhesive or sealant the manufacturer approves for the materials and enclosed use.

If a suitable silicone is specified, apply a minimal bead to the confirmed gap and follow the label’s full cure time. Keep cigars and humidity packs out of the box during curing, ventilate thoroughly, and do not reload while any odor remains. “Aquarium safe” and “food contact” are separate claims; verify the actual product label.

Do not caulk the wooden lid-to-base joint. That surface needs to close evenly. A warped lid, damaged hinge, or broad fit problem calls for adjustment, replacement, or professional repair—not more sealant.`
      }
    ],
    sources: [
      { label: 'Wood Handbook: moisture relations and dimensional change', publisher: 'USDA Forest Products Laboratory', url: 'https://www.fpl.fs.usda.gov/documnts/fplgtr/fpl_gtr282.pdf', sourceType: 'Government / technical reference' },
      { label: 'Humidity fixed points of binary saturated aqueous solutions', publisher: 'National Bureau of Standards (NIST)', url: 'https://nvlpubs.nist.gov/nistpubs/jres/81a/jresv81an1p89_a1b.pdf', sourceType: 'Government / technical research' },
    ]
  },
  {
    id: 'science-airtight-tupperdors',
    slug: 'science-of-airtight-tupperdors',
    title: 'Tupperdors: A Practical Airtight Storage Guide',
    subtitle: 'Why gasketed food containers work well, how to size humidity control, and which popular maintenance rituals you can skip.',
    category: 'diy',
    categoryLabel: 'DIY & Value',
    readTimeMinutes: 6,
    ...editorialByline,
    publishedDate: '2026-06-12',
    heroVisual: 'tupperdor',
    excerpt: 'A clean gasketed container is inexpensive and humidity-efficient, but “airtight” is a practical description—not a claim of zero permeability.',
    featuredProductIds: ['sistema-236oz', 'spanish-cedar-tray-mantello', 'boveda-65-brick', 'govee-bluetooth-hygrometer'],
    relatedBlueprintIds: ['blueprint-tupperdor-7l', 'blueprint-coolidor-marine'],
    sections: [
      {
        id: 'why-it-works',
        title: '1. Why a Gasketed Container Works',
        contentMarkdown: `A food-storage container with a continuous gasket and positive latches usually exchanges less air with the room than a typical wood desktop humidor. That makes RH easier to maintain and can extend humidity-pack life.

Polypropylene still has measurable water-vapor transmission, and lids, gaskets, and openings are not laboratory hermetic seals. So avoid claims such as “zero permeability,” “400% longer,” or a guaranteed 14–18 month pack life. Real service life depends on container size, fill level, opening frequency, room climate, and gasket condition.`,
        callout: {
          type: 'science',
          title: 'Efficient, Not Magical',
          text: 'The practical advantage comes from low air exchange and a good gasket, not literal zero vapor transmission.'
        }
      },
      {
        id: 'build-the-container',
        title: '2. Build a Clean, Stable Tupperdor',
        contentMarkdown: `Use a new or odor-free food-grade container large enough that cigars and packs are not crushed.

1. Wash with mild unscented dish soap, rinse thoroughly, and air-dry.
2. Reject any container that retains food, detergent, or plastic odors.
3. Add a calibrated digital hygrometer and the humidity-pack quantity recommended for the container capacity.
4. Choose one RH level—commonly 65% for a drier profile or 69% for general storage—and do not mix levels.
5. Keep the container in a temperature-stable, dark room.

The gasket should contact evenly all the way around. Replace the container if the lid is distorted or the seal becomes damaged.`,
        callout: {
          type: 'tip',
          title: 'Avoid Overpacking',
          text: 'Leave enough space to close the lid without pressing on cigars or humidity packs.'
        }
      },
      {
        id: 'cedar-and-air-exchange',
        title: '3. Cedar Is Optional; Scheduled “Burping” Is Not Required',
        contentMarkdown: `A clean Spanish-cedar tray can organize cigars and provide some moisture buffering, but it is optional. Make sure new wood is odor-appropriate and has equilibrated before it touches cigars.

There is no good basis for the claim that cigars consume the container’s oxygen and therefore require a strict monthly “burp.” Normal openings provide air exchange. Opening on a schedule also releases humidity unnecessarily.

Instead, inspect periodically for damaged wrappers, excess moisture, off odors, or mold. Open the container when you select a cigar, rotate stock, or need to investigate a reading—not to satisfy an oxygen ritual.`
      }
    ],
    sources: [
      { label: 'Water-vapor and oxygen permeability testing of polypropylene packaging', publisher: 'Food Packaging and Shelf Life, 2023', url: 'https://doi.org/10.1016/j.fpsl.2023.101121', sourceType: 'Peer-reviewed research' },
      { label: 'Moisture sorption isotherms of various tobaccos', publisher: 'Agricultural and Biological Chemistry, 1978', url: 'https://doi.org/10.1271/bbb1961.42.2285', sourceType: 'Peer-reviewed research' },
    ]
  },
  {
    id: 'high-altitude-preservation',
    slug: 'high-altitude-cigar-preservation',
    title: 'High-Altitude Cigar Storage: Focus on Dry Air, Not Pressure Myths',
    subtitle: 'A practical guide for arid and mountain climates based on measured room conditions, enclosure leakage, and calibrated RH.',
    category: 'science',
    categoryLabel: 'Climate & Science',
    readTimeMinutes: 6,
    ...editorialByline,
    publishedDate: '2026-05-19',
    heroVisual: 'altitude',
    excerpt: 'Elevation alone does not dictate a different RH set point. Measure the room and the humidor, then correct leakage or capacity.',
    featuredProductIds: ['boveda-72-brick', 'boveda-65-brick', 'govee-wifi-hygrometer', 'boveda-calibration-kit'],
    relatedBlueprintIds: ['blueprint-tupperdor-7l'],
    sections: [
      {
        id: 'pressure-myth',
        title: '1. Remove the “25% Faster” Pressure Claim',
        contentMarkdown: `Atmospheric pressure decreases with elevation, but the earlier article incorrectly turned that fact into a universal claim that cigars lose moisture “25% faster” above 5,000 feet. No supporting cigar-storage study was cited, and Dalton’s law does not provide that conclusion.

Relative humidity is the ratio of actual water-vapor pressure to saturation vapor pressure at the same temperature. In practice, many mountain locations are challenging because **indoor air is dry**, especially during heating season—not because elevation forces moisture through an otherwise sealed wall.

Treat altitude as a clue to inspect room climate, not as a correction factor for the desired RH inside the humidor.`,
        callout: {
          type: 'science',
          title: 'What to Measure',
          text: 'Record room temperature and RH alongside humidor RH. Those readings are actionable; an altitude multiplier is not.'
        }
      },
      {
        id: 'choose-rh',
        title: '2. Choose RH From the Cigar and Enclosure',
        contentMarkdown: `Start with the same cigar-storage range used at lower elevations: commonly 65% or 69% RH. In a tight acrylic humidor or Tupperdor, the pack rating should remain the starting point regardless of altitude.

If a wooden humidor consistently reads low, verify the hygrometer and pack quantity before increasing the pack rating. Then check lid fit, placement near vents, and seasonal room dryness. A 72% pack is intended for people who prefer a higher moisture profile or have trouble maintaining RH in a drafty or dry environment; it should not be prescribed to every high-altitude owner.

Judge by the **actual stabilized reading and smoking result**. Overcorrecting can leave cigars swollen, difficult to draw, or more vulnerable to surface mold.`,
        callout: {
          type: 'tip',
          title: 'Change One Variable at a Time',
          text: 'Calibrate, size the humidity control, fix the seal, then reconsider RH level. That order makes the diagnosis clear.'
        }
      },
      {
        id: 'dry-climate-checklist',
        title: '3. Dry-Climate Checklist',
        contentMarkdown: `- Keep the humidor away from heating vents, direct sun, and exterior walls.
- Use enough humidity-control material for the real cigar capacity and enclosure volume.
- Prefer a gasketed enclosure if a wood box cannot hold a stable reading.
- Minimize unnecessary opening during very dry weather.
- Track trends with a calibrated hygrometer rather than reacting to each short fluctuation.

This approach works in Denver, Santa Fe, and any heated or arid home because it addresses the conditions the cigars actually experience.`
      }
    ],
    sources: [
      { label: 'Relative humidity definition', publisher: 'NOAA / National Weather Service', url: 'https://forecast.weather.gov/glossary.php?word=RELATIVE+HUMIDITY', sourceType: 'Government / technical reference' },
      { label: 'The use of dew-point temperature in humidity calculations', publisher: 'National Bureau of Standards (NIST)', url: 'https://nvlpubs.nist.gov/nistpubs/jres/74c/jresv74cn3-4p117_a1b.pdf', sourceType: 'Government / technical research' },
      { label: 'Moisture sorption isotherms of various tobaccos', publisher: 'Agricultural and Biological Chemistry, 1978', url: 'https://doi.org/10.1271/bbb1961.42.2285', sourceType: 'Peer-reviewed research' },
    ]
  },
  {
    id: 'spanish-cedar-biology',
    slug: 'spanish-cedar-biology-guide',
    title: 'Spanish Cedar: What It Does—and What It Does Not Do',
    subtitle: 'A clear guide to Cedrela odorata, moisture buffering, aroma, material selection, and responsible sourcing.',
    category: 'science',
    categoryLabel: 'Woodcraft & Care',
    readTimeMinutes: 6,
    ...editorialByline,
    publishedDate: '2026-04-10',
    heroVisual: 'cedar',
    excerpt: 'Spanish cedar is valued because it is light, aromatic, workable, and compatible with humidors—not because it provides magical pest protection.',
    featuredProductIds: ['spanish-cedar-planks-diy', 'spanish-cedar-tray-mantello', 'boveda-84-seasoning'],
    relatedBlueprintIds: ['blueprint-cabinet-conversion'],
    sections: [
      {
        id: 'botanical-identity',
        title: '1. Spanish Cedar Is a Common Name',
        contentMarkdown: `Spanish cedar commonly refers to **Cedrela odorata**, a tropical American tree in the Meliaceae family—the same botanical family as true mahoganies. It is not a true cedar in the genus Cedrus and is not native to Spain.

The timber is light, workable, and characteristically aromatic. Those qualities explain its long use in cigar boxes and humidor linings. However, “Spanish cedar” sold commercially may refer to more than one Cedrela species, so buy from a supplier that identifies the material and its origin.

Cedrela odorata is CITES-listed. Responsible sourcing and documentation matter, particularly for international trade.`,
        callout: {
          type: 'tip',
          title: 'Buy Identified Stock',
          text: 'Ask for the botanical or trade identification and sourcing information instead of relying only on color or aroma.'
        }
      },
      {
        id: 'storage-role',
        title: '2. Its Useful Role Inside a Humidor',
        contentMarkdown: `Like other woods, Spanish cedar exchanges moisture with air as it approaches equilibrium. In a humidor, that mass can buffer short humidity changes. Slatted trays also improve organization and keep cigars off solid plastic surfaces.

The wood contributes a noticeable aroma, which many smokers associate with traditional cigar storage. Whether that improves flavor is subjective; avoid presenting “flavor marriage” as a measured universal effect.

New, dry cedar needs time to equilibrate, but it should not be soaked or wiped with water. Use controlled humidity and verify stability with a calibrated hygrometer.`,
        callout: {
          type: 'science',
          title: 'Buffer, Not Humidifier',
          text: 'Cedar moderates short changes after it is conditioned. It does not replace humidity control or a sound enclosure.'
        }
      },
      {
        id: 'pest-and-substitutes',
        title: '3. Do Not Rely on Cedar for Pest Control',
        contentMarkdown: `Aromatic woods and plant oils can affect insect behavior, but the previous article overstated Spanish cedar as a proven shield against cigarette beetles. Cedar lining does not make infested cigars safe and is not a substitute for temperature control, inspection, or professional pest treatment.

Avoid substituting strongly aromatic closet-lining woods such as eastern redcedar or western redcedar. They are different species with different odors and extractives, and they can overwhelm tobacco aroma. Calling them universally “toxic” was also too broad; the practical humidor concern is species mismatch, volatile aroma, and lack of suitability for prolonged cigar contact.`
      }
    ],
    sources: [
      { label: 'Cedrela odorata botanical record', publisher: 'Royal Botanic Gardens, Kew', sourceType: 'Botanical authority', url: 'https://powo.science.kew.org/taxon/51010-2' },
      { label: 'Spanish-Cedar technical note', publisher: 'USDA Forest Products Laboratory', sourceType: 'Government / technical reference', url: 'https://www.fpl.fs.usda.gov/documnts/fplrn/fplrn078.pdf' },
      { label: 'Wood Handbook: moisture relations', publisher: 'USDA Forest Products Laboratory', sourceType: 'Government / technical reference', url: 'https://www.fpl.fs.usda.gov/documnts/fplgtr/fpl_gtr282.pdf' },
    ]
  },
  {
    id: 'travelers-cigar-handbook',
    slug: 'travelers-cigar-handbook-tsa-torch-pressure',
    title: 'Flying With Cigars: Current U.S. Rules & Packing Practice',
    subtitle: 'How to protect cigars in transit and navigate current TSA and FAA guidance for cutters and lighters.',
    category: 'travel',
    categoryLabel: 'Travel & Mobility',
    readTimeMinutes: 6,
    ...editorialByline,
    publishedDate: '2026-03-05',
    heroVisual: 'travel',
    excerpt: 'Protect the cigars, keep torch lighters out of the cabin, and verify the latest U.S. rules and airline policy before every trip.',
    featuredProductIds: ['cigar-caddy-10', 'flauno-travel-5', 'colibri-v-cut', 'mrs-brog-triple-torch'],
    relatedBlueprintIds: ['blueprint-tupperdor-7l'],
    sections: [
      {
        id: 'us-lighter-and-cutter-rules',
        title: '1. U.S. Lighter and Cutter Rules',
        contentMarkdown: `For U.S. travel, current FAA guidance says torch, blue-flame, and jet-flame lighters are not allowed in the cabin or ordinary checked baggage. The simplest low-risk plan is to leave the torch at home and buy or borrow one at the destination.

FAA material also describes a narrow checked-baggage exception for up to two lighters in a **DOT-approved lighter case** used under its special-permit instructions. Do not assume an ordinary “airtight” case qualifies; confirm the DOT marking, current FAA guidance, airline policy, and whether the exception applies to the itinerary.

One common absorbed-fuel or butane lighter is generally allowed on your person or in carry-on baggage. Butane refills are forbidden. TSA says cigar cutters are generally permitted in carry-on, but recommends checked baggage and gives officers final discretion. International rules can differ.`,
        callout: {
          type: 'warning',
          title: 'Check Again Before Departure',
          text: 'Rules and airline policies can change. Use the linked FAA PackSafe and TSA pages for the current decision.'
        }
      },
      {
        id: 'pack-the-cigars',
        title: '2. Protect Cigars From Impact and Dry Cabin Air',
        contentMarkdown: `Use a rigid, crush-resistant travel humidor sized so the cigars cannot rattle. Add the manufacturer-recommended amount of one RH level and keep the case in carry-on baggage when possible; checked baggage sees rougher handling and wider temperature swings.

- Place cigars snugly without compressing their feet or caps.
- Separate cutters and other hard objects from wrappers.
- Keep the case closed during the flight.
- For a short trip, condition the case before packing rather than adding a wet sponge at the last minute.

The earlier claim that normal cabin pressure “cracks wrappers through decompression” was unsupported. Handling, temperature, and humidity change are the more useful risks to manage.`,
        callout: {
          type: 'tip',
          title: 'Carry-On Is Usually Kinder',
          text: 'A small travel humidor in the cabin is easier to protect from crushing and temperature extremes.'
        }
      },
      {
        id: 'pressure-valves',
        title: '3. When a Pressure Valve Helps',
        contentMarkdown: `Aircraft cabins are commonly pressurized to an equivalent altitude up to about 8,000 feet. A very tight hard case can become harder to open after a pressure change if it does not equalize quickly.

A manual purge valve is convenient on genuinely sealed cases: operate it according to the case maker’s instructions before forcing the latches. It protects the case and your fingers from a struggle; it should not be marketed as essential protection against cigar “decompression damage.”

After arrival, let a cold case warm gradually while closed to reduce the chance of condensation on its contents.`
      }
    ],
    sources: [
      { label: 'PackSafe: Lighters', publisher: 'Federal Aviation Administration', sourceType: 'Government / regulation', url: 'https://www.faa.gov/hazmat/packsafe/lighters' },
      { label: 'Airline Passengers and Lighters FAQ', publisher: 'Federal Aviation Administration', sourceType: 'Government / regulation', url: 'https://www.faa.gov/sites/faa.gov/files/hazmat/packsafe/resources/Airline_Passengers_Lighters_Faq.pdf' },
      { label: 'What Can I Bring? Cigar cutters and torch lighters', publisher: 'Transportation Security Administration', sourceType: 'Government / regulation', url: 'https://www.tsa.gov/travel/security-screening/whatcanibring/all-list' },
      { label: 'Pilot’s Handbook: cabin pressurization', publisher: 'Federal Aviation Administration', sourceType: 'Government / regulation', url: 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf' },
    ]
  }
];
