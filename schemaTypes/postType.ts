import { defineType, defineField } from 'sanity'

export const HeadingsOptions = [
  { title: 'Heading 2', value: 'h2' },
  { title: 'Heading 3', value: 'h3' },
]

export const RebotMetaTagOptions = [
  { title: 'index/follow ', value: 'index/follow' },
  { title: 'noindex/nofollow', value: 'noindex/nofollow' },
]

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'object',
      fields: [
        { name: 'imageFile', title: 'ImageFile', type: 'image' },
        { name: 'alt', title: 'Alt', type: 'text' },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'string' },
        {
          name: 'RebotMetaTag',
          title: 'Rebot MetaTag',
          type: 'string',
          options: {
            list: RebotMetaTagOptions.map(({ title, value }) => ({ title, value })),
          },
        },
        {
          name: 'siteMapInclusion',
          title: 'SiteMap Inclusion',
          type: 'boolean',
          initialValue: false,
        },
        { name: 'openGraphTitle', title: 'OpenGraph Title', type: 'string' },
        { name: 'openGraphDescription', title: 'OpenGraph Description', type: 'text' },
        { name: 'openGraphImage', title: 'OpenGraph Image', type: 'image' },

      ],
    }),
    defineField({
      name: 'tableContent',
      title: 'TableContent',
      type: 'string',
      options: {
        list: HeadingsOptions.map(({ title, value }) => ({ title, value })),
        // layout: 'radio',
      },
    })
  ],
})
