import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    vitePreprocess(),
    mdsvex({ extensions: ['.md'] })
  ],
  kit: {
    adapter: adapter({
      pages: 'build', // Output directory for HTML files
      assets: 'build', // Output directory for assets (JS, CSS, etc.)
      fallback: null, // No SPA fallback (not needed for fully static sites)
      precompress: false, // Set to true if you want compressed files
      strict: true // Fail the build if prerendering fails
    }),
    trailingSlash: 'always', // Enforce trailing slashes for URLs
    prerender: {
      entries: [
        '*', // Prerender all discoverable routes
        '/Trainings/tool-videos/business-model-problems',
        '/Trainings/tool-videos/getting-more-affiliates',
        '/Trainings/tool-videos/getting-more-leads-per-month',
        '/Trainings/tool-videos/increase-lead-magnet-conversions',
        '/Trainings/tool-videos/why-you-should-have-a-post-opt-in-sale',
        '/Trainings/tool-videos/email-marketing-problems',
        '/Trainings/tool-videos/sales-page-problems',
        '/Trainings/tool-videos/decreasing-email-warmup-unsubscribe-percentage',
        '/Trainings/tool-videos/sms-marketing-problems',
        '/Trainings/tool-videos/increasing-call-show-up-rate',
        '/Trainings/tool-videos/increasing-close-rate',
        '/Trainings/tool-videos/increasing-prospect-retention'
      ],
      crawl: true // Automatically discover routes
    }
  }
};

export default config;