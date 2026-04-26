import { ChangeDetectionStrategy, Component, input, computed } from '@angular/core';

export type CardVariant = 'default' | 'property' | 'testimonial' | 'service';

@Component({
  selector: 'fg-card',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article [class]="cardClasses()" [attr.aria-label]="label()">
      @if (hasImage()) {
        <div class="fg-card-image relative overflow-hidden rounded-t-lg">
          <ng-content select="[slot=image]" />
          @if (watermark()) {
            <span
              class="absolute bottom-3 right-3 font-display font-black text-xl opacity-15 select-none pointer-events-none"
              style="color: #A57340;"
              aria-hidden="true"
              >FG</span
            >
          }
        </div>
      }
      <div class="fg-card-body p-6 flex flex-col gap-3 flex-1">
        <ng-content />
      </div>
      @if (hasFooter()) {
        <div class="fg-card-footer px-6 pb-6">
          <ng-content select="[slot=footer]" />
        </div>
      }
    </article>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class CardComponent {
  readonly variant = input<CardVariant>('default');
  readonly label = input<string>('');
  readonly watermark = input(false);
  readonly hasImage = input(false);
  readonly hasFooter = input(false);
  readonly elevated = input(false);
  readonly className = input<string>('');

  readonly cardClasses = computed(() => {
    const base = [
      'fg-card bg-marfim-50 rounded-lg overflow-hidden',
      'border border-concreto-400',
      'flex flex-col',
      'transition-all duration-200',
    ];

    const variants: Record<CardVariant, string> = {
      default: '',
      property: 'hover:shadow-elevation-3 hover:-translate-y-0.5',
      testimonial: 'bg-concreto-50 border-none',
      service: 'hover:shadow-bronze hover:border-bronze-200',
    };

    return [
      ...base,
      variants[this.variant()],
      this.elevated() ? 'shadow-elevation-2' : 'shadow-elevation-1',
      this.className(),
    ]
      .filter(Boolean)
      .join(' ');
  });
}
