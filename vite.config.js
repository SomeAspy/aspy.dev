import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
    plugins: [solidPlugin()],
    build: {
        target: 'esnext',
        polyfillDynamicImport: false,
    },
    server: {
        port: 3000
    },
    preview: {
        port: 3000
    }
});
