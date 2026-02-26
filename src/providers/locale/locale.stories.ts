import type { Meta } from '@storybook/html'
import { Basic as BasicExample } from './examples/basic.ripple'

const meta: Meta = {
  title: 'Utilities / Locale',
}

export default meta

export const Basic = {
  render: () => ({ Component: BasicExample }),
}
