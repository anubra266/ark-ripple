import type { Component, Tracked } from 'ripple';

export type Assign<T, U> = Omit<T, keyof U> & U;
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type Accessor<T> = () => T;

export type JsxElements = {
  [E in keyof HTMLElementTagNameMap]: (props: Record<string, any> & PolymorphicProps<E>) => any;
};

export type ElementType = keyof JSX.IntrinsicElements;

export type HTMLProps<E extends ElementType> = JSX.IntrinsicElements[E];

type ParentProps<E extends ElementType> = (userProps?: JSX.IntrinsicElements[E]) => HTMLProps<E>;

export type PolymorphicProps<E extends ElementType = any> = {
  /**
   * The children snippet of the component.
   */
  children?: Component;
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   */
  asChild?: Component<ParentProps<E>>;
  /**
   * The element to render.
   */
  element?: E;
};

export type MaybeTracked<T> = {
  [K in keyof T]: T[K] | Tracked<T[K]>;
};
