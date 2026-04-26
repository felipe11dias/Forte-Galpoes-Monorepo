export type LogoVariant = 'horizontal' | 'vertical' | 'mark' | 'monogram';
export type LogoTone = 'color' | 'light' | 'mono-dark' | 'mono-light';

export interface LogoAsset {
  variant: LogoVariant;
  tone: LogoTone;
  path: string;
  alt: string;
  width: number;
  height: number;
}

export const logoAssets: LogoAsset[] = [
  {
    variant: 'horizontal',
    tone: 'color',
    path: 'assets/logo-horizontal.svg',
    alt: 'Forte Galpões',
    width: 320,
    height: 64,
  },
  {
    variant: 'horizontal',
    tone: 'light',
    path: 'assets/logo-horizontal-light.svg',
    alt: 'Forte Galpões',
    width: 320,
    height: 64,
  },
  {
    variant: 'vertical',
    tone: 'color',
    path: 'assets/logo-vertical.svg',
    alt: 'Forte Galpões',
    width: 160,
    height: 120,
  },
  {
    variant: 'mark',
    tone: 'color',
    path: 'assets/brandmark.svg',
    alt: 'Forte Galpões — símbolo',
    width: 64,
    height: 64,
  },
  {
    variant: 'monogram',
    tone: 'color',
    path: 'assets/monogram.svg',
    alt: 'FG',
    width: 64,
    height: 64,
  },
  {
    variant: 'horizontal',
    tone: 'mono-dark',
    path: 'assets/logo-mono-dark.svg',
    alt: 'Forte Galpões',
    width: 320,
    height: 64,
  },
  {
    variant: 'horizontal',
    tone: 'mono-light',
    path: 'assets/logo-mono-light.svg',
    alt: 'Forte Galpões',
    width: 320,
    height: 64,
  },
];

export function getLogo(variant: LogoVariant, tone: LogoTone): LogoAsset | undefined {
  return logoAssets.find((a) => a.variant === variant && a.tone === tone);
}

export const brandMeta = {
  name: 'Forte Galpões',
  founder: 'Mauricio Mac Dowell',
  tagline: 'Fundações sólidas para grandes negócios.',
  whatsapp: 'https://wa.me/5585987209815',
  phone: '(85) 98720-9815',
  email: 'mamaucar@hotmail.com',
  since: 1985,
} as const;
