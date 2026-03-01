import { cpSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = join(import.meta.dirname, '..');
const ARK = join(ROOT, 'ark');
const OVERRIDES = join(ROOT, 'overrides');

function log(msg: string) {
	console.log(`[pull] ${msg}`);
}

// Get modified tracked files
const modified = execSync('git diff --name-only', { cwd: ARK, encoding: 'utf-8' })
	.trim()
	.split('\n')
	.filter(Boolean);

// Get untracked files (excluding packages/ripple/ which is the src/ copy)
const untracked = execSync('git ls-files --others --exclude-standard', { cwd: ARK, encoding: 'utf-8' })
	.trim()
	.split('\n')
	.filter(Boolean)
	.filter((f) => !f.startsWith('packages/ripple/'));

const allChanged = [...modified, ...untracked];

if (allChanged.length === 0) {
	log('No uncommitted changes found in ark/.');
	process.exit(0);
}

log(`Found ${allChanged.length} changed file(s) in ark/:\n`);

for (const rel of allChanged) {
	const src = join(ARK, rel);
	const dest = join(OVERRIDES, rel);
	log(`  ${rel}`);
	mkdirSync(dirname(dest), { recursive: true });
	cpSync(src, dest);
}

log(`\nCopied ${allChanged.length} file(s) to overrides/.`);
