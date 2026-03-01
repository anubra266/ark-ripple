import { existsSync } from 'node:fs';
import path from 'node:path';
import { globby } from 'globby';

const root = process.cwd();

const main = async () => {
	const reactExampleDirs = await globby(['ark/packages/react/src/components/*/examples/'], {
		cwd: root,
		onlyDirectories: true,
	});

	const missing: { component: string; missing: string[] }[] = [];
	const extra: { component: string; extra: string[] }[] = [];

	for (const reactExampleDir of reactExampleDirs.sort()) {
		const component = reactExampleDir.match(/components\/([^/]+)\/examples/)?.[1];
		if (!component) continue;

		const reactAbsDir = path.join(root, reactExampleDir);
		const rippleAbsDir = path.join(root, `src/components/${component}/examples/`);

		const reactExampleFiles = await globby(['**/*.tsx'], { cwd: reactAbsDir });
		const reactExamples = reactExampleFiles.map((f) => f.replace('.tsx', ''));

		if (!existsSync(rippleAbsDir)) {
			if (reactExamples.length > 0) missing.push({ component, missing: reactExamples });
			continue;
		}

		const rippleExampleFiles = await globby(['**/*.ripple'], { cwd: rippleAbsDir });
		const rippleExamples = rippleExampleFiles.map((f) => f.replace('.ripple', ''));

		const missingInRipple = reactExamples.filter((e) => !rippleExamples.includes(e));
		const extraInRipple = rippleExamples.filter((e) => !reactExamples.includes(e));

		if (missingInRipple.length > 0) missing.push({ component, missing: missingInRipple });
		if (extraInRipple.length > 0) extra.push({ component, extra: extraInRipple });
	}

	if (missing.length === 0 && extra.length === 0) {
		console.log('All Ripple examples are in parity with React!');
		return;
	}

	if (missing.length > 0) {
		console.log('\nMissing in Ripple (exist in React but not Ripple):');
		for (const { component, missing: m } of missing) {
			console.log(`  ${component}:`);
			for (const example of m) {
				console.log(`    - ${example}`);
			}
		}
	}

	if (extra.length > 0) {
		console.log('\nExtra in Ripple (exist in Ripple but not React):');
		for (const { component, extra: e } of extra) {
			console.log(`  ${component}:`);
			for (const example of e) {
				console.log(`    + ${example}`);
			}
		}
	}

	if (missing.length > 0) {
		process.exit(1);
	}
};

main().catch((err) => {
	console.error(err.message);
	process.exit(1);
});
