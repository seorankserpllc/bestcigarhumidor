import React, { useState } from 'react';
import { Scale, Check, X, ShoppingBag, Wrench, ArrowRight, ExternalLink } from 'lucide-react';
import { getAmazonUrl } from '../../utils/amazonLinks';

interface BuildVsBuyCalculatorProps {
  affiliateTag: string;
  onSelectBlueprint: (blueprintId: string) => void;
}

export const BuildVsBuyCalculator: React.FC<BuildVsBuyCalculatorProps> = ({
  affiliateTag,
  onSelectBlueprint
}) => {
  const [capacity, setCapacity] = useState<number>(100);

  // Dynamic calculations based on capacity
  let buyTitle = '';
  let buyCost = 0;
  let buySealScore = 7.5;
  let buyAesthetics = 5;
  let buyAnnualMaint = 45; // Wood humidors leak, requiring frequent Boveda replacements

  let buildTitle = '';
  let buildCost = 0;
  let buildSealScore = 10;
  let buildAesthetics = 2;
  let buildAnnualMaint = 15; // Airtight seals make Boveda last 12-18 months
  let blueprintTargetId = 'blueprint-tupperdor-7l';

  if (capacity <= 40) {
    buyTitle = 'Klaro Renzo Spanish Cedar Glass Top Desktop';
    buyCost = 99.99;
    buySealScore = 7.8;
    buyAesthetics = 5;
    buyAnnualMaint = 35;

    buildTitle = 'Sistema 7L + Spanish Cedar Tray (Tupperdor)';
    buildCost = 45.00;
    buildSealScore = 10;
    buildAesthetics = 2;
    buildAnnualMaint = 12;
    blueprintTargetId = 'blueprint-tupperdor-7l';
  } else if (capacity <= 120) {
    buyTitle = 'Klaro Octodor or Woodronic 3-Drawer Cabinet';
    buyCost = 179.99;
    buySealScore = 8.2;
    buyAesthetics = 5;
    buyAnnualMaint = 55;

    buildTitle = 'Double Sistema 7L Stack or Medium Tupperdor';
    buildCost = 65.00;
    buildSealScore = 10;
    buildAesthetics = 2;
    buildAnnualMaint = 18;
    blueprintTargetId = 'blueprint-tupperdor-7l';
  } else if (capacity <= 350) {
    buyTitle = 'Needone 23L / 48L Electric Wineador Humidor';
    buyCost = 329.99;
    buySealScore = 9.6;
    buyAesthetics = 4.5;
    buyAnnualMaint = 30;

    buildTitle = 'Igloo Marine 54 Qt "Coolidor" System';
    buildCost = 119.00;
    buildSealScore = 9.8;
    buildAesthetics = 2.5;
    buildAnnualMaint = 20;
    blueprintTargetId = 'blueprint-coolidor-marine';
  } else {
    buyTitle = 'Commercial Multi-Tier Tower Cabinet';
    buyCost = 1299.00;
    buySealScore = 9.2;
    buyAesthetics = 5;
    buyAnnualMaint = 95;

    buildTitle = 'High-Capacity 100 Qt Marine Cooler + Cedar Shelves';
    buildCost = 185.00;
    buildSealScore = 9.8;
    buildAesthetics = 3;
    buildAnnualMaint = 28;
    blueprintTargetId = 'blueprint-coolidor-marine';
  }

  const buyCostPerStick = buyCost / capacity;
  const buildCostPerStick = buildCost / capacity;
  const upfrontSavings = buyCost - buildCost;
  const fiveYearBuyTCO = buyCost + (buyAnnualMaint * 5);
  const fiveYearBuildTCO = buildCost + (buildAnnualMaint * 5);
  const fiveYearSavings = fiveYearBuyTCO - fiveYearBuildTCO;

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
          <Scale className="w-3.5 h-3.5" />
          Decision Engineering
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-amber-100">
          The "Build vs. Buy" Cost & Performance Engine
        </h1>
        <p className="text-sm text-stone-300 leading-relaxed">
          Should you invest in a turnkey commercial humidor or assemble a high-performance DIY Tupperdor/Coolidor? Compare initial cost, long-term maintenance, and seal physics.
        </p>
      </div>

      {/* Interactive Stick Capacity Slider */}
      <div className="p-6 rounded-2xl bg-[#19110d] border border-amber-900/50 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <label className="text-sm font-semibold text-amber-100">
              Select Your Target Storage Capacity
            </label>
            <p className="text-xs text-stone-400">
              Slide to simulate storage from desktop singles to full box aging vaults
            </p>
          </div>
          <div className="flex items-baseline space-x-2 self-start sm:self-auto">
            <span className="font-serif text-3xl font-bold gold-gradient-text">
              {capacity}
            </span>
            <span className="text-sm text-stone-400 font-medium">Cigars</span>
          </div>
        </div>

        <input
          type="range"
          min="20"
          max="600"
          step="10"
          value={capacity}
          onChange={(e) => setCapacity(Number(e.target.value))}
          className="w-full accent-amber-500 cursor-pointer h-2.5 bg-stone-900 rounded-lg"
        />

        <div className="flex justify-between text-xs text-stone-400 font-medium pt-1">
          <span>20 Sticks (Desk)</span>
          <span>100 Sticks (Medium)</span>
          <span>250 Sticks (Wineador)</span>
          <span>450 Sticks (Coolidor)</span>
          <span>600+ Sticks (Vault)</span>
        </div>
      </div>

      {/* Head-to-Head Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* BUY CARD */}
        <div className="bg-[#18100d] border border-amber-900/50 rounded-2xl p-6 flex flex-col justify-between shadow-xl space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/70 border border-amber-800/60 px-2.5 py-1 rounded-full">
                Option 1: Buy Retail Turnkey
              </span>
              <span className="text-xs text-stone-400">Off-the-shelf</span>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-amber-100 mb-1">
                {buyTitle}
              </h3>
              <p className="text-xs text-stone-400">
                Turnkey commercial model with Spanish cedar interior & glass display.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#120b08] border border-stone-800">
              <div>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Upfront Retail Price</span>
                <span className="font-serif text-2xl font-bold text-stone-100">${buyCost.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Cost Per Stick Capacity</span>
                <span className="font-serif text-2xl font-bold text-amber-400">${buyCostPerStick.toFixed(2)}</span>
              </div>
              <div className="pt-2 border-t border-stone-800/80">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Seal Quality (1-10)</span>
                <span className="font-semibold text-sm text-stone-200">{buySealScore} / 10</span>
              </div>
              <div className="pt-2 border-t border-stone-800/80">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Aesthetics Appeal</span>
                <span className="font-semibold text-sm text-amber-300">{buyAesthetics} / 5</span>
              </div>
              <div className="pt-2 border-t border-stone-800/80 col-span-2">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">5-Year Est. Total Cost of Ownership</span>
                <span className="font-semibold text-sm text-stone-300">${fiveYearBuyTCO.toFixed(0)}</span>
              </div>
            </div>

            {/* Trait list */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-stone-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Stunning furniture aesthetic for home lounges, desks, and credenzas</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero assembly work required; unpack, season, and use</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-300">
                <X className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Wood breathes: requires 3x more Boveda pack replacements over 5 years</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-300">
                <X className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Prone to seasonal humidity swings during dry winter indoor heating</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-800">
            <a
              href={getAmazonUrl(buyTitle, undefined, affiliateTag)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 shadow-lg shadow-amber-950/60 transition-transform transform hover:scale-[1.02]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop Turnkey Models on Amazon</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* BUILD CARD */}
        <div className="bg-[#18100d] border border-amber-900/50 rounded-2xl p-6 flex flex-col justify-between shadow-xl space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-2.5 py-1 rounded-full">
                Option 2: Build Custom DIY
              </span>
              <span className="text-xs text-emerald-400 font-semibold">100% Hermetic Seal</span>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-amber-100 mb-1">
                {buildTitle}
              </h3>
              <p className="text-xs text-stone-400">
                Airtight food-grade or marine container lined with genuine Spanish cedar trays.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#120b08] border border-stone-800">
              <div>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Parts Bill of Materials</span>
                <span className="font-serif text-2xl font-bold text-emerald-400">${buildCost.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Cost Per Stick Capacity</span>
                <span className="font-serif text-2xl font-bold text-emerald-400">${buildCostPerStick.toFixed(2)}</span>
              </div>
              <div className="pt-2 border-t border-stone-800/80">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Seal Quality (1-10)</span>
                <span className="font-semibold text-sm text-emerald-400">{buildSealScore} / 10 (Airtight)</span>
              </div>
              <div className="pt-2 border-t border-stone-800/80">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Aesthetics Appeal</span>
                <span className="font-semibold text-sm text-stone-400">{buildAesthetics} / 5</span>
              </div>
              <div className="pt-2 border-t border-stone-800/80 col-span-2">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">5-Year Est. Total Cost of Ownership</span>
                <span className="font-semibold text-sm text-emerald-300">${fiveYearBuildTCO.toFixed(0)}</span>
              </div>
            </div>

            {/* Trait list */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-stone-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% airtight rubber gasket: humidity NEVER leaks out</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Boveda packs last 12-18 months without drying out (saves $250+ over 5 years)</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Virtually indestructible against drops, spills, and altitude shifts</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-300">
                <X className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Utilitarian plastic/cooler appearance (best kept in closet or cabinet)</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-800">
            <button
              onClick={() => onSelectBlueprint(blueprintTargetId)}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-stone-800 to-stone-900 hover:from-amber-900 hover:to-tobacco-800 text-amber-300 border border-amber-700/50 shadow-lg transition-transform transform hover:scale-[1.02]"
            >
              <Wrench className="w-4 h-4 text-amber-400" />
              <span>View DIY Blueprint & Amazon Parts List</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 5-Year Financial Summary */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#18110e] via-[#1f140e] to-[#18110e] border border-amber-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            5-Year Financial Verdict
          </span>
          <h3 className="font-serif text-2xl font-bold text-amber-100">
            DIY Build Saves ${fiveYearSavings.toFixed(0)} Over 5 Years
          </h3>
          <p className="text-xs text-stone-300 max-w-xl">
            Because airtight DIY containers do not transpire moisture into the room, Boveda packs last over a year instead of 60-90 days, compounding massive savings over time.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-4 rounded-xl bg-black/40 border border-stone-800 text-center">
            <span className="text-[10px] text-stone-400 uppercase block">Upfront Difference</span>
            <span className="font-serif text-xl font-bold text-emerald-400">+${upfrontSavings.toFixed(0)}</span>
          </div>
          <div className="p-4 rounded-xl bg-black/40 border border-stone-800 text-center">
            <span className="text-[10px] text-stone-400 uppercase block">5-Yr Total Savings</span>
            <span className="font-serif text-xl font-bold text-emerald-400">+${fiveYearSavings.toFixed(0)}</span>
          </div>
        </div>
      </div>

      {/* Feature Comparison Matrix */}
      <div className="p-6 rounded-2xl bg-[#19110d] border border-amber-900/50 shadow-xl space-y-4">
        <h3 className="font-serif text-lg font-bold text-amber-100">
          Feature-by-Feature Engineering Matrix
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-300">
            <thead className="bg-[#120b08] text-amber-400 uppercase tracking-wider border-b border-stone-800">
              <tr>
                <th className="p-3">Attribute</th>
                <th className="p-3">Commercial Turnkey (Buy)</th>
                <th className="p-3">DIY Blueprint (Build)</th>
                <th className="p-3">Aficionado Verdict</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60">
              <tr>
                <td className="p-3 font-semibold text-stone-200">Seal Tightness & Physics</td>
                <td className="p-3">Wood friction or magnetic lip (7.5/10)</td>
                <td className="p-3 text-emerald-400 font-bold">Hermetic silicone/rubber gasket (10/10)</td>
                <td className="p-3">DIY never leaks humidity; zero micro-gaps.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-200">Showroom Aesthetics</td>
                <td className="p-3 text-amber-300 font-bold">Piano walnut / Spanish cedar furniture (5/5)</td>
                <td className="p-3">Polypropylene container or marine cooler (2/5)</td>
                <td className="p-3">Turnkey wins for living rooms; DIY wins for closets/pantries.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-200">Seasoning Requirement</td>
                <td className="p-3">Mandatory 14-day Boveda 84% seasoning</td>
                <td className="p-3">Season cedar tray only (or ready immediately)</td>
                <td className="p-3">DIY plastic walls absorb zero water; seasons in 48-72 hrs.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-200">High-Altitude Immunity</td>
                <td className="p-3">Prone to severe moisture loss at 4,000+ ft</td>
                <td className="p-3 text-emerald-400 font-bold">100% immune to barometric moisture loss</td>
                <td className="p-3">DIY Tupperdor is the #1 choice for Denver & mountain climates.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-200">Ease of Expansion</td>
                <td className="p-3">Must purchase an entirely new furniture unit ($100-$300)</td>
                <td className="p-3">Stack another $16 Sistema tub or add a cooler</td>
                <td className="p-3">DIY scales modularly at pennies per stick.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
