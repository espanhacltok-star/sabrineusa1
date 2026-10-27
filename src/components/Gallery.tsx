import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, MessageCircle, Maximize2 } from 'lucide-react';
import { siteData, GalleryItem, buildWhatsAppLink } from '../data/siteData';
import { translations, Language } from '../data/translations';

interface GalleryProps {
  currentLang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ currentLang }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const t = translations[currentLang];
  const touchStartX = useRef<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const defaultMsg = currentLang === 'pt'
    ? "Olá, Sabrine! 💛 Vi a galeria do seu site e quero unhas assim!"
    : "Hello, Sabrine! 💛 I saw your website gallery and I want nails like these!";

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return 0;
      return prev === 0 ? siteData.gallery.length - 1 : prev - 1;
    });
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return 0;
      return prev === siteData.gallery.length - 1 ? 0 : prev + 1;
    });
  }, []);

  // Keyboard navigation & Esc to close
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showNext();
      } else {
        showPrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="galeria" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#6A6E72]">
              {currentLang === 'pt' ? 'Portfólio Exclusivo' : 'Exclusive Portfolio'}
            </span>
            <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
          </div>

          <h2 className="font-forum text-3xl sm:text-4xl lg:text-5xl text-[#2A2C2E] tracking-tight mb-4">
            {t.gallery.title}
          </h2>

          <p className="text-base sm:text-lg text-[#5F6368] font-light leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* 8-Photo Grid (4x2 on desktop, 2 cols on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {siteData.gallery.map((photo: GalleryItem, index: number) => {
            const altText = photo.alt[currentLang];
            const captionText = photo.caption ? photo.caption[currentLang] : '';

            return (
              <div
                key={photo.id}
                className="group relative rounded-[6px] overflow-hidden p-[1.5px] bg-gradient-to-tr from-[#8E9296] via-[#FFFFFF] to-[#B4B8BC] shadow-xs cursor-pointer shine-effect transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                aria-label={`Ver imagem ampliada: ${captionText || altText}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-[5px] bg-[#F1F2F3]">
                  <img
                    src={photo.url}
                    alt={altText}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Dark hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                    <Maximize2 className="w-6 h-6 opacity-90" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <a
            href={buildWhatsAppLink(defaultMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#2A2C2E] bg-mirror shadow-sm hover:shadow-md hover:brightness-105 active:scale-98 transition-all shine-effect"
          >
            <MessageCircle className="w-4 h-4 text-[#2A2C2E]" />
            <span>{t.gallery.cta}</span>
          </a>
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label={siteData.gallery[lightboxIndex].alt[currentLang]}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
          onClick={closeLightbox}
        >
          {/* Top Bar with Counter & Close */}
          <div
            className="absolute top-4 left-0 right-0 px-6 flex items-center justify-between text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs sm:text-sm tracking-widest font-mono text-gray-300">
              {t.gallery.photoCounter(lightboxIndex + 1, siteData.gallery.length)}
            </span>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label={t.gallery.closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation: Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-10"
            aria-label={t.gallery.prevPhoto}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image Container without caption/title */}
          <div
            className="relative max-w-4xl max-h-[85vh] p-2 bg-gradient-to-tr from-[#8E9296] via-[#FFFFFF] to-[#B4B8BC] rounded-[8px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={siteData.gallery[lightboxIndex].url}
              alt={siteData.gallery[lightboxIndex].alt[currentLang]}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-[6px]"
            />
          </div>

          {/* Navigation: Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-10"
            aria-label={t.gallery.nextPhoto}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
