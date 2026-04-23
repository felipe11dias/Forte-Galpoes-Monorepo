/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef9ec',
          100: '#fdf0cc',
          200: '#fae094',
          300: '#f8cb5c',
          400: '#f5b523',
          500: '#d4920a',
          600: '#a86e07',
          700: '#7c5005',
          800: '#503303',
          900: '#241701',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#efefef',
          200: '#dcdcdc',
          300: '#bdbdbd',
          400: '#989898',
          500: '#7c7c7c',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#3d3d3d',
          950: '#292929',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
