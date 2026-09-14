import React from 'react';
import type { RecommendationResult } from '../../types/humidor';
import { getAmazonUrl } from '../../utils/amazonLinks';
import { ProductImage } from '../Common/ProductImage';
import { 
  Award, AlertTriangle, Mountain, ShoppingCart, 
  ExternalLink, Wrench, CheckCircle, Flame, Droplets, RotateCcw, 
  ArrowRight, Sparkles
} from 'lucide-react';

interface ResultsViewProps {
  result: RecommendationResult;
  onRetake: () => void;
  onOpenBlueprint: (blueprintId: string) => void;
  onOpenCatalogCategory: (category: string) => void;
  onSelectProduct: (productId: string) => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  result,
  onRetake,
  onOpenBlueprint,
  onOpenCatalogCategory,
  onSelectProduct
}) => {
  const {
    primaryArchetype,
    whyThisChoice,
    climateAnalysis,
    recommendedBuyProducts,
    recommendedDIYBlueprint,
    essentialAccessories,
    buildVsBuyVerdict
  } = result;

  const topBuyProduct = recommendedBuyProducts[0];

  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case 'tupperdor': return 'Airtight storage container';
      case 'acrylic': return 'Clear acrylic humidor';
      case 'desktop_wood': return 'Classic wood desktop humidor';
      case 'electric_wineador': return 'Temperature-controlled humidor';
      case 'coolidor': return 'High-capacity cooler setup';
      case 'cabinet': return 'Large furniture-style cabinet';
      case 'travel_case': return 'Hard travel humidor';
      default: return 'Cigar humidor';
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8">
      {/* Top Banner: Archetype Match */}
      <div className="bg-gradient-to-br from-[#241710] via-[#1a110d] to-[#120b08] border border-amber-600/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Best fit for your answers</span>
              </span>
              <span className="text-xs text-stone-400">
                Chosen for your collection, room, and budget
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-amber-100 tracking-tight">
              {getCategoryTitle(primaryArchetype)}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {whyThisChoice.map((reason, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-stone-300">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-black/40 border border-amber-900/60 min-w-[200px] text-center">
            <span className="text-xs text-stone-400 uppercase tracking-wider font-medium">
              Starting humidity level
            </span>
            <span className="font-serif text-4xl font-bold gold-gradient-text my-1">
              {climateAnalysis.recommendedBovedaRH}% RH
            </span>
            <span className="text-[11px] text-amber-300 font-medium">
              Verify with a calibrated hygrometer
            </span>
          </div>
        </div>
      </div>

      {/* CLIMATE & ELEVATION PHYSICS ADVISORY */}
      <div className="p-6 rounded-2xl bg-[#19110d] border border-amber-900/50 shadow-xl space-y-4">
        <div className="flex items-center space-x-2 text-amber-400">
          <Mountain className="w-5 h-5" />
          <h3 className="font-serif text-lg font-bold text-amber-100">
            What to know about your room
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Elevation note */}
          <div className="p-4 rounded-xl bg-[#120b08] border border-stone-800 space-y-2">
            <span className="font-bold text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
              <Mountain className="w-3.5 h-3.5" />
              Elevation context
            </span>
            <p className="text-stone-300 leading-relaxed">
              {climateAnalysis.elevationNote}
            </p>
          </div>

          {/* Regional Climate */}
          <div className="p-4 rounded-xl bg-[#120b08] border border-stone-800 space-y-2">
            <span className="font-bold text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              Room climate
            </span>
            <p className="text-stone-300 leading-relaxed">
              {climateAnalysis.climateNote}
            </p>
          </div>

          {/* Risk Level & Seasonal */}
          <div className="p-4 rounded-xl bg-[#120b08] border border-stone-800 space-y-2">
            <span className="font-bold text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5" />
              Storage risk: <strong className={climateAnalysis.moldBeetleRisk === 'High' ? 'text-rose-400' : 'text-emerald-400'}>{climateAnalysis.moldBeetleRisk}</strong>
            </span>
            <p className="text-stone-300 leading-relaxed">
              {climateAnalysis.seasonalAdvice || 'Check your hygrometer offset every 6 months to ensure zero seal degradation.'}
            </p>
          </div>
        </div>

        {climateAnalysis.temperatureWarning && (
          <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 flex items-start space-x-3 text-xs text-rose-200">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>{climateAnalysis.temperatureWarning}</span>
          </div>
        )}
      </div>

      {/* BUILD VS BUY FORK */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="font-serif text-2xl font-bold text-amber-100">
              Your two best paths
            </h2>
            <p className="text-xs text-stone-400">
              {buildVsBuyVerdict.verdictSummary}
            </p>
          </div>
          {buildVsBuyVerdict.costDifference > 0 && (
            <div className="px-3.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 text-xs font-bold self-start">
              💰 DIY Saves ~${buildVsBuyVerdict.costDifference.toFixed(0)}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* OPTION A: BUY PATH */}
          {topBuyProduct && (
            <div className="bg-[#1a110d] border border-amber-900/60 rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:border-amber-600/60 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/70 border border-amber-800/60 px-2.5 py-1 rounded-full">
                    Ready-made option
                  </span>
                  <span className="text-xs text-stone-400 font-medium">Little or no assembly</span>
                </div>

                <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/40 border border-stone-800 relative">
                  <ProductImage 
                    src={topBuyProduct.imageUrl} 
                    alt={topBuyProduct.name}
                    category={topBuyProduct.category}
                    subCategory={topBuyProduct.subCategory}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-sm border border-stone-700 text-amber-300 text-xs font-bold shadow-md">
                    Editorial pick
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-amber-100 line-clamp-2">
                    {topBuyProduct.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1 text-xs text-stone-400">
                    <span>Selection checked Sep 2026</span>
                    <span>•</span>
                    <span className="text-stone-300 font-semibold">Up to {topBuyProduct.capacitySticks} cigars</span>
                  </div>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {topBuyProduct.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-stone-800/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">Why Buy This:</span>
                  {buildVsBuyVerdict.buyPros.map((pro, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-stone-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-800/80 space-y-2">
                <button
                  onClick={() => onSelectProduct(topBuyProduct.slug || topBuyProduct.id)}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl font-bold text-xs bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-800/50 shadow-md transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Read our full review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={getAmazonUrl(topBuyProduct.amazonSearchQuery, topBuyProduct.asin)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 shadow-lg shadow-amber-950/60 transition-transform transform hover:scale-[1.02]"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Check current price</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* OPTION B: BUILD PATH */}
          {recommendedDIYBlueprint && (
            <div className="bg-[#1a110d] border border-amber-900/60 rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:border-amber-600/60 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/70 border border-amber-800/60 px-2.5 py-1 rounded-full">
                    DIY option
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold">Strong gasket seal</span>
                </div>

                <div className="p-4 rounded-xl bg-[#130b08] border border-amber-900/40 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-amber-100">
                        {recommendedDIYBlueprint.title}
                      </h3>
                      <p className="text-xs text-amber-400/80">
                        {recommendedDIYBlueprint.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-stone-400 block">Estimated cost</span>
                      <span className="font-serif text-2xl font-bold text-emerald-400">
                        ~${recommendedDIYBlueprint.estimatedCost.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs py-2 border-y border-stone-800">
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase">Capacity</span>
                      <span className="font-bold text-stone-200">{recommendedDIYBlueprint.capacitySticks} Sticks</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase">Build Time</span>
                      <span className="font-bold text-stone-200">{recommendedDIYBlueprint.buildTimeHours * 60} mins</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase">Seal Quality</span>
                      <span className="font-bold text-emerald-400">{recommendedDIYBlueprint.sealRating}/10</span>
                    </div>
                  </div>

                  {/* Materials Preview */}
                  <div>
                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                      What you’ll need:
                    </span>
                    <ul className="space-y-1 text-xs text-stone-300">
                      {recommendedDIYBlueprint.materials.map((mat, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <Wrench className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="font-medium text-stone-200">{mat.notes || mat.productId}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-stone-800/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">Why Build This:</span>
                  {buildVsBuyVerdict.buildPros.map((pro, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-stone-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-800/80">
                <button
                  onClick={() => onOpenBlueprint(recommendedDIYBlueprint.id)}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-stone-800 to-stone-900 hover:from-amber-900 hover:to-tobacco-800 text-amber-300 border border-amber-700/50 shadow-lg transition-transform transform hover:scale-[1.02]"
                >
                  <Wrench className="w-4 h-4 text-amber-400" />
                  <span>Open the step-by-step build guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ESSENTIAL ACCESSORIES & DAY-ONE SETUP KIT */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#1a110d] border border-amber-900/50 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              What you need to get started
            </h3>
            <p className="text-xs text-stone-400">
              These basics help you set up the humidor and keep an eye on its conditions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {essentialAccessories.map((item) => (
            <div 
              key={item.id}
              className="bg-[#130b08] border border-stone-800 rounded-xl p-4 flex flex-col justify-between hover:border-amber-800/60 transition-colors"
            >
              <div className="space-y-3">
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-black/40 relative">
                  <ProductImage
                    src={item.imageUrl}
                    alt={item.name}
                    category={item.category}
                    subCategory={item.subCategory}
                    className="w-full h-full"
                    imageClassName="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/85 backdrop-blur-sm text-amber-300 font-semibold text-[10px] border border-amber-900/40 shadow">
                    Check Price
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">
                    {item.category === 'hygrometer' ? 'Smart Sensor' : item.category === 'humidification' ? 'Humidity Control' : 'Essential Gear'}
                  </span>
                  <h4 className="font-semibold text-xs text-stone-200 line-clamp-2 mt-0.5">
                    {item.name}
                  </h4>
                </div>

                <p className="text-[11px] text-stone-400 line-clamp-2">
                  {item.bestFor}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-stone-800/80">
                <button
                  onClick={() => onSelectProduct(item.slug || item.id)}
                  className="py-1.5 px-2 rounded-lg text-[11px] font-semibold bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-900/40 text-center transition-colors"
                >
                  Review
                </button>
                <a
                  href={getAmazonUrl(item.amazonSearchQuery, item.asin)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-2 rounded-lg text-[11px] font-bold bg-amber-600 hover:bg-amber-500 text-stone-950 flex items-center justify-center space-x-1 transition-all"
                >
                  <span>Check Price</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-amber-950">
        <button
          onClick={onRetake}
          className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-medium text-stone-400 bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:text-white transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Change my answers</span>
        </button>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => onOpenCatalogCategory(primaryArchetype)}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-amber-950/60 hover:bg-amber-900/60 text-amber-300 border border-amber-800/60 transition-colors"
          >
            <span>See more options</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
