import { render, screen } from '../../../test-utils';
import { BasicTest, WithFallbackTest } from './basic.ripple';

describe('ClientOnly', () => {
  it('should render children on the client', async () => {
    render(BasicTest);
    await screen.findByText('Client Content');
  });

  it('should render children and not fallback when mounted', async () => {
    render(WithFallbackTest);
    await screen.findByText('Client Content');
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
});
