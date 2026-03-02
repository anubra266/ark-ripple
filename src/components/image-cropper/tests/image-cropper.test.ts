import { render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('ImageCropper', () => {
  it('should render the root element', async () => {
    render(ComponentUnderTest);
    await waitFor(() =>
      expect(screen.getByRole('group', { name: 'Image cropper' })).toBeInTheDocument(),
    );
  });

  it('should render the viewport', async () => {
    render(ComponentUnderTest);
    await waitFor(() => expect(screen.getByTestId('viewport')).toBeInTheDocument());
  });

  it('should render the selection area', async () => {
    render(ComponentUnderTest);
    await waitFor(() => expect(screen.getByTestId('selection')).toBeInTheDocument());
  });

  it('should render the image', async () => {
    render(ComponentUnderTest);
    await waitFor(() =>
      expect(screen.getByAltText('Sample')).toBeInTheDocument(),
    );
  });

  it('should render the selection with slider role', async () => {
    render(ComponentUnderTest);
    await waitFor(() => {
      const selection = screen.getByTestId('selection');
      expect(selection).toHaveAttribute('role', 'slider');
    });
  });

  it('should accept aspectRatio prop', async () => {
    render(ComponentUnderTest, { aspectRatio: 16 / 9 });
    await waitFor(() =>
      expect(screen.getByRole('group', { name: 'Image cropper' })).toBeInTheDocument(),
    );
  });

  it('should accept cropShape prop', async () => {
    render(ComponentUnderTest, { cropShape: 'circle' });
    await waitFor(() => {
      const root = screen.getByRole('group', { name: 'Image cropper' });
      expect(root).toHaveAttribute('data-shape', 'circle');
    });
  });

  it('should accept fixedCropArea prop', async () => {
    render(ComponentUnderTest, { fixedCropArea: true });
    await waitFor(() =>
      expect(screen.getByRole('group', { name: 'Image cropper' })).toBeInTheDocument(),
    );
  });

  it('should accept initialCrop prop', async () => {
    render(ComponentUnderTest, { initialCrop: { x: 50, y: 30, width: 200, height: 120 } });
    await waitFor(() =>
      expect(screen.getByRole('group', { name: 'Image cropper' })).toBeInTheDocument(),
    );
  });

  it('should render handles', async () => {
    render(ComponentUnderTest);
    await waitFor(() => {
      const handles = screen.getByTestId('selection').querySelectorAll('[data-part="handle"]');
      expect(handles.length).toBeGreaterThan(0);
    });
  });
});
