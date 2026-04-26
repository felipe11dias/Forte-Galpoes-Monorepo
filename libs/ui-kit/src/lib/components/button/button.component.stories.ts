import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  render: (args) => ({
    props: args,
    template: `<fg-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading" [fullWidth]="fullWidth">Fale com Mauricio</fg-button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: { variant: 'primary', size: 'md', disabled: false, loading: false },
};

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', size: 'md' },
};

export const Link: Story = {
  args: { variant: 'link', size: 'md' },
  render: (args) => ({
    props: args,
    template: `<fg-button [variant]="variant" [size]="size">Conheça a trajetória</fg-button>`,
  }),
};

export const Loading: Story = {
  args: { variant: 'primary', size: 'md', loading: true },
};

export const Small: Story = {
  args: { variant: 'primary', size: 'sm' },
  render: (args) => ({
    props: args,
    template: `<fg-button [variant]="variant" [size]="size">CTA Pequeno</fg-button>`,
  }),
};

export const Large: Story = {
  args: { variant: 'primary', size: 'lg' },
  render: (args) => ({
    props: args,
    template: `<fg-button [variant]="variant" [size]="size">Agende uma visita</fg-button>`,
  }),
};

export const Disabled: Story = {
  args: { variant: 'primary', size: 'md', disabled: true },
};
