const Sobre = () => {
    return (
        //  <!-- Seção Sobre Nós --> 
        <section id="sobre" className="py-20 bg-gh-tertiary">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Cuidado e Excelência em Cada Detalhe</h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">Nossa missão é promover a reabilitação da saúde mental através de um corpo clínico experiente e uma abordagem terapêutica que valoriza o indivíduo, a família e a ciência.</p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6">
                        <svg className="w-16 h-16 mx-auto text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.176-5.97M15 21h6m-6-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.176-5.97M15 21h6"></path></svg>
                        <h3 className="text-xl font-bold mb-2">Corpo Clínico Especializado</h3>
                        <p className="text-gray-600">Psiquiatras, psicólogos e terapeutas dedicados à sua recuperação.</p>
                    </div>
                    <div className="p-6">
                        <svg className="w-16 h-16 mx-auto text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        <h3 className="text-xl font-bold mb-2">Tratamento Individualizado</h3>
                        <p className="text-gray-600">Planos terapêuticos personalizados para as necessidades de cada paciente.</p>
                    </div>
                    <div className="p-6">
                        <svg className="w-16 h-16 mx-auto text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        <h3 className="text-xl font-bold mb-2">Estrutura Completa</h3>
                        <p className="text-gray-600">Ambiente seguro, confortável e propício para a reabilitação.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre;