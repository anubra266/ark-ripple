import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Arrow as ArrowExample } from './examples/arrow.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { Delay as DelayExample } from './examples/delay.ripple';
import { Positioning as PositioningExample } from './examples/positioning.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { WithinFixed as WithinFixedExample } from './examples/within-fixed.ripple';

const meta: Meta = {
  title: 'Components/Tooltip',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Arrow = {
  render: () => ({ Component: ArrowExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const Context = {
  render: () => ({ Component: ContextExample }),
};

export const Delay = {
  render: () => ({ Component: DelayExample }),
};

export const Positioning = {
  render: () => ({ Component: PositioningExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const WithinFixed = {
  render: () => ({ Component: WithinFixedExample }),
};
