import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent, FooterComponent, WhatsAppButtonComponent } from '@forte-galpoes/ui-kit';
import { HeroSectionComponent } from './sections/hero-section.component';
import { AboutSectionComponent } from './sections/about-section.component';
import { SpecialtiesSectionComponent } from './sections/specialties-section.component';
import { DifferentialsSectionComponent } from './sections/differentials-section.component';
import { TestimonialsSectionComponent } from './sections/testimonials-section.component';
import { ContactSectionComponent } from './sections/contact-section.component';

@Component({
  selector: 'fg-home',
  imports: [
    NavbarComponent,
    FooterComponent,
    WhatsAppButtonComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SpecialtiesSectionComponent,
    DifferentialsSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded focus:bg-bronze-500 focus:text-marfim-100 focus:font-semibold"
    >
      Pular para o conteúdo
    </a>

    <fg-navbar />

    <main id="main-content">
      <fg-hero-section />
      <fg-about-section />
      <fg-specialties-section />
      <fg-differentials-section />
      <fg-testimonials-section />
      <fg-contact-section />
    </main>

    <fg-footer />
    <fg-whatsapp-button />
  `,
})
export class HomeComponent {}
