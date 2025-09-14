import client from '@/sanity/client';

const query = `*[_type == "sobre"][0]{title, description, items}`;

export default async function Sobre() {
  const data: any = await client.fetch(query);
  return (
    <section id="sobre" className="py-20 bg-gh-tertiary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">{data.title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">{data.description}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {data.items?.map((item: any, idx: number) => (
            <div key={idx} className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
