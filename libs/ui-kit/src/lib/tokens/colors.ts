/**
 * Forte Galpões — Semantic Color Tokens
 *
 * Tokens semânticos que mapeiam a paleta de marca para intenções de uso.
 * Use esses tokens em componentes — nunca referencie cores brutas diretamente.
 *
 * Em CSS, use as variáveis `--color-*` definidas em styles.css.
 * Em TypeScript, use os valores abaixo para garantir rastreabilidade.
 */

/** Tokens de cor para texto. */
export const TEXT_COLOR_TOKENS = {
  /** Texto principal (corpo, parágrafos) */
  primary: 'var(--color-neutral-900)',
  /** Texto secundário (legendas, metadados) */
  secondary: 'var(--color-neutral-500)',
  /** Texto desabilitado */
  disabled: 'var(--color-neutral-300)',
  /** Texto em fundos escuros */
  inverse: '#FFFFFF',
  /** Texto com cor da marca */
  brand: 'var(--color-primary-700)',
  /** Texto com cor de acento */
  accent: 'var(--color-accent-500)',
  /** Link padrão */
  link: 'var(--color-primary-600)',
  /** Link visitado */
  linkVisited: 'var(--color-primary-800)',
} as const;

/** Tokens de cor para fundos/superfícies. */
export const BACKGROUND_COLOR_TOKENS = {
  /** Fundo de página */
  page: '#FFFFFF',
  /** Fundo de superfície sutil (cards, sidebars) */
  subtle: 'var(--color-neutral-50)',
  /** Fundo de marca (hero, header dark) */
  brand: 'var(--color-primary-700)',
  /** Fundo de acento (CTA, badges) */
  accent: 'var(--color-accent-500)',
  /** Overlay/backdrop de modais */
  overlay: 'rgba(18, 26, 34, 0.6)',
} as const;

/** Tokens de cor para bordas. */
export const BORDER_COLOR_TOKENS = {
  DEFAULT: 'var(--color-neutral-200)',
  subtle: 'var(--color-neutral-100)',
  strong: 'var(--color-neutral-300)',
  brand: 'var(--color-primary-200)',
  accent: 'var(--color-accent-300)',
  focus: 'var(--color-primary-500)',
} as const;

/** Tokens de cor para elementos interativos. */
export const INTERACTIVE_COLOR_TOKENS = {
  primaryBg: 'var(--color-primary-700)',
  primaryBgHover: 'var(--color-primary-600)',
  primaryBgActive: 'var(--color-primary-800)',
  accentBg: 'var(--color-accent-500)',
  accentBgHover: 'var(--color-accent-400)',
  accentBgActive: 'var(--color-accent-600)',
} as const;

/** Tokens de cor semânticos para status/feedback. */
export const STATUS_COLOR_TOKENS = {
  successBg: 'var(--color-success-light)',
  successText: 'var(--color-success)',
  warningBg: 'var(--color-warning-light)',
  warningText: 'var(--color-warning)',
  dangerBg: 'var(--color-danger-light)',
  dangerText: 'var(--color-danger)',
  infoBg: 'var(--color-info-light)',
  infoText: 'var(--color-info)',
} as const;

/** Todos os tokens de cor agrupados. */
export const colorTokens = {
  text: TEXT_COLOR_TOKENS,
  background: BACKGROUND_COLOR_TOKENS,
  border: BORDER_COLOR_TOKENS,
  interactive: INTERACTIVE_COLOR_TOKENS,
  status: STATUS_COLOR_TOKENS,
} as const;

export type ColorTokens = typeof colorTokens;
