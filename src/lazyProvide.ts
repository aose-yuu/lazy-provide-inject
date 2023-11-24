import { provide, inject } from 'vue';

import type { Provider } from './type.d.ts';

/**
 * Provides a flexible way to inject dependencies into a Vue component.
 * It registers each provider using Vue's `provide` function if it hasn't been provided before.
 * This function prevents multiple registrations of the same provider and ensures that each dependency is provided only once.
 * It can accept a variable number of providers, each with potentially different types.
 *
 * @typeparam T - A tuple representing the types of the providers to be injected.
 * @param {...T} providers - A spread of Provider objects, each containing state or methods to be provided.
 *
 * @example
 * // Define providers
 * const provider1 = { Key: Symbol('key1'), use: () => state1 };
 * const provider2 = { Key: Symbol('key2'), use: () => state2 };
 *
 * // Use lazyProvide to inject the providers
 * lazyProvide(provider1, provider2);
 */
export function lazyProvide<T extends Provider<any>[]>(...providers: T): void {
  providers.forEach((provider) => {
    const existing = inject(provider.Key, null);
    if (!existing) {
      provide(provider.Key, provider.use());
    }
  });
}
