/**
 * Workaround for nx 22.6.5 packaging issue on Windows with pnpm.
 * The npm package is missing bin/nx.js and isolation/plugin-worker.js.
 * This script copies those files from a global nx installation if needed.
 *
 * See: https://github.com/nrwl/nx/issues/... (packaging bug in 22.6.5)
 */
import { createRequire } from 'module';
import { existsSync, copyFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = join(__dirname, '..');

const require = createRequire(import.meta.url);

function resolveLocalNx() {
  try {
    return require.resolve('nx/bin/nx.js', { paths: [workspaceRoot] });
  } catch {
    return null;
  }
}

function resolveGlobalNx() {
  const globalPaths = process.env.NX_GLOBAL_PATH
    ? [process.env.NX_GLOBAL_PATH]
    : [];

  try {
    return require.resolve('nx/bin/nx.js', { paths: globalPaths });
  } catch {
    return null;
  }
}

const localNxBin = resolveLocalNx();

if (!localNxBin) {
  console.warn(
    '[postinstall] nx/bin/nx.js not found in local workspace. Nx commands may not work.',
  );
  console.warn('[postinstall] Run: pnpm install');
} else {
  console.log('[postinstall] nx installation OK:', localNxBin);
}
