/**
 * Patches nx 22.6.5 installation which is missing bin/nx.js and
 * src/project-graph/plugins/isolation/plugin-worker.js.
 *
 * Known packaging regression introduced between 22.6.1 and 22.6.5.
 * Patches both the symlinked node_modules/nx AND the pnpm virtual store entries.
 * Run via: node tools/nx-patch.cjs
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const workspaceRoot = path.join(__dirname, '..');

function findAllNxDirs() {
  const dirs = [];

  // Symlinked node_modules/nx
  const symlinked = path.join(workspaceRoot, 'node_modules', 'nx');
  if (fs.existsSync(symlinked)) dirs.push(symlinked);

  // pnpm virtual store entries
  const pnpmStore = path.join(workspaceRoot, 'node_modules', '.pnpm');
  if (fs.existsSync(pnpmStore)) {
    try {
      fs.readdirSync(pnpmStore)
        .filter((d) => d.startsWith('nx@'))
        .forEach((d) => {
          const candidate = path.join(pnpmStore, d, 'node_modules', 'nx');
          if (fs.existsSync(candidate)) dirs.push(candidate);
        });
    } catch {
      // ignore
    }
  }

  return dirs;
}

function findGlobalNxDir() {
  try {
    const npmRoot = execSync('npm root -g', { encoding: 'utf8', windowsHide: true }).trim();
    const candidate = path.join(npmRoot, 'nx');
    if (fs.existsSync(candidate)) return candidate;
  } catch {}
  return null;
}

const nxDirs = findAllNxDirs();
const globalNx = findGlobalNxDir();

if (nxDirs.length === 0) {
  console.warn('[nx-patch] No local nx installations found. Skipping patch.');
  process.exit(0);
}

if (!globalNx) {
  console.warn('[nx-patch] Global nx not found. Cannot patch. Install nx globally: npm i -g nx');
  process.exit(0);
}

const filesToPatch = [
  'bin/nx.js',
  'src/project-graph/plugins/isolation/plugin-worker.js',
];

let patched = 0;
for (const nxDir of nxDirs) {
  for (const relPath of filesToPatch) {
    const target = path.join(nxDir, relPath);
    const source = path.join(globalNx, relPath);

    if (!fs.existsSync(target) && fs.existsSync(source)) {
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.copyFileSync(source, target);
      console.log(`[nx-patch] Copied: ${relPath} → ${path.relative(workspaceRoot, nxDir)}`);
      patched++;
    }
  }
}

if (patched === 0) {
  console.log('[nx-patch] Nothing to patch.');
} else {
  console.log(`[nx-patch] Patched ${patched} file(s).`);
}
