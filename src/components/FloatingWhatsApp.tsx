import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { translations, Language } from '../data/translations';
import { buildWhatsAppLink } from '../data/siteData';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const [visible, setVisible] = useState(false);
  const t = translations[currentLang];

  const defaultMsg = currentLang === 'pt'
    ? "Olá, Sabrine! 💛 Vi o seu site e gostaria de agendar um horário."
    : "Hello, Sabrine! 💛 I saw your website and would love to schedule an appointment.";

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 350px
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <a
        href={buildWhatsAppLink(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floating.ariaLabel}
        className="flex items-center gap-2.5 px-4.5 py-3 rounded-full text-xs font-semibold tracking-widest uppercase text-[#2A2C2E] bg-mirror shadow-xl hover:shadow-2xl hover:brightness-105 active:scale-95 transition-all border border-white/60 shine-effect min-h-[44px] min-w-[44px]"
      >
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 shadow-2xs">
          <MessageCircle className="w-3.5 h-3.5 text-[#2A2C2E]" />
        </div>
        <span className="font-semibold text-xs tracking-wider">
          {t.floating.book}
        </span>
      </a>
    </div>
  );
};
