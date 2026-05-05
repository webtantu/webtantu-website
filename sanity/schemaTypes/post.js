export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'metaTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Optional: Overrides the post title for Google search results.',
    },
    {
      name: 'metaDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Optional: Overrides the post description for search results.',
      validation: (Rule) => Rule.max(160),
    },
    {
      name: 'description',
      title: 'Card Description',
      type: 'text',
      rows: 2,
      description: 'Short summary for the blog card on the list page.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'updatedAt',
      title: 'Last Updated At',
      type: 'datetime',
      description: 'Optional: Use this if you have significantly updated the article.',
    },
  ],
};
