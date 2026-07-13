import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [sitemap()],
  site: 'https://tovarlabs.com',

  vite: {
      plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});