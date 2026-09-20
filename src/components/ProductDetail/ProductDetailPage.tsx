import React, { useState, useEffect } from 'react';
import type { AmazonProduct, CigarGuide } from '../../types/humidor';
import { getAmazonUrl } from '../../utils/amazonLinks';
import { getEditorialRating } from '../../utils/productRatings';
import { ProductImage } from '../Common/ProductImage';
import { 
  ShoppingBag, ExternalLink, ArrowLeft, Share2, Check, X,
  ShieldCheck, Zap, Wrench, AlertTriangle, HelpCircle, BookOpen, 
  CheckCircle2, Box, Droplets, Thermometer, Sparkles
} from 'lucide-react';

interface ProductDetailPageProps {
  product: AmazonProduct;
  allGuides: CigarGuide[];
  onBack: () => void;
  onOpenGuide: (guideSlug: string) => void;
  onOpenBlueprint: (blueprintId: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  allGuides,
  onBack,
  onOpenGuide,
  onOpenBlueprint
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedVitola, setSelectedVitola] = useState<'robustos' | 'coronas' | 'torosChurchills' | 'gordos'>('robustos');
  const editorialRating = getEditorialRating(product);

  // Dynamic document title for programmatic SEO
  useEffect(() => {
    document.title = `${product.name} Editorial Review | Best Cigar Humidor`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}#/product/${product.slug || product.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const relatedGuides = allGuides.filter(g => 
    product.relatedGuideSlugs?.includes(g.slug) || g.featuredProductIds.includes(product.id)
  );

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-10">
      {/* Schema.org Product, Review, and FAQPage JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": product.name,
                "description": product.description,
                "image": product.imageUrl,
                "brand": {
                  "@type": "Brand",
                  "name": product.brand
                },
                "review": editorialRating !== null ? {
                  "@type": "Review",
                  "author": {
                    "@type": "Organization",
                    "name": "Best Cigar Humidor"
                  },
                  "reviewBody": product.description,
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": editorialRating.toFixed(1),
                    "bestRating": "10",
                    "worstRating": "1"
                  }
                } : undefined,
              },
              {
                "@type": "FAQPage",
                "mainEntity": (product.faqs || []).map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />

      {/* Top Breadcrumbs & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-amber-950/80">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-xs font-semibold text-stone-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog / Results</span>
        </button>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleShare}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-900 border border-stone-800 text-stone-300 hover:text-white transition-colors"
            title="Copy direct shareable link for this product"
          >
            <Share2 className="w-3.5 h-3.5 text-amber-400" />
            <span>{copied ? 'Link Copied!' : 'Share Review'}</span>
          </button>

          <a
            href={getAmazonUrl(product.amazonSearchQuery, product.asin)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-500 text-stone-950 shadow-md transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Check Price on Amazon</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* PRIMARY SEMANTIC H1 HEADER (Strictly First Heading in DOM Order) */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-800/50">
            {product.brand}
          </span>
          <span className="text-stone-600">•</span>
          <span className="text-stone-300 font-semibold uppercase text-[10px] tracking-wide">
            {product.category.replace('_', ' ')}
          </span>
          <span className="text-stone-600">•</span>
          <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-wider bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
            Listing checked Sep 2026
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-100 tracking-tight leading-tight">
          {product.name}: Editorial Review & Buying Guide
        </h1>
        <p className="text-sm text-stone-300 max-w-4xl leading-relaxed">
          An independent comparison of the listed design, likely capacity, setup needs, limitations, and the type of cigar owner this product fits best.
        </p>
      </div>

      {/* Hero Section: Product Media Column & Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Product Media Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#f3eee5] border border-amber-900/40 relative shadow-2xl group flex items-center justify-center p-4">
            <ProductImage 
              src={product.imageUrl} 
              alt={product.name}
              category={product.category}
              subCategory={product.subCategory}
              className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/85 backdrop-blur-sm border border-stone-700 text-amber-400 text-xs font-bold uppercase tracking-wider">
              {product.brand}
            </div>
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-black/90 backdrop-blur-md border border-amber-800/60 text-amber-300 text-xs font-bold shadow-xl">
              View current listing on Amazon
            </div>
          </div>

          {/* Quick Specifications (Styled with semantic SPAN, not H4) */}
          <div className="p-5 rounded-xl bg-[#160f0c] border border-stone-800/80 space-y-3 text-xs">
            <span className="font-serif font-bold text-amber-100 uppercase tracking-wider text-[11px] block">
              Key Specifications
            </span>
            <div className="grid grid-cols-2 gap-2 text-stone-300">
              <div>
                <span className="text-stone-500 block text-[10px] uppercase">Capacity</span>
                <span className="font-semibold text-stone-100">{product.capacitySticks > 0 ? `${product.capacitySticks} Cigars` : 'Universal'}</span>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px] uppercase">Overall Editorial Rating</span>
                <span className="font-semibold text-emerald-400">
                  {editorialRating !== null ? `${editorialRating.toFixed(1)} / 10` : 'Not numerically rated'}
                </span>
              </div>
              {product.dimensions && (
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase">Dimensions</span>
                  <span className="font-semibold text-stone-200">{product.dimensions}</span>
                </div>
              )}
              {product.material && (
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase">Material</span>
                  <span className="font-semibold text-stone-200">{product.material}</span>
                </div>
              )}
              {product.priceTierFormatted && (
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase">Price Tier</span>
                  <span className="font-semibold text-amber-300">{product.priceTierFormatted}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Details & Direct Buy Box */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-stone-400 font-medium">Selection reviewed September 14, 2026</span>
              <span className="text-stone-500">•</span>
              <span className="text-amber-400 font-semibold uppercase text-[10px] bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                {product.category.replace('_', ' ')}
              </span>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed pt-1">
              {product.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-stone-300 p-2.5 rounded-lg bg-[#18110e] border border-stone-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>

          {/* Electric Features Badge */}
          {product.electricFeatures && (
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/50 flex items-start space-x-3 text-xs text-amber-200">
              <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-100 block mb-0.5 font-serif">
                  Active Electric Climate System: {product.electricFeatures.heating ? 'Heating & Cooling' : 'Cooling Only'}
                </strong>
                <span>
                  Operates between {product.electricFeatures.tempRange}. Protects cigars from summer beetle hatching and winter freezing without noisy compressor vibrations.
                </span>
              </div>
            </div>
          )}

          {/* Direct Buy Box with Compliant Pricing */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#201510] via-[#1a110d] to-[#201510] border border-amber-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block">
                Current Amazon Listing
              </span>
              <div className="flex items-baseline space-x-2">
                <span className="font-serif text-2xl font-bold text-amber-200">
                  {product.priceTierFormatted || 'Check Live Pricing'}
                </span>
                <span className="text-xs text-stone-400 font-semibold">Price and availability are shown on Amazon</span>
              </div>
            </div>

            <a
              href={getAmazonUrl(product.amazonSearchQuery, product.asin)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 shadow-lg shadow-amber-950/60 flex items-center justify-center space-x-2 transition-transform transform hover:scale-[1.02]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Check Price on Amazon</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* EDITORIAL PRODUCT FIT SCORECARD (H2) */}
      {product.scorecard && (
        <section className="p-6 sm:p-8 rounded-2xl bg-[#17100d] border border-amber-900/50 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-950 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Editorial Comparison
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-100">
                Product Fit Scorecard
              </h2>
            </div>
            <div className="text-xs text-stone-400">
              Comparative scores based on design, listed specifications and intended use
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: 'Seal Integrity', score: product.scorecard.sealIntegrity, icon: ShieldCheck, desc: 'Resistance to humidity leakage' },
              { label: 'Thermal Stability', score: product.scorecard.thermalStability, icon: Thermometer, desc: 'Buffer against ambient shifts' },
              { label: 'Humidity Retention', score: product.scorecard.humidityRetention, icon: Droplets, desc: 'Stability with Boveda packs' },
              { label: 'Craftsmanship', score: product.scorecard.craftsmanship, icon: Sparkles, desc: 'Cedar joinery & finish' },
              { label: 'Value Score', score: product.scorecard.valueScore, icon: Box, desc: 'Capacity per dollar ratio' },
            ].map((metric, i) => {
              const Icon = metric.icon;
              return (
                <div key={i} className="p-4 rounded-xl bg-[#120b08] border border-stone-800 space-y-2 text-center flex flex-col justify-between">
                  <div className="flex items-center justify-center space-x-1.5 text-stone-400 text-xs font-medium">
                    <Icon className="w-3.5 h-3.5 text-amber-400" />
                    <span>{metric.label}</span>
                  </div>
                  <div className="font-serif text-3xl font-bold gold-gradient-text my-1">
                    {metric.score.toFixed(1)} <span className="text-xs font-sans text-stone-500">/ 10</span>
                  </div>
                  <p className="text-[10px] text-stone-400 leading-tight">
                    {metric.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* REAL-WORLD CAPACITY ESTIMATOR (H2) */}
      {product.realWorldCapacity && (
        <section className="p-6 sm:p-8 rounded-2xl bg-[#17100d] border border-amber-900/50 shadow-xl space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Capacity Reality Check
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-100">
              Real-World Vitola Storage Capacity
            </h2>
            <p className="text-xs text-stone-400 mt-1">
              Capacity varies by cigar size and shelf layout. Use these figures only as planning estimates:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'robustos', label: 'Robustos (50 RG)', count: product.realWorldCapacity.robustos },
              { id: 'torosChurchills', label: 'Toros & Churchills', count: product.realWorldCapacity.torosChurchills },
              { id: 'coronas', label: 'Coronas (42 RG)', count: product.realWorldCapacity.coronas },
              { id: 'gordos', label: 'Gordos (60 RG)', count: product.realWorldCapacity.gordos },
            ].map((vitola) => (
              <button
                key={vitola.id}
                onClick={() => setSelectedVitola(vitola.id as any)}
                className={`p-4 rounded-xl text-center border transition-all ${
                  selectedVitola === vitola.id
                    ? 'bg-amber-600/20 border-amber-500 text-amber-100 shadow-md'
                    : 'bg-[#120b08] border-stone-800 text-stone-400 hover:border-amber-900'
                }`}
              >
                <span className="text-[10px] uppercase block tracking-wider font-semibold">
                  {vitola.label}
                </span>
                <span className="font-serif text-3xl font-bold text-amber-300 block my-1">
                  ~{vitola.count}
                </span>
                <span className="text-[10px] text-stone-500">Real Sticks</span>
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#120b08] border border-stone-800 text-xs text-stone-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <strong className="text-amber-200 block">Full Factory Box Capacity:</strong>
              <span>{product.realWorldCapacity.factoryBoxes > 0 ? `Can fit up to ${product.realWorldCapacity.factoryBoxes} full 20-25ct wooden boxes.` : 'Cannot accommodate full factory boxes; designed for loose singles and 5-packs.'}</span>
            </div>
            <span className="text-[11px] text-stone-400 italic">
              {product.realWorldCapacity.notes}
            </span>
          </div>
        </section>
      )}


      {/* UNIT-SPECIFIC SEASONING & SETUP GUIDE (H2) */}
      {product.unitSpecificSeasoning && (
        <section className="p-6 sm:p-8 rounded-2xl bg-[#17100d] border border-amber-900/50 shadow-xl space-y-4">
          <h2 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-amber-400" />
            Setup & Seasoning Protocol for This Model
          </h2>
          <p className="text-xs text-stone-400">
            Use this setup sequence as a starting point, then confirm the manufacturer’s current instructions:
          </p>
          <div className="space-y-3 pt-2">
            {product.unitSpecificSeasoning.map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#120b08] border border-stone-800 flex items-start space-x-3 text-xs text-stone-300">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* WHO SHOULD BUY VS WHO SHOULD AVOID */}
      {(product.whoShouldBuy || product.whoShouldAvoid) && (
        <section className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-amber-100">
            Aficionado Buyer Recommendation & Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.whoShouldBuy && (
              <div className="p-6 rounded-2xl bg-[#17100d] border border-emerald-950/80 shadow-xl space-y-3">
                <h3 className="font-serif text-base font-bold text-emerald-400 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  Who Should Buy This
                </h3>
                <ul className="space-y-2 text-xs text-stone-300">
                  {product.whoShouldBuy.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.whoShouldAvoid && (
              <div className="p-6 rounded-2xl bg-[#17100d] border border-rose-950/80 shadow-xl space-y-3">
                <h3 className="font-serif text-base font-bold text-rose-400 flex items-center gap-2">
                  <X className="w-5 h-5 text-rose-400" />
                  Who Should Avoid This
                </h3>
                <ul className="space-y-2 text-xs text-stone-300">
                  {product.whoShouldAvoid.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAILURE MODES & MAINTENANCE WARNING (H2) */}
      {product.failureModesToWatch && (
        <section className="p-6 rounded-2xl bg-amber-950/30 border border-amber-800/60 shadow-xl space-y-3">
          <div className="flex items-center space-x-2 text-amber-400">
            <AlertTriangle className="w-5 h-5" />
            <h2 className="font-serif text-lg font-bold text-amber-100">
              Failure Modes & Long-Term Seal Maintenance
            </h2>
          </div>
          <div className="space-y-2 text-xs text-amber-200">
            {product.failureModesToWatch.map((fail, i) => (
              <p key={i} className="leading-relaxed">
                • {fail}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* FAQS & BUYING DECISIONS (H2 with H3 Questions for Google Rich Snippets) */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="p-6 sm:p-8 rounded-2xl bg-[#17100d] border border-amber-900/50 shadow-xl space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              People Also Asked & Buying Guidance
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              Frequently Asked Questions & Buying Advice
            </h2>
            <p className="text-xs text-stone-400">
              Key considerations, comparisons, and operational tips compiled by our editorial team:
            </p>
          </div>

          <div className="space-y-4">
            {product.faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#120b08] border border-stone-800 space-y-2 text-xs">
                <h3 className="font-serif font-bold text-stone-100 text-sm flex items-center gap-2">
                  <span className="text-amber-500 font-sans font-bold text-xs">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-stone-300 leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* BUILD VS BUY ALTERNATIVE BANNER (H2) */}
      {product.diyAlternativeBlueprintId && (
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1b120e] via-[#241711] to-[#1b120e] border border-amber-700/60 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              Build vs. Buy Alternative
            </span>
            <h2 className="font-serif text-2xl font-bold text-amber-100">
              Want to Build an Equivalent Setup for 60% Less?
            </h2>
            <p className="text-xs text-stone-300 max-w-xl leading-relaxed">
              If you enjoy hands-on projects, you can assemble a custom humidor with an airtight rubber gasket that outperforms retail wooden boxes in humidity retention.
            </p>
          </div>
          <button
            onClick={() => onOpenBlueprint(product.diyAlternativeBlueprintId!)}
            className="px-6 py-3 rounded-xl text-xs font-bold bg-stone-900 hover:bg-amber-600 text-amber-300 hover:text-stone-950 border border-amber-700/50 shrink-0 transition-colors shadow-lg"
          >
            Open DIY Assembly Blueprint
          </button>
        </section>
      )}

      {/* RELATED EDITORIAL GUIDES (H2) */}
      {relatedGuides.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-amber-950">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            Related In-Depth Technical Guides & Science
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedGuides.map((guide) => (
              <div
                key={guide.id}
                onClick={() => onOpenGuide(guide.slug)}
                className="p-5 rounded-xl bg-[#17100d] border border-stone-800 hover:border-amber-700/60 cursor-pointer transition-all group flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 block mb-1">
                    {guide.categoryLabel} • {guide.readTimeMinutes} min read
                  </span>
                  <h3 className="font-serif text-base font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mt-1">
                    {guide.excerpt}
                  </p>
                </div>
                <span className="text-xs font-semibold text-amber-400 group-hover:underline flex items-center gap-1">
                  <span>Read Full Technical Guide</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
