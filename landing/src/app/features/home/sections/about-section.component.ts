import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatComponent } from '@forte-galpoes/ui-kit';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

@Component({
  selector: 'fg-about-section',
  imports: [StatComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="sobre" class="py-24 bg-marfim-50" aria-label="Sobre Mauricio Mac Dowell">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Text column -->
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
              <span
                class="font-display font-black text-overline tracking-widest text-bronze-500 uppercase"
              >
                Sobre
              </span>
              <h2 class="font-display font-black text-h1 text-antracito-700 leading-tight">
                Mauricio Mac Dowell
              </h2>
              <p class="text-body-sm text-aco-500 font-medium">Corretor de Imóveis — CRECI-CE</p>
            </div>

            <div class="flex flex-col gap-4">
              <p class="font-serif text-body-lg text-antracito-600 leading-relaxed">
                Com anos de atuação no mercado imobiliário comercial do Ceará, especializo-me em
                galpões industriais, logísticos e armazéns — conectando empresas aos espaços que
                impulsionam seus negócios.
              </p>
              <p class="text-body text-aco-600 leading-relaxed">
                Cada operação é tratada com atenção total: desde o primeiro contato até a assinatura
                do contrato, garantindo segurança jurídica, transparência e agilidade para
                locatários, proprietários e investidores.
              </p>
            </div>

            <a
              href="https://wa.me/5585987209815"
              target="_blank"
              rel="noopener noreferrer"
              class="self-start inline-flex items-center gap-2 px-6 py-3 rounded-md bg-antracito-700 text-marfim-100 font-semibold text-body-sm hover:bg-antracito-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-bronze-500"
              aria-label="Falar com Mauricio no WhatsApp"
            >
              Fale comigo
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <!-- Stats column -->
          <div class="grid grid-cols-2 gap-6">
            @for (stat of stats; track stat.label) {
              <div
                class="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-concreto-300 shadow-elevation-1"
              >
                <fg-stat
                  [value]="stat.value"
                  [suffix]="stat.suffix"
                  class="font-display font-black text-h1 text-bronze-500"
                />
                <p class="text-body-sm text-aco-600 mt-1">{{ stat.label }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {
  readonly stats: Stat[] = [
    { value: 15, suffix: '+', label: 'Anos de experiência' },
    { value: 200, suffix: '+', label: 'Galpões intermediados' },
    { value: 500, suffix: 'k m²', label: 'Área total negociada' },
    { value: 98, suffix: '%', label: 'Clientes satisfeitos' },
  ];
}
