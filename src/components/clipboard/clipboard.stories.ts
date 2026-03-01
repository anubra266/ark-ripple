import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { CopyStatus as CopyStatusExample } from './examples/copy-status.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { Timeout as TimeoutExample } from './examples/timeout.ripple';
import { ValueText as ValueTextExample } from './examples/value-text.ripple';

const meta: Meta = {
	title: 'Components / Clipboard',
};

export default meta;

export const Basic = { render: () => ({ Component: BasicExample }) };
export const Context = { render: () => ({ Component: ContextExample }) };
export const Controlled = { render: () => ({ Component: ControlledExample }) };
export const CopyStatus = { render: () => ({ Component: CopyStatusExample }) };
export const RootProvider = { render: () => ({ Component: RootProviderExample }) };
export const Timeout = { render: () => ({ Component: TimeoutExample }) };
export const ValueText = { render: () => ({ Component: ValueTextExample }) };
