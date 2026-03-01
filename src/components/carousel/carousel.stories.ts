import type { Meta } from '@storybook/html-vite';
import { Autoplay as AutoplayExample } from './examples/autoplay.ripple';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { DynamicSlides as DynamicSlidesExample } from './examples/dynamic-slides.ripple';
import { PauseOnHover as PauseOnHoverExample } from './examples/pause-on-hover.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { ScrollTo as ScrollToExample } from './examples/scroll-to.ripple';
import { SlidesPerPage as SlidesPerPageExample } from './examples/slides-per-page.ripple';
import { Spacing as SpacingExample } from './examples/spacing.ripple';
import { ThumbnailIndicator as ThumbnailIndicatorExample } from './examples/thumbnail-indicator.ripple';
import { VariableSize as VariableSizeExample } from './examples/variable-size.ripple';
import { Vertical as VerticalExample } from './examples/vertical.ripple';

const meta: Meta = {
  title: 'Components/Carousel',
};

export default meta;

export const Autoplay = {
  render: () => ({ Component: AutoplayExample }),
};

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const DynamicSlides = {
  render: () => ({ Component: DynamicSlidesExample }),
};

export const PauseOnHover = {
  render: () => ({ Component: PauseOnHoverExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const ScrollTo = {
  render: () => ({ Component: ScrollToExample }),
};

export const SlidesPerPage = {
  render: () => ({ Component: SlidesPerPageExample }),
};

export const Spacing = {
  render: () => ({ Component: SpacingExample }),
};

export const ThumbnailIndicator = {
  render: () => ({ Component: ThumbnailIndicatorExample }),
};

export const VariableSize = {
  render: () => ({ Component: VariableSizeExample }),
};

export const Vertical = {
  render: () => ({ Component: VerticalExample }),
};
