import { mount, flushSync } from 'ripple';

export function render(Component: any, props: Record<string, any> = {}) {
	const container = document.createElement('div');
	document.body.appendChild(container);
	mount(Component, { target: container, props });
	flushSync();
	return { container };
}

export * from '@testing-library/dom';
