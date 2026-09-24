import { TranslationSchema } from './types';
import heroPeopleImg from '../../assets/images/hero_people_congo_1790205940535.jpg';
import heroActionImg from '../../assets/images/hero_action_boma_1790205949960.jpg';
import heroHealthImg from '../../assets/images/hero_health_care_1790205959462.jpg';
import projectAgriImg from '../../assets/images/project_agriculture_1790205970258.jpg';
import leaderPortraitImg from '../../assets/images/joe_nyakeru_executive_1790216333026.jpg';
import placideBaundjaImg from '../../assets/images/placide_baundja_portrait.jpg';
import maxDeCastroImg from '../../assets/images/max_de_castro_portrait.jpg';
import sandroMonteiroImg from '../../assets/images/sandro_monteiro_portrait.jpg';

export const enTranslations: TranslationSchema = {
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
  preloader: {
    skip: 'Skip introduction',
    loading: 'Loading mission details...',
    slides: [
      {
        title: 'Operation "Boma Bunkete" — Urban sanitation',
        location: 'Boma, Kongo-Central',
        tag: 'Sanitation & Environment'
      },
      {
        title: 'Primary healthcare & mobile pediatric clinics',
        location: 'Matadi & Bas-Fleuve',
        tag: 'Healthcare & Medical Emergency'
      },
      {
        title: 'Food sovereignty & support for farm cooperatives',
        location: 'Kongo-Central',
        tag: 'Sustainable Agriculture'
      },
      {
        title: 'Child protection & vocational skills training',
        location: 'Kabondo, Boma',
        tag: 'Community Development'
      },
      {
        title: 'Logistical delivery of humanitarian emergency aid',
        location: 'Democratic Republic of the Congo',
        tag: 'Humanitarian Relief'
      }
    ]
  },
  hero: {
    kicker: 'PRO-CONGO FOUNDATION',
    slide1Title: 'In favor of the Congolese people.',
    slide1Sub: 'Standing alongside DRC communities for healthcare, food security, urban sanitation, and quality education.',
    slide1Cta1: 'Discover our mission',
    slide1Cta2: 'Donate now',
    slide2Title: 'A clean Congo begins today.',
    slide2Sub: 'Operation Boma Bunkete: clearing illegal landfills, plastic waste recycling, and civic renewal.',
    slide2Cta: 'Explore our projects',
    slide3Title: 'Health and food for those who need it most.',
    slide3Sub: 'Accessible care, pediatric mobile clinics, and direct assistance to smallholder farming cooperatives.',
    slide3Cta: 'Support a program'
  },
  mission: {
    sectionKicker: 'OUR DRC COMMITMENT',
    title: 'An unwavering grassroots force for human dignity.',
    manifestoQuote: '"In favor of the Congolese people."',
    badgeRdc: '🇨🇩 DRC — Kongo-Central',
    oathDesc: 'An unconditional pledge of field action enshrined in our official bylaws and realized daily in the streets of Boma, Matadi, and across Kongo-Central.',
    ngoLegalCert: 'Officially registered NGO under the laws of the Democratic Republic of the Congo',
    p1: 'The Pro-Congo Foundation was born from a vital conviction: no society can flourish while mothers, children, and elders lack basic access to clean water, dignified healthcare, and daily meals.',
    p2: 'From our operational roots in Kongo-Central to our international support hub in Atlanta, we deploy direct field actions in close coordination with local leaders and municipal authorities.',
    p3: 'Every contributed resource translates into visible impact: garbage trucks operating on city avenues, nutritious meals delivered, and families safeguarded against preventable illnesses.',
    valuesTitle: 'Our 4 Core Commitments',
    values: [
      {
        title: 'Direct Frontline Action',
        desc: 'Permanent grassroots presence alongside community elders, neighborhood leaders, and vulnerable households.'
      },
      {
        title: 'Total Transparency & Rigor',
        desc: 'Every dollar invested is fully auditable with independent verification and open public reporting.'
      },
      {
        title: 'Local Roots & Sovereignty',
        desc: 'Our projects are led by trained, fairly compensated Congolese citizens transforming their own cities.'
      },
      {
        title: 'Dignity & Sustainable Impact',
        desc: 'Moving beyond temporary aid to build lasting public infrastructure and restore civic pride.'
      }
    ]
  },
  impactStats: {
    sectionKicker: 'PROVEN ON THE GROUND',
    title: 'The measurable impact of our work in DRC',
    sub: 'Concrete outcomes certified by municipal operational reports across Kongo-Central.',
    items: [
      {
        id: 'beneficiaires',
        value: 120000,
        suffix: '+',
        label: 'Direct Beneficiaries',
        description: 'Children, mothers, and families supported across integrated programs in DRC.'
      },
      {
        id: 'dechets',
        value: 45000,
        suffix: ' T',
        label: 'Waste Evacuated',
        description: 'Tons of municipal and plastic waste collected, sorted, and responsibly treated.'
      },
      {
        id: 'communes',
        value: 14,
        suffix: '',
        label: 'Partner Municipalities',
        description: 'Active municipal agreements guaranteeing sustainable local impact.'
      },
      {
        id: 'provinces',
        value: 4,
        suffix: '',
        label: 'Operational Hubs in DRC',
        description: 'Kongo-Central (Boma, Matadi, Kabondo, Bas-Fleuve) and national liaison.'
      }
    ]
  },
  pillars: {
    sectionKicker: 'AREAS OF IMPACT',
    title: 'Four strategic pillars transforming the DRC.',
    sub: 'A holistic framework responding to urgent survival needs while building long-term community autonomy.',
    donateToPillar: 'Support this pillar',
    items: [
      {
        id: 'agriculture',
        title: 'Agriculture & Food Security',
        desc: 'Empowering smallholder cooperatives, distributing certified local seeds (cassava & maize), and securing rural nutrition.',
        tag: 'Food Sovereignty',
        keyPoints: [
          'Direct support for 250 hectares of food crops (cassava, maize, vegetables)',
          'Provision of selected seeds and modern farming tools',
          'Short-supply chains linking farmers to school kitchens and city markets'
        ]
      },
      {
        id: 'sante',
        title: 'Healthcare Services',
        desc: 'Mobile pediatric clinics, obstetric kits, and free preventative health screenings for vulnerable families.',
        tag: 'Frontline Medicine',
        keyPoints: [
          'Mobile medical units reaching isolated villages in Bas-Fleuve',
          'Early childhood malnutrition screening and therapeutic supplementation',
          'Clean delivery kits ensuring safe maternal and newborn health'
        ]
      },
      {
        id: 'social',
        title: 'Social Services & Education',
        desc: 'Child protection programs, vocational training centers for women, and civic apprenticeships.',
        tag: 'Inclusion & Youth',
        keyPoints: [
          'Shelter and school re-enrollment for vulnerable street-connected children',
          'Technical vocational training and sewing workshops for single mothers',
          'Civic merit scholarships for aspiring students in DRC'
        ]
      },
      {
        id: 'assainissement',
        title: 'Sanitation & Environment',
        desc: 'Solid waste evacuation, river canal dredging, plastic recycling, and gully erosion mitigation.',
        tag: 'Sanitation & Climate',
        keyPoints: [
          'Massive street drain cleaning and rainwater collector dredging',
          'Sorting and recycling centers for urban plastic waste',
          'Gully erosion slope stabilization to protect vulnerable homes'
        ]
      }
    ]
  },
  humaneImpact: {
    kicker: 'ON THE FRONTLINE',
    word1: 'UNITE.',
    word2: 'DISRUPT.',
    word3: 'Change.',
    body: 'Indifference will not clean our streets, treat suffering children, or feed struggling families. In the DRC, our changemakers and civic volunteers are on the ground every day. Join our front line for dignity and renewal.',
    cta: 'Become a volunteer'
  },
  projects: {
    sectionKicker: 'FLAGSHIP FIELD OPERATIONS',
    title: 'Tangible achievements serving local communities',
    sub: 'Discover our primary field initiatives deployed in partnership with local municipalities and neighborhood councils across DRC.',
    benefitLabel: 'Direct benefit for local populations',
    supervisedBy: 'Supervised by the Provincial Directorate',
    supportBtn: 'Support this project',
    items: [
      {
        id: 'boma-bunkete',
        title: 'Operation "Boma Bunkete"',
        subtitle: 'Waste evacuation & urban regeneration',
        location: 'Boma, Kongo-Central',
        image: heroActionImg,
        category: 'assainissement',
        description: 'Historic public sanitation campaign mobilizing over 350 civic volunteers for systematic open-dump cleanup, drain unblocking, and plastic recycling.',
        stats: [
          { label: 'Waste Cleared', value: '32,000+ T' },
          { label: 'Field Volunteers', value: '350+' },
          { label: 'Sanitized Sectors', value: '18 zones' }
        ],
        impactDetail: 'Drastically prevents seasonal flooding and significantly curbs malaria and waterborne diseases for residents along the Congo River.'
      },
      {
        id: 'protocole-matadi',
        title: 'Matadi Sanitation Agreement',
        subtitle: 'Strategic drainage & port hygiene',
        location: 'Matadi, Kongo-Central',
        image: heroHealthImg,
        category: 'assainissement',
        description: 'Strategic partnership agreement with the Matadi City Hall to reinforce rainwater drainage networks, deploy eco-bins, and run public health campaigns.',
        stats: [
          { label: 'Canals Dredged', value: '24 km' },
          { label: 'Eco-Waste Bins', value: '120 units' },
          { label: 'Households Served', value: '45,000' }
        ],
        impactDetail: 'Protects critical ravines against torrential gully erosion and preserves health standards across DRC’s foremost maritime gateway.'
      },
      {
        id: 'kabondo-communautaire',
        title: 'Kabondo Community Development',
        subtitle: 'Clean water infrastructure & local resilience',
        location: 'Kabondo Municipality, Boma',
        image: heroPeopleImg,
        category: 'social',
        description: 'Multi-year municipal accord to build clean drinking water kiosks, rehabilitate technical learning centers for youth and women, and support mutual aid programs.',
        stats: [
          { label: 'Water Standpipes', value: '16 active' },
          { label: 'Youth Trained', value: '820+' },
          { label: 'Micro-Projects', value: '42' }
        ],
        impactDetail: 'Empowers grassroots women-led cooperatives and guarantees secure primary education for children in precarious living conditions.'
      },
      {
        id: 'sante-alimentation',
        title: 'Sustainable Health & Food Programs',
        subtitle: 'Maternal nutrition & mobile village clinics',
        location: 'Boma, Matadi & rural Kongo-Central',
        image: projectAgriImg,
        category: 'agriculture',
        description: 'Delivering therapeutic nutritional supplements, supporting staple food farming cooperatives (cassava, maize, vegetables), and dispatching pediatric clinics.',
        stats: [
          { label: 'Rations Delivered', value: '180,000+' },
          { label: 'Cultivated Land', value: '250 ha' },
          { label: 'Free Screenings', value: '15,400' }
        ],
        impactDetail: 'Guarantees rural food resilience through short agricultural supply circuits and reduces acute infant malnutrition in vulnerable communities.'
      }
    ]
  },
  map: {
    sectionKicker: 'GEOGRAPHIC REACH',
    title: 'Where we operate across the Congolese territory',
    sub: 'Click on each operational hub to explore ongoing work sites, municipal protocols, and community facilities.',
    activeCountPill: '4 Active Operational Hubs',
    locations: [
      {
        id: 'boma',
        name: 'Boma',
        zone: 'Historic City & River Port',
        title: 'Operation "Boma Bunkete" & Municipal Cleanliness',
        desc: 'Main headquarters of the Pro-Congo civic brigades. Large-scale clearing of unauthorized dumps, drain rehabilitation, and plastic sorting.',
        stats: '32,000+ tons cleared • 350 civic volunteers',
        activeInitiatives: [
          'Systematic collection of municipal solid waste',
          'Dredging roadside gutters along main avenues',
          'Civic engagement with neighborhood committees'
        ]
      },
      {
        id: 'matadi',
        name: 'Matadi',
        zone: 'Provincial Capital & Deepwater Port',
        title: 'Urban Drainage Protocol & Health Defense',
        desc: 'Direct partnership with Matadi City Hall to stabilize torrential erosion ravines and install hermetic waste receptacles at ports and markets.',
        stats: '24 km of drains cleared • 120 eco-bins installed',
        activeInitiatives: [
          'Vegetated embankment stabilization for ravines',
          'Sanitary facilities for the Port of Matadi',
          'Eco-civic hygiene campaigns in municipal schools'
        ]
      },
      {
        id: 'kabondo',
        name: 'Kabondo Municipality',
        zone: 'Eastern Boma',
        title: 'Community Support Center & Clean Water Access',
        desc: 'Network of solar-powered clean drinking water fountains, vocational center rehabilitation for women, and nutritional support for orphans.',
        stats: '16 active water standpipes • 820 graduates',
        activeInitiatives: [
          'Community maintenance of water supply points',
          'Vocational apprenticeship and craft workshops',
          'Emergency assistance for vulnerable single mothers'
        ]
      },
      {
        id: 'bas-fleuve',
        name: 'Bas-Fleuve District',
        zone: 'Agro-Rural Green Belt (Lukula / Tshela)',
        title: 'Food Sovereignty & Mobile Medical Units',
        desc: 'Seed and logistics support for smallholder farming collectives, paired with regular deployments of mobile pediatric clinics.',
        stats: '250 hectares cultivated • 180,000 meals provided',
        activeInitiatives: [
          'Multiplying high-yield disease-resistant cassava',
          'Free mobile pediatric screening consultations',
          'Distribution of locally enriched nutritional porridge'
        ]
      }
    ]
  },
  team: {
    sectionKicker: 'GOVERNANCE & LEADERSHIP',
    title: 'A dedicated executive team serving the people',
    sub: 'Executive governance uniting direct field leadership in the DRC with global philanthropic networks across the United States, Brazil, Spain, and Japan.',
    presidentCardBadge: 'Executive Leadership',
    activeMandate: 'Active Mandate',
    strategicVisionSubtitle: 'Pro-Congo Foundation — Leadership & Strategic Vision',
    directorsHeader: 'Operational Leadership & International Hubs',
    members: [
      {
        name: 'Joe Nyakeru',
        role: 'National President / CEO',
        location: 'National Headquarters — DRC & Atlanta',
        image: leaderPortraitImg,
        bio: 'Visionary Congolese leader with over 15 years of relentless service to vulnerable communities. A passionate advocate for human dignity, civic revitalization, and urban sanitation across the Republic.',
        quote: 'Our sacred mission is to bring concrete, visible, and measurable transformation to the daily lives of every Congolese family.'
      },
      {
        name: 'Placide Baundja Ikuba',
        role: 'Chief Operating Officer',
        location: 'Operations Directorate — Kinshasa & International',
        image: placideBaundjaImg,
        bio: 'Seasoned strategist in humanitarian operations and on-the-ground logistical execution. Oversees supply chains, program efficiency across DRC, and multi-sector coordination for priority interventions.',
        quote: 'Operational excellence and field rigor are the essential keys to sustainably transforming the lives of our fellow citizens.'
      },
      {
        name: 'Max de Castro',
        role: 'Chief Marketing Officer',
        location: 'Global Outreach & Diaspora Directorate',
        image: maxDeCastroImg,
        bio: 'Strategist in impact marketing, institutional communication, and international philanthropic alliances. Orchestrates the global visibility of the Pro-Congo Foundation and resource mobilization with the African diaspora and global partners.',
        quote: 'Illuminating the strength, resilience, and hope of the Congolese people before partners around the world.'
      },
      {
        name: 'Sandro Monteiro',
        role: 'Chief Sustainability Officer',
        location: 'International Hub — Brazil, Japan & Spain',
        image: sandroMonteiroImg,
        bio: 'High-level specialist in environmental sustainability, eco-social governance, and ecological transition. Backed by extensive international experience and major achievements across Brazil, Japan, and Spain, he leads climate resilience, regenerative sanitation, and circular resource recovery.',
        quote: 'Integrating the highest sustainability innovations from Brazil, Japan, and Spain in service of a prosperous, green future for the Congolese people.'
      }
    ]
  },
  partners: {
    sectionKicker: 'WHO SUPPORTS US',
    title: 'International Partners & Benefactors',
    sub: 'World-renowned institutions and leading corporate sponsors unite with Pro-Congo Foundation to accelerate human development, urban sanitation, and public health in DRC.',
    becomePartnerBtn: 'Become a partner or sponsor'
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
  },
  news: {
    sectionKicker: 'FIELD DISPATCHES & NEWS',
    title: 'Latest updates from our missions in DRC',
    sub: 'Follow the real-time progress of our municipal sanitation campaigns and mobile community brigades.',
    readArticle: 'Read dispatch',
    items: [
      {
        id: 'news-1',
        title: 'Mid-year review of Operation "Boma Bunkete": 45,000 tons cleared and 18 neighborhoods sanitized',
        date: 'March 14, 2026',
        category: 'Sanitation',
        readTime: '3 min read',
        excerpt: 'The provincial directorate of the Pro-Congo Foundation delivers a comprehensive report on the public sanitation campaign in Boma.',
        content: [
          'Convening at Boma City Hall, National President Joe Nyakeru and municipal authorities confirmed the record-breaking milestones achieved by the urban sanitation effort.',
          'Thanks to over 350 equipped civic volunteers, primary rainwater canals were unblocked before the onset of the seasonal tropical downpours.',
          '“We have converted hazardous dumpsites into secure community spaces,” confirmed the field operations directorate.'
        ],
        image: heroActionImg
      },
      {
        id: 'news-2',
        title: 'Historic protocol signed with Matadi City Hall for urban ravine erosion protection',
        date: 'February 28, 2026',
        category: 'Partnerships',
        readTime: '4 min read',
        excerpt: 'An ambitious three-year framework agreement has been signed to shield vulnerable hillside neighborhoods from erosion and plastic pollution.',
        content: [
          'The port city of Matadi faces acute geomorphological vulnerabilities. This new agreement establishes vegetated slope dikes and deploys 120 selective sorting bins.',
          'The Atlanta international hub is supporting this initiative with specialized funding for light civil engineering machinery.',
          'An environmental education campaign will also engage 12 municipal primary schools to foster eco-civic habits among youth.'
        ],
        image: heroHealthImg
      },
      {
        id: 'news-3',
        title: 'Mobile pediatric clinics: 1,200 mothers and infants treated across Bas-Fleuve',
        date: 'February 10, 2026',
        category: 'Health & Nutrition',
        readTime: '3 min read',
        excerpt: 'Responding to critical nutritional gaps in remote communities, medical brigades deployed early screening and food relief units.',
        content: [
          'During a two-week intensive tour, Foundation health brigades visited seven remote villages in Bas-Fleuve, administering Vitamin A supplements and fortified flour.',
          'Placide Baundja Ikuba, Chief Operating Officer, praised the dedication of the medical volunteers: “Grassroots humanitarian action and operational rigor are the true foundation for building a dignified future for our children.”'
        ],
        image: projectAgriImg
      }
    ]
  },
  newsDetail: {
    backToNews: 'Back to field dispatches',
    share: 'Share',
    linkCopied: 'Link copied!',
    readTimeLabel: 'read',
    relatedTitle: 'Other recent dispatches',
    supportTitle: 'Support our work on the frontline',
    supportDesc: 'Every contribution keeps mobile pediatric clinics rolling and city avenues clean.',
    donateCta: 'Donate now'
  },
  otherWaysToDonate: {
    backHome: 'Back to home',
    badge: 'Ways to Give & Support',
    title: 'Every action brings concrete change to lives in DRC.',
    sub: 'Whether you reside in the Democratic Republic of the Congo, in the North American or European diaspora, or anywhere across the globe, here are direct, transparent ways to stand with us.',
    simBtn: 'Simulate donation ($35)',
    exploreBtn: 'View accounts & USSD',
    simTitle: 'Direct Impact Simulator',
    simSub: 'Visualize what your gift accomplishes directly on the ground:',
    monthly: 'Monthly Giving',
    once: 'One-Time Gift',
    impactLabel: 'Generated Impact:',
    donateNowBtn: 'Make this gift now',
    secureNote: 'Secure payments with certified tax receipts and full annual auditing.',
    waysTitle: 'Official Payment Channels',
    waysSub: 'Choose the channel best suited for your location and preferred method.',
    mobileMoneyTitle: 'Mobile Money (DRC & Central Africa)',
    mobileMoneyDesc: 'Ideal for donors in DRC and the Great Lakes region via instant zero-fee transfers.',
    bankTransferTitle: 'National & International Wire Transfers',
    bankTransferDesc: 'Dedicated accounts in Congolese Francs (CDF) and US Dollars (USD), audited annually.',
    copyLabel: 'Copy',
    copiedLabel: 'Copied!',
    cardsTitle: 'Credit Card & PayPal',
    cardsDesc: 'Global payment via Visa, MasterCard, or PayPal with instant electronic tax receipt.',
    inKindTitle: 'In-Kind Donations & Medical Equipment',
    inKindDesc: 'We receive shipping containers of medical supplies, sanitation vehicles, and educational tools.',
    inKindBtn: 'Propose in-kind donation',
    taxReceiptTitle: 'Transparency & Official Documentation',
    taxReceiptDesc: 'All donations qualify for an official donor receipt and bi-annual audited impact reports.'
  },
  volunteerModal: {
    title: 'Become a Civic Volunteer',
    sub: 'Join our frontline brigades in Kongo-Central or our international support hubs.',
    nameLabel: 'Full Name *',
    namePlaceholder: 'Your full name',
    emailLabel: 'Email Address *',
    phoneLabel: 'Phone / WhatsApp *',
    countryLabel: 'Country of Residence',
    areaLabel: 'Desired Area of Engagement',
    areaOptions: [
      'Sanitation & Environment (Boma/Matadi)',
      'Healthcare & Mobile Clinics',
      'Youth Mentorship & Education',
      'Logistics & Aid Distribution',
      'Communication & Global Advocacy'
    ],
    availLabel: 'Availability',
    availOptions: [
      'Full-time / Field Work',
      'Weekends & Special Missions',
      'Remote Volunteering (International)'
    ],
    submitBtn: 'Submit Application',
    successTitle: 'Application received!',
    successDesc: 'Our volunteer coordinator will reach out to you within 48 business hours.',
    closeBtn: 'Close'
  },
  partnerModal: {
    title: 'Become an Institutional Partner',
    sub: 'Municipalities, institutional donors, corporate CSR programs, and international NGOs.',
    orgLabel: 'Organization or Institution Name *',
    orgPlaceholder: 'e.g. City Council, Corporation, Foundation...',
    repLabel: 'Representative / Official Title *',
    repPlaceholder: 'Full name and official title',
    emailLabel: 'Institutional Email *',
    typeLabel: 'Organization Type',
    typeOptions: [
      'Municipal Authority / Local Government',
      'Corporate CSR & Philanthropy',
      'International Development Agency',
      'Philanthropic Foundation',
      'Diaspora Association'
    ],
    msgLabel: 'Summary of Proposed Partnership *',
    msgPlaceholder: 'Briefly outline your goals and prospective collaboration...',
    submitBtn: 'Submit Proposal',
    successTitle: 'Proposal submitted successfully!',
    successDesc: 'Our partnerships team and executive secretariat will review your inquiry promptly.',
    closeBtn: 'Close'
  },
  contact: {
    sectionKicker: 'CONTACT & OFFICES',
    title: 'Get in touch with us',
    sub: 'Our teams in the Democratic Republic of the Congo and Atlanta are at your disposal for questions, support initiatives, or partnerships.',
    hqDrcTitle: 'National Headquarters — DRC',
    hqDrcOrg: 'Pro-Congo Foundation — Provincial Directorate',
    hqDrcLoc: 'Boma & Matadi, Kongo-Central Province, Democratic Republic of the Congo',
    intlUsaTitle: 'International Hub — USA',
    intlUsaOrg: 'Pro-Congo Foundation International Hub',
    intlUsaLoc: 'Atlanta, Georgia, United States of America',
    formTitle: 'Send a message to leadership',
    formSub: 'Fill out the form below to reach our executive offices directly.',
    nameLabel: 'Full Name *',
    namePlaceholder: 'Your name',
    emailLabel: 'Email Address *',
    subjectLabel: 'Subject',
    subjectOptions: [
      'General Information Inquiry',
      'Donation / Corporate Partnership',
      'Press & Media Relations',
      'Volunteer Application',
      'Other'
    ],
    msgLabel: 'Your Message *',
    msgPlaceholder: 'How can we help you?',
    sendBtn: 'Send Message',
    sentSuccessTitle: 'Message sent successfully!',
    sentSuccessDesc: 'We will get back to you as soon as possible.'
  },
  footer: {
    desc: 'Non-governmental organization dedicated to social welfare, public health, urban sanitation, and sustainable human development in the Democratic Republic of the Congo.',
    certText: 'Certified legal transparency and compliance in DRC',
    followUs: 'Follow our operations on social media',
    quickLinksTitle: 'Navigation',
    programsTitle: 'Areas of Impact',
    donateBoxTitle: 'Support Our Work',
    donateBoxDesc: 'Every contribution saves lives and revitalizes Congolese communities.',
    donateBoxBtn: 'Donate now',
    copyright: '© 2026 Pro-Congo Foundation. All rights reserved.',
    allRightsReserved: 'In favor of the Congolese people.',
    backToTop: 'Back to top'
  }
};
