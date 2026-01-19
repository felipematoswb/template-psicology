import React from 'react';

const Office: React.FC = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-800">O Consultório</h2>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Um ambiente preparado com carinho para oferecer conforto, privacidade e acolhimento durante o seu processo terapêutico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            <img src="https://picsum.photos/id/42/800/600" alt="Sala de espera" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            <img src="https://picsum.photos/id/364/800/600" alt="Sala de atendimento" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            <img src="https://picsum.photos/id/201/800/600" alt="Detalhes do consultório" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 text-center shadow-sm border border-stone-100">
          <h3 className="font-serif text-2xl text-stone-800 mb-4">Atendimento Online e Presencial</h3>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Além do espaço físico, ofereço atendimentos online através de plataformas seguras, permitindo que você cuide da sua saúde mental de onde estiver, com a mesma qualidade e acolhimento.
          </p>
          <div className="inline-flex gap-4">
            <span className="px-6 py-2 bg-sage-100 text-sage-800 rounded-full text-sm font-semibold">Wi-Fi Disponível</span>
            <span className="px-6 py-2 bg-sage-100 text-sage-800 rounded-full text-sm font-semibold">Estacionamento</span>
            <span className="px-6 py-2 bg-sage-100 text-sage-800 rounded-full text-sm font-semibold">Acessibilidade</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;