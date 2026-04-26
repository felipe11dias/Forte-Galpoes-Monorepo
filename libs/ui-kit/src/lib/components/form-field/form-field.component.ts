import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'fg-form-field',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="fieldClasses()">
      @if (label()) {
        <label [for]="fieldId()" class="block text-body-sm font-semibold text-antracito-700 mb-1.5">
          {{ label() }}
          @if (required()) {
            <span class="text-danger-500 ml-0.5" aria-hidden="true">*</span>
          }
        </label>
      }
      <ng-content />
      @if (hint() && !error()) {
        <p class="text-caption text-aco-500 mt-1.5" [id]="hintId()">{{ hint() }}</p>
      }
      @if (error()) {
        <p
          class="text-caption text-danger-500 mt-1.5"
          [id]="errorId()"
          role="alert"
          aria-live="polite"
        >
          {{ error() }}
        </p>
      }
    </div>
  `,
  styles: [':host { display: contents; }'],
})
export class FormFieldComponent {
  readonly label = input<string>('');
  readonly fieldId = input<string>('');
  readonly hint = input<string>('');
  readonly error = input<string>('');
  readonly required = input(false);
  readonly className = input<string>('');

  readonly hintId = computed(() => `${this.fieldId()}-hint`);
  readonly errorId = computed(() => `${this.fieldId()}-error`);

  readonly fieldClasses = computed(() =>
    ['fg-form-field flex flex-col', this.className()].filter(Boolean).join(' '),
  );
}
