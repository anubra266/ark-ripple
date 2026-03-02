import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Delay as DelayExample } from './examples/delay.ripple';
import { Positioning as PositioningExample } from './examples/positioning.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';

const meta: Meta = {
  title: 'Components/HoverCard',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const Delay = {
  render: () => ({ Component: DelayExample }),
};

export const Positioning = {
  render: () => ({ Component: PositioningExample }),
};

export const Context = {
  render: () => ({ Component: ContextExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};
