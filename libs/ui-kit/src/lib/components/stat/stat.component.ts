import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'fg-stat',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="fg-stat flex flex-col items-center gap-1 text-center" [class]="className()">
      <span
        class="font-display font-black text-h2 text-antracito-700 tabular-nums"
        [attr.aria-label]="value() + suffix()"
      >
        <span aria-hidden="true">{{ displayValue() }}{{ suffix() }}</span>
      </span>
      @if (label()) {
        <span class="text-body-sm text-aco-500 font-medium uppercase tracking-wider">{{
          label()
        }}</span>
      }
    </div>
  `,
  styles: [':host { display: contents; }'],
})
export class StatComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  readonly value = input<number>(0);
  readonly suffix = input<string>('');
  readonly label = input<string>('');
  readonly animate = input(true);
  readonly duration = input(1500);
  readonly className = input<string>('');

  readonly displayValue = signal(0);

  ngOnInit() {
    if (!this.animate() || !isPlatformBrowser(this.platformId)) {
      this.displayValue.set(this.value());
      return;
    }
    this.runCounter();
  }

  private runCounter() {
    const target = this.value();
    const dur = this.duration();
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / dur, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      this.displayValue.set(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}
