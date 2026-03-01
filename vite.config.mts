import { copyFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ripple } from '@ripple-ts/vite-plugin';
import { globbySync } from 'globby';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import pkg from './package.json';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// @ts-expect-error
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		logLevel: 'warn',
		plugins: [
			{
				name: 'ripple-external',
				enforce: 'pre',
				apply: 'build',
				resolveId(source) {
					if (source.endsWith('.ripple')) return { id: source, external: true };
					return null;
				},
				renderChunk(code) {
					return code.replace(
						/(from\s+['"]|require\(['"])([^'"]*\.ripple)(['"]\)?)/g,
						(_, prefix, id, suffix) => `${prefix}./${path.basename(id)}${suffix}`,
					);
				},
			},
			...ripple(),
			dts({
				entryRoot: 'src',
				staticImport: true,
				exclude: [
					'**/*.stories.*',
					'**/*.test.*',
					'**/tests/*',
					'**/examples/*',
					'**/setup-test.ts',
					'**/test-utils.ts',
				],
				afterBuild: () => {
					globbySync(['dist/**/*.d.ts', 'dist/**.d.ts']).forEach((file) => {
						copyFileSync(file, file.replace(/\.d\.ts$/, '.d.cts'));
					});
				},
			}),
		],
		test: {
			include: ['src/**/*.test.ts'],
			setupFiles: 'src/setup-test.ts',
			globals: true,
			environment: 'jsdom',
			coverage: {
				provider: 'v8',
			},
			server: {
				deps: {
					conditions: ['browser'],
					inline: ['ripple', 'zag-ripple'],
				},
			},
		},
		build: {
			target: 'esnext',
			minify: false,
			lib: {
				entry: globbySync('src/**/index.ts'),
			},
			rollupOptions: {
				external: [
					...Object.keys(pkg.dependencies ?? {}),
					...Object.keys(pkg.peerDependencies ?? {}),
					/\.ripple$/,
					/^@internationalized\//,
				],
				output: [
					{
						format: 'cjs',
						preserveModules: true,
						preserveModulesRoot: 'src',
						exports: 'named',
						entryFileNames: '[name].cjs',
					},
					{
						format: 'es',
						preserveModules: true,
						preserveModulesRoot: 'src',
						exports: 'named',
						entryFileNames: '[name].js',
					},
				],
			},
		},
		resolve: {
			conditions: ['browser'],
			dedupe: ['ripple'],
			alias: {
				styles: path.resolve(__dirname, './ark/.storybook/modules'),
				...(mode !== 'production' && {
					'zag-ripple': env.VITE_ZAG_RIPPLE_PATH
				}),
			},
		},
	};
});
