# Forte Galpoes — Workspace Monorepo

Landing page institucional do corretor **Mauricio Mac Dowell** — especialista em corretagem de galpões industriais, terrenos e veículos de coleção, com mais de 40 anos de experiência no mercado.

Este repositório é um **monorepo Nx** contendo todas as aplicações e bibliotecas compartilhadas do projeto Forte Galpões.

---

## Stack

| Camada           | Tecnologia                                          |
| ---------------- | --------------------------------------------------- |
| Monorepo         | Nx 22                                               |
| Framework        | Angular LTS (v17+) — Standalone Components, Signals |
| Linguagem        | TypeScript (strict)                                 |
| Estilos          | Tailwind CSS + SCSS                                 |
| Reatividade      | RxJS                                                |
| Testes unitários | Jest + Testing Library                              |
| Testes E2E       | Playwright / Cypress                                |
| Linting          | ESLint (flat config) + @typescript-eslint/strict    |
| Formatação       | Prettier                                            |
| Git hooks        | Husky + lint-staged + commitlint                    |
| Package manager  | pnpm                                                |

---

## Primeiros passos

### Pré-requisitos

- Node.js 20.x (ver `.node-version`)
- pnpm 10.x (`npm install -g pnpm`)

### Instalação

```bash
pnpm install
```

---

## Comandos Nx

> Prefixe sempre com `pnpm` para usar a versão local do Nx.

### Executar um target em um projeto específico

```bash
pnpm nx <target> <projeto>

# Exemplos:
pnpm nx serve landing-page
pnpm nx build landing-page
pnpm nx test landing-page
pnpm nx lint landing-page
```

### Executar em todos os projetos

```bash
pnpm nx run-many --target=build --all
pnpm nx run-many --target=test --all
pnpm nx run-many --target=lint --all
```

### Executar apenas nos projetos afetados (CI)

```bash
pnpm nx affected --target=build
pnpm nx affected --target=test
```

### Visualizar o grafo de dependências

```bash
pnpm nx graph
```

---

## Gerar apps e libs

### Aplicação Angular

```bash
pnpm nx g @nx/angular:application apps/landing-page \
  --style=scss \
  --routing=true \
  --standalone=true \
  --prefix=fg
```

### Biblioteca Angular

```bash
pnpm nx g @nx/angular:library libs/ui-kit \
  --standalone=true \
  --prefix=fg \
  --importPath=@forte-galpoes/ui-kit
```

### Biblioteca utilitária (TypeScript puro)

```bash
pnpm nx g @nx/js:library libs/utils \
  --importPath=@forte-galpoes/utils
```

---

## Convenções

### Conventional Commits

Todas as mensagens de commit devem seguir o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

feat(landing-page): add hero section
fix(ui-kit): correct button hover state
chore: update dependencies
docs: improve README
```

**Tipos aceitos:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `revert`, `ci`, `build`

### Prefixo de seletores

Todos os componentes Angular usam o prefixo **`fg`**:

```typescript
@Component({ selector: 'fg-hero-section', ... })
```

### Import paths

Bibliotecas compartilhadas são importadas via path absoluto:

```typescript
import { ButtonComponent } from '@forte-galpoes/ui-kit';
import { formatCurrency } from '@forte-galpoes/utils';
```

---

## Testes

### Unitários (Jest)

```bash
# Projeto específico
pnpm nx test landing-page

# Todos os projetos
pnpm nx run-many --target=test --all

# Com cobertura
pnpm nx test landing-page --coverage
```

### E2E (Playwright/Cypress)

```bash
pnpm nx e2e landing-page-e2e
```

### Lint

```bash
pnpm nx lint landing-page
# ou todos:
pnpm lint
```

### Formatação

```bash
# Verificar
pnpm format:check

# Corrigir
pnpm format
```

---

## Tailwind CSS

O workspace possui um preset compartilhado em `tools/tailwind-workspace-preset.js`. Para usar em um app ou lib:

```js
// tailwind.config.js de cada app/lib
const workspacePreset = require('../../tools/tailwind-workspace-preset');

module.exports = {
  presets: [workspacePreset],
  content: ['./src/**/*.{html,ts}', ...createGlobPatternsForDependencies(__dirname)],
};
```

---

## Estrutura de pastas

```
forte-galpoes-workspace/
├── apps/                     # Aplicações Angular (landing-page, admin, etc.)
├── libs/                     # Bibliotecas compartilhadas
│   ├── ui-kit/               # Componentes UI reutilizáveis (Sprint 2+)
│   ├── data-access/          # Services e state management
│   └── utils/                # Funções utilitárias
├── tools/
│   └── tailwind-workspace-preset.js  # Preset Tailwind compartilhado
├── .husky/                   # Git hooks (pre-commit, commit-msg)
├── .vscode/                  # Configurações do VS Code
├── nx.json                   # Configuração do Nx (cache, targets)
├── tsconfig.base.json        # TypeScript base (strict, paths)
├── package.json              # Dependências e scripts raiz
├── pnpm-workspace.yaml       # Configuração pnpm workspaces
├── eslint.config.mjs         # ESLint flat config
├── .prettierrc               # Configuração do Prettier
├── commitlint.config.js      # Regras de Conventional Commits
└── .node-version             # Versão do Node LTS fixada
```

---

## Próximos passos (Sprint 2)

- Instalar `@nx/angular` e gerar a aplicação `landing-page`
- Criar a lib `ui-kit` com componentes base (Button, Card, Hero, etc.)
- Configurar Storybook para documentação de componentes
- Configurar Playwright para testes E2E

---

## Bibliotecas

### `@forte-galpoes/ui-kit` — Design System

> **Documentação completa:** [`libs/ui-kit/README.md`](libs/ui-kit/README.md)

Design System compartilhado com componentes Angular standalone, design tokens, ícones e diretrizes de marca.

**Importação:**

```ts
import { ButtonComponent } from '@forte-galpoes/ui-kit';
```

**Comandos Storybook:**

```bash
# Iniciar servidor de desenvolvimento do Storybook
pnpm exec nx storybook ui-kit

# Gerar bundle estático do Storybook
pnpm exec nx build-storybook ui-kit

# Servir o bundle estático localmente
pnpm exec nx static-storybook ui-kit
```

**Build & Testes da lib:**

```bash
pnpm exec nx build ui-kit       # Compila via ng-packagr → dist/libs/ui-kit
pnpm exec nx test ui-kit        # Jest
pnpm exec nx lint ui-kit        # ESLint (Angular + @typescript-eslint/strict)
```
