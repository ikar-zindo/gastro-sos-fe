import express from 'express';
import cors from 'cors';
import {createProxyMiddleware}  from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for CORS
app.use(cors());

// Proxy setup
app.use('/api', createProxyMiddleware ({
	// @ts-ignore TODO: @ts-ignore
	target: import.meta.env.VITE_BASE_URL,
	changeOrigin: true,
	pathRewrite: {
		'^/api': '', // Remove /api prefix when forwarding the request
	},
}));

app.listen(PORT, () => {
	console.log(`Proxy server is running on port ${PORT}`);
});
