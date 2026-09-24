import heroPeopleImg from '../assets/images/hero_people_congo_1790205940535.jpg';
import heroActionImg from '../assets/images/hero_action_boma_1790205949960.jpg';
import heroHealthImg from '../assets/images/hero_health_care_1790205959462.jpg';
import projectAgriImg from '../assets/images/project_agriculture_1790205970258.jpg';
import leaderPortraitImg from '../assets/images/joe_nyakeru_executive_1790216333026.jpg';
import communityActionImg from '../assets/images/community_action_frontline_1790212542285.jpg';
import aidDistributionAerialImg from '../assets/images/aid_distribution_aerial_1790212557132.jpg';
import placideBaundjaImg from '../assets/images/placide_baundja_portrait.jpg';
import maxDeCastroImg from '../assets/images/max_de_castro_portrait.jpg';
import sandroMonteiroImg from '../assets/images/sandro_monteiro_portrait.jpg';
import fpcOfficialLogoImg from '../assets/images/fpc_official_logo_1790217896245.jpg';
import fpcLogoTransparentImg from '../assets/images/fpc_logo_transparent.png';

import { ProjectItem, TeamMember, NewsItem, ImpactStat, Language } from '../types';
import { TRANSLATIONS, getTranslation } from './i18n';

export { TRANSLATIONS, getTranslation };
export * from './i18n/types';

export const IMAGES = {
  heroPeople: heroPeopleImg,
  heroAction: heroActionImg,
  heroHealth: heroHealthImg,
  projectAgri: projectAgriImg,
  leaderPortrait: leaderPortraitImg,
  communityAction: communityActionImg,
  aidDistributionAerial: aidDistributionAerialImg,
  placideBaundja: placideBaundjaImg,
  maxDeCastro: maxDeCastroImg,
  sandroMonteiro: sandroMonteiroImg,
  officialLogo: fpcOfficialLogoImg,
  logoTransparent: fpcLogoTransparentImg,
};

export const IMPACT_STATS: ImpactStat[] = TRANSLATIONS.fr.impactStats.items;
export const PROJECTS_DATA: ProjectItem[] = TRANSLATIONS.fr.projects.items;
export const TEAM_MEMBERS: TeamMember[] = TRANSLATIONS.fr.team.members;
export const NEWS_DATA: NewsItem[] = TRANSLATIONS.fr.news.items;

export interface PartnerOrg {
  name: string;
  category: string;
  role: string;
  logoText: string;
  badgeColor: string;
}

export const PARTNERS_LIST: PartnerOrg[] = [
  {
    name: 'Mairie de Boma',
    category: 'Hôtel de Ville',
    role: 'Partenaire Institutionnel — Opération Boma Bunkete',
    logoText: 'BOMA',
    badgeColor: 'bg-red-600 text-white'
  },
  {
    name: 'Ville de Matadi',
    category: 'Mairie Provinciale',
    role: 'Convention d’Assainissement Urbain & Drainage',
    logoText: 'MATADI',
    badgeColor: 'bg-blue-600 text-white'
  },
  {
    name: 'Commune de Kabondo',
    category: 'Collectivité Locale',
    role: 'Accord de Développement & Accès à l’Eau Potable',
    logoText: 'KABONDO',
    badgeColor: 'bg-amber-600 text-white'
  },
  {
    name: 'Ministère de la Santé Publique RDC',
    category: 'Gouvernement',
    role: 'Agrément Technique & Campagnes Pédiatriques',
    logoText: 'SANTÉ RDC',
    badgeColor: 'bg-emerald-600 text-white'
  },
  {
    name: 'Rawbank RDC',
    category: 'Entreprise Partenaire RSE',
    role: 'Appui Logistique aux Brigades Civiques',
    logoText: 'RAWBANK',
    badgeColor: 'bg-yellow-500 text-slate-900'
  },
  {
    name: 'Vodacom Congo',
    category: 'Fondation Vodacom RSE',
    role: 'Soutien aux Réseaux de Télécom & Solidarité',
    logoText: 'VODACOM',
    badgeColor: 'bg-red-500 text-white'
  },
  {
    name: 'Bralima — Fondation Heineken RDC',
    category: 'Industrie & RSE',
    role: 'Programme Salubrité Urbaine & Recyclage',
    logoText: 'BRALIMA',
    badgeColor: 'bg-green-700 text-white'
  },
  {
    name: 'PNUD République Démocratique du Congo',
    category: 'Coopération Internationale',
    role: 'Accompagnement ODD & Résilience Communautaire',
    logoText: 'PNUD RDC',
    badgeColor: 'bg-sky-600 text-white'
  }
];

export const I18N_STRINGS = TRANSLATIONS;
