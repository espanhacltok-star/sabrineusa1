import React from 'react';
import { siteData } from '../data/siteData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-white relative border-t border-[#E6E8EA]">
      {/* Top Mirror Hairline */}
      <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#B4B8BC] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center space-y-3.5">
        
        {/* Brand Lockup */}
        <div className="flex flex-col items-center justify-center">
          <span className="font-forum text-lg tracking-[0.2em] text-[#2A2C2E]">
            SABRINE MACHADO
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#6A6E72] uppercase font-medium mt-0.5">
            Nail Designer • Philadelphia, PA
          </span>
        </div>

        {/* Line 1: Copyright */}
        <p className="text-xs text-[#5F6368]">
          © {new Date().getFullYear()} Sabrine Machado. All rights reserved.
        </p>

        {/* Line 2: Legal Links (Accessible) */}
        <div className="flex items-center justify-center gap-3 text-xs text-[#5F6368]">
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="hover:text-[#2A2C2E] hover:underline focus:underline focus:outline-none transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <span className="text-[#B4B8BC]" aria-hidden="true">·</span>
          <button
            type="button"
            onClick={onOpenTerms}
            className="hover:text-[#2A2C2E] hover:underline focus:underline focus:outline-none transition-colors cursor-pointer"
          >
            Terms of Service
          </button>
        </div>

        {/* Optional License line (only shows if filled) */}
        {siteData.license && (
          <p className="text-[11px] text-[#6A6E72] font-mono">
            License No. {siteData.license}
          </p>
        )}

        {/* ADA Compliance Notice */}
        <p className="text-[10px] text-[#8E9296] tracking-wide pt-2">
          Designed with WCAG 2.1 AA accessibility standards.
        </p>

      </div>
    </footer>
  );
};
