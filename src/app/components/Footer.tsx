import Image from "next/image";

const Footer = () => {
    return (
        // <!-- Rodapé -->
        <footer className="bg-gh-hover text-white">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <Image src="/logo.png" alt="Clinica Grand House" width={80} height={80} />
                    <div className="flex-grow text-center mb-4 md:mb-0">
                        <p>&copy; 2025 Clínica Grand House. Todos os direitos reservados.</p>
                        <p className="text-sm text-white">Responsável Técnico: Dr. Lucas Andrade - CRM 12345/SP</p>
                    </div>
                    <div className="space-x-4">
                        <a href="#sobre" className="hover:text-gray-300">Sobre</a>
                        <a href="#tratamentos" className="hover:text-gray-300">Tratamentos</a>
                        <a href="#contato" className="hover:text-gray-300">Contato</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;