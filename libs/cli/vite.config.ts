import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  esbuild: {
    platform: 'node',
  },
  build: {
    lib: {
      formats: ['es'],
      name: '@askides/cli',
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [/^node:.*/],
    },
    minify: true,
    sourcemap: false,
  },
});
