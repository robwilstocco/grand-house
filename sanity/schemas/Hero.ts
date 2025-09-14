import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'whatsappLink', type: 'url', title: 'WhatsApp Link' }),
    defineField({ name: 'phoneNumber', type: 'string', title: 'Phone Number' }),
  ],
});
