import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import Sobre from "./components/sections/Sobre";
import Tratamentos from "./components/sections/Tratamentos";
import Equipe from "./components/sections/Equipe";
import Estrutura from "./components/sections/Estrutura";
import Depoimentos from "./components/sections/Depoimentos";
import FamiliaresFAQ from "./components/sections/FamiliaresFAQ";
import Contato from "./components/sections/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Tratamentos />
        <Equipe />
        <Estrutura />
        <Depoimentos />
        <FamiliaresFAQ />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
