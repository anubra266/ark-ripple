import { screen } from '../../../test-utils';
import { render } from '../../../test-utils';
import { ComponentUnderTest, SignaturePadWithField } from './basic.ripple';

describe('Signature Pad', () => {
  it('should render the label', () => {
    render(ComponentUnderTest, {});
    expect(screen.getByText('Sign below')).toBeInTheDocument();
  });

  it('should render the control', () => {
    const { container } = render(ComponentUnderTest, {});
    expect(container.querySelector('[data-part="control"]')).toBeInTheDocument();
  });

  it('should render the segment as an SVG', () => {
    const { container } = render(ComponentUnderTest, {});
    expect(container.querySelector('svg[data-part="segment"]')).toBeInTheDocument();
  });

  it('should render the clear trigger button', () => {
    const { container } = render(ComponentUnderTest, {});
    expect(container.querySelector('[data-part="clear-trigger"]')).toBeInTheDocument();
  });

  it('should render the guide', () => {
    const { container } = render(ComponentUnderTest, {});
    expect(container.querySelector('[data-part="guide"]')).toBeInTheDocument();
  });
});

describe('Signature Pad / Field', () => {
  it('should display helper text', () => {
    render(SignaturePadWithField, {});
    expect(screen.getByText('Additional Info')).toBeInTheDocument();
  });

  it('should display error text when invalid', () => {
    render(SignaturePadWithField, { invalid: true });
    expect(screen.getByText('Error Info')).toBeInTheDocument();
  });

  it('should not display error text when not invalid', () => {
    render(SignaturePadWithField, {});
    expect(screen.queryByText('Error Info')).not.toBeInTheDocument();
  });

  it('should set disabled state from field', () => {
    const { container } = render(SignaturePadWithField, { disabled: true });
    const control = container.querySelector('[data-part="control"]');
    expect(control).toHaveAttribute('data-disabled', '');
  });
});
