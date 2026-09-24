import React from 'react';
import { MapPin, Quote, Shield, CheckCircle2 } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/content';

export const TeamSection: React.FC = () => {
  return (
    <section id="equipe" className="relative py-20 sm:py-28 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#D71920]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1B2A6B]">
              GOUVERNANCE & DIRECTION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            Une équipe engagée au service du peuple
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Une synergie stratégique entre notre commandement de terrain en RDC et notre direction internationale basée à Atlanta.
          </p>
        </div>

        {/* Featured CEO Card (Joe Nyakeru with updated portrait) */}
        {TEAM_MEMBERS.length > 0 && (
          <div className="mb-12 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto border-2 border-slate-200 shadow-md">
              <img
                src={TEAM_MEMBERS[0].image}
                alt={TEAM_MEMBERS[0].name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#F7C600] flex items-center gap-1.5 shadow-md">
                <Shield className="w-3.5 h-3.5" />
                <span>Leadership Exécutif</span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-md bg-[#D71920] text-white font-bold uppercase tracking-wider">
                  {TEAM_MEMBERS[0].role}
                </span>
                <span className="flex items-center gap-1 text-slate-600 bg-slate-100 px-3 py-1 rounded-md font-medium">
                  <MapPin className="w-3 h-3 text-[#1B2A6B]" />
                  <span>{TEAM_MEMBERS[0].location}</span>
                </span>
                <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Mandat Actif</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 font-display">
                {TEAM_MEMBERS[0].name}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {TEAM_MEMBERS[0].bio}
              </p>

              {TEAM_MEMBERS[0].quote && (
                <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#1B2A6B] text-xs sm:text-sm text-slate-700 italic flex items-start gap-2.5">
                  <Quote className="w-5 h-5 text-[#1B2A6B] shrink-0" />
                  <span>« {TEAM_MEMBERS[0].quote} »</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Other Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.slice(1).map((member, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg p-6 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative rounded-2xl overflow-hidden aspect-square w-full mb-5 bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-semibold text-white flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#F7C600]" />
                    <span>{member.location}</span>
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#D71920] mb-1">
                  {member.role}
                </div>
                <h4 className="text-base font-bold text-slate-900 font-display mb-2">
                  {member.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              {member.quote && (
                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 italic">
                  « {member.quote} »
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
