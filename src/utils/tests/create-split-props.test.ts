import user from '@testing-library/user-event';
import { render, screen, waitFor } from '../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('createSplitProps', () => {
	it('should extract initial values', () => {
		render(ComponentUnderTest);

		expect(screen.getByTestId('value')).toHaveTextContent('initial');
		expect(screen.getByTestId('disabled')).toHaveTextContent('false');
	});

	it('should reactively update extracted string value', async () => {
		render(ComponentUnderTest);

		expect(screen.getByTestId('value')).toHaveTextContent('initial');

		await user.click(screen.getByRole('button', { name: 'Change Value' }));

		await waitFor(() => {
			expect(screen.getByTestId('value')).toHaveTextContent('updated');
		});
	});

	it('should reactively update extracted boolean value', async () => {
		render(ComponentUnderTest);

		expect(screen.getByTestId('disabled')).toHaveTextContent('false');

		await user.click(screen.getByRole('button', { name: 'Disable' }));

		await waitFor(() => {
			expect(screen.getByTestId('disabled')).toHaveTextContent('true');
		});
	});

	it('should pass rest props through', () => {
		render(ComponentUnderTest);

		const container = screen.getByTestId('value').closest('[data-extra]');
		expect(container).toHaveAttribute('data-extra', 'rest-prop');
	});
});
