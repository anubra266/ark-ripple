import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { AutoFill as AutoFillExample } from './examples/auto-fill.ripple';
import { FiniteLoops as FiniteLoopsExample } from './examples/finite-loops.ripple';
import { PauseOnInteraction as PauseOnInteractionExample } from './examples/pause-on-interaction.ripple';
import { ProgrammaticControl as ProgrammaticControlExample } from './examples/programmatic-control.ripple';
import { Reverse as ReverseExample } from './examples/reverse.ripple';
import { Speed as SpeedExample } from './examples/speed.ripple';
import { Vertical as VerticalExample } from './examples/vertical.ripple';
import { WithEdges as WithEdgesExample } from './examples/with-edges.ripple';

const meta: Meta = {
  title: 'Components/Marquee',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const AutoFill = {
  render: () => ({ Component: AutoFillExample }),
};

export const FiniteLoops = {
  render: () => ({ Component: FiniteLoopsExample }),
};

export const PauseOnInteraction = {
  render: () => ({ Component: PauseOnInteractionExample }),
};

export const ProgrammaticControl = {
  render: () => ({ Component: ProgrammaticControlExample }),
};

export const Reverse = {
  render: () => ({ Component: ReverseExample }),
};

export const Speed = {
  render: () => ({ Component: SpeedExample }),
};

export const Vertical = {
  render: () => ({ Component: VerticalExample }),
};

export const WithEdges = {
  render: () => ({ Component: WithEdgesExample }),
};
