import user from '@testing-library/user-event';
import { render, screen, waitFor } from '../../../test-utils';

vi.mock('@zag-js/file-utils', () => ({
	downloadFile: vi.fn(),
}));

import { downloadFile } from '@zag-js/file-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('DownloadTrigger', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('should render a button', () => {
		render(ComponentUnderTest);
		expect(screen.getByRole('button', { name: 'Download' })).toBeInTheDocument();
	});

	it('should call downloadFile with plain data on click', async () => {
		render(ComponentUnderTest, { data: 'hello', fileName: 'hello.txt', mimeType: 'text/plain' });
		await user.click(screen.getByRole('button'));
		expect(downloadFile).toHaveBeenCalledWith(
			expect.objectContaining({ file: 'hello', name: 'hello.txt', type: 'text/plain' }),
		);
	});

	it('should call downloadFile with function data on click', async () => {
		const getData = vi.fn(() => 'from function');
		render(ComponentUnderTest, { data: getData });
		await user.click(screen.getByRole('button'));
		expect(getData).toHaveBeenCalled();
		expect(downloadFile).toHaveBeenCalledWith(expect.objectContaining({ file: 'from function' }));
	});

	it('should call downloadFile with async function data on click', async () => {
		const getData = vi.fn(async () => 'from promise');
		render(ComponentUnderTest, { data: getData });
		await user.click(screen.getByRole('button'));
		await waitFor(() =>
			expect(downloadFile).toHaveBeenCalledWith(expect.objectContaining({ file: 'from promise' })),
		);
	});

	it('should call the onClick handler', async () => {
		const onClick = vi.fn();
		render(ComponentUnderTest, { onClick });
		await user.click(screen.getByRole('button'));
		expect(onClick).toHaveBeenCalled();
	});

	it('should not call downloadFile if onClick calls preventDefault', async () => {
		const onClick = vi.fn((e: MouseEvent) => e.preventDefault());
		render(ComponentUnderTest, { onClick });
		await user.click(screen.getByRole('button'));
		expect(onClick).toHaveBeenCalled();
		expect(downloadFile).not.toHaveBeenCalled();
	});
});
