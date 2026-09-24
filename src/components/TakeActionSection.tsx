import React, { useState } from 'react';
import { Heart, Users, Handshake, Check, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { I18N_STRINGS } from '../data/content';

interface TakeActionSectionProps {
  currentLang: Language;
  onOpenDonateModal: (amount?: number) => void;
  onOpenVolunteerModal: () => void;
  onOpenPartnerModal: () => void;
  onNavigateToOtherWays?: () => void;
}

export const TakeActionSection: React.FC<TakeActionSectionProps> = ({
  currentLang,
  onOpenDonateModal,
  onOpenVolunteerModal,
  onOpenPartnerModal,
  onNavigateToOtherWays,
}) => {
  const [donationFrequency, setDonationFrequency] = useState<'once' | 'monthly'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number>(35);
  const [customAmount, setCustomAmount] = useState<string>('');

  const t = I18N_STRINGS[currentLang].action;
  const amounts = [15, 35, 75, 150];

  const getImpactDescription = (amt: number) => {
    if (amt <= 20) {
      return 'Finance 1 semaine d’équipements de sécurité pour 2 volontaires d’assainissement.';
    }
    if (amt <= 50) {
      return 'Offre 1 kit médical pédiatrique complet et des compléments nutritionnels pour 5 enfants.';
    }
    if (amt <= 100) {
      return 'Permet l’évacuation d’une tonne supplémentaire de déchets dans un ravin à risque.';
    }
    return 'Finance la logistique hebdomadaire d’une clinique mobile pour tout un village du Bas-Fleuve.';
  };

  const currentAmtNumber = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  return (
    <section id="agir" className="relative py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.sub}
          </p>
        </div>

        {/* 3 Action Pathways Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Pathway 1: High Conversion Donation Box (Main Accent - Span 6) */}
          <div className="lg:col-span-6 rounded-3xl bg-white border-2 border-[#D71920] p-6 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#D71920] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Action Prioritaire</span>
                </span>
                <span className="text-xs text-[#1B2A6B] font-bold font-mono">100% Dédié au Terrain</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mb-2">
                {t.way1Title}
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                {t.way1Desc}
              </p>

              {/* Once vs Monthly Tab */}
              <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl mb-6">
                <button
                  onClick={() => setDonationFrequency('monthly')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    donationFrequency === 'monthly'
                      ? 'bg-[#1B2A6B] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Don Mensuel (Impact durable)
                </button>
                <button
                  onClick={() => setDonationFrequency('once')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    donationFrequency === 'once'
                      ? 'bg-[#1B2A6B] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Don Ponctuel
                </button>
              </div>

              {/* Amount Presets */}
              <div className="grid grid-cols-4 gap-2.5 mb-4">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      setSelectedAmount(amt);
                      setCustomAmount('');
                    }}
                    className={`py-3 rounded-xl font-display font-extrabold text-lg sm:text-xl transition-all cursor-pointer border ${
                      selectedAmount === amt && !customAmount
                        ? 'bg-[#F7C600] border-[#F7C600] text-slate-900 shadow-md scale-[1.02]'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              {/* Custom amount input */}
              <div className="relative mb-6">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                <input
                  type="number"
                  placeholder="Autre montant libre (USD)"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B]"
                />
              </div>

              {/* Impact readout card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-6 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Votre don de ${currentAmtNumber || 35} :</strong> {getImpactDescription(currentAmtNumber || 35)}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => onOpenDonateModal(currentAmtNumber || 35)}
                className="w-full py-4 bg-[#D71920] hover:bg-[#b81218] active:scale-95 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>{t.way1Btn} (${currentAmtNumber || 35})</span>
              </button>

              {onNavigateToOtherWays && (
                <button
                  onClick={onNavigateToOtherWays}
                  className="w-full py-2.5 text-center text-xs font-bold text-slate-600 hover:text-[#1B2A6B] transition-colors cursor-pointer"
                >
                  Voir les comptes bancaires & Mobile Money →
                </button>
              )}
            </div>
          </div>

          {/* Right Column: 2 Secondary Pathways (Volunteer + Institutional) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            {/* Pathway 2: Volunteer */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 shadow-md transition-all flex flex-col justify-between flex-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1B2A6B] flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display mb-2">
                  {t.way2Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {t.way2Desc}
                </p>
                <div className="text-xs text-slate-500 space-y-1.5 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Missions sur le terrain à Boma et Matadi (salubrité, santé, logistique)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Traduction, plaidoyer, collecte de dons et ingénierie à distance</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenVolunteerModal}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
              >
                <span>{t.way2Btn}</span>
                <ArrowRight className="w-4 h-4 text-[#D71920]" />
              </button>
            </div>

            {/* Pathway 3: Institutional Partnership */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 shadow-md transition-all flex flex-col justify-between flex-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display mb-2">
                  {t.way3Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {t.way3Desc}
                </p>
                <div className="text-xs text-slate-500 space-y-1.5 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Conventions municipales et protocoles sanitaires d'envergure</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Mécénat d’entreprise et programmes RSE en République Démocratique du Congo</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenPartnerModal}
                className="w-full py-3 bg-[#1B2A6B] hover:bg-[#2A3EB1] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>{t.way3Btn}</span>
                <ArrowRight className="w-4 h-4 text-[#F7C600]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
