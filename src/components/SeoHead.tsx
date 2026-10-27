import React, { useEffect } from 'react';
import { Language } from '../data/translations';
import { siteData } from '../data/siteData';

interface SeoHeadProps {
  currentLang: Language;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ currentLang }) => {
  useEffect(() => {
    // 1. Dynamic Document Title
    const titlePT = "Sabrine Machado | Alongamento em Gel e Nail Designer em Philadelphia, PA";
    const titleEN = "Sabrine Machado | Gel Nail Extensions & Nail Art in Philadelphia, PA";
    document.title = currentLang === 'pt' ? titlePT : titleEN;

    // 2. Dynamic html lang attribute
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en-US';

    // 3. Dynamic Meta Description
    const descPT = "Alongamento e banho de gel, pedicure avançada, nail art e chrome em Philadelphia, PA, com a nail designer Sabrine Machado. Agende o seu horário.";
    const descEN = "Gel nail extensions, gel overlay, Russian cuticle pedicure, and luxury chrome nail art in Philadelphia, PA with nail artist Sabrine Machado. Book your appointment.";
    const activeDesc = currentLang === 'pt' ? descPT : descEN;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', activeDesc);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', activeDesc);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentLang === 'pt' ? titlePT : titleEN);
    }

    // 4. Inject Schema.org JSON-LD
    const salonSchema = {
      "@context": "https://schema.org",
      "@type": "NailSalon",
      "name": "Sabrine Machado Nails",
      "image": siteData.heroPhoto,
      "telephone": siteData.whatsappPhone,
      "url": window.location.origin,
      "areaServed": {
        "@type": "City",
        "name": "Philadelphia",
        "sameAs": "https://en.wikipedia.org/wiki/Philadelphia"
      },
      "sameAs": [
        siteData.instagramUrl
      ],
      "founder": {
        "@type": "Person",
        "name": "Sabrine Machado",
        "jobTitle": "Manicure & Nail Designer",
        "knowsAbout": [
          "Gel Nail Extensions",
          "Gel Overlay",
          "Russian Cuticle Care",
          "Nail Art",
          "Chrome Nails"
        ]
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Nail Services",
        "itemListElement": siteData.services.map((s) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": s.name[currentLang],
            "description": s.description[currentLang]
          }
        }))
      }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": siteData.faq.map((item) => ({
        "@type": "Question",
        "name": item.question[currentLang],
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer[currentLang]
        }
      }))
    };

    let scriptSalon = document.getElementById('jsonld-salon') as HTMLScriptElement | null;
    if (!scriptSalon) {
      scriptSalon = document.createElement('script');
      scriptSalon.id = 'jsonld-salon';
      scriptSalon.type = 'application/ld+json';
      document.head.appendChild(scriptSalon);
    }
    scriptSalon.textContent = JSON.stringify(salonSchema);

    let scriptFaq = document.getElementById('jsonld-faq') as HTMLScriptElement | null;
    if (!scriptFaq) {
      scriptFaq = document.createElement('script');
      scriptFaq.id = 'jsonld-faq';
      scriptFaq.type = 'application/ld+json';
      document.head.appendChild(scriptFaq);
    }
    scriptFaq.textContent = JSON.stringify(faqSchema);
  }, [currentLang]);

  return null;
};
