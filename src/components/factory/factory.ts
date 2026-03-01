import { Ark } from './ark.ripple';
import type { JsxElements } from '../../types';

var cache = new Map<string, (anchor: unknown, props: Record<string, unknown>, block: unknown) => void>();

/**
 * Creates a Ripple component for the given HTML tag name.
 * The component accepts all HTML props, children, and asChild.
 */
function create_factory_component(tag: string) {
	var cached = cache.get(tag);
	if (cached) return cached;


	function factory_component(anchor: unknown, props: Record<string, unknown>, block: unknown) {
		var element_props = new Proxy(props, {
			get(target, key) {
				if (key === 'element') return tag;
				return Reflect.get(target, key);
			},
			has(target, key) {
				if (key === 'element') return true;
				return Reflect.has(target, key);
			},
			ownKeys(target) {
				var keys = Reflect.ownKeys(target);
				if (!keys.includes('element')) keys.push('element');
				return keys;
			},
			getOwnPropertyDescriptor(target, key) {
				if (key === 'element') return { value: tag, enumerable: true, configurable: true };
				return Reflect.getOwnPropertyDescriptor(target, key);
			},
		});
		Ark(anchor, element_props, block);
	}

	cache.set(tag, factory_component);
	return factory_component;
}

/**
 * Factory for creating Ripple element components.
 *
 * Usage:
 *   factory.span    — component for <span>
 *
 */
export var factory = new Proxy(create_factory_component, {
	get(target, tag) {
		if (typeof tag === 'string') {
			return target(tag);
		}
		return undefined;
	},
	apply(target, _, args) {
		return target(/** @type {string} */(args[0]));
	},
}) as unknown as JsxElements;



