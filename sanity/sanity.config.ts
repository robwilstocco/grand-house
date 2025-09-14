import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

export default defineConfig({
  projectId: process.env.SANITY_PROJECT_ID || '',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2023-01-01',
  basePath: '/sanity',
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});
