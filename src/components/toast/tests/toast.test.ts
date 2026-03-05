import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Toast', () => {
  it('should show a toast message when created', async () => {
    render(ComponentUnderTest);

    fireEvent.click(screen.getByText('Create Toast'));

    await waitFor(() => expect(screen.queryByText('Title')).toBeVisible());
    await waitFor(() => expect(screen.queryByText('Description')).toBeVisible());
  });

  it('should hide a toast message when closed', async () => {
    render(ComponentUnderTest);

    fireEvent.click(screen.getByText('Create Toast'));

    await waitFor(() => expect(screen.queryByText('Title')).toBeVisible());
    fireEvent.click(screen.getByText('Close'));

    await waitFor(() => expect(screen.queryByText('Title')).not.toBeInTheDocument());
  });

  it('should render close trigger', async () => {
    render(ComponentUnderTest);

    fireEvent.click(screen.getByText('Create Toast'));

    await waitFor(() => expect(screen.getByText('Close')).toBeVisible());
  });

  it('should render action trigger', async () => {
    render(ComponentUnderTest);

    fireEvent.click(screen.getByText('Create Toast'));

    await waitFor(() => expect(screen.getByText('Start')).toBeVisible());
  });

  it('should render multiple toasts', async () => {
    render(ComponentUnderTest);

    fireEvent.click(screen.getByText('Create Toast'));
    fireEvent.click(screen.getByText('Create Toast'));

    await waitFor(() => expect(screen.getAllByText('Title')).toHaveLength(2));
  });
});
