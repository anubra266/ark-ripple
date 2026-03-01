import type { Meta } from '@storybook/html-vite';
import { Fade as FadeExample } from './examples/fade.ripple';
import { Flip as FlipExample } from './examples/flip.ripple';
import { Rotate as RotateExample } from './examples/rotate.ripple';
import { Scale as ScaleExample } from './examples/scale.ripple';

const meta: Meta = {
	title: 'Components/Swap',
};

export default meta;

export const Fade = {
	render: () => ({ Component: FadeExample }),
};

export const Flip = {
	render: () => ({ Component: FlipExample }),
};

export const Rotate = {
	render: () => ({ Component: RotateExample }),
};

export const Scale = {
	render: () => ({ Component: ScaleExample }),
};
