// @ts-check
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import { loadEnv } from "vite";

const isVercel = !!(process.env.VERCEL);

const loadEnvConfig = () => {
  // @ts-expect-error
  let { PUBLIC_DOMAIN } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

  if (process.env.NODE_ENV === 'development') {
    PUBLIC_DOMAIN = 'http://localhost:4321'
  } else if (!PUBLIC_DOMAIN) {
    throw new Error('PUBLIC_DOMAIN is required');
  }

  return { PUBLIC_DOMAIN };
}

const { PUBLIC_DOMAIN } = loadEnvConfig();

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: PUBLIC_DOMAIN,

  adapter: isVercel? vercel() : node({
    mode: 'standalone',
  }),

  integrations: [tailwind({
    applyBaseStyles: false
  }), svelte()],

  redirects: {
    '/terms': {
      status: 301,
      destination: '/legal/user-agreement.pdf'
    },
    '/privacy': {
      status: 301,
      destination: '/legal/privacy-policy.pdf'
    }
  }, 
});