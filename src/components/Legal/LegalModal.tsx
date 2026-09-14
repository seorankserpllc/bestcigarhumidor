import React from 'react';
import { X, ShieldCheck, Scale, FileText, Cookie } from 'lucide-react';

export type LegalDocType = 'affiliate-disclosure' | 'privacy-policy' | 'terms' | 'cookie-policy';

interface LegalModalProps {
  activeDoc: LegalDocType | null;
  onClose: () => void;
  onSelectDoc: (doc: LegalDocType) => void;
  onOpenCookieSettings?: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  activeDoc,
  onClose,
  onSelectDoc,
  onOpenCookieSettings
}) => {
  if (!activeDoc) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#17100d] border border-amber-900/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-title"
      >
        {/* Header Bar */}
        <div className="p-5 border-b border-amber-950 flex items-center justify-between bg-[#120b08]">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              {activeDoc === 'affiliate-disclosure' && <Scale className="w-5 h-5" />}
              {activeDoc === 'privacy-policy' && <ShieldCheck className="w-5 h-5" />}
              {activeDoc === 'terms' && <FileText className="w-5 h-5" />}
              {activeDoc === 'cookie-policy' && <Cookie className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 block">
                Compliance & Transparency
              </span>
              <h2 id="legal-title" className="font-serif text-xl font-bold text-amber-100">
                {activeDoc === 'affiliate-disclosure' && 'Amazon Associates & FTC Affiliate Disclosure'}
                {activeDoc === 'privacy-policy' && 'Global Privacy Policy (GDPR & CCPA/CPRA)'}
                {activeDoc === 'terms' && 'Terms of Service & Editorial Disclaimers'}
                {activeDoc === 'cookie-policy' && 'Cookie Policy & Consent Management'}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-1 p-2 bg-[#130b08] border-b border-stone-800/80 px-4 text-xs">
          <button
            onClick={() => onSelectDoc('affiliate-disclosure')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeDoc === 'affiliate-disclosure'
                ? 'bg-amber-600 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Affiliate Disclosure
          </button>
          <button
            onClick={() => onSelectDoc('privacy-policy')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeDoc === 'privacy-policy'
                ? 'bg-amber-600 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onSelectDoc('terms')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeDoc === 'terms'
                ? 'bg-amber-600 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Terms of Service
          </button>
          <button
            onClick={() => onSelectDoc('cookie-policy')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeDoc === 'cookie-policy'
                ? 'bg-amber-600 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Cookie Policy
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-stone-300 leading-relaxed font-sans">
          {/* 1. AFFILIATE DISCLOSURE */}
          {activeDoc === 'affiliate-disclosure' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-700/50 text-amber-200 text-xs">
                <strong className="block text-amber-100 font-serif text-sm mb-1">
                  Amazon Associates Statement (Section 5 Compliance):
                </strong>
                <p className="font-mono text-amber-300 text-xs">
                  "As an Amazon Associate I earn from qualifying purchases."
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  1. Federal Trade Commission (FTC) Endorsement Compliance
                </h3>
                <p>
                  In compliance with the United States Federal Trade Commission’s guides concerning the use of endorsements and testimonials in advertising (16 CFR § 255.5), please be advised that some or all of the links on <strong>Best Cigar Humidor</strong> are affiliate links. This means that if you click on a product link and make a purchase on Amazon.com, we may receive a referral commission at absolutely zero additional cost to you.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  2. Pricing & Availability Transparency
                </h3>
                <p>
                  Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon.com at the time of purchase will apply to the purchase of this product. We do not display static, non-refreshed dollar prices on our platform to adhere strictly to Amazon Associates Operating Policies.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  3. Editorial Independence & Lab Testing Guarantee
                </h3>
                <p>
                  We are an independent, aficionado-led research platform. Our recommendations, lab benchmark scores (Seal Integrity, Thermal Stability, Humidity Retention), and Build vs. Buy verdicts are formulated using empirical testing protocols. We never accept paid compensation or free manufacturer products in exchange for positive reviews. If a product fails our seal integrity or thermal insulation benchmark, we report it candidly.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  4. Direct Linking Commitment
                </h3>
                <p>
                  We respect our users' time. When our decision engine recommends a humidor or accessory, clicking our referral buttons directs you straight to that product’s active, verified Amazon Product Detail Page. We never route users to general search result queries.
                </p>
              </div>
            </div>
          )}

          {/* 2. PRIVACY POLICY */}
          {activeDoc === 'privacy-policy' && (
            <div className="space-y-6">
              <p className="text-xs text-stone-400">
                Last updated: September 2026. Complies with the EU/UK General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA/CPRA).
              </p>

              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  1. Information We Collect
                </h3>
                <p>
                  Best Cigar Humidor operates on a minimal data collection principle. We do not require account registration, usernames, or passwords.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-stone-300">
                  <li><strong>Local Preferences (Device-Only):</strong> Quiz responses, calculated recommendations, and cookie consent preferences are stored strictly in your browser’s local storage (`localStorage`). This data is never transmitted to or stored on our servers.</li>
                  <li><strong>Standard Server Logs:</strong> Anonymized technical telemetry (IP address, browser type, referring URL) collected automatically by our CDN provider (Cloudflare/Vercel) for DDoS protection and system security.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  2. Third-Party Affiliate Partners (Amazon)
                </h3>
                <p>
                  When you click an outbound link to Amazon.com, Amazon places a 24-hour attribution cookie on your browser to record that you arrived via our referral tag. Amazon's privacy practices are governed by the Amazon Privacy Notice.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  3. Your Rights Under GDPR (EU & UK Citizens)
                </h3>
                <p>
                  Under Articles 15–22 of the GDPR, you have the right to access, rectify, or erase any personal data held about you, as well as the right to object to data processing. Since we do not store identifying personal profiles or email databases, clearing your browser cookies and local storage immediately erases 100% of your interactions with this site.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  4. California Privacy Rights (CCPA / CPRA)
                </h3>
                <p>
                  Under the California Consumer Privacy Act, California residents have the right to know what personal information is collected, request its deletion, and opt out of the "sale" or "sharing" of personal data. <strong>Best Cigar Humidor does not sell or share personal information for monetary compensation.</strong>
                </p>
              </div>
            </div>
          )}

          {/* 3. TERMS OF SERVICE */}
          {activeDoc === 'terms' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  1. Agreement to Terms
                </h3>
                <p>
                  By accessing or using Best Cigar Humidor, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this platform.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  2. Educational & Informational Purpose (No Tobacco Warranty)
                </h3>
                <p>
                  All content, calculations, seasoning protocols, and blueprints provided on Best Cigar Humidor are for educational and hobbyist reference only. Cigar preservation depends on numerous external variables beyond our control (ambient humidity, HVAC failures, human error, sensor calibration drift). <strong>Best Cigar Humidor assumes zero liability for damaged, dry, or moldy tobacco products resulting from the use of our calculators or DIY blueprints.</strong>
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  3. DIY Workshop & Physical Assembly Safety
                </h3>
                <p>
                  DIY projects (drilling coolers, applying sealants, modifying wine cooler drain plugs) involve hand tools and electrical appliances. Users assume all responsibility for their personal safety, tool handling, and adherence to manufacturer appliance warranties.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  4. Intellectual Property
                </h3>
                <p>
                  All proprietary testing methodology, scoring algorithms, interactive widgets, and written technical guides are the intellectual property of Best Cigar Humidor. Brand names, logos, and ASINs belong to their respective trademark holders.
                </p>
              </div>
            </div>
          )}

          {/* 4. COOKIE POLICY */}
          {activeDoc === 'cookie-policy' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  1. What Are Cookies?
                </h3>
                <p>
                  Cookies are small text files stored on your device that enable websites to remember user preferences, calculate session state, and attribute affiliate transactions.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-base font-bold text-amber-100">
                  2. Cookies We Use
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#120b08] border border-stone-800 space-y-1">
                    <strong className="text-amber-300 block">Strictly Necessary Cookies</strong>
                    <p className="text-stone-400">Stores your cookie consent state and saves your quiz progress locally so your humidor match remains active on page refresh.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#120b08] border border-stone-800 space-y-1">
                    <strong className="text-amber-300 block">Affiliate Referral Cookies (Amazon)</strong>
                    <p className="text-stone-400">Set by Amazon.com when clicking "Check Price on Amazon". Used solely to attribute qualifying purchases within Amazon's 24-hour cookie window.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#120b08] border border-amber-900/40 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif font-bold text-stone-100 text-sm">Consent Management</h4>
                  <p className="text-xs text-stone-400">You can customize or revoke your cookie preferences at any time.</p>
                </div>
                {onOpenCookieSettings && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCookieSettings();
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-stone-950 shrink-0 transition-colors shadow"
                  >
                    Adjust Preferences
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-amber-950 bg-[#120b08] flex items-center justify-between text-xs text-stone-400">
          <span>Best Cigar Humidor • Dedicated to the Art & Science of Cigar Preservation</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl font-bold bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-900/40 transition-colors"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
