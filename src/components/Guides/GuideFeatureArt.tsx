import React from 'react';
import {
  Box,
  Fan,
  Gauge,
  GlassWater,
  Leaf,
  LockKeyhole,
  Mountain,
  Plane,
  Snowflake,
  Thermometer,
  TreePine,
} from 'lucide-react';
import type { GuideVisual } from '../../types/humidor';

interface GuideFeatureArtProps {
  variant: GuideVisual;
  category: string;
  compact?: boolean;
}

const visualConfig = {
  wineador: { number: '01', label: 'CONTROLLED CLIMATE', primary: Thermometer, secondary: Snowflake, tertiary: Fan },
  'glass-top': { number: '02', label: 'SEAL DIAGNOSTICS', primary: GlassWater, secondary: Gauge, tertiary: LockKeyhole },
  tupperdor: { number: '03', label: 'AIRTIGHT STORAGE', primary: Box, secondary: LockKeyhole, tertiary: Gauge },
  altitude: { number: '04', label: 'DRY-CLIMATE STORAGE', primary: Mountain, secondary: Gauge, tertiary: Thermometer },
  cedar: { number: '05', label: 'MATERIALS GUIDE', primary: TreePine, secondary: Leaf, tertiary: Gauge },
  travel: { number: '06', label: 'TRAVEL PROTOCOL', primary: Plane, secondary: Box, tertiary: LockKeyhole },
} satisfies Record<GuideVisual, {
  number: string;
  label: string;
  primary: React.ComponentType<{ className?: string }>;
  secondary: React.ComponentType<{ className?: string }>;
  tertiary: React.ComponentType<{ className?: string }>;
}>;

export const GuideFeatureArt: React.FC<GuideFeatureArtProps> = ({ variant, category, compact = false }) => {
  const config = visualConfig[variant];
  const Primary = config.primary;
  const Secondary = config.secondary;
  const Tertiary = config.tertiary;

  return (
    <div className={`guide-feature-art ${compact ? 'guide-feature-art--compact' : ''}`} role="img" aria-label={`${config.label} — ${category}`}>
      <div className="guide-feature-art__grid" />
      <div className="guide-feature-art__glow" />
      <div className="guide-feature-art__masthead">
        <span>BEST CIGAR HUMIDOR</span>
        <span>FIELD GUIDE / {config.number}</span>
      </div>
      <div className="guide-feature-art__rule" />
      <div className="guide-feature-art__icon-stack" aria-hidden="true">
        <span className="guide-feature-art__orbit guide-feature-art__orbit--outer" />
        <span className="guide-feature-art__orbit guide-feature-art__orbit--inner" />
        <Primary className="guide-feature-art__primary" />
        <Secondary className="guide-feature-art__satellite guide-feature-art__satellite--left" />
        <Tertiary className="guide-feature-art__satellite guide-feature-art__satellite--right" />
      </div>
      <div className="guide-feature-art__footer">
        <div>
          <span className="guide-feature-art__kicker">EDITORIAL SERIES</span>
          <strong>{config.label}</strong>
        </div>
        <span className="guide-feature-art__category">{category}</span>
      </div>
    </div>
  );
};
