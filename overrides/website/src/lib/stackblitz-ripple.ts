import sdk from '@stackblitz/sdk'

const tsconfig = {
  compilerOptions: {
    target: 'ESNext',
    module: 'ESNext',
    lib: ['ES2022', 'DOM', 'DOM.Iterable'],
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    moduleResolution: 'bundler',
    jsx: 'preserve',
    jsxImportSource: 'ripple',
    noEmit: true,
    isolatedModules: true,
  },
}

const packageJson = {
  name: 'ark-ui-ripple',
  private: true,
  version: '0.0.0',
  type: 'module',
  scripts: {
    dev: 'vite',
    build: 'vite build',
    preview: 'vite preview',
  },
  dependencies: {
    ripple: 'latest',
    'ark-ripple': 'latest',
    'lucide-ripple': 'latest',
  },
  devDependencies: {
    '@ripple-ts/vite-plugin': 'latest',
    typescript: '^5.9.2',
    vite: '^7.1.4',
  },
}

const viteConfig = `import { defineConfig } from 'vite';
import { ripple } from '@ripple-ts/vite-plugin';

export default defineConfig({
  plugins: [ripple()],
  build: {
    target: 'esnext',
  },
});`

const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ark UI - Ripple</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/src/main.ts" type="module"></script>
  </body>
</html>`

const main = `import { mount } from 'ripple';
// @ts-expect-error: Ripple file import
import { App } from './App.ripple';
import './global.css';

mount(App, {
  target: document.getElementById('root'),
});`

function transformCssModuleImports(code: string): string {
  return code.replace(/from\s+['"]styles\/[^'"]+\.module\.css['"]/g, "from './index.module.css'")
}

function generateGlobalCss(cssModules: Record<string, string>): string {
  const theme = cssModules['theme.css'] ?? ''
  const utilities = cssModules['utilities.css'] ?? ''
  const global = cssModules['global.css'] ?? ''
  return [theme, utilities, global].filter(Boolean).join('\n\n')
}

export async function openInStackblitzRipple(opts: {
  code: string
  cssModules: Record<string, string>
  id: string
  component: string
}) {
  let { code, cssModules, id, component } = opts

  code = code.replace(/export component \w+\(/, 'export component App(')
  code = transformCssModuleImports(code)

  const files: Record<string, string> = {
    'tsconfig.json': JSON.stringify(tsconfig, null, 2),
    'package.json': JSON.stringify(packageJson, null, 2),
    'vite.config.js': viteConfig,
    'index.html': indexHtml,
    'src/App.ripple': code,
    'src/global.css': generateGlobalCss(cssModules),
    'src/main.ts': main,
  }

  const componentCss = Object.entries(cssModules)
    .filter(([filename]) => filename.endsWith('.module.css'))
    .map(([, content]) => content)
    .join('\n\n')

  if (componentCss) {
    files['src/index.module.css'] = componentCss
  }

  sdk.openProject(
    {
      title: `Ark Ripple / ${component} / ${id}`,
      description: `${component} component demo from ark-ui.rip`,
      template: 'node',
      files,
    },
    {
      openFile: 'src/App.ripple',
      showSidebar: false,
    },
  )
}
