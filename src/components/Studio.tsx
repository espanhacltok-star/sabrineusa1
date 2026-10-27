import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles, Heart, Compass, Lock, UserCheck, MessageCircle, MapPin, Navigation, Maximize2, X } from 'lucide-react';
import { siteData, buildWhatsAppLink, StudioFeature } from '../data/siteData';
import { translations, Language } from '../data/translations';

interface StudioProps {
  currentLang: Language;
}

export const Studio: React.FC<StudioProps> = ({ currentLang }) => {
  const [isSpacePhotoOpen, setIsSpacePhotoOpen] = useState(false);
  const t = translations[currentLang];

  const hasSpecificAddress = Boolean(siteData.studioAddress && siteData.studioAddress.trim().length > 0);
  const mapQuery = hasSpecificAddress ? encodeURIComponent(siteData.studioAddress) : 'Philadelphia,+PA';
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  const defaultMsg = currentLang === 'pt'
    ? "Olá, Sabrine! 💛 Gostaria de agendar uma visita ao seu studio em Philadelphia."
    : "Hello, Sabrine! 💛 I would love to schedule a visit to your studio in Philadelphia.";

  useEffect(() => {
    if (!isSpacePhotoOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSpacePhotoOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isSpacePhotoOpen]);

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'seguranca': return <ShieldCheck className="w-5 h-5 text-[#6A6E72]" />;
      case 'higiene': return <Sparkles className="w-5 h-5 text-[#6A6E72]" />;
      case 'conforto': return <Heart className="w-5 h-5 text-[#6A6E72]" />;
      case 'acesso': return <Compass className="w-5 h-5 text-[#6A6E72]" />;
      case 'privacidade': return <Lock className="w-5 h-5 text-[#6A6E72]" />;
      case 'atencao': return <UserCheck className="w-5 h-5 text-[#6A6E72]" />;
      default: return <Sparkles className="w-5 h-5 text-[#6A6E72]" />;
    }
  };

  return (
    <section id="studio" className="py-24 bg-[#F1F2F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Circular Logo in Mirror Ring without white borders */}
        <div className="flex justify-center mb-8">
          <div className="relative p-[2.5px] rounded-full bg-gradient-to-tr from-[#8E9296] via-[#FFFFFF] via-[#B4B8BC] to-[#6A6E72] shadow-xl shine-effect">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden flex items-center justify-center bg-transparent">
              <img
                src={siteData.studioLogo}
                alt="Sabrine Machado Studio Logo"
                width={140}
                height={140}
                className="w-full h-full object-cover scale-102"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#6A6E72]">
              {currentLang === 'pt' ? 'Espaço & Biossegurança' : 'Sanctuary & Safety'}
            </span>
            <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
          </div>

          <h2 className="font-forum text-3xl sm:text-4xl lg:text-5xl text-[#2A2C2E] tracking-tight mb-4">
            {t.studio.title}
          </h2>

          <p className="text-sm sm:text-lg text-[#5F6368] font-light leading-relaxed">
            {t.studio.subtitle}
          </p>
        </div>

        {/* Large Studio Space Photo with Click to Expand */}
        <div className="mb-16">
          <div
            onClick={() => setIsSpacePhotoOpen(true)}
            role="button"
            tabIndex={0}
            aria-label={currentLang === 'pt' ? 'Clique para expandir a foto do studio' : 'Click to expand studio photo'}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsSpacePhotoOpen(true);
              }
            }}
            className="group mirror-border-wrap max-w-5xl mx-auto overflow-hidden shadow-lg shine-effect cursor-pointer transition-transform duration-300 hover:shadow-2xl hover:-translate-y-0.5"
          >
            <div className="mirror-border-wrap-inner p-2 sm:p-3 bg-white">
              <div className="relative aspect-[16/9] w-full rounded-[4px] overflow-hidden bg-[#E6E8EA]">
                <img
                  src={siteData.studioSpacePhoto}
                  alt={t.studio.photoAlt}
                  width={1400}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                  loading="lazy"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Badges / Click to Expand Overlay */}
                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 text-white flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-sm">
                    Philadelphia, PA Studio
                  </span>
                </div>

                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-black/60 backdrop-blur-xs text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase opacity-90 group-hover:opacity-100 group-hover:bg-[#2A2C2E] transition-all">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">
                    {currentLang === 'pt' ? 'Clique para ampliar' : 'Click to expand'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Feature Cards (Grid 3x2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto mb-16">
          {siteData.studioFeatures.map((feat: StudioFeature) => {
            const title = feat.title[currentLang];
            const desc = feat.description[currentLang];

            return (
              <div
                key={feat.id}
                className="mirror-border-wrap transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mirror-border-wrap-inner p-5 sm:p-6 flex flex-col justify-start h-full space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#F1F2F3] flex items-center justify-center shrink-0 border border-[#B4B8BC]/40">
                    {getFeatureIcon(feat.id)}
                  </div>
                  <h3 className="font-forum text-lg sm:text-xl text-[#2A2C2E] font-medium">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F6368] font-light leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Location & Map Module */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="mirror-border-wrap shadow-md">
            <div className="mirror-border-wrap-inner p-5 sm:p-8 bg-white">
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-5 h-5 text-[#6A6E72]" />
                    <h3 className="font-forum text-xl sm:text-2xl text-[#2A2C2E]">
                      {t.studio.addressLabel}: Philadelphia, PA
                    </h3>
                  </div>

                  {hasSpecificAddress ? (
                    <p className="text-xs sm:text-sm text-[#5F6368] font-light mt-1">
                      {siteData.studioAddress}
                    </p>
                  ) : (
                    <p className="text-xs sm:text-sm text-[#6A6E72] italic mt-1">
                      {t.studio.addressNotice}
                    </p>
                  )}

                  {/* Optional business hours & parking if filled */}
                  {siteData.businessHours && (
                    <p className="text-xs text-[#5F6368] mt-2">
                      Horário: {siteData.businessHours}
                    </p>
                  )}
                  {siteData.parking && (
                    <p className="text-xs text-[#5F6368] mt-1">
                      Estacionamento: {siteData.parking}
                    </p>
                  )}
                </div>

                <div className="w-full sm:w-auto">
                  {hasSpecificAddress ? (
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-xs font-semibold tracking-widest uppercase text-[#2A2C2E] border border-[#B4B8BC] hover:border-[#6A6E72] hover:bg-[#F1F2F3] transition-all whitespace-nowrap text-center"
                    >
                      <Navigation className="w-4 h-4 text-[#2A2C2E]" />
                      <span>{t.studio.howToGetThere}</span>
                    </a>
                  ) : (
                    <a
                      href={buildWhatsAppLink(t.studio.askAddressMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-xs font-semibold tracking-widest uppercase text-[#2A2C2E] bg-mirror shadow-sm hover:shadow-md hover:brightness-105 transition-all whitespace-nowrap shine-effect text-center"
                    >
                      <MessageCircle className="w-4 h-4 text-[#2A2C2E]" />
                      <span>{t.studio.askAddressWhatsApp}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Google Maps iFrame */}
              <div className="w-full h-[320px] sm:h-[420px] rounded-[6px] overflow-hidden border border-[#E6E8EA] shadow-inner bg-[#F1F2F3]">
                <iframe
                  src={mapEmbedUrl}
                  title={t.studio.mapTitle}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

            </div>
          </div>
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
            <span>{t.studio.cta}</span>
          </a>
        </div>

      </div>

      {/* Expanded Studio Photo Lightbox Modal */}
      {isSpacePhotoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.studio.photoAlt}
          className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsSpacePhotoOpen(false)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsSpacePhotoOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label="Fechar visualização ampliada (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Expanded Image Box */}
          <div
            className="relative max-w-5xl max-h-[85vh] p-2 bg-gradient-to-tr from-[#8E9296] via-[#FFFFFF] to-[#B4B8BC] rounded-[8px] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={siteData.studioSpacePhoto}
              alt={t.studio.photoAlt}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-[6px]"
            />
          </div>
        </div>
      )}
    </section>
  );
};
