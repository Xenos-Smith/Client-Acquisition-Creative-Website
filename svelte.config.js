import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'], // Add .md to the list of extensions
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'] // Tell mdsvex to process .md files
    })
  ],
  kit: {
    adapter: adapter({
      pages: 'build', // Output directory for static files
      assets: 'build', // Directory for assets
      fallback: 'index.html', // Enable SPA routing for client-side navigation
      precompress: true // Compress files for better performance
    }),
    prerender: {
      handleMissingId: 'ignore' // Ignore missing dynamic route IDs during prerendering
    }
  }
};

export default config;