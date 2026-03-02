import { render, screen, fireEvent, waitFor } from '../../../test-utils'
import user from '@testing-library/user-event'
import { Basic } from '../examples/basic.ripple'
import { WithField } from '../examples/with-field.ripple'
import { WithValidation } from '../examples/with-validation.ripple'
import { StrengthMeter } from '../examples/strength-meter.ripple'
import { ControlledVisibility } from '../examples/controlled-visibility.ripple'
import { Autocomplete } from '../examples/autocomplete.ripple'
import { IgnorePasswordManager } from '../examples/ignore-password-manager.ripple'
import { RootProvider } from '../examples/root-provider.ripple'

describe('PasswordInput Examples', () => {
  describe('Basic', () => {
    it('should render and toggle visibility', async () => {
      render(Basic)
      const input = await screen.findByLabelText('Password')
      expect(input).toHaveAttribute('type', 'password')

      await user.type(input, 'mypassword')
      expect(input).toHaveValue('mypassword')

      await user.click(screen.getByRole('button'))
      await waitFor(() => {
        expect(input).toHaveAttribute('type', 'text')
      })

      await user.click(screen.getByRole('button'))
      await waitFor(() => {
        expect(input).toHaveAttribute('type', 'password')
      })
    })
  })

  describe('WithField', () => {
    it('should render with field helper and error text', async () => {
      render(WithField)
      const input = await screen.findByLabelText('Password')
      expect(input).toBeInTheDocument()
      expect(screen.getByText('Enter your password')).toBeInTheDocument()
    })
  })

  describe('WithValidation', () => {
    it('should show validation messages based on password length', async () => {
      render(WithValidation)
      const input = await screen.findByLabelText('Password (min 8 characters)')

      await user.type(input, 'short')
      await waitFor(() => {
        expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument()
      })

      await user.clear(input)
      await user.type(input, 'longenoughpassword')
      await waitFor(() => {
        expect(screen.getByText('Password is valid')).toBeInTheDocument()
      })
    })
  })

  describe('StrengthMeter', () => {
    it('should render with default password and show strength', async () => {
      render(StrengthMeter)
      const input = await screen.findByLabelText('Password')
      expect(input).toHaveValue('asdfasdf')

      await waitFor(() => {
        expect(screen.getByText(/password$/)).toBeInTheDocument()
      })
    })
  })

  describe('ControlledVisibility', () => {
    it('should show visibility state in label', async () => {
      render(ControlledVisibility)
      const input = await screen.findByLabelText(/Password is/)

      await waitFor(() => {
        expect(screen.getByText(/hidden/)).toBeInTheDocument()
      })

      await user.click(screen.getByRole('button'))
      await waitFor(() => {
        expect(input).toHaveAttribute('type', 'text')
        expect(screen.getByText(/visible/)).toBeInTheDocument()
      })
    })
  })

  describe('Autocomplete', () => {
    it('should render with autocomplete attribute', async () => {
      render(Autocomplete)
      const input = await screen.findByLabelText('Password')
      expect(input).toHaveAttribute('autocomplete', 'new-password')
    })
  })

  describe('IgnorePasswordManager', () => {
    it('should render with default value', async () => {
      render(IgnorePasswordManager)
      const input = await screen.findByLabelText('API Key')
      expect(input).toBeInTheDocument()
    })
  })

  describe('RootProvider', () => {
    it('should render and show visibility state in output', async () => {
      render(RootProvider)
      const input = await screen.findByLabelText('Password')
      expect(input).toBeInTheDocument()

      await waitFor(() => {
        expect(screen.getByText(/password input is hidden/)).toBeInTheDocument()
      })

      await user.click(screen.getByRole('button'))
      await waitFor(() => {
        expect(screen.getByText(/password input is visible/)).toBeInTheDocument()
      })
    })
  })
})
