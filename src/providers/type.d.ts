import { InjectionKey } from 'vue';

/**
 * Represents a provider in Vue's provide/inject system.
 *
 * @typeParam T - The type of the object that the provider will expose.
 *
 * @property {InjectionKey<T>} Key - A unique symbol used as an injection key
 *                                   for the provided state or methods.
 * @property {() => T} use - A function that returns the state or methods
 *                           to be provided. This is typically used within
 *                           a setup function of a Vue component.
 */
export type Provider<T> = {
  Key: InjectionKey<T>;
  use: () => T;
};
