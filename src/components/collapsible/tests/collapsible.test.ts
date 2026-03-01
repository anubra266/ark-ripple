import user from '@testing-library/user-event';
import { render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Collapsible', () => {
  it('should toggle', async () => {
    render(ComponentUnderTest);

    expect(screen.getByText('Content')).not.toBeVisible();

    await user.click(screen.getByRole('button', { name: 'Toggle' }));
    await waitFor(() => {
      expect(screen.queryByText('Content')).toBeVisible();
    });
  });

  it('should be fully controlled (true)', async () => {
    render(ComponentUnderTest, { open: true });

    await user.click(screen.getByRole('button', { name: 'Toggle' }));
    expect(screen.getByText('Content')).toBeVisible();
  });

  it('should be fully controlled (false)', async () => {
    render(ComponentUnderTest, { open: false });

    await user.click(screen.getByRole('button', { name: 'Toggle' }));
    await waitFor(() => expect(screen.getByText('Content')).not.toBeVisible());
  });

  it('should lazy mount', async () => {
    render(ComponentUnderTest, { lazyMount: true });
    expect(screen.queryByText('Content')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Toggle' }));

    await waitFor(() => {
      expect(screen.queryByText('Content')).toBeVisible();
    });
  });

  it('should unmount on exit', async () => {
    render(ComponentUnderTest, { unmountOnExit: true });
    expect(screen.queryByText('Content')).not.toBeVisible();

    await user.click(screen.getByRole('button', { name: 'Toggle' }));
    expect(screen.getByText('Content')).toBeVisible();

    await user.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.queryByText('Content')).not.toBeInTheDocument();
    });
  });

  it('should lazy mount and unmount on exit', async () => {
    render(ComponentUnderTest, { lazyMount: true, unmountOnExit: true });

    expect(screen.queryByText('Content')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Toggle' }));
    expect(screen.getByText('Content')).toBeVisible();

    await user.click(screen.getByRole('button', { name: 'Toggle' }));

    await waitFor(() => {
      expect(screen.queryByText('Content')).not.toBeInTheDocument();
    });
  });
});
