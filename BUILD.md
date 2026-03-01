# Building Ark Ripple

Ark Ripple uses Vite + Rollup to produce dual-format (ESM + CJS) dist output. The main challenge is that `.ripple` files are **not compiled by Rollup** — they ship as-is and are resolved at runtime by the Ripple framework. This creates several problems that the build config solves.

## The core problem

`.ripple` files can't go through Rollup's module graph. They need to:

1. Stay as `.ripple` in dist (not transpiled)
2. Be importable from compiled `.js` files with correct relative paths
3. Have their TypeScript dependencies compiled even though Rollup can't trace them
4. Preserve type information in `.d.ts` output

## How it works

### 1. Mark `.ripple` as external (`ripple-external` plugin)

The `resolveId` hook tells Rollup to treat any `.ripple` import as external — don't try to bundle it, just leave the import statement in the output.

### 2. Rewrite import paths (`renderChunk`)

Rollup's `preserveModules` mode mirrors the `src/` directory structure into `dist/`. When a compiled `.js` chunk references a `.ripple` file, the original import path (relative to `src/`) may no longer be correct relative to the chunk's position in `dist/`.

`renderChunk` fixes this by:
- Finding the actual source `.ripple` file via `globbySync`
- Computing the correct relative path from the chunk's location in dist
- Rewriting the import accordingly

### 3. Copy `.ripple` files to dist (`closeBundle`)

After Rollup finishes, all `.ripple` files from `src/` are copied into `dist/`, preserving their directory structure.

### 4. Compile orphaned `.ts` dependencies (`findRippleOnlyDeps`)

Some `.ts` files are **only** imported by `.ripple` files. Since `.ripple` files are external, Rollup never sees these `.ts` files in its module graph — they'd be missing from dist.

`findRippleOnlyDeps()` scans all `.ripple` files for their `.ts`/`.tsx` imports and adds them as explicit Rollup entries. It skips type-only files (those with no runtime exports) to avoid generating empty chunks.

### 5. Patch `.d.ts` type imports (`afterBuild`)

TypeScript can't resolve `.ripple` modules (despite the ambient `declare module '*.ripple'`), so `tsc` silently drops `import type { ... } from './foo.ripple'` statements from `.d.ts` output.

The `afterBuild` hook in `vite-plugin-dts` fixes this by:
- Comparing each `.d.ts` file against its source `.ts` file
- Finding any `.ripple` type imports that were dropped
- Patching them back into the `.d.ts` file

It also copies all `.d.ts` files to `.d.cts` for CJS consumers.

### 6. Silent type diagnostics

The dts plugin uses `logLevel: 'silent'` to suppress noisy TS errors about `.ripple` module resolution that don't affect the output.

## Build entries

```typescript
entry: [...globbySync('src/**/index.ts'), ...findRippleOnlyDeps()]
```

Every `index.ts` is an entry point, plus any `.ts` files that would otherwise be orphaned.

## Output

```
dist/
├── components/
│   ├── accordion/
│   │   ├── accordion-root.ripple      # copied from src
│   │   ├── use-accordion-context.js   # compiled by Rollup
│   │   ├── use-accordion-context.cjs
│   │   ├── use-accordion-context.d.ts # patched by afterBuild
│   │   ├── use-accordion-context.d.cts
│   │   └── index.js                   # imports both .ripple and .js
│   └── ...
├── providers/
└── utils/
```
