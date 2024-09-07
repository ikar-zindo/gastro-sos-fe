# Social Network for Chefs

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


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