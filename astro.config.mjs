// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://erikamoralesabogada.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/gracias'),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-GB',
          fr: 'fr-FR',
          ja: 'ja-JP',
        },
      },
    }),
  ],
});