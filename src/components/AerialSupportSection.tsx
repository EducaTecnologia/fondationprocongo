import React, { useState } from 'react';
import { Heart, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { I18N_STRINGS, IMAGES } from '../data/content';

interface AerialSupportSectionProps {
  currentLang: Language;
  onOpenDonate: (amount?: number) => void;
  onNavigateToOtherWays: () => void;
}

export const AerialSupportSection: React.FC<AerialSupportSectionProps> = ({
  currentLang,
  onOpenDonate,
  onNavigateToOtherWays,
}) => {
  const [frequency, setFrequency] = useState<'monthly' | 'once'>('monthly');
  const t = I18N_STRINGS[currentLang].aerialSupport;

  return (
    <section className="relative w-full min-h-[460px] sm:min-h-[540px] flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Image: Aerial humanitarian aid logistics */}
      <img
        src={IMAGES.aidDistributionAerial}
        alt="Distribution de vivres et logistique humanitaire au sol"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark tint overlay for maximum contrast and legibility */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-semibold uppercase tracking-wider mb-6 text-[#F7C600]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Fonds 100% orientés vers les communautés</span>
        </div>

        {/* Big Impact Title matching Image 4 */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-display mb-4 drop-shadow-md">
          {t.title}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-100 max-w-2xl mx-auto font-medium mb-8 leading-relaxed drop-shadow">
          {t.subtitle}
        </p>

        {/* Frequency selector (Mensal vs Única) */}
        <div className="inline-flex items-center p-1 bg-black/60 backdrop-blur-md rounded-xl border border-white/20 mb-8">
          <button
            onClick={() => setFrequency('monthly')}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              frequency === 'monthly'
                ? 'bg-[#2A3EB1] text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Don Mensuel (Régulier)
          </button>
          <button
            onClick={() => setFrequency('once')}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              frequency === 'once'
                ? 'bg-[#2A3EB1] text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Don Ponctuel
          </button>
        </div>

        {/* Action Buttons matching user request & Image 4 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Main Red CTA Button */}
          <button
            onClick={() => onOpenDonate(frequency === 'monthly' ? 35 : 50)}
            className="w-full sm:w-auto px-8 py-4 bg-[#D71920] hover:bg-[#b81218] active:scale-95 text-white font-black text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-[0_6px_25px_rgba(215,25,32,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Heart className="w-5 h-5 fill-white" />
            <span>{t.donateBtn}</span>
          </button>

          {/* Secondary Button: Navigates to dedicated Other Ways to Donate Page */}
          <button
            onClick={onNavigateToOtherWays}
            className="w-full sm:w-auto px-6 py-4 bg-white/15 hover:bg-white/25 active:scale-95 border border-white/30 text-white font-bold text-sm uppercase tracking-wider rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t.otherWaysBtn}</span>
            <ArrowRight className="w-4 h-4 text-[#F7C600]" />
          </button>
        </div>

        <div className="mt-6 text-xs text-slate-300 flex items-center justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Paiements sécurisés cryptés SSL
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Mobile Money RDC (M-Pesa, Orange, Airtel)
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Reçu fiscal automatique
          </span>
        </div>
      </div>
    </section>
  );
};
