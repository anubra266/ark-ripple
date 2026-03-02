import type { Meta } from '@storybook/html-vite'
import { Autocomplete as AutocompleteExample } from './examples/autocomplete.ripple'
import { Basic as BasicExample } from './examples/basic.ripple'
import { ControlledVisibility as ControlledVisibilityExample } from './examples/controlled-visibility.ripple'
import { IgnorePasswordManager as IgnorePasswordManagerExample } from './examples/ignore-password-manager.ripple'
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple'
import { StrengthMeter as StrengthMeterExample } from './examples/strength-meter.ripple'
import { WithField as WithFieldExample } from './examples/with-field.ripple'
import { WithValidation as WithValidationExample } from './examples/with-validation.ripple'

const meta: Meta = {
  title: 'Components / Password Input',
}

export default meta

export const Basic = {
  render: () => ({ Component: BasicExample }),
}

export const Autocomplete = {
  render: () => ({ Component: AutocompleteExample }),
}

export const ControlledVisibility = {
  render: () => ({ Component: ControlledVisibilityExample }),
}

export const IgnorePasswordManager = {
  render: () => ({ Component: IgnorePasswordManagerExample }),
}

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
}

export const StrengthMeter = {
  render: () => ({ Component: StrengthMeterExample }),
}

export const WithField = {
  render: () => ({ Component: WithFieldExample }),
}

export const WithValidation = {
  render: () => ({ Component: WithValidationExample }),
}
