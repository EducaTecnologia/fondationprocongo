import React, { useState } from 'react';
import {
  Heart,
  Smartphone,
  CreditCard,
  Building2,
  Gift,
  Check,
  Copy,
  ArrowLeft,
  FileText
} from 'lucide-react';
import { IMAGES, getTranslation } from '../data/content';
import { Language } from '../types';

interface OtherWaysToDonatePageProps {
  currentLang: Language;
  onBackHome: () => void;
  onOpenDonateModal: (amount?: number) => void;
}

export const OtherWaysToDonatePage: React.FC<OtherWaysToDonatePageProps> = ({
  currentLang,
  onBackHome,
  onOpenDonateModal,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedSimAmount, setSelectedSimAmount] = useState<number>(35);
  const [simFrequency, setSimFrequency] = useState<'monthly' | 'once'>('monthly');

  const t = getTranslation(currentLang).otherWaysToDonate;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const getImpact = (amt: number) => {
    if (currentLang === 'en') {
      if (amt <= 20) return 'Guarantees protective gear and tools for 2 public sanitation volunteers in Boma.';
      if (amt <= 50) return 'Funds primary pediatric medical care and fortified porridge for 5 mothers and infants.';
      if (amt <= 100) return 'Enables dredging and rehabilitation of 150 linear meters of vital drainage canals in Matadi.';
      return 'Fully finances a mobile medical mission to an isolated rural village in Bas-Fleuve.';
    }
    if (currentLang === 'pt') {
      if (amt <= 20) return 'Garante equipamentos de proteção individual para 2 voluntários de limpeza pública em Boma.';
      if (amt <= 50) return 'Financia atendimento pediátrico básico e farinha enriquecida para 5 mães e recém-nascidos.';
      if (amt <= 100) return 'Permite o desassoreamento e obras em 150 metros de galerias de drenagem pluvial em Matadi.';
      return 'Cobre integralmente uma missão de clínica móvel a um vilarejo isolado no Bas-Fleuve.';
    }
    if (currentLang === 'es') {
      if (amt <= 20) return 'Garantiza equipo de protección completo para 2 brigadistas de limpieza urbana en Boma.';
      if (amt <= 50) return 'Financia atención médica pediátrica y papilla nutricional para 5 madres e infantes.';
      if (amt <= 100) return 'Permite el desazolve y saneamiento de 150 metros lineales de canales pluviales en Matadi.';
      return 'Financia una brigada médica móvil completa para una comunidad aislada de Bas-Fleuve.';
    }
    if (currentLang === 'ar') {
      if (amt <= 20) return 'يوفر معدات الوقاية الشخصية لمتطوعين اثنين في فرق النظافة العامة في بوما.';
      if (amt <= 50) return 'يمول الرعاية الطبية للأطفال والدقيق المقوى لـ 5 أمهات ومواليدهن.';
      if (amt <= 100) return 'يتيح تجريف وتأهيل 150 متراً طولياً من قنوات تصريف السيول في ماتادي.';
      return 'يمول قافلة طبية متكاملة لقرية معزولة في منطقة باس-فلوف.';
    }
    if (currentLang === 'zh') {
      if (amt <= 20) return '为博马市2名前线环卫青年志愿者配备全套专业防护装备。';
      if (amt <= 50) return '为5位母亲和婴幼儿提供基层儿科诊疗与强化营养粥粉。';
      if (amt <= 100) return '用于马塔迪市150米关键雨水排涝明渠的彻底清淤与治理。';
      return '全额资助流动医疗巡回车深入下河区偏远孤立村落开展义诊。';
    }
    // French default
    if (amt <= 20) return 'Garantit l’équipement de protection complet pour 2 volontaires de salubrité publique à Boma.';
    if (amt <= 50) return 'Finance les soins pédiatriques de base et la farine enrichie pour 5 mères et nourrissons.';
    if (amt <= 100) return 'Permet la réhabilitation et l’assainissement de 150 mètres linéaires de canal de drainage à Matadi.';
    return 'Finance l’intervention intégrale d’une clinique mobile pour un village enclavé du Bas-Fleuve.';
  };

  const scrollToSimulateur = () => {
    const el = document.getElementById('simulateur-don') || document.getElementById('mobile-money');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-0">
      {/* 1. Hero Banner */}
      <div className="relative w-full min-h-[500px] sm:min-h-[560px] flex items-center justify-center overflow-hidden">
        <img
          src={IMAGES.heroPeople}
          alt="Solidarité en République Démocratique du Congo"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/80 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-28 pb-20">
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full mb-6 transition-colors cursor-pointer backdrop-blur-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backHome}</span>
          </button>

          <div className="inline-block px-3.5 py-1 rounded-full bg-[#D71920]/90 text-white text-xs font-bold uppercase tracking-wider mb-4">
            {t.badge}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            {t.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            {t.sub}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToSimulateur}
              className="px-8 py-3.5 bg-[#D71920] hover:bg-[#b81218] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{t.simBtn}</span>
            </button>
            <a
              href="#mobile-money"
              className="px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold text-sm uppercase tracking-wider rounded-xl border border-white/20 backdrop-blur-sm transition-all"
            >
              {t.exploreBtn}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Interactive Impact Calculator */}
      <div id="simulateur-don" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D71920]">
                {t.simTitle}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                {t.simSub}
              </h2>
            </div>

            {/* Frequency Tab */}
            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
              <button
                onClick={() => setSimFrequency('monthly')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  simFrequency === 'monthly'
                    ? 'bg-[#1B2A6B] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.monthly}
              </button>
              <button
                onClick={() => setSimFrequency('once')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  simFrequency === 'once'
                    ? 'bg-[#1B2A6B] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.once}
              </button>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Amount selectors */}
            <div className="md:col-span-6 grid grid-cols-4 gap-2.5">
              {[15, 35, 75, 150].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelectedSimAmount(amt)}
                  className={`py-3 rounded-xl font-bold font-display text-base transition-all cursor-pointer border ${
                    selectedSimAmount === amt
                      ? 'bg-[#F7C600] border-[#F7C600] text-slate-900 shadow-sm scale-[1.02]'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            {/* Impact Text */}
            <div className="md:col-span-6 bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">
                  {t.impactLabel} ${selectedSimAmount}
                </strong>
                {getImpact(selectedSimAmount)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Detailed Modalities Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
        {/* Modality 1: Mobile Money RDC */}
        <div id="mobile-money" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                RDC & Afrique Centrale
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                {t.mobileMoneyTitle}
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            {t.mobileMoneyDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Vodacom M-Pesa */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900">Vodacom M-Pesa</span>
                  <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">RDC</span>
                </div>
                <div className="text-xs text-slate-500 mb-1">Code Marchand / Numéro :</div>
                <div className="font-mono font-bold text-base text-slate-800 select-all mb-2">
                  +243 81 243 0001
                </div>
                <div className="text-[11px] text-slate-500">
                  USSD : Tapez <strong>*111#</strong> &gt; Paiement &gt; Pro-Congo
                </div>
              </div>
              <button
                onClick={() => handleCopy('+243812430001', 'mpesa')}
                className="mt-4 w-full py-2 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedKey === 'mpesa' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'mpesa' ? t.copiedLabel : t.copyLabel}</span>
              </button>
            </div>

            {/* Orange Money */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900">Orange Money</span>
                  <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-bold">RDC</span>
                </div>
                <div className="text-xs text-slate-500 mb-1">Code Marchand :</div>
                <div className="font-mono font-bold text-base text-slate-800 select-all mb-2">
                  445 210
                </div>
                <div className="text-[11px] text-slate-500">
                  USSD : Tapez <strong>*144#</strong> &gt; Code 445210
                </div>
              </div>
              <button
                onClick={() => handleCopy('445210', 'orange')}
                className="mt-4 w-full py-2 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedKey === 'orange' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'orange' ? t.copiedLabel : t.copyLabel}</span>
              </button>
            </div>

            {/* Airtel Money */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900">Airtel Money</span>
                  <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">RDC</span>
                </div>
                <div className="text-xs text-slate-500 mb-1">Numéro Officiel :</div>
                <div className="font-mono font-bold text-base text-slate-800 select-all mb-2">
                  +243 99 243 0002
                </div>
                <div className="text-[11px] text-slate-500">
                  USSD : Tapez <strong>*501#</strong> &gt; Paiement direct
                </div>
              </div>
              <button
                onClick={() => handleCopy('+243992430002', 'airtel')}
                className="mt-4 w-full py-2 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedKey === 'airtel' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'airtel' ? t.copiedLabel : t.copyLabel}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modality 2: Carte Bancaire Internationale */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Paiement Sécurisé En Ligne
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                {t.cardsTitle}
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            {t.cardsDesc}
          </p>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-[#1B2A6B] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-lg font-bold">Visa • MasterCard • PayPal</div>
              <div className="text-xs text-blue-200">{t.secureNote}</div>
            </div>
            <button
              onClick={() => onOpenDonateModal(selectedSimAmount)}
              className="px-8 py-3.5 bg-[#D71920] hover:bg-[#b81218] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              {t.donateNowBtn} (${selectedSimAmount})
            </button>
          </div>
        </div>

        {/* Modality 3: Virement Bancaire Direct (RDC & USA) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Comptes Bancaires Officiels
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                {t.bankTransferTitle}
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            {t.bankTransferDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rawbank DRC */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-bold text-slate-900 text-base">Rawbank RDC</div>
                <span className="text-[10px] bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-bold font-mono">
                  USD & CDF
                </span>
              </div>
              <div className="text-xs text-slate-600 space-y-1">
                <div><strong>Titulaire :</strong> FONDATION PRO-CONGO ASBL</div>
                <div><strong>Banque :</strong> Rawbank Kinshasa / Agence Matadi</div>
                <div><strong>IBAN / Compte USD :</strong> CD33 0001 2010 0450 1200 901</div>
                <div><strong>SWIFT / BIC :</strong> RAWBDRCDXXX</div>
              </div>
              <button
                onClick={() => handleCopy('CD330001201004501200901', 'rawbank')}
                className="w-full py-2 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedKey === 'rawbank' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'rawbank' ? t.copiedLabel : `${t.copyLabel} (Rawbank RDC)`}</span>
              </button>
            </div>

            {/* Wells Fargo USA (Atlanta) */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-bold text-slate-900 text-base">Wells Fargo Bank (USA)</div>
                <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold font-mono">
                  USD / Diaspora
                </span>
              </div>
              <div className="text-xs text-slate-600 space-y-1">
                <div><strong>Beneficiary :</strong> PRO-CONGO FOUNDATION INTL</div>
                <div><strong>Branch :</strong> Atlanta Main Branch, GA, USA</div>
                <div><strong>Routing Number (ABA) :</strong> 061000227</div>
                <div><strong>Account Number :</strong> 4920 1823 8901</div>
                <div><strong>SWIFT / BIC :</strong> WFBIUS6S</div>
              </div>
              <button
                onClick={() => handleCopy('WFBIUS6S 492018238901', 'wellsfargo')}
                className="w-full py-2 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedKey === 'wellsfargo' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'wellsfargo' ? t.copiedLabel : `${t.copyLabel} (USA Atlanta)`}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modality 4 & 5: Corporate Sponsorship & In-Kind Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Gift className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-display mb-2">
                {t.taxReceiptTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {t.taxReceiptDesc}
              </p>
            </div>
            <a
              href="mailto:contact@fondationprocongo.org"
              className="py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold text-center transition-colors"
            >
              contact@fondationprocongo.org
            </a>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-display mb-2">
                {t.inKindTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {t.inKindDesc}
              </p>
            </div>
            <a
              href="mailto:contact@fondationprocongo.org?subject=Don%20en%20Nature"
              className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 rounded-xl text-xs font-bold text-center transition-colors"
            >
              {t.inKindBtn}
            </a>
          </div>
        </div>

        {/* Back to Home CTA */}
        <div className="pt-8 text-center">
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backHome}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
