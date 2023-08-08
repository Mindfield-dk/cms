import {defineField, defineType} from 'sanity'
export default defineType({
    name: 'photo',
    title: 'Photos',
    type: 'document',
    fields: [
        defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
      }),
      defineField({
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      }),
      defineField({
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: { type: 'author' },
      }),
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
      }),
      defineField({
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'category' } }],
      }),
    ],
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'image',
      },
      prepare(selection) {
        const { author } = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`,
        })
      },
    },
  })