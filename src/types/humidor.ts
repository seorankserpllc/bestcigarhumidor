export type ClimateZone = 
  | 'arid_desert'       // Arizona, Nevada, West Texas (Extremely dry, rapid moisture loss)
  | 'humid_subtropical'  // Florida, Gulf Coast, Southeast (Risk of mold & tobacco beetles)
  | 'four_seasons'      // Northeast, Midwest (Winter indoor heat dries air to 15-20% RH; humid summers)
  | 'moderate'          // Pacific Northwest, coastal California
  | 'tropical';         // High heat and high humidity year-round

export type ElevationTier = 
  | 'sea_level'        // 0 - 1,500 ft (Standard atmospheric pressure)
  | 'moderate'         // 1,500 - 4,000 ft (Mild moisture acceleration)
  | 'high_altitude'    // 4,000 - 7,000 ft (Denver, Salt Lake - low pressure, fast evaporation)
  | 'extreme_altitude' // 7,000+ ft (Mexico City, Bogota, mountain towns)

export type RoomPlacement = 
  | 'living_room'       // Showcase furniture piece, constant AC/heating
  | 'office_desk'       // Compact, personal, daily access
  | 'bedroom_closet'    // Stealth, dark, stable temperature
  | 'basement'          // Cool, sometimes damp, low sunlight
  | 'garage'            // High temperature fluctuations (demands electric heating & cooling)
  | 'cigar_lounge'      // Dedicated smoking room, high capacity showpiece
  | 'travel';           // Mobile, rugged, golf bag, suitcase

export type StorageFormat = 'singles' | 'boxes' | 'both';

export type ControlPreference = 
  | 'smart_electric'    // Thermoelectric/compressor, active heating & cooling
  | 'set_and_forget'    // Airtight + Boveda packs (Zero maintenance)
  | 'traditional_wood'  // Spanish cedar artisan craftsmanship, analog/digital
  | 'any';

export type BuildPreference = 
  | 'buy_turnkey'       // Ready to unbox and display
  | 'build_diy'         // Maximizing value, DIY builder
  | 'compare_both'      // Show me side-by-side
  | 'best_value';       // Lowest cost per stick capacity

export interface QuizAnswers {
  currentSticks: number;
  expectedGrowth: number;       // Projected count in 1-2 years
  storageFormat: StorageFormat;
  smokingFrequency: 'daily' | 'few_a_week' | 'weekends' | 'occasional' | 'collector';
  climateZone: ClimateZone;
  elevationTier: ElevationTier;
  elevationFt?: number;
  roomPlacement: RoomPlacement;
  hasHVAC: boolean;             // Central AC / Heating
  controlPreference: ControlPreference;
  buildPreference: BuildPreference;
  budgetMax: number;
  importanceOfAesthetics: number; // 1 (utility only) to 5 (luxury furniture)
}

export type HumidorCategory = 
  | 'travel_case'
  | 'acrylic'
  | 'desktop_wood'
  | 'electric_wineador'
  | 'coolidor'
  | 'cabinet'
  | 'tupperdor';

export interface ProductScorecard {
  sealIntegrity: number;       // Out of 10
  thermalStability: number;    // Out of 10
  humidityRetention: number;   // Out of 10
  craftsmanship: number;       // Out of 10
  valueScore: number;          // Out of 10
}

export interface RealWorldCapacity {
  coronas: number;             // ~42-44 Ring Gauge
  robustos: number;            // ~50 Ring Gauge
  torosChurchills: number;     // ~52-54 Ring Gauge
  gordos: number;              // ~60 Ring Gauge
  factoryBoxes: number;        // Full 20-25ct boxes
  notes: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
  category?: 'buying_decision' | 'maintenance' | 'capacity' | 'comparison' | 'troubleshooting';
}

export interface AmazonProduct {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: HumidorCategory | 'accessory' | 'diy_part' | 'humidification' | 'hygrometer';
  subCategory?: string;
  price: number;
  priceBracket?: '$' | '$$' | '$$$' | '$$$$' | '$$$$$' | 'budget' | 'mid' | 'premium' | 'luxury';
  priceTierFormatted?: string;
  capacitySticks: number;
  imageUrl?: string;
  asin?: string;
  amazonSearchQuery: string;
  description: string;
  highlights: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  sealRating: number; // 1 to 10
  dimensions?: string;
  material?: string;
  electricFeatures?: {
    heating: boolean;
    cooling: boolean;
    tempRange?: string;
    activeHumidity?: boolean;
  };
  scorecard?: ProductScorecard;
  realWorldCapacity?: RealWorldCapacity;
  unitSpecificSeasoning?: string[];
  whoShouldBuy?: string[];
  whoShouldAvoid?: string[];
  failureModesToWatch?: string[];
  faqs?: ProductFAQ[];
  diyAlternativeBlueprintId?: string;
  relatedGuideSlugs?: string[];
}

export interface GuideCallout {
  type: 'tip' | 'warning' | 'alert' | 'science';
  title: string;
  text: string;
}

export interface GuideSection {
  id: string;
  title: string;
  contentMarkdown: string;
  callout?: GuideCallout;
}

export type GuideVisual = 'wineador' | 'glass-top' | 'tupperdor' | 'altitude' | 'cedar' | 'travel';

export interface GuideSource {
  label: string;
  url: string;
  publisher: string;
}

export interface CigarGuide {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'selection' | 'science' | 'maintenance' | 'diy' | 'travel';
  categoryLabel: string;
  readTimeMinutes: number;
  author: string;
  authorRole: string;
  publishedDate: string;
  reviewedDate: string;
  heroVisual: GuideVisual;
  excerpt: string;
  sections: GuideSection[];
  sources: GuideSource[];
  featuredProductIds: string[];
  relatedBlueprintIds?: string[];
}

export interface DIYBlueprint {
  id: string;
  title: string;
  subtitle: string;
  category: HumidorCategory;
  capacitySticks: number;
  estimatedCost: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  buildTimeHours: number;
  sealRating: number;
  materials: {
    productId: string;
    quantity: number;
    notes?: string;
  }[];
  steps: {
    title: string;
    description: string;
    proTip?: string;
  }[];
  whyBuildThis: string;
}

export interface RecommendationResult {
  primaryArchetype: HumidorCategory;
  primaryMatchScore: number;
  alternativeArchetype?: HumidorCategory;
  whyThisChoice: string[];
  climateAnalysis: {
    elevationNote: string;
    climateNote: string;
    recommendedBovedaRH: number; // e.g., 62, 65, 69, 72
    hygrometerCalibrationNeeded: boolean;
    temperatureWarning?: string;
    moldBeetleRisk: 'Low' | 'Moderate' | 'High';
    seasonalAdvice?: string;
  };
  recommendedBuyProducts: AmazonProduct[];
  recommendedDIYBlueprint?: DIYBlueprint;
  essentialAccessories: AmazonProduct[];
  buildVsBuyVerdict: {
    buyPros: string[];
    buildPros: string[];
    costDifference: number;
    verdictSummary: string;
  };
}
