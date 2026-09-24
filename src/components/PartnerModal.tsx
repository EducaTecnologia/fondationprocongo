import React, { useState } from 'react';
import { X, CheckCircle2, Handshake } from 'lucide-react';
import { Logo } from './Logo';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    type: 'Collectivité territoriale / Mairie',
    message: '',
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
                Devenir Partenaire Institutionnel
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Collectivités territoriales, bailleurs de fonds, entreprises citoyennes et ONG internationales.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                  Nom de l’organisme ou de l’institution *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Mairie, Entreprise, Fondation..."
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                    Représentant(e) / Titre *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nom et fonction"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                    E-mail institutionnel *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@institution.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                  Nature de la structure *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1030] border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                >
                  <option value="Collectivité territoriale / Mairie">Mairie / Collectivité locale en RDC</option>
                  <option value="Entreprise / RSE">Entreprise privée & Programme RSE</option>
                  <option value="Agence de coopération">Agence de coopération internationale / Ambassade</option>
                  <option value="Fondation philanthropique">Fondation philanthropique ou ONG partenaire</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                  Brève description du protocole envisagé
                </label>
                <textarea
                  rows={3}
                  placeholder="Assainissement, mécénat financier, appui logistique, jumelage..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#2A3EB1] hover:bg-[#1B2A6B] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2"
              >
                <Handshake className="w-4 h-4 text-[#F7C600]" />
                <span>Initier un protocole de partenariat</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-[fadeIn_0.3s_ease-out]">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-display">
              Demande transmise à la présidence
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Nous vous remercions pour l’intérêt porté à la Fondation Pro-Congo. Le bureau des relations extérieures (Atlanta & Kongo-Central) étudiera votre dossier et vous soumettra une convention type d’action.
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
