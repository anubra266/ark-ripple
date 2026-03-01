import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/list-selection/basic.ripple';
import { Multiple as MultipleExample } from './examples/list-selection/multiple.ripple';
import { Range as RangeExample } from './examples/list-selection/range.ripple';

const meta: Meta = {
  title: 'Utilities/ListSelection',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Multiple = {
  render: () => ({ Component: MultipleExample }),
};

export const Range = {
  render: () => ({ Component: RangeExample }),
};
