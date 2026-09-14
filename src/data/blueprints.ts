import type { DIYBlueprint } from '../types/humidor';

export const DIY_BLUEPRINTS: DIYBlueprint[] = [
  {
    id: 'blueprint-tupperdor-7l',
    title: 'The Bulletproof $50 Tupperdor',
    subtitle: 'The gold-standard airtight setup used by veteran cigar collectors.',
    category: 'tupperdor',
    capacitySticks: 80,
    estimatedCost: 52.97,
    difficulty: 'Beginner',
    buildTimeHours: 0.25,
    sealRating: 10.0,
    materials: [
      {
        productId: 'sistema-236oz',
        quantity: 1,
        notes: 'Sistema Klip It 236 oz (7.0L) - 4 heavy latches with rubber gasket.'
      },
      {
        productId: 'spanish-cedar-tray-mantello',
        quantity: 1,
        notes: 'Fits like a glove inside the Sistema 7L container.'
      },
      {
        productId: 'boveda-65-brick',
        quantity: 1,
        notes: 'Use two 60g packs for 80 sticks. Keep the other 2 packs sealed as spares.'
      },
      {
        productId: 'govee-bluetooth-hygrometer',
        quantity: 1,
        notes: 'Allows checking RH% from your smartphone without opening the lid.'
      }
    ],
    steps: [
      {
        title: 'Step 1: Container Deodorization & Cleaning',
        description: 'Wash the Sistema container and lid with warm water and mild dawn dish soap. Rinse thoroughly and air dry in sunlight for 2-4 hours to ensure zero plastic odors remain.',
        proTip: 'If any plastic smell lingers, crumple up regular black-and-white newspaper or place a small bowl of baking soda inside with the lid closed for 24 hours.'
      },
      {
        title: 'Step 2: Season the Spanish Cedar Tray',
        description: 'Place the Spanish cedar tray inside the clean container along with one Boveda 84% seasoning pack (or place a small shot glass of distilled water inside). Snap the 4 latches closed and leave untouched for 7-10 days so the dry wood absorbs moisture.',
        proTip: 'Never wipe down the cedar with a damp paper towel! Wiping raises the wood grain and can warp the tray slats.'
      },
      {
        title: 'Step 3: Load Maintenance Boveda & Calibrated Hygrometer',
        description: 'Remove the 84% seasoning pack. Place two Boveda 65% (or 62% in high-humidity zones) 60-gram packs at the bottom or sides of the tray. Place your calibrated Govee sensor on top of the tray.',
        proTip: 'In a 100% airtight tupperdor, 65% Boveda will hold EXACTLY 65-66% RH, and the packs will last over 12 months without drying out!'
      },
      {
        title: 'Step 4: Stock Your Cigars & Air Exchange',
        description: 'Load your cigars into the cedar tray. Because the seal is 100% airtight, cigars consume trace oxygen over time. Pop the latches for 30 seconds once every 3-4 weeks to allow a fresh air exchange.',
        proTip: 'Store in a dark interior closet or cupboard away from direct sunlight and heat sources to prevent greenhouse warming.'
      }
    ],
    whyBuildThis: 'A $50 Tupperdor holds humidity 5x better than a $300 wooden desktop humidor, requires zero seasonal maintenance, and keeps cigars at pristine smoking humidity indefinitely.'
  },
  {
    id: 'blueprint-coolidor-marine',
    title: 'The 400-Stick "Coolidor" Box Stash',
    subtitle: 'Massive thermal insulation and box storage for under $130.',
    category: 'coolidor',
    capacitySticks: 450,
    estimatedCost: 128.97,
    difficulty: 'Beginner',
    buildTimeHours: 0.5,
    sealRating: 9.7,
    materials: [
      {
        productId: 'igloo-marine-cooler-54',
        quantity: 1,
        notes: 'Igloo Marine Ultra 54 Qt - thick Ultratherm foam and stainless hardware.'
      },
      {
        productId: 'boveda-320g-65',
        quantity: 1,
        notes: 'One 320g Boveda pack handles the enormous volume for 1-2 years.'
      },
      {
        productId: 'spanish-cedar-tray-mantello',
        quantity: 2,
        notes: 'For resting loose single cigars on top of factory boxes.'
      },
      {
        productId: 'govee-wifi-hygrometer',
        quantity: 1,
        notes: 'Direct Wi-Fi notifications keep tabs on your prized collection from anywhere.'
      }
    ],
    steps: [
      {
        title: 'Step 1: Neutralize Factory Plastic Outgassing',
        description: 'New coolers have a manufacturing plastic aroma. Fill the cooler with warm water and 1 cup of baking soda. Wipe down all interior surfaces with a soft sponge, drain, rinse with clean water, and let air-dry open in the shade for 48 hours.',
        proTip: 'Place 4-5 activated charcoal pouches or crumpled newspaper inside for 48 hours to absorb 100% of the residual odors.'
      },
      {
        title: 'Step 2: Seal the Threaded Drain Plug',
        description: 'Inspect the bottom threaded drain plug. Wrap plumber\'s Teflon tape around the drain threads and screw it firmly tight to guarantee an airtight, zero-leak seal.',
        proTip: 'A dab of food-grade silicone on the exterior drain cap ensures zero air infiltration.'
      },
      {
        title: 'Step 3: Arrange Cedar Trays and Factory Boxes',
        description: 'Place your full factory wooden cigar boxes on the bottom floor of the cooler. The factory cedar boxes will naturally help regulate humidity and release delightful cedar aroma. Place the Mantello trays on top for loose singles.',
        proTip: 'Leave a 1-inch gap around the cooler perimeter to allow convective air circulation.'
      },
      {
        title: 'Step 4: Install Humidification and Sensor',
        description: 'Mount the Boveda 320g 65% pack to the inside lid using the magnetic mounting plate (or lay it between box stacks). Place the Govee Wi-Fi sensor centrally on the top tray.',
        proTip: 'For ultra-large 70+ Qt coolers, adding a small USB ultra-low RPM circulating fan running 5 minutes every hour creates perfect humidity distribution.'
      }
    ],
    whyBuildThis: 'Commercial cabinet humidors of this capacity cost $1,500+. The Coolidor holds 15-20 full boxes in an insulated, shock-resistant environment for less than the price of a single box of premium cigars.'
  },
  {
    id: 'blueprint-converted-wineador',
    title: 'The High-Tech Converted Wineador',
    subtitle: 'Climate-controlled cooling & heating with custom cedar architecture.',
    category: 'electric_wineador',
    capacitySticks: 300,
    estimatedCost: 289.00,
    difficulty: 'Intermediate',
    buildTimeHours: 1.5,
    sealRating: 9.6,
    materials: [
      {
        productId: 'needone-23l',
        quantity: 1,
        notes: 'Thermoelectric cooler with dual heating and cooling.'
      },
      {
        productId: 'spanish-cedar-tray-mantello',
        quantity: 2,
        notes: 'Drop-in cedar trays to expand single stick organization.'
      },
      {
        productId: 'boveda-65-brick',
        quantity: 2,
        notes: 'Total of 4x 60g packs distributed across top and bottom shelves.'
      },
      {
        productId: 'govee-bluetooth-hygrometer',
        quantity: 1,
        notes: 'Monitor top-to-bottom temperature gradients.'
      }
    ],
    steps: [
      {
        title: 'Step 1: Clean and Neutralize Wineador Liner',
        description: 'Unplug unit. Wipe interior walls with baking soda and warm distilled water. Leave door propped open for 48 hours with a dish of activated carbon or fresh coffee grounds to eradicate vinyl/plastic scent.',
        proTip: 'Never use bleach or chemical cleaners inside a humidor, as the plastic pores will hold the chemical scent.'
      },
      {
        title: 'Step 2: Plug the Condensation Drain Hole',
        description: 'Wine coolers have a drainage hole at the rear bottom to drain condensation. In a cigar humidor, this hole will leak humidity! Place a piece of odorless food-grade foil tape or silicone over the interior drain hole.',
        proTip: 'In thermoelectric units with stable temperatures, condensation is minimal. Keeping the hole plugged preserves airtight RH.'
      },
      {
        title: 'Step 3: Thoroughly Season Cedar Shelves',
        description: 'Install the Spanish cedar shelves and trays. Place four Boveda 84% packs inside and close the door. Run the temperature set to 66°F. Keep closed for 14 days without opening.',
        proTip: 'The cedar in wineadors is often bone dry from the factory and will suck 10-15% of your humidity if not properly seasoned first.'
      },
      {
        title: 'Step 4: Transition to Boveda 65% and Load Cigars',
        description: 'Swap the 84% packs for Boveda 65% packs. Place one pack on each shelf. Set internal thermostat to 65°F - 68°F. Load your cigars and enjoy effortless, beetle-free climate protection.',
        proTip: 'Keep cigars in their cellophane wrappers to protect them during handling while still allowing moisture transfer.'
      }
    ],
    whyBuildThis: 'Gives you professional restaurant-grade temperature and humidity control that prevents tobacco beetle hatching in hot summers, while saving hundreds compared to pre-built luxury units.'
  },
  {
    id: 'blueprint-cabinet-conversion',
    title: 'The Custom Spanish Cedar Cabinet Armoire',
    subtitle: 'Transform an existing curio or cabinet into an aficionado heirloom.',
    category: 'cabinet',
    capacitySticks: 1000,
    estimatedCost: 340.00,
    difficulty: 'Advanced',
    buildTimeHours: 6.0,
    sealRating: 9.2,
    materials: [
      {
        productId: 'spanish-cedar-planks-diy',
        quantity: 3,
        notes: 'Genuine 1/4" kiln-dried Spanish Cedar thin lumber boards.'
      },
      {
        productId: 'cigar-oasis-plus-3',
        quantity: 1,
        notes: 'Active micro-fan electronic humidifier for up to 1000 cigars (10 cu. ft).'
      },
      {
        productId: 'govee-wifi-hygrometer',
        quantity: 2,
        notes: 'Place one at top shelf and one at bottom shelf to track airflow.'
      }
    ],
    steps: [
      {
        title: 'Step 1: Hermetic Weatherstripping Seal',
        description: 'Examine cabinet doors and glass inserts. Apply D-profile high-density silicone weatherstripping around all door jambs. Apply odorless clear silicone sealant along glass pane borders.',
        proTip: 'Perform the "Dollar Bill Test": close the door on a dollar bill. If you can pull the bill out with zero resistance, air is leaking!'
      },
      {
        title: 'Step 2: Line Interior with 1/4" Spanish Cedar Planks',
        description: 'Cut kiln-dried Spanish Cedar boards to size. Fasten boards using brass brad nails or 100% odorless food-grade silicone (allow silicone 72 hours to cure before closing doors).',
        proTip: 'Never use standard wood glue (PVA/Titebond) or petroleum-based liquid nails, as they emit volatile organic compounds that ruin cigar flavor.'
      },
      {
        title: 'Step 3: Setup Cigar Oasis Active Humidification',
        description: 'Position the Cigar Oasis Plus 3.0 on the bottom shelf. Route the ultra-thin ribbon power cable through the door hinge gap. Fill the cartridge with distilled water.',
        proTip: 'Set target RH% to 66%. The built-in micro-fan will circulate moisture upward through all shelves.'
      },
      {
        title: 'Step 4: Gradual Wood Saturation (14-21 Days)',
        description: 'Allow the Cigar Oasis to run in the sealed cabinet for 2-3 weeks until the cedar planks stabilize at 66-68% RH and the fan stops running continuously.',
        proTip: 'Large volume cabinets require substantial water during initial wood seasoning; check the water cartridge level weekly.'
      }
    ],
    whyBuildThis: 'Turns an antique piece of furniture into a custom, high-capacity lounge showcase holding 1,000+ sticks for a fraction of the cost of retail custom humidors.'
  }
];
