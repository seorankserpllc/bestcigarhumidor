import React, { useState } from 'react';
import { DIY_BLUEPRINTS } from '../../data/blueprints';
import { AMAZON_PRODUCTS } from '../../data/products';
import { getAmazonUrl } from '../../utils/amazonLinks';
import { ProductImage } from '../Common/ProductImage';
import { 
  Wrench, CheckCircle2, ExternalLink, Sparkles, Clock, 
  AlertCircle, ShoppingCart, CheckSquare, Square
} from 'lucide-react';

interface BlueprintStudioProps {
  selectedBlueprintId?: string;
}

export const BlueprintStudio: React.FC<BlueprintStudioProps> = ({
  selectedBlueprintId
}) => {
  const [activeBlueprintId, setActiveBlueprintId] = useState<string>(
    selectedBlueprintId || DIY_BLUEPRINTS[0].id
  );
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const currentBlueprint = DIY_BLUEPRINTS.find(b => b.id === activeBlueprintId) || DIY_BLUEPRINTS[0];

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getProduct = (id: string) => {
    return AMAZON_PRODUCTS.find(p => p.id === id);
  };

  // Calculate live checked subtotal
  const totalBOMCost = currentBlueprint.materials.reduce((sum, mat) => {
    const prod = getProduct(mat.productId);
    return sum + (prod ? prod.price * mat.quantity : 0);
  }, 0);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
          <Wrench className="w-3.5 h-3.5" />
          The Humidor Workshop
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-amber-100">
          DIY Humidor Blueprints & Amazon Part Kits
        </h1>
        <p className="text-sm text-stone-300 leading-relaxed">
          Step-by-step engineering schematics to assemble your own high-performance humidor using readily available parts. Better seals, higher capacity, and massive cost savings.
        </p>
      </div>

      {/* Blueprint Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {DIY_BLUEPRINTS.map((bp) => {
          const isSelected = bp.id === activeBlueprintId;
          return (
            <button
              key={bp.id}
              onClick={() => setActiveBlueprintId(bp.id)}
              className={`p-4 rounded-xl text-left border transition-all ${
                isSelected
                  ? 'bg-amber-600/20 border-amber-500 text-amber-100 shadow-xl'
                  : 'bg-[#18110e] border-stone-800/80 text-stone-300 hover:border-amber-900/60'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {bp.difficulty} • {bp.capacitySticks} Sticks
                </span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
              </div>
              <h3 className="font-serif text-sm font-bold text-amber-100 mb-1">
                {bp.title}
              </h3>
              <div className="flex justify-between items-center text-xs text-stone-400">
                <span>Est. Cost: <strong className="text-emerald-400 font-sans font-bold">~${bp.estimatedCost.toFixed(0)}</strong></span>
                <span>{bp.buildTimeHours * 60}m build</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Blueprint Details */}
      <div className="bg-[#17100d] border border-amber-900/50 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8">
        {/* Header summary */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-amber-950">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase">
                Seal Rating: {currentBlueprint.sealRating}/10
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-300 text-xs font-bold uppercase flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Build Time: {currentBlueprint.buildTimeHours * 60} Minutes
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
              {currentBlueprint.title}
            </h2>
            <p className="text-sm text-stone-300 max-w-2xl">
              {currentBlueprint.subtitle}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-amber-900/60 text-center min-w-[190px]">
            <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
              Est. BOM Benchmark
            </span>
            <span className="font-serif text-3xl font-bold text-emerald-400 my-1 block">
              ~${totalBOMCost.toFixed(2)}
            </span>
            <span className="text-xs text-stone-400">
              ~${(totalBOMCost / currentBlueprint.capacitySticks).toFixed(2)} per stick (est)
            </span>
          </div>
        </div>

        {/* Why Build This Callout */}
        <div className="p-4 rounded-xl bg-[#201510] border border-amber-800/40 flex items-start space-x-3 text-xs text-amber-200">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-100 block mb-0.5">The Aficionado Rationale:</strong>
            <span>{currentBlueprint.whyBuildThis}</span>
          </div>
        </div>

        {/* SECTION 1: AMAZON BILL OF MATERIALS (BOM) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-amber-100 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4 text-amber-400" />
              <span>Bill of Materials (Amazon Shopping List)</span>
            </h3>
            <span className="text-xs text-stone-400">Check off items as acquired</span>
          </div>

          <div className="space-y-3">
            {currentBlueprint.materials.map((mat, idx) => {
              const prod = getProduct(mat.productId);
              const isChecked = !!checkedItems[mat.productId];

              if (!prod) return null;

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                    isChecked
                      ? 'bg-[#120c09]/60 border-stone-800/60 opacity-60'
                      : 'bg-[#1a120e] border-amber-950 hover:border-amber-800/60'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <button
                      onClick={() => toggleCheck(mat.productId)}
                      className="mt-1 text-amber-400 hover:text-amber-300 shrink-0"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5 text-stone-500" />
                      )}
                    </button>

                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-stone-800 bg-black">
                      <ProductImage
                        src={prod.imageUrl}
                        alt={prod.name}
                        category={prod.category}
                        subCategory={prod.subCategory}
                        className="w-full h-full"
                        imageClassName="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-amber-300">
                          Qty: {mat.quantity}x
                        </span>
                        <h4 className={`text-sm font-semibold ${isChecked ? 'line-through text-stone-400' : 'text-stone-100'}`}>
                          {prod.name}
                        </h4>
                      </div>
                      <p className="text-xs text-stone-400">
                        {mat.notes || prod.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end space-x-3 pl-8 sm:pl-0 shrink-0">
                    <span className="text-xs font-mono text-amber-300/80 bg-amber-950/40 border border-amber-900/40 px-2 py-1 rounded">
                      Est. ~${(prod.price * mat.quantity).toFixed(2)}
                    </span>
                    <a
                      href={getAmazonUrl(prod.amazonSearchQuery, prod.asin)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-stone-950 flex items-center space-x-1.5 transition-colors shadow-sm"
                    >
                      <span>Check Price</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: STEP-BY-STEP ASSEMBLY WALKTHROUGH */}
        <div className="space-y-4 pt-4 border-t border-amber-950">
          <h3 className="font-serif text-lg font-bold text-amber-100 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-amber-400" />
            <span>Step-by-Step Assembly Instructions</span>
          </h3>

          <div className="space-y-4">
            {currentBlueprint.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#19110d] border border-stone-800 space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h4 className="font-serif text-base font-bold text-amber-100">
                    {step.title}
                  </h4>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed pl-9">
                  {step.description}
                </p>

                {step.proTip && (
                  <div className="ml-9 p-3 rounded-lg bg-amber-950/30 border border-amber-900/40 text-xs text-amber-200 flex items-start space-x-2">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-amber-300">Master Aficionado Pro-Tip:</strong> {step.proTip}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
