import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let component: ButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a <button> element', () => {
    const btn = (fixture.nativeElement as HTMLElement).querySelector('button');
    expect(btn).not.toBeNull();
  });

  it('should apply primary variant classes by default (antracito bg)', () => {
    const btn = (fixture.nativeElement as HTMLElement).querySelector('button');
    expect(btn?.className).toContain('bg-antracito-700');
  });

  it('should apply secondary variant classes (bronze border)', () => {
    fixture.componentRef.setInput('variant', 'secondary');
    fixture.detectChanges();
    const btn = (fixture.nativeElement as HTMLElement).querySelector('button');
    expect(btn?.className).toContain('border-bronze-500');
  });

  it('should apply ghost variant classes', () => {
    fixture.componentRef.setInput('variant', 'ghost');
    fixture.detectChanges();
    const btn = (fixture.nativeElement as HTMLElement).querySelector('button');
    expect(btn?.className).toContain('bg-transparent');
  });

  it('should be disabled when disabled input is true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const btn = (fixture.nativeElement as HTMLElement).querySelector('button');
    expect(btn?.disabled).toBe(true);
  });

  it('should emit fgClick on button click', () => {
    const spy = jest.fn();
    component.fgClick.subscribe(spy);

    (fixture.nativeElement as HTMLElement).querySelector('button')?.click();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should NOT emit fgClick when disabled', () => {
    const spy = jest.fn();
    component.fgClick.subscribe(spy);

    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    (fixture.nativeElement as HTMLElement).querySelector('button')?.click();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should apply full-width class when fullWidth is true', () => {
    fixture.componentRef.setInput('fullWidth', true);
    fixture.detectChanges();
    const btn = (fixture.nativeElement as HTMLElement).querySelector('button');
    expect(btn?.className).toContain('w-full');
  });
});
