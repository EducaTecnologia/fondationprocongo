import React, { useState } from 'react';
import { X, CheckCircle2, Users } from 'lucide-react';
import { Logo } from './Logo';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'RDC',
    area: 'Assainissement & Salubrité (Boma/Matadi)',
    availability: 'Temps plein / Chantiers',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-[#141B44] border border-white/20 p-6 sm:p-8 text-white shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-white/10 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <Logo variant="dark" size="sm" className="mb-3 inline-flex" />
              <h3 className="text-2xl font-extrabold font-display">
                Devenir Bénévole Civique
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Rejoignez nos brigades de terrain au Kongo-Central ou nos équipes de soutien international.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                  Nom complet *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                    Adresse e-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                    Téléphone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+243 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                  Domaine de contribution souhaité *
                </label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1030] border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                >
                  <option value="Assainissement & Salubrité (Boma/Matadi)">Assainissement & Salubrité (Opération Boma Bunkete)</option>
                  <option value="Santé & Soins médicaux">Santé communautaire & Secourisme</option>
                  <option value="Agriculture & Distribution">Agriculture vivrière & Sécurité alimentaire</option>
                  <option value="Communication & Traduction (À distance)">Plaidoyer, Médias & Traduction (Diaspora)</option>
                  <option value="Ingénierie & Logistique">Logistique & Gestion de projet</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#D71920] hover:bg-[#b81218] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2"
              >
                <Users className="w-4 h-4" />
                <span>Soumettre ma candidature de bénévole</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-[fadeIn_0.3s_ease-out]">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-display">
              Candidature bien reçue !
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Merci {formData.name} pour votre engagement en faveur du peuple congolais. Le coordinateur des volontaires de la Fondation Pro-Congo prendra contact avec vous sous 72h.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs uppercase font-bold tracking-wider"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
