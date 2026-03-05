import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Events as EventsExample } from './examples/events.ripple';
import { KeyboardNavigation as KeyboardNavigationExample } from './examples/keyboard-navigation.ripple';
import { MixedTypes as MixedTypesExample } from './examples/mixed-types.ripple';
import { ProgressBar as ProgressBarExample } from './examples/progress-bar.ripple';
import { SkipTour as SkipTourExample } from './examples/skip-tour.ripple';
import { WaitForClick as WaitForClickExample } from './examples/wait-for-click.ripple';
import { AsyncStep as AsyncStepExample } from './examples/async-step.ripple';

const meta: Meta = {
  title: 'Components/Tour',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Events = {
  render: () => ({ Component: EventsExample }),
};

export const KeyboardNavigation = {
  render: () => ({ Component: KeyboardNavigationExample }),
};

export const MixedTypes = {
  render: () => ({ Component: MixedTypesExample }),
};

export const ProgressBar = {
  render: () => ({ Component: ProgressBarExample }),
};

export const SkipTour = {
  render: () => ({ Component: SkipTourExample }),
};

export const WaitForClick = {
  render: () => ({ Component: WaitForClickExample }),
};

export const AsyncStep = {
  render: () => ({ Component: AsyncStepExample }),
};
