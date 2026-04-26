import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Specialty {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'fg-specialties-section',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="especialidades" class="py-24 bg-antracito-700" aria-label="Especialidades">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center flex flex-col gap-4 mb-16">
          <span
            class="font-display font-black text-overline tracking-widest text-bronze-400 uppercase"
          >
            Especialidades
          </span>
          <h2 class="font-display font-black text-h1 text-marfim-100 leading-tight">
            O espaço certo para<br />
            <span class="text-bronze-400">cada operação</span>
          </h2>
          <p class="text-body text-aco-400 max-w-xl mx-auto">
            Atuo em todos os segmentos de imóveis industriais e comerciais de grande porte, com
            profundo conhecimento do mercado cearense.
          </p>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (spec of specialties; track spec.title) {
            <article
              class="flex flex-col gap-4 p-6 rounded-lg bg-antracito-600 border border-antracito-500 hover:border-bronze-500 transition-colors duration-200 group"
            >
              <div
                class="w-12 h-12 rounded-md bg-antracito-700 flex items-center justify-center flex-shrink-0 group-hover:bg-bronze-500 transition-colors duration-200"
                aria-hidden="true"
              >
                <span class="text-h3 leading-none">{{ spec.icon }}</span>
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="font-display font-black text-h4 text-marfim-100">{{ spec.title }}</h3>
                <p class="text-body-sm text-aco-400 leading-relaxed">{{ spec.description }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class SpecialtiesSectionComponent {
  readonly specialties: Specialty[] = [
    {
      icon: '🏭',
      title: 'Galpões Industriais',
      description:
        'Estruturas robustas para manufatura, produção e operações industriais de médio e grande porte.',
    },
    {
      icon: '📦',
      title: 'Centros Logísticos',
      description:
        'Galpões estratégicos com fácil acesso a rodovias para distribuição, e-commerce e armazenagem.',
    },
    {
      icon: '🏗️',
      title: 'Armazéns e Depósitos',
      description:
        'Espaços versáteis para estocagem de mercadorias, com diversas opções de área e altura livre.',
    },
    {
      icon: '🔧',
      title: 'Galpões para Serviços',
      description:
        'Imóveis ideais para oficinas, concessionárias, auto centers e serviços especializados.',
    },
    {
      icon: '🌿',
      title: 'Câmaras Frias',
      description:
        'Estruturas frigorificadas para alimentos, farmacêuticos e produtos que exigem temperatura controlada.',
    },
    {
      icon: '🏢',
      title: 'Galpões Modulares',
      description:
        'Espaços configuráveis com escritório integrado, ideais para startups e operações em crescimento.',
    },
  ];
}
