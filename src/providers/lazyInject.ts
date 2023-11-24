import { inject } from 'vue';

import type { Provider } from './type.d.ts';

/**
 * The `lazyInject` function is used to inject a provided state or methods in a Vue component.
 * It retrieves the state or methods provided by the specified provider.
 * Throws an error if the provider has not been provided in the parent component hierarchy.
 *
 * @param {Provider<T>} provider - The Provider object from which to inject the state or methods.
 *
 * @signature
 * function lazyInject<T>(provider: Provider<T>): T
 *
 * @example
 * // Using appProvider defined in appProvider.ts
 * import { appProvider } from '@/provider/appProvider';
 * import { lazyInject } from 'lazy-provide-inject';
 *
 * // Inject the state provided by appProvider
 * const { count, increment } = lazyInject(appProvider);
 *
 * @throws Will throw an error if the provider has not been set up in the ancestor component.
 */
export function lazyInject<T>(provider: Provider<T>) {
  const injected = inject(provider.Key);
  if (injected) return injected;
  throw new Error(`Could not inject provider: ${provider.Key.toString()}`);
}
