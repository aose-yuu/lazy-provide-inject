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
