import type { ClimateZone, ElevationTier, HumidorCategory, RoomPlacement } from '../types/humidor';

export interface ClimateAnalysis {
  elevationNote: string;
  climateNote: string;
  recommendedBovedaRH: number;
  hygrometerCalibrationNeeded: boolean;
  temperatureWarning?: string;
  moldBeetleRisk: 'Low' | 'Moderate' | 'High';
  recommendedEnclosureType: 'airtight_mandatory' | 'insulated_or_electric' | 'standard_wood_ok';
  seasonalAdvice: string;
}

export function calculateClimateAdjustment(
  climateZone: ClimateZone,
  elevationTier: ElevationTier,
  roomPlacement: RoomPlacement,
  humidorType: HumidorCategory,
  hasHVAC: boolean
): ClimateAnalysis {
  const isTightContainer = ['tupperdor', 'acrylic', 'travel_case'].includes(humidorType);
  const isWood = ['desktop_wood', 'cabinet'].includes(humidorType);
  let recommendedRH = isWood ? 69 : 65;
  let temperatureWarning: string | undefined;
  let moldBeetleRisk: 'Low' | 'Moderate' | 'High' = 'Low';
  let recommendedEnclosureType: ClimateAnalysis['recommendedEnclosureType'] = 'standard_wood_ok';

  const elevationNote = elevationTier === 'high_altitude' || elevationTier === 'extreme_altitude'
    ? 'You selected a high-elevation location. These homes are often dry, but elevation alone does not require a higher humidity setting. Use the stabilized reading inside the humidor.'
    : elevationTier === 'moderate'
      ? 'Moderate elevation noted. Your room temperature, room humidity, and the humidor seal matter more than elevation by itself.'
      : 'No special elevation adjustment is needed. Base your setup on the conditions in the room and the reading inside the humidor.';

  let climateNote = '';
  let seasonalAdvice = '';

  switch (climateZone) {
    case 'arid_desert':
      climateNote = 'Dry room air makes a good seal especially important. A gasketed container usually needs less attention than a drafty wood box.';
      recommendedEnclosureType = 'airtight_mandatory';
      recommendedRH = isWood ? 69 : 65;
      seasonalAdvice = 'Use enough humidity packs for the enclosure and watch the multi-day trend. Move up to a higher pack level only if a calibrated hygrometer stays low.';
      break;
    case 'humid_subtropical':
      climateNote = 'Warm, humid weather makes temperature control and avoiding over-humidification more important.';
      recommendedRH = 65;
      moldBeetleRisk = hasHVAC ? 'Moderate' : 'High';
      seasonalAdvice = 'Keep the humidor out of sun and away from warm exterior walls. Do not add more humidity just because the room feels humid.';
      if (!hasHVAC || roomPlacement === 'garage') {
        temperatureWarning = 'This space may run too warm for stable cigar storage. Choose a temperature-controlled unit rated for the room, or move the humidor indoors.';
        recommendedEnclosureType = 'insulated_or_electric';
      }
      break;
    case 'tropical':
      climateNote = 'Year-round heat and humidity make a cool, conditioned room the priority.';
      recommendedRH = 65;
      moldBeetleRisk = 'High';
      recommendedEnclosureType = 'insulated_or_electric';
      seasonalAdvice = 'Track temperature as closely as humidity and avoid storing cigars in an unconditioned room.';
      if (!hasHVAC) temperatureWarning = 'Choose a temperature-controlled unit rated for this room, or move the humidor to a cooler indoor space.';
      break;
    case 'four_seasons':
      climateNote = 'Heating and air conditioning can change indoor humidity across the year. Stability matters more than the weather outdoors.';
      recommendedRH = isWood ? 69 : 65;
      seasonalAdvice = 'Check the trend when heating season begins. A tight enclosure can reduce the effect of dry winter air.';
      break;
    case 'moderate':
      climateNote = 'A temperature-stable indoor room is suitable for most humidor styles.';
      recommendedRH = isWood ? 69 : 65;
      seasonalAdvice = 'Keep the humidor away from direct sun and vents, and check the hygrometer periodically.';
      break;
  }

  if (roomPlacement === 'garage') {
    recommendedEnclosureType = 'insulated_or_electric';
    moldBeetleRisk = 'High';
    temperatureWarning = 'Garages can exceed the operating range of both cigars and electric cabinets. Measure the hottest and coldest room temperatures and verify the product’s rated range before buying.';
  }

  return {
    elevationNote,
    climateNote,
    recommendedBovedaRH: recommendedRH,
    hygrometerCalibrationNeeded: !isTightContainer || climateZone === 'arid_desert',
    temperatureWarning,
    moldBeetleRisk,
    recommendedEnclosureType,
    seasonalAdvice,
  };
}
