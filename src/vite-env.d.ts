/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
	readonly VITE_API_KEY: string;
	readonly VITE_AUTH_TOKEN: string;
	readonly VITE_PUBLIC_URL: string;
	readonly VITE_WEBSOCKET_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
