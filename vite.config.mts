import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ripple } from '@ripple-ts/vite-plugin';
import { globbySync } from 'globby';
import { loadEnv } from 'vite';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';
import pkg from './package.json';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Find .ts files that are only imported by .ripple files (not reachable from index.ts entries).
 * These need to be added as explicit Rollup entries so they get compiled to .js in dist.
 */
function findRippleOnlyDeps(): string[] {
  const rippleFiles = globbySync('src/**/*.ripple', {
    ignore: ['**/examples/**', '**/tests/**'],
  });
  const deps = new Set<string>();
  for (const file of rippleFiles) {
    const content = readFileSync(file, 'utf8');
    const imports = [...content.matchAll(/from\s+['"](\.[^'"]+)['"]/g)];
    for (const [, imp] of imports) {
      if (imp.endsWith('.ripple')) continue;
      const resolved = path.resolve(path.dirname(file), imp);
      // Check if it's a file (not a directory with index.ts)
      for (const ext of ['.ts', '.tsx']) {
        const filePath = `${resolved}${ext}`;
        if (existsSync(filePath)) {
          // Skip type-only files (no runtime exports) to avoid empty chunks
          const content = readFileSync(filePath, 'utf8');
          const hasRuntimeExport = /^export\s+(?!type\s|interface\s)/m.test(content);
          if (hasRuntimeExport) deps.add(filePath);
          break;
        }
      }
    }
  }
  return [...deps];
}

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
        renderChunk(code, chunk) {
          const chunkDir = path.dirname(chunk.fileName);
          return code.replace(
            /(from\s+['"]|require\(['"])([^'"]*\.ripple)(['"]\)?)/g,
            (_, prefix, id, suffix) => {
              // id is an absolute or src-relative path to the .ripple file
              // Compute where it lives in dist (mirroring src/ -> dist/)
              const srcRelative = id.replace(/^(\.\.?\/)*/, '');
              // Find the actual src file to get the correct path
              const srcFiles = globbySync(`src/**/${srcRelative}`);
              if (srcFiles.length > 0) {
                const distPath = srcFiles[0].replace(/^src\//, '');
                let rel = path.relative(chunkDir, distPath);
                if (!rel.startsWith('.')) rel = `./${rel}`;
                return `${prefix}${rel}${suffix}`;
              }
              return `${prefix}./${path.basename(id)}${suffix}`;
            },
          );
        },
        closeBundle() {
          const rippleFiles = globbySync('src/**/*.ripple', {
            ignore: ['**/examples/**', '**/tests/**'],
          });
          for (const file of rippleFiles) {
            const dest = file.replace(/^src\//, 'dist/');
            mkdirSync(path.dirname(dest), { recursive: true });
            copyFileSync(file, dest);
          }
        },
      },
      ...ripple(),
      dts({
        entryRoot: 'src',
        root: '.',
        include: ['src'],
        staticImport: true,
        logLevel: 'silent',
        exclude: [
          '**/*.stories.*',
          '**/*.test.*',
          '**/tests/*',
          '**/examples/*',
          '**/setup-test.ts',
          '**/test-utils.ts',
        ],
        afterBuild: () => {
          // Patch .d.ts files: restore type imports from .ripple that tsc dropped
          const dtsFiles = globbySync(['dist/**/*.d.ts']);
          for (const dtsFile of dtsFiles) {
            const srcFile = dtsFile.replace(/^dist\//, 'src/').replace(/\.d\.ts$/, '.ts');
            if (!existsSync(srcFile)) continue;
            const srcContent = readFileSync(srcFile, 'utf8');
            const rippleImports = [
              ...srcContent.matchAll(
                /^import\s+type\s+\{[^}]+\}\s+from\s+['"][^'"]*\.ripple['"];?\s*$/gm,
              ),
            ];
            if (rippleImports.length === 0) continue;
            const dtsContent = readFileSync(dtsFile, 'utf8');
            const missing = rippleImports.filter((m) => !dtsContent.includes(m[0]));
            if (missing.length > 0) {
              const patch = `${missing.map((m) => m[0]).join('\n')}\n`;
              writeFileSync(dtsFile, patch + dtsContent);
            }
          }
          // Copy .d.ts -> .d.cts
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
        entry: [...globbySync('src/**/index.ts'), ...findRippleOnlyDeps()],
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
          'zag-ripple': env.VITE_ZAG_RIPPLE_PATH,
        }),
      },
    },
  };
});
