import { openInStackblitzReact } from './stackblitz-react'
import { openInStackblitzRipple } from './stackblitz-ripple'
import { openInStackblitzSolid } from './stackblitz-solid'
import { openInStackblitzSvelte } from './stackblitz-svelte'
import { openInStackblitzVue } from './stackblitz-vue'

export type Framework = 'react' | 'solid' | 'vue' | 'svelte' | 'ripple'

export interface StackblitzOptions {
  code: string
  cssModules: Record<string, string>
  id: string
  component: string
}

const handlers: Record<Framework, (opts: StackblitzOptions) => void> = {
  react: openInStackblitzReact,
  ripple: openInStackblitzRipple,
  solid: openInStackblitzSolid,
  vue: openInStackblitzVue,
  svelte: openInStackblitzSvelte,
}

export const openInStackblitz = (framework: Framework, opts: StackblitzOptions): void => {
  handlers[framework]?.(opts)
}
