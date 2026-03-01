import { mount } from 'ripple';
import type { RenderContext } from '@storybook/html-vite';

export type RippleFramework = {
	component: any;
	storyResult: { Component: any };
	T: unknown;
};

/**
 * Called by Storybook to render a story into the canvas element.
 * Stories return { Component } from their render function, matching the Svelte pattern.
 */
export const renderToCanvas = (
	renderContext: RenderContext<RippleFramework>,
	canvasElement: HTMLElement,
) => {
	const { storyFn, showMain, forceRemount } = renderContext;
	const result = storyFn();

	const Component = result?.Component ?? result;
	if (!Component) return;

	if (forceRemount) {
		canvasElement.innerHTML = '';
	}

	showMain();
	mount(Component, { target: canvasElement });
};
