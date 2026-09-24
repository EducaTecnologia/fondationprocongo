import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Globe, Phone } from 'lucide-react';

export const ContactNewsletter: React.FC = () => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Général',
    message: '',
  });

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
                  CONTACT & BUREAUX
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
                Restons en contact direct
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Nos équipes en République Démocratique du Congo et à Atlanta sont à votre disposition pour toute question, proposition d’appui ou partenariat.
              </p>
            </div>

            {/* 2 Sedes Cards */}
            <div className="space-y-4">
              {/* HQ DRC */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#D71920] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Siège National — RDC</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">Fondation Pro-Congo — Direction Provinciale</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Boma & Matadi, Province du Kongo-Central, République Démocratique du Congo
                </p>
              </div>

              {/* Office USA */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#1B2A6B] text-xs font-bold uppercase tracking-wider">
                  <Globe className="w-4 h-4" />
                  <span>Bureau International — USA</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">Fondation Pro-Congo International Hub</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Atlanta, Georgia, United States of America
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
              Envoyer un message à la direction
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Remplissez ce formulaire et notre secrétariat général vous répondra dans les 48 heures ouvrables.
            </p>

            {contactSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Message transmis avec succès</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Merci pour votre message en faveur du peuple Congolais. Notre équipe vous recontactera rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean-Paul Mbanza"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Adresse e-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean.mbanza@example.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Objet de votre demande *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B]"
                  >
                    <option value="Général">Demande d’information générale</option>
                    <option value="Don">Question sur les dons et la déductibilité</option>
                    <option value="Bénévolat">Candidature au bénévolat (RDC / Diaspora)</option>
                    <option value="Partenariat">Proposition de partenariat ou mécénat</option>
                    <option value="Presse">Relations presse & médias</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Votre message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Détaillez ici votre demande ou votre projet..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#D71920] hover:bg-[#b81218] active:scale-95 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmettre notre message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
