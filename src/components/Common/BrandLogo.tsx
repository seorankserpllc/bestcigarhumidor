import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'compact' | 'crest-only';
  className?: string;
  showDomain?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'full',
  className = '',
  showDomain = true
}) => {
  const iconSize = size === 'sm' ? 32 : size === 'md' ? 40 : 50;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Luxury Crisp Vector Emblem (Transparent, High-Contrast Gold) */}
      <div 
        className="relative shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(217,119,6,0.3)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bchGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff1c2"/>
              <stop offset="35%" stopColor="#e2aa46"/>
              <stop offset="70%" stopColor="#bf7c20"/>
              <stop offset="100%" stopColor="#844f0b"/>
            </linearGradient>

            <linearGradient id="bchGoldLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff"/>
              <stop offset="50%" stopColor="#f5d77f"/>
              <stop offset="100%" stopColor="#c98a2c"/>
            </linearGradient>

            <radialGradient id="emberGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffedd5"/>
              <stop offset="35%" stopColor="#f97316"/>
              <stop offset="100%" stopColor="#c2410c" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Outer Heraldic Shield / Diamond Frame */}
          <path 
            d="M50 4 L88 26 L88 64 C88 80 50 96 50 96 C50 96 12 80 12 64 L12 26 Z" 
            fill="#180e09" 
            stroke="url(#bchGold)" 
            strokeWidth="2.5" 
            strokeLinejoin="round"
          />

          {/* Inner Inset Shield Line */}
          <path 
            d="M50 11 L81 29 L81 61 C81 74 50 88 50 88 C50 88 19 74 19 61 L19 29 Z" 
            fill="none" 
            stroke="url(#bchGold)" 
            strokeWidth="1" 
            strokeOpacity="0.55"
          />

          {/* Top Crown (Excellence / "The Best") */}
          <path 
            d="M40 25 L43 18 L50 22 L57 18 L60 25 Z" 
            fill="url(#bchGoldLight)"
          />
          <circle cx="43" cy="17" r="1.2" fill="#ffffff"/>
          <circle cx="50" cy="15" r="1.5" fill="#ffffff"/>
          <circle cx="57" cy="17" r="1.2" fill="#ffffff"/>

          {/* Classic Humidor Box Lid Line */}
          <line x1="28" y1="33" x2="72" y2="33" stroke="url(#bchGold)" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="50" cy="33" r="2.2" fill="url(#bchGoldLight)"/>

          {/* Lit Torpedo Cigar (Diagonal) */}
          <g transform="rotate(-25 50 53)">
            {/* Cigar Body */}
            <rect x="30" y="50" width="36" height="8" rx="2" fill="#3a1e12" stroke="url(#bchGold)" strokeWidth="0.8"/>
            {/* Torpedo Cap */}
            <path d="M30 50 C24 51.5 22 54 22 54 C22 54 24 56.5 30 58 Z" fill="#29140b" stroke="url(#bchGold)" strokeWidth="0.8"/>
            {/* Cigar Ring */}
            <rect x="34" y="49.5" width="7" height="9" rx="0.8" fill="url(#bchGoldLight)"/>
            <rect x="35.5" y="50.5" width="4" height="7" rx="0.5" fill="#881337"/>
            {/* Foot & Ash */}
            <rect x="66" y="50" width="3" height="8" fill="#52525b"/>
            {/* Lit Glowing Ember */}
            <circle cx="69" cy="54" r="2.2" fill="url(#emberGlow)"/>
            <circle cx="69" cy="54" r="1" fill="#fff7ed"/>
          </g>

          {/* Golden Aromatic Smoke Curl */}
          <path 
            d="M66 43 C72 34 64 26 70 18" 
            fill="none" 
            stroke="url(#bchGoldLight)" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
            opacity="0.85"
          />

          {/* Bottom Laurel / Star Accents */}
          <g transform="translate(50, 75)" fill="url(#bchGoldLight)">
            <polygon points="0,-4 1.2,-1 4,-1 1.8,1 2.6,4 0,2.5 -2.6,4 -1.8,1 -4,-1 -1.2,-1" transform="scale(0.8)"/>
            <circle cx="-10" cy="-2" r="1.2"/>
            <circle cx="10" cy="-2" r="1.2"/>
          </g>
        </svg>
      </div>

      {/* Typography: BEST CIGAR HUMIDOR */}
      {variant !== 'crest-only' && (
        <div className="flex flex-col justify-center min-w-0">
          <div className="flex items-baseline space-x-1.5 leading-none">
            <span 
              className={`font-serif font-bold gold-gradient-text tracking-widest uppercase ${
                size === 'sm' ? 'text-sm' : size === 'md' ? 'text-lg sm:text-xl' : 'text-2xl sm:text-3xl'
              }`}
            >
              BEST CIGAR
            </span>
            <span 
              className={`font-serif font-semibold text-stone-200 tracking-wider uppercase ${
                size === 'sm' ? 'text-sm' : size === 'md' ? 'text-lg sm:text-xl' : 'text-2xl sm:text-3xl'
              }`}
            >
              HUMIDOR
            </span>
          </div>

          {showDomain && (
            <span className="text-[10px] text-amber-500/80 font-mono tracking-wider pt-1 hidden sm:block">
              bestcigarhumidor.com
            </span>
          )}
        </div>
      )}
    </div>
  );
};
