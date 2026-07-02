// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://SHUBRA1.github.io',
  base: process.env.GITHUB_ACTIONS ? '/Batenga-community-foundation/' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});