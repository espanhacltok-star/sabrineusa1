import React, { useState, useEffect } from 'react';
import { Language } from './data/translations';
import { SeoHead } from './components/SeoHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Feedbacks } from './components/Feedbacks';
import { Studio } from './components/Studio';
import { Booking } from './components/Booking';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem('sm_nails_lang');
      if (stored === 'en' || stored === 'pt') return stored;
    } catch {
      // Ignore localStorage errors in private browsing/sandboxes
    }
    return 'pt';
  });

  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const toggleLanguage = () => {
    const nextLang: Language = lang === 'pt' ? 'en' : 'pt';
    setLang(nextLang);
    try {
      localStorage.setItem('sm_nails_lang', nextLang);
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#2A2C2E] flex flex-col font-sans selection:bg-[#E6E8EA] selection:text-[#2A2C2E]">
      {/* Dynamic SEO metadata and JSON-LD structured data */}
      <SeoHead currentLang={lang} />

      {/* Top Fixed Header with glass morph and language toggle */}
      <Navbar currentLang={lang} onToggleLang={toggleLanguage} />

      {/* Main Content Landmark with Sections in Exact Order */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Hero (White) */}
        <Hero currentLang={lang} />

        {/* Section 2: Serviços (Light Gray) */}
        <Services currentLang={lang} />

        {/* Section 3: Galeria (White) */}
        <Gallery currentLang={lang} />

        {/* Section 4: Sobre + Instagram (Light Gray) */}
        <About currentLang={lang} />

        {/* Section 5: Feedbacks (White) */}
        <Feedbacks currentLang={lang} />

        {/* Section 6: Studio + Localização (Light Gray) */}
        <Studio currentLang={lang} />

        {/* Section 7: Agendamento + Educação (White) */}
        <Booking currentLang={lang} />

        {/* Section 8: FAQ (Light Gray) */}
        <Faq currentLang={lang} />
      </main>

      {/* Section 9: Rodapé (White) */}
      <Footer
        onOpenPrivacy={() => setActiveModal('privacy')}
        onOpenTerms={() => setActiveModal('terms')}
      />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp currentLang={lang} />

      {/* Legal Dialog Modals (Privacy Policy / Terms of Service in English) */}
      <LegalModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
