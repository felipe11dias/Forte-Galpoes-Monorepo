import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { StatComponent } from './stat.component';

describe('StatComponent', () => {
  let fixture: ComponentFixture<StatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatComponent);
    // disable animation so displayValue is set synchronously
    fixture.componentRef.setInput('animate', false);
  });

  it('should create', () => {
    fixture.componentRef.setInput('value', 42);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display the value when animation is disabled', () => {
    fixture.componentRef.setInput('value', 100);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('100');
  });

  it('should append suffix to displayed value', () => {
    fixture.componentRef.setInput('value', 15);
    fixture.componentRef.setInput('suffix', '+');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('15+');
  });

  it('should set aria-label with value and suffix', () => {
    fixture.componentRef.setInput('value', 200);
    fixture.componentRef.setInput('suffix', 'k m²');
    fixture.detectChanges();
    const span = (fixture.nativeElement as HTMLElement).querySelector('[aria-label]');
    expect(span?.getAttribute('aria-label')).toBe('200k m²');
  });

  it('should render label when provided', () => {
    fixture.componentRef.setInput('value', 50);
    fixture.componentRef.setInput('label', 'Anos de experiência');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Anos de experiência');
  });
});
