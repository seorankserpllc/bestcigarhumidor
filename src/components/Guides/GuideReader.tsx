import React, { useEffect, useState } from 'react';
import type { CigarGuide, AmazonProduct } from '../../types/humidor';
import { getAmazonUrl } from '../../utils/amazonLinks';
import { GuideFeatureArt } from './GuideFeatureArt';
import { GuideMarkdown } from './GuideMarkdown';
import { GuideProductCard, InlineGuideProductOffer } from './GuideProductCards';
import { 
  ArrowLeft, Clock, Share2, CheckCircle2, 
  AlertTriangle, Sparkles, Wrench, ExternalLink, 
  BookOpen, ChevronRight
} from 'lucide-react';

interface GuideReaderProps {
  guide: CigarGuide;
  allProducts: AmazonProduct[];
  onBack: () => void;
  onSelectProduct: (productId: string) => void;
  onSelectBlueprint: (blueprintId: string) => void;
}

export const GuideReader: React.FC<GuideReaderProps> = ({
  guide,
  allProducts,
  onBack,
  onSelectProduct,
  onSelectBlueprint
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const canonicalUrl = `${window.location.origin}/guides/${guide.slug}`;
    const title = `${guide.title} | Best Cigar Humidor`;
    document.title = title;

    const setMeta = (selector: string, attribute: string, value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        const [key, name] = attribute === 'property'
          ? ['property', selector.match(/property="([^"]+)"/)?.[1] || '']
          : ['name', selector.match(/name="([^"]+)"/)?.[1] || ''];
        element.setAttribute(key, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', 'name', guide.subtitle || guide.excerpt);
    setMeta('meta[property="og:title"]', 'property', title);
    setMeta('meta[property="og:description"]', 'property', guide.subtitle || guide.excerpt);
    setMeta('meta[property="og:url"]', 'property', canonicalUrl);
    setMeta('meta[property="og:type"]', 'property', 'article');

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [guide]);

  const handleShare = () => {
    const url = `${window.location.origin}/guides/${guide.slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const featuredProducts = guide.featuredProductIds.map(id => allProducts.find(p => p.id === id)).filter((p): p is AmazonProduct => Boolean(p));

  return (
    <div className="w-full min-w-0 max-w-4xl mx-auto py-8 px-4 space-y-8">
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

      {/* Products and purchase paths belong near the decision, not at the end of the article. */}
      {featuredProducts.length > 0 && (
        <section
          aria-labelledby="guide-quick-picks-title"
          className="space-y-5 rounded-2xl border border-amber-800/60 bg-[#17100d] p-5 shadow-xl sm:p-7"
        >
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Quick Picks</span>
            <h2 id="guide-quick-picks-title" className="font-serif text-2xl font-bold text-amber-100">
              See the Products and Check Current Prices
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-stone-300">
              These are the exact products discussed in this guide. Compare the recommendation, open our full review, or go directly to the Amazon product page.
            </p>
            <p className="text-[11px] leading-5 text-stone-500">
              As an Amazon Associate, we may earn from qualifying purchases. Amazon prices and availability can change.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featuredProducts.map(product => (
              <GuideProductCard
                key={product.id}
                product={product}
                guide={guide}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        </section>
      )}

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
        {guide.sections.map((section) => {
          const sectionContent = section.contentMarkdown.toLowerCase();
          const sectionProducts = featuredProducts.filter(product => {
            const slug = product.slug?.toLowerCase();
            return Boolean(slug && sectionContent.includes(slug));
          });

          return (
            <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
            <h2 className="font-serif text-2xl font-bold text-amber-100 border-b border-amber-950/80 pb-2">
              {section.title}
            </h2>

            <GuideMarkdown>{section.contentMarkdown}</GuideMarkdown>

            {sectionProducts.map(product => (
              <InlineGuideProductOffer
                key={product.id}
                product={product}
                guide={guide}
                onSelectProduct={onSelectProduct}
              />
            ))}

            {section.id === 'comparison' && guide.comparisonRows && (
              <>
              <p className="text-xs text-stone-400 sm:hidden">Swipe sideways to compare key specs and tradeoffs.</p>
              <div className="overflow-x-auto rounded-xl border border-amber-900/50">
                <table className="w-full min-w-[620px] text-left text-xs sm:text-sm">
                  <caption className="sr-only">{guide.title} product comparison</caption>
                  <thead className="bg-amber-950/50 text-amber-200">
                    <tr><th scope="col" className="p-3">Product</th><th scope="col" className="p-3">Best fit</th><th scope="col" className="p-3">Capacity / operating basis</th><th scope="col" className="p-3">Main tradeoff</th></tr>
                  </thead>
                  <tbody>
                    {guide.comparisonRows.map(row => {
                      const product = allProducts.find(p => p.id === row.productId);
                      if (!product) return null;
                      return (
                        <tr key={row.productId} className="border-t border-stone-800 align-top">
                          <th scope="row" className="p-3 font-semibold text-amber-100">
                            <button onClick={() => onSelectProduct(product.slug || product.id)} className="text-left hover:text-amber-300 hover:underline">
                              {product.name}
                            </button>
                            <a
                              href={getAmazonUrl(product.amazonSearchQuery, product.asin)}
                              target="_blank"
                              rel="noopener noreferrer sponsored"
                              className="mt-2 flex w-fit items-center gap-1 rounded-md bg-amber-600 px-2.5 py-1.5 text-[11px] font-bold text-stone-950 hover:bg-amber-500"
                            >
                              Check price on Amazon
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </th>
                          <td className="p-3">{row.fit}</td>
                          <td className="p-3">{row.capacity}</td>
                          <td className="p-3">{row.tradeoff}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              </>
            )}

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
          );
        })}
      </div>

      {guide.faqs && guide.faqs.length > 0 && (
        <section className="space-y-4" aria-labelledby="guide-faq-title">
          <h2 id="guide-faq-title" className="font-serif text-2xl font-bold text-amber-100">Frequently asked questions</h2>
          <div className="grid gap-3">
            {guide.faqs.map(faq => (
              <div key={faq.question} className="rounded-xl border border-stone-800 bg-[#140d0a] p-4">
                <h3 className="font-semibold text-amber-200">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sources & review note */}
      <aside className="p-5 sm:p-6 rounded-2xl bg-[#140d0a] border border-stone-800 space-y-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Sources &amp; review standard</span>
          <p className="text-xs text-stone-400 mt-1 leading-relaxed">
            Reviewed {guide.reviewedDate}. Evidence priority is peer-reviewed research and government or university guidance. Manufacturer sources appear only for that maker’s product specifications or instructions—not as independent proof.
          </p>
        </div>
        <ul className="grid gap-2 text-xs">
          {guide.sources.map(source => (
            <li key={source.url} className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2">
              <span className={`w-fit shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                source.sourceType === 'Manufacturer instructions'
                  ? 'border-amber-800/60 bg-amber-950/30 text-amber-400'
                  : 'border-sky-900/60 bg-sky-950/30 text-sky-400'
              }`}>
                {source.sourceType}
              </span>
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-amber-300 transition-colors underline decoration-stone-700 underline-offset-4">
                {source.label} <span className="text-stone-500">— {source.publisher}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>

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
