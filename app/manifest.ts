import type { MetadataRoute } from "next";

/**
 * Web app manifest — Next.js serves this at `/manifest.webmanifest`.
 * Improves PWA install prompts, Android/iOS "add to home screen"
 * experience and gives Lighthouse/PageSpeed a bump on SEO + Best Practices.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FairPflegeBox – Pflegehilfsmittel einfach & fair",
    short_name: "FairPflegeBox",
    description:
      "Kostenlose Pflegehilfsmittel monatlich geliefert – bis zu 42 € über die Pflegekasse. Einfach, digital, papierlos.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#43358B",
    lang: "de",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
