import { render, within } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('QrCode', () => {
  it('should render the svg frame', async () => {
    const { container } = render(ComponentUnderTest);
    const frame = container.querySelector('[data-part="frame"]');
    expect(frame).toBeInTheDocument();
  });

  it('should render the pattern path inside the frame', async () => {
    const { container } = render(ComponentUnderTest);
    const pattern = container.querySelector('[data-part="pattern"]');
    expect(pattern).toBeInTheDocument();
  });

  it('should render the overlay', async () => {
    const { container } = render(ComponentUnderTest);
    const overlay = container.querySelector('[data-part="overlay"]');
    expect(overlay).toBeInTheDocument();
  });

  it('should render the download trigger button', async () => {
    const { container } = render(ComponentUnderTest);
    const button = await within(container).findByRole('button', { name: 'Download' });
    expect(button).toBeInTheDocument();
  });

  it('should render the root element', async () => {
    const { container } = render(ComponentUnderTest);
    const root = container.querySelector('[data-part="root"]');
    expect(root).toBeInTheDocument();
  });
});

describe('QrCode / Download', () => {
  it('should have download trigger with correct data-part', async () => {
    const { container } = render(ComponentUnderTest);
    const trigger = container.querySelector('[data-part="download-trigger"]');
    expect(trigger).toBeInTheDocument();
  });
});
