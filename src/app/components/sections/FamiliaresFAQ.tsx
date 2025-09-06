'use client'
import { useState } from "react";

const faqs = [
  {
    q: "Quanto tempo dura o tratamento?",
    a: "O tempo de tratamento varia para cada paciente. Em geral, o período de internação pode variar de 3 a 6 meses, com um plano de pós-tratamento contínuo."
  },
  {
    q: "O paciente pode receber visitas?",
    a: "Sim. As visitas são agendadas em dias e horários específicos, de acordo com o cronograma terapêutico."
  }
]

const FamiliaresFAQ = () => {
  
  const [open, setOpen] = useState<number | null>(0);

  return (
    // <!-- Seção Para Familiares e FAQ --> 
    <section id="familiares" className="py-20 bg-gh-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Apoio Essencial para a Família</h2>
            <p className="text-lg text-gray-600 mb-6">Sabemos que a dependência química e os transtornos mentais afetam toda a família. Por isso, oferecemos um programa de apoio dedicado a orientar, acolher e fortalecer os laços familiares durante e após o tratamento.</p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Aconselhamento e terapia familiar.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Grupos de apoio para pais e cônjuges.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {faqs.map((item, idx) => {
                const isOpen = open === idx;
                return (
                  <div key={idx} className="border rounded-lg bg-white">
                    <button
                      className="w-full flex justify-between items-center text-left p-4 font-semibold"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${idx}`}
                      onClick={() => setOpen(isOpen ? null : idx)}
                    >
                      <span>{item.q}</span>
                      <svg className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke="currentColor" strokeWidth="2" fill="none" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                    <div
                      id={`faq-${idx}`}
                      className={`px-4 pb-4 text-gray-600 overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}
                    >
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FamiliaresFAQ;