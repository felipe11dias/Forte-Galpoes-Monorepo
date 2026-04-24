/**
 * Forte Galpões — Brand Asset Paths
 *
 * Constantes com os caminhos dos assets de marca (logo, favicon).
 * Os arquivos SVG estão em `libs/ui-kit/src/lib/brand/assets/`.
 *
 * ## Como usar em um app Angular
 *
 * Adicione o glob de assets no `project.json` da aplicação:
 * ```json
 * {
 *   "glob": "**\/*",
 *   "input": "libs/ui-kit/src/lib/brand/assets",
 *   "output": "assets/fg-brand"
 * }
 * ```
 *
 * Então referencie com o base path `/assets/fg-brand`:
 * ```html
 * <img src="assets/fg-brand/logo/logo-horizontal.svg" alt="Forte Galpões" />
 * ```
 */

/** Caminho base dos assets de marca (configurável por ambiente). */
export const BRAND_ASSET_BASE = 'assets/fg-brand' as const;

/** Caminhos dos logos em suas variações. */
export const LOGO_ASSETS = {
  /** Logo horizontal completo — uso principal */
  horizontal: `${BRAND_ASSET_BASE}/logo/logo-horizontal.svg`,
  /** Logo vertical completo — redes sociais, sinalização */
  vertical: `${BRAND_ASSET_BASE}/logo/logo-vertical.svg`,
  /** Monograma FG — favicon, avatar, uso compacto */
  icon: `${BRAND_ASSET_BASE}/logo/logo-icon.svg`,
  /** Versão monocromática — impressão P&B */
  monochrome: `${BRAND_ASSET_BASE}/logo/logo-monochrome.svg`,
  /** Versão inversa — fundos navy/dark */
  inverse: `${BRAND_ASSET_BASE}/logo/logo-inverse.svg`,
} as const;

export type LogoAssetKey = keyof typeof LOGO_ASSETS;

/** Caminhos dos favicons e ícones PWA. */
export const FAVICON_ASSETS = {
  /** Favicon SVG principal (32×32 — navegadores modernos) */
  svg: `${BRAND_ASSET_BASE}/favicon/favicon.svg`,
  /** Favicon 16×16 */
  favicon16: `${BRAND_ASSET_BASE}/favicon/favicon-16x16.svg`,
  /** Favicon 32×32 */
  favicon32: `${BRAND_ASSET_BASE}/favicon/favicon-32x32.svg`,
  /** Apple Touch Icon 180×180 */
  appleTouchIcon: `${BRAND_ASSET_BASE}/favicon/apple-touch-icon.svg`,
  /** PWA Icon 192×192 (Android / Chrome) */
  icon192: `${BRAND_ASSET_BASE}/favicon/icon-192.svg`,
  /** PWA Icon 512×512 (splash screen) */
  icon512: `${BRAND_ASSET_BASE}/favicon/icon-512.svg`,
  /** Web App Manifest */
  webmanifest: `${BRAND_ASSET_BASE}/favicon/site.webmanifest`,
} as const;

export type FaviconAssetKey = keyof typeof FAVICON_ASSETS;

/** HTML snippet para configurar favicon e PWA no `<head>`. */
export const FAVICON_HEAD_HTML = `
<link rel="icon" type="image/svg+xml" href="${FAVICON_ASSETS.svg}" />
<link rel="icon" type="image/svg+xml" sizes="32x32" href="${FAVICON_ASSETS.favicon32}" />
<link rel="icon" type="image/svg+xml" sizes="16x16" href="${FAVICON_ASSETS.favicon16}" />
<link rel="apple-touch-icon" href="${FAVICON_ASSETS.appleTouchIcon}" />
<link rel="manifest" href="${FAVICON_ASSETS.webmanifest}" />
`.trim() as const;
