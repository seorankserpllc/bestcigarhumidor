import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, Settings, X } from 'lucide-react';

export interface CookiePreferences {
  essential: boolean; // Always true
  analytics: boolean;
  affiliate: boolean;
  timestamp: string;
}

interface CookieConsentBannerProps {
  onOpenCookiePolicy: () => void;
  onOpenPrivacyPolicy: () => void;
}

const STORAGE_KEY = 'humidor_cookie_consent';

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  onOpenCookiePolicy,
  onOpenPrivacyPolicy
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    affiliate: true,
    timestamp: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Small delay for smooth entry
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    } else {
      try {
        setPreferences(JSON.parse(saved));
      } catch (e) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const pref: CookiePreferences = {
      essential: true,
      analytics: true,
      affiliate: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pref));
    setPreferences(pref);
    setIsVisible(false);
    setShowSettingsModal(false);
  };

  const handleEssentialOnly = () => {
    const pref: CookiePreferences = {
      essential: true,
      analytics: false,
      affiliate: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pref));
    setPreferences(pref);
    setIsVisible(false);
    setShowSettingsModal(false);
  };

  const handleSaveCustom = () => {
    const pref: CookiePreferences = {
      ...preferences,
      essential: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pref));
    setPreferences(pref);
    setIsVisible(false);
    setShowSettingsModal(false);
  };

  if (!isVisible && !showSettingsModal) return null;

  return (
    <>
      {/* Bottom Consent Banner */}
      {isVisible && !showSettingsModal && (
        <div className="fixed bottom-0 inset-x-0 z-40 p-4 sm:p-6 animate-in slide-in-from-bottom duration-300 pointer-events-none">
          <div className="max-w-5xl mx-auto bg-[#1a110d]/95 backdrop-blur-md border border-amber-900/60 rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black pointer-events-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start space-x-3.5">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs">
                <strong className="text-amber-100 font-serif text-sm block">
                  Your Privacy & Affiliate Transparency Choice
                </strong>
                <p className="text-stone-300 leading-relaxed max-w-2xl">
                  We use cookies to maintain your humidor quiz matches, deliver direct Amazon product links, and evaluate platform usage. We never sell your personal data. Complies with GDPR, ePrivacy, and CCPA/CPRA regulations.
                </p>
                <div className="flex items-center space-x-3 pt-1 text-[11px]">
                  <button
                    onClick={onOpenCookiePolicy}
                    className="text-amber-400 hover:text-amber-300 underline"
                  >
                    Cookie Policy
                  </button>
                  <span className="text-stone-600">•</span>
                  <button
                    onClick={onOpenPrivacyPolicy}
                    className="text-amber-400 hover:text-amber-300 underline"
                  >
                    Privacy Notice
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0 self-end md:self-center">
              <button
                onClick={() => setShowSettingsModal(true)}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-stone-300 hover:text-white bg-stone-900/80 hover:bg-stone-800 border border-stone-800 transition-colors flex items-center gap-1.5"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Customize</span>
              </button>
              <button
                onClick={handleEssentialOnly}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-stone-200 hover:text-white bg-stone-800 hover:bg-stone-700 border border-stone-700 transition-colors"
              >
                Essential Only
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2 rounded-xl text-xs font-bold text-stone-950 bg-amber-600 hover:bg-amber-500 transition-all shadow-md hover:scale-[1.02]"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customize Preferences Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1a110d] border border-amber-900/60 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-amber-950">
              <div className="flex items-center space-x-2 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-serif text-lg font-bold text-amber-100">
                  Cookie & Privacy Preferences
                </h3>
              </div>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="text-stone-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* Essential */}
              <div className="p-3.5 rounded-xl bg-[#120b08] border border-stone-800 flex items-start justify-between gap-3">
                <div>
                  <strong className="text-stone-100 block font-semibold mb-0.5">
                    Strictly Necessary (Always Active)
                  </strong>
                  <p className="text-stone-400 leading-relaxed">
                    Required to remember your humidor recommendations, device preferences, and consent choices. Cannot be disabled.
                  </p>
                </div>
                <span className="px-2 py-1 rounded bg-stone-800 text-[10px] font-bold text-emerald-400 shrink-0 uppercase tracking-wide">
                  Active
                </span>
              </div>

              {/* Affiliate Attribution */}
              <div className="p-3.5 rounded-xl bg-[#120b08] border border-stone-800 flex items-start justify-between gap-3">
                <div>
                  <strong className="text-stone-100 block font-semibold mb-0.5">
                    Amazon Referral Attribution
                  </strong>
                  <p className="text-stone-400 leading-relaxed">
                    Enables Amazon to credit Best Cigar Humidor when you purchase a recommended humidor. Does not share your personal identification with us.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.affiliate}
                  onChange={(e) => setPreferences({ ...preferences, affiliate: e.target.checked })}
                  className="w-4 h-4 accent-amber-600 rounded mt-1 shrink-0 cursor-pointer"
                />
              </div>

              {/* Analytics */}
              <div className="p-3.5 rounded-xl bg-[#120b08] border border-stone-800 flex items-start justify-between gap-3">
                <div>
                  <strong className="text-stone-100 block font-semibold mb-0.5">
                    Anonymous Usage Analytics
                  </strong>
                  <p className="text-stone-400 leading-relaxed">
                    Helps our engineering team understand which quiz paths and calculator tools are most helpful, with zero personal profiling.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-4 h-4 accent-amber-600 rounded mt-1 shrink-0 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-3 border-t border-amber-950">
              <button
                onClick={handleEssentialOnly}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-300 hover:text-white bg-stone-900 border border-stone-800"
              >
                Reject All Non-Essential
              </button>
              <button
                onClick={handleSaveCustom}
                className="px-5 py-2 rounded-xl text-xs font-bold text-stone-950 bg-amber-600 hover:bg-amber-500"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
