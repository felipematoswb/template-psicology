import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-800">Entre em Contato</h2>
          <p className="mt-4 text-stone-600">Estou aqui para ouvir você. Agende sua sessão ou tire suas dúvidas.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 p-8 bg-sage-50 rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full text-sage-600 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800 text-lg">Telefone / WhatsApp</h3>
                <p className="text-stone-600">+55 (11) 99999-9999</p>
                <p className="text-sm text-stone-500 mt-1">Segunda a Sexta, das 8h às 20h</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full text-sage-600 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800 text-lg">E-mail</h3>
                <p className="text-stone-600">contato@psicologiaserena.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full text-sage-600 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800 text-lg">Localização</h3>
                <p className="text-stone-600">Av. Paulista, 1000 - Conj. 101</p>
                <p className="text-stone-600">Bela Vista, São Paulo - SP</p>
              </div>
            </div>

            <div className="pt-8 border-t border-sage-200">
              <h3 className="font-semibold text-stone-800 mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white rounded-full text-sage-600 hover:text-sage-800 hover:shadow-md transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-white rounded-full text-sage-600 hover:text-sage-800 hover:shadow-md transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Nome</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-all bg-stone-50 focus:bg-white"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Telefone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-all bg-stone-50 focus:bg-white"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">E-mail</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-all bg-stone-50 focus:bg-white"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Mensagem</label>
              <textarea 
                rows={4} 
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-all bg-stone-50 focus:bg-white resize-none"
                placeholder="Como posso te ajudar?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-sage-600 text-white font-semibold py-4 rounded-xl hover:bg-sage-700 transition-colors shadow-md"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;