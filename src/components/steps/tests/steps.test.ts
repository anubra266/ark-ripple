import user from '@testing-library/user-event';
import { waitFor } from '@testing-library/dom';
import { screen } from '../../../test-utils';
import { render } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Steps', () => {
	it('should show the first step content by default', () => {
		render(ComponentUnderTest, {});
		expect(screen.getByText('Content: First')).toBeVisible();
	});

	it('should navigate to next step on Next click', async () => {
		render(ComponentUnderTest, {});
		await user.click(screen.getByText('Next'));
		await waitFor(() => expect(screen.getByText('Content: Second')).toBeVisible());
	});

	it('should navigate to prev step on Back click', async () => {
		render(ComponentUnderTest, { defaultStep: 1 });
		await user.click(screen.getByText('Back'));
		await waitFor(() => expect(screen.getByText('Content: First')).toBeVisible());
	});

	it('should show completed content when all steps are done', async () => {
		render(ComponentUnderTest, {});
		await user.click(screen.getByText('Next'));
		await user.click(screen.getByText('Next'));
		await user.click(screen.getByText('Next'));
		await waitFor(() => expect(screen.getByText('Complete')).toBeVisible());
	});
});
