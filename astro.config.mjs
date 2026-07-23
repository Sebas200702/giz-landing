// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: reemplazar por el dominio final del proyecto (requerido para
// canonical, Open Graph, sitemap.xml y robots.txt correctos en producción).
const SITE_URL = 'https://giz-landing.vercel.app/';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  // Inlina el CSS en el <head> en lugar de servirlo como archivo aparte.
  // La landing es una sola ruta con ~12 KB gzip de CSS: incrustarlo elimina la
  // petición que bloquea el render (mejora FCP/LCP) sin coste de caché entre
  // páginas porque no hay navegación interna.
  build: { inlineStylesheets: "always" },
  vite: {
    plugins: [tailwindcss()],
    server: {
      headers: {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      },
    },
  }
});
