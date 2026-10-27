import React from 'react';
import { MapPin, Sparkles, Footprints, MessageCircle, ArrowRight } from 'lucide-react';
import { translations, Language } from '../data/translations';
import { siteData, buildWhatsAppLink } from '../data/siteData';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const defaultMsg = currentLang === 'pt'
    ? "Olá, Sabrine! 💛 Vi o seu site e gostaria de agendar um horário."
    : "Hello, Sabrine! 💛 I saw your website and would love to schedule an appointment.";

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
      {/* Subtle background ambient mirror gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#F1F2F3] via-[#E6E8EA]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-[#F1F2F3] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Photo Column: Order 1 on mobile, Order 2 on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]">
              
              {/* Secondary offset chrome line */}
              <div className="almond-outer-line" aria-hidden="true" />

              {/* Almond Nail Moldura with Chrome Border */}
              <div className="relative almond-frame p-[2.5px] bg-gradient-to-b from-[#8E9296] via-[#F4F5F6] via-[#B4B8BC] to-[#6A6E72] shadow-xl overflow-hidden animate-sheen">
                <div className="relative w-full almond-frame overflow-hidden bg-[#F1F2F3] aspect-[3/4.2]">
                  <img
                    src={siteData.heroPhoto}
                    alt={t.hero.imageAlt}
                    width={800}
                    height={1120}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle luxury vignette gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2C2E]/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Small Floating Seal Badge */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md border border-[#B4B8BC] rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8E9296] animate-ping" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#2A2C2E]">
                  Sabrine Machado
                </span>
              </div>

            </div>
          </div>

          {/* Text Copy & Benefit Cards Column: Order 2 on mobile, Order 1 on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#6A6E72]">
                {t.hero.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-forum text-3xl sm:text-5xl lg:text-6xl text-[#2A2C2E] leading-[1.18] tracking-tight">
              {t.hero.titleStart}
              <span className="text-mirror-dark italic block sm:inline">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-[#5F6368] leading-relaxed max-w-2xl font-light">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href={buildWhatsAppLink(defaultMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#2A2C2E] bg-mirror shadow-sm hover:shadow-md hover:brightness-105 active:scale-98 transition-all shine-effect text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#2A2C2E]" />
                <span>{t.hero.bookCta}</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-xs sm:text-sm font-medium tracking-widest uppercase text-[#2A2C2E] border border-[#B4B8BC] hover:border-[#6A6E72] hover:bg-[#F1F2F3] transition-all text-center"
              >
                <span>{t.hero.servicesCta}</span>
                <ArrowRight className="w-4 h-4 text-[#5F6368]" />
              </a>
            </div>

            {/* 3 Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {/* Card 1: Location */}
              <div className="mirror-border-wrap">
                <div className="mirror-border-wrap-inner p-3.5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F1F2F3] flex items-center justify-center shrink-0 text-[#2A2C2E]">
                    <MapPin className="w-4 h-4 text-[#6A6E72]" />
                  </div>
                  <span className="text-xs font-semibold text-[#2A2C2E] leading-tight">
                    {t.hero.statLocation}
                  </span>
                </div>
              </div>

              {/* Card 2: Experience */}
              <div className="mirror-border-wrap">
                <div className="mirror-border-wrap-inner p-3.5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F1F2F3] flex items-center justify-center shrink-0 text-[#2A2C2E]">
                    <Sparkles className="w-4 h-4 text-[#6A6E72]" />
                  </div>
                  <span className="text-xs font-semibold text-[#2A2C2E] leading-tight">
                    {t.hero.statExp}
                  </span>
                </div>
              </div>

              {/* Card 3: Advanced Pedicure */}
              <div className="mirror-border-wrap">
                <div className="mirror-border-wrap-inner p-3.5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F1F2F3] flex items-center justify-center shrink-0 text-[#2A2C2E]">
                    <Footprints className="w-4 h-4 text-[#6A6E72]" />
                  </div>
                  <span className="text-xs font-semibold text-[#2A2C2E] leading-tight">
                    {t.hero.statPedicure}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
