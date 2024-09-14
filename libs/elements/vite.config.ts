import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: {
      formats: ['es'],
      name: '@aski/elements',
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
    },
    minify: true,
    sourcemap: false,
    cssCodeSplit: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
