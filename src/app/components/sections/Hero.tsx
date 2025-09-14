import client from '@/sanity/client';

const query = `*[_type == "hero"][0]`;

export default async function Hero() {
  const data: any = await client.fetch(query);
  return (
    <section className="hero-bg text-white">
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          {data.title}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          {data.description}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <a
            href={data.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition duration-300 flex items-center space-x-2 w-full md:w-auto justify-center"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.225.651 4.315 1.731 6.086l.099.164-1.157 4.224 4.272-1.119.162.099z" />
            </svg>
            <span>Fale pelo WhatsApp</span>
          </a>
          <a
            href={`tel:${data.phoneNumber}`}
            className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition duration-300 w-full md:w-auto justify-center"
          >
            Ligue Agora: {data.phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
}
