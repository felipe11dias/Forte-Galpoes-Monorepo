import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BrandLogoComponent } from '../brand-logo/brand-logo.component';
import { ButtonComponent } from '../button/button.component';

export interface NavLink {
  label: string;
  anchor: string;
}

const DEFAULT_LINKS: NavLink[] = [
  { label: 'Sobre', anchor: '#sobre' },
  { label: 'Especialidades', anchor: '#especialidades' },
  { label: 'Portfólio', anchor: '#portfolio' },
  { label: 'Depoimentos', anchor: '#depoimentos' },
  { label: 'Contato', anchor: '#contato' },
];

@Component({
  selector: 'fg-navbar',
  imports: [BrandLogoComponent, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="fg-navbar fixed inset-x-0 top-0 z-40 transition-all duration-300"
      [class.bg-marfim-100]="scrolled()"
      [class.bg-transparent]="!scrolled()"
      [class.shadow-elevation-2]="scrolled()"
      role="banner"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          class="flex items-center justify-between h-16 lg:h-20"
          aria-label="Navegação principal"
        >
          <!-- Logo -->
          <a
            href="/"
            aria-label="Forte Galpões — página inicial"
            class="flex-shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-500 rounded"
          >
            <fg-brand-logo
              variant="horizontal"
              [tone]="scrolled() ? 'color' : 'light'"
              [width]="200"
            />
          </a>

          <!-- Desktop links -->
          <ul class="hidden lg:flex items-center gap-8 list-none m-0 p-0" role="list">
            @for (link of links; track link.anchor) {
              <li>
                <a
                  [href]="link.anchor"
                  class="text-body-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-500 rounded-sm"
                  [class.text-marfim-100]="!scrolled()"
                  [class.hover:text-bronze-400]="!scrolled()"
                  [class.text-antracito-600]="scrolled()"
                  [class.hover:text-bronze-500]="scrolled()"
                  >{{ link.label }}</a
                >
              </li>
            }
          </ul>

          <!-- Desktop CTA -->
          <div class="hidden lg:flex items-center gap-3">
            <fg-button variant="secondary" size="sm">
              <a
                href="https://wa.me/5585987209815"
                target="_blank"
                rel="noopener noreferrer"
                class="no-underline"
                aria-label="Falar com Mauricio no WhatsApp"
                >Fale com Mauricio</a
              >
            </fg-button>
          </div>

          <!-- Mobile menu button -->
          <button
            type="button"
            class="lg:hidden p-2 rounded-md focus-visible:outline-2 focus-visible:outline-bronze-500"
            [class.text-marfim-100]="!scrolled()"
            [class.text-antracito-700]="scrolled()"
            [attr.aria-expanded]="menuOpen()"
            aria-label="Abrir menu de navegação"
            (click)="toggleMenu()"
          >
            @if (menuOpen()) {
              <!-- X icon -->
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            } @else {
              <!-- Hamburger icon -->
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            }
          </button>
        </nav>
      </div>

      <!-- Mobile menu drawer -->
      @if (menuOpen()) {
        <div
          class="lg:hidden bg-antracito-700 border-t border-antracito-600"
          role="dialog"
          aria-label="Menu mobile"
        >
          <nav class="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            @for (link of links; track link.anchor) {
              <a
                [href]="link.anchor"
                class="px-3 py-2.5 rounded-md text-body text-marfim-100 hover:bg-antracito-600 hover:text-bronze-400 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-bronze-400"
                (click)="closeMenu()"
                >{{ link.label }}</a
              >
            }
            <div class="pt-2 border-t border-antracito-600 mt-2">
              <a
                href="https://wa.me/5585987209815"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md bg-bronze-500 text-marfim-100 font-semibold text-body hover:bg-cobre-500 transition-colors duration-150"
                aria-label="Falar com Mauricio no WhatsApp"
                >Fale com Mauricio</a
              >
            </div>
          </nav>
        </div>
      }
    </header>
  `,
  styles: [':host { display: contents; }'],
})
export class NavbarComponent {
  private readonly platformId = inject(PLATFORM_ID);

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  readonly links = DEFAULT_LINKS;

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
