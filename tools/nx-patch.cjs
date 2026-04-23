/**
 * Patches nx 22.6.5 installation which is missing bin/nx.js and
 * src/project-graph/plugins/isolation/plugin-worker.js in the pnpm virtual store.
 *
 * This is a known packaging regression introduced between 22.6.1 and 22.6.5.
 * Run via: node tools/nx-patch.cjs
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const workspaceRoot = path.join(__dirname, '..');

function findNxDir() {
  const candidates = [
    path.join(workspaceRoot, 'node_modules', 'nx'),
    // pnpm virtual store
    ...findPnpmNxDirs(),
  ];
  return candidates.find((d) => fs.existsSync(d));
}

function findPnpmNxDirs() {
  const pnpmStore = path.join(workspaceRoot, 'node_modules', '.pnpm');
  if (!fs.existsSync(pnpmStore)) return [];
  try {
    return fs
      .readdirSync(pnpmStore)
      .filter((d) => d.startsWith('nx@'))
      .map((d) => path.join(pnpmStore, d, 'node_modules', 'nx'));
  } catch {
    return [];
  }
}

function findGlobalNxDir() {
  try {
    const npmRoot = execSync('npm root -g', { encoding: 'utf8', windowsHide: true }).trim();
    const candidate = path.join(npmRoot, 'nx');
    if (fs.existsSync(candidate)) return candidate;
  } catch {}
  return null;
}

const localNx = findNxDir();
const globalNx = findGlobalNxDir();

if (!localNx) {
  console.warn('[nx-patch] Local nx not found. Skipping patch.');
  process.exit(0);
}

if (!globalNx) {
  console.warn('[nx-patch] Global nx not found. Cannot patch. Install nx globally: npm i -g nx');
  process.exit(0);
}

const filesToPatch = [
  ['bin/nx.js'],
  ['src/project-graph/plugins/isolation/plugin-worker.js'],
];

let patched = 0;
for (const [relPath] of filesToPatch) {
  const target = path.join(localNx, relPath);
  const source = path.join(globalNx, relPath);

  if (!fs.existsSync(target) && fs.existsSync(source)) {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target);
    console.log(`[nx-patch] Copied: ${relPath}`);
    patched++;
  }
}

if (patched === 0) {
  console.log('[nx-patch] Nothing to patch.');
} else {
  console.log(`[nx-patch] Patched ${patched} file(s).`);
}
