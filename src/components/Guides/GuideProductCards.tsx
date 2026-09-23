import React from 'react';
import { ExternalLink, ShoppingCart, Star } from 'lucide-react';
import type { AmazonProduct, CigarGuide } from '../../types/humidor';
import { getAmazonUrl } from '../../utils/amazonLinks';
import { getEditorialRating } from '../../utils/productRatings';
import { ProductImage } from '../Common/ProductImage';

interface GuideProductCardProps {
  product: AmazonProduct;
  guide: CigarGuide;
  onSelectProduct: (productId: string) => void;
}

export const GuideProductCard: React.FC<GuideProductCardProps> = ({ product, guide, onSelectProduct }) => {
  const editorialRating = getEditorialRating(product);
  const comparison = guide.comparisonRows?.find(row => row.productId === product.id);

  return (
    <article className="group overflow-hidden rounded-xl border border-stone-800 bg-[#120b08] shadow-lg transition-colors hover:border-amber-700/70">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-stone-800 bg-[#f3eee5] p-4">
        <ProductImage
          src={product.imageUrl}
          alt={product.name}
          category={product.category}
          subCategory={product.subCategory}
          className="h-full w-full"
          imageClassName="h-full w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {editorialRating !== null && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-amber-600/50 bg-stone-950/95 px-2.5 py-1 text-[11px] font-bold text-amber-200 shadow-lg">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span>{editorialRating.toFixed(1)}/10</span>
            <span className="sr-only"> editorial rating</span>
          </div>
        )}
      </div>

      <div className="space-y-3 p-4">
        <div>
          <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-500">{product.brand}</span>
          <h3 className="font-serif text-base font-bold leading-snug text-stone-100">{product.name}</h3>
        </div>
        <p className="text-xs leading-5 text-stone-400">
          {comparison?.fit || product.bestFor || product.description}
        </p>
        {comparison && (
          <p className="rounded-lg border border-stone-800 bg-stone-950/50 px-3 py-2 text-[11px] leading-4 text-stone-400">
            <strong className="text-stone-200">Main tradeoff:</strong> {comparison.tradeoff}
          </p>
        )}
      </div>

      <div className="grid gap-2 border-t border-stone-800/80 p-4 sm:grid-cols-[1fr_auto]">
        <a
          href={getAmazonUrl(product.amazonSearchQuery, product.asin)}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-extrabold text-stone-950 transition-colors hover:bg-amber-500"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Check Price on Amazon</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <button
          onClick={() => onSelectProduct(product.slug || product.id)}
          className="min-h-11 rounded-lg border border-amber-900/50 bg-stone-900 px-4 py-2.5 text-xs font-semibold text-amber-300 transition-colors hover:bg-stone-800"
        >
          Read Full Review
        </button>
      </div>
    </article>
  );
};

export const InlineGuideProductOffer: React.FC<GuideProductCardProps> = ({ product, guide, onSelectProduct }) => {
  const editorialRating = getEditorialRating(product);
  const comparison = guide.comparisonRows?.find(row => row.productId === product.id);

  return (
    <aside className="my-5 overflow-hidden rounded-xl border border-amber-800/60 bg-[#17100d] shadow-lg" aria-label={`Buy ${product.name}`}>
      <div className="grid grid-cols-[104px_1fr] gap-3 p-3 sm:grid-cols-[148px_1fr] sm:gap-5 sm:p-4">
        <div className="aspect-square overflow-hidden rounded-lg border border-stone-800 bg-[#f3eee5] p-2 sm:p-3">
          <ProductImage
            src={product.imageUrl}
            alt={product.name}
            category={product.category}
            subCategory={product.subCategory}
            className="h-full w-full"
            imageClassName="h-full w-full object-contain mix-blend-multiply"
          />
        </div>
        <div className="min-w-0 self-center">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">Featured product</span>
            {editorialRating !== null && (
              <span className="flex items-center gap-1 rounded-full border border-amber-800/50 bg-amber-950/50 px-2 py-0.5 text-[10px] font-bold text-amber-200">
                <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                {editorialRating.toFixed(1)}/10
              </span>
            )}
          </div>
          <h3 className="font-serif text-sm font-bold leading-snug text-stone-100 sm:text-lg">{product.name}</h3>
          <p className="mt-1 hidden text-xs leading-5 text-stone-400 sm:block">{comparison?.fit || product.bestFor || product.description}</p>
        </div>
      </div>
      <div className="grid gap-2 border-t border-stone-800 px-3 py-3 sm:grid-cols-[1fr_auto] sm:px-4">
        <a
          href={getAmazonUrl(product.amazonSearchQuery, product.asin)}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-extrabold text-stone-950 transition-colors hover:bg-amber-500"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Check Price on Amazon</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <button
          onClick={() => onSelectProduct(product.slug || product.id)}
          className="min-h-11 rounded-lg border border-amber-900/50 bg-stone-900 px-4 py-2.5 text-xs font-semibold text-amber-300 transition-colors hover:bg-stone-800"
        >
          Read Full Review
        </button>
      </div>
    </aside>
  );
};
