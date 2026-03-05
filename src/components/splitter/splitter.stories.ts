import type { Meta } from '@storybook/html-vite'
import { Basic as BasicExample } from './examples/basic.ripple'
import { Collapsible as CollapsibleExample } from './examples/collapsible.ripple'
import { Context as ContextExample } from './examples/context.ripple'
import { DynamicCollapsible as DynamicCollapsibleExample } from './examples/dynamic-collapsible.ripple'
import { MultiplePanels as MultiplePanelsExample } from './examples/multiple-panels.ripple'
import { ResizeIndicator as ResizeIndicatorExample } from './examples/resize-indicator.ripple'
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple'
import { Vertical as VerticalExample } from './examples/vertical.ripple'

const meta: Meta = {
  title: 'Components / Splitter',
}

export default meta

export const Basic = {
  render: () => ({ Component: BasicExample }),
}

export const Collapsible = {
  render: () => ({ Component: CollapsibleExample }),
}

export const Context = {
  render: () => ({ Component: ContextExample }),
}

export const DynamicCollapsible = {
  render: () => ({ Component: DynamicCollapsibleExample }),
}

export const MultiplePanels = {
  render: () => ({ Component: MultiplePanelsExample }),
}

export const ResizeIndicator = {
  render: () => ({ Component: ResizeIndicatorExample }),
}

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
}

export const Vertical = {
  render: () => ({ Component: VerticalExample }),
}
