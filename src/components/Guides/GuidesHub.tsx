import React, { useEffect, useState, useMemo } from 'react';
import type { CigarGuide } from '../../types/humidor';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import { GuideFeatureArt } from './GuideFeatureArt';

interface GuidesHubProps {
  guides: CigarGuide[];
  onSelectGuide: (slug: string) => void;
}

export const GuidesHub: React.FC<GuidesHubProps> = ({ guides, onSelectGuide }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const title = 'Cigar Humidor Guides | Best Cigar Humidor';
    const description = 'Source-backed guides for choosing, setting up, and maintaining cigar humidors, including electric, desktop, travel, and DIY options.';
    const canonicalUrl = `${window.location.origin}/guides`;

    document.title = title;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector<HTMLMetaElement>('meta[property="og:type"]')?.setAttribute('content', 'website');

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, []);

  const categories = [
    { id: 'all', label: 'All Guides' },
    { id: 'selection', label: 'Buying Guides & Electric' },
    { id: 'maintenance', label: 'Woodcraft & Care' },
    { id: 'science', label: 'Climate & Science' },
    { id: 'diy', label: 'DIY & Value' },
    { id: 'travel', label: 'Travel & Mobility' },
  ];

  const filteredGuides = useMemo(() => {
    if (selectedCategory === 'all') return guides;
    return guides.filter(g => g.category === selectedCategory);
  }, [guides, selectedCategory]);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          Aficionado Knowledge Base
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-amber-100">
          Cigar Storage Guides, Engineering & Science
        </h1>
        <p className="text-sm text-stone-300 leading-relaxed">
          Practical, source-backed guidance for choosing, setting up, and maintaining cigar storage. Every article is reviewed for clear claims and reproducible advice.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat.id
                ? 'bg-amber-600 text-stone-950 shadow-lg'
                : 'bg-[#18110e] text-stone-400 hover:text-white border border-stone-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map((guide) => (
          <article
            key={guide.id}
            className="bg-[#17100d] border border-amber-900/40 rounded-2xl overflow-hidden shadow-xl hover:border-amber-600/60 transition-all group"
          >
            <a
              href={`/guides/${guide.slug}`}
              onClick={(event) => {
                if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                onSelectGuide(guide.slug);
              }}
              className="flex h-full flex-col justify-between"
            >
            <div>
              {/* Branded editorial artwork */}
              <div className="aspect-video w-full relative overflow-hidden">
                <GuideFeatureArt variant={guide.heroVisual} category={guide.categoryLabel} compact />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-stone-700 z-20">
                  {guide.categoryLabel}
                </span>
              </div>

              {/* Text Info */}
              <div className="p-5 space-y-3">
                <div className="flex items-center space-x-3 text-[11px] text-stone-400">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{guide.readTimeMinutes} min read</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-stone-500" />
                    <span>{guide.author}</span>
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors line-clamp-2">
                  {guide.title}
                </h3>

                <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed">
                  {guide.excerpt}
                </p>
              </div>
            </div>

            {/* Read CTA */}
            <div className="p-5 pt-0 border-t border-stone-800/80 mt-2">
              <span className="text-xs font-bold text-amber-400 group-hover:text-amber-300 flex items-center justify-between pt-3">
                <span>Read Full In-Depth Guide</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};
