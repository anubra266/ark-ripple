import user from '@testing-library/user-event';
import { render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Carousel', () => {
  it('should render slide content', async () => {
    render(ComponentUnderTest);

    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.getByText('Slide 5')).toBeInTheDocument();
  });

  it('should render prev and next trigger buttons', async () => {
    render(ComponentUnderTest);

    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument();
  });

  it('should disable the prev trigger on the first page', async () => {
    render(ComponentUnderTest);

    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeDisabled();
  });

  it('should render indicators for each slide', async () => {
    render(ComponentUnderTest);

    expect(screen.getAllByRole('button', { name: /Go to slide/i })).toHaveLength(5);
  });

  it('should mark the first indicator as current on initial render', async () => {
    render(ComponentUnderTest);

    const indicators = screen.getAllByRole('button', { name: /Go to slide/i });
    expect(indicators[0]).toHaveAttribute('data-current');
  });

  it('should navigate to a page when clicking an indicator', async () => {
    render(ComponentUnderTest);

    const indicators = screen.getAllByRole('button', { name: /Go to slide/i });
    await user.click(indicators[2]);

    expect(indicators[2]).toHaveAttribute('data-current');
  });

  it('should call onPageChange when clicking an indicator', async () => {
    const onPageChange = vi.fn();
    render(ComponentUnderTest, { onPageChange });

    const indicators = screen.getAllByRole('button', { name: /Go to slide/i });
    await user.click(indicators[3]);

    await waitFor(() => expect(onPageChange).toHaveBeenCalled());
  });

  it('should remove data-current from previous indicator after navigation', async () => {
    render(ComponentUnderTest);

    const indicators = screen.getAllByRole('button', { name: /Go to slide/i });
    await user.click(indicators[4]);

    expect(indicators[0]).not.toHaveAttribute('data-current');
    expect(indicators[4]).toHaveAttribute('data-current');
  });
});
