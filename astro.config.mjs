import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://kira-0521.github.io',
  base: '/astro-first',
  integrations: [react()]
});