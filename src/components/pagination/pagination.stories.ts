import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Customized as CustomizedExample } from './examples/customized.ripple';
import { DataSlicing as DataSlicingExample } from './examples/data-slicing.ripple';
import { Link as LinkExample } from './examples/link.ripple';
import { PageRange as PageRangeExample } from './examples/page-range.ripple';
import { PageSizeControl as PageSizeControlExample } from './examples/page-size-control.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { WithEdges as WithEdgesExample } from './examples/with-edges.ripple';

const meta: Meta = {
  title: 'Components/Pagination',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Context = {
  render: () => ({ Component: ContextExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const Customized = {
  render: () => ({ Component: CustomizedExample }),
};

export const DataSlicing = {
  render: () => ({ Component: DataSlicingExample }),
};

export const Link = {
  render: () => ({ Component: LinkExample }),
};

export const PageRange = {
  render: () => ({ Component: PageRangeExample }),
};

export const PageSizeControl = {
  render: () => ({ Component: PageSizeControlExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const WithEdges = {
  render: () => ({ Component: WithEdgesExample }),
};
