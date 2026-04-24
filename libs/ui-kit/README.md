# @forte-galpoes/ui-kit

Design System compartilhado da marca **Forte Galpões** · Corretor Mauricio Mac Dowell.

Esta biblioteca Angular standalone contém todos os primitivos de UI — tokens de design, componentes, diretivas, pipes e ícones — utilizados nas aplicações da plataforma.

---

## Instalação / Importação

A lib está disponível como workspace package (não requer publicação em npm para uso interno):

```ts
import { ButtonComponent } from '@forte-galpoes/ui-kit'; // componente
import { BrandColors } from '@forte-galpoes/ui-kit/tokens'; // tokens
import { SafeHtmlPipe } from '@forte-galpoes/ui-kit/pipes'; // pipe
```

O alias `@forte-galpoes/ui-kit` é resolvido via `tsconfig.base.json` (path: `libs/ui-kit/src/index.ts`).

---

## Estrutura interna

```
libs/ui-kit/src/lib/
├── brand/         # Identidade visual: logos SVG, favicons, brand tokens
│   └── assets/    # Arquivos binários (PNG, SVG, ICO)
├── tokens/        # Design tokens: cores, tipografia, spacing, sombras
├── components/    # Componentes Angular standalone (prefix: fg)
├── directives/    # Diretivas Angular
├── pipes/         # Pipes Angular
└── icons/         # Ícones SVG como componentes standalone
```

---

## Comandos úteis

| Ação                   | Comando                                |
| ---------------------- | -------------------------------------- |
| Iniciar Storybook      | `pnpm exec nx storybook ui-kit`        |
| Build Storybook        | `pnpm exec nx build-storybook ui-kit`  |
| Servir Storybook built | `pnpm exec nx static-storybook ui-kit` |
| Executar testes        | `pnpm exec nx test ui-kit`             |
| Build da lib           | `pnpm exec nx build ui-kit`            |
| Lint                   | `pnpm exec nx lint ui-kit`             |

> **Dica:** adicione `NX_DAEMON=false` se o daemon Nx causar ruído em ambiente com poucos projetos.

---

## Versões instaladas

| Dependência           | Versão  |
| --------------------- | ------- |
| Angular               | 19.2.x  |
| @nx/angular           | 22.6.5  |
| Storybook             | 10.3.5  |
| @storybook/angular    | 10.3.5  |
| @storybook/addon-a11y | ^10.3.5 |
| Tailwind CSS          | ^3.4.x  |
| TypeScript            | ~5.7.x  |

> **Nota de compatibilidade:** O `tsconfig.base.json` foi atualizado no Sprint 2 de `module: "nodenext"` para `module: "es2022"` + `moduleResolution: "bundler"`, pois o framework Angular não suporta TypeScript project references (`composite: true`). Referência: [angular/angular#37276](https://github.com/angular/angular/issues/37276).

---

## Roadmap

### Sprint 3 — Identidade Visual Forte Galpões

- Design tokens reais: paleta de cores, tipografia (Inter + Merriweather), spacing
- Logo SVG em variações (horizontal, vertical, ícone, monocromático)
- Favicon e ícones PWA
- Importação do Brand Book PDF
- Exposição de `BrandColors`, `BrandFonts`, `BrandSpacing` como constantes TypeScript

### Sprint 4 — Componentes & Stories Completas

- Componentes standalone com prefix `fg`: `FgButtonComponent`, `FgCardComponent`, `FgBadgeComponent`, etc.
- Stories completas no Storybook com controls, a11y e interaction tests
- Documentação MDX para cada componente
- Cobertura de testes > 80%

### Sprint 5 — App Landing Page

- Aplicação `landing` utilizando `@forte-galpoes/ui-kit`
- Deploy preview automático

---

_Gerado em Sprint 2 | Nx 22.6.5 | Angular 19_
