import { render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Fieldset', () => {
	it('should set textbox as disabled when fieldset is disabled', async () => {
		render(ComponentUnderTest, { disabled: true });
		expect(screen.getByRole('textbox', { name: /label/i })).toBeDisabled();
	});

	it('should display helper text', async () => {
		render(ComponentUnderTest);
		expect(screen.getByText('Fieldset Helper Text')).toBeInTheDocument();
	});

	it('should display error text when invalid', async () => {
		render(ComponentUnderTest, { invalid: true });
		expect(screen.getByText('Fieldset Error Text')).toBeInTheDocument();
	});

	it('should not display error text when not invalid', async () => {
		render(ComponentUnderTest);
		expect(screen.queryByText('Fieldset Error Text')).not.toBeInTheDocument();
	});

	it('should render aria-labelledby on the fieldset', async () => {
		render(ComponentUnderTest);
		const fieldset = document.querySelector('fieldset')!;
		expect(fieldset).toHaveAttribute('aria-labelledby', expect.stringContaining('legend'));
	});

	it('should set aria-describedby with helper text', async () => {
		render(ComponentUnderTest);
		const fieldset = document.querySelector('fieldset')!;
		await waitFor(() => {
			expect(fieldset).toHaveAttribute('aria-describedby', expect.stringContaining('helper-text'));
		});
	});

	it('should set aria-describedby with error text and helper text when invalid', async () => {
		render(ComponentUnderTest, { invalid: true });
		const fieldset = document.querySelector('fieldset')!;
		await waitFor(() => {
			const describedBy = fieldset.getAttribute('aria-describedby');
			expect(describedBy).toContain('error-text');
			expect(describedBy).toContain('helper-text');
		});
	});
});
