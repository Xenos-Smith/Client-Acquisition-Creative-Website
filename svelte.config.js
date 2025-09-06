import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'], // Support .md files
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md']
    })
  ],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null, // Fully static site
      precompress: false
    }),
    prerender: {
      entries: [
        '*', // Prerender all static routes
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
        // Excluding /Trainings/warmup-videos/[slug] as requested
      ],
      crawl: true // Discover static routes
    }
  }
};

export default config;