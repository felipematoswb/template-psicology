import React from 'react';
import { Phone, Instagram } from 'lucide-react';

const WHATSAPP_NUMBER = '5599999999999';
const WHATSAPP_MESSAGE = encodeURIComponent('Olá, Gabriely! Gostaria de iniciar minha jornada terapêutica.');

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-white animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-800">Entre em Contato</h2>
          <p className="mt-4 text-stone-600">Estou aqui para ouvir você. Agende sua sessão pelo WhatsApp ou nas redes sociais.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-4 p-10 bg-sage-50 rounded-3xl border border-sage-100 hover:bg-sage-100 hover:shadow-md transition-all group"
          >
            <div className="bg-white p-4 rounded-full text-sage-600 shadow-sm group-hover:shadow-md transition-all">
              <Phone className="w-8 h-8" />
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl text-stone-800 mb-1">WhatsApp</h3>
              <p className="text-stone-600">+55 99999-99999</p>
              <p className="text-sm text-sage-600 font-semibold mt-3">Quero iniciar minha jornada →</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/psigabriely?igsh=djJidmE3enFncm5v&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-4 p-10 bg-sage-50 rounded-3xl border border-sage-100 hover:bg-sage-100 hover:shadow-md transition-all group"
          >
            <div className="bg-white p-4 rounded-full text-sage-600 shadow-sm group-hover:shadow-md transition-all">
              <Instagram className="w-8 h-8" />
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl text-stone-800 mb-1">Instagram</h3>
              <p className="text-stone-600">@psigabriely</p>
              <p className="text-sm text-sage-600 font-semibold mt-3">Ver perfil →</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;