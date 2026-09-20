import React, { useState, useMemo } from 'react';
import { AMAZON_PRODUCTS } from '../../data/products';
import { getAmazonUrl } from '../../utils/amazonLinks';
import { ProductImage } from '../Common/ProductImage';
import { 
  Search, ShoppingBag, ExternalLink, Zap, Check
} from 'lucide-react';

interface ProductCatalogProps {
  initialCategory?: string;
  onSelectProduct: (productId: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  initialCategory,
  onSelectProduct
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'capacity'>('recommended');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'desktop_wood', label: 'Wood Desktops' },
    { id: 'electric_wineador', label: 'Electric Wineadors' },
    { id: 'acrylic', label: 'Acrylic & Glass' },
    { id: 'travel_case', label: 'Travel Cases' },
    { id: 'cabinet', label: 'Cabinet Towers' },
    { id: 'diy_part', label: 'DIY Parts & Cedar' },
    { id: 'hygrometer', label: 'Smart Hygrometers' },
    { id: 'humidification', label: 'Boveda & Humidifiers' },
    { id: 'accessory', label: 'Cutters & Lighters' },
  ];

  const filteredProducts = useMemo(() => {
    return AMAZON_PRODUCTS.filter(p => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Price filter
      if (p.price > maxPrice) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'recommended') return (b.scorecard?.valueScore ?? b.sealRating) - (a.scorecard?.valueScore ?? a.sealRating);
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'capacity') return b.capacitySticks - a.capacitySticks;
      return 0;
    });
  }, [searchQuery, selectedCategory, maxPrice, sortBy]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 space-y-8">
      {/* Catalog Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
          <ShoppingBag className="w-3.5 h-3.5" />
          Curated Marketplace Directory
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-amber-100">
          The Aficionado Cigar Storage & Accessories Catalog
        </h1>
        <p className="text-sm text-stone-300 leading-relaxed">
          Selections are based on category fit, listing accuracy, marketplace feedback strength, useful capacity, and value. Product availability was checked September 14, 2026.
        </p>
      </div>

      {/* Controls / Filter Bar */}
      <div className="p-6 rounded-2xl bg-[#18110e] border border-amber-900/40 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by brand (Klaro, Needone, Boveda, Govee, Xikar)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#120b08] border border-stone-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-3 shrink-0">
            <label className="text-xs font-semibold text-stone-400">Sort By:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#120b08] border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
            >
              <option value="recommended">Editor’s Picks</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="capacity">Capacity (Sticks)</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-stone-800/80">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-stone-950 font-bold shadow-md'
                  : 'bg-[#120b08] text-stone-400 hover:text-white border border-stone-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className="bg-[#17100d] border border-amber-900/40 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl hover:border-amber-600/60 transition-all group"
          >
            <div>
              {/* Product Image & Badges */}
              <div className="aspect-[4/3] w-full bg-[#f3eee5] relative overflow-hidden p-4 border-b border-stone-800">
                <ProductImage
                  src={prod.imageUrl}
                  alt={prod.name}
                  category={prod.category}
                  subCategory={prod.subCategory}
                  className="w-full h-full"
                  imageClassName="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-sm border border-amber-900/50 text-amber-300 text-xs font-semibold shadow flex items-center gap-1.5">
                  <span className="font-bold text-amber-400">
                    {prod.priceBracket || (prod.price <= 40 ? '$' : prod.price <= 120 ? '$$' : prod.price <= 300 ? '$$$' : '$$$$')}
                  </span>
                  <span className="text-[11px] text-stone-300">Check Price</span>
                </div>
                {prod.capacitySticks > 0 && (
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-stone-900/90 text-stone-200 text-xs font-semibold border border-stone-700">
                    {prod.capacitySticks} Sticks
                  </div>
                )}
                {prod.sealRating >= 9.5 && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-emerald-950/90 text-emerald-300 text-xs font-bold border border-emerald-700/60">
                    Seal: {prod.sealRating}/10
                  </div>
                )}
              </div>

              {/* Content Details */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-amber-500 uppercase tracking-wider text-[10px]">
                    {prod.brand}
                  </span>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wide">Selection checked Sep 2026</span>
                </div>

                <h3 className="font-serif text-base font-bold text-amber-100 line-clamp-2">
                  {prod.name}
                </h3>

                <p className="text-xs text-stone-300 line-clamp-2">
                  {prod.description}
                </p>

                {/* Electric Specs */}
                {prod.electricFeatures && (
                  <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-900/40 text-[11px] text-amber-200 flex items-center space-x-2">
                    <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>
                      {prod.electricFeatures.heating ? 'Heating & Cooling' : 'Cooling only'} ({prod.electricFeatures.tempRange})
                    </span>
                  </div>
                )}

                {/* Pros & Cons Preview */}
                <div className="space-y-1 pt-2 border-t border-stone-800">
                  {prod.pros.slice(0, 2).map((pro, i) => (
                    <div key={i} className="flex items-start space-x-1.5 text-[11px] text-stone-300">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{pro}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions: Review & Buy */}
            <div className="p-5 pt-0 grid grid-cols-2 gap-2">
              <button
                onClick={() => onSelectProduct(prod.slug || prod.id)}
                className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-900/40 text-center transition-colors"
              >
                Read Review
              </button>
              <a
                href={getAmazonUrl(prod.amazonSearchQuery, prod.asin)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-stone-950 transition-colors shadow-md"
              >
                <span>Check Price</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-[#160f0c] rounded-2xl border border-stone-800 space-y-3">
          <p className="text-stone-400 text-sm">
            No products matched your filter criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setMaxPrice(2000);
            }}
            className="px-4 py-2 rounded-lg bg-stone-800 text-xs font-semibold text-amber-300 hover:bg-stone-700"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
