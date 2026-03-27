import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Psicóloga Gabriely Feitosa</h3>
            <p className="text-sm leading-relaxed mb-4">
              CRP 05/83811
            </p>
            <p className="text-sm">
              Cuidando da sua saúde mental com ética, respeito e acolhimento.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-sage-300 transition-colors">Início</button></li>
              <li><button className="hover:text-sage-300 transition-colors">Sobre Mim</button></li>
              <li><button className="hover:text-sage-300 transition-colors">Serviços</button></li>
              <li><button className="hover:text-sage-300 transition-colors">Contato</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} Psicóloga Gabriely Feitosa | CRP 05/83811. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;