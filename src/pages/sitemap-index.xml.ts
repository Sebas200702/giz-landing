import type { APIRoute } from "astro";

// Genera un sitemap-index.xml para retrocompatibilidad y cumplimiento estricto.
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap.xml", site);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${sitemapURL.href}</loc>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
