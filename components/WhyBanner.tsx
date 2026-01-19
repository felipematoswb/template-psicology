import React from 'react';

interface WhyBannerProps {
  onSchedule: () => void;
}

const WhyBanner: React.FC<WhyBannerProps> = ({ onSchedule }) => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/id/28/1920/800" 
          alt="Nature background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="font-serif text-3xl md:text-5xl mb-6">Por que a psicologia pode te ajudar?</h2>
        <p className="text-lg md:text-xl text-stone-100 font-light leading-relaxed mb-10">
          Não é apenas sobre resolver problemas, é sobre expandir sua capacidade de viver. 
          A terapia oferece as ferramentas para que você possa reescrever sua história, 
          melhorar suas relações e encontrar um propósito genuíno. Dê o primeiro passo 
          em direção à sua melhor versão.
        </p>
        <button 
          onClick={onSchedule}
          className="bg-sage-600 hover:bg-sage-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Quero Agendar Minha Sessão
        </button>
      </div>
    </section>
  );
};

export default WhyBanner;