const Equipe = () => {
    return (
        //  <!-- NOVA SEÇÃO: Nossa Equipe --> 
        <section id="equipe" className="py-20 bg-gh-tertiary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900">Nossa Equipe de Especialistas</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">Profissionais com vasta experiência e dedicação ao cuidado da saúde mental.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* <!-- Membro da Equipe 1 --> */}
                    <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md">
                        <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="https://placehold.co/200x200/a3b18a/ffffff?text=Dr.+Lucas" alt="Foto do Dr. Lucas Andrade" />
                        <h3 className="text-xl font-bold text-gray-800">Dr. Lucas Andrade</h3>
                        <p className="text-blue-700 font-semibold">Psiquiatra - CRM 12345/SP</p>
                        <p className="text-gray-600 mt-2 text-sm">Diretor Clínico e especialista em dependência química. Mais de 15 anos de experiência em reabilitação.</p>
                    </div>
                    {/* <!-- Membro da Equipe 2 --> */}
                    <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md">
                        <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="https://placehold.co/200x200/c3d4e0/ffffff?text=Dra.+Sofia" alt="Foto da Dra. Sofia Martins" />
                        <h3 className="text-xl font-bold text-gray-800">Dra. Sofia Martins</h3>
                        <p className="text-blue-700 font-semibold">Psicóloga - CRP 67890/SP</p>
                        <p className="text-gray-600 mt-2 text-sm">Coordenadora da psicologia e especialista em Terapia Cognitivo-Comportamental e terapia familiar.</p>
                    </div>
                    {/* <!-- Membro da Equipe 3 --> */}
                    <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md">
                        <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="https://placehold.co/200x200/6b7280/ffffff?text=Enf.+Carlos" alt="Foto do Enfermeiro Carlos Pereira" />
                        <h3 className="text-xl font-bold text-gray-800">Carlos Pereira</h3>
                        <p className="text-blue-700 font-semibold">Coordenador de Enfermagem</p>
                        <p className="text-gray-600 mt-2 text-sm">Responsável pela equipe de enfermagem, garantindo um cuidado seguro e humanizado 24h por dia.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Equipe;