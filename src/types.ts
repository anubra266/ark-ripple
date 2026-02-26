
import type { Component } from 'ripple'

export type Assign<T, U> = Omit<T, keyof U> & U
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
export type Accessor<T> = () => T

export type HTMLTag = any
export type PropsFn<T extends HTMLTag> = (props?: HTMLProps<T>) => any

export type HTMLProps<T extends HTMLTag> = any

export type PolymorphicProps<T extends HTMLTag> = {
  /**
   * The children snippet of the component.
   */
  children?: Component
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   */
  asChild?: Component
}

export interface RefAttribute<T extends Element = Element> {
  ref?: T | null | undefined
}