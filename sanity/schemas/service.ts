import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Vorteil / Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titel", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Beschreibung", type: "text", rows: 3 }),
    defineField({
      name: "image",
      title: "Bild",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt-Text", type: "string" }],
    }),
    defineField({ name: "ctaLabel", title: "Button-Text", type: "string" }),
    defineField({ name: "ctaHref", title: "Button-Link", type: "string" }),
    defineField({
      name: "order",
      title: "Reihenfolge",
      type: "number",
      initialValue: 10,
    }),
  ],
  preview: { select: { title: "title", media: "image" } },
});
