import { render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Marquee', () => {
  it('should render the root element', async () => {
    render(ComponentUnderTest);
    await waitFor(() => {
      expect(screen.getByTestId('viewport')).toBeInTheDocument();
    });
  });

  it('should render items', async () => {
    render(ComponentUnderTest);
    await waitFor(() => {
      expect(screen.getAllByText('Apple').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Banana').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Cherry').length).toBeGreaterThanOrEqual(1);
    });
  });

  it('should render content copies', async () => {
    render(ComponentUnderTest);
    await waitFor(() => {
      const contents = document.querySelectorAll('[data-part="content"]');
      expect(contents.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('should render the viewport', async () => {
    render(ComponentUnderTest);
    await waitFor(() => {
      const viewport = screen.getByTestId('viewport');
      expect(viewport).toHaveAttribute('data-part', 'viewport');
    });
  });

  it('should accept speed prop', async () => {
    render(ComponentUnderTest, { speed: 100 });
    await waitFor(() => {
      expect(screen.getByTestId('viewport')).toBeInTheDocument();
    });
  });

  it('should accept reverse prop', async () => {
    render(ComponentUnderTest, { reverse: true });
    await waitFor(() => {
      expect(screen.getByTestId('viewport')).toBeInTheDocument();
    });
  });

  it('should accept pauseOnInteraction prop', async () => {
    render(ComponentUnderTest, { pauseOnInteraction: true });
    await waitFor(() => {
      expect(screen.getByTestId('viewport')).toBeInTheDocument();
    });
  });

  it('should accept side prop', async () => {
    render(ComponentUnderTest, { side: 'bottom' });
    await waitFor(() => {
      expect(screen.getByTestId('viewport')).toBeInTheDocument();
    });
  });
});
