import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Kundenstimme",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Rolle / Beschreibung", type: "string" }),
    defineField({ name: "quote", title: "Zitat", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({
      name: "stars",
      title: "Bewertung (Sterne)",
      type: "number",
      options: {
        list: [
          { title: "1", value: 1 },
          { title: "2", value: 2 },
          { title: "3", value: 3 },
          { title: "4", value: 4 },
          { title: "5", value: 5 },
        ],
      },
      initialValue: 5,
    }),
    defineField({ name: "avatar", title: "Avatar", type: "image", options: { hotspot: true } }),
    defineField({ name: "portrait", title: "Großes Portrait", type: "image", options: { hotspot: true } }),
    defineField({
      name: "order",
      title: "Reihenfolge",
      type: "number",
      initialValue: 10,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "avatar" },
  },
});
