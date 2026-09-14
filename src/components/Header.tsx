import React, { useState, useRef, useEffect } from 'react';
import { 
  Compass, Scale, Wrench, ShoppingBag, BookOpen, 
  ChevronDown, Menu, X, Tag, ShieldCheck
} from 'lucide-react';
import { BrandLogo } from './Common/BrandLogo';

interface HeaderProps {
  activeTab: 'wizard' | 'build-vs-buy' | 'blueprints' | 'catalog' | 'seasoning-lab' | 'guides';
  setActiveTab: (tab: 'wizard' | 'build-vs-buy' | 'blueprints' | 'catalog' | 'seasoning-lab' | 'guides') => void;
  affiliateTag: string;
  setAffiliateTag: (tag: string) => void;
  onSelectCatalogCategory?: (category: string) => void;
  onSelectBlueprint?: (blueprintId: string) => void;
  onOpenLegal?: (doc: any) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  affiliateTag,
  setAffiliateTag,
  onSelectCatalogCategory,
  onSelectBlueprint,
  onOpenLegal
}) => {
  const [reviewsDropdownOpen, setReviewsDropdownOpen] = useState(false);
  const [diyDropdownOpen, setDiyDropdownOpen] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);
  const [tempTag, setTempTag] = useState(affiliateTag);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const reviewsRef = useRef<HTMLDivElement>(null);
  const diyRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (reviewsRef.current && !reviewsRef.current.contains(event.target as Node)) {
        setReviewsDropdownOpen(false);
      }
      if (diyRef.current && !diyRef.current.contains(event.target as Node)) {
        setDiyDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSaveTag = () => {
    setAffiliateTag(tempTag.trim() || 'cigaradvisor-20');
    setShowTagModal(false);
  };

  const handleCategoryClick = (category: string) => {
    if (onSelectCatalogCategory) {
      onSelectCatalogCategory(category);
    }
    setActiveTab('catalog');
    setReviewsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleBlueprintClick = (blueprintId: string) => {
    if (onSelectBlueprint) {
      onSelectBlueprint(blueprintId);
    }
    setActiveTab('blueprints');
    setDiyDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0e0805]/95 backdrop-blur-md border-b border-amber-950/70 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => {
              setActiveTab('wizard');
              window.location.hash = '#/wizard';
            }}
            className="cursor-pointer group shrink-0"
          >
            <BrandLogo size="md" />
          </div>

          {/* Clean Desktop Navigation (No Overlapping, Balanced Spacing) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* 1. PRIMARY CTA: Humidor Finder */}
            <button
              onClick={() => {
                setActiveTab('wizard');
                window.location.hash = '#/wizard';
              }}
              className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'wizard'
                  ? 'bg-amber-600 text-stone-950 shadow-md shadow-amber-950/60 font-extrabold'
                  : 'text-amber-400 hover:text-white hover:bg-stone-900/80 border border-amber-800/40'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Humidor Finder</span>
            </button>

            {/* 2. DROPDOWN: Reviews & Product Catalog */}
            <div className="relative" ref={reviewsRef}>
              <button
                onClick={() => setReviewsDropdownOpen(!reviewsDropdownOpen)}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'catalog'
                    ? 'bg-stone-800 text-amber-300 border border-amber-800/50'
                    : 'text-stone-300 hover:text-white hover:bg-stone-900/60'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span>Reviews &amp; Catalog</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${reviewsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {reviewsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#18110e] border border-amber-900/60 rounded-2xl shadow-2xl p-2 z-50 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 text-xs">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-500 border-b border-stone-800">
                    Product Categories
                  </div>
                  <button
                    onClick={() => handleCategoryClick('electric_wineador')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-800/80 text-stone-200 hover:text-amber-300 flex items-center justify-between"
                  >
                    <span>Electric Wineadors</span>
                    <span className="text-[10px] text-stone-500">Heating & Cooling</span>
                  </button>
                  <button
                    onClick={() => handleCategoryClick('desktop_wood')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-800/80 text-stone-200 hover:text-amber-300 flex items-center justify-between"
                  >
                    <span>Wood Desktops</span>
                    <span className="text-[10px] text-stone-500">Spanish Cedar</span>
                  </button>
                  <button
                    onClick={() => handleCategoryClick('acrylic')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-800/80 text-stone-200 hover:text-amber-300 flex items-center justify-between"
                  >
                    <span>Acrylic & Jars</span>
                    <span className="text-[10px] text-stone-500">Airtight</span>
                  </button>
                  <button
                    onClick={() => handleCategoryClick('travel_case')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-800/80 text-stone-200 hover:text-amber-300 flex items-center justify-between"
                  >
                    <span>Travel Cases</span>
                    <span className="text-[10px] text-stone-500">Crushproof</span>
                  </button>
                  <button
                    onClick={() => handleCategoryClick('hygrometer')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-800/80 text-stone-200 hover:text-amber-300 flex items-center justify-between"
                  >
                    <span>Smart Hygrometers</span>
                    <span className="text-[10px] text-stone-500">Bluetooth / WiFi</span>
                  </button>
                  <button
                    onClick={() => handleCategoryClick('humidification')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-800/80 text-stone-200 hover:text-amber-300 flex items-center justify-between"
                  >
                    <span>Boveda & Humidifiers</span>
                    <span className="text-[10px] text-stone-500">2-Way RH</span>
                  </button>
                  <div className="pt-1.5 border-t border-stone-800">
                    <button
                      onClick={() => handleCategoryClick('all')}
                      className="w-full text-center py-2 rounded-xl bg-stone-900 text-amber-400 font-bold hover:bg-stone-800"
                    >
                      View All 30+ Products
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. DROPDOWN: Build vs Buy & DIY */}
            <div className="relative" ref={diyRef}>
              <button
                onClick={() => setDiyDropdownOpen(!diyDropdownOpen)}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'build-vs-buy' || activeTab === 'blueprints'
                    ? 'bg-stone-800 text-amber-300 border border-amber-800/50'
                    : 'text-stone-300 hover:text-white hover:bg-stone-900/60'
                }`}
              >
                <Scale className="w-4 h-4 text-amber-400" />
                <span>Build vs. Buy</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${diyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {diyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#18110e] border border-amber-900/60 rounded-2xl shadow-2xl p-2 z-50 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 text-xs">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-500 border-b border-stone-800">
                    Decision & Workshop Tools
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab('build-vs-buy');
                      setDiyDropdownOpen(false);
                      window.location.hash = '#/build-vs-buy';
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-800/80 text-stone-200 hover:text-amber-300 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <Scale className="w-3.5 h-3.5 text-amber-400" />
                      <span>Build vs. Buy Calculator</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold">Compare</span>
                  </button>
                  <button
                    onClick={() => handleBlueprintClick('blueprint-tupperdor-7l')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-800/80 text-stone-200 hover:text-amber-300 flex items-center justify-between"
                  >
                    <span>The $50 Bulletproof Tupperdor</span>
                    <span className="text-[10px] text-stone-500">80 Sticks</span>
                  </button>
                  <button
                    onClick={() => handleBlueprintClick('blueprint-coolidor-marine')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-800/80 text-stone-200 hover:text-amber-300 flex items-center justify-between"
                  >
                    <span>400-Stick Marine Coolidor</span>
                    <span className="text-[10px] text-stone-500">Box Vault</span>
                  </button>
                  <button
                    onClick={() => handleBlueprintClick('blueprint-converted-wineador')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-800/80 text-stone-200 hover:text-amber-300 flex items-center justify-between"
                  >
                    <span>Converted Wineador Build</span>
                    <span className="text-[10px] text-stone-500">Dual Climate</span>
                  </button>
                  <button
                    onClick={() => handleBlueprintClick('blueprint-cabinet-conversion')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-800/80 text-stone-200 hover:text-amber-300 flex items-center justify-between"
                  >
                    <span>Custom Spanish Cedar Cabinet</span>
                    <span className="text-[10px] text-stone-500">1000 Sticks</span>
                  </button>
                </div>
              )}
            </div>

            {/* 4. FOCUS PAGE: Editorial Guides Hub */}
            <button
              onClick={() => {
                setActiveTab('guides');
                window.location.hash = '#/guides';
              }}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'guides'
                  ? 'bg-stone-800 text-amber-300 border border-amber-800/50'
                  : 'text-stone-300 hover:text-white hover:bg-stone-900/60'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Editorial Guides</span>
            </button>
          </nav>

          {/* Right Header: Quick Action CTA & Subtle Utility Controls */}
          <div className="flex items-center space-x-2">
            {onOpenLegal && (
              <button
                onClick={() => onOpenLegal('affiliate-disclosure')}
                className="p-2 rounded-xl text-stone-400 hover:text-amber-400 hover:bg-stone-900/80 border border-stone-800/70 hover:border-amber-900/60 transition-colors"
                title="Amazon Associates FTC Disclosure"
                aria-label="FTC Disclosure"
              >
                <ShieldCheck className="w-4 h-4 text-amber-500/80" />
              </button>
            )}

            <button
              onClick={() => {
                setTempTag(affiliateTag);
                setShowTagModal(true);
              }}
              className="p-2 rounded-xl text-stone-400 hover:text-amber-400 hover:bg-stone-900/80 border border-stone-800/70 hover:border-amber-900/60 transition-colors"
              title={`Amazon Affiliate Tag (${affiliateTag}) - Click to customize`}
              aria-label="Amazon Affiliate Settings"
            >
              <Tag className="w-4 h-4 text-amber-500/80" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-white transition-colors ml-1"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-stone-800 space-y-2 text-xs animate-in slide-in-from-top-4 duration-200">
            <button
              onClick={() => {
                setActiveTab('wizard');
                setMobileMenuOpen(false);
                window.location.hash = '#/wizard';
              }}
              className="w-full text-left p-3 rounded-xl bg-amber-600/20 text-amber-300 border border-amber-500/30 font-bold flex items-center space-x-2"
            >
              <Compass className="w-4 h-4" />
              <span>Humidor Finder (Smart Selector)</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('catalog');
                setMobileMenuOpen(false);
                window.location.hash = '#/catalog';
              }}
              className="w-full text-left p-3 rounded-xl bg-stone-900 text-stone-200 font-semibold flex items-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>Product Reviews & Catalog</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('build-vs-buy');
                setMobileMenuOpen(false);
                window.location.hash = '#/build-vs-buy';
              }}
              className="w-full text-left p-3 rounded-xl bg-stone-900 text-stone-200 font-semibold flex items-center space-x-2"
            >
              <Scale className="w-4 h-4 text-amber-400" />
              <span>Build vs. Buy Calculator</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('blueprints');
                setMobileMenuOpen(false);
                window.location.hash = '#/blueprints';
              }}
              className="w-full text-left p-3 rounded-xl bg-stone-900 text-stone-200 font-semibold flex items-center space-x-2"
            >
              <Wrench className="w-4 h-4 text-amber-400" />
              <span>DIY Workshop Blueprints</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('guides');
                setMobileMenuOpen(false);
                window.location.hash = '#/guides';
              }}
              className="w-full text-left p-3 rounded-xl bg-stone-900 text-stone-200 font-semibold flex items-center space-x-2"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Editorial & Technical Guides</span>
            </button>

            <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-500">
              <button
                onClick={() => {
                  setShowTagModal(true);
                  setMobileMenuOpen(false);
                }}
                className="text-amber-400 hover:underline"
              >
                Configure Tag ({affiliateTag})
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Affiliate Tag Modal */}
      {showTagModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1b120e] border border-amber-900/60 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-amber-950 pb-3">
              <div className="flex items-center space-x-2 text-amber-400">
                <Tag className="w-5 h-5" />
                <h3 className="font-serif text-lg font-bold text-amber-100">
                  Amazon Associates Tag
                </h3>
              </div>
              <button
                onClick={() => setShowTagModal(false)}
                className="text-stone-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              Every product button links directly to Amazon product detail pages (`amazon.com/dp/:asin?tag=yourtag`). Test with your store ID below:
            </p>

            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                Tracking ID
              </label>
              <input
                type="text"
                value={tempTag}
                onChange={(e) => setTempTag(e.target.value)}
                placeholder="e.g. cigaradvisor-20"
                className="w-full bg-[#120b08] border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500 font-mono"
              />
            </div>

            <div className="flex items-center justify-end space-x-3 pt-3 border-t border-amber-950">
              <button
                onClick={() => setShowTagModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveTag}
                className="px-5 py-2 rounded-xl text-xs font-bold text-stone-950 bg-amber-600 hover:bg-amber-500 transition-all shadow"
              >
                Save & Apply Tag
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
