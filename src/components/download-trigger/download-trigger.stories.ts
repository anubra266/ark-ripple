import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Svg as SvgExample } from './examples/svg.ripple';
import { WithPromise as WithPromiseExample } from './examples/with-promise.ripple';

const meta: Meta = {
  title: 'Utilities / Download Trigger',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Svg = {
  render: () => ({ Component: SvgExample }),
};

export const WithPromise = {
  render: () => ({ Component: WithPromiseExample }),
};
