import type { Meta } from '@storybook/html-vite'
import { Basic as BasicExample } from './examples/basic.ripple'
import { Controlled as ControlledExample } from './examples/controlled.ripple'
import { Download as DownloadExample } from './examples/download.ripple'
import { ErrorCorrection as ErrorCorrectionExample } from './examples/error-correction.ripple'
import { Fill as FillExample } from './examples/fill.ripple'
import { Overlay as OverlayExample } from './examples/overlay.ripple'
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple'

const meta: Meta = {
  title: 'Components / QR Code',
}

export default meta

export const Basic = {
  render: () => ({ Component: BasicExample }),
}

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
}

export const Download = {
  render: () => ({ Component: DownloadExample }),
}

export const ErrorCorrection = {
  render: () => ({ Component: ErrorCorrectionExample }),
}

export const Fill = {
  render: () => ({ Component: FillExample }),
}

export const Overlay = {
  render: () => ({ Component: OverlayExample }),
}

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
}
