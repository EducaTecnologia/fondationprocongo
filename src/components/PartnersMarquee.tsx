import React from 'react';
import { Handshake } from 'lucide-react';
import { getTranslation } from '../data/content';
import { Language } from '../types';

interface PartnersMarqueeProps {
  currentLang?: Language;
  onOpenPartnerModal?: () => void;
}

export const PartnersMarquee: React.FC<PartnersMarqueeProps> = ({ currentLang = 'fr', onOpenPartnerModal }) => {
  const t = getTranslation(currentLang).partners;
  const partners = [
    {
      name: 'Nike',
      renderLogo: () => (
        <svg viewBox="0 0 100 40" className="h-9 w-auto text-slate-900 group-hover:text-black transition-colors" fill="currentColor">
          <path d="M96.7 4.1C85.5 11.2 68.2 23.3 43.8 33.6C29.6 39.6 15.8 40.5 7.1 38.6C3.9 37.9 1.4 36.3 0.4 34.3C-0.7 32 0.3 29.3 2.8 26.8C9.5 20 23.2 13.5 38.2 9.5C55.6 4.9 76.5 4.3 93.8 4C95.5 4 96.5 4 96.7 4.1Z" />
        </svg>
      ),
    },
    {
      name: 'Disney',
      renderLogo: () => (
        <svg viewBox="0 0 130 50" className="h-10 w-auto text-slate-900 group-hover:text-[#1B2A6B] transition-colors" fill="currentColor">
          <text
            x="50%"
            y="65%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="'Brush Script MT', 'Dancing Script', 'Segoe Script', cursive, sans-serif"
            fontWeight="900"
            fontSize="44"
            letterSpacing="-1"
          >
            Disney
          </text>
        </svg>
      ),
    },
    {
      name: 'Starlink',
      renderLogo: () => (
        <div className="flex items-center gap-2 text-slate-900 group-hover:text-black transition-colors font-black tracking-widest text-lg font-sans">
          <svg viewBox="0 0 28 28" className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="14" cy="14" r="11" />
            <path d="M6 14 A 8 4 45 0 1 22 14" strokeLinecap="round" />
            <circle cx="14" cy="14" r="2.5" fill="currentColor" />
          </svg>
          <span className="font-extrabold uppercase text-base tracking-[0.25em]">STARLINK</span>
        </div>
      ),
    },
    {
      name: 'Meta',
      renderLogo: () => (
        <div className="flex items-center gap-2.5 text-slate-900 group-hover:text-[#0081FB] transition-colors">
          <svg viewBox="0 0 40 24" className="h-6 w-auto shrink-0" fill="currentColor">
            <path d="M11.9 2.5C7.2 2.5 3.5 6 1.8 10.3C0.6 13.3 0.9 16.6 2.6 19.1C4.3 21.6 7.1 22.9 10.3 22.7C13.8 22.5 17 20.3 19.3 17.5C19.7 17 20.3 17 20.7 17.5C23 20.3 26.2 22.5 29.7 22.7C32.9 22.9 35.7 21.6 37.4 19.1C39.1 16.6 39.4 13.3 38.2 10.3C36.5 6 32.8 2.5 28.1 2.5C24.4 2.5 21.1 4.7 19.3 7.8C17.5 4.7 14.2 2.5 10.5 2.5M10.9 6.2C13.5 6.2 15.9 8.1 17.4 10.9L16.4 12.3C14.7 9.8 12.6 8.5 10.5 8.5C7.4 8.5 5 10.9 5 13.9C5 16.9 7.4 19.3 10.5 19.3C12.8 19.3 15.2 17.6 17.1 15.1L18.4 16.8C16.1 19.9 13.1 21.9 10.2 21.9C6 21.9 2.5 18.4 2.5 13.9C2.5 9.4 6 6.2 10.9 6.2ZM29.1 6.2C34 6.2 37.5 9.4 37.5 13.9C37.5 18.4 34 21.9 29.8 21.9C26.9 21.9 23.9 19.9 21.6 16.8L22.9 15.1C24.8 17.6 27.2 19.3 29.5 19.3C32.6 19.3 35 16.9 35 13.9C35 10.9 32.6 8.5 29.5 8.5C27.4 8.5 25.3 9.8 23.6 12.3L22.6 10.9C24.1 8.1 26.5 6.2 29.1 6.2Z" />
          </svg>
          <span className="font-extrabold text-lg tracking-tight font-sans">Meta</span>
        </div>
      ),
    },
    {
      name: 'Hydro',
      renderLogo: () => (
        <div className="flex items-center gap-2.5 text-slate-900 group-hover:text-[#004B87] transition-colors">
          <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0" fill="currentColor">
            <path d="M16 2L3 9.5V22.5L16 30L29 22.5V9.5L16 2ZM16 6.2L24.8 11.3V20.7L16 25.8L7.2 20.7V11.3L16 6.2Z" />
            <circle cx="16" cy="16" r="4.5" />
          </svg>
          <span className="font-bold text-lg tracking-wider uppercase font-sans">Hydro</span>
        </div>
      ),
    },
    {
      name: 'Rolex',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center text-slate-900 group-hover:text-[#A37E2C] transition-colors">
          <svg viewBox="0 0 60 36" className="w-9 h-6 fill-current mb-0.5" preserveAspectRatio="xMidYMid meet">
            <path d="M30 0L24 14L10 6L16 22L0 18L10 32H50L60 18L44 22L50 6L36 14L30 0Z" />
            <circle cx="30" cy="2" r="2" />
            <circle cx="10" cy="7" r="2" />
            <circle cx="50" cy="7" r="2" />
            <circle cx="1" cy="19" r="2" />
            <circle cx="59" cy="19" r="2" />
          </svg>
          <span className="text-xs font-black tracking-[0.3em] font-serif uppercase">ROLEX</span>
        </div>
      ),
    },
    {
      name: 'Lenovo',
      renderLogo: () => (
        <div className="px-3 py-1.5 bg-[#E2231A] text-white rounded-md font-black tracking-tight text-base font-sans shadow-xs group-hover:scale-105 transition-transform">
          Lenovo
        </div>
      ),
    },
    {
      name: 'Sony',
      renderLogo: () => (
        <div className="text-slate-900 group-hover:text-black transition-colors font-black tracking-[0.2em] text-xl font-serif">
          SONY
        </div>
      ),
    },
  ];

  return (
    <section id="partenaires" className="relative py-20 sm:py-28 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#D71920]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1B2A6B]">
                {t.sectionKicker}
              </span>
              <span className="w-8 h-[2px] bg-[#D71920]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
              {t.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {t.sub}
            </p>
          </div>

          <button
            onClick={onOpenPartnerModal}
            className="self-start sm:self-auto px-6 py-3.5 rounded-xl bg-[#1B2A6B] hover:bg-[#2A3EB1] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm shrink-0"
          >
            <Handshake className="w-4 h-4 text-[#F7C600]" />
            <span>{t.becomePartnerBtn}</span>
          </button>
        </div>
      </div>

      {/* Grid displaying ONLY the institution logos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="h-28 sm:h-32 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center p-6 group cursor-pointer"
              title={partner.name}
              aria-label={`Logo officiel de ${partner.name}`}
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                {partner.renderLogo()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
