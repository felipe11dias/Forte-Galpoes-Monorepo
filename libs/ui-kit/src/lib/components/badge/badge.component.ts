import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';

@Component({
  selector: 'fg-badge',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span [class]="badgeClasses()" role="status">
      <ng-content />
    </span>
  `,
  styles: [':host { display: contents; }'],
})
export class BadgeComponent {
  readonly variant = input<BadgeVariant>('primary');
  readonly className = input<string>('');

  readonly badgeClasses = computed(() => {
    const base =
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-overline font-semibold uppercase tracking-wider';

    const variants: Record<BadgeVariant, string> = {
      primary: 'bg-antracito-100 text-antracito-700',
      secondary: 'bg-bronze-100 text-bronze-600',
      success: 'bg-success-50 text-success-500',
      warning: 'bg-warning-50 text-warning-500',
      danger: 'bg-danger-50 text-danger-500',
      neutral: 'bg-concreto-200 text-aco-600',
    };

    return [base, variants[this.variant()], this.className()].filter(Boolean).join(' ');
  });
}
