import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { DynamicQuery as DynamicQueryExample } from './examples/dynamic-query.ripple';
import { ExactMatch as ExactMatchExample } from './examples/exact-match.ripple';
import { IgnoreCase as IgnoreCaseExample } from './examples/ignore-case.ripple';
import { MatchAll as MatchAllExample } from './examples/match-all.ripple';
import { Multiple as MultipleExample } from './examples/multiple.ripple';
import { RepeatingText as RepeatingTextExample } from './examples/repeating-text.ripple';

const meta: Meta = {
  title: 'Utilities / Highlight',
};

export default meta;

export const Basic = { render: () => ({ Component: BasicExample }) };
export const DynamicQuery = { render: () => ({ Component: DynamicQueryExample }) };
export const ExactMatch = { render: () => ({ Component: ExactMatchExample }) };
export const IgnoreCase = { render: () => ({ Component: IgnoreCaseExample }) };
export const MatchAll = { render: () => ({ Component: MatchAllExample }) };
export const Multiple = { render: () => ({ Component: MultipleExample }) };
export const RepeatingText = { render: () => ({ Component: RepeatingTextExample }) };
