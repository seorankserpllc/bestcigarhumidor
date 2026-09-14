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
`                    {/* Hero Header with Warm Luxury Cigar Leather Atmosphere */}
                    <div className="max-w-5xl mx-auto pt-8 pb-4 px-4 text-center">
                      <div className="rounded-3xl bg-gradient-to-b from-[#19100c] via-[#120a07] to-[#0c0705] border border-amber-900/40 p-6 sm:p-10 text-center shadow-2xl relative overflow-hidden">
                        {/* Subtle atmospheric warm lounge radial glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,119,6,0.12),transparent_70%)] pointer-events-none" />
                        <div className="relative z-10 space-y-4">
                          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-widest shadow-md">
                            <Compass className="w-3.5 h-3.5 text-amber-400" />
                            <span>BESTCIGARHUMIDOR.COM • AFICIONADO STORAGE FINDER</span>
                          </div>

                          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-amber-100 drop-shadow-md">
                            Find Your Perfect Humidor: <span className="gold-gradient-text block sm:inline mt-1 sm:mt-0">Build vs. Buy</span>
                          </h1>

                          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed drop-shadow">
                            Precision cigar storage selector calibrated to your collection vitolas, regional ambient climate, altitude, and budget. Compare top-rated Amazon models against hand-engineered airtight DIY builds.
                          </p>

                          {/* Cigar Club Leather Armchair Accents Row */}
                          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-[11px] text-amber-300/90 font-medium">
                            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-amber-900/50">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                              Thermoelectric Wineadors
                            </span>
                            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-amber-900/50">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                              Spanish Cedar Desktops
                            </span>
                            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-amber-900/50">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                              Airtight Tupperdor Blueprints
                            </span>
                            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-amber-900/50">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                              Climate &amp; Elevation Engine
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>`,
`                    {/* Finder hero: warm leather-club atmosphere with plain-language positioning */}
                    <section className="finder-lounge-hero max-w-6xl mx-auto mt-5 sm:mt-8">
                      <img src="/finder-lounge.jpg" alt="Leather armchair in a warmly lit cigar lounge" className="finder-lounge-hero__image" />
                      <div className="finder-lounge-hero__shade" />
                      <div className="finder-lounge-hero__content">
                        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                          <Compass className="w-4 h-4" />
                          The Humidor Finder
                        </div>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-amber-50 leading-[1.03]">
                          Find the right humidor for <span className="gold-gradient-text">your cigars.</span>
                        </h1>
                        <p className="text-sm sm:text-base text-stone-200 max-w-xl leading-relaxed">
                          Answer a few simple questions about your collection, your room, and your budget. We’ll show you the best ready-made humidors and practical DIY options for your needs.
                        </p>
                        <div className="flex flex-wrap gap-2 text-[11px] text-stone-200">
                          <span className="finder-trust-pill">About 2 minutes</span>
                          <span className="finder-trust-pill">No email needed</span>
                          <span className="finder-trust-pill">Clear reasons for every match</span>
                        </div>
                        <button onClick={() => document.getElementById('finder-questions')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="finder-primary-button">
                          Start the finder
                          <span aria-hidden="true">↓</span>
                        </button>
                      </div>
                    </section>`
]]);

replaceExact('src/components/Wizard/HumidorWizard.tsx', [[
`    <div className="max-w-4xl mx-auto py-6 px-4">`,
`    <div id="finder-questions" className="finder-wizard max-w-4xl mx-auto py-6 px-4 scroll-mt-24">`
], [
`      <div className="mb-6 p-3.5 rounded-xl bg-[#1a120e]/80 border border-amber-900/30 flex flex-wrap items-center justify-between gap-2 text-xs">`,
`      <div className="mb-6 p-4 rounded-2xl bg-[#1a120e]/90 border border-amber-800/30 flex flex-wrap items-center justify-between gap-3 text-xs shadow-xl">`
], [
`          <span>Quick Scenario Presets:</span>`,
`          <span>Want a head start? Choose an example, then adjust any answer.</span>`
], [
`💰 $50 DIY Value King`, `Small budget setup`
], [
`🏔️ High Altitude Denver (350 Sticks)`, `Large collection`
], [
`🌴 Miami Subtropical (Beetle Shield)`, `Warm, humid climate`
], [
`💼 Executive Cedar Showpiece`, `Display humidor`
], [
`✈️ Mobile Travel Armor`, `Travel case`
], [
`      <div className="bg-[#17100d] border border-amber-900/40 rounded-2xl shadow-2xl p-6 sm:p-8 relative overflow-hidden">`,
`      <div className="finder-card border border-amber-800/40 rounded-3xl shadow-2xl p-6 sm:p-8 relative overflow-hidden">`
], [
`                {step === 1 && 'Storage Scale & Format'}
                {step === 2 && 'Climate & Elevation Physics'}
                {step === 3 && 'Room Setup & Placement'}
                {step === 4 && 'Control & Technology'}
                {step === 5 && 'Build vs. Buy & Budget'}`,
`                {step === 1 && 'Your collection'}
                {step === 2 && 'Your room climate'}
                {step === 3 && 'Where it will sit'}
                {step === 4 && 'How hands-on?'}
                {step === 5 && 'Budget & style'}`
], [
`                How many cigars do you plan to protect?`, `How many cigars do you need to store?`
], [
`                The golden rule of cigar storage: <span className="text-amber-400 font-semibold">always plan for 2x growth</span>. Cigar boxes are addictive, and humidity circulates best when a humidor is 70% full, not crammed to the brim.`,
`                Tell us what you have now and how much room you want for the next year or two. A little extra space keeps the collection easier to organize.`
], [
`                  Current Cigars in Possession`, `Current number of cigars`
], [
`                  {answers.currentSticks} sticks`, `                  {answers.currentSticks} cigars`
], [
`                <span>5 (Occasional)</span>
                <span>50 (Regular)</span>
                <span>150 (Enthusiast)</span>
                <span>300+ (Collector)</span>
                <span>500+ (Aficionado)</span>`,
`                <span>5</span>
                <span>50</span>
                <span>150</span>
                <span>300</span>
                <span>500</span>`
], [
`                    Target Collection Size (1-2 Years)`, `Room you want in 1–2 years`
], [
`                  <p className="text-xs text-stone-400">Recommended humidor capacity target</p>`, `                  <p className="text-xs text-stone-400">An estimate is fine</p>`
], [
`                  ~{answers.expectedGrowth} sticks`, `                  About {answers.expectedGrowth} cigars`
], [
`                    title: 'Individual Singles',
                    desc: 'Loose sticks, 5-packs, samplers. Fits in standard trays & desktop boxes.'`,
`                    title: 'Mostly singles',
                    desc: 'Loose cigars, samplers, and small packs.'`
], [
`                    title: 'Singles + Full Boxes',
                    desc: 'Mix of favorite singles and 2-4 sealed factory boxes.'`,
`                    title: 'Singles and boxes',
                    desc: 'A mix of loose cigars and full boxes.'`
], [
`                    title: 'Primarily Full Boxes',
                    desc: 'Buy 20-25 count boxes for aging. Demands flat deep cooler or cabinet space.'`,
`                    title: 'Mostly full boxes',
                    desc: 'You need deeper shelves and more open space.'`
], [
`                Your Smoking Frequency`, `How often do you reach for a cigar?`
], [
`                  { id: 'daily', label: 'Daily (1+ day)' },
                  { id: 'few_a_week', label: '2-4 per week' },
                  { id: 'weekends', label: 'Weekend relaxer' },
                  { id: 'occasional', label: '1-2 per month' },
                  { id: 'collector', label: 'Aging Collector' },`,
`                  { id: 'daily', label: 'Daily' },
                  { id: 'few_a_week', label: 'A few each week' },
                  { id: 'weekends', label: 'Mostly weekends' },
                  { id: 'occasional', label: 'Once or twice a month' },
                  { id: 'collector', label: 'Mostly aging' },`
], [
`                Where do you live? (Elevation & Climate Physics)`, `What is the climate like where you live?`
], [
`                Altitude alters atmospheric vapor pressure, and extreme ambient humidity or winter home heating can warp Spanish cedar. We calculate exact physics compensation for your location.`,
`                Choose the closest match. The temperature and humidity inside your home matter more than the weather outside.`
], [
`                Select Your Regional Climate Zone:`, `Which sounds most like your home?`
], [
`                    title: 'Four-Season Variable',`, `                    title: 'Cold winters, warm summers',`
], [
`                    desc: 'Dreaded winter indoor heating drops humidity to 15-20% RH; summers are humid. Wood expands and contracts.',`,
`                    desc: 'Heating dries the room in winter; summer can be humid.',`
], [
`                    title: 'Humid Subtropical',`, `                    title: 'Warm and humid',`
], [
`                    desc: 'Relentless 75-90% ambient humidity + heat. High risk of tobacco beetle hatching (>72°F) and mold blooms.',`,
`                    desc: 'Long warm seasons and humid indoor air.',`
], [
`                    title: 'Arid Desert',`, `                    title: 'Very dry',`
], [
`                    desc: 'Year-round dry air (<20% RH). Traditional wooden humidors struggle with constant moisture starvation.',`,
`                    desc: 'Dry air for much of the year, indoors and out.',`
], [
`                    title: 'Temperate / Coastal',`, `                    title: 'Mostly mild',`
], [
`                    desc: 'Moderate temperatures and steady mild ambient humidity. Most humidor types operate reliably here.',`,
`                    desc: 'Indoor temperature and humidity stay fairly steady.',`
], [
`            {/* Altitude / Elevation Selector */}
            <div className="p-5 rounded-xl bg-[#1f1511] border border-amber-950 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Mountain className="w-5 h-5 text-amber-400" />
                  <div>
                    <span className="text-sm font-medium text-stone-200">
                      Approximate Elevation / Altitude
                    </span>
                    <p className="text-xs text-stone-400">Lower air pressure speeds moisture dissipation</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-amber-300 font-serif">
                  {answers.elevationFt?.toLocaleString()} ft
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { tier: 'sea_level', ft: 150, label: 'Coastal / Plains (0-1.5k ft)' },
                  { tier: 'moderate', ft: 2500, label: 'Moderate (2.5k ft)' },
                  { tier: 'high_altitude', ft: 5280, label: 'Denver / High (5.2k ft)' },
                  { tier: 'extreme_altitude', ft: 7500, label: 'Mountain / 7.5k+ ft' },
                ].map((elev) => (
                  <button
                    key={elev.tier}
                    onClick={() => {
                      update('elevationTier', elev.tier as ElevationTier);
                      update('elevationFt', elev.ft);
                    }}
                    className={\`p-2.5 rounded-lg border text-center transition-all \${
                      answers.elevationTier === elev.tier
                        ? 'bg-amber-500/20 border-amber-500 text-amber-200 font-semibold'
                        : 'bg-[#18110e] border-stone-800 text-stone-400 hover:border-amber-900'
                    }\`}
                  >
                    {elev.label}
                  </button>
                ))}
              </div>

              {/* Climate Alert Notice */}
              {(answers.elevationTier === 'high_altitude' || answers.elevationTier === 'extreme_altitude') && (
                <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-800/40 text-xs text-amber-200">
                  <strong>⚠️ Altitude Physics Note:</strong> At {(answers.elevationFt || 5280).toLocaleString()} ft, reduced barometric pressure causes standard humidors to lose moisture ~25% faster. We will prescribe a +3% to +4% Boveda compensation rating or recommend hermetic rubber seals.
                </div>
              )}
            </div>`,
`            {/* Elevation is optional context, not an automatic RH correction. */}
            <div className="p-5 rounded-xl bg-[#1f1511] border border-amber-950 space-y-3">
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="text-sm font-medium text-stone-200">Do you live above about 4,000 feet?</span>
                  <p className="text-xs text-stone-400">Optional context for homes in mountain regions</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button onClick={() => { update('elevationTier', 'sea_level'); update('elevationFt', 150); }} className={\`p-2.5 rounded-lg border transition-all \${answers.elevationTier === 'sea_level' || answers.elevationTier === 'moderate' ? 'bg-amber-500/20 border-amber-500 text-amber-200 font-semibold' : 'bg-[#18110e] border-stone-800 text-stone-400'}\`}>No or not sure</button>
                <button onClick={() => { update('elevationTier', 'high_altitude'); update('elevationFt', 5280); }} className={\`p-2.5 rounded-lg border transition-all \${answers.elevationTier === 'high_altitude' || answers.elevationTier === 'extreme_altitude' ? 'bg-amber-500/20 border-amber-500 text-amber-200 font-semibold' : 'bg-[#18110e] border-stone-800 text-stone-400'}\`}>Yes</button>
              </div>
              {(answers.elevationTier === 'high_altitude' || answers.elevationTier === 'extreme_altitude') && (
                <p className="text-xs text-amber-200 bg-amber-950/30 border border-amber-800/30 rounded-lg p-3">High-elevation homes are often dry. We’ll favor a dependable seal, but we won’t automatically raise the humidity level.</p>
              )}
            </div>`
], [
`                  Central Air Conditioning & Heating in the Home?`, `Is this room heated or air-conditioned?`
], [
`                  Maintains indoor temperatures within 68°F - 74°F year-round`, `Choose “yes” if the room stays comfortable most of the year`
], [
`                  Yes (Central AC)`, `                  Yes, usually`
], [
`                  No / Variable`, `                  No, it changes a lot`
], [
`                The micro-climate of your chosen room dictates insulation needs. A living room display piece demands wood craftsmanship, while a garage demands heavy thermal insulation.`,
`                This helps us balance looks, size, and temperature control.`
], [
`                  title: 'Living Room / Great Room',
                  desc: 'High visibility showpiece for guests. Constant indoor HVAC, but needs refined aesthetic appeal.',`,
`                  title: 'Living room',
                  desc: 'Visible to guests, so appearance matters.',`
], [
`                  title: 'Executive Office / Desk',
                  desc: 'Compact or medium footprint, within arm’s reach for daily rotation and study.',`,
`                  title: 'Office or desk',
                  desc: 'Easy to reach, with limited space.',`
], [
`                  title: 'Bedroom Closet / Dark Cabinet',
                  desc: 'Stealth storage. Dark, cool, and highly stable temperatures. Ideal for utilitarian Tupperdors.',`,
`                  title: 'Closet or cabinet',
                  desc: 'Out of sight in a typically dark, steady room.',`
], [
`                  title: 'Basement / Cellar',
                  desc: 'Naturally cool and consistent temperature. Minimal direct sunlight, perfect for long-term aging.',`,
`                  title: 'Basement or cellar',
                  desc: 'Often cool, but sometimes damp or unconditioned.',`
], [
`                  title: 'Garage / Unfinished Space',
                  desc: 'DANGER ZONE: Freezing winters and blistering summers. Demands active heating/cooling or thick marine cooler.',`,
`                  title: 'Garage or unfinished room',
                  desc: 'Temperature can change a lot. Check the room before choosing an electric unit.',`
], [
`                  title: 'Dedicated Cigar Lounge / Man Cave',
                  desc: 'The aficionado sanctuary. High capacity, multiple factory boxes, and prominent showcase presence.',`,
`                  title: 'Cigar lounge',
                  desc: 'A visible setup for a larger collection.',`
], [
`                  title: 'Mobile / Travel / Golf Bag',
                  desc: 'Tossed in luggage, boat, car trunk, or golf cart. Must be 100% crushproof and waterproof.',`,
`                  title: 'Travel',
                  desc: 'A compact hard case for trips and days out.',`
], [
`                What is your maintenance & technology philosophy?`, `How hands-on do you want to be?`
], [
`                Do you want high-tech digital climate control with app notifications, or the ultra-reliable simplicity of passive 2-way Boveda packs?`,
`                Pick the option that feels easiest to live with. You can always change your answer later.`
], [
`                  title: 'Set-and-Forget (Airtight + Boveda)',
                  desc: 'Zero fuss. Drop two 65% Boveda packs into a sealed container and don’t touch it for 12 months. Pure reliable science.',`,
`                  title: 'Keep it simple',
                  desc: 'A tight container and humidity packs, checked from time to time.',`
], [
`                  title: 'Smart Electric Climate Control',
                  desc: 'Thermoelectric cooling & heating. Regulates temperature to 65°-68°F to prevent tobacco beetles and stabilizes humidity.',`,
`                  title: 'Control the temperature',
                  desc: 'An electric cabinet for a room that runs warm or cold.',`
], [
`                  title: 'Traditional Spanish Cedar Ritual',
                  desc: 'The artisan tactile experience: smelling aged Spanish cedar, checking analog or digital hygrometers, fine woodcraft.',`,
`                  title: 'Classic wood humidor',
                  desc: 'Traditional look and feel, with a little more setup and checking.',`
], [
`                  title: 'No Strong Preference',
                  desc: 'Whichever delivers the best combination of cigar protection, value, and convenience for my situation.',`,
`                  title: 'I’m not sure',
                  desc: 'Choose the best balance of protection, cost, and convenience for me.',`
], [
`                Build vs. Buy Philosophy & Investment`, `Would you rather buy one or build one?`
], [
`                Are you shopping for a ready-to-use showroom unit, or interested in assembling a DIY Tupperdor or Coolidor that beats commercial units at a third of the price?`,
`                We can recommend a finished humidor, a simple DIY setup, or show both side by side.`
], [
`                  title: '⚖️ Compare Both (Recommended)',
                  desc: 'Show me the best Amazon retail humidor AND the DIY blueprint alternative side-by-side with cost comparison.'`,
`                  title: 'Show me both (recommended)',
                  desc: 'Compare the best ready-made option with a practical DIY alternative.'`
], [
`                  title: '📦 Buy Turnkey (Ready Out of Box)',
                  desc: 'I want a finished product with warranty, glass/wood styling, and zero assembly needed.'`,
`                  title: 'Buy a finished humidor',
                  desc: 'I want a ready-made product with little or no assembly.'`
], [
`                  title: '🛠️ Build DIY (The Aficionado Hack)',
                  desc: 'I want to build my own Tupperdor, Coolidor, or Wineador using Amazon parts for unbeatable performance.'`,
`                  title: 'Build a simple setup',
                  desc: 'I’m comfortable assembling a container, cooler, or converted cabinet.'`
], [
`                  title: '💰 Maximum Value ($/Stick)',
                  desc: 'Lowest upfront cost and lowest cost per stick stored, regardless of whether it is built or bought.'`,
`                  title: 'Give me the best value',
                  desc: 'Prioritize storage capacity and reliability over appearance.'`
], [
`                    Maximum Target Budget`, `                    Maximum budget`
], [
`                  <p className="text-xs text-stone-400">Total gear spend including humidor and humidification</p>`, `                  <p className="text-xs text-stone-400">Include the humidor and humidity control</p>`
], [
`                <span>$35 (Budget DIY)</span>
                <span>$100 (Quality Desktop)</span>
                <span>$250 (Wineador / Big Coolidor)</span>
                <span>$500+ (Electric Cabinet)</span>`,
`                <span>$35</span>
                <span>$100</span>
                <span>$250</span>
                <span>$500+</span>`
], [
`                    How important is furniture & showroom aesthetic?`, `                    How much does the look matter?`
], [
`                    {answers.importanceOfAesthetics <= 2 && 'Pure utility: airtight plastic or marine coolers are totally fine'}
                    {answers.importanceOfAesthetics === 3 && 'Balanced: neat and presentable'}
                    {answers.importanceOfAesthetics >= 4 && 'High importance: must look luxurious on furniture or bar'}`,
`                    {answers.importanceOfAesthetics <= 2 && 'Function comes first'}
                    {answers.importanceOfAesthetics === 3 && 'Neat and presentable'}
                    {answers.importanceOfAesthetics >= 4 && 'It should look good on display'}`
], [
`<span>{step === totalSteps ? 'Calculate My Perfect Match' : 'Continue'}</span>`, `<span>{step === totalSteps ? 'Show my matches' : 'Continue'}</span>`
]]);

replaceExact('src/components/Results/ResultsView.tsx', [[
`case 'tupperdor': return 'Airtight Tupperdor System';`, `case 'tupperdor': return 'Airtight storage container';`
], [
`case 'electric_wineador': return 'Smart Electric Wineador';`, `case 'electric_wineador': return 'Temperature-controlled humidor';`
], [
`case 'desktop_wood': return 'Premium Spanish Cedar Desktop';`, `case 'desktop_wood': return 'Classic wood desktop humidor';`
], [
`case 'acrylic': return 'Modern Acrylic Showcase';`, `case 'acrylic': return 'Clear acrylic humidor';`
], [
`case 'coolidor': return 'High-Capacity Marine Coolidor';`, `case 'coolidor': return 'High-capacity cooler setup';`
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
`              Beetle & Mold Risk:`, `              What to watch: protein and mold risk —`
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
