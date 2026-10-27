import React from 'react';
import { MessageCircle, Instagram, ExternalLink } from 'lucide-react';
import { siteData, buildWhatsAppLink } from '../data/siteData';
import { translations, Language } from '../data/translations';
import { MirrorDivider } from './MirrorDivider';

interface AboutProps {
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const defaultMsg = currentLang === 'pt'
    ? "Olá, Sabrine! 💛 Gostaria de agendar um horário com você."
    : "Hello, Sabrine! 💛 I would love to book an appointment with you.";

  return (
    <section id="sobre" className="py-24 bg-[#F1F2F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column About Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Single Photo in Mirror Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] rounded-[8px] p-[2.5px] bg-gradient-to-tr from-[#8E9296] via-[#FFFFFF] via-[#B4B8BC] to-[#6A6E72] shadow-xl overflow-hidden shine-effect">
              <div className="relative aspect-[3/4] w-full rounded-[6px] overflow-hidden bg-[#E6E8EA]">
                <img
                  src={siteData.aboutPhotos[0]}
                  alt={siteData.professionalName}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2C2E]/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Quote, Authority, and Badges */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#6A6E72]">
                {currentLang === 'pt' ? 'Trajetória & Filosofia' : 'Artistry & Care'}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="font-forum text-3xl sm:text-4xl lg:text-5xl text-[#2A2C2E] tracking-tight">
              {t.about.title}
            </h2>

            <p className="text-sm sm:text-lg text-[#5F6368] font-light leading-relaxed">
              {t.about.subtitle}
            </p>

            {/* Quote Block with Mirror Styling and Mrs Saint Delafield Signature */}
            <div className="mirror-border-wrap my-6">
              <div className="mirror-border-wrap-inner p-5 sm:p-6 bg-white/95 relative overflow-hidden">
                <span className="font-serif text-5xl text-[#B4B8BC]/40 absolute top-2 left-4 select-none pointer-events-none" aria-hidden="true">
                  “
                </span>
                <p className="font-forum italic text-base sm:text-xl text-[#2A2C2E] leading-relaxed relative z-10 pl-5 sm:pl-6">
                  {t.about.quote}
                </p>
                <div className="mt-3 text-right">
                  <span className="font-signature text-3xl sm:text-4xl text-mirror-bright block">
                    {t.about.author}
                  </span>
                </div>
              </div>
            </div>

            {/* Paragraph 1: Emotional */}
            <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed font-light">
              {t.about.p1}
            </p>

            {/* Paragraph 2: Authority & Experience */}
            <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed font-light">
              {t.about.p2}
            </p>

            {/* Animated / Pill-Free Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-3">
              {t.about.badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white/90 border border-[#B4B8BC]/60 rounded-[6px] shadow-2xs text-center transition-transform hover:-translate-y-0.5"
                >
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-[#2A2C2E] block">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Optional License line (only shows if filled in siteData) */}
            {siteData.license && (
              <p className="text-xs text-[#6A6E72] pt-1">
                Licenses: {siteData.license}
              </p>
            )}

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={buildWhatsAppLink(defaultMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#2A2C2E] bg-mirror shadow-sm hover:shadow-md hover:brightness-105 active:scale-98 transition-all shine-effect"
              >
                <MessageCircle className="w-4 h-4 text-[#2A2C2E]" />
                <span>{t.about.cta}</span>
              </a>
            </div>

          </div>

        </div>

        {/* Mirror Section Divider */}
        <MirrorDivider className="my-16 sm:my-20" />

        {/* Sub-Block: Instagram Integration */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#8E9296] via-[#FFFFFF] to-[#6A6E72] inline-flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#2A2C2E]">
                  <Instagram className="w-4 h-4 text-[#2A2C2E]" />
                </div>
              </div>
              <span className="font-forum text-xl sm:text-2xl text-[#2A2C2E]">
                {t.about.instagramTitle}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5F6368] font-light max-w-lg mx-auto">
              {t.about.instagramSubtitle}
            </p>

            <div className="flex items-center justify-center gap-2 mt-3">
              <a
                href={siteData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#2A2C2E] hover:text-[#6A6E72] transition-colors"
              >
                <span>{siteData.instagramHandle}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Official Embedded Instagram Post without custom cover (max ~400px centered) */}
          <div className="flex justify-center mb-8 px-2 sm:px-0">
            <div className="w-full max-w-[400px] p-[2px] rounded-[8px] bg-gradient-to-tr from-[#8E9296] via-[#FFFFFF] to-[#B4B8BC] shadow-lg">
              <div className="w-full bg-white rounded-[6px] overflow-hidden">
                <iframe
                  src={siteData.instagramEmbedUrl}
                  title={t.about.embedTitle}
                  className="w-full h-[540px] border-0"
                  scrolling="no"
                  allow="encrypted-media"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Instagram Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={siteData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-xs font-semibold tracking-widest uppercase text-[#2A2C2E] border border-[#B4B8BC] hover:border-[#6A6E72] hover:bg-white transition-all text-center"
            >
              <Instagram className="w-4 h-4" />
              <span>{t.about.followBtn}</span>
            </a>

            <a
              href={buildWhatsAppLink(defaultMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md text-xs font-semibold tracking-widest uppercase text-[#2A2C2E] bg-mirror shadow-sm hover:shadow-md hover:brightness-105 active:scale-98 transition-all shine-effect text-center"
            >
              <MessageCircle className="w-4 h-4 text-[#2A2C2E]" />
              <span>{t.nav.book} (WhatsApp)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
