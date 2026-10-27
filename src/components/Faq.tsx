import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { siteData, FaqItem, buildWhatsAppLink } from '../data/siteData';
import { translations, Language } from '../data/translations';

interface FaqProps {
  currentLang: Language;
}

export const Faq: React.FC<FaqProps> = ({ currentLang }) => {
  const [openItems, setOpenItems] = useState<number[]>([1]); // First item open by default
  const t = translations[currentLang];

  const defaultMsg = currentLang === 'pt'
    ? "Olá, Sabrine! 💛 Li o FAQ do site e gostaria de agendar um horário."
    : "Hello, Sabrine! 💛 I read the FAQ on your website and would love to book an appointment.";

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 bg-[#F1F2F3] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#6A6E72]">
              {currentLang === 'pt' ? 'Tire suas dúvidas' : 'Common Inquiries'}
            </span>
            <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
          </div>

          <h2 className="font-forum text-3xl sm:text-4xl lg:text-5xl text-[#2A2C2E] tracking-tight mb-4">
            {t.faq.title}
          </h2>

          <p className="text-base sm:text-lg text-[#5F6368] font-light leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* 12 Accordion Items */}
        <div className="space-y-3.5">
          {siteData.faq.map((item: FaqItem) => {
            const isOpen = openItems.includes(item.id);
            const question = item.question[currentLang];
            const answer = item.answer[currentLang];

            return (
              <div
                key={item.id}
                className="mirror-border-wrap transition-shadow duration-200"
              >
                <div className="mirror-border-wrap-inner bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="font-forum text-base sm:text-lg text-[#2A2C2E] group-hover:text-[#6A6E72] transition-colors">
                      {item.id}. {question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-[#F1F2F3] flex items-center justify-center shrink-0 text-[#2A2C2E] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#2A2C2E] text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5F6368] font-light leading-relaxed border-t border-[#E6E8EA]/60 animate-in fade-in duration-200"
                    >
                      {answer}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Primary CTA */}
        <div className="flex justify-center mt-16">
          <a
            href={buildWhatsAppLink(defaultMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#2A2C2E] bg-mirror shadow-sm hover:shadow-md hover:brightness-105 active:scale-98 transition-all shine-effect"
          >
            <MessageCircle className="w-4 h-4 text-[#2A2C2E]" />
            <span>{t.faq.cta}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
