import type { Meta } from '@storybook/html-vite';
import { ArrayData as ArrayDataExample } from './examples/array-data.ripple';
import { Basic as BasicExample } from './examples/basic.ripple';
import { ExpandLevel as ExpandLevelExample } from './examples/expand-level.ripple';
import { Functions as FunctionsExample } from './examples/functions.ripple';
import { MapAndSet as MapAndSetExample } from './examples/map-and-set.ripple';
import { Regex as RegexExample } from './examples/regex.ripple';
import { RenderValue as RenderValueExample } from './examples/render-value.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';

const meta: Meta = {
  title: 'Utilities / JSON Tree View',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const ExpandLevel = {
  render: () => ({ Component: ExpandLevelExample }),
};

export const ArrayData = {
  render: () => ({ Component: ArrayDataExample }),
};

export const Functions = {
  render: () => ({ Component: FunctionsExample }),
};

export const MapAndSet = {
  render: () => ({ Component: MapAndSetExample }),
};

export const Regex = {
  render: () => ({ Component: RegexExample }),
};

export const RenderValue = {
  render: () => ({ Component: RenderValueExample }),
};
