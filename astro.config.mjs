// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx'
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  base: '/2425/lmfehres',
  integrations: [tailwind(), icon(), mdx()],
  experimental: {
    svg: true
  }
});