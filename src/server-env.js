import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 9000;

// Включить CORS для всех маршрутов
app.use(cors());

app.get('/os-info', (req, res) => {
	const envInfo = process.env;
	res.json(envInfo);
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});