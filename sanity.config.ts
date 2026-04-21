/**
 * FairPflegeBox · Sanity Studio configuration.
 *
 * When `/app/studio/[[...tool]]/page.tsx` is hit in the browser, this config is
 * loaded and the embedded CMS renders at /studio. Anyone you invite from
 * sanity.io can edit content there — no developer needed.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "fairpflegebox",
  title: "FairPflegeBox CMS",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Inhalte")
          .items([
            // Singletons — one-and-only documents
            S.listItem()
              .title("Startseite · Hero")
              .id("hero")
              .child(S.document().schemaType("hero").documentId("hero")),
            S.listItem()
              .title("Globale Einstellungen")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            // Collections
            S.documentTypeListItem("service").title("Vorteile (Services)"),
            S.documentTypeListItem("product").title("Produkte"),
            S.documentTypeListItem("testimonial").title("Kundenstimmen"),
            S.documentTypeListItem("faq").title("Häufige Fragen"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
