import type { Meta, StoryObj } from '@storybook/angular';
import { BrandLogoComponent } from './brand-logo.component';

const meta: Meta<BrandLogoComponent> = {
  title: 'Brand/BrandLogo',
  component: BrandLogoComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['horizontal', 'vertical', 'mark', 'monogram'],
    },
    tone: {
      control: 'select',
      options: ['color', 'light', 'mono-dark', 'mono-light'],
    },
    width: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<BrandLogoComponent>;

export const HorizontalColor: Story = {
  args: { variant: 'horizontal', tone: 'color', width: 280 },
};

export const HorizontalLight: Story = {
  args: { variant: 'horizontal', tone: 'light', width: 280 },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Vertical: Story = {
  args: { variant: 'vertical', tone: 'color' },
};

export const Brandmark: Story = {
  args: { variant: 'mark', tone: 'color', width: 80 },
};

export const Monogram: Story = {
  args: { variant: 'monogram', tone: 'color', width: 64 },
};

export const MonoOnDark: Story = {
  args: { variant: 'horizontal', tone: 'mono-light', width: 280 },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
