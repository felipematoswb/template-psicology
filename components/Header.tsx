import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ViewState, ServiceData } from '../types';
import { SERVICES } from '../constants';

interface HeaderProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  onSelectService: (serviceId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onChangeView, onSelectService }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleNav = (view: ViewState) => {
    onChangeView(view);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (id: string) => {
    onSelectService(id);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center gap-2"
            onClick={() => handleNav('home')}
          >
            <div className="w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center text-white font-serif italic text-xl">P</div>
            <span className="font-serif text-2xl text-stone-700 tracking-wide">
              Psicologia<span className="text-sage-600">Serena</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => handleNav('home')} 
              className={`${currentView === 'home' ? 'text-sage-600 font-semibold' : 'text-stone-500'} hover:text-sage-600 transition-colors`}
            >
              Início
            </button>
            <button 
              onClick={() => handleNav('about')} 
              className={`${currentView === 'about' ? 'text-sage-600 font-semibold' : 'text-stone-500'} hover:text-sage-600 transition-colors`}
            >
              Sobre Mim
            </button>
            
            {/* Dropdown for Services */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 ${currentView === 'service-detail' ? 'text-sage-600 font-semibold' : 'text-stone-500'} hover:text-sage-600 transition-colors group-hover:text-sage-600`}
              >
                Como posso ajudar? <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left border border-stone-100">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className="block px-4 py-2 text-sm text-stone-600 hover:bg-sage-50 hover:text-sage-700 w-full text-left"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => handleNav('faq')} 
              className={`${currentView === 'faq' ? 'text-sage-600 font-semibold' : 'text-stone-500'} hover:text-sage-600 transition-colors`}
            >
              Dúvidas
            </button>
            <button 
              onClick={() => handleNav('office')} 
              className={`${currentView === 'office' ? 'text-sage-600 font-semibold' : 'text-stone-500'} hover:text-sage-600 transition-colors`}
            >
              Consultório
            </button>
            <button 
              onClick={() => handleNav('contact')} 
              className="bg-sage-600 text-white px-5 py-2.5 rounded-full hover:bg-sage-700 transition-all shadow-sm hover:shadow-md"
            >
              Agendar Sessão
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-600">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button onClick={() => handleNav('home')} className="block w-full text-left px-3 py-3 text-stone-600 hover:bg-sage-50 rounded-lg">Início</button>
            <button onClick={() => handleNav('about')} className="block w-full text-left px-3 py-3 text-stone-600 hover:bg-sage-50 rounded-lg">Sobre Mim</button>
            
            <div className="space-y-1">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-stone-600 hover:bg-sage-50 rounded-lg"
              >
                <span>Como posso ajudar?</span>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-6 space-y-1 border-l-2 border-sage-100 ml-3">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick(service.id)}
                      className="block w-full text-left px-3 py-2 text-sm text-stone-500 hover:text-sage-600"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => handleNav('faq')} className="block w-full text-left px-3 py-3 text-stone-600 hover:bg-sage-50 rounded-lg">Dúvidas Frequentes</button>
            <button onClick={() => handleNav('office')} className="block w-full text-left px-3 py-3 text-stone-600 hover:bg-sage-50 rounded-lg">Consultório</button>
            <button onClick={() => handleNav('contact')} className="block w-full text-left px-3 py-3 text-sage-700 font-semibold bg-sage-50 rounded-lg mt-4">Agendar Sessão</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;