import type { Preview } from '@storybook/html-vite';
import '../ark/.storybook/modules/global.css';
import '../ark/.storybook/modules/theme.css';

const preview: Preview = {
	parameters: {
		options: {
			storySort: {
				order: ['Utilities', 'Providers', 'Components'],
				method: 'alphabetical',
			},
		},
		layout: 'padded',
		actions: { disable: true },
		controls: { disable: true },
		backgrounds: { disabled: true },
		viewport: { disable: true },
	},
};

export default preview;
