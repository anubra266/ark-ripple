import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Tour', () => {
  it('should not show content when tour is not started', () => {
    render(ComponentUnderTest);
    // Content is in DOM by default (lazyMount: false) but hidden
    const content = screen.queryByTestId('content');
    if (content) {
      expect(content).toHaveAttribute('data-state', 'closed');
    } else {
      expect(content).not.toBeInTheDocument();
    }
  });

  it('should show step 1 content when tour is started', async () => {
    render(ComponentUnderTest);
    fireEvent.click(screen.getByTestId('start-btn'));

    await waitFor(() => expect(screen.getByTestId('title')).toHaveTextContent('Step 1'));
    expect(screen.getByTestId('description')).toHaveTextContent('First step description');
  });

  it('should navigate to next step when Next button is clicked', async () => {
    render(ComponentUnderTest);
    fireEvent.click(screen.getByTestId('start-btn'));

    await waitFor(() => expect(screen.getByTestId('title')).toHaveTextContent('Step 1'));

    fireEvent.click(screen.getByText('Next', { selector: 'button' }));

    await waitFor(() => expect(screen.getByTestId('title')).toHaveTextContent('Step 2'));
  });

  it('should navigate back when Back button is clicked', async () => {
    render(ComponentUnderTest);
    fireEvent.click(screen.getByTestId('start-btn'));

    await waitFor(() =>
      expect(screen.getByText('Next', { selector: 'button' })).toBeInTheDocument(),
    );
    fireEvent.click(screen.getByText('Next', { selector: 'button' }));

    await waitFor(() => expect(screen.getByTestId('title')).toHaveTextContent('Step 2'));
    fireEvent.click(screen.getByText('Back', { selector: 'button' }));

    await waitFor(() => expect(screen.getByTestId('title')).toHaveTextContent('Step 1'));
  });

  it('should close the tour when close trigger is clicked', async () => {
    render(ComponentUnderTest);
    fireEvent.click(screen.getByTestId('start-btn'));

    await waitFor(() => expect(screen.getByTestId('title')).toHaveTextContent('Step 1'));
    fireEvent.click(screen.getByTestId('close-trigger'));

    await waitFor(() =>
      expect(screen.getByTestId('content')).toHaveAttribute('data-state', 'closed'),
    );
  });

  it('should close the tour when dismiss action is triggered', async () => {
    render(ComponentUnderTest);
    fireEvent.click(screen.getByTestId('start-btn'));

    await waitFor(() =>
      expect(screen.getByText('Next', { selector: 'button' })).toBeInTheDocument(),
    );
    fireEvent.click(screen.getByText('Next', { selector: 'button' }));

    await waitFor(() =>
      expect(screen.getByText('Finish', { selector: 'button' })).toBeInTheDocument(),
    );
    fireEvent.click(screen.getByText('Finish', { selector: 'button' }));

    await waitFor(() =>
      expect(screen.getByTestId('content')).toHaveAttribute('data-state', 'closed'),
    );
  });

  it('should show progress text', async () => {
    render(ComponentUnderTest);
    fireEvent.click(screen.getByTestId('start-btn'));

    await waitFor(() => expect(screen.getByTestId('title')).toHaveTextContent('Step 1'));
    expect(screen.getByTestId('progress-text').textContent).toBeTruthy();
  });

  it('should call onStepChange when navigating steps', async () => {
    const onStepChange = vi.fn();
    render(ComponentUnderTest, { onStepChange });
    fireEvent.click(screen.getByTestId('start-btn'));

    await waitFor(() =>
      expect(screen.getByText('Next', { selector: 'button' })).toBeInTheDocument(),
    );
    fireEvent.click(screen.getByText('Next', { selector: 'button' }));

    await waitFor(() => expect(onStepChange).toHaveBeenCalled());
  });

  it('should call onStatusChange when tour starts', async () => {
    const onStatusChange = vi.fn();
    render(ComponentUnderTest, { onStatusChange });
    fireEvent.click(screen.getByTestId('start-btn'));

    await waitFor(() => expect(screen.getByTestId('title')).toHaveTextContent('Step 1'));
    expect(onStatusChange).toHaveBeenCalled();
  });
});
