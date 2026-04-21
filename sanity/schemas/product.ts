import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Produkt",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (r) => r.required().min(3).max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
    }),
    defineField({
      name: "order",
      title: "Reihenfolge",
      description:
        "Kleinere Zahl erscheint weiter oben im Grid (1, 2, 3…).",
      type: "number",
      initialValue: 10,
    }),
    defineField({
      name: "intro",
      title: "Beschreibung",
      description:
        "Einleitungstext unter dem Titel. Zeilenumbrüche werden übernommen.",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "pflichtInfo",
      title: "Pflichtinformation-Link anzeigen?",
      description:
        "Wenn aktiv, erscheint hinter dem Einleitungstext „(Pflichtinformation)“ und verlinkt auf /pflichtangaben.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "bullets",
      title: "Merkmale (Bullet-Zeilen)",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "list" },
    }),
    defineField({
      name: "image",
      title: "Produktbild",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt-Text (SEO, Barrierefreiheit)",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "ctaLabel",
      title: "Button-Text",
      type: "string",
      initialValue: "Produkte erkunden",
    }),
    defineField({
      name: "ctaHref",
      title: "Button-Link (URL oder Pfad)",
      type: "string",
      initialValue: "/pflegepaket",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      order: "order",
    },
    prepare({ title, media, order }) {
      return {
        title,
        subtitle: order != null ? `Reihenfolge: ${order}` : "",
        media,
      };
    },
  },
});
