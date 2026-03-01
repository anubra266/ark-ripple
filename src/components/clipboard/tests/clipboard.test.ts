import { render, screen, fireEvent, waitFor } from '../../../test-utils';
import { ClipboardBasicTest } from './basic.ripple';

describe('Clipboard', () => {
	beforeEach(() => {
		vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue(undefined);
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('should render the clipboard trigger button', () => {
		render(ClipboardBasicTest);
		expect(screen.getByRole('button', { name: 'Copy to clipboard' })).toBeInTheDocument();
	});

	it('should render the clipboard input with the value', () => {
		render(ClipboardBasicTest);
		const input = screen.getByDisplayValue('https://ark-ui.com');
		expect(input).toBeInTheDocument();
	});

	it('should copy the value to clipboard on trigger click', async () => {
		render(ClipboardBasicTest);
		const trigger = screen.getByRole('button', { name: 'Copy to clipboard' });
		fireEvent.click(trigger);
		await waitFor(() => {
			expect(navigator.clipboard.writeText).toHaveBeenCalledWith('https://ark-ui.com');
		});
	});

	it('should render the label', () => {
		render(ClipboardBasicTest);
		expect(screen.getByText('Copy this link')).toBeInTheDocument();
	});
});
