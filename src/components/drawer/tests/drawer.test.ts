import user from '@testing-library/user-event';
import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Drawer', () => {
	it('should show drawer content when opened', async () => {
		render(ComponentUnderTest);

		await user.click(screen.getByRole('button', { name: 'Open Drawer' }));
		expect(await screen.findByText('Drawer Title')).toBeVisible();

		await user.click(screen.getByRole('button', { name: 'Close' }));
		await waitFor(() => expect(screen.queryByText('Drawer Title')).not.toBeVisible());
	});

	it('should hide positioner after close', async () => {
		render(ComponentUnderTest);

		await user.click(screen.getByRole('button', { name: 'Open Drawer' }));
		expect(screen.getByTestId('positioner')).not.toHaveAttribute('hidden');

		await user.click(screen.getByRole('button', { name: 'Close' }));
		await waitFor(() => expect(screen.getByTestId('positioner')).toHaveAttribute('hidden'));
	});

	it('should invoke onOpenChange when drawer is closed', async () => {
		const onOpenChange = vi.fn();
		render(ComponentUnderTest, { open: true, onOpenChange });

		await user.click(screen.getByRole('button', { name: 'Close' }));
		expect(onOpenChange).toHaveBeenCalledTimes(1);
	});

	it('should be able to lazy mount', async () => {
		render(ComponentUnderTest, { lazyMount: true });

		expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

		fireEvent.click(screen.getByRole('button', { name: 'Open Drawer' }));
		await waitFor(() => expect(screen.getByTestId('positioner')).toBeVisible());

		await user.click(screen.getByRole('button', { name: 'Close' }));
		expect(screen.getByTestId('positioner')).toBeInTheDocument();
	});

	it('should not have aria-controls if lazy mounted', async () => {
		render(ComponentUnderTest, { lazyMount: true });

		expect(screen.getByRole('button', { name: 'Open Drawer' })).not.toHaveAttribute(
			'aria-controls',
		);
	});

	it('should lazy mount and unmount on exit', async () => {
		render(ComponentUnderTest, { lazyMount: true, unmountOnExit: true });

		expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

		fireEvent.click(screen.getByRole('button', { name: 'Open Drawer' }));
		await waitFor(() => expect(screen.getByTestId('positioner')).toBeInTheDocument());

		await user.click(screen.getByRole('button', { name: 'Close' }));
		await waitFor(() => expect(screen.queryByTestId('positioner')).not.toBeInTheDocument());
	});

	it('should be fully controlled (open)', async () => {
		render(ComponentUnderTest, { open: true });

		expect(screen.getByRole('button', { name: 'Close' })).toBeVisible();

		await user.click(screen.getByRole('button', { name: 'Close' }));
		expect(screen.getByRole('button', { name: 'Close' })).toBeVisible();
	});

	it('should be fully controlled (closed)', async () => {
		render(ComponentUnderTest, { open: false });

		expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();

		fireEvent.click(screen.getByRole('button', { name: 'Open Drawer' }));
		expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
	});

	it('should render grabber', async () => {
		render(ComponentUnderTest, { open: true });

		expect(document.querySelector('[data-part="grabber"]')).toBeInTheDocument();
	});
});
