import React from 'react';
import { Brain, CloudRain, Wind, Heart, Utensils, Users, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { ServiceData } from '../types';

interface ServicesGridProps {
  onSelectService: (id: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-8 h-8" />,
  CloudRain: <CloudRain className="w-8 h-8" />,
  Wind: <Wind className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Utensils: <Utensils className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
};

const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sage-600 font-bold tracking-widest uppercase text-sm mb-3">Especialidades</h2>
          <h3 className="font-serif text-3xl md:text-4xl text-stone-800">Como a psicologia pode te ajudar?</h3>
          <div className="w-20 h-1 bg-sage-300 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className="group bg-sage-50/30 rounded-2xl p-8 border border-stone-100 hover:border-sage-200 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center text-sage-600 shadow-sm mb-6 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-300">
                {iconMap[service.iconName]}
              </div>
              <h4 className="font-serif text-xl font-semibold text-stone-800 mb-3">{service.title}</h4>
              <p className="text-stone-600 leading-relaxed mb-6 text-sm">
                {service.shortDescription}
              </p>
              <div className="flex items-center text-sage-600 font-semibold text-sm group-hover:text-sage-800">
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;