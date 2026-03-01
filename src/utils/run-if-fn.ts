export const runIfFn = <T>(fn: T | (() => T)): T => {
	return typeof fn === 'function' ? (fn as () => T)() : fn;
};
