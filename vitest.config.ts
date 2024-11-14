import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './tests/setupTests.ts',
        include: ['**/*.test.tsx', '**/*.spec.tsx', '**/*.test.ts'],
    },
});
