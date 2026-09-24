/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import { Language } from './types';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { MissionVision } from './components/MissionVision';
import { ImpactNumbers } from './components/ImpactNumbers';
import { PillarsSection } from './components/PillarsSection';
import { HumaneImpactSection } from './components/HumaneImpactSection';
import { ProjectsCards } from './components/ProjectsCards';
import { InteractiveMap } from './components/InteractiveMap';
import { TeamSection } from './components/TeamSection';
import { PartnersMarquee } from './components/PartnersMarquee';
import { AerialSupportSection } from './components/AerialSupportSection';
import { NewsSection } from './components/NewsSection';
import { NewsDetailPage } from './components/NewsDetailPage';
import { ContactNewsletter } from './components/ContactNewsletter';
import { Footer } from './components/Footer';
import { OtherWaysToDonatePage } from './components/OtherWaysToDonatePage';

import { VolunteerModal } from './components/VolunteerModal';
import { PartnerModal } from './components/PartnerModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string>('news-1');
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  // Force scroll to top on initial page load / refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Force scroll to top whenever the active page changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activePage]);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationId = requestAnimationFrame(raf);
    }

    animationId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationId);
      lenis.destroy();
    };
  }, []);

  const handleOpenDonate = (_amount?: number) => {
    setActivePage('donate-ways');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavigatePage = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#D71920] selection:text-white">
      {/* 1. Preloader with Tricolor DRC Map Contour */}
      <Preloader onFinish={() => window.scrollTo(0, 0)} />

      {/* 2. Top Navigation Bar (floating over hero, language selector with flag dropdown, enxuto menu) */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenDonate={() => handleOpenDonate(35)}
        activePage={activePage}
        onNavigatePage={handleNavigatePage}
      />

      {/* Conditional Rendering: Home vs Other Ways to Donate Page vs News Detail Page */}
      {activePage === 'donate-ways' ? (
        <main className="flex-1 w-full">
          <OtherWaysToDonatePage
            currentLang={currentLang}
            onBackHome={() => handleNavigatePage('home')}
            onOpenDonateModal={handleOpenDonate}
          />
        </main>
      ) : activePage === 'news-detail' ? (
        <main className="flex-1 w-full">
          <NewsDetailPage
            articleId={selectedArticleId}
            currentLang={currentLang}
            onBackToNews={() => {
              setActivePage('home');
              setTimeout(() => {
                const el = document.getElementById('actualites');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            onSelectArticle={(id) => {
              setSelectedArticleId(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenDonate={handleOpenDonate}
          />
        </main>
      ) : (
        <main className="flex-1 w-full overflow-hidden">
          {/* 3. Hero Banner: 3 Impact Slides Fullscreen with Navigation Overlay */}
          <HeroSlider
            currentLang={currentLang}
            onOpenDonate={() => handleOpenDonate(50)}
          />

          {/* 4. Notre Engagement en RDC / 4 Piliers d'intégrité (Clean light theme) */}
          <MissionVision currentLang={currentLang} />

          {/* 5. Quantitative Impact Numbers */}
          <ImpactNumbers />

          {/* 6. Domaines d'Intervention (Enhanced interactive cards + photo modal) */}
          <PillarsSection
            currentLang={currentLang}
            onOpenDonate={handleOpenDonate}
          />

          {/* 7. Frontline Activism Impact Block (The Humane League inspired: UNITE. AGIR. Mudar.) */}
          <HumaneImpactSection
            currentLang={currentLang}
            onOpenVolunteer={() => setVolunteerModalOpen(true)}
          />

          {/* 8. Featured Projects Stacked Cards */}
          <ProjectsCards
            onOpenDonate={handleOpenDonate}
          />

          {/* 9. Interactive Real Leaflet Map (Ancrage Géographique) */}
          <InteractiveMap />

          {/* 10. Leadership & Governance Team */}
          <TeamSection />

          {/* 11. Quem Nos Apoia (Institutions & Companies supporting the projects) */}
          <PartnersMarquee onOpenPartnerModal={() => setPartnerModalOpen(true)} />

          {/* 12. Aerial Support CTA Section (QUERO APOIAR with donation and "Outras Formas de Doar" button) */}
          <AerialSupportSection
            currentLang={currentLang}
            onOpenDonate={handleOpenDonate}
            onNavigateToOtherWays={() => handleNavigatePage('donate-ways')}
          />

          {/* 13. News & Dispatches from the ground (Opens full dedicated page) */}
          <NewsSection
            onSelectArticle={(id) => {
              setSelectedArticleId(id);
              setActivePage('news-detail');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* 14. Contact & Newsletter */}
          <ContactNewsletter />
        </main>
      )}

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenDonate={() => handleOpenDonate(35)}
      />

      {/* Interactive Modals */}
      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />

      <PartnerModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />
    </div>
  );
}
