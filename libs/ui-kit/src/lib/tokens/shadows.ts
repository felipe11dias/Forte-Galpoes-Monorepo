/**
 * Forte Galpões — Shadow Tokens
 *
 * Sombras alinhadas com os defaults do Tailwind CSS.
 * Use sombras com moderação — elas comunicam elevação hierárquica.
 *
 * Hierarquia recomendada:
 *   sm      → cards, campos de formulário
 *   DEFAULT → dropdowns, tooltips
 *   md      → modais, drawers
 *   lg      → popovers, menus flutuantes
 *   xl / 2xl → painéis de destaque, hero sections
 */
export const shadowTokens = {
  /** Sem sombra */
  none: '0 0 #0000',
  /** Sombra mínima — inputs, cards discretos */
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  /** Sombra padrão — cards, panels */
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  /** Sombra média — dropdowns, selects */
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  /** Sombra grande — modais */
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  /** Sombra extra-grande — painéis elevados */
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  /** Sombra máxima — destaque hero */
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  /** Sombra interna — campos ativos/pressionados */
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

export type ShadowToken = keyof typeof shadowTokens;
export type ShadowValue = (typeof shadowTokens)[ShadowToken];
