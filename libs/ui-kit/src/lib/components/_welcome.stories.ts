import { Component } from '@angular/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

/**
 * Componente placeholder para validar o pipeline do Storybook.
 * Será removido/substituído no Sprint 4 pelos componentes reais.
 */
@Component({
  selector: 'fg-welcome',
  standalone: true,
  template: `
    <div class="p-8 font-sans">
      <h1 class="text-3xl font-bold text-gray-900">ui-kit ready ✓</h1>
      <p class="mt-2 text-gray-600">
        Sprint 2 — scaffolding concluído. Tailwind + Storybook operacionais.
      </p>
    </div>
  `,
})
class WelcomeComponent {}

const meta: Meta<WelcomeComponent> = {
  title: '_Welcome',
  component: WelcomeComponent,
  decorators: [moduleMetadata({ imports: [WelcomeComponent] })],
};

export default meta;
type Story = StoryObj<WelcomeComponent>;

export const Default: Story = {};
