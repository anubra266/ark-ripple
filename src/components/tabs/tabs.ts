export type { FocusChangeDetails, ValueChangeDetails } from '@zag-js/tabs';
export {
  TabContent as Content,
  type TabContentBaseProps as ContentBaseProps,
  type TabContentProps as ContentProps,
} from './tab-content.ripple';
export {
  TabIndicator as Indicator,
  type TabIndicatorBaseProps as IndicatorBaseProps,
  type TabIndicatorProps as IndicatorProps,
} from './tab-indicator.ripple';
export {
  TabList as List,
  type TabListBaseProps as ListBaseProps,
  type TabListProps as ListProps,
} from './tab-list.ripple';
export {
  TabTrigger as Trigger,
  type TabTriggerBaseProps as TriggerBaseProps,
  type TabTriggerProps as TriggerProps,
} from './tab-trigger.ripple';
export {
  TabsContext as Context,
  type TabsContextProps as ContextProps,
} from './tabs-context.ripple';
export {
  TabsRoot as Root,
  type TabsRootBaseProps as RootBaseProps,
  type TabsRootProps as RootProps,
} from './tabs-root.ripple';
export {
  TabsRootProvider as RootProvider,
  type TabsRootProviderBaseProps as RootProviderBaseProps,
  type TabsRootProviderProps as RootProviderProps,
} from './tabs-root-provider.ripple';
export { tabsAnatomy } from './tabs.anatomy';
export { useTabs, type UseTabsProps, type UseTabsReturn } from './use-tabs.ripple';
export { useTabsContext, type UseTabsContext } from './use-tabs-context';
