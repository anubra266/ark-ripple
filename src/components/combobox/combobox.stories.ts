import type { Meta } from '@storybook/html-vite';
import { AsyncSearch as AsyncSearchExample } from './examples/async-search.ripple';
import { AutoHighlight as AutoHighlightExample } from './examples/auto-highlight.ripple';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { Creatable as CreatableExample } from './examples/creatable.ripple';
import { CustomObject as CustomObjectExample } from './examples/custom-object.ripple';
import { Dynamic as DynamicExample } from './examples/dynamic.ripple';
import { Grouping as GroupingExample } from './examples/grouping.ripple';
import { HighlightMatchingText as HighlightMatchingTextExample } from './examples/highlight-matching-text.ripple';
import { InlineAutocomplete as InlineAutocompleteExample } from './examples/inline-autocomplete.ripple';
import { LimitResults as LimitResultsExample } from './examples/limit-results.ripple';
import { Links as LinksExample } from './examples/links.ripple';
import { Multiple as MultipleExample } from './examples/multiple.ripple';
import { RehydrateValue as RehydrateValueExample } from './examples/rehydrate-value.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { Virtualized as VirtualizedExample } from './examples/virtualized.ripple';
import { WithField as WithFieldExample } from './examples/with-field.ripple';

const meta: Meta = {
  title: 'Components/Combobox',
};

export default meta;

export const AsyncSearch = {
  render: () => ({ Component: AsyncSearchExample }),
};

export const AutoHighlight = {
  render: () => ({ Component: AutoHighlightExample }),
};

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Context = {
  render: () => ({ Component: ContextExample }),
};

export const Creatable = {
  render: () => ({ Component: CreatableExample }),
};

export const CustomObject = {
  render: () => ({ Component: CustomObjectExample }),
};

export const Dynamic = {
  render: () => ({ Component: DynamicExample }),
};

export const Grouping = {
  render: () => ({ Component: GroupingExample }),
};

export const HighlightMatchingText = {
  render: () => ({ Component: HighlightMatchingTextExample }),
};

export const InlineAutocomplete = {
  render: () => ({ Component: InlineAutocompleteExample }),
};

export const LimitResults = {
  render: () => ({ Component: LimitResultsExample }),
};

export const Links = {
  render: () => ({ Component: LinksExample }),
};

export const Multiple = {
  render: () => ({ Component: MultipleExample }),
};

export const RehydrateValue = {
  render: () => ({ Component: RehydrateValueExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const Virtualized = {
  render: () => ({ Component: VirtualizedExample }),
};

export const WithField = {
  render: () => ({ Component: WithFieldExample }),
};
