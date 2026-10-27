import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { translations, Language } from '../data/translations';
import { siteData, buildWhatsAppLink } from '../data/siteData';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicos', label: t.nav.services },
    { href: '#galeria', label: t.nav.gallery },
    { href: '#sobre', label: t.nav.about },
    { href: '#avaliacoes', label: t.nav.reviews },
    { href: '#studio', label: t.nav.studio },
    { href: '#faq', label: t.nav.faq },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const defaultMsg = currentLang === 'pt'
    ? "Olá, Sabrine! 💛 Vi o seu site e gostaria de agendar um horário."
    : "Hello, Sabrine! 💛 I saw your website and would love to schedule an appointment.";

  return (
    <>
      {/* Skip to Content for ADA compliance */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-[#2A2C2E] text-white text-xs uppercase tracking-wider rounded-md shadow-lg"
      >
        {t.nav.skipToContent}
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E6E8EA]'
            : 'bg-white/80 backdrop-blur-xs md:bg-transparent'
        }`}
      >
        {/* Subtle top mirror hairline accent */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#8E9296] via-[#FFFFFF] via-[#B4B8BC] to-[#6A6E72]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
            
            {/* Brand Title (Wordmark) */}
            <a
              href="#"
              className="flex flex-col group whitespace-nowrap shrink-0 focus:outline-none"
              aria-label="Sabrine Machado Nail Designer - Início"
            >
              <span className="font-forum text-lg sm:text-2xl tracking-[0.12em] sm:tracking-[0.18em] text-[#2A2C2E] group-hover:text-[#6A6E72] transition-colors">
                SABRINE MACHADO
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5">
                <span className="h-[1px] w-3 sm:w-4 bg-[#B4B8BC]" />
                <span className="text-[9px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-[#5F6368] uppercase font-medium">
                  Nail Designer
                </span>
                <span className="h-[1px] w-3 sm:w-4 bg-[#B4B8BC]" />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wider uppercase text-[#5F6368]" aria-label="Navegação Principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#2A2C2E] transition-colors py-1 relative group whitespace-nowrap shrink-0"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#2A2C2E] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Header Right Actions: Language Selector & WhatsApp CTA */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Language Switcher Pill - Always visible on both mobile and desktop */}
              <button
                type="button"
                onClick={onToggleLang}
                className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase border border-[#B4B8BC] bg-white/90 hover:bg-[#F1F2F3] text-[#2A2C2E] shadow-2xs transition-all cursor-pointer"
                aria-label={`Trocar idioma para ${currentLang === 'pt' ? 'English' : 'Português'}`}
                title={t.nav.langSwitchLabel}
              >
                <span className={currentLang === 'pt' ? 'font-bold text-[#2A2C2E]' : 'text-[#8E9296]'}>
                  PT
                </span>
                <span className="text-[#B4B8BC]" aria-hidden="true">|</span>
                <span className={currentLang === 'en' ? 'font-bold text-[#2A2C2E]' : 'text-[#8E9296]'}>
                  EN
                </span>
              </button>

              {/* Primary CTA (Desktop) */}
              <a
                href={buildWhatsAppLink(defaultMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold tracking-widest uppercase text-[#2A2C2E] bg-mirror shadow-sm hover:shadow-md hover:brightness-105 active:scale-98 transition-all shine-effect whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#2A2C2E]" />
                <span>{t.nav.book}</span>
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-[#2A2C2E] hover:bg-[#F1F2F3] transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E6E8EA] shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col py-4 px-6 space-y-3" aria-label="Menu móvel">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-2.5 text-sm font-medium tracking-wider uppercase text-[#2A2C2E] hover:text-[#6A6E72] border-b border-gray-100 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-gray-300 text-xs">→</span>
                </a>
              ))}

              <div className="pt-2 pb-1">
                <a
                  href={buildWhatsAppLink(defaultMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md text-xs font-semibold tracking-widest uppercase text-[#2A2C2E] bg-mirror shadow-sm shine-effect text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#2A2C2E]" />
                  <span>{t.nav.book} (WhatsApp)</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
