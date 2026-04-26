import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  output,
  signal,
} from '@angular/core';
import { type ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fg-input',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  template: `
    <div [class]="wrapperClasses()">
      @if (prefix()) {
        <span
          class="absolute left-3 top-1/2 -translate-y-1/2 text-aco-400 pointer-events-none"
          aria-hidden="true"
        >
          {{ prefix() }}
        </span>
      }
      @if (type() !== 'textarea') {
        <input
          [type]="type()"
          [id]="inputId()"
          [name]="name()"
          [placeholder]="placeholder()"
          [disabled]="isDisabled()"
          [readonly]="readonly()"
          [attr.aria-describedby]="ariaDescribedBy()"
          [attr.aria-invalid]="hasError()"
          [attr.autocomplete]="autocomplete()"
          [class]="inputClasses()"
          [value]="value()"
          (input)="onInput($event)"
          (blur)="onBlur()"
        />
      } @else {
        <textarea
          [id]="inputId()"
          [name]="name()"
          [placeholder]="placeholder()"
          [disabled]="isDisabled()"
          [readonly]="readonly()"
          [attr.aria-describedby]="ariaDescribedBy()"
          [attr.aria-invalid]="hasError()"
          [rows]="rows()"
          [class]="textareaClasses()"
          (input)="onInput($event)"
          (blur)="onBlur()"
          >{{ value() }}</textarea
        >
      }
      @if (suffix()) {
        <span
          class="absolute right-3 top-1/2 -translate-y-1/2 text-aco-400 pointer-events-none"
          aria-hidden="true"
        >
          {{ suffix() }}
        </span>
      }
    </div>
  `,
  styles: [':host { display: contents; }'],
})
export class InputComponent implements ControlValueAccessor {
  readonly inputId = input<string>('');
  readonly name = input<string>('');
  readonly type = input<'text' | 'email' | 'tel' | 'number' | 'password' | 'textarea'>('text');
  readonly placeholder = input<string>('');
  readonly readonly = input(false);
  readonly hasError = input(false);
  readonly prefix = input<string>('');
  readonly suffix = input<string>('');
  readonly rows = input(4);
  readonly autocomplete = input<string>('');
  readonly ariaDescribedBy = input<string>('');
  readonly className = input<string>('');

  readonly valueChange = output<string>();

  readonly value = signal('');
  readonly isDisabled = signal(false);

  private onChange: (v: string) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  writeValue(val: string | null): void {
    this.value.set(val ?? '');
  }

  registerOnChange(fn: (v: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.isDisabled.set(disabled);
  }

  onInput(event: Event): void {
    const val = (event.target as HTMLInputElement | HTMLTextAreaElement).value;
    this.value.set(val);
    this.onChange(val);
    this.valueChange.emit(val);
  }

  onBlur(): void {
    this.onTouched();
  }

  private baseInputClasses = [
    'w-full rounded-md border bg-white px-4 py-3',
    'font-sans text-body text-antracito-700 placeholder:text-aco-400',
    'transition-colors duration-150',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-concreto-100',
  ].join(' ');

  readonly wrapperClasses = computed(() =>
    ['relative flex w-full', this.className()].filter(Boolean).join(' '),
  );

  readonly inputClasses = computed(() => {
    const error = this.hasError();
    const hasP = this.prefix();
    const hasS = this.suffix();
    return [
      this.baseInputClasses,
      error
        ? 'border-danger-500 focus:ring-danger-300'
        : 'border-concreto-400 focus:border-bronze-500 focus:ring-bronze-200',
      hasP ? 'pl-9' : '',
      hasS ? 'pr-9' : '',
    ]
      .filter(Boolean)
      .join(' ');
  });

  readonly textareaClasses = computed(() => {
    const error = this.hasError();
    return [
      this.baseInputClasses,
      'resize-y min-h-[120px]',
      error
        ? 'border-danger-500 focus:ring-danger-300'
        : 'border-concreto-400 focus:border-bronze-500 focus:ring-bronze-200',
    ]
      .filter(Boolean)
      .join(' ');
  });
}
