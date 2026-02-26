import { ripple } from '@ripple-ts/vite-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [...ripple()],
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
  resolve: {
    conditions: ['browser'],
    dedupe: ['ripple'],
    alias: {
      styles: path.resolve(__dirname, './ark/.storybook/modules'),
    },
  },
})
