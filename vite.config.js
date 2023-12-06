import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			// Set up an alias for the src directory
			$src: path.resolve(__dirname, './src')
		}
	}
});
