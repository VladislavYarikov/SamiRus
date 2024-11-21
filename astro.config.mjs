// @ts-check
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import { loadEnv } from "vite";

import sitemap from '@astrojs/sitemap';

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
  }), svelte(), sitemap()],

  redirects: {
    '/terms': {
      status: 301,
      destination: '/legal/user-agreement.pdf'
    },
    '/privacy': {
      status: 301,
      destination: '/legal/privacy-policy.pdf'
    },
    '/know-more': {
      status: 302,
      destination: 'https://wa.me/79300130949?text=Привет.%20Хочу%20получать%20заказы%20раньше!%20'
    },
    '/contact-us': {
      status: 302,
      destination: 'https://wa.me/79300130949?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D0%B5%D1%81%D1%82%D1%8C+%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81+%D0%BF%D0%BE+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8E+%D0%A1%D0%B0%D0%BC%D0%B8%3A+'
    },
  }, 
});