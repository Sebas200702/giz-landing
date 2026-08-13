import type { APIRoute } from "astro";

// Genera un sitemap.xml válido tanto en desarrollo (`astro dev`) como en producción (`astro build`).
export const GET: APIRoute = ({ site }) => {
  const siteURL = site ? site.href : "https://talentosinfronteras.fundacioncolombiaincluyente.org/";
  const lastmod = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteURL}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
