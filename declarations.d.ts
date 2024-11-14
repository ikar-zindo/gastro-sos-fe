// declarations.d.ts
declare module 'vite-plugin-svgr' {
	const svgrPlugin: any;
	export default svgrPlugin;
}

declare module "*.svg" {
	import * as React from 'react';
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}

declare module '*.png' {
	const value: string;
	export default value;
}

