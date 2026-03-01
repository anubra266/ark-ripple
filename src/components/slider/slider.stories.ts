import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { CenterOrigin as CenterOriginExample } from './examples/center-origin.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { DraggingIndicator as DraggingIndicatorExample } from './examples/dragging-indicator.ripple';
import { MinMax as MinMaxExample } from './examples/min-max.ripple';
import { OnEvent as OnEventExample } from './examples/on-event.ripple';
import { Range as RangeExample } from './examples/range.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { Step as StepExample } from './examples/step.ripple';
import { ThumbAlignment as ThumbAlignmentExample } from './examples/thumb-alignment.ripple';
import { ThumbCollision as ThumbCollisionExample } from './examples/thumb-collision.ripple';
import { ThumbOverlap as ThumbOverlapExample } from './examples/thumb-overlap.ripple';
import { Vertical as VerticalExample } from './examples/vertical.ripple';
import { WithMarks as WithMarksExample } from './examples/with-marks.ripple';

const meta: Meta = {
  title: 'Components/Slider',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const CenterOrigin = {
  render: () => ({ Component: CenterOriginExample }),
};

export const Context = {
  render: () => ({ Component: ContextExample }),
};

export const DraggingIndicator = {
  render: () => ({ Component: DraggingIndicatorExample }),
};

export const MinMax = {
  render: () => ({ Component: MinMaxExample }),
};

export const OnEvent = {
  render: () => ({ Component: OnEventExample }),
};

export const Range = {
  render: () => ({ Component: RangeExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const Step = {
  render: () => ({ Component: StepExample }),
};

export const ThumbAlignment = {
  render: () => ({ Component: ThumbAlignmentExample }),
};

export const ThumbCollision = {
  render: () => ({ Component: ThumbCollisionExample }),
};

export const ThumbOverlap = {
  render: () => ({ Component: ThumbOverlapExample }),
};

export const Vertical = {
  render: () => ({ Component: VerticalExample }),
};

export const WithMarks = {
  render: () => ({ Component: WithMarksExample }),
};
