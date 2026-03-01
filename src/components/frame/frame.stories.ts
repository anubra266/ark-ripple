import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Script as ScriptExample } from './examples/script.ripple';
import { SrcDoc as SrcDocExample } from './examples/src-doc.ripple';

const meta: Meta = {
	title: 'Utilities / Frame',
};

export default meta;

export const Basic = { render: () => ({ Component: BasicExample }) };
export const Script = { render: () => ({ Component: ScriptExample }) };
export const SrcDoc = { render: () => ({ Component: SrcDocExample }) };
