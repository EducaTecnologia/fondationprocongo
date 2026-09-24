import { TranslationSchema } from './types';
import heroPeopleImg from '../../assets/images/hero_people_congo_1790205940535.jpg';
import heroActionImg from '../../assets/images/hero_action_boma_1790205949960.jpg';
import heroHealthImg from '../../assets/images/hero_health_care_1790205959462.jpg';
import projectAgriImg from '../../assets/images/project_agriculture_1790205970258.jpg';
import leaderPortraitImg from '../../assets/images/joe_nyakeru_executive_1790216333026.jpg';
import placideBaundjaImg from '../../assets/images/placide_baundja_portrait.jpg';
import maxDeCastroImg from '../../assets/images/max_de_castro_portrait.jpg';
import sandroMonteiroImg from '../../assets/images/sandro_monteiro_portrait.jpg';

export const frTranslations: TranslationSchema = {
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
  preloader: {
    skip: 'Passer l’introduction',
    loading: 'Chargement de la mission...',
    slides: [
      {
        title: 'Opération « Boma Bunkete » — Salubrité urbaine',
        location: 'Boma, Kongo-Central',
        tag: 'Assainissement & Salubrité'
      },
      {
        title: 'Soins primaires & cliniques pédiatriques mobiles',
        location: 'Matadi & Bas-Fleuve',
        tag: 'Santé & Urgence Médicale'
      },
      {
        title: 'Souveraineté alimentaire & soutien aux coopératives',
        location: 'Kongo-Central',
        tag: 'Agriculture Vivrière'
      },
      {
        title: 'Protection de l’enfance & formation aux métiers',
        location: 'Kabondo, Boma',
        tag: 'Développement Communautaire'
      },
      {
        title: 'Acheminement logistique des secours d’urgence',
        location: 'République Démocratique du Congo',
        tag: 'Secours Humanitaire'
      }
    ]
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
    badgeRdc: '🇨🇩 RDC — Kongo-Central',
    oathDesc: 'Un serment d’action inconditionnel scellé au cœur de nos statuts officiels et incarné au quotidien dans les rues de Boma, Matadi et à travers tout le Kongo-Central.',
    ngoLegalCert: 'ONG officiellement agréée par les lois de la République Démocratique du Congo',
    p1: 'La Fondation Pro-Congo est née d’une conviction vitale : aucune société ne peut prospérer tant que ses mères, ses enfants et ses aînés restent privés des droits élémentaires à une eau saine, à des soins dignes et à un repas quotidien.',
    p2: 'Depuis notre ancrage territorial au Kongo-Central jusqu’à notre réseau d’appui international à Atlanta, nous déployons une méthodologie d’action directe : concertation avec les autorités coutumières et municipales, mobilisation de brigades civiques locales et transparence rigoureuse.',
    p3: 'Chaque franc et chaque dollar mobilisé se traduit immédiatement par des camions bennes en action, des rations alimentaires distribuées et des vies protégées contre les maladies évitables.',
    valuesTitle: 'Nos 4 piliers d’intégrité',
    values: [
      {
        title: 'Action Directe de Terrain',
        desc: 'Présence permanente auprès des chefs de quartiers, autorités coutumières et familles les plus vulnérables.'
      },
      {
        title: 'Transparence & Rigueur Absolue',
        desc: 'Chaque franc et dollar investi est alloué avec traçabilité intégrale, audit indépendant et reporting public vérifiable.'
      },
      {
        title: 'Ancrage & Souveraineté Locale',
        desc: 'Nos projets sont portés par des citoyens congolais formés et rémunérés dignement pour transformer leur propre cité.'
      },
      {
        title: 'Dignité Populaire & Pérennité',
        desc: 'Dépasser l’assistanat ponctuel pour construire des infrastructures durables et redonner la fierté civique aux communautés.'
      }
    ]
  },
  impactStats: {
    sectionKicker: 'PREUVES DE TERRAIN',
    title: 'L’impact mesurable de notre action en RDC',
    sub: 'Des résultats concrets certifiés par nos relevés opérationnels municipaux au Kongo-Central.',
    items: [
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
    ]
  },
  pillars: {
    sectionKicker: 'DOMAINES D’INTERVENTION',
    title: 'Quatre axes stratégiques pour transformer la RDC.',
    sub: 'Une approche holistique répondant aux urgences vitales et construisant l’autonomie de demain.',
    donateToPillar: 'Soutenir cet axe',
    items: [
      {
        id: 'agriculture',
        title: 'Agriculture & Alimentation',
        desc: 'Appui aux coopératives vivrières, distribution de semences locales de manioc et de maïs, et sécurisation nutritionnelle des foyers ruraux.',
        tag: 'Autonomie Vivrière',
        keyPoints: [
          'Appui direct à 250 hectares de cultures vivrières (manioc, maïs, maraîchage)',
          'Dotation en semences sélectionnées et outillage moderne',
          'Circuits courts reliant les paysans aux cantines et marchés urbains'
        ]
      },
      {
        id: 'sante',
        title: 'Services de Santé',
        desc: 'Cliniques mobiles pédiatriques, distribution de kits d’urgence obstétricale et accès gratuit aux soins préventifs pour les indigents.',
        tag: 'Soins de Première Ligne',
        keyPoints: [
          'Unités médicales mobiles pour les villages isolés du Bas-Fleuve',
          'Dépistage précoce de la malnutrition et supplémentation vitaminique',
          'Kits d’accouchement hygiénique et maternité sécurisée'
        ]
      },
      {
        id: 'social',
        title: 'Services Sociaux & Éducation',
        desc: 'Protection de l’enfance vulnérable, centres d’apprentissage pour les femmes et bourses civiques d’insertion professionnelle.',
        tag: 'Inclusion & Avenir',
        keyPoints: [
          'Foyer d’accueil et réinsertion scolaire des enfants en situation de rue',
          'Centres de formation technique et couture pour mères célibataires',
          'Bourses de soutien civique pour étudiants méritants de la RDC'
        ]
      },
      {
        id: 'assainissement',
        title: 'Assainissement & Environnement',
        desc: 'Évacuation des macro-déchets, désensablement des collecteurs fluviaux, recyclage plastique et lutte contre les ravins d’érosion.',
        tag: 'Salubrité & Climat',
        keyPoints: [
          'Campagnes massives de curage de caniveaux et grands collecteurs',
          'Unités de tri et valorisation des déchets plastiques urbains',
          'Ouvrages de stabilisation des sols contre les ravins d’érosion'
        ]
      }
    ]
  },
  humaneImpact: {
    kicker: 'AGIR SUR LE TERRAIN',
    word1: 'UNIR.',
    word2: 'AGIR.',
    word3: 'Changer.',
    body: 'L’inaction ne nettoiera pas nos avenues, ne soignera pas nos nourrissons et ne nourrira pas nos familles vulnérables. En République Démocratique du Congo, nos volontaires et brigades civiques se mobilisent chaque matin en première ligne. Rejoignez notre front citoyen.',
    cta: 'Devenir bénévole'
  },
  projects: {
    sectionKicker: 'ACTIONS PHARES SUR LE TERRAIN',
    title: 'Des réalisations tangibles au service des populations',
    sub: 'Découvrez nos opérations prioritaires menées en première ligne avec les collectivités territoriales et les comités de quartier de la RDC.',
    benefitLabel: 'Bénéfice direct pour les populations',
    supervisedBy: 'Supervisé par la Direction Provinciale',
    supportBtn: 'Soutenir ce projet',
    items: [
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
    ]
  },
  map: {
    sectionKicker: 'ANCRAGE GÉOGRAPHIQUE',
    title: 'Où nous intervenons sur le territoire congolais',
    sub: 'Cliquez sur chaque pôle pour explorer nos chantiers permanents et nos protocoles municipaux.',
    activeCountPill: '4 Pôles Opérationnels Actifs',
    locations: [
      {
        id: 'boma',
        name: 'Boma',
        zone: 'Ville historique & Port fluvial',
        title: 'Opération « Boma Bunkete » & Salubrité Municipale',
        desc: 'Quartier général des brigades civiques de la Fondation Pro-Congo. Évacuation massive des décharges sauvages, réhabilitation des collecteurs et recyclage plastique.',
        stats: '32 000+ tonnes évacuées • 350 volontaires civiques',
        activeInitiatives: [
          'Collecte systématique des déchets solides ménagers',
          'Curage des caniveaux le long des grands axes',
          'Sensibilisation des comités de quartier'
        ]
      },
      {
        id: 'matadi',
        name: 'Matadi',
        zone: 'Chef-lieu provincial & Port Maritime',
        title: 'Protocole Urbain de Drainage & Protection Sanitaire',
        desc: 'Partenariat direct avec l’Hôtel de Ville de Matadi pour stabiliser les zones d’érosion torrentielle et équiper les quais et marchés de conteneurs étanches.',
        stats: '24 km de canaux curés • 120 bacs écologiques installés',
        activeInitiatives: [
          'Endiguement végétalisé des ravins',
          'Dispositifs d’assainissement du port de Matadi',
          'Campagnes de propreté dans les écoles communales'
        ]
      },
      {
        id: 'kabondo',
        name: 'Commune de Kabondo',
        zone: 'Boma Est',
        title: 'Pôle d’Appui Communautaire & Accès à l’Eau',
        desc: 'Réseau de bornes-fontaines communautaires d’eau potable, réhabilitation de l’école de métiers pour jeunes filles et appui nutritionnel aux orphelins.',
        stats: '16 bornes-fontaines en service • 820 jeunes diplômés',
        activeInitiatives: [
          'Maintenance citoyenne des adductions d’eau',
          'Ateliers d’artisanat et d’insertion professionnelle',
          'Aide d’urgence aux mères isolées'
        ]
      },
      {
        id: 'bas-fleuve',
        name: 'District du Bas-Fleuve',
        zone: 'Ceinture Agro-Rurale (Lukula / Tshela)',
        title: 'Souveraineté Alimentaire & Brigades Médicales',
        desc: 'Appui logistique et semencier aux coopératives paysannes villageoises et déploiement de cliniques médicales pédiatriques mobiles.',
        stats: '250 hectares cultivés • 180 000 rations distribuées',
        activeInitiatives: [
          'Multiplication de semences saines de manioc',
          'Cliniques de dépistage pédiatrique gratuites',
          'Distribution de farine enrichie locale'
        ]
      }
    ]
  },
  team: {
    sectionKicker: 'GOUVERNANCE & DIRECTION',
    title: 'Une équipe engagée au service du peuple',
    sub: 'Une gouvernance d’excellence alliant le commandement opérationnel direct sur le terrain en RDC et des relais stratégiques internationaux (États-Unis, Brésil, Espagne, Japon).',
    presidentCardBadge: 'Présidence Exécutive',
    activeMandate: 'Mandat Actif',
    strategicVisionSubtitle: 'Fondation Pro-Congo — Leadership & Vision Stratégique',
    directorsHeader: 'Direction Opérationnelle & Pôles Internationaux',
    members: [
      {
        name: 'Joe Nyakeru',
        role: 'Président National / CEO',
        location: 'Siège National — République Démocratique du Congo',
        image: leaderPortraitImg,
        bio: 'Leader visionnaire congolais engagé depuis plus de 15 ans au service des communautés défavorisées. Porte-voix inlassable de la dignité humaine, du renouveau civique et de la salubrité urbaine à travers toute la République.',
        quote: 'Notre mission sacrée est d’apporter une transformation concrète, visible et mesurable dans le quotidien de chaque famille congolaise.'
      },
      {
        name: 'Placide Baundja Ikuba',
        role: 'Chief Operating Officer',
        location: 'Direction Opérationnelle — Kinshasa & International',
        image: placideBaundjaImg,
        bio: 'Stratège chevronné en gestion des opérations humanitaires et déploiement logistique sur le terrain. Supervise la chaîne d’approvisionnement, l’efficacité opérationnelle des programmes en RDC et la coordination multisectorielle des interventions prioritaires.',
        quote: 'L’excellence opérationnelle et la rigueur sur le terrain sont les clés pour transformer durablement la vie de nos concitoyens.'
      },
      {
        name: 'Max de Castro',
        role: 'Chief Marketing Officer',
        location: 'Direction Internationale & Diaspora',
        image: maxDeCastroImg,
        bio: 'Stratège en marketing d’impact, communication institutionnelle et relations philanthropiques mondiales. Orchestre le rayonnement international de la Fondation Pro-Congo, la mobilisation des ressources stratégiques et les alliances pérennes avec la diaspora et les partenaires mondiaux.',
        quote: 'Faire rayonner la force, la résilience et l’espérance du peuple congolais auprès des partenaires du monde entier.'
      },
      {
        name: 'Sandro Monteiro',
        role: 'Chief Sustainability Officer',
        location: 'Pôle International — Brésil, Japon & Espagne',
        image: sandroMonteiroImg,
        bio: 'Spécialiste de haut niveau en durabilité environnementale, responsabilité éco-sociale et transition écologique. Fort d’une vaste expérience internationale jalonnée de réalisations d’envergure au Brésil, au Japon et en Espagne, il pilote les stratégies de résilience climatique, d’assainissement régénératif et de valorisation des ressources durables.',
        quote: 'L’intégration des meilleures innovations de durabilité du Brésil, du Japon et d’Espagne au service d’un avenir prospère et écologique pour le peuple congolais.'
      }
    ]
  },
  partners: {
    sectionKicker: 'ILS NOUS SOUTIENNENT',
    title: 'Partenaires & Mécènes Internationaux',
    sub: 'De grandes institutions et entreprises de renommée mondiale s’associent aux actions prioritaires de la Fondation Pro-Congo pour accélérer le développement humain, la salubrité et la santé en RDC.',
    becomePartnerBtn: 'Devenir mécène ou partenaire'
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
  },
  news: {
    sectionKicker: 'JOURNAL DES OPÉRATIONS',
    title: 'Dernières actualités de nos missions en RDC',
    sub: 'Suivez au jour le jour les avancées des chantiers de salubrité et les tournées de nos brigades communautaires.',
    readArticle: 'Lire la dépêche',
    items: [
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
          '« Nous avons transformé des dépotoirs insalubres en espaces communautaires sécurisés », a affirmé la direction des opérations.'
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
          'Placide Baundja Ikuba, Chief Operating Officer, a salué le dévouement des équipes de terrain : « L’action humanitaire de proximité et la rigueur d’exécution sont la clé pour bâtir un avenir digne pour les enfants de notre pays ».'
        ],
        image: projectAgriImg
      }
    ]
  },
  newsDetail: {
    backToNews: 'Retour au journal des opérations',
    share: 'Partager',
    linkCopied: 'Lien copié !',
    readTimeLabel: 'de lecture',
    relatedTitle: 'Autres dépêches récentes',
    supportTitle: 'Soutenez nos actions sur le terrain',
    supportDesc: 'Chaque don garantit la continuité des soins pédiatriques et de nos brigades de salubrité publique.',
    donateCta: 'Faire un don maintenant'
  },
  otherWaysToDonate: {
    backHome: 'Retour à l’accueil',
    badge: 'Modalités de Don & Soutien',
    title: 'Chaque geste transforme concrètement une vie en RDC.',
    sub: 'Que vous soyez en République Démocratique du Congo, dans la diaspora en Amérique du Nord, en Europe ou partout dans le monde, voici l’ensemble des canaux directs et transparents pour agir avec nous.',
    simBtn: 'Simuler un don ($35)',
    exploreBtn: 'Voir les comptes & USSD',
    simTitle: 'Simulateur d’Impact Direct',
    simSub: 'Visualisez concrètement ce que votre contribution permet d’accomplir sur le terrain :',
    monthly: 'Don Mensuel',
    once: 'Don Ponctuel',
    impactLabel: 'Impact généré :',
    donateNowBtn: 'Faire ce don maintenant',
    secureNote: 'Paiements sécurisés avec reçu fiscal et traçabilité certifiée.',
    waysTitle: 'Canaux Officiels de Versement',
    waysSub: 'Choisissez le moyen le plus adapté à votre localisation géographique.',
    mobileMoneyTitle: 'Mobile Money (RDC & Afrique Centrale)',
    mobileMoneyDesc: 'Idéal pour les résidents en RDC et la région des Grands Lacs via transfert instantané sans frais.',
    bankTransferTitle: 'Virements Bancaires Nationaux & Internationaux',
    bankTransferDesc: 'Comptes dédiés en Francs Congolais (CDF) et Dollars Américains (USD) audités annuellement.',
    copyLabel: 'Copier',
    copiedLabel: 'Copié !',
    cardsTitle: 'Carte Bancaire & PayPal',
    cardsDesc: 'Paiement international par Visa, MasterCard ou compte PayPal avec reçu fiscal instantané.',
    inKindTitle: 'Dons en Nature & Matériel Médical',
    inKindDesc: 'Nous réceptionnons les conteneurs de matériel sanitaire, engins de voirie, médicaments et fournitures scolaires.',
    inKindBtn: 'Proposer un don matériel',
    taxReceiptTitle: 'Transparence & Récépissé Officiel',
    taxReceiptDesc: 'Tous les dons ouvrent droit à une attestation de don officielle et un rapport d’impact semestriel.'
  },
  volunteerModal: {
    title: 'Devenir Bénévole Civique',
    sub: 'Rejoignez nos brigades de terrain au Kongo-Central ou nos équipes de soutien international.',
    nameLabel: 'Nom complet *',
    namePlaceholder: 'Votre nom complet',
    emailLabel: 'Adresse e-mail *',
    phoneLabel: 'Téléphone / WhatsApp *',
    countryLabel: 'Pays de résidence',
    areaLabel: 'Domaine d’engagement souhaité',
    areaOptions: [
      'Assainissement & Salubrité (Boma/Matadi)',
      'Santé & Cliniques mobiles',
      'Encadrement jeunesse & Éducation',
      'Logistique & Distribution',
      'Communication & Plaidoyer international'
    ],
    availLabel: 'Disponibilité',
    availOptions: [
      'Temps plein / Chantiers',
      'Week-ends & Missions ponctuelles',
      'Bénévolat à distance (International)'
    ],
    submitBtn: 'Envoyer ma candidature',
    successTitle: 'Candidature enregistrée !',
    successDesc: 'Notre responsable des ressources bénévoles vous contactera sous 48 heures ouvrées.',
    closeBtn: 'Fermer'
  },
  partnerModal: {
    title: 'Devenir Partenaire Institutionnel',
    sub: 'Collectivités territoriales, bailleurs de fonds, entreprises citoyennes et ONG internationales.',
    orgLabel: 'Nom de l’organisme ou de l’institution *',
    orgPlaceholder: 'Ex: Mairie, Entreprise, Fondation...',
    repLabel: 'Représentant(e) / Titre *',
    repPlaceholder: 'Nom et fonction officielle',
    emailLabel: 'E-mail institutionnel *',
    typeLabel: 'Type de structure',
    typeOptions: [
      'Collectivité territoriale / Mairie',
      'Entreprise RSE & Mécénat',
      'Organisme international / Coopération',
      'Fondation philanthropique',
      'Association de la diaspora'
    ],
    msgLabel: 'Présentation sommaire du partenariat souhaité *',
    msgPlaceholder: 'Décrivez brièvement vos objectifs de collaboration...',
    submitBtn: 'Soumettre la proposition',
    successTitle: 'Proposition transmise avec succès !',
    successDesc: 'Notre direction des partenariats et le secrétariat général étudieront votre demande avec la plus haute attention.',
    closeBtn: 'Fermer'
  },
  contact: {
    sectionKicker: 'CONTACT & BUREAUX',
    title: 'Restons en contact direct',
    sub: 'Nos équipes en République Démocratique du Congo sont à votre disposition pour toute question, proposition d’appui ou partenariat.',
    hqDrcTitle: 'Siège National — RDC',
    hqDrcOrg: 'Fondation Pro-Congo — Direction Provinciale',
    hqDrcLoc: 'Boma & Matadi, Province du Kongo-Central, République Démocratique du Congo',
    intlUsaTitle: 'Bureau International — USA',
    intlUsaOrg: 'Fondation Pro-Congo International Hub',
    intlUsaLoc: 'Atlanta, Georgia, United States of America',
    formTitle: 'Envoyer un message à la direction',
    formSub: 'Remplissez le formulaire ci-dessous pour joindre directement nos équipes.',
    nameLabel: 'Nom complet *',
    namePlaceholder: 'Votre nom',
    emailLabel: 'Adresse e-mail *',
    subjectLabel: 'Objet du message',
    subjectOptions: [
      'Demande générale d’information',
      'Proposition de mécénat / don',
      'Relations presse & médias',
      'Candidature bénévole',
      'Autre'
    ],
    msgLabel: 'Votre message *',
    msgPlaceholder: 'Comment pouvons-nous vous aider ?',
    sendBtn: 'Envoyer le message',
    sentSuccessTitle: 'Message envoyé avec succès !',
    sentSuccessDesc: 'Nous vous répondrons dans les plus brefs délais.'
  },
  footer: {
    desc: 'Organisation non gouvernementale dédiée à l’assistance sociale, à la santé publique, à l’assainissement urbain et au développement durable en République Démocratique du Congo.',
    certText: 'Transparence & conformité légale certifiée en RDC',
    followUs: 'Suivez nos opérations sur les réseaux',
    quickLinksTitle: 'Navigation',
    programsTitle: 'Domaines d’intervention',
    donateBoxTitle: 'Soutenez nos actions',
    donateBoxDesc: 'Chaque contribution protège des vies et assainit nos cités congolaises.',
    donateBoxBtn: 'Faire un don',
    copyright: '© 2026 Fondation Pro-Congo. Tous droits réservés.',
    allRightsReserved: 'En faveur du peuple Congolais.',
    backToTop: 'Haut de page'
  }
};
