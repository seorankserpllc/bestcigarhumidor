import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HumidorWizard } from './components/Wizard/HumidorWizard';
import { ResultsView } from './components/Results/ResultsView';
import { BuildVsBuyCalculator } from './components/BuildVsBuy/BuildVsBuyCalculator';
import { BlueprintStudio } from './components/BlueprintStudio/BlueprintStudio';
import { ProductCatalog } from './components/Catalog/ProductCatalog';
import { SeasoningLab } from './components/SeasoningLab/SeasoningLab';
import { GuidesHub } from './components/Guides/GuidesHub';
import { GuideReader } from './components/Guides/GuideReader';
import { ProductDetailPage } from './components/ProductDetail/ProductDetailPage';
import { ContactView } from './components/Contact/ContactView';
import { Footer } from './components/Footer/Footer';
import { LegalModal, type LegalDocType } from './components/Legal/LegalModal';
import { CookieConsentBanner } from './components/Legal/CookieConsentBanner';
import { AMAZON_PRODUCTS } from './data/products';
import { CIGAR_GUIDES } from './data/guides';
import type { QuizAnswers, RecommendationResult, AmazonProduct, CigarGuide } from './types/humidor';
import { runHumidorRecommendationEngine } from './utils/matchingEngine';
import { Compass } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'wizard' | 'build-vs-buy' | 'blueprints' | 'catalog' | 'seasoning-lab' | 'guides' | 'contact'>('wizard');
  const [affiliateTag, setAffiliateTag] = useState<string>(() => {
    return localStorage.getItem('humidor_affiliate_tag') || 'cigaradvisor-20';
  });
  
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers | undefined>(undefined);
  const [recommendationResult, setRecommendationResult] = useState<RecommendationResult | null>(null);
  const [selectedBlueprintId, setSelectedBlueprintId] = useState<string>('blueprint-tupperdor-7l');
  const [catalogCategory, setCatalogCategory] = useState<string>('all');

  // Deep-linking / Standalone Review & Guide state
  const [activeProduct, setActiveProduct] = useState<AmazonProduct | null>(null);
  const [activeGuide, setActiveGuide] = useState<CigarGuide | null>(null);
  const [legalDoc, setLegalDoc] = useState<LegalDocType | null>(null);

  // Save affiliate tag to localStorage
  useEffect(() => {
    localStorage.setItem('humidor_affiliate_tag', affiliateTag);
  }, [affiliateTag]);

  // URL Hash Router: parse hash on load & listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === '#' || hash === '#/') {
        return;
      }

      // Check for legal route: #/legal/:doc
      if (hash.startsWith('#/legal/')) {
        const doc = hash.replace('#/legal/', '') as LegalDocType;
        if (['affiliate-disclosure', 'privacy-policy', 'terms', 'cookie-policy'].includes(doc)) {
          setLegalDoc(doc);
          return;
        }
      }

      // Check for product route: #/product/:slugOrId
      if (hash.startsWith('#/product/')) {
        const idOrSlug = hash.replace('#/product/', '');
        const matchedProduct = AMAZON_PRODUCTS.find(p => p.slug === idOrSlug || p.id === idOrSlug);
        if (matchedProduct) {
          setActiveProduct(matchedProduct);
          setActiveGuide(null);
          setLegalDoc(null);
          return;
        }
      }

      // Check for guide route: #/guide/:slugOrId
      if (hash.startsWith('#/guide/')) {
        const slugOrId = hash.replace('#/guide/', '');
        const matchedGuide = CIGAR_GUIDES.find(g => g.slug === slugOrId || g.id === slugOrId);
        if (matchedGuide) {
          setActiveGuide(matchedGuide);
          setActiveProduct(null);
          setLegalDoc(null);
          return;
        }
      }

      // Check for tab routes
      const tabMatch = hash.replace('#/', '').replace('#', '') as any;
      if (['wizard', 'build-vs-buy', 'blueprints', 'catalog', 'seasoning-lab', 'guides', 'contact'].includes(tabMatch)) {
        setActiveTab(tabMatch);
        setActiveProduct(null);
        setActiveGuide(null);
        setLegalDoc(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateTab = (tab: 'wizard' | 'build-vs-buy' | 'blueprints' | 'catalog' | 'seasoning-lab' | 'guides' | 'contact') => {
    setActiveTab(tab);
    setActiveProduct(null);
    setActiveGuide(null);
    setLegalDoc(null);
    window.location.hash = `#/${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productIdOrSlug: string) => {
    const prod = AMAZON_PRODUCTS.find(p => p.id === productIdOrSlug || p.slug === productIdOrSlug);
    if (prod) {
      setActiveProduct(prod);
      setActiveGuide(null);
      setLegalDoc(null);
      window.location.hash = `#/product/${prod.slug || prod.id}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectGuide = (guideSlugOrId: string) => {
    const guide = CIGAR_GUIDES.find(g => g.slug === guideSlugOrId || g.id === guideSlugOrId);
    if (guide) {
      setActiveGuide(guide);
      setActiveProduct(null);
      setLegalDoc(null);
      window.location.hash = `#/guide/${guide.slug || guide.id}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenLegal = (doc: LegalDocType) => {
    setLegalDoc(doc);
    window.location.hash = `#/legal/${doc}`;
  };

  const handleCloseLegal = () => {
    setLegalDoc(null);
    if (window.location.hash.startsWith('#/legal/')) {
      window.location.hash = activeProduct 
        ? `#/product/${activeProduct.slug || activeProduct.id}` 
        : activeGuide 
          ? `#/guide/${activeGuide.slug || activeGuide.id}` 
          : `#/${activeTab}`;
    }
  };

  const handleOpenCookieSettings = () => {
    handleOpenLegal('cookie-policy');
  };

  const handleBackFromProduct = () => {
    setActiveProduct(null);
    window.location.hash = `#/${activeTab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromGuide = () => {
    setActiveGuide(null);
    setActiveTab('guides');
    window.location.hash = '#/guides';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWizardComplete = (answers: QuizAnswers) => {
    setQuizAnswers(answers);
    const result = runHumidorRecommendationEngine(answers);
    setRecommendationResult(result);
  };

  const handleRetake = () => {
    setRecommendationResult(null);
    setActiveTab('wizard');
    window.location.hash = '#/wizard';
  };

  const handleOpenBlueprint = (blueprintId: string) => {
    setSelectedBlueprintId(blueprintId);
    handleNavigateTab('blueprints');
  };

  const handleOpenCatalogCategory = (category: string) => {
    setCatalogCategory(category);
    handleNavigateTab('catalog');
  };

  return (
    <div className="min-h-screen bg-[#0f0a08] text-stone-200 flex flex-col font-sans bg-leather">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavigateTab}
        affiliateTag={affiliateTag}
        setAffiliateTag={setAffiliateTag}
        onSelectCatalogCategory={handleOpenCatalogCategory}
        onSelectBlueprint={handleOpenBlueprint}
        onOpenLegal={handleOpenLegal}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* 1. STANDALONE PRODUCT DETAIL PAGE (Takes precedence if activeProduct is set) */}
        {activeProduct ? (
          <ProductDetailPage
            product={activeProduct}
            affiliateTag={affiliateTag}
            allGuides={CIGAR_GUIDES}
            onBack={handleBackFromProduct}
            onOpenGuide={handleSelectGuide}
            onOpenBlueprint={handleOpenBlueprint}
          />
        ) : activeGuide ? (
          /* 2. STANDALONE GUIDE READER (Takes precedence if activeGuide is set) */
          <GuideReader
            guide={activeGuide}
            allProducts={AMAZON_PRODUCTS}
            affiliateTag={affiliateTag}
            onBack={handleBackFromGuide}
            onSelectProduct={handleSelectProduct}
            onSelectBlueprint={handleOpenBlueprint}
          />
        ) : (
          /* 3. PRIMARY NAVIGATION TABS */
          <>
            {activeTab === 'wizard' && (
              <div>
                {!recommendationResult ? (
                  <div className="space-y-6">
                    {/* Finder hero: warm leather-club atmosphere with plain-language positioning */}
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
                          Tell us about your cigars, your room, and your budget. We’ll show you clear ready-made and DIY matches.
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
                    </section>

                    <HumidorWizard 
                      onComplete={handleWizardComplete} 
                      initialAnswers={quizAnswers}
                    />
                  </div>
                ) : (
                  <ResultsView
                    result={recommendationResult}
                    affiliateTag={affiliateTag}
                    onRetake={handleRetake}
                    onOpenBlueprint={handleOpenBlueprint}
                    onOpenCatalogCategory={handleOpenCatalogCategory}
                    onSelectProduct={handleSelectProduct}
                  />
                )}
              </div>
            )}

            {activeTab === 'build-vs-buy' && (
              <BuildVsBuyCalculator
                affiliateTag={affiliateTag}
                onSelectBlueprint={handleOpenBlueprint}
              />
            )}

            {activeTab === 'blueprints' && (
              <BlueprintStudio
                affiliateTag={affiliateTag}
                selectedBlueprintId={selectedBlueprintId}
              />
            )}

            {activeTab === 'catalog' && (
              <ProductCatalog
                affiliateTag={affiliateTag}
                initialCategory={catalogCategory}
                onSelectProduct={handleSelectProduct}
              />
            )}

            {activeTab === 'guides' && (
              <GuidesHub
                guides={CIGAR_GUIDES}
                onSelectGuide={handleSelectGuide}
              />
            )}

            {activeTab === 'seasoning-lab' && (
              <SeasoningLab affiliateTag={affiliateTag} />
            )}

            {activeTab === 'contact' && (
              <ContactView onNavigate={handleNavigateTab} />
            )}
          </>
        )}
      </main>

      {/* Enterprise Aficionado Footer */}
      <Footer
        onOpenLegal={handleOpenLegal}
        onOpenCookieSettings={handleOpenCookieSettings}
        onNavigateTab={handleNavigateTab}
        onSelectProduct={handleSelectProduct}
        onSelectGuide={handleSelectGuide}
        onSelectBlueprint={handleOpenBlueprint}
      />

      {/* Interactive Compliance & Legal Documents Modal */}
      <LegalModal
        activeDoc={legalDoc}
        onClose={handleCloseLegal}
        onSelectDoc={handleOpenLegal}
        onOpenCookieSettings={handleOpenCookieSettings}
      />

      {/* Global Interactive Cookie Consent Banner */}
      <CookieConsentBanner
        onOpenCookiePolicy={() => handleOpenLegal('cookie-policy')}
        onOpenPrivacyPolicy={() => handleOpenLegal('privacy-policy')}
      />
    </div>
  );
}

export default App;
