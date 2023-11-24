import { InjectionKey } from 'vue';

/**
 * Creates a provider for Vue's provide/inject system.
 * This function encapsulates a given context (state and methods) and provides it
 * via a unique symbol key. It is meant to be used with `provide` function in a
 * component's setup to make the state and methods available to its child components.
 *
 * @param {string} providerName - A unique name for the provider, used to generate the symbol key.
 * @param {() => T} context - A function returning the context (state and methods) to be provided.
 *
 * @returns An object containing the `use` method to access the provided state and methods,
 * and `Key` which is a unique symbol for the provider.
 *
 * @signature
 * function createProvider<T extends {}>(
 *   providerName: string,
 *   context: () => T,
 * ): { use: () => T, Key: InjectionKey<T> }
 *
 * @example
 * import { ref, readonly } from 'vue';
 * import { createProvider } from 'lazy-provide-inject';
 *
 * // Define a context to provide
 * const context = () => {
 *   const count = ref(0);
 *   const increment = () => {
 *     count.value++;
 *   };
 *
 *   return {
 *     count: readonly(count),
 *     increment,
 *   };
 * };
 *
 * // Create and export the provider
 * export const counterProvider = createProvider('counter', context);
 */
export function createProvider<T extends {}>(
  providerName: string,
  context: () => T,
) {
  const contextValue = context();

  const use = () => contextValue;

  type ProviderType = ReturnType<typeof use>;
  const Key: InjectionKey<ProviderType> = Symbol(`${providerName}Provider`);

  return { use, Key };
}
