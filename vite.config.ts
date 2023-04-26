import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        404: './src/pages/NotFound/index.tsx',
      },
    },
  },
});
