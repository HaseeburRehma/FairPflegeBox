import type { MetadataRoute } from "next";

/**
 * Next.js App Router reads this and serves it at `/robots.txt`.
 * Links the sitemap so crawlers discover the whole site in one hop.
 */

const SITE_URL = "https://fairpflegebox.de";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep the embedded CMS and internal API routes out of the index.
        disallow: ["/studio", "/studio/", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
