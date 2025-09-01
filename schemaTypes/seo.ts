import { defineField } from "sanity";

export const seo = defineField({
  name: "seo",
  title: "Seo",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
  ],
});
