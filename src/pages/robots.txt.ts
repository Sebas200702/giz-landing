import type { APIRoute } from "astro";

// robots.txt generado desde la config: la URL del sitemap siempre sigue al
// dominio definido en `site` (astro.config.mjs), sin duplicar dominios a mano.
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap.xml", site);
  const sitemapIndexURL = new URL("sitemap-index.xml", site);

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
Sitemap: ${sitemapIndexURL.href}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
