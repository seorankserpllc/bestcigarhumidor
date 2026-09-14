import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  Send,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Building2,
  AlertCircle,
  Sparkles,
  RefreshCw,
  HelpCircle,
  Compass,
  Scale,
  Wrench,
  Lock,
  ArrowRight
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (tab: 'wizard' | 'build-vs-buy' | 'blueprints' | 'catalog' | 'seasoning-lab' | 'guides' | 'contact') => void;
}

// Obfuscated FormSubmit AJAX endpoint to prevent automated web scrapers from harvesting the recipient email
const SECURE_DISPATCH_ENDPOINT = atob(
  'aHR0cHM6Ly9mb3Jtc3VibWl0LmNvL2FqYXgvYnVpbGQxMDBrQGdtYWlsLmNvbQ=='
);

const CATEGORIES = [
  'Humidor Selection & Sizing Advice',
  'DIY Tupperdor / Coolidor Build Support',
  'Seal, Seasoning & RH Hygrometer Troubleshooting',
  'Product Review Correction / Amazon Link Notice',
  'General Inquiry / Business & Editorial'
] as const;

type CategoryType = (typeof CATEGORIES)[number];

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Humidor Selection & Sizing Advice' as CategoryType,
    subject: '',
    message: ''
  });

  // Dual Honeypot trap fields for automated spam bots
  const [honeypotUrl, setHoneypotUrl] = useState('');
  const [honeypotFax, setHoneypotFax] = useState('');

  // Human interaction & rate limit tracking
  const formMountedAt = useRef<number>(Date.now());
  const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initialize and check 60-second rate limiter cooldown
  useEffect(() => {
    const checkCooldown = () => {
      const lastSubmitTs = localStorage.getItem('bch_last_contact_ts');
      if (lastSubmitTs) {
        const elapsed = Math.floor((Date.now() - Number(lastSubmitTs)) / 1000);
        if (elapsed < 60) {
          setCooldownRemaining(60 - elapsed);
          return;
        }
      }
      setCooldownRemaining(0);
    };

    checkCooldown();
    const interval = setInterval(checkCooldown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Form field sanitization helper: strips HTML tags and trims whitespace
  const sanitize = (text: string) => text.replace(/<[^>]*>?/gm, '').trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // 1. Rate Limiting Check
    if (cooldownRemaining > 0) {
      setErrorMessage(
        `Rate limit active: Please wait ${cooldownRemaining} seconds before submitting another inquiry.`
      );
      return;
    }

    // 2. Dual Honeypot Anti-Bot Trap:
    // If either hidden honeypot contains any content, an automated bot filled it out.
    // Silently simulate success without firing any network call to protect the inbox.
    if (honeypotUrl.trim() !== '' || honeypotFax.trim() !== '') {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setTicketId(`BCH-${Math.floor(10000 + Math.random() * 90000)}`);
        setIsSuccess(true);
      }, 1200);
      return;
    }

    // 3. Human Speed Threshold Check:
    // Headless scripts fill forms in < 3 seconds. Real humans take longer to read and type.
    const timeSpentSeconds = (Date.now() - formMountedAt.current) / 1000;
    if (timeSpentSeconds < 4.0) {
      setErrorMessage(
        'Security Notice: Submission occurred unusually quickly. Please review your message and click send again.'
      );
      // Reset mount timer to allow human to retry
      formMountedAt.current = Date.now();
      return;
    }

    // 4. Basic Field Validations
    const cleanName = sanitize(formData.name);
    const cleanEmail = sanitize(formData.email);
    const cleanSubject = sanitize(formData.subject);
    const cleanMessage = sanitize(formData.message);

    if (cleanName.length < 2) {
      setErrorMessage('Please enter your full name (minimum 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setErrorMessage('Please enter a valid email address so our review desk can reply.');
      return;
    }

    if (cleanSubject.length < 3) {
      setErrorMessage('Please enter a descriptive subject (minimum 3 characters).');
      return;
    }

    if (cleanMessage.length < 10) {
      setErrorMessage('Please provide a message with at least 10 characters detailing your inquiry.');
      return;
    }

    // 5. Anti-Spam Link Flooding Check: Flag messages with excessive URLs (> 3 links)
    const linkMatches = cleanMessage.match(/https?:\/\/[^\s]+/gi);
    if (linkMatches && linkMatches.length > 3) {
      setErrorMessage(
        'Security policy: Inquiries may not contain more than 3 external hyperlinks.'
      );
      return;
    }

    // 6. Form Submission via Obfuscated AJAX Endpoint
    setIsSubmitting(true);
    try {
      const response = await fetch(SECURE_DISPATCH_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          _replyto: cleanEmail,
          category: formData.category,
          subject: `[BestCigarHumidor] ${formData.category}: ${cleanSubject}`,
          message: cleanMessage,
          _subject: `[BestCigarHumidor Inquiry] ${formData.category}: ${cleanSubject}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (!response.ok) {
        throw new Error(`Service returned HTTP status ${response.status}`);
      }

      // Mark cooldown in localStorage
      localStorage.setItem('bch_last_contact_ts', Date.now().toString());
      setCooldownRemaining(60);

      const generatedTicket = `BCH-${Math.floor(10000 + Math.random() * 90000)}`;
      setTicketId(generatedTicket);
      setIsSuccess(true);
    } catch (err: unknown) {
      console.error('Contact dispatch error:', err);
      setErrorMessage(
        'Unable to transmit message right now due to a network connection issue. Please verify your connection or try again in a moment.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      category: 'Humidor Selection & Sizing Advice',
      subject: '',
      message: ''
    });
    setHoneypotUrl('');
    setHoneypotFax('');
    setIsSuccess(false);
    setErrorMessage(null);
    formMountedAt.current = Date.now();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-in fade-in duration-300">
      {/* Hero Header with Cigar Leather Lounge Atmosphere */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-amber-600/40 text-amber-300 text-xs font-semibold tracking-wide uppercase shadow-md">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>Aficionado Editorial Desk &amp; Review Authority</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-100 tracking-tight drop-shadow">
          Contact Our <span className="gold-gradient-text">Editorial Lab</span>
        </h1>
        <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
          Need sizing guidance for a custom vitola collection, troubleshooting an airtight tupperdor seal, or submitting a manufacturer correction? Send our preservation specialists a message below.
        </p>

        {/* Security & Response Badges */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>Spam-Proof &amp; Encrypted Dispatch</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>24–48h Review Response</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Independent Advice</span>
          </span>
        </div>
      </div>

      {/* Main Content Grid: Form (Left) & Business Info (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form or Success Confirmation State (7 Cols) */}
        <div className="lg:col-span-7 bg-gradient-to-b from-[#18100c] via-[#120a07] to-[#0d0705] border border-amber-900/50 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle warm amber top border glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-600 via-amber-400 to-amber-700" />

          {isSuccess ? (
            /* Success Confirmation State */
            <div className="py-6 space-y-6 text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-100">
                  Inquiry Transmitted Successfully!
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Best Cigar Humidor. Your inquiry has been forwarded directly to our editorial testing desk. We will review your notes and respond to your email.
                </p>
              </div>

              {/* Inquiry Receipt Card */}
              <div className="p-4 rounded-xl bg-[#100906] border border-amber-950 text-left space-y-2.5 max-w-md mx-auto text-xs">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400 font-medium">Tracking Ticket ID:</span>
                  <span className="font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800/40">
                    {ticketId}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 font-medium">Topic:</span>
                  <span className="text-stone-200 font-semibold">{formData.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 font-medium">Subject:</span>
                  <span className="text-stone-200 truncate max-w-[200px]">{formData.subject}</span>
                </div>
                <div className="flex items-center justify-between border-t border-stone-800 pt-2 text-[11px] text-stone-500">
                  <span>Logged at:</span>
                  <span>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
                <button
                  onClick={() => onNavigate('wizard')}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-stone-950 transition-colors cursor-pointer flex items-center gap-1.5 shadow-md shadow-amber-950/40"
                >
                  <span>Launch Humidor Finder</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* Active Contact Form */
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="space-y-1">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-amber-100 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>Send a Secure Message to Our Review Desk</span>
                </h2>
                <p className="text-xs text-stone-400">
                  All fields marked with an asterisk (<span className="text-amber-400">*</span>) are required.
                </p>
              </div>

              {/* Error Notice */}
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">{errorMessage}</div>
                </div>
              )}

              {/* Rate Limiting Active Banner */}
              {cooldownRemaining > 0 && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Rate limit cooldown active: You can send your next message in <strong>{cooldownRemaining}s</strong>.
                  </span>
                </div>
              )}

              {/* DUAL HONEYPOT TRAP FIELDS (Hidden from human visitors, traps scrapers) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="website_url">Website (Leave Empty)</label>
                <input
                  type="text"
                  id="website_url"
                  name="website_url"
                  value={honeypotUrl}
                  onChange={(e) => setHoneypotUrl(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  top: '-9999px',
                  opacity: 0,
                  pointerEvents: 'none'
                }}
                aria-hidden="true"
              >
                <label htmlFor="fax_number">Secondary Phone (Leave Empty)</label>
                <input
                  type="text"
                  id="fax_number"
                  name="fax_number"
                  value={honeypotFax}
                  onChange={(e) => setHoneypotFax(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Name & User's Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact_name" className="block text-xs font-semibold text-stone-300">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Richard Vance"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f0a07] border border-amber-950/90 text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder:text-stone-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact_email" className="block text-xs font-semibold text-stone-300">
                    Your Email (For our response) <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact_email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f0a07] border border-amber-950/90 text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder:text-stone-600"
                  />
                </div>
              </div>

              {/* Inquiry Category */}
              <div className="space-y-1.5">
                <label htmlFor="contact_category" className="block text-xs font-semibold text-stone-300">
                  Inquiry Topic <span className="text-amber-400">*</span>
                </label>
                <select
                  id="contact_category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as CategoryType })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f0a07] border border-amber-950/90 text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors cursor-pointer"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} className="bg-[#18110e] text-stone-200">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject Line */}
              <div className="space-y-1.5">
                <label htmlFor="contact_subject" className="block text-xs font-semibold text-stone-300">
                  Subject Line <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  id="contact_subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Question regarding Needone 23L heating vs cooling in dry climates"
                  maxLength={120}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f0a07] border border-amber-950/90 text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder:text-stone-600"
                />
              </div>

              {/* Message Body */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="contact_message" className="block text-xs font-semibold text-stone-300">
                    Your Message <span className="text-amber-400">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-stone-500">
                    {formData.message.length} / 3000 chars
                  </span>
                </div>
                <textarea
                  id="contact_message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your humidor setup, vitola collection formats, room climate conditions, or questions in detail..."
                  maxLength={3000}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f0a07] border border-amber-950/90 text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder:text-stone-600 resize-y"
                />
              </div>

              {/* Submit Button & Security Notice */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting || cooldownRemaining > 0}
                  className={`w-full py-3 px-6 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                    isSubmitting || cooldownRemaining > 0
                      ? 'bg-stone-800 text-stone-500 cursor-not-allowed border border-stone-700'
                      : 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 shadow-amber-950/40 cursor-pointer font-extrabold active:scale-[0.99]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry Securely...</span>
                    </>
                  ) : cooldownRemaining > 0 ? (
                    <>
                      <Clock className="w-4 h-4" />
                      <span>Rate Limit Active (${cooldownRemaining}s remaining)</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Secure Message</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-stone-500 text-center leading-relaxed">
                  🔒 Protected by multi-layer bot mitigation, link verification, and rate limiting. Your email is used solely to reply to your inquiry and is never shared, rented, or added to marketing newsletters.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Business Identity, Physical Address & Quick Help (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Official Company Identity Card */}
          <div className="bg-gradient-to-b from-[#18100c] to-[#0f0906] border border-amber-900/50 rounded-2xl p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-2.5 border-b border-amber-950/80 pb-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 font-serif">
                  Business Entity &amp; Operator
                </h3>
                <span className="text-sm font-bold text-amber-100">
                  SEO RANK SERP LLC
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <strong className="text-stone-200 block font-semibold">Registered Office Address:</strong>
                  <span className="text-stone-300 block">8 The Green</span>
                  <span className="text-stone-300 block">Dover, Delaware 19901</span>
                  <span className="text-stone-500 block text-[11px]">United States of America</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-amber-950/80">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <strong className="text-stone-200 block font-semibold">Editorial Desk Hours:</strong>
                  <span className="text-stone-400 block">Monday – Friday: 9:00 AM – 6:00 PM EST</span>
                  <span className="text-stone-400 block">Saturday – Sunday: Humidor Lab Humidity Tests</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-amber-950/80">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <strong className="text-stone-200 block font-semibold">Data Protection Officer / Legal Notice:</strong>
                  <p className="text-stone-400 text-[11px] leading-relaxed">
                    Formal legal notices, DMCA inquiries, or privacy requests under GDPR / CCPA may be sent via this form or dispatched by certified mail to our Dover, Delaware registered address.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Answers Shortcuts Card */}
          <div className="bg-gradient-to-b from-[#18100c] to-[#0f0906] border border-amber-900/50 rounded-2xl p-6 space-y-3.5 shadow-xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 font-serif">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Looking for Instant Answers?</span>
            </h3>

            <p className="text-xs text-stone-400 leading-relaxed">
              Most common storage, sizing, and seasoning questions can be solved immediately with our interactive decision tools:
            </p>

            <div className="space-y-2 pt-1">
              <button
                onClick={() => onNavigate('wizard')}
                className="w-full p-2.5 rounded-xl bg-[#0f0a07] hover:bg-stone-900 border border-amber-950 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium text-stone-300 group-hover:text-amber-200">
                    60-Second Humidor Finder Quiz
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
              </button>

              <button
                onClick={() => onNavigate('build-vs-buy')}
                className="w-full p-2.5 rounded-xl bg-[#0f0a07] hover:bg-stone-900 border border-amber-950 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <Scale className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium text-stone-300 group-hover:text-amber-200">
                    Build vs. Buy Calculator
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
              </button>

              <button
                onClick={() => onNavigate('blueprints')}
                className="w-full p-2.5 rounded-xl bg-[#0f0a07] hover:bg-stone-900 border border-amber-950 flex items-center justify-between text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <Wrench className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium text-stone-300 group-hover:text-amber-200">
                    DIY Tupperdor &amp; Coolidor Blueprints
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
