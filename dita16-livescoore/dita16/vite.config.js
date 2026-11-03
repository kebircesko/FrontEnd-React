import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ESPN nuk lejon kërkesa direkte nga çdo shfletues (CORS).
  // React thërret /api/...; Vite e përcjell kërkesën te ESPN.
  server: {
    proxy: {
      '/api': {
        target: 'https://site.api.espn.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/apis'),
      },
    },
  },
});
