import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { ServiceData } from '../types';

interface ServiceDetailProps {
  service: ServiceData;
  onBack: () => void;
  onSchedule: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onSchedule }) => {
  return (
    <div className="animate-fade-in">
      {/* Header Image */}
      <div className="h-64 md:h-80 w-full relative overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-stone-900/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white">{service.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <button 
          onClick={onBack}
          className="flex items-center text-stone-500 hover:text-sage-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o início
        </button>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
            <div className="space-y-6 text-stone-700 leading-loose text-lg font-light">
              {service.fullContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-stone-100">
                <h3 className="font-serif text-2xl text-stone-800 mb-6">Benefícios do tratamento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage-500 shrink-0" />
                        <span className="text-stone-600">Autoconhecimento aprofundado</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage-500 shrink-0" />
                        <span className="text-stone-600">Melhoria na qualidade de vida</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage-500 shrink-0" />
                        <span className="text-stone-600">Redução de sintomas agudos</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage-500 shrink-0" />
                        <span className="text-stone-600">Desenvolvimento de inteligência emocional</span>
                    </div>
                </div>

                <div className="text-center">
                    <button 
                        onClick={onSchedule}
                        className="bg-sage-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-sage-700 transition-all shadow-md hover:shadow-lg"
                    >
                        Agendar atendimento para {service.title}
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;