const Depoimentos = () => {
  return (
    // <!-- Seção Depoimentos -->
    <section id="depoimentos" className="py-20 bg-gh-tertiary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Histórias que nos Inspiram</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Depoimentos de quem encontrou na Clínica Grand House uma nova chance de viver.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-100 p-8 rounded-lg shadow">
            <p className="text-gray-600 italic mb-4">&quot;Encontrei aqui não só um tratamento, mas uma família que me acolheu e me mostrou que a recuperação era possível. Serei eternamente grato por terem me devolvido a vida.&quot;</p>
            <p className="font-bold text-blue-700">- J. S., Paciente Recuperado</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow">
            <p className="text-gray-600 italic mb-4">&quot;Ver meu filho sorrindo de novo não tem preço. A equipe da clínica foi fundamental não só para ele, mas para dar todo o suporte que nossa família precisava neste momento tão difícil.&quot;</p>
            <p className="font-bold text-blue-700">- M. A., Mãe de Paciente</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
