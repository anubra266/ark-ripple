import user from '@testing-library/user-event';
import { screen } from '../../../test-utils';
import { render } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Radio Group', () => {
	it('should invoke onValueChange if another value has selected', async () => {
		const onValueChange = vi.fn();

		render(ComponentUnderTest, { onValueChange });

		await user.click(screen.getByLabelText('Solid'));
		expect(onValueChange).toHaveBeenCalledWith({ value: 'solid' });
	});

	it('should not invoke onValueChange if option is disabled', async () => {
		const onValueChange = vi.fn();

		render(ComponentUnderTest, { onValueChange });

		await user.click(screen.getByLabelText('Svelte'));
		expect(onValueChange).not.toHaveBeenCalled();
	});

	it('should select item on click', async () => {
		render(ComponentUnderTest);

		await user.click(screen.getByLabelText('React'));
		const input = screen.getByDisplayValue('react');
		expect(input).toBeChecked();
	});

	it('should change selection', async () => {
		render(ComponentUnderTest, { defaultValue: 'react' });

		await user.click(screen.getByLabelText('Solid'));
		expect(screen.getByDisplayValue('solid')).toBeChecked();
		expect(screen.getByDisplayValue('react')).not.toBeChecked();
	});
});
