import user from '@testing-library/user-event';
import { waitFor } from '@testing-library/dom';
import { screen } from '../../../test-utils';
import { render } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Toggle Group', () => {
	it('should handle default value', () => {
		render(ComponentUnderTest, { defaultValue: ['a'] });
		expect(screen.getByText('A')).toBeChecked();
	});

	it('should handle onValueChange', async () => {
		const onValueChange = vi.fn();
		render(ComponentUnderTest, { onValueChange });

		await user.click(screen.getByText('A'));
		expect(onValueChange).toHaveBeenCalledWith(expect.objectContaining({ value: ['a'] }));
	});

	it('should handle multiple selection', async () => {
		const onValueChange = vi.fn();
		render(ComponentUnderTest, { multiple: true, onValueChange });

		await user.click(screen.getByText('A'));
		await user.click(screen.getByText('B'));
		expect(onValueChange).toHaveBeenLastCalledWith(expect.objectContaining({ value: ['a', 'b'] }));
	});

	it('should handle disabled state', () => {
		render(ComponentUnderTest, { disabled: true });

		expect(screen.getByText('A')).toBeDisabled();
		expect(screen.getByText('B')).toBeDisabled();
		expect(screen.getByText('C')).toBeDisabled();
	});

	it('should loop focus by default', async () => {
		render(ComponentUnderTest, {});

		const firstToggle = screen.getByText('A');
		const lastToggle = screen.getByText('C');

		await user.click(lastToggle);
		await waitFor(() => expect(lastToggle).toHaveFocus());

		await user.keyboard('[ArrowRight]');
		await waitFor(() => expect(firstToggle).toHaveFocus());
	});

	it('should not loop focus if disabled', async () => {
		render(ComponentUnderTest, { loopFocus: false });

		const firstToggle = screen.getByText('A');
		const lastToggle = screen.getByText('C');

		await user.click(lastToggle);
		await waitFor(() => expect(lastToggle).toHaveFocus());

		await user.keyboard('[ArrowRight]');
		await waitFor(() => expect(firstToggle).not.toHaveFocus());
		expect(lastToggle).toHaveFocus();
	});
});
