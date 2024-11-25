import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.freetogame.com',
        changeOrigin: true,
        secure: false, // ak server nemá platný certifikát SSL
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
