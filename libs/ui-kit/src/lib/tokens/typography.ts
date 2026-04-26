export const fontFamilies = {
  display: ['Barlow Condensed', 'Archivo Black', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  serif: ['Cormorant Garamond', 'Playfair Display', 'ui-serif', 'Georgia', 'serif'],
  sans: ['Inter', 'DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
} as const;

/** Modular scale ratio 1.25 (major third), base 16px */
export const fontSizes = {
  display: '4rem', // 64px
  h1: '3rem', // 48px
  h2: '2.25rem', // 36px
  h3: '1.75rem', // 28px
  h4: '1.375rem', // 22px
  'body-lg': '1.125rem', // 18px
  body: '1rem', // 16px
  'body-sm': '0.875rem', // 14px
  caption: '0.75rem', // 12px
  overline: '0.6875rem', // 11px
} as const;

export const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  black: '900',
} as const;

export const lineHeights = {
  tight: '1.1',
  snug: '1.25',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

export const letterSpacings = {
  tight: '-0.025em',
  normal: '0',
  wide: '0.05em',
  wider: '0.1em',
  widest: '0.2em',
} as const;

export type FontFamily = keyof typeof fontFamilies;
export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeights;
