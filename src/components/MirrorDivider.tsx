import React from 'react';

interface MirrorDividerProps {
  className?: string;
}

export const MirrorDivider: React.FC<MirrorDividerProps> = ({ className = "my-16" }) => {
  return (
    <div className={`relative flex items-center justify-center w-full max-w-4xl mx-auto px-4 ${className}`} aria-hidden="true">
      {/* Left Hairline */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#B4B8BC] to-[#8E9296]" />
      
      {/* Almond-shaped Nail Ornament */}
      <div className="mx-4 flex items-center justify-center">
        <div className="relative w-3.5 h-6 rounded-t-full rounded-b-md bg-gradient-to-b from-[#FFFFFF] via-[#B4B8BC] to-[#6A6E72] p-[1px] shadow-sm transform rotate-45">
          <div className="w-full h-full rounded-t-full rounded-b-md bg-white/80" />
        </div>
      </div>

      {/* Right Hairline */}
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#B4B8BC] to-[#8E9296]" />
    </div>
  );
};
