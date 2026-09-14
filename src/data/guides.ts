import type { CigarGuide } from '../types/humidor';

const editorialByline = {
  author: 'Best Cigar Humidor Editorial Desk',
  authorRole: 'Independent storage research & fact-checking',
  reviewedDate: '2026-09-14',
};

export const CIGAR_GUIDES: CigarGuide[] = [
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
    featuredProductIds: ['needone-23l', 'needone-48l', 'kingchii-48l', 'boveda-320g-65'],
    relatedBlueprintIds: ['blueprint-converted-wineador'],
    sections: [
      {
        id: 'what-a-wineador-solves',
        title: '1. What a Wineador Actually Solves',
        contentMarkdown: `Cigars benefit from a **stable** environment. A practical target for many collections is 65–69% RH and roughly 65–70°F (18–21°C). Warmer storage increases cigarette-beetle activity; large humidity swings can also stress wrappers and change how a cigar burns.

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

For removable unfinished cedar, follow the humidity-pack maker’s seasoning instructions. Boveda designates 84% packs for **empty wood humidors only** and commonly uses a 14-day conditioning period. Do not wipe cedar with water; uneven wetting can raise grain or warp thin parts.

After conditioning, remove the seasoning packs, install 65% or 69% maintenance packs, and wait for the empty cabinet to stabilize. Add cigars only after both temperature and RH remain in range. Never mix different RH pack levels in the same enclosure.`
      }
    ],
    sources: [
      { label: 'The Art of Aging Cigars', publisher: 'Boveda', url: 'https://bovedainc.com/the-art-of-aging-cigars/' },
      { label: 'What Boveda RH do I need for tobacco?', publisher: 'Boveda', url: 'https://bovedainc.com/question/what-boveda-rh-do-i-need/' },
      { label: 'Cigarette Beetle (E-239)', publisher: 'Purdue University Extension', url: 'https://extension.entm.purdue.edu/publications/E-239/E-239.pdf' },
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
      { label: 'Wood Handbook: moisture relations and dimensional change', publisher: 'USDA Forest Products Laboratory', url: 'https://www.fpl.fs.usda.gov/documnts/fplgtr/fpl_gtr282.pdf' },
      { label: 'What Boveda RH do I need for tobacco?', publisher: 'Boveda', url: 'https://bovedainc.com/question/what-boveda-rh-do-i-need/' },
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
      { label: 'What Boveda Should I Use in a Tupperdor?', publisher: 'Boveda', url: 'https://bovedainc.com/what-boveda-should-i-use-in-a-tupperdor/' },
      { label: 'Water-vapor and oxygen permeability testing of polypropylene packaging', publisher: 'Food Packaging and Shelf Life', url: 'https://doi.org/10.1016/j.fpsl.2023.101121' },
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
      { label: 'Relative Humidity definition', publisher: 'NOAA / National Weather Service', url: 'https://forecast.weather.gov/glossary.php?word=RELATIVE+HUMIDITY' },
      { label: 'Humidity Control for Cigar Smokers', publisher: 'Boveda', url: 'https://bovedainc.com/humidity-control-for-cigar-smokers/' },
      { label: 'What Boveda RH do I need for tobacco?', publisher: 'Boveda', url: 'https://bovedainc.com/question/what-boveda-rh-do-i-need/' },
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
      { label: 'Cedrela odorata botanical record', publisher: 'Royal Botanic Gardens, Kew', url: 'https://powo.science.kew.org/taxon/51010-2' },
      { label: 'Spanish-Cedar technical note', publisher: 'USDA Forest Products Laboratory', url: 'https://www.fpl.fs.usda.gov/documnts/fplrn/fplrn078.pdf' },
      { label: 'Wood Handbook: moisture relations', publisher: 'USDA Forest Products Laboratory', url: 'https://www.fpl.fs.usda.gov/documnts/fplgtr/fpl_gtr282.pdf' },
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
    featuredProductIds: ['xikar-15-travel', 'herf-a-dor-40', 'colibri-v-cut', 'scorch-torch-triple'],
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
      { label: 'PackSafe: Lighters', publisher: 'Federal Aviation Administration', url: 'https://www.faa.gov/hazmat/packsafe/lighters' },
      { label: 'Airline Passengers and Lighters FAQ', publisher: 'Federal Aviation Administration', url: 'https://www.faa.gov/sites/faa.gov/files/hazmat/packsafe/resources/Airline_Passengers_Lighters_Faq.pdf' },
      { label: 'What Can I Bring? Cigar cutters and torch lighters', publisher: 'Transportation Security Administration', url: 'https://www.tsa.gov/travel/security-screening/whatcanibring/all-list' },
      { label: 'Pilot’s Handbook: cabin pressurization', publisher: 'Federal Aviation Administration', url: 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf' },
    ]
  }
];
