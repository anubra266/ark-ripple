import { render, screen } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Focus Trap', () => {
	it('should render children', async () => {
		render(ComponentUnderTest, {});
		expect(screen.getByPlaceholderText('First')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Second')).toBeInTheDocument();
		expect(screen.getByText('Button')).toBeInTheDocument();
	});

	it('should render when disabled', async () => {
		render(ComponentUnderTest, { disabled: true });
		expect(screen.getByPlaceholderText('First')).toBeInTheDocument();
	});
});
