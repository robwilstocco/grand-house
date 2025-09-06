const Estrutura = () => {
    return (
        //  <!-- Seção Estrutura --> 
        <section id="estrutura" className="py-20 bg-gh-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900">Conheça Nossa Estrutura</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">Um ambiente projetado para o conforto, segurança e bem-estar dos nossos pacientes.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div><img className="h-auto max-w-full rounded-lg shadow-md" src="https://placehold.co/500x700/6b7280/ffffff?text=Acomodação" alt="Acomodação da clínica" /></div>
                        <div><img className="h-auto max-w-full rounded-lg shadow-md" src="https://placehold.co/500x500/9ca3af/ffffff?text=Jardim" alt="Jardim da clínica" /></div>
                    </div>
                    <div className="grid gap-4">
                        <div><img className="h-auto max-w-full rounded-lg shadow-md" src="https://placehold.co/500x500/d1d5db/ffffff?text=Refeitório" alt="Refeitório da clínica" /></div>
                        <div><img className="h-auto max-w-full rounded-lg shadow-md" src="https://placehold.co/500x700/e5e7eb/ffffff?text=Área+de+Lazer" alt="Área de lazer da clínica" /></div>
                    </div>
                    <div className="grid gap-4">
                        <div><img className="h-auto max-w-full rounded-lg shadow-md" src="https://placehold.co/500x700/6b7280/ffffff?text=Consultório" alt="Consultório da clínica" /></div>
                        <div><img className="h-auto max-w-full rounded-lg shadow-md" src="https://placehold.co/500x500/9ca3af/ffffff?text=Piscina" alt="Piscina da clínica" /></div>
                    </div>
                    <div className="grid gap-4">
                        <div><img className="h-auto max-w-full rounded-lg shadow-md" src="https://placehold.co/500x500/d1d5db/ffffff?text=Sala+de+Terapia" alt="Sala de terapia da clínica" /></div>
                        <div><img className="h-auto max-w-full rounded-lg shadow-md" src="https://placehold.co/500x700/e5e7eb/ffffff?text=Vista+Aérea" alt="Vista aérea da clínica" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Estrutura;