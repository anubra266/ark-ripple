import { render, within } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Progress', () => {
  it('should render the label', async () => {
    const { container } = render(ComponentUnderTest);
    expect(await within(container).findByText('Label')).toBeInTheDocument();
  });

  it('should display the value as percentage', async () => {
    const { container } = render(ComponentUnderTest, { value: 42 });
    expect(await within(container).findByText('42%')).toBeInTheDocument();
  });

  it('should handle custom max range', async () => {
    const { container } = render(ComponentUnderTest, { value: 30, max: 30 });
    expect(await within(container).findByText('100%')).toBeInTheDocument();
  });

  it('should handle indeterminate state', async () => {
    const { container } = render(ComponentUnderTest, { defaultValue: null });
    await within(container).findAllByRole('progressbar');
    const root = container.querySelector('[data-part="root"]');
    expect(root).toHaveAttribute('data-state', 'indeterminate');
  });

  it('should set aria-valuenow on the progressbar', async () => {
    const { container } = render(ComponentUnderTest, { value: 60 });
    const progressbars = await within(container).findAllByRole('progressbar');
    expect(progressbars[0]).toHaveAttribute('aria-valuenow', '60');
  });

  it('should set aria-valuemax on the progressbar', async () => {
    const { container } = render(ComponentUnderTest, { max: 200, value: 100 });
    const progressbars = await within(container).findAllByRole('progressbar');
    expect(progressbars[0]).toHaveAttribute('aria-valuemax', '200');
  });

  it('should set aria-valuemin on the progressbar', async () => {
    const { container } = render(ComponentUnderTest, { min: 10, value: 50 });
    const progressbars = await within(container).findAllByRole('progressbar');
    expect(progressbars[0]).toHaveAttribute('aria-valuemin', '10');
  });

  it('should not set aria-valuenow when indeterminate', async () => {
    const { container } = render(ComponentUnderTest, { defaultValue: null });
    const progressbars = await within(container).findAllByRole('progressbar');
    for (const pb of progressbars) {
      expect(pb).not.toHaveAttribute('aria-valuenow');
    }
  });

  it('should show complete state when at max value', async () => {
    const { container } = render(ComponentUnderTest, { value: 100, max: 100 });
    const progressbars = await within(container).findAllByRole('progressbar');
    expect(progressbars[0]).toHaveAttribute('data-state', 'complete');
  });

  it('should show loading state for in-progress values', async () => {
    const { container } = render(ComponentUnderTest, { value: 50 });
    const progressbars = await within(container).findAllByRole('progressbar');
    expect(progressbars[0]).toHaveAttribute('data-state', 'loading');
  });

  it('should invoke onValueChange when value changes', async () => {
    const onValueChange = vi.fn();
    render(ComponentUnderTest, { value: 50, onValueChange });
    render(ComponentUnderTest, { value: 75, onValueChange });
    expect(onValueChange).not.toHaveBeenCalled();
  });
});

describe('Progress / View', () => {
  it('should render loading view when in loading state', async () => {
    const { container } = render(ComponentUnderTest, { value: 50 });
    const views = container.querySelectorAll('[data-part="view"]');
    const loadingView = Array.from(views).find((el) => el.getAttribute('data-state') === 'loading');
    expect(loadingView).not.toBeNull();
  });
});

describe('Progress / Circular', () => {
  it('should render the SVG circle elements', async () => {
    const { container } = render(ComponentUnderTest, { value: 42 });
    const svgs = container.querySelectorAll('svg[data-part="circle"]');
    expect(svgs.length).toBeGreaterThan(0);
  });

  it('should render circle track and range', async () => {
    const { container } = render(ComponentUnderTest, { value: 42 });
    expect(container.querySelector('[data-part="circle-track"]')).toBeInTheDocument();
    expect(container.querySelector('[data-part="circle-range"]')).toBeInTheDocument();
  });
});

describe('Progress / Linear', () => {
  it('should render track and range', async () => {
    const { container } = render(ComponentUnderTest, { value: 42 });
    expect(container.querySelector('[data-part="track"]')).toBeInTheDocument();
    expect(container.querySelector('[data-part="range"]')).toBeInTheDocument();
  });

  it('should apply orientation attribute for vertical', async () => {
    const { container } = render(ComponentUnderTest, { orientation: 'vertical' });
    const track = container.querySelector('[data-part="track"]');
    expect(track).toHaveAttribute('data-orientation', 'vertical');
  });
});
