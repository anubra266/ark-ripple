import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { AspectRatio as AspectRatioExample } from './examples/aspect-ratio.ripple';
import { Circle as CircleExample } from './examples/circle.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { ControlledZoom as ControlledZoomExample } from './examples/controlled-zoom.ripple';
import { CropPreview as CropPreviewExample } from './examples/crop-preview.ripple';
import { Events as EventsExample } from './examples/events.ripple';
import { Fixed as FixedExample } from './examples/fixed.ripple';
import { Flip as FlipExample } from './examples/flip.ripple';
import { InitialCrop as InitialCropExample } from './examples/initial-crop.ripple';
import { MinMaxSize as MinMaxSizeExample } from './examples/min-max-size.ripple';
import { Reset as ResetExample } from './examples/reset.ripple';
import { Rotation as RotationExample } from './examples/rotation.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { ZoomLimits as ZoomLimitsExample } from './examples/zoom-limits.ripple';

const meta: Meta = {
  title: 'Components/ImageCropper',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const AspectRatio = {
  render: () => ({ Component: AspectRatioExample }),
};

export const Circle = {
  render: () => ({ Component: CircleExample }),
};

export const Context = {
  render: () => ({ Component: ContextExample }),
};

export const ControlledZoom = {
  render: () => ({ Component: ControlledZoomExample }),
};

export const CropPreview = {
  render: () => ({ Component: CropPreviewExample }),
};

export const Events = {
  render: () => ({ Component: EventsExample }),
};

export const Fixed = {
  render: () => ({ Component: FixedExample }),
};

export const Flip = {
  render: () => ({ Component: FlipExample }),
};

export const InitialCrop = {
  render: () => ({ Component: InitialCropExample }),
};

export const MinMaxSize = {
  render: () => ({ Component: MinMaxSizeExample }),
};

export const Reset = {
  render: () => ({ Component: ResetExample }),
};

export const Rotation = {
  render: () => ({ Component: RotationExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const ZoomLimits = {
  render: () => ({ Component: ZoomLimitsExample }),
};
