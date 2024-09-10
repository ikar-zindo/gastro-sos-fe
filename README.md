# Social Network for Chefs

## 1. CORS

#### Change for you local server

[server.js](server.js)

```javascript
// Proxy setup
app.use('/api', createProxyMiddleware ({
	// target: 'https://social-network.samuraijs.com/api/1.0',
	target: 'http://localhost:8890',
	changeOrigin: true,
	pathRewrite: {
		'^/api': '', // Remove /api prefix when forwarding the request
	},
}));
```

[vite.config.js](vite.config.js)

```javascript
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			'/api': {
				target: "https://social-network.samuraijs.com/api/1.0/",
				// target: 'http://localhost:8890',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}});
```

[UserElement.jsx](src%2Fcompoments%2Fmain%2Fuser%2FUserComponent.jsx)

```javascript
axios.get("http://localhost:8890/review")
	// axios.get("https://social-network.samuraijs.com/api/1.0/users")
	.then(response => { });
```

### Running an application in Docker

```bash
# Collect images for all services
docker-compose -p gastro-sos build

# Start all services
docker-compose -p gastro-sos up -d

# Check the status of running containers
docker-compose -p gastro-sos ps

# View logs (optional)
docker-compose -p gastro-sos logs -f

# Stop all services
docker-compose -p gastro-sos stop

# Start all services
docker-compose -p gastro-sos start

# Deactivate all services (if necessary)
docker-compose -p gastro-sos down
```

```
fnm env --use-on-cd | Out-String | Invoke-Expression

npm run dev

npm run dev -- --host 0.0.0.0
```