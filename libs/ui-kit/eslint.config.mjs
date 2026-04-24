import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  // Ignores globais (sem escopo de arquivo)
  ...baseConfig.filter((c) => c.ignores && !c.files),

  // Regras Angular TypeScript (escopo .ts)
  ...nx.configs['flat/angular'].map((c) => ({
    ...c,
    files: c.files ?? ['**/*.ts'],
  })),

  // Regras Angular templates (escopo .html)
  ...nx.configs['flat/angular-template'].map((c) => ({
    ...c,
    files: c.files ?? ['**/*.html'],
  })),

  // Regras base TypeScript do workspace (restrito a .ts)
  ...baseConfig
    .filter((c) => !c.ignores)
    .map((c) => ({ ...c, files: c.files ?? ['**/*.ts'] })),

  // Overrides específicos do ui-kit para TypeScript
  {
    files: ['**/*.ts'],
    rules: {
      // Seletores com prefixo fg (Forte Galpões)
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'fg', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'fg', style: 'kebab-case' },
      ],
      // Angular standalone components frequentemente têm corpo de classe vazio — válido por design
      '@typescript-eslint/no-extraneous-class': [
        'error',
        { allowWithDecorator: true },
      ],
    },
  },

  // Templates HTML
  {
    files: ['**/*.html'],
    rules: {},
  },

  // Verificação de dependências em JSON (parser isolado, sem TypeScript-requiring rules)
  {
    files: ['**/*.json'],
    plugins: { '@nx': nx },
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs,ts,cts,mts}'],
          // @nx/angular é tooling de build, não dep de runtime da lib publicada
          ignoredDependencies: ['@nx/angular'],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
];
