import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'], // Add .md to the list of extensions
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'], // Tell mdsvex to process .md files
    })
  ],
  kit: {
    adapter: adapter()
  }
};

export default config;
