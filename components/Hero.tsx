import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigateToAbout: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateToAbout }) => {
  return (
    <section className="relative bg-sage-50/50 pt-10 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-800 leading-tight">
              Ressignifique sua história com uma psicologia ética, humana e atenta ao seu <span className="text-sage-600 italic">contexto social</span>.
            </h1>
            <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-lg">
              A psicoterapia é um caminho de reencontro consigo mesmo. 
              Ofereço um espaço de escuta qualificada, sigilo e acolhimento para 
              que você possa transformar suas angústias em crescimento.
            </p>
            
            {/* About Summary Box */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mt-8 max-w-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-sage-200 overflow-hidden">
                  <img src="/img2.jpeg" alt="Dra. Avatar" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-stone-800">Psicóloga Gabriely Feitosa</h3>
                  <p className="text-xs text-sage-600 uppercase tracking-wider font-semibold">Psicóloga Clínica - CRP 05/83811</p>
                </div>
              </div>
              <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                Psicóloga graduada pela UFRJ, com prática clínica fundamentada no compromisso ético e no cuidado profundo com as singularidades de cada sujeito. Ofereço um espaço de escuta qualificada e acolhimento.
              </p>
              <button 
                onClick={onNavigateToAbout}
                className="flex items-center text-sage-700 font-semibold hover:text-sage-900 transition-colors text-sm group"
              >
                Conheça minha trajetória 
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-sage-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-sand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
              <img 
                src="/img3.jpeg" 
                alt="Ambiente de terapia sereno" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white/90 font-serif italic text-xl">
                "Cuidar da mente é cuidar da vida."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;