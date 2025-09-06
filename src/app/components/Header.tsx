'use client'
import Image from "next/image";
const Header = () => {
    const handleMenuClick = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    }
    return (
        // <!-- Cabeçalho -->
        <header className="bg-gh-primary shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-blue-800">
                    <Image src="/logo.png" alt="Clinica Grand House" width={80} height={80} />
                </a>
                <div className="hidden md:flex space-x-6 items-center">
                    <a href="#sobre" className="text-white hover:text-gh-hover">Sobre Nós</a>
                    <a href="#tratamentos" className="text-white hover:text-gh-hover">Tratamentos</a>
                    <a href="#equipe" className="text-white hover:text-gh-hover">Nossa Equipe</a>
                    <a href="#estrutura" className="text-white hover:text-gh-hover">Estrutura</a>
                    <a href="#contato" className="text-white hover:text-gh-hover">Contato</a>
                </div>
                <a href="tel:+5511999999999" className="hidden md:block bg-grand-house text-white font-bold py-2 px-4 rounded-lg hover:bg-gh-hover transition duration-300">
                    Peça Ajuda Agora (24h)
                </a>
                <div className="md:hidden">
                    <button id="menu-btn" className="text-white focus:outline-none cursor-pointer" onClick={handleMenuClick}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </nav>
            {/* <!-- Menu Mobile --> */}
            <div id="mobile-menu" className="hidden md:hidden">
                <a href="#sobre" className="block py-2 px-4 text-sm hover:bg-gray-100">Sobre Nós</a>
                <a href="#tratamentos" className="block py-2 px-4 text-sm hover:bg-gray-100">Tratamentos</a>
                <a href="#equipe" className="block py-2 px-4 text-sm hover:bg-gray-100">Nossa Equipe</a>
                <a href="#estrutura" className="block py-2 px-4 text-sm hover:bg-gray-100">Estrutura</a>
                <a href="#contato" className="block py-2 px-4 text-sm hover:bg-gray-100">Contato</a>
                <div className="p-4">
                    <a href="tel:+5511999999999" className="w-full text-center bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300">
                        Peça Ajuda Agora (24h)
                    </a>
                </div>
            </div>
        </header>
    );
}
export default Header;