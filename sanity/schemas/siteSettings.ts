import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Globale Einstellungen",
  type: "document",
  fields: [
    defineField({ name: "contactAddress", title: "Kontakt-Adresse", type: "string" }),
    defineField({ name: "contactEmail", title: "Kontakt-E-Mail", type: "string" }),
    defineField({ name: "contactPhone", title: "Kontakt-Telefon", type: "string" }),
    defineField({
      name: "newsletterHeading",
      title: "Newsletter · Überschrift",
      type: "string",
      initialValue: "Bleiben Sie mit uns verbunden",
    }),
    defineField({
      name: "newsletterBody",
      title: "Newsletter · Text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "socialLinks",
      title: "Social-Links (Footer)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "href", title: "URL", type: "url" },
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Globale Einstellungen" }) },
});
