import React, { useState } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { siteData, ServiceItem, buildWhatsAppLink } from '../data/siteData';
import { translations, Language } from '../data/translations';

interface ServicesProps {
  currentLang: Language;
}

export const Services: React.FC<ServicesProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'maos' | 'pes' | 'extras'>('all');
  const t = translations[currentLang];

  const filteredServices = activeTab === 'all'
    ? siteData.services
    : siteData.services.filter((s) => s.category === activeTab);

  const defaultMsg = currentLang === 'pt'
    ? "Olá, Sabrine! 💛 Vi o seu site e gostaria de agendar um horário."
    : "Hello, Sabrine! 💛 I saw your website and would love to schedule an appointment.";

  return (
    <section id="servicos" className="py-24 bg-[#F1F2F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#6A6E72]">
              {currentLang === 'pt' ? 'Menu de Serviços' : 'Services Menu'}
            </span>
            <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
          </div>

          <h2 className="font-forum text-3xl sm:text-4xl lg:text-5xl text-[#2A2C2E] tracking-tight mb-4">
            {t.services.title}
          </h2>

          <p className="text-base sm:text-lg text-[#5F6368] font-light leading-relaxed">
            {t.services.subtitle}
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8" role="tablist" aria-label="Categorias de serviços">
            {[
              { id: 'all', label: t.services.tabs.all },
              { id: 'maos', label: t.services.tabs.maos },
              { id: 'pes', label: t.services.tabs.pes },
              { id: 'extras', label: t.services.tabs.extras },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-2 text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2A2C2E] text-white shadow-sm'
                      : 'bg-white/80 hover:bg-white text-[#5F6368] border border-[#B4B8BC]/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid (2 cols desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredServices.map((service: ServiceItem) => {
            const serviceName = service.name[currentLang];
            const serviceDesc = service.description[currentLang];
            const bookingMsg = t.services.defaultWhatsAppMsg(serviceName);

            return (
              <div
                key={service.id}
                className="mirror-border-wrap transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className={`mirror-border-wrap-inner p-5 sm:p-6 flex flex-col ${service.image ? 'sm:flex-row' : ''} gap-5 items-start ${service.image ? 'sm:items-center' : ''}`}>
                  
                  {/* Photo in rectangular mirror frame (only if provided) */}
                  {service.image && (
                    <div className="relative w-full sm:w-28 sm:h-28 h-48 shrink-0 rounded-[6px] overflow-hidden p-[1.5px] bg-gradient-to-tr from-[#8E9296] via-[#FFFFFF] to-[#B4B8BC] shadow-xs shine-effect">
                      <img
                        src={service.image}
                        alt={serviceName}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-[5px] transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Content & Booking CTA */}
                  <div className="flex-1 flex flex-col justify-between w-full h-full space-y-3">
                    <div>
                      <h3 className="font-forum text-lg sm:text-xl text-[#2A2C2E] font-normal leading-snug">
                        {serviceName}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5F6368] mt-1.5 leading-relaxed font-light">
                        {serviceDesc}
                      </p>

                      {/* Optional Price field (hidden when empty per PRD Rule 5) */}
                      {service.price && (
                        <div className="mt-2 text-xs font-semibold text-[#2A2C2E]">
                          {service.price}
                        </div>
                      )}
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <a
                        href={buildWhatsAppLink(bookingMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#2A2C2E] hover:text-[#6A6E72] py-1 border-b border-[#2A2C2E] hover:border-[#6A6E72] transition-colors"
                        aria-label={`${t.services.bookService}: ${serviceName}`}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{t.services.bookService}</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="text-center mt-12 mb-8">
          <p className="text-xs text-[#6A6E72] max-w-xl mx-auto italic">
            * {t.services.disclaimer}
          </p>
        </div>

        {/* Section Primary CTA */}
        <div className="flex justify-center">
          <a
            href={buildWhatsAppLink(defaultMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#2A2C2E] bg-mirror shadow-sm hover:shadow-md hover:brightness-105 active:scale-98 transition-all shine-effect"
          >
            <MessageCircle className="w-4 h-4 text-[#2A2C2E]" />
            <span>{t.services.sectionCta}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
