# Forte Galpões — Workspace Monorepo

Landing page institucional do corretor **Mauricio Mac Dowell** — especialista em locação e venda de galpões industriais, logísticos e comerciais no Ceará, com atendimento personalizado e profundo conhecimento do mercado cearense.

Este repositório é um **monorepo Nx** contendo todas as aplicações e bibliotecas compartilhadas do projeto Forte Galpões.

---

## Stack

| Camada           | Tecnologia                                                |
| ---------------- | --------------------------------------------------------- |
| Monorepo         | Nx 22.6.x                                                 |
| Framework        | Angular 19 — Standalone Components, Signals, Control Flow |
| Renderização     | SSR + Prerendering via `@angular/ssr` (esbuild)           |
| Linguagem        | TypeScript 5.x (strict)                                   |
| Estilos          | Tailwind CSS 3 + SCSS — preset compartilhado no workspace |
| Testes unitários | Jest + Angular Testing Library                            |
| Linting          | ESLint 9 (flat config) + `@typescript-eslint/strict`      |
| Formatação       | Prettier                                                  |
| Git hooks        | Husky + lint-staged + commitlint (Conventional Commits)   |
| Package manager  | pnpm 10.x                                                 |

---

## Projetos

| Nome                    | Tipo        | Caminho        | Descrição                                           |
| ----------------------- | ----------- | -------------- | --------------------------------------------------- |
| `landing`               | Application | `landing/`     | Landing page SSR com todas as seções institucionais |
| `@forte-galpoes/ui-kit` | Library     | `libs/ui-kit/` | Design System — componentes, tokens e brand assets  |

---

## Primeiros passos

### Pré-requisitos

- Node.js 22.x (ver `.node-version`)
- pnpm 10.x — `npm install -g pnpm`

### Instalação

```bash
pnpm install
```

> **Nota:** O projeto usa Nx 22.6.5. Caso o build falhe com erro de `plugin-worker.js` ou `bin/nx.js`, execute o patch de instalação:
>
> ```bash
> node tools/nx-patch.cjs
> ```

---

## Comandos — `landing` (aplicação)

### Desenvolvimento local

```bash
# Iniciar servidor de desenvolvimento (com HMR)
pnpm nx serve landing

# Iniciar em modo de produção (SSR)
pnpm nx serve landing --configuration=production
```

### Build

```bash
# Build de produção (SSR + prerendering)
pnpm nx build landing

# Build de desenvolvimento (sem otimizações, source maps)
pnpm nx build landing --configuration=development
```

### Testes

```bash
# Rodar testes unitários
pnpm nx test landing

# Rodar testes em modo watch
pnpm nx test landing --watch

# Rodar testes com cobertura
pnpm nx test landing --coverage
```

### Lint

```bash
pnpm nx lint landing
```

---

## Comandos — `ui-kit` (design system)

### Build da biblioteca

```bash
# Compilar via ng-packagr → dist/libs/ui-kit
pnpm nx build ui-kit

# Build em modo desenvolvimento (full compilation)
pnpm nx build ui-kit --configuration=development
```

### Testes

```bash
# Rodar testes unitários
pnpm nx test ui-kit

# Rodar testes em modo watch
pnpm nx test ui-kit --watch

# Rodar testes com cobertura
pnpm nx test ui-kit --coverage
```

### Lint

```bash
pnpm nx lint ui-kit
```

### Storybook

```bash
# Iniciar servidor de desenvolvimento do Storybook
pnpm nx storybook ui-kit

# Gerar bundle estático
pnpm nx build-storybook ui-kit

# Servir o bundle estático localmente
pnpm nx static-storybook ui-kit
```

---

## Comandos Nx — Workspace completo

### Rodar target em todos os projetos

```bash
pnpm nx run-many -t build
pnpm nx run-many -t test --passWithNoTests
pnpm nx run-many -t lint
```

### Rodar apenas nos projetos afetados (CI)

```bash
pnpm nx affected -t build
pnpm nx affected -t test
pnpm nx affected -t lint
```

### Visualizar o grafo de dependências

```bash
pnpm nx graph
```

### Limpar cache do Nx

```bash
pnpm nx reset
```

---

## Estrutura de pastas

```
forte-galpoes-workspace/
│
├── landing/                          # App Angular 19 — landing page SSR
│   ├── public/                       # Arquivos estáticos servidos diretamente
│   │   ├── favicon.ico
│   │   ├── manifest.webmanifest
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── app/
│   │   │   ├── features/
│   │   │   │   └── home/             # Rota principal "/"
│   │   │   │       ├── home.component.ts
│   │   │   │       └── sections/     # Seções da landing page
│   │   │   │           ├── hero-section.component.ts
│   │   │   │           ├── about-section.component.ts
│   │   │   │           ├── specialties-section.component.ts
│   │   │   │           ├── differentials-section.component.ts
│   │   │   │           ├── testimonials-section.component.ts
│   │   │   │           └── contact-section.component.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.config.ts         # provideRouter, provideClientHydration
│   │   │   ├── app.config.server.ts  # mergeApplicationConfig SSR
│   │   │   └── app.routes.ts         # Rota "/" lazy → HomeComponent
│   │   ├── index.html                # SEO, Open Graph, JSON-LD, manifest
│   │   ├── main.ts
│   │   ├── main.server.ts
│   │   ├── server.ts                 # Express SSR server
│   │   └── styles.scss               # Tailwind directives + Google Fonts
│   ├── tailwind.config.js            # Usa workspace-preset
│   ├── project.json
│   └── tsconfig.json
│
├── libs/
│   └── ui-kit/                       # Design System @forte-galpoes/ui-kit
│       └── src/
│           └── lib/
│               ├── brand/            # Assets SVG e metadados de marca
│               │   └── assets/       # brandmark, monogram, logos (7 variantes)
│               ├── components/       # Componentes Angular standalone
│               │   ├── badge/
│               │   ├── brand-logo/   # Componente de logo com variantes e tons
│               │   ├── button/
│               │   ├── card/
│               │   ├── footer/
│               │   ├── form-field/
│               │   ├── input/        # ControlValueAccessor
│               │   ├── navbar/
│               │   ├── stat/         # Contador animado com rAF
│               │   ├── testimonial/
│               │   └── whatsapp-button/
│               ├── tokens/           # Design tokens TypeScript
│               │   ├── colors.ts
│               │   ├── typography.ts
│               │   ├── spacing.ts
│               │   ├── shadows.ts
│               │   └── index.ts
│               ├── directives/
│               ├── icons/
│               ├── pipes/
│               └── styles.css        # CSS custom properties + @layer base
│
├── tools/
│   ├── tailwind-workspace-preset.js  # Preset Tailwind compartilhado (cores, fontes, sombras)
│   └── nx-patch.cjs                  # Corrige bug de packaging do Nx 22.6.5 no pnpm
│
├── .claude/
│   └── settings.json                 # Configuração do plugin Nx para Claude Code
├── .husky/                           # Git hooks (pre-commit, commit-msg)
├── .vscode/                          # Configurações do VS Code
├── CLAUDE.md                         # Instruções do projeto para o Claude Code
├── nx.json                           # Configuração Nx (cache, targets, plugins)
├── tsconfig.base.json                # TypeScript base (strict, path aliases)
├── eslint.config.mjs                 # ESLint flat config raiz
├── package.json                      # Dependências e scripts raiz
├── pnpm-workspace.yaml               # Configuração pnpm workspaces
├── commitlint.config.js              # Regras Conventional Commits
└── .node-version                     # Versão do Node fixada
```

---

## Design System — `@forte-galpoes/ui-kit`

Importação em qualquer projeto do workspace:

```typescript
import {
  NavbarComponent,
  FooterComponent,
  ButtonComponent,
  CardComponent,
  BadgeComponent,
  FormFieldComponent,
  InputComponent,
  StatComponent,
  TestimonialComponent,
  WhatsAppButtonComponent,
  BrandLogoComponent,
} from '@forte-galpoes/ui-kit';
```

### Componentes disponíveis

| Componente                | Seletor              | Descrição                                              |
| ------------------------- | -------------------- | ------------------------------------------------------ |
| `NavbarComponent`         | `fg-navbar`          | Cabeçalho fixo com scroll detection e menu mobile      |
| `FooterComponent`         | `fg-footer`          | Rodapé com logo, contatos e credenciais CRECI          |
| `BrandLogoComponent`      | `fg-brand-logo`      | Logo em 4 variantes × 4 tons (color/light/mono)        |
| `ButtonComponent`         | `fg-button`          | 4 variantes (primary/secondary/ghost/link), 3 tamanhos |
| `CardComponent`           | `fg-card`            | 4 variantes de card com slots de imagem e footer       |
| `BadgeComponent`          | `fg-badge`           | 6 variantes de badge com brand tokens                  |
| `FormFieldComponent`      | `fg-form-field`      | Label, hint e erro com IDs ARIA vinculados             |
| `InputComponent`          | `fg-input`           | ControlValueAccessor, tipos text/textarea/email/tel    |
| `StatComponent`           | `fg-stat`            | Contador animado (rAF, ease-out cubic), SSR-safe       |
| `TestimonialComponent`    | `fg-testimonial`     | Citação semântica com avatar de iniciais               |
| `WhatsAppButtonComponent` | `fg-whatsapp-button` | Botão flutuante ou inline com deeplink WhatsApp        |

### Design Tokens

```typescript
import { brandColors, fontFamilies, spacing, shadows } from '@forte-galpoes/ui-kit';
```

### Paleta de cores

| Token       | Hex base  | Uso principal                         |
| ----------- | --------- | ------------------------------------- |
| `antracito` | `#1C2733` | Cor primária — fundos escuros, textos |
| `bronze`    | `#A57340` | Cor secundária — destaques, CTAs      |
| `aco`       | `#5A6A7A` | Textos secundários e bordas           |
| `concreto`  | `#D9D3C7` | Fundos neutros e divisores            |
| `marfim`    | `#F5F2ED` | Fundo principal claro                 |
| `cobre`     | `#C89456` | Hover do bronze                       |

---

## Tailwind CSS

O workspace possui um preset compartilhado em `tools/tailwind-workspace-preset.js`. Para usar em qualquer app ou lib:

```js
// tailwind.config.js
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const workspacePreset = require('../tools/tailwind-workspace-preset');

module.exports = {
  presets: [workspacePreset],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
```

---

## Convenções

### Conventional Commits

```
<type>(<scope>): <descrição em minúsculas>

feat(landing): add hero section
fix(ui-kit): correct button hover state
chore: update dependencies
test(ui-kit): add stat component spec
```

**Tipos aceitos:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `revert`, `ci`, `build`

> **Regras do commitlint:** subject em minúsculas; linhas do body com no máximo 100 caracteres.

### Prefixo de seletores

Todos os componentes Angular usam o prefixo **`fg`** (Forte Galpões):

```typescript
@Component({ selector: 'fg-hero-section', ... })
```

### ChangeDetectionStrategy

Todos os componentes utilizam `ChangeDetectionStrategy.OnPush` e Angular Signals (`input()`, `signal()`, `computed()`). Diretivas legadas (`*ngIf`, `*ngFor`) não são utilizadas — apenas o novo control flow (`@if`, `@for`, `@switch`).

---

## Observações técnicas

- **`@` em templates Angular inline:** O caractere `@` deve ser escapado como `&#64;` em endereços de e-mail dentro de templates inline (o compilador Angular interpreta `@` como início de bloco de controle de fluxo).
- **Nx 22.6.5 — bug de packaging no pnpm:** Os arquivos `bin/nx.js` e `src/project-graph/plugins/isolation/plugin-worker.js` estão ausentes no virtual store do pnpm. O script `tools/nx-patch.cjs` corrige isso copiando os arquivos da instalação global do Nx e é executado automaticamente no hook `prepare`.
- **SSR e `isPlatformBrowser`:** Todos os componentes que acessam APIs do browser (`window`, `document`, `requestAnimationFrame`) usam `inject(PLATFORM_ID)` + `isPlatformBrowser()` para compatibilidade com prerendering.
