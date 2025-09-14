import type { SanityClient } from '@sanity/client';

let createClient: (config: Record<string, any>) => SanityClient;

try {
  createClient = require('@sanity/client').createClient;
} catch {
  const data: Record<string, any> = {
    '*[_type == "hero"][0]': {
      title: 'Referência em Saúde e Bem-Estar Mental',
      description:
        'Tratamentos individualizados para dependência química e transtornos psiquiátricos, com foco na recuperação integral do paciente.',
      whatsappLink:
        'https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20tratamento.',
      phoneNumber: '(11) 99999-9999',
    },
    '*[_type == "sobre"][0]{title, description, items}': {
      title: 'Cuidado e Excelência em Cada Detalhe',
      description:
        'Nossa missão é promover a reabilitação da saúde mental através de um corpo clínico experiente e uma abordagem terapêutica que valoriza o indivíduo, a família e a ciência.',
      items: [
        {
          title: 'Corpo Clínico Especializado',
          description: 'Psiquiatras, psicólogos e terapeutas dedicados à sua recuperação.',
        },
        {
          title: 'Tratamento Individualizado',
          description: 'Planos terapêuticos personalizados para as necessidades de cada paciente.',
        },
        {
          title: 'Estrutura Completa',
          description: 'Ambiente seguro, confortável e propício para a reabilitação.',
        },
      ],
    },
  };
  createClient = () => ({
    fetch: async (query: string) => data[query] || {},
  }) as unknown as (config: Record<string, any>) => SanityClient;
}

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: true,
});

export default client;
