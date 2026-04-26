/**
 * Forte Galpões — Brand Typography
 *
 * Tipografia primária: Inter (sans-serif)
 * — Moderna, legível em todas as escalas, excelente suporte a pesos variáveis.
 * — Fonte variável: suporta pesos 100–900 e óptico 14–32.
 *
 * Para incluir via Google Fonts, use o URL em `googleFontsUrl`.
 * Para self-hosting, gere os arquivos em https://fontsource.org/fonts/inter
 */

/** URL do Google Fonts para Inter (fonte variável, todos os pesos). */
export const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap' as const;

/** Famílias de fonte da marca. */
export const FONT_FAMILIES = {
  /** Fonte principal — Inter variable */
  sans: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  /** Fonte monoespaçada (código, IDs, coordenadas) */
  mono: "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
} as const;

/** Pesos tipográficos disponíveis em Inter. */
export const FONT_WEIGHTS = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export type FontWeight = keyof typeof FONT_WEIGHTS;

/** Escala de tamanhos de fonte (alinhada com Tailwind CSS). */
export const FONT_SIZES = {
  xs: { size: '0.75rem', lineHeight: '1rem' }, //  12px / 16px
  sm: { size: '0.875rem', lineHeight: '1.25rem' }, //  14px / 20px
  base: { size: '1rem', lineHeight: '1.5rem' }, //  16px / 24px
  lg: { size: '1.125rem', lineHeight: '1.75rem' }, //  18px / 28px
  xl: { size: '1.25rem', lineHeight: '1.75rem' }, //  20px / 28px
  '2xl': { size: '1.5rem', lineHeight: '2rem' }, //  24px / 32px
  '3xl': { size: '1.875rem', lineHeight: '2.25rem' }, //  30px / 36px
  '4xl': { size: '2.25rem', lineHeight: '2.5rem' }, //  36px / 40px
  '5xl': { size: '3rem', lineHeight: '1' }, //  48px
  '6xl': { size: '3.75rem', lineHeight: '1' }, //  60px
  '7xl': { size: '4.5rem', lineHeight: '1' }, //  72px
  '8xl': { size: '6rem', lineHeight: '1' }, //  96px
  '9xl': { size: '8rem', lineHeight: '1' }, // 128px
} as const;

export type FontSizeKey = keyof typeof FONT_SIZES;

/** Altura de linha (line-height) nomeada. */
export const LINE_HEIGHTS = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

export type LineHeightKey = keyof typeof LINE_HEIGHTS;

/** Espaçamento entre letras (letter-spacing). */
export const LETTER_SPACINGS = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

export type LetterSpacingKey = keyof typeof LETTER_SPACINGS;

/**
 * Objeto consolidado de tipografia da marca.
 */
export const brandTypography = {
  googleFontsUrl: GOOGLE_FONTS_URL,
  fontFamily: FONT_FAMILIES,
  fontWeight: FONT_WEIGHTS,
  fontSize: FONT_SIZES,
  lineHeight: LINE_HEIGHTS,
  letterSpacing: LETTER_SPACINGS,
} as const;

export type BrandTypography = typeof brandTypography;
