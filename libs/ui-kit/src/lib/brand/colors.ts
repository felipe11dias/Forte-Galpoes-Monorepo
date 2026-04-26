/**
 * Forte Galpões — Brand Color Palette
 *
 * Paleta profissional gerada para corretagem industrial de imóveis.
 *
 * Primary  → Navy Steel Blue  (#1C3F73) — solidez, confiança, profissionalismo
 * Accent   → Construction Orange (#E87722) — energia, ação, chamada à ação
 * Neutral  → Industrial Gray  (#5B6B7C) — concreto, aço, equilíbrio
 * Semantic → success / warning / danger / info (compatíveis com Tailwind)
 */

// ─────────────────────────────────────────────────────────────────────────────
// Primary — Navy Steel Blue
// ─────────────────────────────────────────────────────────────────────────────

/** Escala completa de cor primária (navy steel blue). */
export const PRIMARY_COLORS = {
  '50': '#F0F4FB',
  '100': '#D8E3F4',
  '200': '#B1C8EA',
  '300': '#82A6D9',
  '400': '#5584C5',
  '500': '#3468B0',
  '600': '#295592',
  '700': '#1C3F73',
  '800': '#132C52',
  '900': '#0B1A33',
  '950': '#060D1A',
  DEFAULT: '#1C3F73',
} as const;

export type PrimaryColorScale = typeof PRIMARY_COLORS;

// ─────────────────────────────────────────────────────────────────────────────
// Accent — Construction Orange
// ─────────────────────────────────────────────────────────────────────────────

/** Escala completa de cor de acento (laranja construção). */
export const ACCENT_COLORS = {
  '50': '#FEF5EA',
  '100': '#FDE3C2',
  '200': '#FBC680',
  '300': '#F9A73D',
  '400': '#F48B1A',
  '500': '#E87722',
  '600': '#C4601A',
  '700': '#9C4B15',
  '800': '#6F360F',
  '900': '#42200A',
  '950': '#221005',
  DEFAULT: '#E87722',
} as const;

export type AccentColorScale = typeof ACCENT_COLORS;

// ─────────────────────────────────────────────────────────────────────────────
// Neutral — Industrial Gray
// ─────────────────────────────────────────────────────────────────────────────

/** Escala de neutros (cinza industrial, inspirado em concreto e aço). */
export const NEUTRAL_COLORS = {
  '50': '#F4F5F7',
  '100': '#E6E8EC',
  '200': '#CBD0D7',
  '300': '#A4AEB9',
  '400': '#7A8899',
  '500': '#5B6B7C',
  '600': '#445566',
  '700': '#334151',
  '800': '#202C38',
  '900': '#121A22',
  '950': '#080D11',
} as const;

export type NeutralColorScale = typeof NEUTRAL_COLORS;

// ─────────────────────────────────────────────────────────────────────────────
// Semantic Colors
// ─────────────────────────────────────────────────────────────────────────────

/** Cores semânticas para feedback de estado. */
export const SEMANTIC_COLORS = {
  success: {
    light: '#DCFCE7',
    DEFAULT: '#16A34A',
    dark: '#14532D',
  },
  warning: {
    light: '#FEF9C3',
    DEFAULT: '#CA8A04',
    dark: '#713F12',
  },
  danger: {
    light: '#FEE2E2',
    DEFAULT: '#DC2626',
    dark: '#7F1D1D',
  },
  info: {
    light: '#DBEAFE',
    DEFAULT: '#2563EB',
    dark: '#1E3A8A',
  },
} as const;

export type SemanticColors = typeof SEMANTIC_COLORS;

// ─────────────────────────────────────────────────────────────────────────────
// Surface Tokens
// ─────────────────────────────────────────────────────────────────────────────

/** Tokens de superfície (fundo, bordas, texto). */
export const SURFACE_COLORS = {
  background: '#FFFFFF',
  base: '#F4F5F7', // neutral-50
  elevated: '#FFFFFF',
  border: '#CBD0D7', // neutral-200
  borderSubtle: '#E6E8EC', // neutral-100
  foreground: '#121A22', // neutral-900
  foregroundMuted: '#5B6B7C', // neutral-500
} as const;

export type SurfaceColors = typeof SURFACE_COLORS;

// ─────────────────────────────────────────────────────────────────────────────
// Composite palette (Tailwind-preset compatible shape)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Paleta completa da marca Forte Galpões.
 * Estrutura compatível com `theme.extend.colors` do Tailwind CSS.
 */
export const brandColors = {
  primary: PRIMARY_COLORS,
  accent: ACCENT_COLORS,
  neutral: NEUTRAL_COLORS,
  success: SEMANTIC_COLORS.success,
  warning: SEMANTIC_COLORS.warning,
  danger: SEMANTIC_COLORS.danger,
  info: SEMANTIC_COLORS.info,
  surface: SURFACE_COLORS,
} as const;

export type BrandColors = typeof brandColors;
