import { render, screen, fireEvent, waitFor } from '../../../test-utils';
import { ColorPickerBasicTest } from './basic.ripple';

describe('ColorPicker', () => {
  it('should render the color picker label', () => {
    render(ColorPickerBasicTest);
    expect(screen.getByText('Color')).toBeInTheDocument();
  });

  it('should render the trigger button', () => {
    render(ColorPickerBasicTest);
    expect(screen.getByTestId('trigger')).toBeInTheDocument();
  });

  it('should render the hex input with default value', () => {
    render(ColorPickerBasicTest);
    const input = screen.getByTestId('hex-input');
    expect(input).toBeInTheDocument();
  });

  it('should render the hidden input', () => {
    render(ColorPickerBasicTest);
    const input = screen.getByTestId('hidden-input');
    expect(input).toBeInTheDocument();
  });

  it('should open the content when trigger is clicked', async () => {
    render(ColorPickerBasicTest);
    const trigger = screen.getByTestId('trigger');
    fireEvent.click(trigger);
    await waitFor(() => {
      expect(screen.getByTestId('content')).toBeVisible();
    });
  });
});
