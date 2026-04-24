import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: ['@storybook/addon-a11y'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  /**
   * Serve os assets de marca como arquivos estáticos no Storybook.
   * Logo SVGs ficam disponíveis em: /logo/logo-*.svg
   * Favicons ficam disponíveis em: /favicon/*.svg
   */
  staticDirs: ['../src/lib/brand/assets'],
};

export default config;
