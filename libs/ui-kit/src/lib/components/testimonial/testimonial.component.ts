import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'fg-testimonial',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure
      class="fg-testimonial flex flex-col gap-5 p-8 bg-concreto-50 rounded-lg border border-concreto-300"
    >
      <!-- Quote mark -->
      <span class="text-h1 font-serif text-bronze-400 leading-none select-none" aria-hidden="true"
        >"</span
      >

      <blockquote class="flex-1">
        <p class="font-serif text-body-lg text-antracito-700 leading-relaxed italic">
          {{ quote() }}
        </p>
      </blockquote>

      <figcaption class="flex items-center gap-3 mt-2">
        <div
          class="w-10 h-10 rounded-full bg-antracito-700 flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <span class="font-display font-black text-body-sm text-marfim-100">
            {{ initials() }}
          </span>
        </div>
        <div>
          <p class="font-semibold text-body-sm text-antracito-700">{{ author() }}</p>
          @if (role()) {
            <p class="text-caption text-aco-500">{{ role() }}</p>
          }
        </div>
      </figcaption>
    </figure>
  `,
  styles: [':host { display: block; }'],
})
export class TestimonialComponent {
  readonly quote = input.required<string>();
  readonly author = input.required<string>();
  readonly role = input<string>('');
  readonly initials = input<string>('');
}
