import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = join(import.meta.dirname, '..');
const ARK = join(ROOT, 'ark');
const SRC = join(ROOT, 'src');
const OVERRIDES = join(ROOT, 'overrides');
const RIPPLE_DEST = join(ARK, 'packages', 'ripple', 'src');

function log(msg: string) {
  console.log(`[sync] ${msg}`);
}

function copyRecursive(src: string, dest: string) {
  if (!existsSync(dirname(dest))) {
    mkdirSync(dirname(dest), { recursive: true });
  }
  cpSync(src, dest, { recursive: true });
}

function walkFiles(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walkFiles(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

function syncRipplePackage() {
  log('Copying src/ → ark/packages/ripple/src/');
  mkdirSync(RIPPLE_DEST, { recursive: true });
  cpSync(SRC, RIPPLE_DEST, { recursive: true });

  const changelog = join(ROOT, 'CHANGELOG.md');
  if (existsSync(changelog)) {
    const dest = join(dirname(RIPPLE_DEST), 'CHANGELOG.md');
    log('Copying CHANGELOG.md → ark/packages/ripple/CHANGELOG.md');
    cpSync(changelog, dest);
  }
}

function syncOverrides() {
  if (!existsSync(OVERRIDES)) {
    log('No overrides/ directory found, skipping.');
    return;
  }

  const files = walkFiles(OVERRIDES);
  for (const file of files) {
    const rel = relative(OVERRIDES, file);
    const dest = join(ARK, rel);
    log(`Override: ${rel}`);
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(file, dest);
  }
}

function revert() {
  log('Reverting ark/ submodule to clean state...');
  execSync('git checkout .', { cwd: ARK, stdio: 'inherit' });
  execSync('git clean -fd packages/ripple', { cwd: ARK, stdio: 'inherit' });
  log('Done.');
}

const isRevert = process.argv.includes('--revert');

if (isRevert) {
  revert();
} else {
  syncRipplePackage();
  syncOverrides();
  log('Done.');
}
