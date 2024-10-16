import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
	const env = loadEnv(mode, process.cwd());

	return {
		base: '/gastro-sos-fe/',
		plugins: [react()],
		test: {
			environment: 'jsdom',
			globals: true,
			setupFiles: './tests/setupTests.js',
			include: ['**/*.test.jsx', '**/*.spec.jsx', '**/*.test.js'], // включите необходимые тестовые файлы
			esbuild: {
				loader: {
					'.js': 'jsx',
				},
			},
		},
		server: {
			port: 3000,
			proxy: {
				'/api': {
					target: env.VITE_BASE_URL,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '')
				}
			}
		}
	};
});