import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestimonialComponent } from '@forte-galpoes/ui-kit';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

@Component({
  selector: 'fg-testimonials-section',
  imports: [TestimonialComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="depoimentos" class="py-24 bg-marfim-100" aria-label="Depoimentos">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center flex flex-col gap-4 mb-16">
          <span
            class="font-display font-black text-overline tracking-widest text-bronze-500 uppercase"
          >
            Depoimentos
          </span>
          <h2 class="font-display font-black text-h1 text-antracito-700 leading-tight">
            O que dizem<br />
            <span class="text-bronze-500">nossos clientes</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (t of testimonials; track t.author) {
            <fg-testimonial
              [quote]="t.quote"
              [author]="t.author"
              [role]="t.role"
              [initials]="t.initials"
            />
          }
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsSectionComponent {
  readonly testimonials: Testimonial[] = [
    {
      quote:
        'Mauricio foi fundamental para encontrarmos o galpão ideal para nossa operação logística em Fortaleza. Processo rápido, seguro e sem surpresas.',
      author: 'Carlos Eduardo',
      role: 'Diretor de Operações — Distribuidora CE',
      initials: 'CE',
    },
    {
      quote:
        'Precisávamos de um imóvel específico com câmara fria e altura livre para nossos equipamentos. Mauricio localizou exatamente o que precisávamos em menos de 30 dias.',
      author: 'Ana Beatriz Melo',
      role: 'Gerente de Infraestrutura — Rede Varejista',
      initials: 'AM',
    },
    {
      quote:
        'Atendimento diferenciado, transparente e com profundo conhecimento do mercado. Recomendo a qualquer empresa que precise de imóvel industrial no Ceará.',
      author: 'Ricardo Fontenele',
      role: 'CEO — Indústria de Embalagens',
      initials: 'RF',
    },
    {
      quote:
        'Já fechei três contratos com Mauricio ao longo dos anos. A confiança que ele transmite e o conhecimento que tem dos imóveis disponíveis são inigualáveis.',
      author: 'Patricia Leal',
      role: 'Investidora Imobiliária',
      initials: 'PL',
    },
    {
      quote:
        'A negociação foi conduzida com muito profissionalismo. Mauricio garantiu que todos os termos contratuais protegessem nossa empresa de forma adequada.',
      author: 'Diego Sampaio',
      role: 'Gerente Jurídico — Transportadora',
      initials: 'DS',
    },
    {
      quote:
        'Encontramos o galpão perfeito para expandir nossa fábrica. O suporte durante toda a negociação fez toda a diferença para fecharmos um ótimo negócio.',
      author: 'Marcos Oliveira',
      role: 'Sócio-fundador — Metalúrgica',
      initials: 'MO',
    },
  ];
}
