// vite.config.ts

import { resolve } from 'path';

// import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'lazy-provide-inject',
      fileName: (format) => `lazy-provide-inject.${format}.js`,
    },
  },
  plugins: [dts()],
});
