import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import WhyBanner from './components/WhyBanner';
import ServiceDetail from './components/ServiceDetail';
import About from './components/About';
import Faq from './components/Faq';
import Office from './components/Office';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SERVICES } from './constants';
import { ViewState, ServiceData } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    setCurrentView('service-detail');
  };

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    if (view !== 'service-detail') {
      setSelectedServiceId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (currentView === 'home') {
      return (
        <main className="flex-grow">
          <Hero onNavigateToAbout={() => handleNavigate('about')} />
          <ServicesGrid onSelectService={handleSelectService} />
          <WhyBanner onSchedule={() => handleNavigate('contact')} />
        </main>
      );
    }

    if (currentView === 'service-detail' && selectedServiceId) {
      const service = SERVICES.find(s => s.id === selectedServiceId);
      if (service) {
        return (
          <ServiceDetail 
            service={service} 
            onBack={() => handleNavigate('home')} 
            onSchedule={() => handleNavigate('contact')}
          />
        );
      }
    }

    if (currentView === 'about') return <About />;
    if (currentView === 'faq') return <Faq />;
    if (currentView === 'office') return <Office />;
    if (currentView === 'contact') return <Contact />;

    // Fallback
    return (
      <main className="flex-grow">
        <Hero onNavigateToAbout={() => handleNavigate('about')} />
        <ServicesGrid onSelectService={handleSelectService} />
        <WhyBanner onSchedule={() => handleNavigate('contact')} />
      </main>
    );
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header 
        currentView={currentView} 
        onChangeView={handleNavigate}
        onSelectService={handleSelectService}
      />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default App;