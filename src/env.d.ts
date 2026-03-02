declare module '*.ripple';

declare module 'styles/*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}
