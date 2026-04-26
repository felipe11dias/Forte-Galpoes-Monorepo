/**
 * Forte Galpões — Z-Index Tokens
 *
 * Escala de z-index para controle de empilhamento visual.
 * Valores semânticos garantem previsibilidade em toda a aplicação.
 */
export const zIndexTokens = {
  /** Fluxo padrão */
  auto: 'auto',
  /** Base — conteúdo normal */
  '0': '0',
  /** Conteúdo elevado levemente (sticky headers pequenos) */
  '10': '10',
  '20': '20',
  '30': '30',
  '40': '40',
  /** Máximo Tailwind padrão */
  '50': '50',
  // ─── Componentes de UI ───────────────────────────────────────────────────
  /** Dropdowns e selects */
  dropdown: '1000',
  /** Elementos sticky (headers fixos ao rolar) */
  sticky: '1100',
  /** Elementos fixed (barra de navegação fixa) */
  fixed: '1200',
  /** Overlay / backdrop de modal */
  overlay: '1300',
  /** Modais e drawers */
  modal: '1400',
  /** Popovers, datepickers */
  popover: '1500',
  /** Toasts / notificações */
  toast: '1600',
  /** Tooltips */
  tooltip: '1700',
} as const;

export type ZIndexToken = keyof typeof zIndexTokens;
export type ZIndexValue = (typeof zIndexTokens)[ZIndexToken];
