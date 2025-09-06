const Contato = () => {
    return (
        // <!-- Seção de Contato -->
        <section id="contato" className="py-20 bg-gh-tertiary text-gh-hover">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Dê o Primeiro Passo Hoje Mesmo</h2>
                    <p className="text-lg text-gh-hover max-w-3xl mx-auto mb-12">Nossa equipe está disponível 24 horas por dia para ouvir sua história e oferecer a ajuda que você precisa. O sigilo é absoluto.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    <form className="space-y-4">
                        <input type="text" className="w-full p-3 rounded-lg bg-gh-secondary border border-gh-hover" placeholder="Seu nome" required />
                        <input type="email" className="w-full p-3 rounded-lg bg-gh-secondary border border-gh-hover" placeholder="seu.email@exemplo.com" required />
                        <input type="tel" className="w-full p-3 rounded-lg bg-gh-secondary border border-gh-hover" placeholder="(XX) XXXXX-XXXX" required />
                        <textarea rows={4} className="w-full p-3 rounded-lg bg-gh-secondary border border-gh-hover" placeholder="Como podemos ajudar?"></textarea>
                        <button type="submit" className="w-full bg-gh-hover text-gh-tertiary font-bold py-3 px-6 rounded-lg hover:bg-gh-primary transition duration-300">Enviar Mensagem</button>
                    </form>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Informações de Contato</h3>
                            <p className="text-gh-hover flex items-center mb-2">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <strong>Atendimento 24h:</strong> (11) 99999-9999
                            </p>
                            <p className="text-gh-hover flex items-center mb-2">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <strong>Email:</strong> contato@clinicagrandhouse.com.br
                            </p>
                            <p className="text-gh-hover flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <strong>Endereço:</strong> Av. Principal, 1000 - Bairro Nobre, Cidade - SP, CEP 01234-567
                            </p>
                        </div>
                        <div className="h-64 bg-blue-800 rounded-lg">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.19757659551!2d-46.65657158440698!3d-23.56133926748434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x2061596b5930a629!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886543210!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato;