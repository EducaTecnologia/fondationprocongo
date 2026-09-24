import React, { useEffect, useState } from 'react';
import { IMAGES } from '../data/content';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

interface PreloaderProps {
  onFinish?: () => void;
}

interface ProjectSlide {
  image: string;
  title: string;
  location: string;
  tag: string;
}

export const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const projectSlides: ProjectSlide[] = [
    {
      image: IMAGES.heroAction,
      title: 'Opération « Boma Bunkete » — Salubrité urbaine',
      location: 'Boma, Kongo-Central',
      tag: 'Assainissement & Salubrité',
    },
    {
      image: IMAGES.heroHealth,
      title: 'Soins primaires & cliniques pédiatriques mobiles',
      location: 'Matadi & Bas-Fleuve',
      tag: 'Santé & Urgence Médicale',
    },
    {
      image: IMAGES.projectAgri,
      title: 'Souveraineté alimentaire & soutien aux coopératives',
      location: 'Kongo-Central',
      tag: 'Agriculture Vivrière',
    },
    {
      image: IMAGES.communityAction,
      title: 'Protection de l’enfance & formation aux métiers',
      location: 'Kabondo, Boma',
      tag: 'Développement Communautaire',
    },
    {
      image: IMAGES.aidDistributionAerial,
      title: 'Acheminement logistique des secours d’urgence',
      location: 'République Démocratique du Congo',
      tag: 'Secours Humanitaire',
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const totalDuration = prefersReducedMotion ? 800 : 2800;

    // Progress counter (0 to 100)
    const intervalTime = 25;
    const step = 100 / (totalDuration / intervalTime);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return Math.min(Math.round(next), 99);
      });
    }, intervalTime);

    // Slide transition timer: cycle through project images
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % projectSlides.length);
    }, 900);

    const fadeTimer = setTimeout(() => {
      setProgress(100);
      setIsFading(true);
    }, totalDuration);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      window.scrollTo(0, 0);
      onFinish?.();
    }, totalDuration + 600);

    return () => {
      clearInterval(progressTimer);
      clearInterval(slideInterval);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish, projectSlides.length]);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      window.scrollTo(0, 0);
      onFinish?.();
    }, 250);
  };

  if (!isVisible) return null;

  const currentSlide = projectSlides[currentSlideIndex];

  return (
    <aside
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-slate-950 text-white transition-opacity duration-700 select-none overflow-hidden ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label="Chargement de la Fondation Pro-Congo"
    >
      {/* 1. Cinematic Background: Cross-fading Project Photography with Ken Burns slow zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {projectSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-90"
            />
          </div>
        ))}

        {/* Sophisticated Dark Gradient Vignette for cinematic focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/85 backdrop-blur-[2px]" />

        {/* Ambient Color Halos in DRC Flag Colors */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#2A3EB1]/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#D71920]/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F7C600]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* 2. Top Bar: Discreet Indicator and Skip Button */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200">
          <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
          <span className="tracking-wider uppercase text-[10px]">RDC • En direct du terrain</span>
        </div>

        <button
          onClick={handleSkip}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-xs font-bold text-white tracking-wider uppercase backdrop-blur-md transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
          aria-label="Accéder au site immédiatement"
        >
          <span>Accéder au site</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F7C600]" />
        </button>
      </header>

      {/* 3. Centerpiece: The Authentic Official Logo from the provided URL (Background Removed) */}
      <main className="relative z-20 flex flex-col items-center justify-center max-w-2xl px-4 text-center my-auto">
        {/* Glow Ring behind logo */}
        <div className="relative group max-w-lg w-full flex flex-col items-center">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#2A3EB1]/35 via-[#F7C600]/30 to-[#D71920]/35 rounded-[36px] blur-2xl opacity-90 animate-pulse pointer-events-none" />

          {/* Frosted Glass Container with Transparent Logo from URL */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-[28px] sm:rounded-[36px] p-4 sm:p-6 shadow-[0_30px_70px_rgba(0,0,0,0.7)] border border-white/50 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
            {/* Shimmer Light Reflection passing over logo */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmerSlide_2.8s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none z-10" />

            <img
              src={IMAGES.logoTransparent}
              alt="Fondation Pro-Congo — En faveur du peuple Congolais"
              className="w-full max-w-[340px] sm:max-w-[460px] h-auto object-contain mx-auto block select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* Dynamic Project Pill: Shows the current project being cycled in background */}
        <div className="mt-7 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-xs text-slate-200 shadow-lg animate-[fadeIn_0.5s_ease-out]">
          <MapPin className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
          <span className="font-bold text-white">{currentSlide.tag}</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-300 font-medium truncate max-w-[240px] sm:max-w-[320px]">
            {currentSlide.title}
          </span>
        </div>
      </main>

      {/* 4. Bottom Section: Progress Counter, Stage Message and Tricolor Line */}
      <footer className="relative z-20 w-full max-w-md mx-auto px-6 pb-8 space-y-3 text-center">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span className="font-medium text-slate-300">
            {progress < 30 && 'Connexion aux centres d’action...'}
            {progress >= 30 && progress < 65 && 'Chargement des opérations en RDC...'}
            {progress >= 65 && progress < 90 && 'Synchronisation des programmes humanitaires...'}
            {progress >= 90 && 'Bienvenue à la Fondation Pro-Congo'}
          </span>
          <span className="font-mono text-sm font-black text-[#F7C600] tabular-nums">
            {progress}%
          </span>
        </div>

        {/* DRC Tricolor Progress Bar */}
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-[1px] backdrop-blur-sm border border-white/10">
          <div
            className="h-full bg-gradient-to-r from-[#2A3EB1] via-[#D71920] to-[#F7C600] rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(247,198,0,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-[11px] text-slate-400 tracking-wide">
          Kinshasa • Boma • Matadi • Bas-Fleuve • Diaspora Internationale
        </p>
      </footer>

      <style>{`
        @keyframes shimmerSlide {
          0% {
            transform: translateX(-100%);
          }
          40%, 100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </aside>
  );
};
