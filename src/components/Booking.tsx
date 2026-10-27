import React, { useState } from 'react';
import {
  Clock,
  Calendar,
  Repeat,
  Sparkles,
  Camera,
  Heart,
  Copy,
  Check,
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import { siteData, GuidelineItem, buildWhatsAppLink } from '../data/siteData';
import { translations, Language } from '../data/translations';

interface BookingProps {
  currentLang: Language;
}

export const Booking: React.FC<BookingProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  // Interactive Form State
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [size, setSize] = useState('S/M');
  const [type, setType] = useState('Primeira vez');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [refPhoto, setRefPhoto] = useState('Sim');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Icon selector for guidelines
  const getGuidelineIcon = (id: string) => {
    switch (id) {
      case 'atrasos': return <Clock className="w-5 h-5 text-[#6A6E72]" />;
      case 'remarcacao': return <Calendar className="w-5 h-5 text-[#6A6E72]" />;
      case 'manutencao': return <Repeat className="w-5 h-5 text-[#6A6E72]" />;
      case 'saude': return <Sparkles className="w-5 h-5 text-[#6A6E72]" />;
      case 'referencia': return <Camera className="w-5 h-5 text-[#6A6E72]" />;
      case 'reservado': return <Heart className="w-5 h-5 text-[#6A6E72]" />;
      default: return <Clock className="w-5 h-5 text-[#6A6E72]" />;
    }
  };

  // Build the live message preview
  const formattedMessage = currentLang === 'pt'
    ? `Olá, Sabrine! 💛 Gostaria de agendar um horário.
Nome: ${name.trim() || '[Seu Nome]'}
Serviço: ${service || 'A definir com a Sabrine'}
Tamanho: ${size}
Tipo: ${type}
Dia e horário preferido: ${date || '[Data]'} ${time ? `às ${time}` : ''}
Foto de referência: ${refPhoto === 'Sim' ? 'Sim, vou enviar aqui no chat' : 'Não tenho, vou escolher no dia'}
${notes.trim() ? `Observações: ${notes.trim()}` : ''}`.trim()
    : `Hello, Sabrine! 💛 I would love to book an appointment.
Name: ${name.trim() || '[Your Name]'}
Service: ${service || 'To be decided with Sabrine'}
Length: ${size}
Type: ${type}
Preferred date & time: ${date || '[Date]'} ${time ? `at ${time}` : ''}
Inspiration photo: ${refPhoto === 'Sim' || refPhoto === 'Yes' ? 'Yes, I will send it in this chat' : 'No, I will pick in person'}
${notes.trim() ? `Notes: ${notes.trim()}` : ''}`.trim();

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="agendamento" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#6A6E72]">
              {currentLang === 'pt' ? 'Atendimento Personalizado' : 'Personalized Scheduling'}
            </span>
            <span className="h-[1px] w-6 bg-[#8E9296]" aria-hidden="true" />
          </div>

          <h2 className="font-forum text-3xl sm:text-4xl lg:text-5xl text-[#2A2C2E] tracking-tight mb-4">
            {t.booking.title}
          </h2>

          <p className="text-base sm:text-lg text-[#5F6368] font-light leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        {/* 2-Column Booking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Educational Guidelines (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="mb-2">
              <h3 className="font-forum text-2xl text-[#2A2C2E]">
                {t.booking.guidelinesTitle}
              </h3>
              <p className="text-xs text-[#5F6368] mt-1 font-light">
                {currentLang === 'pt'
                  ? 'Recomendações importantes para uma experiência perfeita e tranquila:'
                  : 'Important guidelines to ensure an unhurried, flawless experience:'}
              </p>
            </div>

            <div className="space-y-3.5">
              {siteData.guidelines.map((guide: GuidelineItem) => {
                const title = guide.title[currentLang];
                const desc = guide.description[currentLang];

                return (
                  <div
                    key={guide.id}
                    className="p-4 rounded-[6px] border border-[#E6E8EA] bg-[#F1F2F3]/60 hover:bg-[#F1F2F3] transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#B4B8BC]/40 mt-0.5">
                        {getGuidelineIcon(guide.id)}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-semibold tracking-wider uppercase text-[#2A2C2E]">
                          {title}
                        </h4>
                        <p className="text-xs text-[#5F6368] font-light mt-1 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Mini Form + Live WhatsApp Preview (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="mirror-border-wrap shadow-lg">
              <div className="mirror-border-wrap-inner p-4 sm:p-8 bg-white">
                
                {/* Form Header */}
                <div className="mb-6 pb-4 border-b border-[#E6E8EA]">
                  <h3 className="font-forum text-2xl text-[#2A2C2E]">
                    {t.booking.formTitle}
                  </h3>
                  <p className="text-xs text-[#5F6368] mt-1 font-light">
                    {t.booking.formSubtitle}
                  </p>
                </div>

                {/* Form Fields without <form> */}
                <div className="space-y-4">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="client-name" className="block text-xs font-semibold tracking-wider uppercase text-[#2A2C2E] mb-1.5">
                      {t.booking.fields.nameLabel} <span className="text-[#8E9296]">*</span>
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.booking.fields.namePlaceholder}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-md border border-[#B4B8BC]/70 focus:border-[#2A2C2E] focus:ring-0 bg-[#F1F2F3]/40 transition-colors"
                    />
                  </div>

                  {/* Service selection */}
                  <div>
                    <label htmlFor="service-select" className="block text-xs font-semibold tracking-wider uppercase text-[#2A2C2E] mb-1.5">
                      {t.booking.fields.serviceLabel}
                    </label>
                    <select
                      id="service-select"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-md border border-[#B4B8BC]/70 focus:border-[#2A2C2E] focus:ring-0 bg-[#F1F2F3]/40 transition-colors"
                    >
                      <option value="">{t.booking.fields.servicePlaceholder}</option>
                      <option value={t.booking.fields.serviceNotSure}>
                        ✦ {t.booking.fields.serviceNotSure}
                      </option>
                      <optgroup label={currentLang === 'pt' ? 'Mãos' : 'Hands'}>
                        {siteData.services
                          .filter((s) => s.category === 'maos')
                          .map((s) => (
                            <option key={s.id} value={s.name[currentLang]}>
                              {s.name[currentLang]}
                            </option>
                          ))}
                      </optgroup>
                      <optgroup label={currentLang === 'pt' ? 'Pés' : 'Feet'}>
                        {siteData.services
                          .filter((s) => s.category === 'pes')
                          .map((s) => (
                            <option key={s.id} value={s.name[currentLang]}>
                              {s.name[currentLang]}
                            </option>
                          ))}
                      </optgroup>
                      <optgroup label={currentLang === 'pt' ? 'Detalhes & Extras' : 'Details & Extras'}>
                        {siteData.services
                          .filter((s) => s.category === 'extras')
                          .map((s) => (
                            <option key={s.id} value={s.name[currentLang]}>
                              {s.name[currentLang]}
                            </option>
                          ))}
                      </optgroup>
                    </select>
                  </div>

                  {/* Size & Type row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Size */}
                    <div>
                      <label htmlFor="nail-size" className="block text-xs font-semibold tracking-wider uppercase text-[#2A2C2E] mb-1.5">
                        {t.booking.fields.sizeLabel}
                      </label>
                      <select
                        id="nail-size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-md border border-[#B4B8BC]/70 focus:border-[#2A2C2E] focus:ring-0 bg-[#F1F2F3]/40 transition-colors"
                      >
                        {t.booking.fields.sizes.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Type */}
                    <div>
                      <label htmlFor="service-type" className="block text-xs font-semibold tracking-wider uppercase text-[#2A2C2E] mb-1.5">
                        {t.booking.fields.typeLabel}
                      </label>
                      <select
                        id="service-type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-md border border-[#B4B8BC]/70 focus:border-[#2A2C2E] focus:ring-0 bg-[#F1F2F3]/40 transition-colors"
                      >
                        {t.booking.fields.types.map((tp) => (
                          <option key={tp.value} value={tp.value}>{tp.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date & Time row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-date" className="block text-xs font-semibold tracking-wider uppercase text-[#2A2C2E] mb-1.5">
                        {t.booking.fields.dateLabel}
                      </label>
                      <input
                        id="booking-date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-md border border-[#B4B8BC]/70 focus:border-[#2A2C2E] focus:ring-0 bg-[#F1F2F3]/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-time" className="block text-xs font-semibold tracking-wider uppercase text-[#2A2C2E] mb-1.5">
                        {t.booking.fields.timeLabel}
                      </label>
                      <input
                        id="booking-time"
                        type="text"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        placeholder={t.booking.fields.timePlaceholder}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-md border border-[#B4B8BC]/70 focus:border-[#2A2C2E] focus:ring-0 bg-[#F1F2F3]/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Reference Photo */}
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-[#2A2C2E] mb-1.5">
                      {t.booking.fields.refPhotoLabel}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {t.booking.fields.refOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setRefPhoto(opt.value)}
                          className={`px-3 py-2 text-xs font-medium rounded-md border text-left transition-all cursor-pointer ${
                            refPhoto === opt.value
                              ? 'border-[#2A2C2E] bg-[#F1F2F3] font-semibold text-[#2A2C2E]'
                              : 'border-[#E6E8EA] text-[#5F6368] hover:border-[#B4B8BC]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Optional Notes */}
                  <div>
                    <label htmlFor="booking-notes" className="block text-xs font-semibold tracking-wider uppercase text-[#2A2C2E] mb-1.5">
                      {t.booking.fields.notesLabel}
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={t.booking.fields.notesPlaceholder}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-md border border-[#B4B8BC]/70 focus:border-[#2A2C2E] focus:ring-0 bg-[#F1F2F3]/40 transition-colors resize-none"
                    />
                  </div>

                </div>

                {/* Live Message Preview Box */}
                <div className="mt-8 pt-6 border-t border-[#E6E8EA]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-[#6A6E72]">
                      {t.booking.previewTitle}
                    </span>
                    <span className="text-[11px] text-[#8E9296]">WhatsApp Ready</span>
                  </div>

                  {/* Formatted Message Code Card */}
                  <div className="p-4 rounded-md bg-[#F1F2F3] border border-[#B4B8BC]/50 font-sans text-xs text-[#2A2C2E] whitespace-pre-line leading-relaxed shadow-inner">
                    {formattedMessage}
                  </div>

                  <p className="text-[11px] text-[#6A6E72] mt-2 flex items-center gap-1.5 font-light">
                    <AlertCircle className="w-3.5 h-3.5 text-[#8E9296]" />
                    <span>{t.booking.previewHelper}</span>
                  </p>

                  {/* Action Buttons: Copy Message & Send via WhatsApp */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-5">
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-5 py-3 rounded-md text-xs font-semibold tracking-widest uppercase text-[#2A2C2E] border border-[#B4B8BC] hover:bg-[#F1F2F3] transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-700">{t.booking.copiedBtn}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#6A6E72]" />
                          <span>{t.booking.copyBtn}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={buildWhatsAppLink(formattedMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-6 py-3 rounded-md text-xs font-semibold tracking-widest uppercase text-[#2A2C2E] bg-mirror shadow-sm hover:shadow-md hover:brightness-105 active:scale-98 transition-all shine-effect text-center"
                    >
                      <MessageCircle className="w-4 h-4 text-[#2A2C2E]" />
                      <span>{t.booking.sendWhatsAppBtn}</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
