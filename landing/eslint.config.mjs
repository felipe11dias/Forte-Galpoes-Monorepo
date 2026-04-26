import nx from '@nx/eslint-plugin';
import baseConfig from '../eslint.config.mjs';

export default [
  ...baseConfig.filter((c) => c.ignores && !c.files),

  ...nx.configs['flat/angular'].map((c) => ({
    ...c,
    files: c.files ?? ['**/*.ts'],
  })),

  ...nx.configs['flat/angular-template'].map((c) => ({
    ...c,
    files: c.files ?? ['**/*.html'],
  })),

  ...baseConfig
    .filter((c) => !c.ignores)
    .map((c) => ({ ...c, files: c.files ?? ['**/*.ts'] })),

  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'fg', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'fg', style: 'kebab-case' },
      ],
      '@typescript-eslint/no-extraneous-class': [
        'error',
        { allowWithDecorator: true },
      ],
    },
  },

  {
    files: ['**/*.html'],
    rules: {},
  },
];
