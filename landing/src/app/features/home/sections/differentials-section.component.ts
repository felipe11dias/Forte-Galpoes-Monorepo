import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Differential {
  title: string;
  description: string;
  svgPath: string;
}

@Component({
  selector: 'fg-differentials-section',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="diferenciais" class="py-24 bg-concreto-100" aria-label="Diferenciais">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center flex flex-col gap-4 mb-16">
          <span
            class="font-display font-black text-overline tracking-widest text-bronze-500 uppercase"
          >
            Por que escolher
          </span>
          <h2 class="font-display font-black text-h1 text-antracito-700 leading-tight">
            Fundações sólidas para<br />
            <span class="text-bronze-500">grandes negócios</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (diff of differentials; track diff.title) {
            <div
              class="flex gap-5 p-6 bg-white rounded-lg border border-concreto-300 shadow-elevation-1"
            >
              <div
                class="w-12 h-12 rounded-full bg-bronze-100 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A57340"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path [attr.d]="diff.svgPath" />
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h3 class="font-display font-black text-h4 text-antracito-700">{{ diff.title }}</h3>
                <p class="text-body-sm text-aco-600 leading-relaxed">{{ diff.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class DifferentialsSectionComponent {
  readonly differentials: Differential[] = [
    {
      title: 'Conhecimento Local Profundo',
      description:
        'Mais de 15 anos no mercado cearense significam acesso a imóveis que nunca chegam aos portais — a rede de contatos faz a diferença.',
      svgPath:
        'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    },
    {
      title: 'Atendimento Personalizado',
      description:
        'Você fala diretamente com Mauricio, não com um atendente. Do primeiro contato à assinatura, acompanhamento total do processo.',
      svgPath: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    },
    {
      title: 'Segurança Jurídica',
      description:
        'Análise criteriosa de documentação, contratos alinhados à legislação vigente e suporte em toda a negociação para proteger seu investimento.',
      svgPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    },
    {
      title: 'Carteira Exclusiva',
      description:
        'Portfólio ativo com os melhores galpões do Ceará — industrial, logístico e comercial — disponíveis para locação e venda imediata.',
      svgPath: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
    },
  ];
}
