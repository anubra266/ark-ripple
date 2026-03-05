import { render, within, screen, fireEvent, waitFor } from '../../../test-utils';
import user from '@testing-library/user-event';
import { Basic } from '../examples/basic.ripple';
import { BlurBehavior } from '../examples/blur-behavior.ripple';
import { Controlled } from '../examples/controlled.ripple';
import { ControlledInputValue } from '../examples/controlled-input-value.ripple';
import { Delimiter } from '../examples/delimiter.ripple';
import { Disabled } from '../examples/disabled.ripple';
import { DisabledEditing } from '../examples/disabled-editing.ripple';
import { Invalid } from '../examples/invalid.ripple';
import { MaxTagLength } from '../examples/max-tag-length.ripple';
import { MaxWithOverflow } from '../examples/max-with-overflow.ripple';
import { PasteBehavior } from '../examples/paste-behavior.ripple';
import { ProgrammaticControl } from '../examples/programmatic-control.ripple';
import { Readonly } from '../examples/readonly.ripple';
import { RootProvider } from '../examples/root-provider.ripple';
import { Validation } from '../examples/validation.ripple';
import { WithField } from '../examples/with-field.ripple';

describe('TagsInput Examples', () => {
  describe('Basic', () => {
    it('should render input with placeholder', async () => {
      const { container } = render(Basic);
      expect(await within(container).findByPlaceholderText('Add Framework')).toBeInTheDocument();
    });

    it('should add a tag when typing and pressing Enter', async () => {
      const { container } = render(Basic);
      const input = within(container).getByPlaceholderText('Add Framework');
      await user.type(input, 'Angular');
      await user.keyboard('[Enter]');
      expect(within(container).getByText('Angular')).toBeInTheDocument();
    });
  });

  describe('Controlled', () => {
    it('should render with initial controlled values', async () => {
      const { container } = render(Controlled);
      expect(await within(container).findByText('React')).toBeInTheDocument();
      expect(within(container).getByText('Solid')).toBeInTheDocument();
    });
  });

  describe('BlurBehavior', () => {
    it('should render with blur behavior', async () => {
      const { container } = render(BlurBehavior);
      expect(await within(container).findByPlaceholderText('Add Framework')).toBeInTheDocument();
    });
  });

  describe('ControlledInputValue', () => {
    it('should render with controlled input value buttons', async () => {
      const { container } = render(ControlledInputValue);
      expect(await within(container).findByText('Set to "React"')).toBeInTheDocument();
    });

    it('should update input value when button is clicked', async () => {
      const { container } = render(ControlledInputValue);
      await within(container).findByText('Set to "React"');
      fireEvent.click(within(container).getByText('Set to "React"'));
      await waitFor(() =>
        expect(within(container).getByPlaceholderText('Add Framework')).toHaveValue('React'),
      );
    });
  });

  describe('Delimiter', () => {
    it('should render with delimiter label', async () => {
      const { container } = render(Delimiter);
      expect(
        await within(container).findByText('Frameworks (add with comma, semicolon, or space)'),
      ).toBeInTheDocument();
    });
  });

  describe('Disabled', () => {
    it('should render disabled tags', async () => {
      const { container } = render(Disabled);
      await within(container).findByText('React');
      const input = within(container).getByPlaceholderText('Add Framework');
      expect(input).toBeDisabled();
    });
  });

  describe('DisabledEditing', () => {
    it('should render with editable disabled', async () => {
      const { container } = render(DisabledEditing);
      expect(await within(container).findByPlaceholderText('Add Framework')).toBeInTheDocument();
    });
  });

  describe('Invalid', () => {
    it('should render with invalid state', async () => {
      const { container } = render(Invalid);
      const root = container.querySelector('[data-part="root"]');
      expect(root).toHaveAttribute('data-invalid', '');
    });
  });

  describe('MaxTagLength', () => {
    it('should render with max tag length label', async () => {
      const { container } = render(MaxTagLength);
      expect(
        await within(container).findByText('Frameworks (Max 10 characters)'),
      ).toBeInTheDocument();
    });
  });

  describe('MaxWithOverflow', () => {
    it('should render tags input with max overflow', async () => {
      const { container } = render(MaxWithOverflow);
      expect(await within(container).findByPlaceholderText('Add Framework')).toBeInTheDocument();
    });
  });

  describe('PasteBehavior', () => {
    it('should render with paste behavior', async () => {
      const { container } = render(PasteBehavior);
      expect(await within(container).findByPlaceholderText('Add Framework')).toBeInTheDocument();
    });
  });

  describe('ProgrammaticControl', () => {
    it('should render programmatic control buttons', async () => {
      const { container } = render(ProgrammaticControl);
      expect(await within(container).findByText('Add React')).toBeInTheDocument();
      expect(within(container).getByText('Add Solid')).toBeInTheDocument();
      expect(within(container).getByText('Clear All')).toBeInTheDocument();
    });

    it('should add React tag when button clicked', async () => {
      const { container } = render(ProgrammaticControl);
      await within(container).findByText('Add React');
      fireEvent.click(within(container).getByText('Add React'));
      await waitFor(() => expect(within(container).getByText('React')).toBeInTheDocument());
    });
  });

  describe('Readonly', () => {
    it('should render readonly tags', async () => {
      const { container } = render(Readonly);
      await within(container).findByText('React');
      const root = container.querySelector('[data-part="root"]');
      expect(root).toHaveAttribute('data-readonly', '');
    });
  });

  describe('RootProvider', () => {
    it('should render with output', async () => {
      const { container } = render(RootProvider);
      expect(await within(container).findByPlaceholderText('Add Framework')).toBeInTheDocument();
      expect(container.querySelector('output')).toBeInTheDocument();
    });
  });

  describe('Validation', () => {
    it('should render with validation label', async () => {
      const { container } = render(Validation);
      expect(
        await within(container).findByText('Frameworks (Min 3 chars, alphanumeric)'),
      ).toBeInTheDocument();
    });
  });

  describe('WithField', () => {
    it('should render within field with helper text', async () => {
      const { container } = render(WithField);
      expect(await within(container).findByText('Additional Info')).toBeInTheDocument();
    });
  });
});
