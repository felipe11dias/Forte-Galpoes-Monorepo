/**
 * Forte Galpões — Border Radius Tokens
 *
 * Raios de borda alinhados com os defaults do Tailwind CSS.
 * Personalidade visual: clean e profissional — evitar bordas muito arredondadas.
 *
 * Padrão recomendado:
 *   sm / DEFAULT → inputs, badges, tags pequenas
 *   md / lg      → cards, botões
 *   xl / 2xl     → modais, painéis grandes
 *   full         → chips, avatares, elementos pill
 */
export const radiusTokens = {
  /** Sem arredondamento */
  none: '0px',
  /** Arredondamento mínimo (2px) — tags, chips */
  sm: '0.125rem',
  /** Arredondamento padrão (4px) */
  DEFAULT: '0.25rem',
  /** Arredondamento médio (6px) — inputs, cards pequenos */
  md: '0.375rem',
  /** Arredondamento grande (8px) — cards, botões */
  lg: '0.5rem',
  /** Extra-grande (12px) — modais, painéis */
  xl: '0.75rem',
  /** 2x extra-grande (16px) */
  '2xl': '1rem',
  /** 3x extra-grande (24px) */
  '3xl': '1.5rem',
  /** Completamente arredondado — pill, avatar */
  full: '9999px',
} as const;

export type RadiusToken = keyof typeof radiusTokens;
export type RadiusValue = (typeof radiusTokens)[RadiusToken];
