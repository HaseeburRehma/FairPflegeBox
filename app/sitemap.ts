import type { MetadataRoute } from "next";

/**
 * Auto-generated sitemap — Next.js App Router reads this at build time
 * and exposes it at `/sitemap.xml`.
 *
 * When adding a new route under `app/`, add it here so Google and other
 * search engines can discover it.
 */

const SITE_URL = "https://fairpflegebox.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/ueber-uns", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/pflegepaket", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/produkte", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/pflegebedarf", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/so-funktioniert-es", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/haeufige-fragen", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/kontakt", changeFrequency: "yearly" as const, priority: 0.6 },
    { path: "/pflichtangaben", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const lastModified = new Date();

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
