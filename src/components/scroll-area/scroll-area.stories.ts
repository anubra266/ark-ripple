import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Nested as NestedExample } from './examples/nested.ripple';
import { Horizontal as HorizontalExample } from './examples/horizontal.ripple';
import { BothDirections as BothDirectionsExample } from './examples/both-directions.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';

const meta: Meta = {
  title: 'Components/Scroll Area',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Nested = {
  render: () => ({ Component: NestedExample }),
};

export const Horizontal = {
  render: () => ({ Component: HorizontalExample }),
};

export const BothDirections = {
  render: () => ({ Component: BothDirectionsExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};
