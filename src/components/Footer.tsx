import React from 'react';
import { Logo } from './Logo';
import { Heart, ShieldCheck, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../data/content';

interface FooterProps {
  currentLang: Language;
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenDonate }) => {
  const trans = getTranslation(currentLang);
  const tNav = trans.nav;
  const tFoot = trans.footer;
  const tPillars = trans.pillars.items;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070B22] border-t border-white/10 text-slate-300 pt-16 pb-12 select-none">
      {/* Top Accent Tricolor line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2A3EB1] via-[#D71920] to-[#F7C600]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Slogan (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="md" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {tFoot.desc}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#F7C600] font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{tFoot.certText}</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                {tFoot.followUs}
              </span>
              <div className="flex items-center gap-2.5">
                {/* X */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
                  title="X (Twitter)"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#1877F2]/20 border border-white/10 hover:border-[#1877F2]/40 flex items-center justify-center text-slate-300 hover:text-[#1877F2] transition-all hover:scale-105"
                  title="Facebook"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#E4405F]/20 border border-white/10 hover:border-[#E4405F]/40 flex items-center justify-center text-slate-300 hover:text-[#E4405F] transition-all hover:scale-105"
                  title="Instagram"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all hover:scale-105"
                  title="TikTok"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.31 6.31 0 0 0 1.86-4.49V8.52a8.27 8.27 0 0 0 4.84 1.55v-3.38z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {tFoot.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#accueil" className="hover:text-white transition-colors">{tNav.home}</a>
              </li>
              <li>
                <a href="#apropos" className="hover:text-white transition-colors">{tNav.about}</a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-white transition-colors">{tNav.programs}</a>
              </li>
              <li>
                <a href="#projets" className="hover:text-white transition-colors">{tNav.projects}</a>
              </li>
              <li>
                <a href="#territoire" className="hover:text-white transition-colors">{tNav.locations}</a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-white transition-colors">{tNav.team}</a>
              </li>
              <li>
                <a href="#actualites" className="hover:text-white transition-colors">{tNav.news}</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Pillars (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {tFoot.programsTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {tPillars.map((p) => (
                <li key={p.id}>
                  <a href="#programmes" className="hover:text-white transition-colors">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Action (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {tFoot.donateBoxTitle}
            </h4>
            <button
              onClick={onOpenDonate}
              className="w-full py-3 bg-[#D71920] hover:bg-[#b81218] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>{tFoot.donateBoxBtn}</span>
            </button>
            <p className="text-[11px] text-slate-400 leading-tight">
              {tFoot.donateBoxDesc}
            </p>
          </div>
        </div>

        {/* Bottom Line: Copyright, Tagline & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            {tFoot.copyright}
          </div>

          <div className="font-display font-bold text-[#D71920] text-sm tracking-tight">
            « {trans.brandTagline} »
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label={tFoot.backToTop}
          >
            <span>{tFoot.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#F7C600]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
