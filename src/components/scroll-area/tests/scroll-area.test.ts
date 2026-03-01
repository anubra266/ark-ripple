import { screen } from '../../../test-utils';
import { render } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Scroll Area', () => {
	it('should render the root element', () => {
		const { container } = render(ComponentUnderTest, {});
		expect(container.querySelector('[data-part="root"]')).toBeInTheDocument();
	});

	it('should render the viewport', () => {
		const { container } = render(ComponentUnderTest, {});
		expect(container.querySelector('[data-part="viewport"]')).toBeInTheDocument();
	});

	it('should render the content', () => {
		const { container } = render(ComponentUnderTest, {});
		expect(container.querySelector('[data-part="content"]')).toBeInTheDocument();
	});

	it('should render content text', () => {
		render(ComponentUnderTest, {});
		expect(
			screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
		).toBeInTheDocument();
	});

	it('should render vertical scrollbar', () => {
		const { container } = render(ComponentUnderTest, {});
		const scrollbars = container.querySelectorAll('[data-part="scrollbar"]');
		const vertical = Array.from(scrollbars).find(
			(el) => el.getAttribute('data-orientation') === 'vertical',
		);
		expect(vertical).toBeInTheDocument();
	});

	it('should render horizontal scrollbar', () => {
		const { container } = render(ComponentUnderTest, {});
		const scrollbars = container.querySelectorAll('[data-part="scrollbar"]');
		const horizontal = Array.from(scrollbars).find(
			(el) => el.getAttribute('data-orientation') === 'horizontal',
		);
		expect(horizontal).toBeInTheDocument();
	});

	it('should render thumbs inside scrollbars', () => {
		const { container } = render(ComponentUnderTest, {});
		const thumbs = container.querySelectorAll('[data-part="thumb"]');
		expect(thumbs.length).toBe(2);
	});

	it('should render the corner', () => {
		const { container } = render(ComponentUnderTest, {});
		expect(container.querySelector('[data-part="corner"]')).toBeInTheDocument();
	});
});
