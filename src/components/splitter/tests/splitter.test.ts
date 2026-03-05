import { render, within, screen } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Splitter', () => {
  it('should render panel A', async () => {
    const { container } = render(ComponentUnderTest);
    expect(await within(container).findByText('A')).toBeInTheDocument();
  });

  it('should render panel B', async () => {
    const { container } = render(ComponentUnderTest);
    expect(await within(container).findByText('B')).toBeInTheDocument();
  });

  it('should render the resize trigger as separator', async () => {
    const { container } = render(ComponentUnderTest);
    const trigger = await within(container).findByRole('separator');
    expect(trigger).toBeInTheDocument();
  });

  it('should set aria-label on the resize trigger', async () => {
    const { container } = render(ComponentUnderTest);
    const trigger = await within(container).findByRole('separator');
    expect(trigger).toHaveAttribute('aria-label', 'Resize');
  });

  it('should render the root element', async () => {
    const { container } = render(ComponentUnderTest);
    const root = container.querySelector('[data-part="root"]');
    expect(root).toBeInTheDocument();
  });

  it('should render panels with data-part attribute', async () => {
    const { container } = render(ComponentUnderTest);
    const panels = container.querySelectorAll('[data-part="panel"]');
    expect(panels.length).toBe(2);
  });

  it('should render with horizontal orientation by default', async () => {
    const { container } = render(ComponentUnderTest);
    const root = container.querySelector('[data-part="root"]');
    expect(root).toHaveAttribute('data-orientation', 'horizontal');
  });
});

describe('Splitter / Vertical', () => {
  it('should render with vertical orientation', async () => {
    const { container } = render(ComponentUnderTest, { orientation: 'vertical' });
    const root = container.querySelector('[data-part="root"]');
    expect(root).toHaveAttribute('data-orientation', 'vertical');
  });
});
