import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrandLogoComponent } from '@forte-galpoes/ui-kit';

@Component({
  selector: 'fg-hero-section',
  imports: [BrandLogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="inicio"
      class="relative min-h-screen flex flex-col items-center justify-center bg-antracito-700 overflow-hidden"
      aria-label="Apresentação"
    >
      <!-- Background texture overlay -->
      <div
        class="absolute inset-0 opacity-5"
        style="background-image: repeating-linear-gradient(45deg, #A57340 0, #A57340 1px, transparent 0, transparent 50%); background-size: 20px 20px;"
        aria-hidden="true"
      ></div>

      <!-- Bronze accent line top -->
      <div
        class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bronze-500 to-transparent"
        aria-hidden="true"
      ></div>

      <div
        class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8"
      >
        <!-- Logo -->
        <fg-brand-logo variant="vertical" tone="light" [width]="180" />

        <!-- Headline -->
        <div class="flex flex-col gap-4">
          <h1 class="font-display font-black text-display text-marfim-100 leading-none">
            Seu galpão ideal<br />
            <span class="text-bronze-400">em Fortaleza</span>
          </h1>
          <p class="font-serif text-body-lg text-aco-300 max-w-xl mx-auto leading-relaxed">
            Especialista em locação e venda de galpões industriais, logísticos e comerciais no
            Ceará. Atendimento personalizado com quem conhece cada metro quadrado do mercado.
          </p>
        </div>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <a
            href="https://wa.me/5585987209815"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-bronze-500 text-marfim-100 font-semibold text-body hover:bg-cobre-500 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-bronze-300"
            aria-label="Falar com Mauricio no WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
              />
            </svg>
            Falar com Mauricio
          </a>
          <a
            href="#sobre"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-aco-500 text-marfim-100 font-medium text-body hover:border-bronze-400 hover:text-bronze-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-bronze-300"
          >
            Conheça o trabalho
          </a>
        </div>

        <!-- Scroll indicator -->
        <div class="animate-bounce mt-4" aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="text-aco-500"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      <!-- Bronze accent line bottom -->
      <div
        class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bronze-500 to-transparent"
        aria-hidden="true"
      ></div>
    </section>
  `,
})
export class HeroSectionComponent {}
