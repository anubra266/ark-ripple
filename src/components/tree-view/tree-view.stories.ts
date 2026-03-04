import type { Meta } from '@storybook/html-vite';
import { AsyncLoading as AsyncLoadingExample } from './examples/async-loading.ripple';
import { Basic as BasicExample } from './examples/basic.ripple';
import { CheckboxTree as CheckboxTreeExample } from './examples/checkbox-tree.ripple';
import { ContextMenu as ContextMenuExample } from './examples/context-menu.ripple';
import { ControlledExpanded as ControlledExpandedExample } from './examples/controlled-expanded.ripple';
import { ControlledSelected as ControlledSelectedExample } from './examples/controlled-selected.ripple';
import { DisabledNode as DisabledNodeExample } from './examples/disabled-node.ripple';
import { ExpandCollapseAll as ExpandCollapseAllExample } from './examples/expand-collapse-all.ripple';
import { Filtering as FilteringExample } from './examples/filtering.ripple';
import { LazyMount as LazyMountExample } from './examples/lazy-mount.ripple';
import { Links as LinksExample } from './examples/links.ripple';
import { Mutation as MutationExample } from './examples/mutation.ripple';
import { RenameNode as RenameNodeExample } from './examples/rename-node.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { Virtualized as VirtualizedExample } from './examples/virtualized.ripple';

const meta: Meta = {
  title: 'Components/TreeView',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const AsyncLoading = {
  render: () => ({ Component: AsyncLoadingExample }),
};

export const CheckboxTree = {
  render: () => ({ Component: CheckboxTreeExample }),
};

export const ContextMenu = {
  render: () => ({ Component: ContextMenuExample }),
};

export const ControlledExpanded = {
  render: () => ({ Component: ControlledExpandedExample }),
};

export const ControlledSelected = {
  render: () => ({ Component: ControlledSelectedExample }),
};

export const DisabledNode = {
  render: () => ({ Component: DisabledNodeExample }),
};

export const ExpandCollapseAll = {
  render: () => ({ Component: ExpandCollapseAllExample }),
};

export const Filtering = {
  render: () => ({ Component: FilteringExample }),
};

export const LazyMount = {
  render: () => ({ Component: LazyMountExample }),
};

export const Links = {
  render: () => ({ Component: LinksExample }),
};

export const Mutation = {
  render: () => ({ Component: MutationExample }),
};

export const RenameNode = {
  render: () => ({ Component: RenameNodeExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const Virtualized = {
  render: () => ({ Component: VirtualizedExample }),
};
