import { type FilterOptions, type FilterReturn, createFilter } from '@zag-js/i18n-utils'
import { useLocaleContext } from './use-locale-context'

export interface UseFilterProps extends FilterOptions {}

export interface UseFilterReturn extends FilterReturn {}

export function useFilter(props: UseFilterProps): UseFilterReturn {
  const env = useLocaleContext()
  const locale = props.locale ?? env.locale
  return createFilter({ ...props, locale })
}
