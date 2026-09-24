import React from 'react';
import {
  Sprout,
  Stethoscope,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  Heart,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import { I18N_STRINGS, IMAGES } from '../data/content';

interface PillarsSectionProps {
  currentLang: Language;
  onSelectPillar?: (pillarId: string) => void;
  onOpenDonate?: (amount?: number) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({
  currentLang,
  onOpenDonate,
}) => {
  const t = I18N_STRINGS[currentLang].pillars;

  const pillars = [
    {
      id: 'agriculture',
      icon: Sprout,
      title: t.p1Title,
      subtitle: 'Souveraineté Alimentaire & Nutrition',
      desc: t.p1Desc,
      image: IMAGES.projectAgri,
      accentColor: 'text-amber-600',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-200',
      borderAccent: 'hover:border-amber-400',
      statNumber: '180 000+',
      statLabel: 'Rations alimentaires distribuées',
      highlights: [
        'Distribution directe de semences saines certifiées de manioc et maïs vivrier.',
        'Accompagnement technique et logistique de 12 coopératives paysannes du Kongo-Central.',
        'Implantation de silos villageois pour sécuriser les réserves lors des périodes de soudure.'
      ]
    },
    {
      id: 'sante',
      icon: Stethoscope,
      title: t.p2Title,
      subtitle: 'Soins Primaires & Urgence Pédiatrique',
      desc: t.p2Desc,
      image: IMAGES.heroHealth,
      accentColor: 'text-red-600',
      badgeBg: 'bg-red-50 text-red-900 border-red-200',
      borderAccent: 'hover:border-red-400',
      statNumber: '15 400',
      statLabel: 'Consultations médicales gratuites',
      highlights: [
        'Cliniques mobiles de brousse pour le dépistage et le traitement immédiat du paludisme.',
        'Dotation des maternités locales en trousses d’urgence obstétricale et kits d’accouchement.',
        'Campagnes régulières de supplémentation en vitamine A et déparasitage des jeunes enfants.'
      ]
    },
    {
      id: 'social',
      icon: HeartHandshake,
      title: t.p3Title,
      subtitle: 'Protection de l’Enfance & Métiers',
      desc: t.p3Desc,
      image: IMAGES.heroPeople,
      accentColor: 'text-blue-700',
      badgeBg: 'bg-blue-50 text-blue-900 border-blue-200',
      borderAccent: 'hover:border-blue-400',
      statNumber: '820+',
      statLabel: 'Jeunes et mères formés aux métiers',
      highlights: [
        'Prise en charge scolaire complète et suivi psycho-social d’orphelins en détresse.',
        'Ateliers d’apprentissage professionnel (couture, artisanat, maintenance) pour jeunes mères.',
        'Micro-appuis solidaires pour relancer les petites activités économiques familiales.'
      ]
    },
    {
      id: 'assainissement',
      icon: Sparkles,
      title: t.p4Title,
      subtitle: 'Salubrité Urbaine & Écologie',
      desc: t.p4Desc,
      image: IMAGES.heroAction,
      accentColor: 'text-emerald-700',
      badgeBg: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      borderAccent: 'hover:border-emerald-400',
      statNumber: '32 000+ T',
      statLabel: 'Déchets évacués dans les cités urbaines',
      highlights: [
        'Opération « Boma Bunkete » : brigades civiques quotidiennes pour curer et assainir la cité.',
        'Désengorgement des collecteurs principaux pour prévenir les inondations dévastatrices.',
        'Collecte sélective et recyclage des déchets plastiques dans les centres urbains du Bas-Fleuve.'
      ]
    },
  ];

  return (
    <section id="programmes" className="relative py-20 sm:py-28 bg-slate-50/60 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[3px] bg-[#D71920]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1B2A6B]">
              {t.sectionKicker}
            </span>
            <span className="w-8 h-[3px] bg-[#D71920]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            {t.sub}
          </p>
        </div>

        {/* 4 Cards: Desktop layout 2 on top, 2 on bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`group rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between ${pillar.borderAccent}`}
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm text-xs font-bold text-slate-900">
                      <Icon className={`w-4 h-4 ${pillar.accentColor}`} />
                      <span>{pillar.subtitle}</span>
                    </div>

                    {/* Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center text-xs font-mono font-bold text-slate-900">
                      0{idx + 1}
                    </div>

                    {/* Floating Title on image bottom */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold font-display leading-tight">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-5">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>

                    {/* Impact Metric Box */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Résultat direct sur le terrain
                        </div>
                        <div className="text-xs text-slate-700 mt-0.5">
                          {pillar.statLabel}
                        </div>
                      </div>
                      <div className="text-2xl font-black text-[#1B2A6B] font-display">
                        {pillar.statNumber}
                      </div>
                    </div>

                    {/* Highlights Checkmarks */}
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#D71920]">
                        Actions concrètes déployées :
                      </div>
                      {pillar.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                    Programme certifié par la Fondation Pro-Congo
                  </span>
                  <button
                    onClick={() => onOpenDonate?.(35)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#1B2A6B] hover:bg-[#2A3EB1] active:scale-95 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ml-auto"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Soutenir ce domaine</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
