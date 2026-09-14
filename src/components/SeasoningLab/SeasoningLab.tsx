import React, { useState } from 'react';
import { 
  Sparkles, Thermometer, Droplets, AlertTriangle, 
  Mountain, Scale, Info, CheckCircle2, Flame, ExternalLink
} from 'lucide-react';
import { getAmazonUrl } from '../../utils/amazonLinks';

interface SeasoningLabProps {
  affiliateTag: string;
}

export const SeasoningLab: React.FC<SeasoningLabProps> = ({ affiliateTag }) => {
  // Salt Test state
  const [saltTestReading, setSaltTestReading] = useState<number>(73);

  // Beetle & Mold state
  const [simTemp, setSimTemp] = useState<number>(68);
  const [simRH, setSimRH] = useState<number>(66);

  // Elevation state
  const [simAltitude, setSimAltitude] = useState<number>(5280); // Denver default

  // Salt test offset calculation
  const referenceTarget = 75; // Standard salt slurry or Boveda calibration kit
  const saltOffset = referenceTarget - saltTestReading;

  // Beetle & Mold logic
  const isBeetleRisk = simTemp >= 72;
  const isMoldRisk = simRH >= 70;
  const isDryRisk = simRH < 62;
  const isOptimal = simTemp >= 64 && simTemp <= 70 && simRH >= 63 && simRH <= 68;

  // Elevation Physics calculation
  // Atmospheric pressure approximation: P = 1013.25 * (1 - 2.25577e-5 * h)^5.25588
  const hMeters = simAltitude * 0.3048;
  const pressureHpa = Math.round(1013.25 * Math.pow(1 - 0.0000225577 * hMeters, 5.25588));
  const evaporationMultiplier = (1013.25 / pressureHpa).toFixed(2);

  let altitudePrescribedBoveda = 65;
  if (simAltitude > 4000) {
    altitudePrescribedBoveda = 69;
  }
  if (simAltitude > 7000) {
    altitudePrescribedBoveda = 72;
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-10">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          The Science of Cigar Storage
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-amber-100">
          Climate Physics, Seasoning & Calibration Lab
        </h1>
        <p className="text-sm text-stone-300 leading-relaxed">
          Master the physics of relative humidity, atmospheric pressure, tobacco beetle prevention, and precision hygrometer calibration.
        </p>
      </div>

      {/* LAB SECTION 1: THE TOBACCO BEETLE & MOLD DANGER MATRIX */}
      <div className="bg-[#18110e] border border-amber-900/50 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-950 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Interactive Risk Simulator
            </span>
            <h2 className="font-serif text-2xl font-bold text-amber-100">
              Tobacco Beetle & Mold Danger Matrix
            </h2>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <span className={`px-3 py-1 rounded-full font-bold uppercase ${
              isOptimal ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' :
              (isBeetleRisk || isMoldRisk) ? 'bg-rose-950 text-rose-300 border border-rose-700' :
              'bg-amber-950 text-amber-300 border border-amber-700'
            }`}>
              Status: {isOptimal ? 'Aficionado Sweet Spot' : (isBeetleRisk && isMoldRisk) ? 'Severe Danger: Mold & Beetles' : isBeetleRisk ? 'Beetle Danger' : isMoldRisk ? 'Mold Risk' : 'Dry/Suboptimal'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sliders */}
          <div className="space-y-6 p-5 rounded-xl bg-[#120b08] border border-stone-800">
            {/* Temperature Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-stone-300 flex items-center gap-1.5 font-medium">
                  <Thermometer className="w-4 h-4 text-amber-400" />
                  Internal Temperature
                </span>
                <span className={`font-serif text-xl font-bold ${simTemp >= 72 ? 'text-rose-400' : 'text-amber-300'}`}>
                  {simTemp}°F
                </span>
              </div>
              <input
                type="range"
                min="55"
                max="82"
                value={simTemp}
                onChange={(e) => setSimTemp(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-900 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-stone-400">
                <span>55°F (Dormant)</span>
                <span className="text-emerald-400 font-semibold">65°-68°F (Target)</span>
                <span className="text-rose-400 font-semibold">72°F+ (Beetle Hatch Zone)</span>
              </div>
            </div>

            {/* Humidity Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-stone-300 flex items-center gap-1.5 font-medium">
                  <Droplets className="w-4 h-4 text-amber-400" />
                  Relative Humidity (RH)
                </span>
                <span className={`font-serif text-xl font-bold ${simRH >= 70 ? 'text-rose-400' : simRH < 62 ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {simRH}% RH
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="80"
                value={simRH}
                onChange={(e) => setSimRH(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-900 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-stone-400">
                <span>50% (Cracking/Dry)</span>
                <span className="text-emerald-400 font-semibold">64%-67% (Optimal)</span>
                <span className="text-rose-400 font-semibold">70%+ (White Mold Zone)</span>
              </div>
            </div>
          </div>

          {/* Diagnosis & Scientific Insights */}
          <div className="p-5 rounded-xl bg-[#130b08] border border-stone-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <h3 className="font-serif text-base font-bold text-amber-100 flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-400" />
                Biological Diagnosis
              </h3>

              {isOptimal && (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-xs text-emerald-200 space-y-1">
                  <p className="font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Pristine Aging Environment
                  </p>
                  <p>
                    At {simTemp}°F and {simRH}% RH, natural tobacco oils remain supple without becoming soggy. Combustibility is clean, draw is smooth, and dormant beetle eggs cannot hatch.
                  </p>
                </div>
              )}

              {isBeetleRisk && (
                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/50 text-xs text-rose-200 space-y-1">
                  <p className="font-bold flex items-center gap-1.5 text-rose-300">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    CRITICAL: Tobacco Beetle Danger Zone (72°F+)
                  </p>
                  <p>
                    Dormant <em>Lasioderma serricorne</em> (tobacco beetle) larvae naturally present in tobacco leaves begin to hatch at 72°F. The larvae chew circular pinholes through prized wrappers. Consider an electric wineador or moving the humidor to a cooler basement.
                  </p>
                </div>
              )}

              {isMoldRisk && (
                <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-800/50 text-xs text-amber-200 space-y-1">
                  <p className="font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    Warning: Spongy Draw & Mold Threat (70%+ RH)
                  </p>
                  <p>
                    Above 70% RH, wrappers absorb excess water vapor. Cigars burn unevenly, require constant relights, and develop bitter acrid flavors. Prolonged exposure causes white fungal mold blooms.
                  </p>
                </div>
              )}

              {isDryRisk && (
                <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 text-xs text-stone-300 space-y-1">
                  <p className="font-bold text-amber-300">Dry Atmosphere (Sub-62% RH)</p>
                  <p>
                    Essential tobacco oils evaporate, making smoke harsh, peppery, and bitter. Wrappers become brittle and crack when cut.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-2 text-[11px] text-stone-400 border-t border-stone-800">
              💡 <strong>The 70/70 Myth:</strong> The old traditional rule of "70°F and 70% RH" was invented for Cuban humidors with porous seals. Modern aficionados and master blenders recommend <strong>65°F - 68°F and 65% RH</strong> for peak flavor combustion.
            </div>
          </div>
        </div>
      </div>

      {/* LAB SECTION 2: ALTITUDE & ATMOSPHERIC PRESSURE ENGINE */}
      <div className="bg-[#18110e] border border-amber-900/50 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center space-x-2 border-b border-amber-950 pb-4">
          <Mountain className="w-5 h-5 text-amber-400" />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Barometric Physics Calculator
            </span>
            <h2 className="font-serif text-2xl font-bold text-amber-100">
              Elevation & Altitude Evaporation Engine
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <p className="text-xs text-stone-300 leading-relaxed">
              At high elevation, atmospheric air pressure is lower, causing water molecules to escape into the vapor phase much faster. Wooden humidors breathe more heavily, and hygrometers experience calibration shifts.
            </p>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-amber-100">
                Your Altitude (Feet Above Sea Level)
              </label>
              <input
                type="range"
                min="0"
                max="9000"
                step="250"
                value={simAltitude}
                onChange={(e) => setSimAltitude(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-900 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-stone-400">
                <span>0 ft (Miami/NYC)</span>
                <span>2,500 ft</span>
                <span>5,280 ft (Denver)</span>
                <span>7,500 ft+ (Mountain)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { name: 'Miami (10 ft)', ft: 10 },
                { name: 'Austin (500 ft)', ft: 500 },
                { name: 'Atlanta (1,050 ft)', ft: 1050 },
                { name: 'Salt Lake (4,220 ft)', ft: 4220 },
                { name: 'Denver (5,280 ft)', ft: 5280 },
                { name: 'Santa Fe (7,199 ft)', ft: 7199 }
              ].map((city) => (
                <button
                  key={city.name}
                  onClick={() => setSimAltitude(city.ft)}
                  className={`px-2.5 py-1 rounded text-xs border transition-all ${
                    simAltitude === city.ft
                      ? 'bg-amber-500 text-stone-950 font-bold border-amber-400'
                      : 'bg-[#120b08] text-stone-400 hover:text-white border-stone-800'
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </div>
          </div>

          {/* Physics Readout */}
          <div className="p-5 rounded-xl bg-[#120b08] border border-stone-800 grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-[#18100d] border border-stone-800 text-center">
              <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Atmospheric Pressure</span>
              <span className="font-serif text-2xl font-bold text-amber-300">{pressureHpa} hPa</span>
              <span className="text-[10px] text-stone-500">{(pressureHpa * 0.0145038).toFixed(1)} psi</span>
            </div>

            <div className="p-3 rounded-lg bg-[#18100d] border border-stone-800 text-center">
              <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Vapor Escape Velocity</span>
              <span className="font-serif text-2xl font-bold text-rose-400">{evaporationMultiplier}x</span>
              <span className="text-[10px] text-stone-500">vs. Sea Level</span>
            </div>

            <div className="col-span-2 p-4 rounded-lg bg-amber-950/30 border border-amber-800/40 space-y-1 text-xs">
              <div className="flex justify-between items-center">
                <strong className="text-amber-200">Prescribed Boveda Pack Rating:</strong>
                <span className="px-2.5 py-0.5 rounded bg-amber-500 text-stone-950 font-serif font-bold text-sm">
                  {altitudePrescribedBoveda}% Boveda
                </span>
              </div>
              <p className="text-stone-300 text-[11px] pt-1">
                {simAltitude >= 5000 
                  ? 'At this elevation, an airtight Tupperdor with 65% packs will stabilize around 63-64%. A wood desktop humidor requires 69% or 72% packs to maintain 65% equilibrium inside.'
                  : 'At moderate elevation, standard 65% Boveda packs maintain steady equilibrium.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LAB SECTION 3: HYGROMETER SALT TEST & CALIBRATION */}
      <div className="bg-[#18110e] border border-amber-900/50 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center space-x-2 border-b border-amber-950 pb-4">
          <Scale className="w-5 h-5 text-amber-400" />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Precision Calibration Tool
            </span>
            <h2 className="font-serif text-2xl font-bold text-amber-100">
              The 75% Salt Test & Calibration Calculator
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <p className="text-xs text-stone-300 leading-relaxed">
              Never trust a hygrometer out of the box! Digital and analog sensors are often off by ±3% to ±7%. Using a saturated salt slurry in an airtight bag creates a physical constant of exactly <strong>75.0% RH</strong> at room temperature.
            </p>

            <div className="p-4 rounded-xl bg-[#120b08] border border-stone-800 space-y-3">
              <label className="text-sm font-semibold text-stone-200 block">
                What does your hygrometer display after 24 hours in the salt test?
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="65"
                  max="85"
                  value={saltTestReading}
                  onChange={(e) => setSaltTestReading(Number(e.target.value))}
                  className="flex-1 accent-amber-500 cursor-pointer h-2 bg-stone-900 rounded-lg"
                />
                <span className="font-serif text-2xl font-bold text-amber-400 min-w-[60px] text-right">
                  {saltTestReading}%
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-stone-400">
              <a
                href={getAmazonUrl('Boveda One Step Hygrometer Calibration Kit 75', 'B000A33FVY', affiliateTag)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 underline flex items-center gap-1"
              >
                <span>Or buy a pre-calibrated Boveda 75% pouch</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Calibration Math Results */}
          <div className="p-6 rounded-xl bg-[#120b08] border border-stone-800 space-y-4">
            <h4 className="font-serif text-base font-bold text-amber-100">
              Calibration Adjustment Required
            </h4>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-lg bg-[#19110d] border border-stone-800">
                <span className="text-[10px] text-stone-400 uppercase block">Salt Standard</span>
                <span className="font-serif text-xl font-bold text-stone-200">75.0% RH</span>
              </div>
              <div className="p-3 rounded-lg bg-[#19110d] border border-stone-800">
                <span className="text-[10px] text-stone-400 uppercase block">Calculated Offset</span>
                <span className={`font-serif text-xl font-bold ${saltOffset === 0 ? 'text-emerald-400' : saltOffset > 0 ? 'text-amber-400' : 'text-rose-400'}`}>
                  {saltOffset > 0 ? `+${saltOffset}%` : `${saltOffset}%`}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-900/40 text-xs text-stone-300 space-y-1">
              <strong className="text-amber-300 block">How to apply this offset:</strong>
              {saltOffset === 0 ? (
                <span>Your hygrometer is calibrated to laboratory accuracy. No adjustment needed!</span>
              ) : saltOffset > 0 ? (
                <span>
                  Your gauge reads <strong>{Math.abs(saltOffset)}% LOW</strong>. In the Govee smartphone app or physical calibration screw, adjust the offset by <strong>+{saltOffset}%</strong> so it displays the true humidity.
                </span>
              ) : (
                <span>
                  Your gauge reads <strong>{Math.abs(saltOffset)}% HIGH</strong>. In the app settings or calibration dial, subtract <strong>{Math.abs(saltOffset)}%</strong> from the readout.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* LAB SECTION 4: THE 14-DAY SEASONING SCIENCE */}
      <div className="bg-[#18110e] border border-amber-900/50 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center space-x-2 border-b border-amber-950 pb-4">
          <Flame className="w-5 h-5 text-amber-400" />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Wood Chemistry & Protocol
            </span>
            <h2 className="font-serif text-2xl font-bold text-amber-100">
              Why the "Wet Sponge Wipe Down" Destroys Humidors
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-300 leading-relaxed">
          <div className="p-5 rounded-xl bg-[#120b08] border border-rose-950/80 space-y-3">
            <span className="font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              The Outdated Wet Sponge Method (Mistake)
            </span>
            <p>
              Old guides recommended wiping the Spanish cedar walls with a wet sponge and distilled water. This is the <strong>#1 reason wooden humidors fail</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-stone-400">
              <li><strong>Wood Grain Raising:</strong> Liquid water causes the delicate wood fibers to rough up and fray.</li>
              <li><strong>Warpage & Seal Rupture:</strong> The inside cedar expands faster than the exterior hardwood, bowing the lid and creating micro-gaps where humidity leaks forever.</li>
              <li><strong>Mold Incubation:</strong> Wet spots harbor mold spores in the porous cedar.</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-[#120b08] border border-emerald-950/80 space-y-3">
            <span className="font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              The Boveda 84% 14-Day Scientific Protocol
            </span>
            <p>
              Raw kiln-dried Spanish cedar has ~5% moisture and will suck moisture directly out of your cigars unless conditioned first:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-stone-400">
              <li><strong>Zero Liquid Water:</strong> Uses pure water vapor delivered gently over 14 days.</li>
              <li><strong>Uniform Cellular Saturation:</strong> Deep cedar pores absorb moisture slowly without warping joints or lid miters.</li>
              <li><strong>Instructions:</strong> Place one 84% pack per 25-stick capacity inside, close the lid, and <strong>DO NOT OPEN FOR 14 DAYS</strong>. After 14 days, discard 84% packs and insert 65% or 69% maintenance packs.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
