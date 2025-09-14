import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'sobre',
  title: 'Sobre',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineType({
          name: 'item',
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'string', title: 'Description' },
          ],
        }),
      ],
    }),
  ],
});
