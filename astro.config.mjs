// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx'
import icon from 'astro-icon';

import react from '@astrojs/react';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  base: '/2425/lmfehres',
  integrations: [tailwind(), icon(), mdx(), react(), svelte()],
  experimental: {
    svg: true
  },
  prefetch: {
    prefetchAll: true
  }
});