import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Globe } from 'lucide-react';
import { getTranslation } from '../data/content';
import { Language } from '../types';

interface ContactNewsletterProps {
  currentLang?: Language;
}

export const ContactNewsletter: React.FC<ContactNewsletterProps> = ({ currentLang = 'fr' }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Général',
    message: '',
  });

  const t = getTranslation(currentLang).contact;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setContactSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: 'Général', message: '' });
      setContactSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Coordinates & Sedes */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-[#D71920]" />
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1B2A6B]">
                  {t.sectionKicker}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
                {t.title}
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {t.sub}
              </p>
            </div>

            {/* 2 Sedes Cards */}
            <div className="space-y-4">
              {/* HQ DRC */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#D71920] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>{t.hqDrcTitle}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">{t.hqDrcOrg}</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {t.hqDrcLoc}
                </p>
              </div>

              {/* Office USA */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#1B2A6B] text-xs font-bold uppercase tracking-wider">
                  <Globe className="w-4 h-4" />
                  <span>{t.intlUsaTitle}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">{t.intlUsaOrg}</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {t.intlUsaLoc}
                </p>
              </div>
            </div>

            {/* Quick Contact Points */}
            <div className="space-y-3 text-sm text-slate-700 pt-2 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D71920] shrink-0" />
                <a
                  href="mailto:contact@fondationprocongo.org"
                  className="hover:text-[#1B2A6B] transition-colors font-medium"
                >
                  contact@fondationprocongo.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#1B2A6B] shrink-0" />
                <a
                  href="https://fondationprocongo.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1B2A6B] transition-colors font-medium"
                >
                  www.fondationprocongo.org
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
              {t.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 font-normal">
              {t.formSub}
            </p>

            {contactSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-[fadeIn_0.3s_ease-out]">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-950 font-display">
                  {t.sentSuccessTitle}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800">
                  {t.sentSuccessDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nom@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t.subjectLabel}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B] cursor-pointer"
                  >
                    {t.subjectOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t.msgLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={t.msgPlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#1B2A6B] hover:bg-[#2A3EB1] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
                >
                  <span>{t.sendBtn}</span>
                  <Send className="w-4 h-4 text-[#F7C600]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
