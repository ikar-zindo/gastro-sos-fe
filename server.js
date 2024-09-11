import express from 'express';
import cors from 'cors';
import {createProxyMiddleware}  from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for CORS
app.use(cors());

// Proxy setup
app.use('/api', createProxyMiddleware ({
	target: 'https://social-network.samuraijs.com/api/1.0',
	changeOrigin: true,
	pathRewrite: {
		'^/api': '', // Remove /api prefix when forwarding the request
	},
}));

app.listen(PORT, () => {
	console.log(`Proxy server is running on port ${PORT}`);
});



// OLD {тоже работает}
// const express = require('express');
// const request = require('request');
// const app = express();
// const PORT = process.env.PORT || 8080;
//
// app.use('/api', (req, res) => {
// 	// URL конечной точки API
// 	// const apiUrl = `https://social-network.samuraijs.com/api/1.0${req.url}`;
// 	const apiUrl = `http://localhost:8890${req.url}`;
//
// 	// Перенаправляем запросы от клиента к API
// 	req.pipe(request(apiUrl)).pipe(res);
// });
//
// app.listen(PORT, () => {
// 	console.log(`Proxy server is running on http://localhost:${PORT}`);
// });
