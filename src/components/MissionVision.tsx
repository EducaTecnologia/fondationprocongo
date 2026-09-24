import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { I18N_STRINGS, IMAGES } from '../data/content';

interface MissionVisionProps {
  currentLang: Language;
}

export const MissionVision: React.FC<MissionVisionProps> = ({ currentLang }) => {
  const t = I18N_STRINGS[currentLang].mission;

  const coreValues = [
    {
      icon: HeartHandshake,
      title: 'Action Directe de Terrain',
      desc: 'Présence permanente auprès des chefs de quartiers, autorités coutumières et familles les plus vulnérables.',
      accent: 'border-l-4 border-l-[#D71920]',
      iconBg: 'bg-red-50 text-[#D71920]',
    },
    {
      icon: ShieldCheck,
      title: 'Transparence & Rigueur Absolue',
      desc: 'Chaque franc et dollar investi est alloué avec traçabilité intégrale, audit indépendant et reporting public vérifiable.',
      accent: 'border-l-4 border-l-[#F7C600]',
      iconBg: 'bg-amber-50 text-amber-700',
    },
    {
      icon: Eye,
      title: 'Ancrage & Souveraineté Locale',
      desc: 'Nos projets sont portés par des citoyens congolais formés et rémunérés dignement pour transformer leur propre cité.',
      accent: 'border-l-4 border-l-[#1B2A6B]',
      iconBg: 'bg-blue-50 text-[#1B2A6B]',
    },
    {
      icon: Sparkles,
      title: 'Dignité Populaire & Pérennité',
      desc: 'Dépasser l’assistanat ponctuel pour construire des infrastructures durables et redonner la fierté civique aux communautés.',
      accent: 'border-l-4 border-l-emerald-500',
      iconBg: 'bg-emerald-50 text-emerald-700',
    },
  ];

  return (
    <section id="apropos" className="relative py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Block: 2 Columns (Manifesto Photo Card on left + Narrative & Quote on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Manifesto Card & Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={IMAGES.heroPeople}
                  alt="Communauté unie en République Démocratique du Congo"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-md">
                  🇨🇩 RDC — Kongo-Central
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#F7C600] block mb-1">
                    Notre Crédo
                  </span>
                  <blockquote className="text-lg sm:text-xl font-black text-white font-display leading-snug">
                    {t.manifestoQuote}
                  </blockquote>
                </div>
              </div>

              {/* Text underneath image */}
              <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Un serment d’action inconditionnel scellé au cœur de nos statuts officiels et incarné au quotidien dans les rues de Boma, Matadi et à travers tout le Kongo-Central.
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ONG officiellement agréée par les lois de la République Démocratique du Congo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative Prose */}
          <div className="lg:col-span-7 space-y-6">
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center gap-2 mb-2.5">
                <span className="w-8 h-[3px] bg-[#D71920]" />
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1B2A6B]">
                  {t.sectionKicker}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-display leading-snug">
                {t.title}
              </h2>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            {/* Quote highlight */}
            <div className="border-l-4 border-[#1B2A6B] pl-5 py-3 bg-blue-50/60 rounded-r-2xl">
              <p className="italic text-slate-800 text-xs sm:text-sm font-medium leading-relaxed">
                « Nous ne promettons pas de miracles lointains. Nous déblayons les rues, nous soignons les fièvres et nous nourrissons les enfants aujourd’hui, avec nos bras, notre rigueur et notre cœur. »
              </p>
              <span className="block mt-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1B2A6B]">
                — Direction Générale, Fondation Pro-Congo
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Block: 4 Core Pillars of Integrity organized LATERALLY across full width */}
        <div className="pt-6 border-t border-slate-100">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
              Éthique & Gouvernance
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
              {t.valuesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className={`p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between ${v.accent}`}
                >
                  <div>
                    <div className={`w-11 h-11 rounded-xl ${v.iconBg} flex items-center justify-center mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 font-display leading-snug">
                      {v.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
