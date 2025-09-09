'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = () => setOpen(!open);
  return (
    // <!-- Cabeçalho -->
    <header className="bg-gh-primary shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="#" className="text-2xl font-bold text-blue-800">
          <Image src="/logo.png" alt="Clinica Grand House" width={80} height={80} />
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#sobre" className="text-white hover:text-gh-hover">
            Sobre Nós
          </Link>
          <Link href="#tratamentos" className="text-white hover:text-gh-hover">
            Tratamentos
          </Link>
          <Link href="#equipe" className="text-white hover:text-gh-hover">
            Nossa Equipe
          </Link>
          <Link href="#estrutura" className="text-white hover:text-gh-hover">
            Estrutura
          </Link>
          <Link href="#contato" className="text-white hover:text-gh-hover">
            Contato
          </Link>
        </div>
        <a
          href="tel:+5511999999999"
          className="hidden md:block bg-gh-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-gh-hover transition duration-300"
        >
          Peça Ajuda Agora (24h)
        </a>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none cursor-pointer"
            onClick={handleMenuClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* <!-- Menu Mobile --> */}
      <div className={`${open ? "" : "hidden"} md:hidden`}>
        <Link href="#sobre" className="block py-2 px-4 text-sm hover:bg-gray-100">
          Sobre Nós
        </Link>
        <Link href="#tratamentos" className="block py-2 px-4 text-sm hover:bg-gray-100">
          Tratamentos
        </Link>
        <Link href="#equipe" className="block py-2 px-4 text-sm hover:bg-gray-100">
          Nossa Equipe
        </Link>
        <Link href="#estrutura" className="block py-2 px-4 text-sm hover:bg-gray-100">
          Estrutura
        </Link>
        <Link href="#contato" className="block py-2 px-4 text-sm hover:bg-gray-100">
          Contato
        </Link>
        <div className="p-4">
          <a
            href="tel:+5511999999999"
            className="w-full text-center bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            Peça Ajuda Agora (24h)
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
