import React from 'react';
import { Wrench, BookOpen, ShoppingBag } from 'lucide-react';
import type { LegalDocType } from '../Legal/LegalModal';
import { BrandLogo } from '../Common/BrandLogo';

interface FooterProps {
  onOpenLegal: (doc: LegalDocType) => void;
  onOpenCookieSettings: () => void;
  onNavigateTab: (tab: 'wizard' | 'build-vs-buy' | 'blueprints' | 'catalog' | 'seasoning-lab' | 'guides') => void;
  onSelectProduct: (productIdOrSlug: string) => void;
  onSelectGuide: (slug: string) => void;
  onSelectBlueprint: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegal,
  onOpenCookieSettings,
  onNavigateTab,
  onSelectProduct,
  onSelectGuide,
  onSelectBlueprint
}) => {
  return (
    <footer className="bg-[#0e0705] border-t border-amber-950/80 text-stone-400 text-xs font-sans mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Editorial Transparency */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigateTab('wizard')}
              className="cursor-pointer group inline-flex"
            >
              <BrandLogo size="lg" />
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              <strong className="text-stone-300">Best Cigar Humidor</strong> (<span className="font-mono text-amber-400">bestcigarhumidor.com</span>) is an independent research platform and aficionado guild dedicated to the physics and craft of cigar preservation. We analyze seal integrity, hygrometer drift, and real-world stick capacity across turnkey humidors and DIY builds.
            </p>

            {/* Amazon Mandatory Disclaimer */}
            <div className="p-4 rounded-xl bg-[#150d09] border border-amber-950/90 space-y-1.5 text-[11px] text-stone-400 shadow-inner">
              <strong className="text-amber-400 block font-semibold">
                Amazon Associates Program Disclosure:
              </strong>
              <p className="leading-relaxed">
                As an Amazon Associate I earn from qualifying purchases. We participate in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn fees by linking to Amazon.com and affiliated sites.
              </p>
            </div>
          </div>

          {/* Col 3: Standalone Reviews */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-200 flex items-center gap-1.5 font-serif">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-500" />
              Popular Lab Reviews
            </span>
            <ul className="space-y-2 text-stone-400 text-xs">
              <li>
                <button 
                  onClick={() => onSelectProduct('needone-23l-electric-cigar-cooler-heater-review')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Needone 23L Cooler & Heater
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectProduct('needone-48l-large-electric-cigar-cooler-heater-review')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Needone 48L Cabinet Humidor
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectProduct('klaro-renzo-glass-top-humidor-review')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Klaro Renzo Glass Top Desktop
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectProduct('klaro-octodor-glass-top-humidor-review')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Klaro Octodor 100-Stick Chest
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectProduct('mantello-100-cigar-desktop-glasstop-review')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Mantello Royale 100 Humidor
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectProduct('tisfa-acrylic-cigar-humidor-review')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  TISFA Acrylic Humidor Box
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectProduct('govee-bluetooth-digital-hygrometer-review')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Govee Smart Bluetooth Sensor
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab('catalog')}
                  className="text-amber-500 hover:text-amber-400 font-semibold pt-1 block"
                >
                  View Full Product Catalog →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: DIY Workshop & Blueprints */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-200 flex items-center gap-1.5 font-serif">
              <Wrench className="w-3.5 h-3.5 text-amber-500" />
              DIY Blueprints
            </span>
            <ul className="space-y-2 text-stone-400 text-xs">
              <li>
                <button 
                  onClick={() => onSelectBlueprint('blueprint-tupperdor-7l')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  The Bulletproof $50 Tupperdor
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectBlueprint('blueprint-coolidor-marine')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  400-Stick Marine Coolidor Stash
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectBlueprint('blueprint-converted-wineador')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  High-Tech Converted Wineador
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectBlueprint('blueprint-cabinet-conversion')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Custom Spanish Cedar Cabinet
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab('build-vs-buy')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Build vs. Buy Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab('seasoning-lab')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Hygrometer Salt Calibration
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Editorial Guides & Legal */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-200 flex items-center gap-1.5 font-serif">
              <BookOpen className="w-3.5 h-3.5 text-amber-500" />
              Technical Guides
            </span>
            <ul className="space-y-2 text-stone-400 text-xs">
              <li>
                <button 
                  onClick={() => onSelectGuide('electric-wineador-masterclass-heating-cooling')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Electric Wineador Masterclass
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectGuide('glass-top-humidor-truth-leaks-sealing')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  The Truth About Glass Tops
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectGuide('science-of-airtight-tupperdors')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Science of Airtight Tupperdors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectGuide('high-altitude-cigar-preservation')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  High Altitude Preservation (5,000ft)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectGuide('spanish-cedar-biology-guide')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Spanish Cedar Biology Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab('guides')}
                  className="text-amber-500 hover:text-amber-400 font-semibold pt-1 block"
                >
                  Explore All Guides Hub →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Compliance Strip */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Best Cigar Humidor (bestcigarhumidor.com). All rights reserved. Built for discerning cigar aficionados worldwide.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-stone-400">
            <button 
              onClick={() => onOpenLegal('affiliate-disclosure')}
              className="hover:text-amber-300 transition-colors"
            >
              Affiliate Disclosure (FTC)
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('privacy-policy')}
              className="hover:text-amber-300 transition-colors"
            >
              Privacy Policy (GDPR / CCPA)
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('terms')}
              className="hover:text-amber-300 transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('cookie-policy')}
              className="hover:text-amber-300 transition-colors"
            >
              Cookie Policy
            </button>
            <span>•</span>
            <button 
              onClick={onOpenCookieSettings}
              className="text-amber-500 hover:text-amber-400 font-semibold underline"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
