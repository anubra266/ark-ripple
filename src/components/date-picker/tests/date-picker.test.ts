import user from '@testing-library/user-event';
import { render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Date Picker', () => {
	it('should open calendar when trigger is clicked', async () => {
		render(ComponentUnderTest);

		await user.click(screen.getByRole('button', { name: 'Open calendar' }));
		await waitFor(() => expect(screen.getByRole('application')).toBeVisible());
	});

	it('should close calendar when trigger is clicked again', async () => {
		render(ComponentUnderTest);

		await user.click(screen.getByRole('button', { name: 'Open calendar' }));
		await waitFor(() => expect(screen.getByRole('application')).toBeVisible());

		await user.click(screen.getByRole('button', { name: 'Close calendar' }));
		await waitFor(() =>
			expect(screen.queryByRole('application', { hidden: true })).not.toBeVisible(),
		);
	});

	it('should call onOpenChange when calendar is opened', async () => {
		const onOpenChange = vi.fn();
		render(ComponentUnderTest, { onOpenChange });

		await user.click(screen.getByRole('button', { name: 'Open calendar' }));
		await waitFor(() => expect(onOpenChange).toHaveBeenCalledTimes(1));
	});

	it('should call onValueChange when a date is selected', async () => {
		const onValueChange = vi.fn();
		render(ComponentUnderTest, { onValueChange });

		await user.click(screen.getByRole('button', { name: 'Open calendar' }));
		await waitFor(() => expect(screen.getByRole('application')).toBeVisible());

		const firstDay = screen.getAllByRole('button', { name: /^Choose/ })[0];
		await user.click(firstDay);

		await waitFor(() => expect(onValueChange).toHaveBeenCalledTimes(1));
	});

	it('should be able to lazy mount', async () => {
		render(ComponentUnderTest, { lazyMount: true });

		expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

		await user.click(screen.getByRole('button', { name: 'Open calendar' }));
		await waitFor(() => expect(screen.getByTestId('positioner')).toBeInTheDocument());

		await user.click(screen.getByRole('button', { name: 'Close calendar' }));
		expect(screen.getByTestId('positioner')).toBeInTheDocument();
	});

	it('should lazy mount and unmount on exit', async () => {
		render(ComponentUnderTest, { lazyMount: true, unmountOnExit: true });

		expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

		await user.click(screen.getByRole('button', { name: 'Open calendar' }));
		await waitFor(() => expect(screen.getByTestId('positioner')).toBeInTheDocument());

		await user.click(screen.getByRole('button', { name: 'Close calendar' }));
		await waitFor(() => expect(screen.queryByTestId('positioner')).not.toBeInTheDocument());
	});

	it('should be fully controlled (open=true)', async () => {
		render(ComponentUnderTest, { open: true });

		expect(screen.getByRole('application')).toBeVisible();

		await user.click(screen.getByRole('button', { name: 'Close calendar' }));
		expect(screen.getByRole('application')).toBeVisible();
	});

	it('should be fully controlled (open=false)', async () => {
		render(ComponentUnderTest, { open: false });

		expect(screen.queryByRole('application')).not.toBeInTheDocument();

		await user.click(screen.getByRole('button', { name: 'Open calendar' }));
		expect(screen.queryByRole('application')).not.toBeInTheDocument();
	});
});
