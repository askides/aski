import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      formats: ['es'],
      name: '@aski/elements',
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    minify: true,
    sourcemap: false,
    cssCodeSplit: true,
  },
});
