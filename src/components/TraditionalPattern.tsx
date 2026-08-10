import React from 'react';

// Mandala / Traditional Indian decorative pattern header and frame elements
export const MandalaHeaderPattern: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-amber-900/30 ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        className="w-full h-12 opacity-40 mix-blend-multiply"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="mandala-header" x="0" y="0" width="120" height="60" patternUnits="userSpaceOnUse">
          {/* Inner Mandala Circles */}
          <circle cx="60" cy="30" r="24" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="60" cy="30" r="16" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <circle cx="60" cy="30" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="60" cy="30" r="3" fill="currentColor" />
          {/* Petal designs */}
          <path d="M60 6 Q65 18 60 30 Q55 18 60 6 Z" fill="currentColor" opacity="0.6" />
          <path d="M60 54 Q65 42 60 30 Q55 42 60 54 Z" fill="currentColor" opacity="0.6" />
          <path d="M36 30 Q48 35 60 30 Q48 25 36 30 Z" fill="currentColor" opacity="0.6" />
          <path d="M84 30 Q72 35 60 30 Q72 25 84 30 Z" fill="currentColor" opacity="0.6" />
          {/* Outer Arch Accents */}
          <path d="M0 30 C30 10 30 50 60 30 C90 10 90 50 120 30" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="0" cy="30" r="4" fill="currentColor" />
          <circle cx="120" cy="30" r="4" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#mandala-header)" />
      </svg>
    </div>
  );
};

// Circular Madhubani frame decoration for Director profile photos
export const CircularMadhubaniFrame: React.FC<{ children: React.ReactNode; size?: number }> = ({ children }) => {
  return (
    <div className="relative inline-block group">
      {/* Outer Mandala Decorative Ring */}
      <div className="absolute -inset-3 rounded-full border-2 border-dashed border-amber-500/60 animate-spin-slow p-1">
        <svg className="w-full h-full text-amber-600/40" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="2" strokeDasharray="8 6" />
        </svg>
      </div>
      <div className="absolute -inset-2 rounded-full border border-amber-600/30"></div>
      
      {/* Outer Madhubani Patterned Ring */}
      <div className="relative p-2.5 rounded-full bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 shadow-lg">
        <div className="rounded-full p-1 bg-white shadow-inner overflow-hidden border border-amber-300">
          {children}
        </div>
      </div>
    </div>
  );
};

// Decorative Madhubani corner accent for cards
export const MadhubaniCardCorner: React.FC = () => {
  return (
    <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none opacity-80">
      <svg viewBox="0 0 50 50" className="w-full h-full text-amber-600" fill="currentColor">
        <path d="M50 0 L50 50 L0 0 Z" opacity="0.15" />
        <circle cx="40" cy="10" r="4" fill="currentColor" opacity="0.8" />
        <path d="M50 20 C40 20 30 10 30 0" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M50 35 C35 35 15 15 15 0" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" fill="none" />
      </svg>
    </div>
  );
};
