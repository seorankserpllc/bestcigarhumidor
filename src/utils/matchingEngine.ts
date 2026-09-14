import type { QuizAnswers, RecommendationResult, HumidorCategory, AmazonProduct } from '../types/humidor';
import { AMAZON_PRODUCTS } from '../data/products';
import { DIY_BLUEPRINTS } from '../data/blueprints';
import { calculateClimateAdjustment } from './climateCalculator';

export function runHumidorRecommendationEngine(answers: QuizAnswers): RecommendationResult {
  const scores: Record<HumidorCategory, number> = {
    tupperdor: 50,
    acrylic: 45,
    desktop_wood: 45,
    electric_wineador: 40,
    coolidor: 35,
    cabinet: 20,
    travel_case: 20,
  };

  const whyThisChoice: string[] = [];
  const targetCapacity = Math.max(answers.currentSticks * 1.5, answers.expectedGrowth);

  // 1. Mobile & Travel check
  if (answers.roomPlacement === 'travel' || answers.smokingFrequency === 'occasional' && targetCapacity <= 15) {
    scores.travel_case += 60;
    whyThisChoice.push('You plan to take cigars with you, so a compact hard travel case is the clearest fit.');
  }

  // 2. Capacity & Format Scoring
  if (targetCapacity <= 30) {
    scores.acrylic += 30;
    scores.tupperdor += 25;
    scores.desktop_wood += 25;
    scores.travel_case += 15;
    scores.coolidor -= 30;
    scores.cabinet -= 40;
    scores.electric_wineador -= 15;
    whyThisChoice.push(`With room for about ${Math.round(targetCapacity)} cigars, a compact humidor or tight storage container should give you enough space without being oversized.`);
  } else if (targetCapacity <= 90) {
    scores.tupperdor += 35;
    scores.desktop_wood += 35;
    scores.acrylic += 30;
    scores.electric_wineador += 15;
    scores.coolidor -= 15;
    scores.cabinet -= 35;
    whyThisChoice.push(`For 30–90 cigars, a medium airtight container, acrylic humidor, or wood desktop humidor offers useful space without taking over the room.`);
  } else if (targetCapacity <= 250) {
    scores.electric_wineador += 40;
    scores.coolidor += 35;
    scores.desktop_wood += 15; // Only large units fit 100+
    scores.tupperdor += 20;
    scores.cabinet -= 10;
    scores.acrylic -= 20;
    whyThisChoice.push(`A collection of about ${Math.round(targetCapacity)} cigars needs more room than most desktop boxes, so a larger cabinet, electric humidor, or cooler setup makes more sense.`);
  } else if (targetCapacity <= 600) {
    scores.coolidor += 45;
    scores.electric_wineador += 45;
    scores.cabinet += 25;
    scores.desktop_wood -= 30;
    scores.acrylic -= 40;
    scores.tupperdor -= 20;
    whyThisChoice.push(`A collection of 250–600 cigars needs substantial shelf space. Larger electric humidors, cabinets, and cooler setups are easier to organize.`);
  } else {
    // 600+ sticks
    scores.cabinet += 55;
    scores.coolidor += 40;
    scores.electric_wineador += 25;
    scores.desktop_wood -= 50;
    scores.tupperdor -= 40;
    whyThisChoice.push(`More than 600 cigars calls for dedicated storage, such as a large cabinet or multiple high-capacity containers.`);
  }

  // Factory boxes vs singles
  if (answers.storageFormat === 'boxes' || answers.storageFormat === 'both') {
    scores.coolidor += 30;
    scores.electric_wineador += 25;
    scores.cabinet += 30;
    scores.desktop_wood -= 25;
    scores.acrylic -= 25;
    whyThisChoice.push('Full cigar boxes need deeper, flatter shelf space than most desktop humidors provide.');
  }

  // 3. Room climate scoring. Elevation is context, not an automatic RH correction.
  if (answers.climateZone === 'humid_subtropical' || answers.climateZone === 'tropical') {
    scores.electric_wineador += 35;
    if (!answers.hasHVAC) {
      scores.electric_wineador += 30;
      whyThisChoice.push('Your room may stay warm for long periods, so a temperature-controlled humidor is worth considering. Check the model’s operating range before buying.');
    }
  } else if (answers.climateZone === 'arid_desert') {
    scores.tupperdor += 30;
    scores.acrylic += 25;
    scores.electric_wineador += 20;
    scores.desktop_wood -= 20;
    whyThisChoice.push('Dry indoor air makes a dependable gasket especially useful and reduces how often humidity control needs attention.');
  }

  // 4. Room Placement & Temperature
  if (answers.roomPlacement === 'garage') {
    scores.electric_wineador += 40;
    scores.coolidor += 35;
    scores.desktop_wood -= 40;
    scores.acrylic -= 30;
    whyThisChoice.push('Because garage temperatures can swing widely, verify the room range first and choose a suitably rated insulated or temperature-controlled option.');
  } else if (answers.roomPlacement === 'living_room' || answers.roomPlacement === 'cigar_lounge') {
    if (answers.importanceOfAesthetics >= 4) {
      scores.desktop_wood += 30;
      scores.cabinet += 25;
      scores.acrylic += 15;
      scores.electric_wineador += 20;
      scores.tupperdor -= 30;
      scores.coolidor -= 30;
      whyThisChoice.push('Because the humidor will be on display, the recommendation gives more weight to furniture-quality wood, acrylic, or a finished cabinet.');
    }
  }

  // 5. Tech & Control Preferences
  if (answers.controlPreference === 'smart_electric') {
    scores.electric_wineador += 40;
    scores.cabinet += 20;
  } else if (answers.controlPreference === 'set_and_forget') {
    scores.tupperdor += 35;
    scores.acrylic += 30;
    scores.coolidor += 25;
    whyThisChoice.push('You prefer a low-maintenance setup, so the recommendation favors a tight gasket and simple humidity packs.');
  }

  // 6. Build vs Buy Orientation
  if (answers.buildPreference === 'build_diy' || answers.buildPreference === 'best_value') {
    scores.tupperdor += 45;
    scores.coolidor += 45;
    scores.desktop_wood -= 15;
    whyThisChoice.push('You prefer value or a DIY route, so the recommendation favors simple containers and coolers with dependable gasket seals.');
  } else if (answers.buildPreference === 'buy_turnkey') {
    scores.desktop_wood += 20;
    scores.electric_wineador += 20;
    scores.acrylic += 15;
    scores.tupperdor -= 20;
    scores.coolidor -= 20;
  }

  // 7. Budget Filter / Impact
  if (answers.budgetMax < 75) {
    scores.tupperdor += 50;
    scores.acrylic += 20;
    scores.electric_wineador -= 50;
    scores.cabinet -= 90;
    scores.desktop_wood -= 20;
  } else if (answers.budgetMax < 180) {
    scores.tupperdor += 30;
    scores.desktop_wood += 25;
    scores.acrylic += 25;
    scores.coolidor += 30;
    scores.electric_wineador += 10;
    scores.cabinet -= 70;
  } else if (answers.budgetMax >= 400) {
    scores.electric_wineador += 25;
    scores.cabinet += 30;
  }

  // Rank categories
  const sortedCategories = (Object.keys(scores) as HumidorCategory[]).sort(
    (a, b) => scores[b] - scores[a]
  );

  const primaryArchetype = sortedCategories[0];
  const alternativeArchetype = sortedCategories[1];

  // Calculate climate analysis
  const climateAnalysis = calculateClimateAdjustment(
    answers.climateZone,
    answers.elevationTier,
    answers.roomPlacement,
    primaryArchetype,
    answers.hasHVAC
  );

  // Ready-made products: prioritize budget fit, usable capacity, rating, and review depth.
  const recommendedBuyProducts = AMAZON_PRODUCTS.filter(
    p => p.category === primaryArchetype || (primaryArchetype === 'tupperdor' && p.category === 'acrylic')
  ).sort((a, b) => {
    const aBudgetFit = a.price <= answers.budgetMax ? 1 : 0;
    const bBudgetFit = b.price <= answers.budgetMax ? 1 : 0;
    if (aBudgetFit !== bBudgetFit) return bBudgetFit - aBudgetFit;
    const aCapacityFit = a.capacitySticks >= targetCapacity ? 1 : 0;
    const bCapacityFit = b.capacitySticks >= targetCapacity ? 1 : 0;
    if (aCapacityFit !== bCapacityFit) return bCapacityFit - aCapacityFit;
    if (a.rating !== b.rating) return b.rating - a.rating;
    return b.reviewCount - a.reviewCount;
  }).slice(0, 3);

  if (recommendedBuyProducts.length === 0) {
    recommendedBuyProducts.push(...AMAZON_PRODUCTS.filter(p => p.category === 'desktop_wood').slice(0, 2));
  }

  // Recommended DIY Blueprint
  let recommendedDIYBlueprint = DIY_BLUEPRINTS.find(b => b.category === primaryArchetype);
  if (!recommendedDIYBlueprint) {
    if (targetCapacity > 150) {
      recommendedDIYBlueprint = DIY_BLUEPRINTS.find(b => b.id === 'blueprint-coolidor-marine');
    } else {
      recommendedDIYBlueprint = DIY_BLUEPRINTS.find(b => b.id === 'blueprint-tupperdor-7l');
    }
  }

  // Essential accessories tailored to recommendation
  const essentialAccessories: AmazonProduct[] = [];
  
  // 1. Right Boveda Pack based on climate analysis
  const targetBovedaId = `boveda-${climateAnalysis.recommendedBovedaRH}-brick`;
  const matchedBoveda = AMAZON_PRODUCTS.find(p => p.id === targetBovedaId) || AMAZON_PRODUCTS.find(p => p.id === 'boveda-65-brick')!;
  essentialAccessories.push(matchedBoveda);

  // 2. Hygrometer (Smart Bluetooth or Wi-Fi)
  if (answers.roomPlacement === 'garage' || answers.smokingFrequency === 'collector') {
    const wifiGauge = AMAZON_PRODUCTS.find(p => p.id === 'govee-wifi-hygrometer')!;
    essentialAccessories.push(wifiGauge);
  } else {
    const btGauge = AMAZON_PRODUCTS.find(p => p.id === 'govee-bluetooth-hygrometer')!;
    essentialAccessories.push(btGauge);
  }

  // 3. Seasoning kit if wooden
  if (primaryArchetype === 'desktop_wood' || primaryArchetype === 'cabinet') {
    const seasoning = AMAZON_PRODUCTS.find(p => p.id === 'boveda-84-seasoning')!;
    essentialAccessories.push(seasoning);
  }

  // 4. Precision cutter
  const cutter = AMAZON_PRODUCTS.find(p => p.id === 'colibri-v-cut')!;
  essentialAccessories.push(cutter);

  // Build vs Buy Verdict
  const buyAvgCost = recommendedBuyProducts[0]?.price || 150;
  const buildAvgCost = recommendedDIYBlueprint?.estimatedCost || 55;
  const costDiff = Math.max(0, buyAvgCost - buildAvgCost);

  const verdictSummary = primaryArchetype === 'tupperdor' || primaryArchetype === 'coolidor' || answers.buildPreference === 'build_diy'
    ? `A simple ${recommendedDIYBlueprint?.title} may save about ${costDiff.toFixed(0)} compared with the ready-made option.`
    : `A ready-made ${recommendedBuyProducts[0]?.name || 'humidor'} best matches your preference for appearance and convenience. The DIY option may save about ${costDiff.toFixed(0)}.`;

  return {
    primaryArchetype,
    primaryMatchScore: Math.min(98, Math.max(72, Math.round(scores[primaryArchetype]))),
    alternativeArchetype,
    whyThisChoice: Array.from(new Set(whyThisChoice)).slice(0, 4),
    climateAnalysis,
    recommendedBuyProducts,
    recommendedDIYBlueprint,
    essentialAccessories,
    buildVsBuyVerdict: {
      buyPros: [
        'Finished appearance that is ready to display',
        'Included trays and controls vary by model',
        'Little or no assembly, with manufacturer support'
      ],
      buildPros: [
        `Save up to $${costDiff.toFixed(0)} on upfront equipment costs`,
        'A dependable gasket seal with fewer moving parts',
        'Modularity: easily expand by adding another container or cooler as collection grows'
      ],
      costDifference: costDiff,
      verdictSummary
    }
  };
}
