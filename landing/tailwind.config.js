const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const workspacePreset = require('../tools/tailwind-workspace-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [workspacePreset],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
