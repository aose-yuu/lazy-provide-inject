# Lazy Provide Inject

<p align="center">
  <img src="./images/Image_20231124_204736_241.jpeg" alt="Lazy Provide Inject Logo" width="800">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
</p>

`lazy-provide-inject` is a utility library designed to enhance and simplify the use of Vue 3's Composition API `provide` and `inject` features, with an emphasis on type safety and ease of use.

## Features

- **Type-Safe Providers**: Create strongly-typed providers that encapsulate state and methods, ensuring type consistency throughout your application.
- **Lazy Injection**: Inject dependencies only when they're not already provided, preventing multiple registrations and ensuring singletons.
- **Flexible & Reusable**: Easily provide and inject multiple dependencies with a single function call, simplifying your setup code.
- **Simplified API**: Reduce boilerplate and improve readability of your composition functions with minimal and intuitive function calls.

## Installation

To install the `lazy-provide-inject` library, run the following command:

```bash
npm install lazy-provide-inject
```

or if you're using yarn:

```bash
yarn add lazy-provide-inject
```

## Usage as npm Package

### Creating a Provider

Use the createProvider function to create a new provider.

```ts
import { ref, readonly } from 'vue';

import { createProvider } from './index';

const context = () => {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };

  return {
    count: readonly(count),
    increment,
  };
};

export const counterProvider = createProvider('counter', context);
```

### Providing Dependencies

Provide dependencies in your setup function using lazyProvide.

```vue
<script setup lang="ts">
import TheChild from './components/TheChild.vue';
import { lazyProvide } from './providers';
import { counterProvider } from './providers/counterProvider';

lazyProvide(counterProvider, usersProvider);
</script>

<template>
  <div class="app-component">
    <h1>App</h1>
    <p>provided counterProvider</p>
    <TheChild />
  </div>
</template>

<style scoped>
.app-component {
  padding: 3rem;
  border: 1px solid green;
}
</style>
```

### Injecting Dependencies

Inject provided dependencies into any component with lazyInject.

```vue
<script setup lang="ts">
import { lazyInject } from '../providers';
import { counterProvider } from '../providers/counterProvider';

const { count } = lazyInject(counterProvider);
</script>

<template>
  <div class="child-component">
    <h1>Child</h1>
    <p>injected 'count' from counterProvider</p>
    <p>count is: {{ count }}</p>
  </div>
</template>

<style scoped>
.child-component {
  padding: 3rem;
  border: 1px solid red;
}
</style>
```

## API Reference

- `createProvider(name, setup)`: Creates a new provider with a unique key based on the provided name.
- `lazyProvide(...providers)`: Provides dependencies using Vue's provide function without duplication.
- `lazyInject(provider)`: Injects a provided dependency and throws an error if it's not available.

For detailed API documentation, please refer to the JSDoc comments in the source code.

## Contributing

I welcome contributions to lazy-provide-inject!
If you have suggestions or improvements, please submit a pull request or create an issue on my [GitHub repository](https://github.com/aose-yuu/lazy-provide-inject).

## License

lazy-provide-inject is MIT licensed.
