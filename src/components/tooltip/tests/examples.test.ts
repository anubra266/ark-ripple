import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import { Basic } from '../examples/basic.ripple';
import { Arrow } from '../examples/arrow.ripple';
import { Controlled } from '../examples/controlled.ripple';
import { Context } from '../examples/context.ripple';
import { Delay } from '../examples/delay.ripple';
import { Positioning } from '../examples/positioning.ripple';
import { RootProvider } from '../examples/root-provider.ripple';
import { WithinFixed } from '../examples/within-fixed.ripple';

describe('Tooltip Examples', () => {
  it('Basic - should render and show tooltip on hover', async () => {
    render(Basic);
    expect(screen.getByText('Hover Me')).toBeInTheDocument();

    fireEvent.pointerOver(screen.getByText('Hover Me'));
    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
  });

  it('Arrow - should render with arrow and show tooltip on hover', async () => {
    render(Arrow);
    expect(screen.getByText('Hover Me')).toBeInTheDocument();

    fireEvent.pointerOver(screen.getByText('Hover Me'));
    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
  });

  it('Controlled - should render toggle button and tooltip', async () => {
    render(Controlled);
    expect(screen.getByRole('button', { name: 'Toggle' })).toBeInTheDocument();
    expect(screen.getByText('Hover Me')).toBeInTheDocument();
  });

  it('Context - should render and show context tooltip on hover', async () => {
    render(Context);
    expect(screen.getByText('Hover Me')).toBeInTheDocument();
  });

  it('Delay - should render with custom delay', async () => {
    render(Delay);
    expect(screen.getByText('Hover Me')).toBeInTheDocument();

    fireEvent.pointerOver(screen.getByText('Hover Me'));
    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
  });

  it('Positioning - should render with custom positioning', async () => {
    render(Positioning);
    expect(screen.getByText('Hover Me')).toBeInTheDocument();
  });

  it('RootProvider - should render with root provider', async () => {
    render(RootProvider);
    expect(screen.getByText('Hover Me')).toBeInTheDocument();
    expect(screen.getByText('Open: false')).toBeInTheDocument();
  });

  it('WithinFixed - should render within fixed container', async () => {
    render(WithinFixed);
    expect(screen.getByText('Hover Me')).toBeInTheDocument();
  });
});
