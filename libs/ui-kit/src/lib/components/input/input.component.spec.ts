import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let fixture: ComponentFixture<InputComponent>;
  let component: InputComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an <input> by default', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('input')).not.toBeNull();
    expect(el.querySelector('textarea')).toBeNull();
  });

  it('should render a <textarea> when type is textarea', () => {
    fixture.componentRef.setInput('type', 'textarea');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('textarea')).not.toBeNull();
    expect(el.querySelector('input')).toBeNull();
  });

  it('should apply error styling when hasError is true', () => {
    fixture.componentRef.setInput('hasError', true);
    fixture.detectChanges();
    const input = (fixture.nativeElement as HTMLElement).querySelector('input');
    expect(input?.className).toContain('border-danger-500');
  });

  it('should write value via ControlValueAccessor', () => {
    component.writeValue('hello');
    expect(component.value()).toBe('hello');
  });

  it('should treat null as empty string in writeValue', () => {
    component.writeValue(null);
    expect(component.value()).toBe('');
  });

  it('should disable via setDisabledState', () => {
    component.setDisabledState(true);
    expect(component.isDisabled()).toBe(true);
    component.setDisabledState(false);
    expect(component.isDisabled()).toBe(false);
  });

  it('should emit valueChange and call onChange on input event', () => {
    const spy = jest.fn();
    component.registerOnChange(spy);

    const inputEl = (fixture.nativeElement as HTMLElement).querySelector('input');
    if (inputEl) {
      inputEl.value = 'test value';
      inputEl.dispatchEvent(new Event('input'));
    }

    expect(spy).toHaveBeenCalledWith('test value');
    expect(component.value()).toBe('test value');
  });
});
