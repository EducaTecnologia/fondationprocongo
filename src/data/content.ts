import heroPeopleImg from '../assets/images/hero_people_congo_1790205940535.jpg';
import heroActionImg from '../assets/images/hero_action_boma_1790205949960.jpg';
import heroHealthImg from '../assets/images/hero_health_care_1790205959462.jpg';
import projectAgriImg from '../assets/images/project_agriculture_1790205970258.jpg';
import leaderPortraitImg from '../assets/images/joe_nyakeru_executive_1790216333026.jpg';
import communityActionImg from '../assets/images/community_action_frontline_1790212542285.jpg';
import aidDistributionAerialImg from '../assets/images/aid_distribution_aerial_1790212557132.jpg';
import felixTshimangaImg from '../assets/images/felix_tshimanga_portrait_1790214209611.jpg';
import ninaTshimangaImg from '../assets/images/nina_tshimanga_portrait_1790214221561.jpg';
import rebeccaMulongoImg from '../assets/images/rebecca_mulongo_portrait_1790214232662.jpg';
import doudouNzangaImg from '../assets/images/doudou_nzanga_executive_1790216344257.jpg';
import fpcOfficialLogoImg from '../assets/images/fpc_official_logo_1790217896245.jpg';
import fpcLogoTransparentImg from '../assets/images/fpc_logo_transparent.png';

import { ProjectItem, TeamMember, NewsItem, ImpactStat, Language } from '../types';

export const IMAGES = {
  heroPeople: heroPeopleImg,
  heroAction: heroActionImg,
  heroHealth: heroHealthImg,
  projectAgri: projectAgriImg,
  leaderPortrait: leaderPortraitImg,
  communityAction: communityActionImg,
  aidDistributionAerial: aidDistributionAerialImg,
  officialLogo: fpcOfficialLogoImg,
  logoTransparent: fpcLogoTransparentImg,
};

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: 'beneficiaires',
    value: 120000,
    suffix: '+',
    label: 'Bénéficiaires directs',
    description: 'Enfants, mères et familles soutenus par nos programmes intégrés en RDC.'
  },
  {
    id: 'dechets',
    value: 45000,
    suffix: ' T',
    label: 'Déchets évacués',
    description: 'Tonnes de résidus ménagers et plastiques collectés et traités durablement.'
  },
  {
    id: 'communes',
    value: 14,
    suffix: '',
    label: 'Communes partenaires',
    description: 'Accords municipaux actifs garantissant un impact territorial durable.'
  },
  {
    id: 'provinces',
    value: 4,
    suffix: '',
    label: 'Pôles d’action en RDC',
    description: 'Kongo-Central (Boma, Matadi, Kabondo, Bas-Fleuve) et liaison nationale.'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'boma-bunkete',
    title: 'Opération « Boma Bunkete »',
    subtitle: 'Évacuation des déchets & régénération urbaine',
    location: 'Boma, Kongo-Central',
    image: heroActionImg,
    category: 'assainissement',
    description: 'Programme historique de salubrité publique mobilisant plus de 350 volontaires civiques pour l’évacuation systématique des décharges sauvages, le curage des caniveaux et le recyclage des plastiques.',
    stats: [
      { label: 'Résidus collectés', value: '32 000+ T' },
      { label: 'Volontaires de terrain', value: '350+' },
      { label: 'Quartiers assainis', value: '18 secteurs' }
    ],
    impactDetail: 'Enraye les risques d’inondation saisonnière et diminue considérablement l’incidence du paludisme et des maladies hydriques pour les riverains du fleuve Congo.'
  },
  {
    id: 'protocole-matadi',
    title: 'Protocole d’Assainissement de Matadi',
    subtitle: 'Canaux stratégiques & hygiène portuaire',
    location: 'Matadi, Kongo-Central',
    image: heroHealthImg,
    category: 'assainissement',
    description: 'Accord de partenariat stratégique avec la Mairie de Matadi pour la réhabilitation des réseaux de drainage, l’installation de points de collecte modernes et la sensibilisation éco-citoyenne.',
    stats: [
      { label: 'Canaux réhabilités', value: '24 km' },
      { label: 'Bacs écologiques', value: '120 unités' },
      { label: 'Ménages impactés', value: '45 000' }
    ],
    impactDetail: 'Protection des ravins contre l’érosion torrentielle et préservation sanitaire du premier pôle logistique maritime de la République Démocratique du Congo.'
  },
  {
    id: 'kabondo-communautaire',
    title: 'Développement Communautaire de Kabondo',
    subtitle: 'Infrastructures d’eau & résilience locale',
    location: 'Commune de Kabondo, Boma',
    image: heroPeopleImg,
    category: 'social',
    description: 'Convention pluriannuelle pour la fourniture d’eau potable, la rénovation des centres d’apprentissage pour jeunes et femmes, et l’appui aux initiatives locales de solidarité.',
    stats: [
      { label: 'Bornes fontaines', value: '16 actives' },
      { label: 'Jeunes formés', value: '820+' },
      { label: 'Micro-projets soutenus', value: '42' }
    ],
    impactDetail: 'Autonomisation concrète des groupements d’entraide féminins et scolarisation protégée pour les enfants en situation de grande précarité.'
  },
  {
    id: 'sante-alimentation',
    title: 'Programmes Santé & Alimentation Durable',
    subtitle: 'Nutrition maternelle & cliniques de proximité',
    location: 'Boma, Matadi & zones rurales Kongo-Central',
    image: projectAgriImg,
    category: 'agriculture',
    description: 'Fourniture de compléments nutritionnels thérapeutiques, appui aux coopératives vivrières locales (manioc, maïs, maraîchage) et cliniques mobiles de dépistage pédiatrique.',
    stats: [
      { label: 'Rations distribuées', value: '180 000+' },
      { label: 'Hectares cultivés', value: '250 ha' },
      { label: 'Consultations gratuites', value: '15 400' }
    ],
    impactDetail: 'Sécurité alimentaire locale garantie par circuit court agricole et réduction mesurable de la malnutrition infantile sévère dans les communautés cibles.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Joe Nyakeru',
    role: 'Président National / CEO',
    location: 'Siège National — RDC',
    image: leaderPortraitImg,
    bio: 'Leader visionnaire congolais engagé depuis plus de 15 ans au service des communautés défavorisées. Porte-voix inlassable de la dignité humaine, du renouveau civique et de la salubrité urbaine à travers toute la République.',
    quote: 'Notre mission sacrée est d’apporter une transformation concrète, visible et mesurable dans le quotidien de chaque famille congolaise.'
  },
  {
    name: 'Dr. Felix Tshimanga',
    role: 'Chief Operating Officer',
    location: 'Atlanta, USA',
    image: felixTshimangaImg,
    bio: 'Médecin spécialiste et gestionnaire chevronné des politiques de santé publique internationale. Supervise l’optimisation des chaînes d’approvisionnement médical, la logistique transatlantique et les standards d’intervention humanitaire.',
    quote: 'Chaque soin apporté, chaque canal assaini sauve des vies humaines de manière mesurable.'
  },
  {
    name: 'Nina Tshimanga',
    role: 'Chief Marketing Officer',
    location: 'Atlanta, USA',
    image: ninaTshimangaImg,
    bio: 'Stratège en communication institutionnelle et relations d’impact global. Orchestre la visibilité internationale de la fondation, la mobilisation philanthropique et le dialogue avec la diaspora africaine.',
    quote: 'Le Congo regorge de talents et de force vitale : notre rôle est de canaliser cette énergie pour le bien commun.'
  },
  {
    name: 'Rebecca Mulongo',
    role: 'Public Relations Officer',
    location: 'Atlanta, USA',
    image: rebeccaMulongoImg,
    bio: 'Experte en relations publiques et partenariats institutionnels transatlantiques. Coordonne le lien avec les institutions de développement, les fondations partenaires et les donateurs majeurs.',
    quote: 'Bâtir des passerelles pérennes entre la diaspora mondiale et les initiatives citoyennes au pays.'
  },
  {
    name: 'Doudou Nzanga',
    role: 'Directeur Provincial',
    location: 'Direction Provinciale — Kongo-Central, RDC',
    image: doudouNzangaImg,
    bio: 'Homme de terrain incontournable, fin connaisseur des réalités coutumières et urbaines du Kongo-Central. Dirige le déploiement opérationnel des équipes civiques à Boma, Matadi et dans le Bas-Fleuve.',
    quote: 'Sur le terrain, chaque heure de travail compte pour redonner la fierté à nos quartiers.'
  }
];

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

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Bilan semestriel de l’Opération « Boma Bunkete » : 45 000 tonnes évacuées et 18 quartiers assainis',
    date: '14 Mars 2026',
    category: 'Assainissement',
    readTime: '3 min',
    excerpt: 'La direction provinciale de la Fondation Pro-Congo dresse un bilan éclatant de la campagne de salubrité publique menée avec les autorités municipales de Boma.',
    content: [
      'Réunis à l’hôtel de ville de Boma, le Président National Joe Nyakeru et l’autorité urbaine ont officialisé les résultats sans précédent de la campagne d’assainissement urbain.',
      'Grâce à l’engagement sans faille de plus de 350 volontaires civiques équipés de matériel de protection moderne, les grands collecteurs d’eau de pluie ont été désengorgés avant l’arrivée des fortes pluies tropicales.',
      '« Nous avons transformé des dépotoirs insalubres en espaces communautaires sécurisés », a affirmé Doudou Nzanga, directeur provincial.'
    ],
    image: heroActionImg
  },
  {
    id: 'news-2',
    title: 'Signature du protocole historique avec la Mairie de Matadi pour la sauvegarde des ravins urbains',
    date: '28 Février 2026',
    category: 'Partenariats',
    readTime: '4 min',
    excerpt: 'Un accord-cadre ambitieux de trois ans vient d’être conclu pour protéger les quartiers vulnérables contre les érosions torrentielles et la pollution plastique.',
    content: [
      'La ville portuaire de Matadi fait face à des défis géomorphologiques majeurs. Ce nouveau protocole prévoit l’aménagement de digues végétalisées et la distribution de 120 bacs de tri sélectif.',
      'Le bureau international d’Atlanta soutient cette initiative en apportant des financements dédiés aux équipements d’ingénierie légère.',
      'Un programme éducatif touchera également 12 établissements scolaires municipaux pour inculquer les écogestes aux plus jeunes.'
    ],
    image: heroHealthImg
  },
  {
    id: 'news-3',
    title: 'Cliniques nutritionnelles mobiles : 1 200 mères et nourrissons pris en charge dans le Bas-Fleuve',
    date: '10 Février 2026',
    category: 'Santé & Nutrition',
    readTime: '3 min',
    excerpt: 'Face aux carences nutritionnelles qui frappent les zones enclavées, nos équipes médicales ont déployé des unités de dépistage précoce et d’assistance alimentaire.',
    content: [
      'Durant deux semaines de tournée intensive, les brigades de santé de la Fondation ont sillonné sept villages du Bas-Fleuve, administrant des compléments de vitamine A et des farines enrichies locales.',
      'Le Dr. Felix Tshimanga, COO, a salué le dévouement des infirmiers volontaires : « La santé d’un enfant est la racine même de l’avenir d’une nation ».'
    ],
    image: projectAgriImg
  }
];

export const I18N_STRINGS: Record<Language, {
  brandTagline: string;
  nav: {
    home: string;
    about: string;
    programs: string;
    projects: string;
    locations: string;
    team: string;
    supporters: string;
    news: string;
    otherWaysToDonate: string;
    contact: string;
    donate: string;
  };
  hero: {
    kicker: string;
    slide1Title: string;
    slide1Sub: string;
    slide1Cta1: string;
    slide1Cta2: string;
    slide2Title: string;
    slide2Sub: string;
    slide2Cta: string;
    slide3Title: string;
    slide3Sub: string;
    slide3Cta: string;
  };
  mission: {
    sectionKicker: string;
    title: string;
    manifestoQuote: string;
    p1: string;
    p2: string;
    p3: string;
    valuesTitle: string;
  };
  pillars: {
    sectionKicker: string;
    title: string;
    sub: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
  };
  humaneImpact: {
    kicker: string;
    word1: string;
    word2: string;
    word3: string;
    body: string;
    cta: string;
  };
  aerialSupport: {
    title: string;
    subtitle: string;
    donateBtn: string;
    otherWaysBtn: string;
  };
  action: {
    sectionKicker: string;
    title: string;
    sub: string;
    way1Title: string;
    way1Desc: string;
    way1Btn: string;
    way2Title: string;
    way2Desc: string;
    way2Btn: string;
    way3Title: string;
    way3Desc: string;
    way3Btn: string;
  };
}> = {
  fr: {
    brandTagline: 'En faveur du peuple Congolais',
    nav: {
      home: 'Accueil',
      about: 'À propos',
      programs: 'Programmes',
      projects: 'Projets',
      locations: 'Où nous agissons',
      team: 'Équipe',
      supporters: 'Qui nous soutient',
      news: 'Actualités',
      otherWaysToDonate: 'Autres façons de donner',
      contact: 'Contact',
      donate: 'Faire un don'
    },
    hero: {
      kicker: 'FONDATION PRO-CONGO',
      slide1Title: 'En faveur du peuple Congolais.',
      slide1Sub: 'Aux côtés des communautés de la RDC pour la santé, l’alimentation, l’assainissement et l’éducation.',
      slide1Cta1: 'Découvrir notre mission',
      slide1Cta2: 'Faire un don',
      slide2Title: 'Un Congo propre commence aujourd’hui.',
      slide2Sub: 'Opération Boma Bunkete : élimination des décharges, valorisation des déchets et renouveau civique.',
      slide2Cta: 'Voir nos projets',
      slide3Title: 'Santé et nourriture pour ceux qui en ont le plus besoin.',
      slide3Sub: 'Soins accessibles, cliniques pédiatriques et soutien direct aux coopératives agricoles vivrières.',
      slide3Cta: 'Soutenir un programme'
    },
    mission: {
      sectionKicker: 'NOTRE ENGAGEMENT EN RDC',
      title: 'Une force citoyenne inébranlable pour la dignité humaine.',
      manifestoQuote: '« En faveur du peuple Congolais. »',
      p1: 'La Fondation Pro-Congo est née d’une conviction vitale : aucune société ne peut prospérer tant que ses mères, ses enfants et ses aînés restent privés des droits élémentaires à une eau saine, à des soins dignes et à un repas quotidien.',
      p2: 'Depuis notre ancrage territorial au Kongo-Central jusqu’à notre réseau d’appui international à Atlanta, nous déployons une méthodologie d’action directe : concertation avec les autorités coutumières et municipales, mobilisation de brigades civiques locales et transparence rigoureuse.',
      p3: 'Chaque franc et chaque dollar mobilisé se traduit immédiatement par des camions bennes en action, des rations alimentaires distribuées et des vies protégées contre les maladies évitables.',
      valuesTitle: 'Nos 4 piliers d’intégrité'
    },
    pillars: {
      sectionKicker: 'DOMAINES D’INTERVENTION',
      title: 'Quatre axes stratégiques pour transformer la RDC.',
      sub: 'Une approche holistique répondant aux urgences vitales et construisant l’autonomie de demain.',
      p1Title: 'Agriculture & Alimentation',
      p1Desc: 'Appui aux coopératives vivrières, distribution de semences locales de manioc et de maïs, et sécurisation nutritionnelle des foyers ruraux.',
      p2Title: 'Services de Santé',
      p2Desc: 'Cliniques mobiles pédiatriques, distribution de kits d’urgence obstétricale et accès gratuit aux soins préventifs pour les indigents.',
      p3Title: 'Services Sociaux & Éducation',
      p3Desc: 'Protection de l’enfance vulnérable, centres d’apprentissage pour les femmes et bourses civiques d’insertion professionnelle.',
      p4Title: 'Assainissement & Environnement',
      p4Desc: 'Évacuation des macro-déchets, désensablement des collecteurs fluviaux, recyclage plastique et lutte contre les ravins d’érosion.'
    },
    humaneImpact: {
      kicker: 'AGIR SUR LE TERRAIN',
      word1: 'UNIR.',
      word2: 'AGIR.',
      word3: 'Changer.',
      body: 'L’inaction ne nettoiera pas nos avenues, ne soignera pas nos nourrissons et ne nourrira pas nos familles vulnérables. En République Démocratique du Congo, nos volontaires et brigades civiques se mobilisent chaque matin en première ligne. Rejoignez notre front citoyen.',
      cta: 'Devenir bénévole'
    },
    aerialSupport: {
      title: 'JE SOUHAITE SOUTENIR',
      subtitle: 'Diverses façons de donner (Mobile Money M-Pesa, Orange, Airtel, carte bancaire, PayPal et virement bancaire)',
      donateBtn: 'Faire un don maintenant',
      otherWaysBtn: 'Autres façons de donner'
    },
    action: {
      sectionKicker: 'AGIR AVEC NOUS',
      title: 'Trois manières décisives d’être aux côtés du peuple congolais.',
      sub: 'Chaque engagement accélère notre capacité de déploiement sur le terrain.',
      way1Title: 'Faire un don direct',
      way1Desc: 'Chaque dollar ou euro finance directement du matériel sanitaire, des rations alimentaires ou des journées d’assainissement.',
      way1Btn: 'Faire un don maintenant',
      way2Title: 'Devenir bénévole civique',
      way2Desc: 'Rejoignez nos brigades de terrain en RDC ou notre cellule de plaidoyer et d’expertise à l’international.',
      way2Btn: 'Rejoindre nos équipes',
      way3Title: 'Partenariat institutionnel',
      way3Desc: 'Vous représentez une commune, une entreprise responsable ou une agence de développement ? Bâtissons un protocole d’action.',
      way3Btn: 'Initier un partenariat'
    }
  },
  en: {
    brandTagline: 'In favor of the Congolese people',
    nav: {
      home: 'Home',
      about: 'About',
      programs: 'Programs',
      projects: 'Projects',
      locations: 'Where we act',
      team: 'Team',
      supporters: 'Who supports us',
      news: 'News',
      otherWaysToDonate: 'Other ways to give',
      contact: 'Contact',
      donate: 'Donate now'
    },
    hero: {
      kicker: 'PRO-CONGO FOUNDATION',
      slide1Title: 'In favor of the Congolese people.',
      slide1Sub: 'Standing alongside DRC communities for healthcare, food security, urban sanitation, and education.',
      slide1Cta1: 'Discover our mission',
      slide1Cta2: 'Donate now',
      slide2Title: 'A clean Congo begins today.',
      slide2Sub: 'Operation Boma Bunkete: clearing illegal landfills, plastic waste recycling, and community renewal.',
      slide2Cta: 'Explore our projects',
      slide3Title: 'Health and food for those who need it most.',
      slide3Sub: 'Accessible care, pediatric mobile clinics, and direct assistance to smallholder agricultural cooperatives.',
      slide3Cta: 'Support a program'
    },
    mission: {
      sectionKicker: 'OUR DRC COMMITMENT',
      title: 'An unwavering grassroots force for human dignity.',
      manifestoQuote: '"In favor of the Congolese people."',
      p1: 'The Pro-Congo Foundation was born from a vital conviction: no society can flourish while mothers, children, and elders lack basic access to clean water, dignified healthcare, and daily meals.',
      p2: 'From our operational roots in Kongo-Central to our international support hub in Atlanta, we deploy direct field actions in close coordination with local leaders and municipal authorities.',
      p3: 'Every contributed resource translates into visible impact: garbage trucks operating on city avenues, nutritious meals delivered, and families safeguarded against preventable illnesses.',
      valuesTitle: 'Our 4 Core Commitments'
    },
    pillars: {
      sectionKicker: 'AREAS OF IMPACT',
      title: 'Four strategic pillars transforming the DRC.',
      sub: 'A holistic framework responding to urgent needs while building community resilience.',
      p1Title: 'Food & Agriculture',
      p1Desc: 'Empowering farming cooperatives, distributing staple seeds (cassava & maize), and ensuring rural food sovereignty.',
      p2Title: 'Healthcare Services',
      p2Desc: 'Mobile pediatric clinics, obstetric kits, and free preventative health screenings for vulnerable families.',
      p3Title: 'Social Care & Education',
      p3Desc: 'Child protection programs, vocational training centers for women, and civic apprenticeships.',
      p4Title: 'Sanitation & Environment',
      p4Desc: 'Solid waste evacuation, river canal dredging, plastic recycling, and gully erosion mitigation.'
    },
    humaneImpact: {
      kicker: 'ON THE FRONTLINE',
      word1: 'UNITE.',
      word2: 'DISRUPT.',
      word3: 'Change.',
      body: 'Indifference will not clean our streets, treat suffering children, or feed struggling families. In the DRC, our changemakers and civic volunteers are on the ground every day. Join our front line for dignity and renewal.',
      cta: 'Become a volunteer'
    },
    aerialSupport: {
      title: 'I WANT TO SUPPORT',
      subtitle: 'Multiple ways to give (Mobile Money, credit card, PayPal, and direct wire transfer)',
      donateBtn: 'Donate now',
      otherWaysBtn: 'Other ways to give'
    },
    action: {
      sectionKicker: 'TAKE ACTION',
      title: 'Three decisive ways to stand with the Congolese people.',
      sub: 'Your commitment directly expands our reach and capability on the ground.',
      way1Title: 'Direct Donation',
      way1Desc: 'Every contribution funds essential medical kits, nutritious meals, or active days of municipal sanitation.',
      way1Btn: 'Donate now',
      way2Title: 'Civic Volunteering',
      way2Desc: 'Join our field brigades in DRC or contribute professional skills to our international advocacy network.',
      way2Btn: 'Join our volunteers',
      way3Title: 'Institutional Partnership',
      way3Desc: 'Represent a municipality, corporate CSR initiative, or development agency? Let us co-design high-impact projects.',
      way3Btn: 'Initiate partnership'
    }
  },
  pt: {
    brandTagline: 'Em favor do povo Congolês',
    nav: {
      home: 'Início',
      about: 'Sobre',
      programs: 'Programas',
      projects: 'Projetos',
      locations: 'Onde atuamos',
      team: 'Equipe',
      supporters: 'Quem nos apoia',
      news: 'Notícias',
      otherWaysToDonate: 'Outras formas de doar',
      contact: 'Contato',
      donate: 'Fazer uma doação'
    },
    hero: {
      kicker: 'FUNDAÇÃO PRO-CONGO',
      slide1Title: 'Em favor do povo Congolês.',
      slide1Sub: 'Ao lado das comunidades da RDC pela saúde, alimentação, saneamento e educação digna.',
      slide1Cta1: 'Conhecer nossa missão',
      slide1Cta2: 'Fazer uma doação',
      slide2Title: 'Um Congo limpo começa hoje.',
      slide2Sub: 'Operação Boma Bunkete: eliminação de lixões clandestinos, reciclagem e renovação comunitária.',
      slide2Cta: 'Ver nossos projetos',
      slide3Title: 'Saúde e alimento para quem mais precisa.',
      slide3Sub: 'Atendimento médico acessível, clínicas móveis pediátricas e apoio às cooperativas agrícolas familiares.',
      slide3Cta: 'Apoiar um programa'
    },
    mission: {
      sectionKicker: 'NOSSO COMPROMISSO NA RDC',
      title: 'Uma força cidadã inabalável pela dignidade humana.',
      manifestoQuote: '« Em favor do povo Congolês. »',
      p1: 'A Fundação Pro-Congo nasceu de uma certeza inegociável: nenhuma nação floresce enquanto mães, crianças e idosos forem privados de água potável, saúde digna e alimento cotidiano.',
      p2: 'Desde a nossa base no Kongo-Central até o núcleo de apoio internacional em Atlanta, atuamos com equipes locais, em estreita articulação com lideranças tradicionais e prefeituras municipais.',
      p3: 'Cada recurso mobilizado se converte em caminhões de coleta rodando, refeições distribuídas e proteção contra enfermidades evitáveis.',
      valuesTitle: 'Nossos 4 pilares de integridade'
    },
    pillars: {
      sectionKicker: 'EIXOS DE ATUAÇÃO',
      title: 'Quatro pilares estratégicos para transformar a RDC.',
      sub: 'Uma abordagem integrada que atende às emergências vitais e constrói a soberania comunitária.',
      p1Title: 'Agricultura & Alimentação',
      p1Desc: 'Fortalecimento de cooperativas agrícolas familiares, sementes de mandioca e milho, e segurança alimentar comunitária.',
      p2Title: 'Serviços de Saúde',
      p2Desc: 'Clínicas móveis pediátricas, suprimentos obstétricos e atendimento de triagem gratuito para famílias vulneráveis.',
      p3Title: 'Serviços Sociais & Educação',
      p3Desc: 'Acolhimento de crianças vulneráveis, centros de capacitação profissional feminina e bolsas de inclusão comunitária.',
      p4Title: 'Saneamento & Meio Ambiente',
      p4Desc: 'Remoção de resíduos sólidos urbanos, desassoreamento de canais de drenagem, reciclagem plástica e controle de erosão.'
    },
    humaneImpact: {
      kicker: 'AÇÃO DE LINHA DE FRENTE',
      word1: 'UNIR.',
      word2: 'AGIR.',
      word3: 'Mudar.',
      body: 'A inércia não vai limpar nossas ruas, curar crianças enfermas ou alimentar famílias necessitadas. Na República Democrática do Congo, nossos voluntários e agentes cívicos atuam na linha de frente todos os dias. Junte-se ao nosso movimento.',
      cta: 'Ser voluntário'
    },
    aerialSupport: {
      title: 'QUERO APOIAR',
      subtitle: 'Diversas formas de doar (Mobile Money, boleto, pix, cartão de crédito, picpay e PayPal)',
      donateBtn: 'Doe agora',
      otherWaysBtn: 'Outras formas de doar'
    },
    action: {
      sectionKicker: 'COMO AGIR',
      title: 'Três formas decisivas de apoiar o povo congolês.',
      sub: 'O seu engajamento acelera a nossa capacidade de agir diretamente no terreno.',
      way1Title: 'Doação Direta',
      way1Desc: 'Cada valor financia insumos médicos, refeições equilibradas ou jornadas de limpeza urbana na RDC.',
      way1Btn: 'Doar agora',
      way2Title: 'Voluntariado Cidadão',
      way2Desc: 'Junte-se às nossas brigadas na RDC ou contribua com trabalho voluntário em nossas células internacionais.',
      way2Btn: 'Quero ser voluntário',
      way3Title: 'Parceria Institucional',
      way3Desc: 'Representa uma prefeitura, empresa social ou órgão de cooperação? Vamos firmar um protocolo de atuação.',
      way3Btn: 'Iniciar parceria'
    }
  },
  es: {
    brandTagline: 'En favor del pueblo Congoleño',
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      programs: 'Programas',
      projects: 'Proyectos',
      locations: 'Dónde actuamos',
      team: 'Equipo',
      supporters: 'Quién nos apoya',
      news: 'Noticias',
      otherWaysToDonate: 'Otras formas de donar',
      contact: 'Contacto',
      donate: 'Hacer una donación'
    },
    hero: {
      kicker: 'FUNDACIÓN PRO-CONGO',
      slide1Title: 'En favor del pueblo Congoleño.',
      slide1Sub: 'Junto a las comunidades de la RDC por la salud, alimentación, saneamiento y educación digna.',
      slide1Cta1: 'Conocer nuestra misión',
      slide1Cta2: 'Donar ahora',
      slide2Title: 'Un Congo limpio comienza hoy.',
      slide2Sub: 'Operación Boma Bunkete: erradicación de vertederos, reciclaje y renacimiento cívico.',
      slide2Cta: 'Ver proyectos',
      slide3Title: 'Salud y alimentos para quienes más lo necesitan.',
      slide3Sub: 'Atención accesible, brigadas pediátricas y apoyo directo a cooperativas agrícolas.',
      slide3Cta: 'Apoyar programa'
    },
    mission: {
      sectionKicker: 'NUESTRO COMPROMISO EN LA RDC',
      title: 'Una fuerza ciudadana inquebrantable por la dignidad humana.',
      manifestoQuote: '« En favor del pueblo Congoleño. »',
      p1: 'La Fundación Pro-Congo nació de una convicción vital: ninguna sociedad puede prosperar mientras madres, niños y ancianos carezcan de agua limpia, salud digna y alimentación diaria.',
      p2: 'Desde nuestra base en Kongo-Central hasta nuestro enlace internacional en Atlanta, desplegamos acción directa en el terreno en colaboración con autoridades locales y líderes comunitarios.',
      p3: 'Cada aporte se traduce inmediatamente en camiones de limpieza activos, raciones nutritivas entregadas y vidas protegidas contra epidemias evitables.',
      valuesTitle: 'Nuestros 4 pilares de integridad'
    },
    pillars: {
      sectionKicker: 'ÁREAS DE IMPACTO',
      title: 'Cuatro ejes estratégicos para transformar la RDC.',
      sub: 'Un enfoque integral que atiende la emergencia y construye resiliencia comunitaria duradera.',
      p1Title: 'Agricultura & Alimentación',
      p1Desc: 'Apoyo a cooperativas agrarias, dotación de semillas de yuca y maíz, y soberanía alimentaria.',
      p2Title: 'Servicios de Salud',
      p2Desc: 'Clínicas móviles pediátricas, kits de parto seguro y consultas gratuitas en zonas vulnerables.',
      p3Title: 'Acción Social & Educación',
      p3Desc: 'Protección infantil, talleres vocacionales para mujeres y becas cívicas de formación técnica.',
      p4Title: 'Saneamiento Urbano & Ambiente',
      p4Desc: 'Desalojo masivo de basura, desazolve de canales de drenaje y reciclaje de plásticos en Boma y Matadi.'
    },
    humaneImpact: {
      kicker: 'EN PRIMERA LÍNEA',
      word1: 'UNIR.',
      word2: 'ACTUAR.',
      word3: 'Cambiar.',
      body: 'La indiferencia no limpiará nuestras calles ni alimentará a los niños vulnerables. En la RDC, nuestros brigadistas y voluntarios están cada día en la primera línea comunitaria. Únete a nuestro frente de acción.',
      cta: 'Ser voluntario'
    },
    aerialSupport: {
      title: 'QUIERO APOYAR',
      subtitle: 'Múltiples formas de donar (Mobile Money, tarjeta de crédito, PayPal y transferencia bancaria)',
      donateBtn: 'Donar ahora',
      otherWaysBtn: 'Otras formas de donar'
    },
    action: {
      sectionKicker: 'ACTÚA CON NOSOTROS',
      title: 'Tres formas directas de respaldar al pueblo congoleño.',
      sub: 'Tu compromiso multiplica nuestra fuerza operativa en el terreno.',
      way1Title: 'Donación Directa',
      way1Desc: 'Cada aporte financia medicamentos esenciales, alimentos y jornadas de saneamiento urbano.',
      way1Btn: 'Donar ahora',
      way2Title: 'Voluntariado Cívico',
      way2Desc: 'Únete a nuestras cuadrillas de campo en la RDC o a nuestra red internacional de apoyo.',
      way2Btn: 'Quiero ser voluntario',
      way3Title: 'Alianzas Institucionales',
      way3Desc: '¿Representas a una alcaldía, empresa con RSE o agencia internacional? Creemos un acuerdo de impacto.',
      way3Btn: 'Iniciar alianza'
    }
  },
  ar: {
    brandTagline: 'من أجل شعب الكونغو',
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      programs: 'البرامج',
      projects: 'المشاريع',
      locations: 'أين نعمل',
      team: 'فريق العمل',
      supporters: 'من يدعمنا',
      news: 'الأخبار',
      otherWaysToDonate: 'طرق أخرى للتبرع',
      contact: 'اتصل بنا',
      donate: 'تبرع الآن'
    },
    hero: {
      kicker: 'مؤسسة برو-كونغو',
      slide1Title: 'من أجل كرامة شعب الكونغو.',
      slide1Sub: 'إلى جانب مجتمعات جمهورية الكونغو الديمقراطية في مجالات الصحة والغذاء والنظافة الحضرية والتعليم.',
      slide1Cta1: 'اكتشف مهمتنا',
      slide1Cta2: 'تبرع الآن',
      slide2Title: 'كونغو نظيفة تبدأ اليوم.',
      slide2Sub: 'عملية بوما بونكيتي: إزالة المكبات العشوائية، وإعادة التدوير، والنهوض المدني المجتمعي.',
      slide2Cta: 'استكشف مشاريعنا',
      slide3Title: 'الصحة والغذاء لمن هم في أشد الحاجة.',
      slide3Sub: 'عيادات أطفال متنقلة، ومكملات غذائية، ودعم مباشر للتعاونيات الزراعية الأسرية.',
      slide3Cta: 'ادعم برامجنا'
    },
    mission: {
      sectionKicker: 'التزامنا الميداني في الكونغو',
      title: 'قوة مجتمعية راسخة من أجل الكرامة الإنسانية.',
      manifestoQuote: '«من أجل شعب الكونغو.»',
      p1: 'تأسست مؤسسة برو-كونغو من قناعة حتمية: لا يمكن لأي مجتمع أن يزدهر بينما تفتقر الأمهات والأطفال إلى المياه النظيفة والرعاية الصحية ووجبة اليوم.',
      p2: 'من مراكزنا في كونغو الوسطى إلى شبكة الدعم الدولية في أتلانتا، ننفذ تدخلاً ميدانياً مباشراً بالتعاون مع السلطات المحلية والبلدية.',
      p3: 'كل تبرع يتحول مباشرة إلى شاحنات نظافة تعمل في الشوارع، ووجبات تُوزع، وحماية للمرضى من الأوبئة.',
      valuesTitle: 'أركان النزاهة الأربعة'
    },
    pillars: {
      sectionKicker: 'مجالات العمل',
      title: 'أربعة محاور استراتيجية للنهوض بجمهورية الكونغو.',
      sub: 'نهج متكامل يواكب الطوارئ العاجلة ويبني استقلالية الغد.',
      p1Title: 'الزراعة والأمن الغذائي',
      p1Desc: 'دعم التعاونيات الزراعية المحلية، وتوزيع البذور عالية الجودة، وضمان استدامة الغذاء.',
      p2Title: 'الخدمات الصحية',
      p2Desc: 'عيادات أطفال متنقلة، وتوزيع حقائب الولادة الآمنة، وتقديم الرعاية المجانية للمحتاجين.',
      p3Title: 'التعليم والخدمات الاجتماعية',
      p3Desc: 'حماية الأطفال الأيتام، ومراكز التدريب المهني للنساء، ودعم المبادرات الشبابية.',
      p4Title: 'الإصحاح البيئي والنظافة الحضرية',
      p4Desc: 'إزالة النفايات الصلبة، وتجريف قنوات تصريف المياه، ومكافحة التآكل وانسداد السيول.'
    },
    humaneImpact: {
      kicker: 'في الخطوط الأمامية',
      word1: 'نتحد.',
      word2: 'نعمل.',
      word3: 'نغير.',
      body: 'الانتظار لن ينظف شوارعنا ولن يشفي أطفالنا. في جمهورية الكونغو الديمقراطية، تتواجد فرقنا التطوعية الميدانية كل يوم في طليعة العمل الإنساني. انضم إلى صفوف التغيير.',
      cta: 'كن متطوعاً معنا'
    },
    aerialSupport: {
      title: 'أرغب في الدعم',
      subtitle: 'طرق متعددة للتبرع (محافظ الهاتف المحمول، البطاقات البنكية، وباي بال، والتحويل البنكي المباشر)',
      donateBtn: 'تبرع الآن',
      otherWaysBtn: 'طرق أخرى للتبرع'
    },
    action: {
      sectionKicker: 'شارك معنا',
      title: 'ثلاث طرق مباشرة للوقوف بجانب شعب الكونغو.',
      sub: 'مشاركتك تضاعف من قدرتنا على التحرك والنجدة في الميدان.',
      way1Title: 'تبرع مباشر',
      way1Desc: 'كل مبلغ يساهم في توفير أدوية، وجبات غذائية، ومعدات إصحاح بيئي.',
      way1Btn: 'تبرع الآن',
      way2Title: 'التطوع المدني',
      way2Desc: 'انضم لفرقنا الميدانية في الكونغو أو ساهم بخبرتك في مكاتبنا الدولية.',
      way2Btn: 'انضم لفرقنا',
      way3Title: 'شراكات مؤسسية',
      way3Desc: 'هل تمثل بلدية أو شركة مسؤولة اجتماعياً؟ فلنبنِ معاً اتفاقية عمل مشتركة.',
      way3Btn: 'ابدأ الشراكة'
    }
  },
  zh: {
    brandTagline: '造福刚果人民',
    nav: {
      home: '首页',
      about: '关于我们',
      programs: '核心项目',
      projects: '行动成果',
      locations: '工作区域',
      team: '领导团队',
      supporters: '谁在支持我们',
      news: '前线动态',
      otherWaysToDonate: '更多捐助途径',
      contact: '联系我们',
      donate: '立即捐助'
    },
    hero: {
      kicker: 'PRO-CONGO 基金会',
      slide1Title: '造福刚果人民。',
      slide1Sub: '与刚果（金）社区并肩作战，专注公共医疗、食品安全、城市卫生和有尊严的教育。',
      slide1Cta1: '了解我们的使命',
      slide1Cta2: '立即捐赠',
      slide2Title: '建设洁净刚果，从今天启程。',
      slide2Sub: '博马清洁行动（Boma Bunkete）：清除违规垃圾场、塑料循环处理与社区焕新。',
      slide2Cta: '查看重点项目',
      slide3Title: '将健康与希望送到最需要的人身边。',
      slide3Sub: '平价医疗救助、流动儿科诊所及对本地小农合作社的全力扶持。',
      slide3Cta: '支持项目'
    },
    mission: {
      sectionKicker: '我们在刚果（金）的承诺',
      title: '维护人类尊严的坚定草根力量。',
      manifestoQuote: '“造福刚果人民。”',
      p1: 'Pro-Congo 基金会源于一个不可妥协的信念：如果母亲、儿童与长者无法获得洁净水源、基本医疗与一日三餐，任何社会都无法实现真正的繁荣。',
      p2: '从中刚果省的基层据点到亚特兰大的国际协作网络，我们与地方政府和传统长者紧密配合，推行透明高效的现场直接援助。',
      p3: '每一笔善款都化作行驶在城市街道上的清洁工程车、分发的营养餐食以及免受疾病威胁的健康生命。',
      valuesTitle: '四大诚信基石'
    },
    pillars: {
      sectionKicker: '重点领域',
      title: '改善刚果（金）社区的四大战略支柱。',
      sub: '全方位应对紧急生存危机，构建长效社区自主能力。',
      p1Title: '农业与粮食安全',
      p1Desc: '扶持家庭农业合作社，分发木薯与玉米优良粮种，保障农村粮食自主。',
      p2Title: '基层医疗卫生',
      p2Desc: '流动儿科诊所、母婴安全分娩包，以及针对贫困家庭的免费筛查救治。',
      p3Title: '社会帮扶与教育',
      p3Desc: '弱势孤儿保护、妇女职业技能培训中心及青年社区赋能奖学金。',
      p4Title: '城市环境与卫生整治',
      p4Desc: '城市固废清理转运、雨水渠疏浚排涝、废旧塑料回收与水土流失防治。'
    },
    humaneImpact: {
      kicker: '一线实干行动',
      word1: '凝聚。',
      word2: '破局。',
      word3: '改变。',
      body: '漠视无法清理泛滥的垃圾，也无法治愈病弱的儿童。在刚果（金），我们的志愿者与基层工作者每天都在一线行动。加入我们，共同捍卫尊严与希望。',
      cta: '加入志愿者行列'
    },
    aerialSupport: {
      title: '我 要 支 持',
      subtitle: '多种捐款途径（刚果当地移动支付 Mobile Money、信用卡、国际银行电汇与 PayPal）',
      donateBtn: '立即捐赠',
      otherWaysBtn: '更多捐赠途径'
    },
    action: {
      sectionKicker: '与我们同行',
      title: '支持刚果人民的三种有力途径。',
      sub: '您的每一份支持，都将迅速转化为前线实实在在的行动力。',
      way1Title: '直接捐赠',
      way1Desc: '每一美元都直接用于医疗急救包、营养餐或城市清淤作业。',
      way1Btn: '立即捐赠',
      way2Title: '志愿服务',
      way2Desc: '加入我们在刚果（金）的行动大队，或在线参与国际专业志愿服务。',
      way2Btn: '成为志愿者',
      way3Title: '机构战略合作',
      way3Desc: '您是政府机构、企业社会责任部门或公益组织？欢迎共建深度合作。',
      way3Btn: '开启合作'
    }
  }
};
