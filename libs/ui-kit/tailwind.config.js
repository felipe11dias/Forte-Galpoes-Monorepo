const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const workspacePreset = require('../../tools/tailwind-workspace-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [workspacePreset],
  content: [
    join(__dirname, 'src/**/*.{html,ts}'),
    join(__dirname, '**/*.stories.{ts,tsx,js,jsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
