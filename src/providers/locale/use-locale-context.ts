import type { Locale } from '@zag-js/i18n-utils';
import { Context, type Tracked } from 'ripple';

export interface UseLocaleContext extends Locale {}

export const LocaleContext = new Context<Tracked<UseLocaleContext> | UseLocaleContext>({
  dir: 'ltr',
  locale: 'en-US',
});

export const useLocaleContext = (): Tracked<UseLocaleContext> | UseLocaleContext => LocaleContext.get();
