import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent, FooterComponent, WhatsAppButtonComponent } from '@forte-galpoes/ui-kit';

@Component({
  selector: 'fg-home',
  imports: [NavbarComponent, FooterComponent, WhatsAppButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fg-navbar />

    <main id="main-content">
      <!-- Sections will be added in Phase 6 -->
      <section
        class="min-h-screen flex items-center justify-center bg-antracito-700 text-marfim-100"
      >
        <p class="font-display text-h2 font-black">Forte Galpões</p>
      </section>
    </main>

    <fg-footer />
    <fg-whatsapp-button />
  `,
})
export class HomeComponent {}
