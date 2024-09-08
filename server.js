const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
	target: 'https://social-network.samuraijs.com',
	changeOrigin: true,
	pathRewrite: { '^/api': '' },
}));

app.listen(4000, () => {
	console.log('Proxy server running on port 4000');
});
