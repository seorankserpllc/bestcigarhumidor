import React, { useState } from 'react';
import type { CigarGuide, AmazonProduct } from '../../types/humidor';
import { getAmazonUrl } from '../../utils/amazonLinks';
import { ProductImage } from '../Common/ProductImage';
import { GuideFeatureArt } from './GuideFeatureArt';
import { GuideMarkdown } from './GuideMarkdown';
import { 
  ArrowLeft, Clock, Share2, CheckCircle2, 
  AlertTriangle, Sparkles, Wrench, ExternalLink, 
  BookOpen, Star, ChevronRight
} from 'lucide-react';

interface GuideReaderProps {
  guide: CigarGuide;
  allProducts: AmazonProduct[];
  affiliateTag: string;
  onBack: () => void;
  onSelectProduct: (productId: string) => void;
  onSelectBlueprint: (blueprintId: string) => void;
}

export const GuideReader: React.FC<GuideReaderProps> = ({
  guide,
  allProducts,
  affiliateTag,
  onBack,
  onSelectProduct,
  onSelectBlueprint
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}#/guide/${guide.slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const featuredProducts = allProducts.filter(p => guide.featuredProductIds.includes(p.id));

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      {/* Top Breadcrumb & Share */}
      <div className="flex items-center justify-between pb-4 border-b border-amber-950/80">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-xs font-semibold text-stone-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-900 border border-stone-800 text-stone-300 hover:text-white transition-colors"
          title="Share Guide Link"
        >
          <Share2 className="w-3.5 h-3.5 text-amber-400" />
          <span>{copied ? 'Link Copied!' : 'Share Guide'}</span>
        </button>
      </div>

      {/* Guide Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            {guide.categoryLabel}
          </span>
          <span className="text-xs text-stone-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {guide.readTimeMinutes} min read
          </span>
          <span className="text-xs text-stone-500">Reviewed {guide.reviewedDate}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-100 leading-tight">
          {guide.title}
        </h1>

        <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-serif italic text-amber-200/90">
          "{guide.subtitle}"
        </p>

        {/* Author Bio Card */}
        <div className="flex items-center space-x-3 p-4 rounded-xl bg-[#17100d] border border-amber-950">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center font-bold text-stone-950 text-sm">
            {guide.author.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-xs text-stone-200">{guide.author}</div>
            <div className="text-[11px] text-amber-400/80">{guide.authorRole} • Published {guide.publishedDate}</div>
          </div>
        </div>
      </header>

      {/* Branded editorial artwork */}
      <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden border border-amber-900/40 relative shadow-2xl">
        <GuideFeatureArt variant={guide.heroVisual} category={guide.categoryLabel} />
      </div>

      {/* Table of Contents Quick Nav */}
      <div className="p-5 rounded-xl bg-[#140d0a] border border-stone-800 space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          In This Technical Guide:
        </span>
        <ul className="space-y-1.5 text-xs text-stone-300">
          {guide.sections.map((sec) => (
            <li key={sec.id}>
              <a 
                href={`#${sec.id}`}
                className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
              >
                <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{sec.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Guide Content Sections */}
      <div className="space-y-10 text-stone-200 leading-relaxed font-sans text-sm sm:text-base">
        {guide.sections.map((section) => (
          <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
            <h2 className="font-serif text-2xl font-bold text-amber-100 border-b border-amber-950/80 pb-2">
              {section.title}
            </h2>

            <GuideMarkdown>{section.contentMarkdown}</GuideMarkdown>

            {/* Stylized Callout */}
            {section.callout && (
              <div className={`p-4 rounded-xl border flex items-start space-x-3 text-xs leading-relaxed ${
                section.callout.type === 'alert'
                  ? 'bg-rose-950/30 border-rose-800/60 text-rose-200'
                  : section.callout.type === 'warning'
                  ? 'bg-amber-950/40 border-amber-800/60 text-amber-200'
                  : section.callout.type === 'science'
                  ? 'bg-sky-950/30 border-sky-800/60 text-sky-200'
                  : 'bg-emerald-950/30 border-emerald-800/60 text-emerald-200'
              }`}>
                {section.callout.type === 'alert' ? (
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                ) : section.callout.type === 'warning' ? (
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                ) : section.callout.type === 'science' ? (
                  <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <strong className="block mb-0.5 text-stone-100 font-serif">
                    {section.callout.title}
                  </strong>
                  <span>{section.callout.text}</span>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Sources & review note */}
      <aside className="p-5 sm:p-6 rounded-2xl bg-[#140d0a] border border-stone-800 space-y-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Sources &amp; review standard</span>
          <p className="text-xs text-stone-400 mt-1 leading-relaxed">
            Reviewed {guide.reviewedDate}. Recommendations distinguish measured guidance from rules of thumb. Product performance varies by room conditions, seal quality, and calibration.
          </p>
        </div>
        <ul className="grid gap-2 text-xs">
          {guide.sources.map(source => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-amber-300 transition-colors underline decoration-stone-700 underline-offset-4">
                {source.label} <span className="text-stone-500">— {source.publisher}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* FEATURED PRODUCTS SPOTLIGHT (Direct links to product review pages) */}
      {featuredProducts.length > 0 && (
        <div className="p-6 sm:p-8 rounded-2xl bg-[#17100d] border border-amber-900/50 shadow-xl space-y-6 pt-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Recommended Equipment
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-100">
              Humidors & Gear Featured in This Guide
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Read our dedicated lab review or check current Amazon pricing:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-[#120b08] border border-stone-800 rounded-xl p-4 flex flex-col justify-between hover:border-amber-700/60 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex space-x-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-stone-800">
                      <ProductImage 
                        src={prod.imageUrl} 
                        alt={prod.name} 
                        category={prod.category}
                        subCategory={prod.subCategory}
                        className="w-full h-full"
                        imageClassName="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-amber-500 uppercase block">
                        {prod.brand}
                      </span>
                      <h4 className="font-serif text-xs font-bold text-stone-200 line-clamp-2">
                        {prod.name}
                      </h4>
                      <div className="flex items-center space-x-2 text-[11px] text-stone-400 mt-1">
                        <span className="text-amber-400 flex items-center">
                          <Star className="w-3 h-3 fill-amber-400 mr-0.5" />
                          {prod.rating}
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-amber-950/60 border border-amber-800/40 text-[10px] font-bold text-amber-300">
                          {prod.price <= 40 ? '$' : prod.price <= 120 ? '$$' : prod.price <= 300 ? '$$$' : '$$$$'} • Check Price
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-400 line-clamp-2">
                    {prod.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 mt-3 border-t border-stone-800/80">
                  <button
                    onClick={() => onSelectProduct(prod.slug || prod.id)}
                    className="py-1.5 px-2 rounded-lg text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-900/40 text-center transition-colors"
                  >
                    Read Full Review
                  </button>
                  <a
                    href={getAmazonUrl(prod.amazonSearchQuery, prod.asin, affiliateTag)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-2 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-500 text-stone-950 flex items-center justify-center space-x-1 transition-colors"
                  >
                    <span>Check Price</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* RELATED BLUEPRINTS */}
      {guide.relatedBlueprintIds && guide.relatedBlueprintIds.length > 0 && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#17100d] via-[#1f140e] to-[#17100d] border border-amber-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              DIY Workshop Blueprint
            </span>
            <h4 className="font-serif text-lg font-bold text-amber-100">
              Prefer to Build Your Own Setup?
            </h4>
            <p className="text-xs text-stone-300">
              Check out our complete bill of materials and step-by-step schematics in the DIY Studio.
            </p>
          </div>
          <button
            onClick={() => onSelectBlueprint(guide.relatedBlueprintIds![0])}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-stone-900 hover:bg-amber-600 text-amber-300 hover:text-stone-950 border border-amber-700/50 shrink-0 transition-colors"
          >
            Open Assembly Blueprint
          </button>
        </div>
      )}

      {/* Back button footer */}
      <div className="pt-6 border-t border-amber-950/80 flex justify-between items-center">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </button>
      </div>
    </div>
  );
};
