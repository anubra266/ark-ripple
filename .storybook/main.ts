import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'

import type { StorybookConfig } from '@storybook/html-vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  previewAnnotations: [resolve(__dirname, './ripple-adapter/preview.ts')],
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        'process.env': {},
      },
      resolve: {
        alias: {
          styles: resolve(__dirname, '../../../.storybook/modules'),
        },
      },
    })
  },
}

export default config
