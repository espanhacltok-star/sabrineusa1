export interface ServiceItem {
  id: string;
  category: 'maos' | 'pes' | 'extras';
  image?: string;
  name: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  price?: string; // Optional field: hidden while empty
}

export interface GalleryItem {
  id: number;
  url: string;
  alt: {
    pt: string;
    en: string;
  };
  caption?: {
    pt: string;
    en: string;
  };
}

export interface FeedbackItem {
  id: number;
  name: string;
  service: {
    pt: string;
    en: string;
  };
  text: {
    pt: string;
    en: string;
  };
  rating: number;
}

export interface FaqItem {
  id: number;
  question: {
    pt: string;
    en: string;
  };
  answer: {
    pt: string;
    en: string;
  };
}

export interface GuidelineItem {
  id: string;
  icon: string;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
}

export interface StudioFeature {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
}

export const siteData = {
  professionalName: "Sabrine Machado",
  role: "Manicure & Nail Designer",
  location: "Philadelphia, PA 🇺🇸",
  whatsappPhone: "+1 (267) 776-1462",
  whatsappRaw: "12677761462",
  instagramUrl: "https://www.instagram.com/sabrinemachado_nails/",
  instagramHandle: "@sabrinemachado_nails",
  instagramPostUrl: "https://www.instagram.com/p/De2rUmsuPum/",
  instagramEmbedUrl: "https://www.instagram.com/p/De2rUmsuPum/embed",
  
  // Studio address: empty by default per PRD section 5.
  // When empty, the map shows Philadelphia, PA and the button becomes "Pedir o endereço no WhatsApp".
  studioAddress: "",
  businessHours: "", // optional
  parking: "", // optional
  license: "", // optional

  // Photos provided in the PRD
  heroPhoto: "https://i.ibb.co/hFZ8HTGZ/798688104-18102600995614995-7428056892688830150-n-convertido-de-jpg.webp",
  aboutPhotos: [
    "https://i.ibb.co/hFZ8HTGZ/798688104-18102600995614995-7428056892688830150-n-convertido-de-jpg.webp",
    "https://i.ibb.co/GvhW54Rz/Captura-de-tela-2026-10-27-154355-convertido-de-png.webp",
  ],
  studioLogo: "https://i.ibb.co/h1LN0MLr/Centering-logo-on-white-background-797ce1dc-2-K.webp",
  studioSpacePhoto: "https://i.ibb.co/W4q75PgD/Correcting-text-on-wall-660615a6-2-K-1.webp",

  // 8 Gallery Photos from PRD
  gallery: [
    {
      id: 1,
      url: "https://i.ibb.co/LzkV7RXD/Classic-French-Pedicure-Both-Feet-Warm-Pink-White-Tips-Fall-Pedicure-Ideas.webp",
      alt: {
        pt: "Pedicure clássica com francesa em ambos os pés em tons de rosa e pontas brancas",
        en: "Classic French pedicure on both feet with warm pink base and crisp white tips",
      },
      caption: {
        pt: "Pedicure Francesa Delicada",
        en: "Delicate French Pedicure",
      },
    },
    {
      id: 2,
      url: "https://i.ibb.co/Psb2LwYC/Save-Clip-App-864485121-18109325447614995-1720357407734140835-n.webp",
      alt: {
        pt: "Alongamento em gel elegante com acabamento natural e esmaltação perfeita",
        en: "Elegant gel extensions with natural finish and flawless polish",
      },
      caption: {
        pt: "Alongamento em Gel Natural",
        en: "Natural Gel Extensions",
      },
    },
    {
      id: 3,
      url: "https://i.ibb.co/pjN96Y5S/Save-Clip-App-452026765-18007319669614995-8691737152459971534-n.webp",
      alt: {
        pt: "Nail art sofisticada com detalhes minimalistas",
        en: "Sophisticated nail art with minimalist details",
      },
      caption: {
        pt: "Nail Art Sofisticada",
        en: "Sophisticated Nail Art",
      },
    },
    {
      id: 4,
      url: "https://i.ibb.co/jkDJHwTt/Save-Clip-App-517875902-18050046197614995-4890607003820364983-n.webp",
      alt: {
        pt: "Banho de gel com brilho espelhado de longa duração",
        en: "Long-lasting gel overlay with mirror shine",
      },
      caption: {
        pt: "Blindagem e Banho de Gel",
        en: "Gel Overlay & Fortification",
      },
    },
    {
      id: 5,
      url: "https://i.ibb.co/hRf1z0RF/Save-Clip-App-475531605-18031352789614995-796821655751378991-n.webp",
      alt: {
        pt: "Alongamento estruturado com formato amendoado refinado",
        en: "Structured extensions with refined almond shape",
      },
      caption: {
        pt: "Formato Amendoado Refinado",
        en: "Refined Almond Shape",
      },
    },
    {
      id: 6,
      url: "https://i.ibb.co/ZR8QBTqw/Save-Clip-App-722637691-18090043439614995-1762588882783968559-n.webp",
      alt: {
        pt: "Acabamento chrome metálico com reflexo espelhado prateado",
        en: "Metallic chrome finish with silver mirror sheen",
      },
      caption: {
        pt: "Chrome Efeito Espelhado",
        en: "Mirror Effect Chrome",
      },
    },
    {
      id: 7,
      url: "https://i.ibb.co/sGxW4S4/Save-Clip-App-851189195-18108722627614995-2704523098569633300-n.webp",
      alt: {
        pt: "Aplicação refinada de pedrarias e joias de unha",
        en: "Refined rhinestone and nail jewel application",
      },
      caption: {
        pt: "Joias e Cristais de Unha",
        en: "Nail Jewels & Crystals",
      },
    },
    {
      id: 8,
      url: "https://i.ibb.co/ZzxcQBSG/Save-Clip-App-833603391-18106180502614995-7858371417597450961-n.webp",
      alt: {
        pt: "Manutenção impecável mantendo formato e estrutura íntegros",
        en: "Flawless refill maintaining natural nail health and shape",
      },
      caption: {
        pt: "Manutenção Estrutural Perfeita",
        en: "Structural Refill",
      },
    },
  ],

  // Services: Feet use gallery 1 (pedicure), others rotate gallery 2-8 as instructed by PRD
  services: [
    // 💅 MÃOS
    {
      id: "alongamento-gel",
      category: "maos",
      image: "https://i.ibb.co/Psb2LwYC/Save-Clip-App-864485121-18109325447614995-1720357407734140835-n.webp",
      name: {
        pt: "Alongamento em Gel",
        en: "Gel extensions",
      },
      description: {
        pt: "Extensão de unhas em gel com estrutura personalizada, esculpida com precisão e curvatura impecável para qualquer comprimento, proporcionando elegância, resistência e acabamento natural.",
        en: "Custom sculpted gel nail extensions with refined apex architecture and curvature for any length, offering natural elegance and superior durability.",
      },
    },
    {
      id: "banho-de-gel",
      category: "maos",
      image: "https://i.ibb.co/pjN96Y5S/Save-Clip-App-452026765-18007319669614995-8691737152459971534-n.webp",
      name: {
        pt: "Banho de Gel (Blindagem)",
        en: "Gel overlay",
      },
      description: {
        pt: "Camada de gel sobre a unha natural para dar resistência, sem aumentar o tamanho.",
        en: "Protective gel layer sculpted over natural nails for strength, without adding extra length.",
      },
    },
    {
      id: "manutencao",
      category: "maos",
      image: "https://i.ibb.co/hRf1z0RF/Save-Clip-App-475531605-18031352789614995-796821655751378991-n.webp",
      name: {
        pt: "Manutenção",
        en: "Refill",
      },
      description: {
        pt: "Manutenção periódica para reestruturar o ápice, manter o formato e garantir a durabilidade e saúde das suas unhas.",
        en: "Periodic maintenance to rebalance the apex, maintain shape, and ensure the ongoing strength of your nails.",
      },
    },
    {
      id: "manutencao-outra",
      category: "maos",
      name: {
        pt: "Manutenção de outra profissional",
        en: "Refill from another artist",
      },
      description: {
        pt: "Para trabalhos feitos em outro espaço: retiramos o gel antigo e refazemos a estrutura. Cobrança diferenciada.",
        en: "For work done by another technician: we safely remove old gel and rebuild the structure. Special rate.",
      },
    },
    {
      id: "remocao-segura",
      category: "maos",
      name: {
        pt: "Remoção segura",
        en: "Safe removal",
      },
      description: {
        pt: "Retirada completa e saudável do alongamento ou do gel, respeitando a sua unha natural.",
        en: "Complete and healthy removal of extensions or gel, fully respecting your natural nails.",
      },
    },

    // 👣 PÉS (PEDICURE AVANÇADA)
    {
      id: "pedicure-gel",
      category: "pes",
      image: "https://i.ibb.co/LzkV7RXD/Classic-French-Pedicure-Both-Feet-Warm-Pink-White-Tips-Fall-Pedicure-Ideas.webp",
      name: {
        pt: "Pedicure com Banho de Gel",
        en: "Pedicure with gel overlay",
      },
      description: {
        pt: "Cutilagem combinada com gel nas unhas dos pés, para máxima durabilidade e acabamento perfeito.",
        en: "Advanced dry cuticle care combined with high-shine gel on toenails for maximum durability.",
      },
    },

    // ✨ DETALHES & EXTRAS (NAIL ART)
    {
      id: "chrome",
      category: "extras",
      image: "https://i.ibb.co/jkDJHwTt/Save-Clip-App-517875902-18050046197614995-4890607003820364983-n.webp",
      name: {
        pt: "Chrome (Nail Art & Efeitos)",
        en: "Chrome & Nail Art Effects",
      },
      description: {
        pt: "Técnicas exclusivas para personalizar suas unhas: acabamento Chrome metálico e espelhado, Francesinha clássica ou Babyboomer, Nail Art minimalista personalizada e aplicação de Pedrarias e Joias de unha.",
        en: "Exclusive customization techniques: high-gloss metallic Chrome mirror finish, classic French or Babyboomer gradients, minimalist nail art, and precision-set crystals and nail jewels.",
      },
    },
  ] as ServiceItem[],

  // 6 Testimonials from PRD
  feedbacks: [
    {
      id: 1,
      name: "Camila R.",
      service: {
        pt: "Alongamento em gel",
        en: "Gel extensions",
      },
      text: {
        pt: "Ficaram lindas, resistentes e com um acabamento perfeito. A Sabrine é muito cuidadosa!",
        en: "They turned out beautiful, strong, and with a perfect finish. Sabrine is extraordinarily gentle and meticulous!",
      },
      rating: 5,
    },
    {
      id: 2,
      name: "Sophie M.",
      service: {
        pt: "Banho de gel",
        en: "Gel overlay",
      },
      text: {
        pt: "Minhas unhas naturais estão muito fortes e com um brilho incrível. Amei!",
        en: "My natural nails feel so strong and look so polished. Love it!",
      },
      rating: 5,
    },
    {
      id: 3,
      name: "Fernanda L.",
      service: {
        pt: "Pedicure com cutilagem russa",
        en: "Pedicure with Russian cuticle care",
      },
      text: {
        pt: "Nunca tinha feito uma pedicure tão detalhada. Os pés ficaram impecáveis.",
        en: "I had never had such a detailed pedicure. My feet look and feel completely pristine.",
      },
      rating: 5,
    },
    {
      id: 4,
      name: "Juliana P.",
      service: {
        pt: "Manutenção",
        en: "Refill",
      },
      text: {
        pt: "Atendimento super pontual e carinhoso. A manutenção durou muito bem.",
        en: "Incredibly punctual and caring service. The refill lasted flawlessly between visits.",
      },
      rating: 5,
    },
    {
      id: 5,
      name: "Emma T.",
      service: {
        pt: "Chrome",
        en: "Chrome",
      },
      text: {
        pt: "O acabamento chrome é maravilhoso. Todo mundo pergunta onde fiz.",
        en: "The chrome finish is gorgeous. Everyone asks where I got them done.",
      },
      rating: 5,
    },
    {
      id: 6,
      name: "Mariana S.",
      service: {
        pt: "Nail art",
        en: "Nail art",
      },
      text: {
        pt: "Ela entendeu exatamente o que eu queria. Ambiente lindo e muito acolhedor.",
        en: "She understood exactly what I envisioned. The space is lovely and welcoming.",
      },
      rating: 5,
    },
  ] as FeedbackItem[],

  // Studio 6 Feature Cards
  studioFeatures: [
    {
      id: "seguranca",
      title: {
        pt: "Segurança",
        en: "Safety",
      },
      description: {
        pt: "Protocolos rigorosos em cada etapa do atendimento.",
        en: "Strict clinical protocols followed at every step.",
      },
    },
    {
      id: "higiene",
      title: {
        pt: "Higiene",
        en: "Hygiene",
      },
      description: {
        pt: "Materiais esterilizados e descartáveis de grau profissional.",
        en: "Autoclave sterilized tools and single-use disposable items.",
      },
    },
    {
      id: "conforto",
      title: {
        pt: "Conforto",
        en: "Comfort",
      },
      description: {
        pt: "Ambiente aconchegante, calmo e pensado para o seu bem-estar.",
        en: "A warm, tranquil environment tailored for your relaxation.",
      },
    },
    {
      id: "acesso",
      title: {
        pt: "Fácil acesso",
        en: "Easy Access",
      },
      description: {
        pt: "Localização estratégica em Philadelphia, PA com mobilidade conveniente.",
        en: "Convenient location in Philadelphia, PA with hassle-free transit.",
      },
    },
    {
      id: "privacidade",
      title: {
        pt: "Privacidade",
        en: "Privacy",
      },
      description: {
        pt: "Atendimento reservado, exclusivo e sem interrupções.",
        en: "Private, dedicated one-on-one appointments without distractions.",
      },
    },
    {
      id: "atencao",
      title: {
        pt: "Atenção exclusiva",
        en: "Exclusive Care",
      },
      description: {
        pt: "Tempo e calma dedicados a cada detalhe das suas unhas.",
        en: "Generous time and dedication spent perfecting every angle.",
      },
    },
  ] as StudioFeature[],

  // Educational booking guidelines
  guidelines: [
    {
      id: "atrasos",
      icon: "Clock",
      title: {
        pt: "Atrasos",
        en: "Punctuality",
      },
      description: {
        pt: "Chegue no horário. Atrasos acima de 10 minutos podem reduzir o atendimento ou exigir reagendamento, para respeitar as clientes seguintes.",
        en: "Please arrive on time. Arrivals over 10 minutes late may shorten the service or require rescheduling to respect subsequent appointments.",
      },
    },
    {
      id: "remarcacao",
      icon: "Calendar",
      title: {
        pt: "Remarcação e cancelamento",
        en: "Rescheduling & Cancellations",
      },
      description: {
        pt: "Avise com pelo menos 24 horas de antecedência.",
        en: "Kindly give at least 24 hours advance notice for any schedule adjustment.",
      },
    },
    {
      id: "manutencao",
      icon: "Repeat",
      title: {
        pt: "Manutenção",
        en: "Refills & Foreign Work",
      },
      description: {
        pt: "Faça no prazo combinado para manter o resultado. Trabalhos vindos de outra profissional têm cobrança diferenciada (retirada do gel antigo e nova estrutura).",
        en: "Follow recommended refill intervals. Work from another nail artist requires custom assessment (safe removal of old gel and fresh restructuring).",
      },
    },
    {
      id: "saude",
      icon: "Sparkles",
      title: {
        pt: "Saúde das unhas",
        en: "Nail Health & Safety",
      },
      description: {
        pt: "Informe se há machucados, infecções, fungos ou alergias antes do atendimento.",
        en: "Please inform us in advance of any cuts, sensitivities, infections, or known product allergies.",
      },
    },
    {
      id: "referencia",
      icon: "Camera",
      title: {
        pt: "Referência",
        en: "Inspiration Photos",
      },
      description: {
        pt: "Se tiver foto do modelo que deseja, envie na conversa do WhatsApp.",
        en: "If you have inspirational nail pictures or reference designs, feel free to send them in our chat.",
      },
    },
    {
      id: "reservado",
      icon: "Heart",
      title: {
        pt: "Atendimento reservado",
        en: "Private Session",
      },
      description: {
        pt: "Sempre que possível, venha sem acompanhantes para manter o ambiente tranquilo e exclusivo.",
        en: "Whenever possible, please attend your appointment solo to maintain a serene, private atmosphere.",
      },
    },
  ] as GuidelineItem[],

  // FAQ Items
  faq: [
    {
      id: 1,
      question: {
        pt: "Como faço para agendar?",
        en: "How do I book an appointment?",
      },
      answer: {
        pt: "Pelo WhatsApp. Preencha o mini formulário abaixo ou clique em qualquer botão de agendamento e envie a sua mensagem pré-formatada. A Sabrine responderá confirmando os dias e horários disponíveis.",
        en: "Through WhatsApp. Fill out the quick scheduling form below or click any booking button to send a pre-formatted message. Sabrine will reply to confirm available time slots.",
      },
    },
    {
      id: 2,
      question: {
        pt: "Qual a diferença entre alongamento e banho de gel?",
        en: "What is the difference between gel extensions and a gel overlay?",
      },
      answer: {
        pt: "O alongamento adiciona comprimento com extensão em gel. O banho de gel (blindagem) reforça a sua unha natural existente, conferindo resistência e durabilidade sem alterar o comprimento.",
        en: "Gel extensions add physical length to your nails using sculpted gel. A gel overlay reinforces and protects your natural nail plate, providing strength and gloss without adding length.",
      },
    },
    {
      id: 3,
      question: {
        pt: "Quais tamanhos de alongamento existem?",
        en: "What extension lengths are available?",
      },
      answer: {
        pt: "Trabalhamos com os tamanhos S/M (curto e médio, ideal para praticidade diária) e L (longo, com estrutura reforçada e marcante).",
        en: "We offer S/M (short and medium lengths, perfect for everyday natural style) and L (long length, with reinforced apex architecture).",
      },
    },
    {
      id: 4,
      question: {
        pt: "Quando devo fazer a manutenção?",
        en: "When should I get a refill?",
      },
      answer: {
        pt: "Periodicamente, em geral entre 3 e 4 semanas, conforme a velocidade de crescimento das suas unhas e as orientações passadas no atendimento.",
        en: "Periodically, typically every 3 to 4 weeks depending on your natural nail growth rate and aftercare instructions provided during your visit.",
      },
    },
    {
      id: 5,
      question: {
        pt: "Faz manutenção de trabalho de outra profissional?",
        en: "Do you refill work done by another technician?",
      },
      answer: {
        pt: "Sim, com cobrança diferenciada. É necessário realizar a remoção e avaliação do material antigo para reconstruir a estrutura com a nossa técnica e garantir a durabilidade e segurança.",
        en: "Yes, at a specialized foreign-work rate. We carefully inspect and remove the previous material to rebuild the nail with our refined technique, guaranteeing durability and safety.",
      },
    },
    {
      id: 6,
      question: {
        pt: "A remoção é segura para a unha natural?",
        en: "Is the removal process safe for natural nails?",
      },
      answer: {
        pt: "Sim. A remoção é completa, saudável e realizada com brocas e técnicas que preservam 100% da integridade da sua lâmina ungueal.",
        en: "Yes. The removal is gentle, thorough, and performed using controlled e-file techniques that preserve the full health and thickness of your natural nail plate.",
      },
    },
    {
      id: 7,
      question: {
        pt: "O que é a pedicure com cutilagem russa?",
        en: "What is a pedicure with Russian cuticle care?",
      },
      answer: {
        pt: "É uma técnica avançada de limpeza profunda a seco, realizada com micromotor e brocas diamantadas esterilizadas. Proporciona um contorno perfeito, sem alicates que machucam, e faz o esmalte durar muito mais tempo.",
        en: "It is an advanced dry hardware manicure/pedicure technique performed with sterilized diamond bits. It creates ultra-clean cuticle contours without clippers, allowing flawless polish application that lasts noticeably longer.",
      },
    },
    {
      id: 8,
      question: {
        pt: "O que é o acabamento Chrome?",
        en: "What is the Chrome finish?",
      },
      answer: {
        pt: "É uma técnica onde aplicamos um pigmento microfino sobre o gel para criar um efeito espelhado e metálico ultra sofisticado, com brilho reflexivo único.",
        en: "It is a luxurious technique where micro-fine metallic pigment powder is burnished over gel to create a smooth, futuristic mirror-like reflective finish.",
      },
    },
    {
      id: 9,
      question: {
        pt: "Quanto custam os serviços?",
        en: "How much do the services cost?",
      },
      answer: {
        pt: "Os valores personalizados são informados diretamente no WhatsApp, de acordo com o serviço desejado, comprimento e detalhes de nail art.",
        en: "Tailored pricing is provided directly via WhatsApp depending on the specific service, extension length, and desired nail art complexity.",
      },
    },
    {
      id: 10,
      question: {
        pt: "E se eu me atrasar para o atendimento?",
        en: "What happens if I run late?",
      },
      answer: {
        pt: "Pedimos que avise imediatamente pelo WhatsApp. Temos uma tolerância máxima de 10 minutos para garantir que o atendimento de cada cliente ocorra sem pressa.",
        en: "Please text us immediately on WhatsApp. We allow a maximum 10-minute grace period to ensure appointments remain punctual and unhurried for everyone.",
      },
    },
    {
      id: 11,
      question: {
        pt: "E se eu precisar remarcar ou cancelar?",
        en: "What if I need to cancel or reschedule?",
      },
      answer: {
        pt: "Basta avisar com pelo menos 24 horas de antecedência pelo WhatsApp para que possamos reorganizar a agenda e liberar a vaga para outra cliente.",
        en: "Kindly give at least 24 hours advance notice via WhatsApp so we can adjust our schedule and open the slot for waiting clients.",
      },
    },
    {
      id: 12,
      question: {
        pt: "Onde fica o studio da Sabrine?",
        en: "Where is Sabrine's studio located?",
      },
      answer: {
        pt: "O studio fica em Philadelphia, Pensilvânia. Para garantir a privacidade e segurança das clientes, o endereço exato e as orientações de chegada são enviados assim que o agendamento é confirmado.",
        en: "The studio is located in Philadelphia, PA. To maintain client privacy and security, the exact street address and arrival instructions are shared upon appointment confirmation.",
      },
    },
  ] as FaqItem[],
};

export const buildWhatsAppLink = (message: string) => {
  return `https://wa.me/${siteData.whatsappRaw}?text=${encodeURIComponent(message)}`;
};
