/** biome-ignore-all lint/correctness/noInnerDeclarations: 🚀 */
import { get } from 'ripple';
import { clsx } from 'clsx';

/**
 * Merges multiple props objects with intelligent composition.
 * - Event handlers (on*): composed — both called in sequence
 * - class: merged via clsx
 * - style: deep-merged for objects, last-wins for strings
 * - Ref symbols: composed (both called)
 * - Tracked values: unwrapped only when needed for merging (class, style, events),
 *   passed through as-is for all other props to preserve reactivity
 * - Later sources override earlier ones for non-composable props
 * @param  {...Record<string | symbol, any>} sources
 * @returns {Record<string | symbol, any>}
 */
export function mergeProps(
  ...sources: Record<string | symbol, any>[]
): Record<string | symbol, any> {
  /** @type {Record<string | symbol, any>} */
  var result: Record<string | symbol, any> = {};

  for (var i = 0; i < sources.length; i++) {
    var source = sources[i];
    if (source == null) continue;

    for (var key in source) {
      var raw_value = source[key];
      var existing = result[key];

      if (key === 'class') {
        var cls_value = get(raw_value);
        var cls_existing = get(existing);
        result[key] = cls_existing != null ? clsx([cls_existing, cls_value]) : cls_value;
      } else if (key === 'style') {
        var style_value = get(raw_value);
        var style_existing = get(existing);
        if (typeof style_existing === 'object' && typeof style_value === 'object') {
          result[key] = { ...style_existing, ...style_value };
        } else {
          result[key] = style_value ?? style_existing;
        }
      } else if (
        key.length > 2 &&
        key[0] === 'o' &&
        key[1] === 'n' &&
        key.charCodeAt(2) >= 65 &&
        key.charCodeAt(2) <= 90 &&
        typeof existing === 'function' &&
        typeof raw_value === 'function'
      ) {
        var prev_fn = existing;
        var next_fn = raw_value;
        result[key] = (...args: any[]) => {
          prev_fn(...args);
          next_fn(...args);
        };
      } else if (raw_value !== undefined) {
        result[key] = raw_value;
      }
    }

    var symbols = Object.getOwnPropertySymbols(source);
    for (var j = 0; j < symbols.length; j++) {
      var sym = symbols[j];
      if (sym.description === 'ref') {
        var existing_ref = result[sym];
        var new_ref = source[sym];

        if (typeof existing_ref === 'function' && typeof new_ref === 'function') {
          var prev_ref = existing_ref;
          var next_ref = new_ref;
          result[sym] = (el: HTMLElement) => {
            prev_ref(el);
            next_ref(el);
          };
        } else {
          result[sym] = new_ref;
        }
      }
    }
  }

  return result;
}
