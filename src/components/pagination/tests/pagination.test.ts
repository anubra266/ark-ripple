import { render, screen, waitFor } from '../../../test-utils';
import user from '@testing-library/user-event';
import { ComponentUnderTest } from './basic.ripple';

describe('Pagination', () => {
  it('should have no a11y violations', async () => {
    const { container } = render(ComponentUnderTest, { count: 100, pageSize: 10 });
    const { axe } = await import('vitest-axe');
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should update page when item is clicked', async () => {
    render(ComponentUnderTest, { count: 100, pageSize: 10 });

    await waitFor(() => {
      expect(screen.getByLabelText('page 2')).toBeInTheDocument();
    });

    const pageTwoLink = screen.getByLabelText('page 2');
    expect(pageTwoLink).not.toHaveAttribute('aria-current', 'page');

    await user.click(pageTwoLink);
    expect(pageTwoLink).toHaveAttribute('aria-current', 'page');
  });

  it('should update page when next button is clicked', async () => {
    render(ComponentUnderTest, { count: 100, pageSize: 10 });

    await waitFor(() => {
      expect(screen.getByLabelText('page 1')).toBeInTheDocument();
    });

    const pageOneLink = screen.getByLabelText('page 1');
    expect(pageOneLink).toHaveAttribute('aria-current', 'page');

    const nextPageLink = screen.getByText(/next/i);
    await user.click(nextPageLink);

    const pageTwoLink = screen.getByLabelText('page 2');
    expect(pageTwoLink).toHaveAttribute('aria-current', 'page');
  });

  it('should update page when prev button is clicked', async () => {
    render(ComponentUnderTest, { count: 100, pageSize: 10 });

    await waitFor(() => {
      expect(screen.getByLabelText('page 2')).toBeInTheDocument();
    });

    const pageTwoLink = screen.getByLabelText('page 2');

    await user.click(pageTwoLink);
    expect(pageTwoLink).toHaveAttribute('aria-current', 'page');

    const prevPageLink = screen.getByText(/prev/i);
    await user.click(prevPageLink);

    const pageOneLink = screen.getByLabelText('page 1');
    expect(pageOneLink).toHaveAttribute('aria-current', 'page');
  });

  it('should render correct number of pages', async () => {
    render(ComponentUnderTest, { count: 50, pageSize: 10 });

    await waitFor(() => {
      expect(screen.getByLabelText('page 1')).toBeInTheDocument();
    });

    expect(screen.getByLabelText(/page 5/)).toBeInTheDocument();
  });

  it('should disable prev button on first page', async () => {
    render(ComponentUnderTest, { count: 100, pageSize: 10 });

    await waitFor(() => {
      expect(screen.getByText(/prev/i)).toBeInTheDocument();
    });

    const prevButton = screen.getByText(/prev/i);
    expect(prevButton).toBeDisabled();
  });

  it('should call onPageChange when page changes', async () => {
    const onPageChange = vi.fn();
    render(ComponentUnderTest, { count: 100, pageSize: 10, onPageChange });

    await waitFor(() => {
      expect(screen.getByLabelText('page 2')).toBeInTheDocument();
    });

    await user.click(screen.getByLabelText('page 2'));

    expect(onPageChange).toHaveBeenCalledWith(expect.objectContaining({ page: 2 }));
  });

  it('should support controlled page', async () => {
    render(ComponentUnderTest, { count: 100, pageSize: 10, page: 3 });

    await waitFor(() => {
      expect(screen.getByLabelText('page 3')).toBeInTheDocument();
    });

    expect(screen.getByLabelText('page 3')).toHaveAttribute('aria-current', 'page');
  });
});
