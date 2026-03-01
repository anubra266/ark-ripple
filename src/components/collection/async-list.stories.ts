import type { Meta } from '@storybook/html-vite';
import { Dependencies as DependenciesExample } from './examples/async-list/dependencies.ripple';
import { Filter as FilterExample } from './examples/async-list/filter.ripple';
import { InfiniteLoading as InfiniteLoadingExample } from './examples/async-list/infinite-loading.ripple';
import { Reload as ReloadExample } from './examples/async-list/reload.ripple';
import { SortClientSide as SortClientSideExample } from './examples/async-list/sort-client-side.ripple';
import { SortServerSide as SortServerSideExample } from './examples/async-list/sort-server-side.ripple';

const meta: Meta = {
  title: 'Utilities/AsyncList',
};

export default meta;

export const Filter = {
  render: () => ({ Component: FilterExample }),
};

export const InfiniteLoading = {
  render: () => ({ Component: InfiniteLoadingExample }),
};

export const Reload = {
  render: () => ({ Component: ReloadExample }),
};

export const SortClientSide = {
  render: () => ({ Component: SortClientSideExample }),
};

export const SortServerSide = {
  render: () => ({ Component: SortServerSideExample }),
};

export const Dependencies = {
  render: () => ({ Component: DependenciesExample }),
};
