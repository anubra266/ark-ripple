import { render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Avatar', () => {
	it('should render the fallback when no src is provided', async () => {
		render(ComponentUnderTest);
		await screen.findByText('PA');
	});

	it('should render the fallback when src fails to load', async () => {
		render(ComponentUnderTest, { src: 'invalid-src' });
		await screen.findByText('PA');
	});

	it('should call onStatusChange when image load status changes', async () => {
		const onStatusChange = vi.fn();
		render(ComponentUnderTest, { src: 'invalid-src', onStatusChange });
		const img = document.querySelector('img');
		img?.dispatchEvent(new Event('error'));
		await waitFor(() => expect(onStatusChange).toHaveBeenCalled());
	});
});
