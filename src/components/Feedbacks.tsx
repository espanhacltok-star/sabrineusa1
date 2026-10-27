import React, { useState } from 'react';
import { Star, MessageCircle, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { siteData, FeedbackItem, buildWhatsAppLink } from '../data/siteData';
import { translations, Language } from '../data/translations';

interface FeedbacksProps {
  currentLang: Language;
}

export const Feedbacks: React.FC<FeedbacksProps> = ({ currentLang }) => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const t = translations[currentLang];

  const defaultMsg = currentLang === 'pt'
    ? "Olá, Sabrine! 💛 Vi os depoimentos das suas clientes e quero viver essa experiência!"
    : "Hello, Sabrine! 💛 I saw the reviews on your website and would love to experience your care!";

  const handlePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? siteData.feedbacks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev === siteData.feedbacks.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="avaliacoes" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#6A6E72]">
              {currentLang === 'pt' ? 'Experiência & Confiança' : 'Client Experiences'}
            </span>
            <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
          </div>

          <h2 className="font-forum text-3xl sm:text-4xl lg:text-5xl text-[#2A2C2E] tracking-tight mb-4">
            {t.feedbacks.title}
          </h2>

          <p className="text-base sm:text-lg text-[#5F6368] font-light leading-relaxed">
            {t.feedbacks.subtitle}
          </p>
        </div>

        {/* Desktop Grid 3x2 */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteData.feedbacks.map((item: FeedbackItem) => {
            const reviewText = item.text[currentLang];
            const serviceName = item.service[currentLang];

            return (
              <div
                key={item.id}
                className="mirror-border-wrap transition-transform duration-300 hover:-translate-y-1 hover:shadow-md flex"
              >
                <div className="mirror-border-wrap-inner p-6 sm:p-7 flex flex-col justify-between w-full h-full space-y-4">
                  
                  {/* Top Bar: 5 Luminous Golden Stars & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1" aria-label="Avaliação 5 estrelas">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37] drop-shadow-[0_1px_2px_rgba(212,175,55,0.35)]"
                        />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[#D4AF37]/50" />
                  </div>

                  {/* Review Quote */}
                  <p className="text-sm text-[#2A2C2E] font-light italic leading-relaxed flex-1">
                    "{reviewText}"
                  </p>

                  {/* Client Info */}
                  <div className="pt-3 border-t border-[#E6E8EA] flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E]">
                        {item.name}
                      </h4>
                      <span className="text-[11px] text-[#6A6E72] font-light block">
                        {serviceName}
                      </span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div className="mirror-border-wrap">
            <div className="mirror-border-wrap-inner p-6 flex flex-col justify-between min-h-[220px]">
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(siteData.feedbacks[mobileIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37] drop-shadow-[0_1px_2px_rgba(212,175,55,0.35)]" />
                  ))}
                </div>
                <span className="text-xs font-mono text-[#6A6E72]">
                  {mobileIndex + 1} / {siteData.feedbacks.length}
                </span>
              </div>

              <p className="text-sm text-[#2A2C2E] font-light italic leading-relaxed flex-1 my-3">
                "{siteData.feedbacks[mobileIndex].text[currentLang]}"
              </p>

              <div className="pt-3 border-t border-[#E6E8EA]">
                <h4 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E]">
                  {siteData.feedbacks[mobileIndex].name}
                </h4>
                <span className="text-[11px] text-[#6A6E72] font-light">
                  {siteData.feedbacks[mobileIndex].service[currentLang]}
                </span>
              </div>

            </div>
          </div>

          {/* Carousel Arrows on Mobile */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-[#B4B8BC] bg-white text-[#2A2C2E] hover:bg-[#F1F2F3] shadow-xs cursor-pointer"
              aria-label="Avaliação anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {siteData.feedbacks.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    mobileIndex === i ? 'w-5 bg-[#2A2C2E]' : 'bg-[#B4B8BC]'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-full border border-[#B4B8BC] bg-white text-[#2A2C2E] hover:bg-[#F1F2F3] shadow-xs cursor-pointer"
              aria-label="Próxima avaliação"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Section Primary CTA */}
        <div className="flex justify-center mt-14">
          <a
            href={buildWhatsAppLink(defaultMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#2A2C2E] bg-mirror shadow-sm hover:shadow-md hover:brightness-105 active:scale-98 transition-all shine-effect"
          >
            <MessageCircle className="w-4 h-4 text-[#2A2C2E]" />
            <span>{t.feedbacks.cta}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
