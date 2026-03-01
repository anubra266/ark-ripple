import { Ark } from './ark.ripple';
import type { PolymorphicProps } from '../../types';

type JsxElements = {
	[E in keyof HTMLElementTagNameMap]: (props: Record<string, any> & PolymorphicProps<E>) => any;
};

const cache = new Map<string, (anchor: any, props: any, block: any) => any>();

/**
 * Creates a proxy that wraps the original props and injects `element`.
 * Properly delegates ownKeys, has, get, and getOwnPropertyDescriptor so that
 * Ripple's track_split and reactive spread_props both work correctly.
 */
function createPropsWithElement(props: any, element: string): any {
	if (props === null || typeof props !== 'object') {
		return { element };
	}

	// Symbol properties (e.g. Symbol(ref)) in Ripple's spread_props proxy have a quirk:
	// their getOwnPropertyDescriptor reports a non-configurable value (fn1), but their
	// get trap returns a freshly-created closure (fn2) with identical code. fn1 !== fn2
	// so the JS Proxy [[Get]] invariant fires when we call Reflect.get(props, symbolKey).
	//
	// Fix: read symbol values via getOwnPropertyDescriptor (which bypasses the [[Get]]
	// invariant) and cache them. Return the same cached instance from both get and
	// getOwnPropertyDescriptor to keep them consistent.
	const symbolCache = new Map<symbol, any>();
	const getSymbolValue = (key: symbol) => {
		if (!symbolCache.has(key)) {
			symbolCache.set(key, Object.getOwnPropertyDescriptor(props, key)?.value);
		}
		return symbolCache.get(key);
	};

	return new Proxy({} as object, {
		get(_target: any, key: string | symbol) {
			if (key === 'element') return element;
			if (typeof key === 'symbol') return getSymbolValue(key);
			return Reflect.get(props, key);
		},
		has(_target: any, key: string | symbol) {
			if (key === 'element') return true;
			return Reflect.has(props, key);
		},
		ownKeys(_target: any) {
			const keys = Reflect.ownKeys(props);
			return ['element', ...keys.filter((k) => k !== 'element')];
		},
		getOwnPropertyDescriptor(_target: any, key: string | symbol) {
			if (key === 'element') {
				return { value: element, enumerable: true, configurable: true, writable: true };
			}
			if (typeof key === 'symbol') {
				const value = getSymbolValue(key);
				if (value === undefined && !Reflect.has(props, key)) return undefined;
				return { value, enumerable: true, configurable: true, writable: true };
			}
			const desc = Reflect.getOwnPropertyDescriptor(props, key);
			if (desc) return { ...desc, configurable: true };
			return undefined;
		},
	});
}

const jsxFactory = () => {
	return new Proxy({} as unknown as JsxElements, {
		get(_, element: string) {
			if (!cache.has(element)) {
				// Ripple calls components as: component(anchor, props, block)
				cache.set(element, (anchor: any, props: any, block: any) => {
					const propsWithElement = createPropsWithElement(props, element);
					return (Ark as any)(anchor, propsWithElement, block);
				});
			}
			return cache.get(element)!;
		},
	});
};

export const ark = jsxFactory();
