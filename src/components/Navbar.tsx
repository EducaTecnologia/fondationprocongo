import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { Language } from '../types';
import { I18N_STRINGS } from '../data/content';
import { FlagIcon } from './FlagIcon';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenDonate: () => void;
  activePage: string;
  onNavigatePage: (page: string) => void;
}

const LANGUAGES_META: { code: Language; name: string; label: string }[] = [
  { code: 'fr', name: 'Français', label: 'FR' },
  { code: 'en', name: 'English', label: 'EN' },
  { code: 'es', name: 'Español', label: 'ES' },
  { code: 'pt', name: 'Português', label: 'PT' },
  { code: 'ar', name: 'العربية', label: 'AR' },
  { code: 'zh', name: '中文', label: 'ZH' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  onOpenDonate,
  activePage,
  onNavigatePage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = I18N_STRINGS[currentLang].nav;
  const currentLangMeta = LANGUAGES_META.find((l) => l.code === currentLang) || LANGUAGES_META[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'accueil', label: t.home, isPage: false, targetId: '#accueil' },
    { id: 'apropos', label: t.about, isPage: false, targetId: '#apropos' },
    { id: 'programmes', label: t.programs, isPage: false, targetId: '#programmes' },
    { id: 'projets', label: t.projects, isPage: false, targetId: '#projets' },
    { id: 'soutien', label: t.supporters, isPage: false, targetId: '#partenaires' },
    { id: 'other-ways', label: t.otherWaysToDonate, isPage: true, pageId: 'donate-ways' },
    { id: 'contact', label: t.contact, isPage: false, targetId: '#contact' },
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    setMobileMenuOpen(false);
    if (item.isPage && item.pageId) {
      onNavigatePage(item.pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (activePage !== 'home') {
        onNavigatePage('home');
        setTimeout(() => {
          const el = document.querySelector(item.targetId || '#accueil');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(item.targetId || '#accueil');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 ${
          isScrolled
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Logo (no background container, pure transparent over hero) */}
            <button
              onClick={() => {
                onNavigatePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="shrink-0 focus:outline-hidden rounded-xl text-left cursor-pointer transition-transform hover:scale-[1.02]"
              aria-label="Fondation Pro-Congo - Page d'accueil"
            >
              <Logo size="sm" variant="dark" showContainer={false} />
            </button>

            {/* Zone 2: Navigation Links (pure text directly on hero image) */}
            <nav
              className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-normal text-white"
              aria-label="Navigation principale"
            >
              {navItems.map((item) => {
                const isCurrentActive =
                  (item.isPage && activePage === item.pageId) ||
                  (!item.isPage && activePage === 'home' && item.id === 'accueil' && !isScrolled);

                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`transition-all whitespace-nowrap py-1 relative cursor-pointer text-white/90 hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] ${
                      isCurrentActive ? 'text-[#F7C600] font-bold' : ''
                    }`}
                  >
                    {item.label}
                    {isCurrentActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F7C600] rounded-full shadow-[0_0_8px_rgba(247,198,0,0.8)]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Actions (Dropdown Idiomas + Botão Doar) */}
            <div className="flex items-center gap-3">
              {/* Language Selector Dropdown: Only flag and abbreviation, frosted glass */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setLangDropdownOpen(true)}
                onMouseLeave={() => setLangDropdownOpen(false)}
              >
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border border-white/25 bg-black/35 hover:bg-black/55 text-white backdrop-blur-md transition-all cursor-pointer shadow-xs"
                  aria-expanded={langDropdownOpen}
                  aria-label="Sélectionner la langue"
                >
                  <FlagIcon code={currentLangMeta.code} className="w-5 h-3.5 shadow-xs" />
                  <span className="uppercase tracking-wider text-xs font-extrabold">{currentLangMeta.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-300 transition-transform duration-200 ${
                      langDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu: Dark glass card */}
                {langDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-36 rounded-2xl bg-slate-900/95 border border-white/15 backdrop-blur-xl shadow-2xl py-2 text-white animate-[fadeIn_0.15s_ease-out] z-50">
                    <div className="space-y-0.5 px-1.5">
                      {LANGUAGES_META.map((lang) => {
                        const isSelected = currentLang === lang.code;
                        return (
                          <button
                            key={lang.code}
                            onClick={() => {
                              onSelectLang(lang.code);
                              setLangDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-white/15 text-[#F7C600]'
                                : 'text-slate-200 hover:bg-white/10'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <FlagIcon code={lang.code} className="w-5 h-3.5 shadow-xs" />
                              <span className="uppercase tracking-wider text-xs">{lang.label}</span>
                            </div>
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F7C600]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Red Donate CTA */}
              <button
                onClick={onOpenDonate}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#D71920] hover:bg-[#b81218] active:scale-95 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-[0_4px_16px_rgba(215,25,32,0.45)] transition-all cursor-pointer whitespace-nowrap"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>{t.donate}</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Ouvrir le menu de navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-white/98 backdrop-blur-xl lg:hidden pt-20 px-6 pb-8 flex flex-col justify-between overflow-y-auto text-slate-900 shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-2 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="w-full text-left text-base font-bold py-3 px-4 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                {item.isPage && (
                  <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">
                    Page
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 space-y-4">
            {/* Mobile Language Switcher */}
            <div>
              <div className="text-xs font-bold uppercase text-slate-500 mb-2">Langue / Language</div>
              <div className="grid grid-cols-3 gap-2">
                {LANGUAGES_META.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onSelectLang(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-center gap-2 py-2 px-2.5 rounded-xl border text-xs font-bold transition-colors ${
                      currentLang === lang.code
                        ? 'bg-[#1B2A6B] text-white border-[#1B2A6B]'
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    <FlagIcon code={lang.code} className="w-4 h-3 shadow-xs" />
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full py-3.5 bg-[#D71920] hover:bg-[#b81218] text-white font-bold text-center uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{t.donate}</span>
            </button>
            <div className="text-center text-xs text-slate-500">
              Fondation Pro-Congo — En faveur du peuple Congolais
            </div>
          </div>
        </div>
      )}
    </>
  );
};
