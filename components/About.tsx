import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-96 lg:h-auto relative">
              <img 
                src="https://picsum.photos/id/64/800/1200" 
                alt="Dra. Juliana Mendes" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <h4 className="text-sage-600 font-bold tracking-widest uppercase text-sm mb-2">Sobre Mim</h4>
              <h2 className="font-serif text-4xl text-stone-800 mb-6">Dra. Juliana Mendes</h2>
              
              <div className="space-y-6 text-stone-600 leading-relaxed font-light text-lg">
                <p>
                  Olá! Sou psicóloga clínica graduada pela Universidade de São Paulo (USP), com especialização em Terapia Cognitivo-Comportamental e Pós-graduação em Saúde Mental.
                </p>
                <p>
                  Acredito que cada ser humano possui uma história única e sagrada. Minha missão é oferecer um ambiente seguro e acolhedor, onde você possa explorar suas dores e potências sem medo de julgamentos.
                </p>
                <p>
                  Ao longo de 10 anos de prática clínica, tenho auxiliado centenas de pacientes a reescreverem suas narrativas, superando quadros de ansiedade, depressão e conflitos relacionais.
                </p>
                <p>
                  Meu trabalho é pautado na ética, na empatia e na ciência. Busco estar em constante atualização para oferecer o que há de melhor e mais eficaz no tratamento psicológico.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-stone-100 flex gap-10">
                <div>
                  <span className="block text-3xl font-serif text-sage-600">10+</span>
                  <span className="text-sm text-stone-500 uppercase tracking-wide">Anos de Exp.</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-sage-600">2k+</span>
                  <span className="text-sm text-stone-500 uppercase tracking-wide">Vidas Impactadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;