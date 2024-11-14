import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { UserConfig } from 'vite'; // Добавлено для типизации

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: '/gastro-sos-fe/',
    plugins: [react(), svgr()],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});