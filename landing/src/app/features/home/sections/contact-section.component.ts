import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormFieldComponent, InputComponent } from '@forte-galpoes/ui-kit';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

@Component({
  selector: 'fg-contact-section',
  imports: [FormFieldComponent, InputComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contato" class="py-24 bg-antracito-700" aria-label="Contato">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <!-- Left: info -->
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <span
                class="font-display font-black text-overline tracking-widest text-bronze-400 uppercase"
              >
                Contato
              </span>
              <h2 class="font-display font-black text-h1 text-marfim-100 leading-tight">
                Vamos encontrar<br />
                <span class="text-bronze-400">seu galpão ideal</span>
              </h2>
              <p class="text-body text-aco-300 leading-relaxed">
                Descreva o que você procura — tipo de operação, área necessária, localização — e
                entro em contato rapidamente com as melhores opções disponíveis.
              </p>
            </div>

            <!-- Direct contacts -->
            <div class="flex flex-col gap-4">
              <a
                href="https://wa.me/5585987209815"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-bronze-400 rounded-md p-1 -m-1"
                aria-label="Falar no WhatsApp"
              >
                <div
                  class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    class="text-body-sm font-semibold text-marfim-100 group-hover:text-bronze-400 transition-colors"
                  >
                    (85) 98720-9815
                  </p>
                  <p class="text-caption text-aco-400">WhatsApp — resposta rápida</p>
                </div>
              </a>

              <a
                href="tel:+5585987209815"
                class="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-bronze-400 rounded-md p-1 -m-1"
                aria-label="Ligar"
              >
                <div
                  class="w-10 h-10 rounded-full bg-antracito-600 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A57340"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.48 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    class="text-body-sm font-semibold text-marfim-100 group-hover:text-bronze-400 transition-colors"
                  >
                    (85) 98720-9815
                  </p>
                  <p class="text-caption text-aco-400">Ligação direta</p>
                </div>
              </a>

              <a
                href="mailto:mamaucar@hotmail.com"
                class="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-bronze-400 rounded-md p-1 -m-1"
                aria-label="Enviar e-mail"
              >
                <div
                  class="w-10 h-10 rounded-full bg-antracito-600 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A57340"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p
                    class="text-body-sm font-semibold text-marfim-100 group-hover:text-bronze-400 transition-colors"
                  >
                    mamaucar&#64;hotmail.com
                  </p>
                  <p class="text-caption text-aco-400">E-mail</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Right: form -->
          <div class="bg-white rounded-xl p-8 shadow-elevation-3">
            @if (submitted()) {
              <div
                class="flex flex-col items-center gap-4 py-8 text-center"
                role="status"
                aria-live="polite"
              >
                <div
                  class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#16a34a"
                    stroke-width="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 class="font-display font-black text-h3 text-antracito-700">
                  Mensagem enviada!
                </h3>
                <p class="text-body-sm text-aco-600">
                  Mauricio entrará em contato em breve. Para resposta imediata, use o WhatsApp.
                </p>
                <a
                  href="https://wa.me/5585987209815"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-6 py-3 rounded-md bg-bronze-500 text-marfim-100 font-semibold text-body-sm hover:bg-cobre-500 transition-colors"
                >
                  Abrir WhatsApp
                </a>
              </div>
            } @else {
              <form
                class="flex flex-col gap-5"
                (submit)="onSubmit($event)"
                novalidate
                aria-label="Formulário de contato"
              >
                <h3 class="font-display font-black text-h3 text-antracito-700">
                  Envie uma mensagem
                </h3>

                <fg-form-field label="Nome" [required]="true" inputId="contact-name">
                  <fg-input
                    inputId="contact-name"
                    name="name"
                    type="text"
                    placeholder="Seu nome completo"
                    autocomplete="name"
                    [hasError]="nameError()"
                    (valueChange)="form.name = $event; clearError('name')"
                  />
                </fg-form-field>

                <fg-form-field
                  label="Telefone / WhatsApp"
                  [required]="true"
                  inputId="contact-phone"
                >
                  <fg-input
                    inputId="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="(85) 9 0000-0000"
                    autocomplete="tel"
                    [hasError]="phoneError()"
                    (valueChange)="form.phone = $event; clearError('phone')"
                  />
                </fg-form-field>

                <fg-form-field label="E-mail" inputId="contact-email">
                  <fg-input
                    inputId="contact-email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    autocomplete="email"
                    (valueChange)="form.email = $event"
                  />
                </fg-form-field>

                <fg-form-field
                  label="O que você precisa?"
                  [required]="true"
                  inputId="contact-message"
                >
                  <fg-input
                    inputId="contact-message"
                    name="message"
                    type="textarea"
                    placeholder="Descreva o tipo de galpão, área desejada, localização e finalidade..."
                    [rows]="4"
                    [hasError]="messageError()"
                    (valueChange)="form.message = $event; clearError('message')"
                  />
                </fg-form-field>

                <button
                  type="submit"
                  class="w-full py-3 px-6 rounded-md bg-bronze-500 text-marfim-100 font-semibold text-body hover:bg-cobre-500 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-bronze-300"
                >
                  Enviar mensagem
                </button>

                <p class="text-caption text-aco-500 text-center">
                  Preferência por resposta rápida?
                  <a
                    href="https://wa.me/5585987209815"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-bronze-500 underline hover:text-cobre-500"
                    >Use o WhatsApp</a
                  >
                </p>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  form: ContactForm = { name: '', phone: '', email: '', message: '' };

  readonly submitted = signal(false);
  readonly nameError = signal(false);
  readonly phoneError = signal(false);
  readonly messageError = signal(false);

  clearError(field: 'name' | 'phone' | 'message'): void {
    if (field === 'name') this.nameError.set(false);
    if (field === 'phone') this.phoneError.set(false);
    if (field === 'message') this.messageError.set(false);
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    let valid = true;
    if (!this.form.name.trim()) {
      this.nameError.set(true);
      valid = false;
    }
    if (!this.form.phone.trim()) {
      this.phoneError.set(true);
      valid = false;
    }
    if (!this.form.message.trim()) {
      this.messageError.set(true);
      valid = false;
    }

    if (!valid) return;

    const text = encodeURIComponent(
      `Olá Mauricio! Me chamo ${this.form.name}.\n\n${this.form.message}\n\nTelefone: ${this.form.phone}${this.form.email ? `\nE-mail: ${this.form.email}` : ''}`,
    );
    window.open(`https://wa.me/5585987209815?text=${text}`, '_blank', 'noopener,noreferrer');
    this.submitted.set(true);
  }
}
