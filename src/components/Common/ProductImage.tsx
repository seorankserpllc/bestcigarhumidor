import React, { useState } from 'react';

interface ProductImageProps {
  src?: string;
  alt: string;
  category: string;
  subCategory?: string;
  className?: string;
  imageClassName?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  category,
  subCategory,
  className = 'w-full h-full object-cover',
  imageClassName,
}) => {
  const [hasError, setHasError] = useState(false);
  const humidityLabel = alt.match(/\b(?:65|69|72|75|84)%/)?.[0] ?? 'RH';

  // Render branded representative artwork unless a compliant, current image source is supplied.
  if (hasError || !src) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#1a110d] via-[#140d0a] to-[#0c0705] flex flex-col items-center justify-center p-4 relative overflow-hidden border border-amber-900/30">
        {/* Subtle background radial glow */}
        <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 to-transparent pointer-events-none" />

        {/* Category Specific SVG Icon */}
        <div className="w-20 h-20 mb-2 flex items-center justify-center text-amber-500/80">
          {category === 'electric_wineador' ? (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-amber-400">
              {/* Electric Wineador */}
              <rect x="14" y="8" width="36" height="48" rx="3" stroke="currentColor" />
              <line x1="14" y1="20" x2="50" y2="20" stroke="currentColor" strokeDasharray="2 2" />
              <line x1="14" y1="32" x2="50" y2="32" stroke="currentColor" strokeDasharray="2 2" />
              <line x1="14" y1="44" x2="50" y2="44" stroke="currentColor" strokeDasharray="2 2" />
              <rect x="44" y="24" width="2" height="8" rx="1" fill="currentColor" />
              {/* Digital LED readout */}
              <rect x="22" y="12" width="20" height="5" rx="1" fill="#1b120c" stroke="currentColor" strokeWidth="1" />
              <text x="32" y="16" fontSize="3.5" fill="#38bdf8" textAnchor="middle" fontFamily="monospace">66°F 65%</text>
            </svg>
          ) : category === 'desktop_wood' || category === 'cabinet' ? (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-amber-500">
              {/* Wood Desktop Humidor */}
              <path d="M8 24 L32 14 L56 24 L32 34 Z" fill="#2d1c13" stroke="currentColor" />
              <path d="M8 24 L8 44 L32 54 L32 34 Z" fill="#22150e" stroke="currentColor" />
              <path d="M56 24 L56 44 L32 54 L32 34 Z" fill="#1a100a" stroke="currentColor" />
              {/* Hygrometer circle in front */}
              <circle cx="32" cy="42" r="5" fill="#120c09" stroke="#d97706" strokeWidth="1.5" />
              <line x1="32" y1="42" x2="34" y2="39" stroke="#fbbf24" strokeWidth="1" />
            </svg>
          ) : category === 'travel_case' ? (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-amber-500">
              {/* Rugged Travel Armor */}
              <rect x="12" y="16" width="40" height="32" rx="4" fill="#17120e" stroke="currentColor" />
              <line x1="20" y1="16" x2="20" y2="48" stroke="currentColor" />
              <line x1="44" y1="16" x2="44" y2="48" stroke="currentColor" />
              <rect x="26" y="12" width="12" height="4" rx="1" fill="currentColor" />
              {/* Relief valve */}
              <circle cx="22" cy="24" r="2" fill="#d97706" />
            </svg>
          ) : category === 'acrylic' || subCategory === 'tupperdor_core' || category === 'tupperdor' ? (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-amber-400">
              {/* Airtight Tupperdor / Acrylic */}
              <rect x="12" y="18" width="40" height="28" rx="3" fill="#14171a" stroke="currentColor" />
              <line x1="12" y1="24" x2="52" y2="24" stroke="#38bdf8" strokeWidth="2" />
              <rect x="8" y="28" width="4" height="8" rx="1" fill="currentColor" />
              <rect x="52" y="28" width="4" height="8" rx="1" fill="currentColor" />
              {/* Cedar tray inside */}
              <rect x="18" y="32" width="28" height="10" rx="1" fill="#3a2216" stroke="#d97706" strokeWidth="1" />
            </svg>
          ) : category === 'hygrometer' ? (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-amber-400">
              {/* Digital Hygrometer */}
              <rect x="16" y="12" width="32" height="40" rx="4" fill="#120c09" stroke="currentColor" />
              <rect x="20" y="16" width="24" height="20" rx="2" fill="#090605" stroke="#38bdf8" strokeWidth="1" />
              <text x="32" y="28" fontSize="6" fill="#38bdf8" textAnchor="middle" fontFamily="monospace" fontWeight="bold">65.0%</text>
              <text x="32" y="34" fontSize="3.5" fill="#f59e0b" textAnchor="middle" fontFamily="sans-serif">67.2°F</text>
              <circle cx="32" cy="44" r="3" fill="#d97706" />
            </svg>
          ) : category === 'humidification' ? (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-amber-500">
              {/* Boveda Pack */}
              <rect x="14" y="16" width="36" height="32" rx="3" fill="#382117" stroke="#b45309" />
              <rect x="18" y="20" width="28" height="24" rx="1" fill="#24140e" stroke="#d97706" strokeWidth="1" strokeDasharray="1 1" />
              <text x="32" y="33" fontSize="8" fill="#fbbf24" textAnchor="middle" fontWeight="bold" fontFamily="serif">{humidityLabel}</text>
              <text x="32" y="40" fontSize="2.5" fill="#d4af37" textAnchor="middle">2-WAY RH</text>
            </svg>
          ) : (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-amber-400">
              {/* Cigar Accessory / Cutter */}
              <circle cx="32" cy="32" r="18" stroke="currentColor" />
              <path d="M24 32 L40 32" stroke="currentColor" strokeWidth="2" />
              <path d="M26 26 L38 38" stroke="#d97706" strokeWidth="2" />
            </svg>
          )}
        </div>

        {/* Title / Description */}
        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 text-center px-2 line-clamp-1">
          {alt}
        </span>
        <span className="text-[9px] text-stone-500 uppercase tracking-widest mt-0.5">
          Representative {category.replace(/_/g, ' ')}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      className={imageClassName || className}
    />
  );
};
