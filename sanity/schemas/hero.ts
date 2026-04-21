import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Startseite · Hero",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Überschrift (H1)",
      type: "string",
      initialValue: "Qualitäts-Pflegeprodukte bequem geliefert",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Untertitel",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ctaLabel",
      title: "Button-Text",
      type: "string",
      initialValue: "Jetzt bewerben",
    }),
    defineField({
      name: "ctaHref",
      title: "Button-Link",
      type: "string",
      initialValue: "/bestellen",
    }),
    defineField({
      name: "backgroundImage",
      title: "Hintergrundbild",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "slides",
      title: "Statistik-Slider (rechts)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "stat", title: "Zahl", type: "string" },
            { name: "label", title: "Beschriftung", type: "string" },
            { name: "sub", title: "Zusatz", type: "string" },
          ],
          preview: {
            select: { title: "stat", subtitle: "label" },
          },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Startseite · Hero" }) },
});
