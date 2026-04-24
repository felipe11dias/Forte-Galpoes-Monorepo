import type { Meta, StoryObj } from '@storybook/angular';
import { UiKitComponent } from './ui-kit.component';
import { expect } from 'storybook/test';

const meta: Meta<UiKitComponent> = {
  component: UiKitComponent,
  title: 'UiKitComponent',
};
export default meta;

type Story = StoryObj<UiKitComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/ui-kit/gi)).toBeTruthy();
  },
};
