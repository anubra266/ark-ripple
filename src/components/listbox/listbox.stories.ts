import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { DisabledItem as DisabledItemExample } from './examples/disabled-item.ripple';
import { ExtendedSelect as ExtendedSelectExample } from './examples/extended-select.ripple';
import { Filtering as FilteringExample } from './examples/filtering.ripple';
import { Grid as GridExample } from './examples/grid.ripple';
import { Group as GroupExample } from './examples/group.ripple';
import { Horizontal as HorizontalExample } from './examples/horizontal.ripple';
import { Multiple as MultipleExample } from './examples/multiple.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { SelectAll as SelectAllExample } from './examples/select-all.ripple';
import { ValueText as ValueTextExample } from './examples/value-text.ripple';

const meta: Meta = {
  title: 'Components/Listbox',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const DisabledItem = {
  render: () => ({ Component: DisabledItemExample }),
};

export const ExtendedSelect = {
  render: () => ({ Component: ExtendedSelectExample }),
};

export const Filtering = {
  render: () => ({ Component: FilteringExample }),
};

export const Grid = {
  render: () => ({ Component: GridExample }),
};

export const Group = {
  render: () => ({ Component: GroupExample }),
};

export const Horizontal = {
  render: () => ({ Component: HorizontalExample }),
};

export const Multiple = {
  render: () => ({ Component: MultipleExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const SelectAll = {
  render: () => ({ Component: SelectAllExample }),
};

export const ValueText = {
  render: () => ({ Component: ValueTextExample }),
};
