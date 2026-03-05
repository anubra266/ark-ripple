import { render, within, fireEvent, waitFor } from '../../../test-utils'
import { Basic } from '../examples/basic.ripple'
import { Controlled } from '../examples/controlled.ripple'
import { Download } from '../examples/download.ripple'
import { ErrorCorrection } from '../examples/error-correction.ripple'
import { Fill } from '../examples/fill.ripple'
import { Overlay } from '../examples/overlay.ripple'
import { RootProvider } from '../examples/root-provider.ripple'

describe('QrCode Examples', () => {
  describe('Basic', () => {
    it('should render frame and pattern', async () => {
      const { container } = render(Basic)
      expect(container.querySelector('[data-part="frame"]')).toBeInTheDocument()
      expect(container.querySelector('[data-part="pattern"]')).toBeInTheDocument()
    })
  })

  describe('Controlled', () => {
    it('should render frame with button to change value', async () => {
      const { container } = render(Controlled)
      expect(container.querySelector('[data-part="frame"]')).toBeInTheDocument()
      const button = await within(container).findByRole('button', { name: 'Set to chakra-ui.com' })
      expect(button).toBeInTheDocument()
    })

    it('should update value when button is clicked', async () => {
      const { container } = render(Controlled)
      const button = await within(container).findByRole('button', { name: 'Set to chakra-ui.com' })
      fireEvent.click(button)
      await waitFor(() => {
        expect(container.querySelector('[data-part="frame"]')).toBeInTheDocument()
      })
    })
  })

  describe('Download', () => {
    it('should render download trigger button', async () => {
      const { container } = render(Download)
      const button = await within(container).findByRole('button', { name: 'Download' })
      expect(button).toBeInTheDocument()
    })

    it('should render frame and pattern', async () => {
      const { container } = render(Download)
      expect(container.querySelector('[data-part="frame"]')).toBeInTheDocument()
      expect(container.querySelector('[data-part="pattern"]')).toBeInTheDocument()
    })
  })

  describe('ErrorCorrection', () => {
    it('should render frame', async () => {
      const { container } = render(ErrorCorrection)
      expect(container.querySelector('[data-part="frame"]')).toBeInTheDocument()
    })

    it('should render radio group with L M Q H levels', async () => {
      const { container } = render(ErrorCorrection)
      for (const level of ['L', 'M', 'Q', 'H']) {
        expect(await within(container).findByText(level)).toBeInTheDocument()
      }
    })
  })

  describe('Fill', () => {
    it('should render two qr code frames with fill styles', async () => {
      const { container } = render(Fill)
      const frames = container.querySelectorAll('[data-part="frame"]')
      expect(frames.length).toBe(2)
    })
  })

  describe('Overlay', () => {
    it('should render overlay element', async () => {
      const { container } = render(Overlay)
      expect(container.querySelector('[data-part="overlay"]')).toBeInTheDocument()
    })

    it('should render frame and pattern', async () => {
      const { container } = render(Overlay)
      expect(container.querySelector('[data-part="frame"]')).toBeInTheDocument()
      expect(container.querySelector('[data-part="pattern"]')).toBeInTheDocument()
    })
  })

  describe('RootProvider', () => {
    it('should render frame', async () => {
      const { container } = render(RootProvider)
      expect(container.querySelector('[data-part="frame"]')).toBeInTheDocument()
    })

    it('should show current value in output element', async () => {
      const { container } = render(RootProvider)
      const output = container.querySelector('output')
      expect(output).toBeInTheDocument()
      expect(output?.textContent).toContain('ark-ui.com')
    })
  })
})
