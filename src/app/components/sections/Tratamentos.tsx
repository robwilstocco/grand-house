const Tratamentos = () => {
    return (
        // <!-- Seção de Tratamentos --> 
        <section id="tratamentos" className="py-20 bg-gh-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900">Nossas Especialidades</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">Programas terapêuticos baseados em evidências científicas para garantir o melhor resultado.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
                        <img src="https://placehold.co/600x400/6b7280/ffffff?text=Dependência+Química" alt="Tratamento para Dependência Química" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Dependência Química</h3>
                            <p className="text-gray-600 mb-4">Tratamento para álcool e outras drogas, com foco em desintoxicação e prevenção à recaída.</p>
                            <a href="#contato" className="font-semibold text-blue-700 hover:text-blue-900">Saiba Mais &rarr;</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
                        <img src="https://placehold.co/600x400/9ca3af/ffffff?text=Transtornos+Mentais" alt="Tratamento para Transtornos Mentais" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Transtornos Mentais</h3>
                            <p className="text-gray-600 mb-4">Cuidado para depressão, ansiedade, bipolaridade, esquizofrenia e outros transtornos.</p>
                            <a href="#contato" className="font-semibold text-blue-700 hover:text-blue-900">Saiba Mais &rarr;</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
                        <img src="https://placehold.co/600x400/d1d5db/ffffff?text=Saúde+do+Idoso" alt="Tratamento para Saúde do Idoso" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Psiquiatria Geriátrica</h3>
                            <p className="text-gray-600 mb-4">Cuidado especializado em saúde mental para a terceira idade, incluindo demências e depressão.</p>
                            <a href="#contato" className="font-semibold text-blue-700 hover:text-blue-900">Saiba Mais &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tratamentos;