import { render, screen } from '../../../test-utils';
import {
	HighlightBasicTest,
	HighlightExactMatchTest,
	HighlightIgnoreCaseTest,
	HighlightMatchAllTest,
	HighlightMultipleTest,
} from './basic.ripple';

describe('Highlight', () => {
	it('should highlight matching text in a mark element', () => {
		render(HighlightBasicTest);
		const marks = screen.getByTestId('output').querySelectorAll('mark');
		expect(marks.length).toBe(1);
		expect(marks[0].textContent).toBe('component');
	});

	it('should highlight case-insensitively with ignoreCase', () => {
		render(HighlightIgnoreCaseTest);
		const marks = screen.getByTestId('output').querySelectorAll('mark');
		// matchAll is false by default, so only the first occurrence is highlighted
		expect(marks.length).toBe(1);
		expect(marks[0].textContent?.toLowerCase()).toBe('typescript');
	});

	it('should highlight all occurrences with matchAll', () => {
		render(HighlightMatchAllTest);
		const marks = screen.getByTestId('output').querySelectorAll('mark');
		expect(marks.length).toBe(2);
	});

	it('should only highlight exact word matches with exactMatch', () => {
		render(HighlightExactMatchTest);
		const marks = screen.getByTestId('output').querySelectorAll('mark');
		// exactMatch: "box" matches "box" but not "checkbox"
		expect(marks.length).toBe(1);
		expect(marks[0].textContent).toBe('box');
	});

	it('should highlight multiple query terms', () => {
		render(HighlightMultipleTest);
		const marks = screen.getByTestId('output').querySelectorAll('mark');
		expect(marks.length).toBe(2);
		const texts = Array.from(marks).map((m) => m.textContent);
		expect(texts).toContain('React');
		expect(texts).toContain('Vue');
	});
});
