import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = join(import.meta.dirname, '..');
const ARK = join(ROOT, 'ark');
const OVERRIDES = join(ROOT, 'overrides');

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

const files = walkFiles(OVERRIDES).map((f) => relative(OVERRIDES, f));

if (files.length === 0) {
  console.log('No overrides found.');
  process.exit(0);
}

console.log(`Checking ${files.length} overridden files for upstream changes:\n`);

try {
  execSync(`git diff HEAD~1 -- ${files.join(' ')}`, {
    cwd: ARK,
    stdio: 'inherit',
  });
} catch {
  // git diff exits non-zero when there are differences
}
