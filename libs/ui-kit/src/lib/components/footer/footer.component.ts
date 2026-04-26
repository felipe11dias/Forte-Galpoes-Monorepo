import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrandLogoComponent } from '../brand-logo/brand-logo.component';

@Component({
  selector: 'fg-footer',
  imports: [BrandLogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="fg-footer bg-antracito-700 text-marfim-100" role="contentinfo">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <!-- Brand column -->
          <div class="flex flex-col gap-5">
            <fg-brand-logo variant="vertical" tone="light" [width]="140" />
            <p class="text-body-sm text-aco-400 leading-relaxed max-w-xs">
              Fundações sólidas para grandes negócios.
            </p>
          </div>

          <!-- Contact column -->
          <div class="flex flex-col gap-4">
            <h3
              class="font-display font-black text-overline tracking-widest text-bronze-400 uppercase"
            >
              Contato
            </h3>
            <ul class="flex flex-col gap-3 list-none m-0 p-0" role="list">
              <li>
                <a
                  href="tel:+5585987209815"
                  class="flex items-center gap-2 text-body-sm text-marfim-100 hover:text-bronze-400 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-bronze-400 rounded-sm"
                  aria-label="Ligar para Mauricio"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.48 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                  (85) 98720-9815
                </a>
              </li>
              <li>
                <a
                  href="mailto:mamaucar@hotmail.com"
                  class="flex items-center gap-2 text-body-sm text-marfim-100 hover:text-bronze-400 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-bronze-400 rounded-sm"
                  aria-label="Enviar e-mail para Mauricio"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  mamaucar&#64;hotmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5585987209815"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-body-sm text-marfim-100 hover:text-bronze-400 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-bronze-400 rounded-sm"
                  aria-label="Falar no WhatsApp com Mauricio"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
                    />
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <!-- Legal / CRECI column -->
          <div class="flex flex-col gap-4">
            <h3
              class="font-display font-black text-overline tracking-widest text-bronze-400 uppercase"
            >
              Credenciais
            </h3>
            <p class="text-body-sm text-aco-400">
              Mauricio Mac Dowell<br />
              Corretor de Imóveis
            </p>
            <p class="text-caption text-aco-500">CRECI — CE</p>
          </div>
        </div>

        <!-- Divider -->
        <div
          class="mt-12 pt-6 border-t border-antracito-600 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p class="text-caption text-aco-500 text-center sm:text-left">
            © 2025 Forte Galpões — Todos os direitos reservados.
          </p>
          <p class="text-caption text-aco-600">Fortaleza, CE — Brasil</p>
        </div>
      </div>
    </footer>
  `,
  styles: [':host { display: block; }'],
})
export class FooterComponent {}
