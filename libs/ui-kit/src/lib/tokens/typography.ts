/**
 * Forte Galpões — Typography Tokens
 *
 * Tokens semânticos de tipografia prontos para uso em componentes.
 * Escala alinhada com Tailwind CSS defaults.
 */

/** Tokens de tipografia semânticos para uso em componentes. */
export const typographyTokens = {
  /** Título principal de página (hero, H1) */
  display: {
    fontSize: '3.75rem', // 6xl
    lineHeight: '1',
    fontWeight: '700',
    letterSpacing: '-0.025em',
  },
  /** Título de seção (H2) */
  h1: {
    fontSize: '3rem', // 5xl
    lineHeight: '1',
    fontWeight: '700',
    letterSpacing: '-0.025em',
  },
  /** Título de subseção (H3) */
  h2: {
    fontSize: '2.25rem', // 4xl
    lineHeight: '2.5rem',
    fontWeight: '700',
    letterSpacing: '-0.025em',
  },
  h3: {
    fontSize: '1.875rem', // 3xl
    lineHeight: '2.25rem',
    fontWeight: '600',
    letterSpacing: '-0.025em',
  },
  h4: {
    fontSize: '1.5rem', // 2xl
    lineHeight: '2rem',
    fontWeight: '600',
    letterSpacing: '0em',
  },
  h5: {
    fontSize: '1.25rem', // xl
    lineHeight: '1.75rem',
    fontWeight: '600',
    letterSpacing: '0em',
  },
  h6: {
    fontSize: '1rem', // base
    lineHeight: '1.5rem',
    fontWeight: '600',
    letterSpacing: '0em',
  },
  /** Parágrafo (corpo de texto) */
  body: {
    fontSize: '1rem', // base
    lineHeight: '1.5rem',
    fontWeight: '400',
    letterSpacing: '0em',
  },
  /** Texto secundário / legenda */
  small: {
    fontSize: '0.875rem', // sm
    lineHeight: '1.25rem',
    fontWeight: '400',
    letterSpacing: '0em',
  },
  /** Label de form / tag / badge */
  label: {
    fontSize: '0.75rem', // xs
    lineHeight: '1rem',
    fontWeight: '500',
    letterSpacing: '0.05em',
  },
  /** Overline / caption uppercase */
  overline: {
    fontSize: '0.75rem', // xs
    lineHeight: '1rem',
    fontWeight: '600',
    letterSpacing: '0.1em',
  },
  /** Código inline / referências técnicas */
  code: {
    fontSize: '0.875rem', // sm
    lineHeight: '1.5rem',
    fontWeight: '400',
    letterSpacing: '0em',
  },
} as const;

export type TypographyTokenKey = keyof typeof typographyTokens;
export type TypographyToken = typeof typographyTokens;
