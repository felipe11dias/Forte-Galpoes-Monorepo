import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'fg-button',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [type]="type()"
      [disabled]="disabled() || loading()"
      [attr.aria-disabled]="disabled() || loading()"
      [attr.aria-busy]="loading()"
      [class]="buttonClasses()"
      (click)="fgClick.emit($event)"
    >
      @if (loading()) {
        <span class="fg-btn-spinner" aria-hidden="true">
          <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </span>
      }
      <ng-content />
    </button>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly fullWidth = input(false);
  readonly className = input<string>('');

  readonly fgClick = output<MouseEvent>();

  readonly buttonClasses = computed(() => {
    const base = [
      'inline-flex items-center justify-center gap-2',
      'font-sans font-semibold tracking-wide',
      'rounded-md transition-all duration-200',
      'focus-visible:outline-2 focus-visible:outline-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'select-none',
    ];

    const sizes: Record<ButtonSize, string> = {
      sm: 'px-4 py-2 text-body-sm',
      md: 'px-6 py-3 text-body',
      lg: 'px-8 py-4 text-body-lg',
    };

    const variants: Record<ButtonVariant, string> = {
      primary: [
        'bg-antracito-700 text-marfim-100',
        'hover:bg-antracito-600 active:bg-antracito-800',
        'focus-visible:outline-antracito-700',
        'shadow-elevation-1 hover:shadow-elevation-2',
      ].join(' '),
      secondary: [
        'bg-transparent text-bronze-500 border-2 border-bronze-500',
        'hover:bg-bronze-50 active:bg-bronze-100',
        'focus-visible:outline-bronze-500',
      ].join(' '),
      ghost: [
        'bg-transparent text-antracito-700',
        'hover:bg-antracito-50 active:bg-antracito-100',
        'focus-visible:outline-antracito-700',
      ].join(' '),
      link: [
        'bg-transparent text-bronze-500 underline-offset-4',
        'hover:underline hover:text-cobre-500',
        'focus-visible:outline-bronze-500',
        'p-0 rounded-none shadow-none',
      ].join(' '),
    };

    return [
      ...base,
      sizes[this.size()],
      variants[this.variant()],
      this.fullWidth() ? 'w-full' : '',
      this.className(),
    ]
      .filter(Boolean)
      .join(' ');
  });
}
