/// <reference types="@testing-library/jest-dom" />
import '@testing-library/jest-dom/vitest';
import 'vitest-axe/extend-expect';
import ResizeObserver from 'resize-observer-polyfill';
import { afterEach, vi } from 'vitest';

global.ResizeObserver = ResizeObserver;

if (!global.PointerEvent) {
	class PointerEvent extends MouseEvent {
		pointerId?: number;
		constructor(type: string, params: PointerEventInit = {}) {
			super(type, params);
			this.pointerId = params.pointerId;
		}
	}
	vi.stubGlobal('PointerEvent', PointerEvent);
}

global.document.execCommand = () => true;
global.URL.createObjectURL = () => 'https://i.pravatar.cc/300';
global.URL.revokeObjectURL = () => { };

global.Element.prototype.scrollIntoView = () => { };
Element.prototype.scrollTo = () => { };

let now = 1000;
vi.spyOn(globalThis.performance, 'now').mockImplementation(() => now);

const rafCallbacks = new Map<number, FrameRequestCallback>();
let rafId = 1;

vi.stubGlobal('requestAnimationFrame', (fn: FrameRequestCallback) => {
	const id = rafId++;
	rafCallbacks.set(id, fn);
	now += 16;
	setTimeout(() => {
		const callback = rafCallbacks.get(id);
		if (callback) {
			rafCallbacks.delete(id);
			callback(now);
		}
	}, 0);
	return id;
});

vi.stubGlobal('cancelAnimationFrame', (id: number) => {
	rafCallbacks.delete(id);
});

Object.defineProperty(window, 'navigator', {
	value: {
		clipboard: {
			writeText: vi.fn(),
		},
	},
});

// biome-ignore lint/complexity/useArrowFunction: zag-js carousel/scroll-area code uses new IntersectionObserver(...), which requires a constructor (class/function, not arrow function).
const IntersectionObserverMock = vi.fn(function () {
	return {
		disconnect: vi.fn(),
		observe: vi.fn(),
		takeRecords: vi.fn(),
		unobserve: vi.fn(),
	};
});

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

afterEach(() => {
	const elements = document.querySelectorAll('[id*="[object Object]"]');
	expect(elements.length).toBe(0);
	rafCallbacks.clear();
	document.body.innerHTML = '';
});
