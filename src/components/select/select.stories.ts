import type { Meta } from '@storybook/html-vite';
import { Async as AsyncExample } from './examples/async.ripple';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { DynamicItems as DynamicItemsExample } from './examples/dynamic-items.ripple';
import { FormLibrary as FormLibraryExample } from './examples/form-library.ripple';
import { FullyControlled as FullyControlledExample } from './examples/fully-controlled.ripple';
import { Grouping as GroupingExample } from './examples/grouping.ripple';
import { LazyMount as LazyMountExample } from './examples/lazy-mount.ripple';
import { MaxSelected as MaxSelectedExample } from './examples/max-selected.ripple';
import { Multiple as MultipleExample } from './examples/multiple.ripple';
import { Overflow as OverflowExample } from './examples/overflow.ripple';
import { ReactiveCollection as ReactiveCollectionExample } from './examples/reactive-collection.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { SelectAll as SelectAllExample } from './examples/select-all.ripple';
import { SelectOnHighlight as SelectOnHighlightExample } from './examples/select-on-highlight.ripple';
import { WithField as WithFieldExample } from './examples/with-field.ripple';

const meta: Meta = {
  title: 'Components/Select',
};

export default meta;

export const Async = {
  render: () => ({ Component: AsyncExample }),
};

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const DynamicItems = {
  render: () => ({ Component: DynamicItemsExample }),
};

export const FormLibrary = {
  render: () => ({ Component: FormLibraryExample }),
};

export const FullyControlled = {
  render: () => ({ Component: FullyControlledExample }),
};

export const Grouping = {
  render: () => ({ Component: GroupingExample }),
};

export const LazyMount = {
  render: () => ({ Component: LazyMountExample }),
};

export const MaxSelected = {
  render: () => ({ Component: MaxSelectedExample }),
};

export const Multiple = {
  render: () => ({ Component: MultipleExample }),
};

export const Overflow = {
  render: () => ({ Component: OverflowExample }),
};

export const ReactiveCollection = {
  render: () => ({ Component: ReactiveCollectionExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const SelectAll = {
  render: () => ({ Component: SelectAllExample }),
};

export const SelectOnHighlight = {
  render: () => ({ Component: SelectOnHighlightExample }),
};

export const WithField = {
  render: () => ({ Component: WithFieldExample }),
};
