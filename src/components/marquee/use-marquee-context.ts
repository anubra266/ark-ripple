import { Context } from 'ripple';
import type { UseMarqueeReturn } from './use-marquee.ripple';

export type UseMarqueeContext = UseMarqueeReturn;

export const MarqueeApiContext = new Context<UseMarqueeContext>();

export const useMarqueeContext = (): UseMarqueeContext => MarqueeApiContext.get();
