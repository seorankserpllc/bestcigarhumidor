import React, { useState } from 'react';
import type { QuizAnswers, ClimateZone, RoomPlacement, StorageFormat, ControlPreference, BuildPreference } from '../../types/humidor';
import { 
  Compass, ArrowRight, ArrowLeft, RotateCcw, Mountain, Sun, CloudRain, 
  ThermometerSnowflake, Home, Box, Shield, Sparkles, CheckCircle2,
  Layers, Zap, Award, Luggage
} from 'lucide-react';

interface HumidorWizardProps {
  onComplete: (answers: QuizAnswers) => void;
  initialAnswers?: QuizAnswers;
}

const DEFAULT_ANSWERS: QuizAnswers = {
  currentSticks: 30,
  expectedGrowth: 75,
  storageFormat: 'singles',
  smokingFrequency: 'few_a_week',
  climateZone: 'four_seasons',
  elevationTier: 'sea_level',
  elevationFt: 300,
  roomPlacement: 'living_room',
  hasHVAC: true,
  controlPreference: 'any',
  buildPreference: 'compare_both',
  budgetMax: 200,
  importanceOfAesthetics: 4,
};

export const HumidorWizard: React.FC<HumidorWizardProps> = ({ onComplete, initialAnswers }) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<QuizAnswers>(initialAnswers || DEFAULT_ANSWERS);

  const totalSteps = 5;

  const update = <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const applyPreset = (presetName: string) => {
    switch (presetName) {
      case 'denver-collector':
        setAnswers({
          currentSticks: 150,
          expectedGrowth: 350,
          storageFormat: 'both',
          smokingFrequency: 'few_a_week',
          climateZone: 'four_seasons',
          elevationTier: 'high_altitude',
          elevationFt: 5280,
          roomPlacement: 'basement',
          hasHVAC: true,
          controlPreference: 'smart_electric',
          buildPreference: 'compare_both',
          budgetMax: 350,
          importanceOfAesthetics: 3,
        });
        break;
      case 'value-tupperdor':
        setAnswers({
          currentSticks: 40,
          expectedGrowth: 80,
          storageFormat: 'singles',
          smokingFrequency: 'few_a_week',
          climateZone: 'four_seasons',
          elevationTier: 'sea_level',
          elevationFt: 500,
          roomPlacement: 'bedroom_closet',
          hasHVAC: true,
          controlPreference: 'set_and_forget',
          buildPreference: 'build_diy',
          budgetMax: 60,
          importanceOfAesthetics: 1,
        });
        break;
      case 'miami-balcony':
        setAnswers({
          currentSticks: 25,
          expectedGrowth: 50,
          storageFormat: 'singles',
          smokingFrequency: 'weekends',
          climateZone: 'humid_subtropical',
          elevationTier: 'sea_level',
          elevationFt: 15,
          roomPlacement: 'living_room',
          hasHVAC: true,
          controlPreference: 'smart_electric',
          buildPreference: 'buy_turnkey',
          budgetMax: 220,
          importanceOfAesthetics: 4,
        });
        break;
      case 'executive-desk':
        setAnswers({
          currentSticks: 35,
          expectedGrowth: 60,
          storageFormat: 'singles',
          smokingFrequency: 'few_a_week',
          climateZone: 'moderate',
          elevationTier: 'sea_level',
          elevationFt: 200,
          roomPlacement: 'office_desk',
          hasHVAC: true,
          controlPreference: 'traditional_wood',
          buildPreference: 'buy_turnkey',
          budgetMax: 180,
          importanceOfAesthetics: 5,
        });
        break;
      case 'traveler':
        setAnswers({
          currentSticks: 15,
          expectedGrowth: 20,
          storageFormat: 'singles',
          smokingFrequency: 'occasional',
          climateZone: 'moderate',
          elevationTier: 'sea_level',
          elevationFt: 100,
          roomPlacement: 'travel',
          hasHVAC: true,
          controlPreference: 'set_and_forget',
          buildPreference: 'buy_turnkey',
          budgetMax: 70,
          importanceOfAesthetics: 2,
        });
        break;
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div id="finder-questions" className="finder-wizard max-w-4xl mx-auto py-6 px-4 scroll-mt-24">
      {/* Quick Presets Bar */}
      <div className="mb-6 p-4 rounded-2xl bg-[#1a120e]/90 border border-amber-800/30 flex flex-wrap items-center justify-between gap-3 text-xs shadow-xl">
        <span className="text-stone-400 flex items-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Want a head start? Choose an example, then adjust any answer.</span>
        </span>
        <div className="w-full min-w-0 grid grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-wrap">
          <button
            onClick={() => applyPreset('value-tupperdor')}
            className="px-2.5 py-1 rounded bg-stone-900/80 hover:bg-amber-900/40 text-stone-300 hover:text-amber-200 border border-stone-800 transition-colors"
          >
            Small budget setup
          </button>
          <button
            onClick={() => applyPreset('denver-collector')}
            className="px-2.5 py-1 rounded bg-stone-900/80 hover:bg-amber-900/40 text-stone-300 hover:text-amber-200 border border-stone-800 transition-colors"
          >
            Large collection
          </button>
          <button
            onClick={() => applyPreset('miami-balcony')}
            className="px-2.5 py-1 rounded bg-stone-900/80 hover:bg-amber-900/40 text-stone-300 hover:text-amber-200 border border-stone-800 transition-colors"
          >
            Warm, humid climate
          </button>
          <button
            onClick={() => applyPreset('executive-desk')}
            className="px-2.5 py-1 rounded bg-stone-900/80 hover:bg-amber-900/40 text-stone-300 hover:text-amber-200 border border-stone-800 transition-colors"
          >
            Display humidor
          </button>
          <button
            onClick={() => applyPreset('traveler')}
            className="px-2.5 py-1 rounded bg-stone-900/80 hover:bg-amber-900/40 text-stone-300 hover:text-amber-200 border border-stone-800 transition-colors"
          >
            Travel case
          </button>
        </div>
      </div>

      {/* Main Wizard Card */}
      <div className="finder-card border border-amber-800/40 rounded-3xl shadow-2xl p-6 sm:p-8 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Wizard Header & Stepper */}
        <div className="mb-8 border-b border-amber-950 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                Step {step} of {totalSteps}
              </span>
              <span className="text-xs text-stone-400">
                {step === 1 && 'Your collection'}
                {step === 2 && 'Your room climate'}
                {step === 3 && 'Where it will sit'}
                {step === 4 && 'How hands-on?'}
                {step === 5 && 'Budget & style'}
              </span>
            </div>
            <button
              onClick={() => {
                setAnswers(DEFAULT_ANSWERS);
                setStep(1);
              }}
              className="text-xs text-stone-400 hover:text-amber-300 flex items-center space-x-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-stone-900 h-2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-300 rounded-full"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: Capacity & Storage Format */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-amber-100 mb-2">
How many cigars do you need to store?
              </h2>
              <p className="text-sm text-stone-300">
                Tell us what you have now and how much room you want for the next year or two. A little extra space keeps the collection easier to organize.
              </p>
            </div>

            {/* Current Sticks Slider */}
            <div className="p-5 rounded-xl bg-[#1f1511] border border-amber-950 space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-stone-300">
Current number of cigars
                </label>
                <span className="text-xl font-bold text-amber-400 font-serif">
                  {answers.currentSticks} cigars
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={answers.currentSticks}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  update('currentSticks', val);
                  if (answers.expectedGrowth < val * 1.5) {
                    update('expectedGrowth', Math.round(val * 1.8));
                  }
                }}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-900 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-stone-400">
                <span>5</span>
                <span>50</span>
                <span>150</span>
                <span>300</span>
                <span>500</span>
              </div>
            </div>

            {/* Target 1-2 Year Collection */}
            <div className="p-5 rounded-xl bg-[#1f1511] border border-amber-950 space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <label className="text-sm font-medium text-stone-300">
Room you want in 1–2 years
                  </label>
                  <p className="text-xs text-stone-400">An estimate is fine</p>
                </div>
                <span className="text-xl font-bold text-amber-300 font-serif">
                  About {answers.expectedGrowth} cigars
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={answers.expectedGrowth}
                onChange={(e) => update('expectedGrowth', Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-900 rounded-lg"
              />
            </div>

            {/* Storage Format: Singles vs Boxes */}
            <div>
              <label className="block text-sm font-medium text-stone-300 mb-2">
                How will you store your cigars?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'singles',
                    title: 'Mostly singles',
                    desc: 'Loose cigars, samplers, and small packs.'
                  },
                  {
                    id: 'both',
                    title: 'Singles and boxes',
                    desc: 'A mix of loose cigars and full boxes.'
                  },
                  {
                    id: 'boxes',
                    title: 'Mostly full boxes',
                    desc: 'You need deeper shelves and more open space.'
                  }
                ].map((fmt) => (
                  <button
                    key={fmt.id}
                    onClick={() => update('storageFormat', fmt.id as StorageFormat)}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      answers.storageFormat === fmt.id
                        ? 'bg-amber-600/20 border-amber-500/80 text-amber-100 shadow-lg'
                        : 'bg-[#1b130f] border-amber-950 text-stone-300 hover:border-amber-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-sm">{fmt.title}</span>
                      {answers.storageFormat === fmt.id && (
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      )}
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">{fmt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Smoking Frequency */}
            <div>
              <label className="block text-sm font-medium text-stone-300 mb-2">
How often do you reach for a cigar?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                {[
                  { id: 'daily', label: 'Daily' },
                  { id: 'few_a_week', label: 'A few each week' },
                  { id: 'weekends', label: 'Mostly weekends' },
                  { id: 'occasional', label: 'Once or twice a month' },
                  { id: 'collector', label: 'Mostly aging' },
                ].map((freq) => (
                  <button
                    key={freq.id}
                    onClick={() => update('smokingFrequency', freq.id as any)}
                    className={`p-2.5 rounded-lg border text-center transition-all ${
                      answers.smokingFrequency === freq.id
                        ? 'bg-amber-500/20 border-amber-500 text-amber-200 font-semibold'
                        : 'bg-[#1b130f] border-stone-800 text-stone-400 hover:border-amber-900'
                    }`}
                  >
                    {freq.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Geographic Climate & Altitude */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-amber-100 mb-2">
What is the climate like where you live?
              </h2>
              <p className="text-sm text-stone-300">
                Choose the closest match. The temperature and humidity inside your home matter more than the weather outside.
              </p>
            </div>

            {/* Climate Zones */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-stone-300">
Which sounds most like your home?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    id: 'four_seasons',
                    title: 'Cold winters, warm summers',
                    subtitle: 'Northeast, Midwest, Mid-Atlantic, Canada',
                    desc: 'Heating dries the room in winter; summer can be humid.',
                    icon: ThermometerSnowflake
                  },
                  {
                    id: 'humid_subtropical',
                    title: 'Warm and humid',
                    subtitle: 'Florida, Gulf Coast, Georgia, Southeast',
                    desc: 'Long warm seasons and humid indoor air.',
                    icon: CloudRain
                  },
                  {
                    id: 'arid_desert',
                    title: 'Very dry',
                    subtitle: 'Arizona, Nevada, Inland California, New Mexico',
                    desc: 'Dry air for much of the year, indoors and out.',
                    icon: Sun
                  },
                  {
                    id: 'moderate',
                    title: 'Mostly mild',
                    subtitle: 'Pacific Northwest, Coastal California, UK',
                    desc: 'Indoor temperature and humidity stay fairly steady.',
                    icon: Home
                  }
                ].map((zone) => {
                  const Icon = zone.icon;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => update('climateZone', zone.id as ClimateZone)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        answers.climateZone === zone.id
                          ? 'bg-amber-600/20 border-amber-500/80 text-amber-100 shadow-md'
                          : 'bg-[#1b130f] border-amber-950 text-stone-300 hover:border-amber-900/60'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1.5">
                        <div className="flex items-center space-x-2">
                          <Icon className="w-4 h-4 text-amber-400" />
                          <span className="font-semibold text-sm">{zone.title}</span>
                        </div>
                        {answers.climateZone === zone.id && (
                          <CheckCircle2 className="w-4 h-4 text-amber-400" />
                        )}
                      </div>
                      <p className="text-[11px] text-amber-400/80 font-medium mb-1">{zone.subtitle}</p>
                      <p className="text-xs text-stone-400 leading-relaxed">{zone.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Elevation is optional context, not an automatic RH correction. */}
            <div className="p-5 rounded-xl bg-[#1f1511] border border-amber-950 space-y-3">
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="text-sm font-medium text-stone-200">Do you live above about 4,000 feet?</span>
                  <p className="text-xs text-stone-400">Optional context for homes in mountain regions</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button onClick={() => { update('elevationTier', 'sea_level'); update('elevationFt', 150); }} className={`p-2.5 rounded-lg border transition-all ${answers.elevationTier === 'sea_level' || answers.elevationTier === 'moderate' ? 'bg-amber-500/20 border-amber-500 text-amber-200 font-semibold' : 'bg-[#18110e] border-stone-800 text-stone-400'}`}>No or not sure</button>
                <button onClick={() => { update('elevationTier', 'high_altitude'); update('elevationFt', 5280); }} className={`p-2.5 rounded-lg border transition-all ${answers.elevationTier === 'high_altitude' || answers.elevationTier === 'extreme_altitude' ? 'bg-amber-500/20 border-amber-500 text-amber-200 font-semibold' : 'bg-[#18110e] border-stone-800 text-stone-400'}`}>Yes</button>
              </div>
              {(answers.elevationTier === 'high_altitude' || answers.elevationTier === 'extreme_altitude') && (
                <p className="text-xs text-amber-200 bg-amber-950/30 border border-amber-800/30 rounded-lg p-3">High-elevation homes are often dry. We’ll favor a dependable seal, but we won’t automatically raise the humidity level.</p>
              )}
            </div>

            {/* Central HVAC */}
            <div className="p-4 rounded-xl bg-[#1f1511] border border-amber-950 flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-stone-200">
Is this room heated or air-conditioned?
                </span>
                <p className="text-xs text-stone-400">
Choose “yes” if the room stays comfortable most of the year
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => update('hasHVAC', true)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold border ${
                    answers.hasHVAC
                      ? 'bg-amber-500 text-stone-950 border-amber-400'
                      : 'bg-stone-900 text-stone-400 border-stone-800'
                  }`}
                >
                  Yes, usually
                </button>
                <button
                  onClick={() => update('hasHVAC', false)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold border ${
                    !answers.hasHVAC
                      ? 'bg-amber-500 text-stone-950 border-amber-400'
                      : 'bg-stone-900 text-stone-400 border-stone-800'
                  }`}
                >
                  No, it changes a lot
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Room Setup & Placement */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-amber-100 mb-2">
                Where will your humidor live?
              </h2>
              <p className="text-sm text-stone-300">
                This helps us balance looks, size, and temperature control.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  id: 'living_room',
                  title: 'Living room',
                  desc: 'Visible to guests, so appearance matters.',
                  icon: Sparkles
                },
                {
                  id: 'office_desk',
                  title: 'Office or desk',
                  desc: 'Easy to reach, with limited space.',
                  icon: Home
                },
                {
                  id: 'bedroom_closet',
                  title: 'Closet or cabinet',
                  desc: 'Out of sight in a typically dark, steady room.',
                  icon: Box
                },
                {
                  id: 'basement',
                  title: 'Basement or cellar',
                  desc: 'Often cool, but sometimes damp or unconditioned.',
                  icon: Layers
                },
                {
                  id: 'garage',
                  title: 'Garage or unfinished room',
                  desc: 'Temperature can change a lot. Check the room before choosing an electric unit.',
                  icon: ThermometerSnowflake
                },
                {
                  id: 'cigar_lounge',
                  title: 'Cigar lounge',
                  desc: 'A visible setup for a larger collection.',
                  icon: Award
                },
                {
                  id: 'travel',
                  title: 'Travel',
                  desc: 'A compact hard case for trips and days out.',
                  icon: Luggage
                }
              ].map((loc) => {
                const Icon = loc.icon;
                return (
                  <button
                    key={loc.id}
                    onClick={() => update('roomPlacement', loc.id as RoomPlacement)}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      answers.roomPlacement === loc.id
                        ? 'bg-amber-600/20 border-amber-500/80 text-amber-100 shadow-md'
                        : 'bg-[#1b130f] border-amber-950 text-stone-300 hover:border-amber-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-amber-400" />
                        <span className="font-semibold text-sm">{loc.title}</span>
                      </div>
                      {answers.roomPlacement === loc.id && (
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      )}
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">{loc.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Control & Technology */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-amber-100 mb-2">
How hands-on do you want to be?
              </h2>
              <p className="text-sm text-stone-300">
                Pick the option that feels easiest to live with. You can always change your answer later.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  id: 'set_and_forget',
                  title: 'Keep it simple',
                  desc: 'A tight container and humidity packs, checked from time to time.',
                  icon: Shield
                },
                {
                  id: 'smart_electric',
                  title: 'Control the temperature',
                  desc: 'An electric cabinet for a room that runs warm or cold.',
                  icon: Zap
                },
                {
                  id: 'traditional_wood',
                  title: 'Classic wood humidor',
                  desc: 'Traditional look and feel, with a little more setup and checking.',
                  icon: Sparkles
                },
                {
                  id: 'any',
                  title: 'I’m not sure',
                  desc: 'Choose the best balance of protection, cost, and convenience for me.',
                  icon: Compass
                }
              ].map((ctrl) => {
                const Icon = ctrl.icon;
                return (
                  <button
                    key={ctrl.id}
                    onClick={() => update('controlPreference', ctrl.id as ControlPreference)}
                    className={`p-5 rounded-xl text-left border transition-all ${
                      answers.controlPreference === ctrl.id
                        ? 'bg-amber-600/20 border-amber-500/80 text-amber-100 shadow-md'
                        : 'bg-[#1b130f] border-amber-950 text-stone-300 hover:border-amber-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-5 h-5 text-amber-400" />
                        <span className="font-semibold text-sm">{ctrl.title}</span>
                      </div>
                      {answers.controlPreference === ctrl.id && (
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      )}
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">{ctrl.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: Build vs Buy & Budget */}
        {step === 5 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-amber-100 mb-2">
Would you rather buy one or build one?
              </h2>
              <p className="text-sm text-stone-300">
                We can recommend a finished humidor, a simple DIY setup, or show both side by side.
              </p>
            </div>

            {/* Build vs Buy Radio options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  id: 'compare_both',
                  title: 'Show me both (recommended)',
                  desc: 'Compare the best ready-made option with a practical DIY alternative.'
                },
                {
                  id: 'buy_turnkey',
                  title: 'Buy a finished humidor',
                  desc: 'I want a ready-made product with little or no assembly.'
                },
                {
                  id: 'build_diy',
                  title: 'Build a simple setup',
                  desc: 'I’m comfortable assembling a container, cooler, or converted cabinet.'
                },
                {
                  id: 'best_value',
                  title: 'Give me the best value',
                  desc: 'Prioritize storage capacity and reliability over appearance.'
                }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => update('buildPreference', opt.id as BuildPreference)}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    answers.buildPreference === opt.id
                      ? 'bg-amber-600/20 border-amber-500/80 text-amber-100 shadow-md'
                      : 'bg-[#1b130f] border-amber-950 text-stone-300 hover:border-amber-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-sm">{opt.title}</span>
                    {answers.buildPreference === opt.id && (
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    )}
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">{opt.desc}</p>
                </button>
              ))}
            </div>

            {/* Budget Slider */}
            <div className="p-5 rounded-xl bg-[#1f1511] border border-amber-950 space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <label className="text-sm font-medium text-stone-200">
                    Maximum budget
                  </label>
                  <p className="text-xs text-stone-400">Include the humidor and humidity control</p>
                </div>
                <span className="text-2xl font-bold text-amber-400 font-serif">
                  ${answers.budgetMax}
                </span>
              </div>
              <input
                type="range"
                min="35"
                max="800"
                step="15"
                value={answers.budgetMax}
                onChange={(e) => update('budgetMax', Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-900 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-stone-400">
                <span>$35</span>
                <span>$100</span>
                <span>$250</span>
                <span>$500+</span>
              </div>
            </div>

            {/* Aesthetics Importance (1 to 5) */}
            <div className="p-5 rounded-xl bg-[#1f1511] border border-amber-950 space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <label className="text-sm font-medium text-stone-200">
                    How much does the look matter?
                  </label>
                  <p className="text-xs text-stone-400">
                    {answers.importanceOfAesthetics <= 2 && 'Function comes first'}
                    {answers.importanceOfAesthetics === 3 && 'Neat and presentable'}
                    {answers.importanceOfAesthetics >= 4 && 'It should look good on display'}
                  </p>
                </div>
                <span className="text-lg font-bold text-amber-300 font-serif">
                  {answers.importanceOfAesthetics} / 5
                </span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => update('importanceOfAesthetics', num)}
                    className={`flex-1 py-2 rounded-lg border text-sm font-bold transition-all ${
                      answers.importanceOfAesthetics === num
                        ? 'bg-amber-500 text-stone-950 border-amber-400'
                        : 'bg-[#18110e] border-stone-800 text-stone-400 hover:border-amber-900'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 pt-6 border-t border-amber-950 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              step === 1
                ? 'opacity-0 pointer-events-none'
                : 'text-stone-300 bg-stone-900 hover:bg-stone-800 border border-stone-800'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <button
            onClick={handleNext}
            className="flex items-center space-x-2 px-7 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-tobacco-500 hover:from-amber-500 hover:to-tobacco-400 text-stone-950 shadow-lg shadow-amber-950/50 transition-all transform hover:scale-[1.02]"
          >
            <span>{step === totalSteps ? 'Show my matches' : 'Continue'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
