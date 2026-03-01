import user from '@testing-library/user-event';
import { render, screen, waitFor } from '../../../test-utils';
import {
	ArkDiv,
	ArkButton,
	ArkWithText,
	ArkWithAsChild,
	ReactiveClass,
	ReactiveSpreading,
	ReactiveAsChild,
	MockItem,
	MockInput,
	MockItemWithChildren,
	MockItemAsChild,
	MockItemReactive,
} from './basic.ripple';

describe('ark factory – static rendering', () => {
	it('renders the correct element tag', () => {
		render(ArkDiv, { id: 'test-el' });
		const el = document.getElementById('test-el');
		expect(el?.tagName.toLowerCase()).toBe('div');
	});

	it('passes static props to the DOM element', () => {
		render(ArkDiv, { id: 'prop-test', class: 'my-class' });
		const el = document.getElementById('prop-test');
		expect(el).toHaveClass('my-class');
	});

	it('renders different element types', () => {
		render(ArkButton, { type: 'submit' });
		const btn = screen.getByRole('button');
		expect(btn.tagName.toLowerCase()).toBe('button');
		expect(btn).toHaveAttribute('type', 'submit');
	});

	it('renders text children', () => {
		render(ArkWithText);
		expect(screen.getByText('Hello Factory')).toBeInTheDocument();
		expect(document.getElementById('with-text')?.tagName.toLowerCase()).toBe('div');
	});

	it('forwards extra data attributes', () => {
		render(ArkDiv, { id: 'data-test', 'data-custom': 'hello' });
		expect(document.getElementById('data-test')).toHaveAttribute('data-custom', 'hello');
	});
});

describe('ark factory – asChild', () => {
	it('renders the asChild component instead of the default element', () => {
		render(ArkWithAsChild, { href: 'https://example.com' });
		const anchor = document.getElementById('aschild-anchor') as HTMLAnchorElement;
		expect(anchor).not.toBeNull();
		expect(anchor?.tagName.toLowerCase()).toBe('a');
	});

	it('merges host props into the asChild element via propsFn', () => {
		render(ArkWithAsChild, { href: 'https://example.com' });
		const anchor = document.getElementById('aschild-anchor') as HTMLAnchorElement;
		expect(anchor).toHaveClass('host-class');
		expect(anchor).toHaveAttribute('data-value', '42');
	});

	it('allows propsFn to accept additional props that get merged', () => {
		render(ArkWithAsChild, { href: 'https://example.com' });
		const anchor = document.getElementById('aschild-anchor') as HTMLAnchorElement;
		expect(anchor).toHaveAttribute('data-extra', 'yes');
	});

	it('does not render the default host element when asChild is used', () => {
		render(ArkWithAsChild, { href: 'https://example.com' });
		expect(document.getElementById('aschild-host')).toBeNull();
	});
});

describe('ark factory – reactive props', () => {
	it('updates a single reactive prop when state changes', async () => {
		render(ReactiveClass);
		expect(document.getElementById('reactive-target')).toHaveClass('initial');

		await user.click(document.getElementById('btn-change')!);
		await waitFor(() => {
			expect(document.getElementById('reactive-target')).toHaveClass('updated');
			expect(document.getElementById('reactive-target')).not.toHaveClass('initial');
		});
	});

	it('updates spread props reactively when a derived object changes', async () => {
		render(ReactiveSpreading);
		expect(document.getElementById('spread-target')).toHaveClass('extra-a');
		expect(document.getElementById('spread-target')).toHaveAttribute('data-test', 'yes');

		await user.click(document.getElementById('btn-swap')!);
		await waitFor(() => {
			expect(document.getElementById('spread-target')).toHaveClass('extra-b');
			expect(document.getElementById('spread-target')).not.toHaveClass('extra-a');
		});
	});
});

describe('ark factory – intermediate component (trackSplit + mergeProps)', () => {
	it('renders correct element and computed props from MockItem', () => {
		render(MockItem, { value: 'foo' });
		const el = document.getElementById('item-foo');
		expect(el).not.toBeNull();
		expect(el?.tagName.toLowerCase()).toBe('div');
		expect(el).toHaveAttribute('role', 'option');
		expect(el).toHaveAttribute('data-value', 'foo');
	});

	it('passes extra user props through to the element via rest', () => {
		render(MockItem, { value: 'bar', 'data-custom': 'yes' });
		const el = document.getElementById('item-bar');
		expect(el).toHaveAttribute('data-custom', 'yes');
	});

	it('renders children inside the intermediate component', () => {
		render(MockItemWithChildren, { value: 'baz' });
		expect(screen.getByText('Item Label')).toBeInTheDocument();
		expect(document.getElementById('item-baz')).toContainElement(screen.getByText('Item Label'));
	});

	it('MockItem renders asChild element instead of default div', () => {
		render(MockItemAsChild, { value: 'link', href: 'https://example.com' });
		const anchor = document.getElementById('aschild-link') as HTMLAnchorElement;
		expect(anchor).not.toBeNull();
		expect(anchor?.tagName.toLowerCase()).toBe('a');
		// asChild replaces the default div — it should not exist
		expect(document.getElementById('item-link')).toBeNull();
	});

	it('MockItem asChild merges host computed props via propsFn', () => {
		render(MockItemAsChild, { value: 'link2', href: 'https://example.com' });
		const anchor = document.getElementById('aschild-link2') as HTMLAnchorElement;
		expect(anchor).toHaveAttribute('role', 'option');
		expect(anchor).toHaveAttribute('data-value', 'link2');
	});

	it('MockInput renders an input element with computed and user props merged', () => {
		render(MockInput, { computedId: 'editable-input', 'data-part': 'input' });
		const input = document.getElementById('editable-input') as HTMLInputElement;
		expect(input).not.toBeNull();
		expect(input?.tagName.toLowerCase()).toBe('input');
		expect(input).toHaveAttribute('type', 'text');
		expect(input).toHaveAttribute('data-part', 'input');
	});

	it('user props override computed props when passed to MockInput', () => {
		render(MockInput, { computedId: 'my-input', type: 'email' });
		const input = document.getElementById('my-input') as HTMLInputElement;
		expect(input).toHaveAttribute('type', 'email');
	});

	it('MockItemReactive derives aria-selected from value reactively', () => {
		render(MockItemReactive, { value: 'b' });
		const el = document.getElementById('ritem-b');
		expect(el).toHaveAttribute('aria-selected', 'true');
		expect(el).toHaveAttribute('data-selected', '');
	});

	it('MockItemReactive does not set aria-selected when value does not match', () => {
		render(MockItemReactive, { value: 'a' });
		const el = document.getElementById('ritem-a');
		expect(el).toHaveAttribute('aria-selected', 'false');
		expect(el).not.toHaveAttribute('data-selected');
	});
});

describe('ark factory – reactive asChild', () => {
	it('propagates reactive props to the asChild element', async () => {
		render(ReactiveAsChild);
		expect(document.getElementById('aschild-btn')).not.toBeDisabled();

		await user.click(document.getElementById('btn-toggle')!);
		await waitFor(() => {
			expect(document.getElementById('aschild-btn')).toBeDisabled();
		});
	});
});
