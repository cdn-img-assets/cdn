import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    target: 'esnext'
  },
  server: {
    fs: {
      strict: false,
      allow: ['./public', './src']
    }
  }
});
