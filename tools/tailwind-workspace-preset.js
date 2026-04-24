/**
 * Forte Galpões — Tailwind CSS Workspace Preset
 *
 * Paleta e tipografia compartilhadas entre todos os projetos do monorepo.
 * Importado por tailwind.config.js de cada lib/app.
 *
 * Tokens de cor sincronizados com:
 *   libs/ui-kit/src/lib/brand/colors.ts
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        // ── Primary — Navy Steel Blue ──────────────────────────────────────
        primary: {
          50: '#F0F4FB',
          100: '#D8E3F4',
          200: '#B1C8EA',
          300: '#82A6D9',
          400: '#5584C5',
          500: '#3468B0',
          600: '#295592',
          700: '#1C3F73',
          800: '#132C52',
          900: '#0B1A33',
          950: '#060D1A',
          DEFAULT: '#1C3F73',
        },

        // ── Accent — Construction Orange ──────────────────────────────────
        accent: {
          50: '#FEF5EA',
          100: '#FDE3C2',
          200: '#FBC680',
          300: '#F9A73D',
          400: '#F48B1A',
          500: '#E87722',
          600: '#C4601A',
          700: '#9C4B15',
          800: '#6F360F',
          900: '#42200A',
          950: '#221005',
          DEFAULT: '#E87722',
        },

        // ── Neutral — Industrial Gray ─────────────────────────────────────
        neutral: {
          50: '#F4F5F7',
          100: '#E6E8EC',
          200: '#CBD0D7',
          300: '#A4AEB9',
          400: '#7A8899',
          500: '#5B6B7C',
          600: '#445566',
          700: '#334151',
          800: '#202C38',
          900: '#121A22',
          950: '#080D11',
        },

        // ── Semantic ──────────────────────────────────────────────────────
        success: {
          light: '#DCFCE7',
          DEFAULT: '#16A34A',
          dark: '#14532D',
        },
        warning: {
          light: '#FEF9C3',
          DEFAULT: '#CA8A04',
          dark: '#713F12',
        },
        danger: {
          light: '#FEE2E2',
          DEFAULT: '#DC2626',
          dark: '#7F1D1D',
        },
        info: {
          light: '#DBEAFE',
          DEFAULT: '#2563EB',
          dark: '#1E3A8A',
        },
      },

      // ── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
