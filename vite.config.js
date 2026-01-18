import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/training-log/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173
  }
});
