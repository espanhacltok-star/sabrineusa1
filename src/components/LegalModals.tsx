import React, { useEffect, useRef } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { siteData } from '../data/siteData';

interface LegalModalsProps {
  activeModal: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-[110] bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-[8px] shadow-2xl p-[2px] bg-gradient-to-tr from-[#8E9296] via-[#FFFFFF] to-[#B4B8BC] overflow-hidden"
      >
        <div className="bg-white rounded-[6px] max-h-[84vh] flex flex-col">
          
          {/* Modal Header */}
          <div className="px-6 py-5 border-b border-[#E6E8EA] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {activeModal === 'privacy' ? (
                <Shield className="w-5 h-5 text-[#6A6E72]" />
              ) : (
                <FileText className="w-5 h-5 text-[#6A6E72]" />
              )}
              <h2 id="legal-modal-title" className="font-forum text-xl sm:text-2xl text-[#2A2C2E]">
                {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#F1F2F3] text-[#5F6368] hover:text-[#2A2C2E] transition-colors cursor-pointer"
              aria-label="Close dialog (Escape)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#5F6368] leading-relaxed font-light">
            {activeModal === 'privacy' ? (
              <>
                <p className="text-[11px] text-[#6A6E72] font-mono">
                  Effective Date: October 2026 · Last Updated: 2026
                </p>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  1. Who We Are
                </h3>
                <p>
                  This website is operated by <strong>Sabrine Machado</strong>, independent manicure and nail designer located in Philadelphia, Pennsylvania. We respect your privacy and are committed to safeguarding personal information collected through our scheduling channels.
                </p>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  2. Information We Collect
                </h3>
                <p>
                  We only collect information voluntarily provided by you to schedule and customize your nail services:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Contact Details:</strong> Your name, phone number, and communication preferences provided through our scheduling assistant and direct WhatsApp messaging.</li>
                  <li><strong>Service Specifications:</strong> Desired nail service (extensions, refills, overlays, pedicures, chrome), nail length, preferred appointment dates, and reference photos you choose to provide.</li>
                  <li><strong>Health & Allergy Disclosures:</strong> Information regarding sensitivities, allergies, or prior nail damage you choose to share so we can ensure product safety.</li>
                  <li><strong>Photographs:</strong> Client nail photos are captured and shared on social media solely with your explicit verbal or written consent.</li>
                </ul>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  3. How Information Is Used
                </h3>
                <p>
                  Your information is utilized strictly to communicate appointment confirmations, fulfill requested nail design treatments, and maintain service history. We never sell, rent, or monetize personal client data.
                </p>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  4. Third-Party Integrations
                </h3>
                <p>
                  Our website interfaces with external platforms for client convenience:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>WhatsApp (Meta Platforms):</strong> Messaging and appointment confirmations occur through WhatsApp’s end-to-end encrypted infrastructure.</li>
                  <li><strong>Instagram (Meta Platforms):</strong> Embedded media displays public design work from @sabrinemachado_nails.</li>
                  <li><strong>Google Maps (Google LLC):</strong> Embedded location mapping for directional guidance in Philadelphia, PA.</li>
                </ul>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  5. Data Retention & Security
                </h3>
                <p>
                  We employ reasonable security safeguards to protect customer records. Communications are retained only as long as necessary to manage ongoing client relationships.
                </p>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  6. Your Rights
                </h3>
                <p>
                  You may request review, modification, or deletion of your client records at any time by contacting us directly via WhatsApp.
                </p>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  7. Children's Privacy
                </h3>
                <p>
                  Our services and website are not directed to children under 13 years of age.
                </p>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  8. Contact Information
                </h3>
                <p>
                  For privacy inquiries, please reach out via WhatsApp at +1 (267) 776-1462 or Instagram direct message @sabrinemachado_nails.
                </p>
              </>
            ) : (
              <>
                <p className="text-[11px] text-[#6A6E72] font-mono">
                  Effective Date: October 2026 · Commonwealth of Pennsylvania
                </p>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  1. General Information & Scope
                </h3>
                <p>
                  The content provided on this website is for informational and scheduling purposes. All bookings are subject to schedule availability, individual nail health assessment, and mutual confirmation.
                </p>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  2. Health Disclosures & Safety
                </h3>
                <p>
                  Clients are required to disclose any known allergies, open abrasions, fungal conditions, or medical skin issues prior to service. We adhere to medical-grade hygiene and sterilized implements, reserving the right to decline or modify services if contraindications exist.
                </p>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  3. Punctuality, Cancellations & Rescheduling
                </h3>
                <p>
                  We dedicate exclusive time to each client:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Grace Period:</strong> Arrivals exceeding 10 minutes past scheduled time may result in shortened service scope or rescheduling to protect next clients.</li>
                  <li><strong>Notice:</strong> Please provide at least 24 hours advance notice for cancellations or date changes.</li>
                </ul>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  4. Refills & Foreign Work Policy
                </h3>
                <p>
                  Periodic refills are recommended every 3 to 4 weeks. Enhancements performed by other technicians require a differentiated foreign-work evaluation, involving safe product removal and complete restructuring to guarantee lasting results.
                </p>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  5. Longevity & Results
                </h3>
                <p>
                  Nail extension wear and durability depend on individual lifestyle, nail bed anatomy, and daily care. No unconditional durability guarantees are implied.
                </p>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  6. Limitation of Liability
                </h3>
                <p>
                  To the fullest extent permitted under Pennsylvania law, Sabrine Machado shall not be liable for incidental damages arising from undisclosed client allergies or failure to adhere to recommended nail aftercare.
                </p>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  7. Governing Law
                </h3>
                <p>
                  These terms are governed by the laws of the Commonwealth of Pennsylvania, United States.
                </p>

                <h3 className="font-semibold text-xs tracking-wider uppercase text-[#2A2C2E] pt-2">
                  8. Accessibility Statement (WCAG 2.1 AA)
                </h3>
                <p>
                  We are committed to digital accessibility complying with ADA standards and WCAG 2.1 AA guidelines. If you encounter any accessibility barriers on our site, please contact us for immediate accommodation.
                </p>
              </>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-[#E6E8EA] bg-[#F1F2F3]/40 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-md text-xs font-semibold tracking-wider uppercase text-[#2A2C2E] bg-white border border-[#B4B8BC] hover:bg-[#F1F2F3] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
