// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Dominio final del proyecto: alimenta canonical, Open Graph, sitemap.xml y
// robots.txt en producción.
const SITE_URL = 'https://talentosinfronteras.fundacioncolombiaincluyente.org/';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // El CSS se sirve como archivo aparte (no inline): el HTML así baja de
  // ~108 KB a ~53 KB (límite recomendado por los audits de SEO/rendimiento),
  // y el CSS (~12 KB gzip, cacheable) viaja por una única petición que la
  // mayoría de CDNs sirven con prioridad máxima por ser render-blocking.
  build: { inlineStylesheets: "never" },
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
