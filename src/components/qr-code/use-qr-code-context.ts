import { Context, type Tracked } from 'ripple'
import type { UseQrCodeReturn } from './use-qr-code.ripple'

export type UseQrCodeContext = UseQrCodeReturn

export const QrCodeApiContext = new Context<Tracked<UseQrCodeContext>>()

export const useQrCodeContext = (): Tracked<UseQrCodeContext> => QrCodeApiContext.get()
