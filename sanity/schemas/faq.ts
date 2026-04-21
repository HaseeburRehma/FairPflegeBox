import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "Häufige Frage",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Frage", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", title: "Antwort", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({
      name: "order",
      title: "Reihenfolge",
      type: "number",
      initialValue: 10,
    }),
  ],
  preview: {
    select: { title: "question", subtitle: "order" },
    prepare: ({ title, subtitle }) => ({ title, subtitle: `Reihenfolge: ${subtitle ?? "—"}` }),
  },
});
