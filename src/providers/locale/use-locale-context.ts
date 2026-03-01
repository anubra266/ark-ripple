import type { Locale } from '@zag-js/i18n-utils';
import { Context } from 'ripple';

export interface UseLocaleContext extends Locale {}

export const LocaleContext = new Context<UseLocaleContext>({
  dir: 'ltr',
  locale: 'en-US',
});

export const useLocaleContext = (): UseLocaleContext => LocaleContext.get();
