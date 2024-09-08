import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// server: {
	// 	port: 9000,
	// 	host: '0.0.0.0',
	// 	define: {
	// 		'process.env': {}
	// 	},
	// 	proxy: {
	// 		'/api': {
	// 			target: 'https://social-network.samuraijs.com',
	// 			changeOrigin: true,
	// 			rewrite: (path) => path.replace(/^\/api/, '')
	// 		}
	// 	}
	// }
})
