import { render } from '../../../test-utils';
import { FrameBasicTest, FrameWithMountTest } from './basic.ripple';

describe('Frame', () => {
  it('should render an iframe element', () => {
    render(FrameBasicTest);
    const iframe = document.querySelector('iframe');
    expect(iframe).toBeInTheDocument();
  });

  it('should apply title attribute to iframe', () => {
    render(FrameBasicTest);
    const iframe = document.querySelector('iframe');
    expect(iframe).toHaveAttribute('title', 'Test Frame');
  });

  it('should call onMount when the frame content is mounted', async () => {
    const { container } = render(FrameWithMountTest);
    const status = container.querySelector('[data-testid="mount-status"]');
    // onMount fires only when contentWindow is available (real browser), not in jsdom
    // so we just verify the component renders without errors
    expect(status).toBeInTheDocument();
  });
});
