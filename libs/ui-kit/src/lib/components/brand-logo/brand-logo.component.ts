import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { type LogoTone, type LogoVariant } from '../../brand';

@Component({
  selector: 'fg-brand-logo',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="fg-brand-logo inline-flex items-center"
      [class]="className()"
      [attr.aria-label]="ariaLabel()"
      role="img"
    >
      @switch (variant()) {
        @case ('horizontal') {
          <svg
            [attr.width]="resolvedWidth()"
            height="64"
            viewBox="0 0 320 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="0" y="28" width="48" height="28" rx="1.5" [attr.fill]="c.body" />
            <path d="M-4 30 L24 8 L52 30" [attr.fill]="c.body" />
            <rect x="21" y="6" width="6" height="5" rx="1" [attr.fill]="c.accent" />
            <rect x="8" y="32" width="5" height="20" rx="1" [attr.fill]="c.surface" />
            <rect x="8" y="32" width="16" height="5" rx="1" [attr.fill]="c.surface" />
            <rect x="8" y="40" width="12" height="4" rx="1" [attr.fill]="c.surface" />
            <rect x="33" y="32" width="5" height="20" rx="1" [attr.fill]="c.accent" />
            <rect x="-4" y="27" width="56" height="3" rx="1" [attr.fill]="c.accent" />
            <rect
              x="68"
              y="12"
              width="1.5"
              height="40"
              rx="0.75"
              [attr.fill]="c.divider"
              opacity="0.4"
            />
            <text
              x="80"
              y="34"
              font-family="'Barlow Condensed','Arial Narrow',sans-serif"
              font-size="28"
              font-weight="900"
              [attr.fill]="c.text"
              letter-spacing="-0.5"
            >
              FORTE
            </text>
            <text
              x="82"
              y="52"
              font-family="'Barlow Condensed','Arial Narrow',sans-serif"
              font-size="13"
              font-weight="400"
              [attr.fill]="c.sub"
              letter-spacing="3.5"
            >
              GALPÕES
            </text>
          </svg>
        }
        @case ('vertical') {
          <svg
            width="160"
            [attr.height]="resolvedWidth()"
            viewBox="0 0 160 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="56" y="20" width="48" height="28" rx="1.5" [attr.fill]="c.body" />
            <path d="M52 22 L80 0 L108 22" [attr.fill]="c.body" />
            <rect x="77" y="-2" width="6" height="5" rx="1" [attr.fill]="c.accent" />
            <rect x="64" y="24" width="5" height="20" rx="1" [attr.fill]="c.surface" />
            <rect x="64" y="24" width="16" height="5" rx="1" [attr.fill]="c.surface" />
            <rect x="64" y="32" width="12" height="4" rx="1" [attr.fill]="c.surface" />
            <rect x="89" y="24" width="5" height="20" rx="1" [attr.fill]="c.accent" />
            <rect x="52" y="19" width="56" height="3" rx="1" [attr.fill]="c.accent" />
            <rect
              x="60"
              y="55"
              width="40"
              height="1.5"
              rx="0.75"
              [attr.fill]="c.divider"
              opacity="0.35"
            />
            <text
              x="80"
              y="82"
              font-family="'Barlow Condensed','Arial Narrow',sans-serif"
              font-size="28"
              font-weight="900"
              [attr.fill]="c.text"
              text-anchor="middle"
              letter-spacing="-0.5"
            >
              FORTE
            </text>
            <text
              x="80"
              y="100"
              font-family="'Barlow Condensed','Arial Narrow',sans-serif"
              font-size="12"
              font-weight="400"
              [attr.fill]="c.sub"
              text-anchor="middle"
              letter-spacing="4"
            >
              GALPÕES
            </text>
          </svg>
        }
        @case ('mark') {
          <svg
            [attr.width]="resolvedWidth()"
            [attr.height]="resolvedWidth()"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="8" y="28" width="48" height="28" rx="1.5" [attr.fill]="c.body" />
            <path d="M4 30 L32 8 L60 30" [attr.fill]="c.body" />
            <rect x="29" y="6" width="6" height="5" rx="1" [attr.fill]="c.accent" />
            <rect x="18" y="32" width="5" height="20" rx="1" [attr.fill]="c.surface" />
            <rect x="18" y="32" width="16" height="5" rx="1" [attr.fill]="c.surface" />
            <rect x="18" y="40" width="12" height="4" rx="1" [attr.fill]="c.surface" />
            <rect x="41" y="32" width="5" height="20" rx="1" [attr.fill]="c.accent" />
            <rect x="4" y="27" width="56" height="3" rx="1" [attr.fill]="c.accent" />
          </svg>
        }
        @case ('monogram') {
          <svg
            [attr.width]="resolvedWidth()"
            [attr.height]="resolvedWidth()"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M4 10 L10 4 L54 4 L60 10 L60 54 L54 60 L10 60 L4 54 Z" [attr.fill]="c.body" />
            <rect x="12" y="16" width="6" height="32" rx="1" [attr.fill]="c.surface" />
            <rect x="12" y="16" width="16" height="6" rx="1" [attr.fill]="c.surface" />
            <rect x="12" y="27" width="12" height="5" rx="1" [attr.fill]="c.surface" />
            <path
              d="M38 16C30 16 28 22 28 32C28 42 30 48 38 48C43 48 46 45 47 42L47 32L40 32L40 37L42 37L42 41C41 42 39.5 43 38 43C33 43 33 38 33 32C33 26 33 21 38 21C41 21 42 23 43 25L48 22C46 18 43 16 38 16Z"
              [attr.fill]="c.accent"
            />
          </svg>
        }
      }
    </span>
  `,
  styles: [],
})
export class BrandLogoComponent {
  readonly variant = input<LogoVariant>('horizontal');
  readonly tone = input<LogoTone>('color');
  /** Override width (height scales proportionally per viewBox). */
  readonly width = input<number | undefined>(undefined);
  readonly className = input<string>('');

  readonly ariaLabel = computed(() => (this.variant() === 'monogram' ? 'FG' : 'Forte Galpões'));

  readonly resolvedWidth = computed(() => {
    const w = this.width();
    if (w !== undefined) return w;
    return this.variant() === 'horizontal' ? 240 : 64;
  });

  /** Resolved color palette based on tone */
  get c() {
    return this.colors();
  }

  readonly colors = computed(() => {
    const t = this.tone();
    switch (t) {
      case 'light':
        return {
          body: '#F5F2ED',
          accent: '#C89456',
          surface: '#1C2733',
          text: '#F5F2ED',
          sub: '#C89456',
          divider: '#F5F2ED',
        };
      case 'mono-dark':
        return {
          body: '#1C2733',
          accent: '#1C2733',
          surface: '#F5F2ED',
          text: '#1C2733',
          sub: '#1C2733',
          divider: '#1C2733',
        };
      case 'mono-light':
        return {
          body: '#F5F2ED',
          accent: '#F5F2ED',
          surface: '#1C2733',
          text: '#F5F2ED',
          sub: '#F5F2ED',
          divider: '#F5F2ED',
        };
      default: // 'color'
        return {
          body: '#1C2733',
          accent: '#A57340',
          surface: '#F5F2ED',
          text: '#1C2733',
          sub: '#A57340',
          divider: '#5A6A7A',
        };
    }
  });
}
