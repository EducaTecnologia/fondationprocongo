import { TranslationSchema } from './types';
import heroPeopleImg from '../../assets/images/hero_people_congo_1790205940535.jpg';
import heroActionImg from '../../assets/images/hero_action_boma_1790205949960.jpg';
import heroHealthImg from '../../assets/images/hero_health_care_1790205959462.jpg';
import projectAgriImg from '../../assets/images/project_agriculture_1790205970258.jpg';
import leaderPortraitImg from '../../assets/images/joe_nyakeru_executive_1790216333026.jpg';
import placideBaundjaImg from '../../assets/images/placide_baundja_portrait.jpg';
import maxDeCastroImg from '../../assets/images/max_de_castro_portrait.jpg';
import sandroMonteiroImg from '../../assets/images/sandro_monteiro_portrait.jpg';

export const esTranslations: TranslationSchema = {
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
  preloader: {
    skip: 'Saltar introducción',
    loading: 'Cargando información de la misión...',
    slides: [
      {
        title: 'Operación « Boma Bunkete » — Salubridad urbana',
        location: 'Boma, Kongo-Central',
        tag: 'Saneamiento & Medio Ambiente'
      },
      {
        title: 'Atención médica primaria y clínicas móviles',
        location: 'Matadi & Bas-Fleuve',
        tag: 'Salud y Emergencias'
      },
      {
        title: 'Soberanía alimentaria y cooperativas agrarias',
        location: 'Kongo-Central',
        tag: 'Agricultura Sostenible'
      },
      {
        title: 'Protección infantil y capacitación técnica',
        location: 'Kabondo, Boma',
        tag: 'Desarrollo Comunitario'
      },
      {
        title: 'Logística de entrega de ayuda humanitaria',
        location: 'República Democrática del Congo',
        tag: 'Socorro Humanitario'
      }
    ]
  },
  hero: {
    kicker: 'FUNDACIÓN PRO-CONGO',
    slide1Title: 'En favor del pueblo Congoleño.',
    slide1Sub: 'Junto a las comunidades de la RDC por la salud, alimentación, saneamiento y educación digna.',
    slide1Cta1: 'Conocer nuestra misión',
    slide1Cta2: 'Donar ahora',
    slide2Title: 'Un Congo limpio comienza hoy.',
    slide2Sub: 'Operación Boma Bunkete: erradicación de vertederos clandestinos, reciclaje y renacimiento cívico.',
    slide2Cta: 'Ver proyectos',
    slide3Title: 'Salud y alimentos para quienes más lo necesitan.',
    slide3Sub: 'Atención accesible, brigadas pediátricas y apoyo directo a cooperativas agrícolas familiares.',
    slide3Cta: 'Apoyar programa'
  },
  mission: {
    sectionKicker: 'NUESTRO COMPROMISO EN LA RDC',
    title: 'Una fuerza ciudadana inquebrantable por la dignidad humana.',
    manifestoQuote: '« En favor del pueblo Congoleño. »',
    badgeRdc: '🇨🇩 RDC — Kongo-Central',
    oathDesc: 'Un compromiso incondicional de acción inscrito en nuestros estatutos oficiales y ejecutado a diario en las calles de Boma, Matadi y en todo Kongo-Central.',
    ngoLegalCert: 'ONG oficialmente registrada bajo las leyes de la República Democrática del Congo',
    p1: 'La Fundación Pro-Congo nació de una convicción vital: ninguna sociedad puede prosperar mientras madres, niños y ancianos carezcan de agua limpia, salud digna y alimentación diaria.',
    p2: 'Desde nuestra base en Kongo-Central hasta nuestro enlace internacional en Atlanta, desplegamos acción directa en el terreno en colaboración con autoridades locales y líderes comunitarios.',
    p3: 'Cada aporte se traduce inmediatamente en camiones de limpieza activos, raciones nutritivas entregadas y vidas protegidas contra epidemias evitables.',
    valuesTitle: 'Nuestros 4 pilares de integridad',
    values: [
      {
        title: 'Acción Directa en el Terreno',
        desc: 'Presencia permanente junto a las autoridades tradicionales, líderes vecinales y familias vulnerables.'
      },
      {
        title: 'Transparencia y Rigor Total',
        desc: 'Cada recurso aportado cuenta con trazabilidad integral, auditoría independiente e informes públicos.'
      },
      {
        title: 'Arraigo y Soberanía Local',
        desc: 'Nuestros proyectos son ejecutados por ciudadanos congoleños capacitados y justamente remunerados para transformar su propia comunidad.'
      },
      {
        title: 'Dignidad Popular y Sostenibilidad',
        desc: 'Superar el asistencialismo puntual para construir infraestructuras duraderas y devolver el orgullo cívico.'
      }
    ]
  },
  impactStats: {
    sectionKicker: 'EVIDENCIA EN EL TERRENO',
    title: 'El impacto cuantificable de nuestro trabajo en la RDC',
    sub: 'Resultados certificados por los informes operativos municipales en Kongo-Central.',
    items: [
      {
        id: 'beneficiaires',
        value: 120000,
        suffix: '+',
        label: 'Beneficiarios Directos',
        description: 'Niños, madres y familias respaldados por nuestros programas en la RDC.'
      },
      {
        id: 'dechets',
        value: 45000,
        suffix: ' T',
        label: 'Residuos Retirados',
        description: 'Toneladas de residuos urbanos y plásticos recolectados y tratados responsablemente.'
      },
      {
        id: 'communes',
        value: 14,
        suffix: '',
        label: 'Municipios Aliados',
        description: 'Convenios municipales activos que aseguran un impacto territorial perdurable.'
      },
      {
        id: 'provinces',
        value: 4,
        suffix: '',
        label: 'Polos Operativos en RDC',
        description: 'Kongo-Central (Boma, Matadi, Kabondo, Bas-Fleuve) y coordinación nacional.'
      }
    ]
  },
  pillars: {
    sectionKicker: 'ÁREAS DE IMPACTO',
    title: 'Cuatro ejes estratégicos para transformar la RDC.',
    sub: 'Un enfoque integral que atiende la emergencia y construye resiliencia comunitaria duradera.',
    donateToPillar: 'Apoyar este eje',
    items: [
      {
        id: 'agriculture',
        title: 'Agricultura y Alimentación',
        desc: 'Apoyo a cooperativas agrarias familiares, dotación de semillas seleccionadas de yuca y maíz, y soberanía alimentaria.',
        tag: 'Soberanía Alimentaria',
        keyPoints: [
          'Apoyo directo a 250 hectáreas de cultivos alimentarios (yuca, maíz, hortalizas)',
          'Dotación de semillas seleccionadas y herramientas de cultivo modernas',
          'Circuitos cortos que conectan a campesinos con comedores y mercados urbanos'
        ]
      },
      {
        id: 'sante',
        title: 'Servicios de Salud',
        desc: 'Clínicas móviles pediátricas, kits de parto seguro y consultas gratuitas en zonas rurales vulnerables.',
        tag: 'Salud de Primera Línea',
        keyPoints: [
          'Unidades médicas móviles que llegan a aldeas aisladas de Bas-Fleuve',
          'Detección precoz de desnutrición infantil y suplementación nutricional',
          'Kits de parto higiénico para salvaguardar la salud materno-infantil'
        ]
      },
      {
        id: 'social',
        title: 'Acción Social y Educación',
        desc: 'Protección infantil, talleres vocacionales para mujeres y becas cívicas de formación técnica.',
        tag: 'Inclusión y Futuro',
        keyPoints: [
          'Acogida y reinserción escolar de niños en situación de desamparo',
          'Talleres de costura y capacitación vocacional para madres solteras',
          'Becas cívicas para jóvenes estudiantes destacados en la RDC'
        ]
      },
      {
        id: 'assainissement',
        title: 'Saneamiento Urbano y Ambiente',
        desc: 'Desalojo masivo de basura, desazolve de canales de drenaje y reciclaje de plásticos en Boma y Matadi.',
        tag: 'Salubridad y Clima',
        keyPoints: [
          'Campañas continuas de desazolve de canales y colectores pluviales',
          'Centros de triaje y reciclaje de residuos plásticos urbanos',
          'Obras de estabilización de taludes y control de cárcavas de erosión'
        ]
      }
    ]
  },
  humaneImpact: {
    kicker: 'EN PRIMERA LÍNEA',
    word1: 'UNIR.',
    word2: 'ACTUAR.',
    word3: 'Cambiar.',
    body: 'La indiferencia no limpiará nuestras calles ni alimentará a los niños vulnerables. En la RDC, nuestros brigadistas y voluntarios están cada día en la primera línea comunitaria. Únete a nuestro frente de acción.',
    cta: 'Ser voluntario'
  },
  projects: {
    sectionKicker: 'ACCIONES CLAVE EN EL TERRENO',
    title: 'Logros tangibles al servicio de las poblaciones',
    sub: 'Descubra nuestras operaciones prioritarias ejecutadas en primera línea junto a los municipios y comités vecinales de la RDC.',
    benefitLabel: 'Beneficio directo para la población',
    supervisedBy: 'Supervisado por la Dirección Provincial',
    supportBtn: 'Apoyar este proyecto',
    items: [
      {
        id: 'boma-bunkete',
        title: 'Operación « Boma Bunkete »',
        subtitle: 'Evacuación de residuos y regeneración urbana',
        location: 'Boma, Kongo-Central',
        image: heroActionImg,
        category: 'assainissement',
        description: 'Programa histórico de salubridad pública que moviliza a más de 350 voluntarios cívicos para la limpieza de vertederos ilegales, desazolve de canales y reciclaje de plásticos.',
        stats: [
          { label: 'Residuos Retirados', value: '32.000+ T' },
          { label: 'Voluntarios en Campo', value: '350+' },
          { label: 'Barrios Saneados', value: '18 zonas' }
        ],
        impactDetail: 'Previene inundaciones estacionales y reduce drásticamente el paludismo y las enfermedades hídricas en las riberas del Río Congo.'
      },
      {
        id: 'protocole-matadi',
        title: 'Protocolo de Saneamiento de Matadi',
        subtitle: 'Drenaje estratégico e higiene portuaria',
        location: 'Matadi, Kongo-Central',
        image: heroHealthImg,
        category: 'assainissement',
        description: 'Convenio estratégico con la Alcaldía de Matadi para la rehabilitación de drenajes pluviales, dotación de contenedores ecológicos y sensibilización ciudadana.',
        stats: [
          { label: 'Canales Desazolvados', value: '24 km' },
          { label: 'Contenedores Eco', value: '120 unid.' },
          { label: 'Familias Beneficiadas', value: '45.000' }
        ],
        impactDetail: 'Protege las cárcavas contra la erosión torrencial y preserva las condiciones sanitarias del principal puerto marítimo de la RDC.'
      },
      {
        id: 'kabondo-communautaire',
        title: 'Desarrollo Comunitario de Kabondo',
        subtitle: 'Infraestructura hídrica y resiliencia local',
        location: 'Municipio de Kabondo, Boma',
        image: heroPeopleImg,
        category: 'social',
        description: 'Acuerdo plurianual para la instalación de fuentes públicas de agua potable, modernización de centros de oficios para mujeres y apoyo nutricional a huérfanos.',
        stats: [
          { label: 'Fuentes de Agua', value: '16 activas' },
          { label: 'Jóvenes Graduados', value: '820+' },
          { label: 'Microproyectos', value: '42' }
        ],
        impactDetail: 'Empodera a cooperativas de mujeres y garantiza educación y amparo a niños en extrema vulnerabilidad.'
      },
      {
        id: 'sante-alimentation',
        title: 'Programas de Salud y Alimentación Sostenible',
        subtitle: 'Nutrición materno-infantil y clínicas móviles',
        location: 'Boma, Matadi y zonas rurales de Kongo-Central',
        image: projectAgriImg,
        category: 'agriculture',
        description: 'Suministro de complementos nutricionales terapéuticos, apoyo a cooperativas de pequeños agricultores (yuca, maíz, huertos) y clínicas móviles gratuitas.',
        stats: [
          { label: 'Raciones Repartidas', value: '180.000+' },
          { label: 'Hectáreas Cultivadas', value: '250 ha' },
          { label: 'Consultas Gratuitas', value: '15.400' }
        ],
        impactDetail: 'Garantiza la seguridad alimentaria en circuitos cortos y disminuye la desnutrición infantil severa en las comunidades atendidas.'
      }
    ]
  },
  map: {
    sectionKicker: 'DESPLIEGUE GEOGRÁFICO',
    title: 'Dónde operamos en el territorio congoleño',
    sub: 'Haga clic en cada polo para conocer nuestros proyectos continuos y convenios municipales.',
    activeCountPill: '4 Polos Operativos Activos',
    locations: [
      {
        id: 'boma',
        name: 'Boma',
        zone: 'Ciudad histórica y Puerto fluvial',
        title: 'Operación « Boma Bunkete » y Limpieza Municipal',
        desc: 'Sede central de las brigadas cívicas de la Fundación Pro-Congo. Limpieza masiva de vertederos, desazolve de canales y separación de plásticos.',
        stats: '32.000+ toneladas evacuadas • 350 voluntarios',
        activeInitiatives: [
          'Recolección sistemática de residuos sólidos urbanos',
          'Desazolve de cunetas a lo largo de vías principales',
          'Concientización activa de comités vecinales'
        ]
      },
      {
        id: 'matadi',
        name: 'Matadi',
        zone: 'Capital provincial y Puerto Marítimo',
        title: 'Protocolo de Drenaje y Defensa Sanitaria',
        desc: 'Colaboración directa con la Alcaldía de Matadi para contener cárcavas de erosión e instalar contenedores herméticos en muelles y mercados.',
        stats: '24 km de drenajes desazolvados • 120 contenedores ecológicos',
        activeInitiatives: [
          'Diques vegetalizados para frenar la erosión de laderas',
          'Instalaciones sanitarias en el puerto de Matadi',
          'Campañas de higiene escolar en colegios públicos'
        ]
      },
      {
        id: 'kabondo',
        name: 'Municipio de Kabondo',
        zone: 'Boma Este',
        title: 'Polo Comunitario y Acceso al Agua Potable',
        desc: 'Red de fuentes de agua potable con energía solar, rehabilitación del taller de oficios para mujeres y apoyo nutricional a huérfanos.',
        stats: '16 fuentes de agua en servicio • 820 graduadas',
        activeInitiatives: [
          'Mantenimiento comunitario de las redes de agua',
          'Talleres de costura, confección y formación técnica',
          'Asistencia de emergencia a madres solteras'
        ]
      },
      {
        id: 'bas-fleuve',
        name: 'Distrito de Bas-Fleuve',
        zone: 'Cinturón Agro-Rural (Lukula / Tshela)',
        title: 'Soberanía Alimentaria y Brigadas Médicas',
        desc: 'Apoyo logístico y provisión de semillas a cooperativas campesinas locales, junto con operativos médicos pediátricos móviles.',
        stats: '250 hectáreas cultivadas • 180.000 raciones entregadas',
        activeInitiatives: [
          'Multiplicación de semillas resistentes de yuca y maíz',
          'Consultas pediátricas y diagnóstico gratuito',
          'Distribución de papillas nutricionales enriquecidas locales'
        ]
      }
    ]
  },
  team: {
    sectionKicker: 'GOBERNANZA Y DIRECCIÓN',
    title: 'Un equipo comprometido al servicio del pueblo',
    sub: 'Una dirección ejecutiva que combina el liderazgo operativo en el terreno congoleño con vínculos estratégicos globales (Estados Unidos, Brasil, España, Japón).',
    presidentCardBadge: 'Presidencia Ejecutiva',
    activeMandate: 'Mandato Activo',
    strategicVisionSubtitle: 'Fundación Pro-Congo — Liderazgo y Visión Estratégica',
    directorsHeader: 'Dirección Operativa y Polos Internacionales',
    members: [
      {
        name: 'Joe Nyakeru',
        role: 'Presidente Nacional / CEO',
        location: 'Sede Nacional — RDC y Atlanta',
        image: leaderPortraitImg,
        bio: 'Líder visionario congoleño dedicado durante más de 15 años al servicio de las comunidades vulnerables. Portavoz incansable de la dignidad humana, la renovación cívica y la salubridad urbana en toda la República.',
        quote: 'Nuestra misión sagrada es llevar una transformación concreta, visible y medible al día a día de cada familia congoleña.'
      },
      {
        name: 'Placide Baundja Ikuba',
        role: 'Chief Operating Officer (COO)',
        location: 'Dirección Operativa — Kinshasa e Internacional',
        image: placideBaundjaImg,
        bio: 'Estratega experimentado en gestión de operaciones humanitarias y despliegue logístico en el terreno. Supervisa la cadena de suministros, la eficiencia operativa de los programas en la RDC y la coordinación multisectorial de acciones prioritarias.',
        quote: 'La excelencia operativa y el rigor en el terreno son las claves para transformar de forma duradera la vida de nuestros conciudadanos.'
      },
      {
        name: 'Max de Castro',
        role: 'Chief Marketing Officer (CMO)',
        location: 'Dirección Internacional y Diáspora',
        image: maxDeCastroImg,
        bio: 'Estratega en marketing de impacto, comunicación institucional y alianzas filantrópicas mundiales. Dirige la visibilidad internacional de la Fundación Pro-Congo, la movilización de fondos estratégicos y las alianzas duraderas con la diáspora.',
        quote: 'Hacer brillar la fortaleza, resiliencia y esperanza del pueblo congoleño ante aliados de todo el mundo.'
      },
      {
        name: 'Sandro Monteiro',
        role: 'Chief Sustainability Officer (CSO)',
        location: 'Polo Internacional — Brasil, Japón y España',
        image: sandroMonteiroImg,
        bio: 'Especialista de alto nivel en sostenibilidad ambiental, responsabilidad socioambiental y transición ecológica. Con una sólida trayectoria internacional e hitos de gran escala en Brasil, Japón y España, dirige las estrategias de resiliencia climática, saneamiento regenerativo y economía circular.',
        quote: 'Integrar las mejores innovaciones en sostenibilidad de Brasil, Japón y España al servicio de un futuro verde y próspero para el pueblo congoleño.'
      }
    ]
  },
  partners: {
    sectionKicker: 'QUIÉN NOS APOYA',
    title: 'Aliados y Mecenas Internacionales',
    sub: 'Grandes instituciones y empresas de prestigio internacional se suman a las iniciativas de la Fundación Pro-Congo para acelerar el desarrollo humano, la salubridad y la salud en la RDC.',
    becomePartnerBtn: 'Ser aliado o mecenas'
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
  },
  news: {
    sectionKicker: 'DIARIO DE OPERACIONES',
    title: 'Últimas novedades de nuestras misiones en la RDC',
    sub: 'Siga de cerca el avance de las labores de saneamiento urbano y el recorrido de nuestras brigadas comunitarias de salud.',
    readArticle: 'Leer noticia completa',
    items: [
      {
        id: 'news-1',
        title: 'Balance semestral de la Operación « Boma Bunkete »: 45.000 toneladas retiradas y 18 barrios saneados',
        date: '14 de Marzo de 2026',
        category: 'Saneamiento',
        readTime: '3 min de lectura',
        excerpt: 'La dirección provincial de la Fundación Pro-Congo presenta un balance sobresaliente de la campaña de salubridad en Boma.',
        content: [
          'Reunidos en el ayuntamiento de Boma, el Presidente Nacional Joe Nyakeru y las autoridades municipales confirmaron los resultados históricos de la campaña de saneamiento.',
          'Gracias al compromiso de más de 350 voluntarios equipados con material de protección, los colectores de lluvia quedaron despejados antes del inicio de las tormentas tropicales.',
          '« Hemos transformado vertederos insalubres en espacios comunitarios seguros », afirmó la dirección de operaciones.'
        ],
        image: heroActionImg
      },
      {
        id: 'news-2',
        title: 'Firma de protocolo histórico con la Alcaldía de Matadi para la protección de laderas y drenajes',
        date: '28 de Febrero de 2026',
        category: 'Alianzas',
        readTime: '4 min de lectura',
        excerpt: 'Un ambicioso acuerdo de tres años fue suscrito para proteger a comunidades vulnerables de las erosiones y la contaminación plástica.',
        content: [
          'La ciudad portuaria de Matadi enfrenta importantes desafíos geológicos. El nuevo protocolo prevé diques vegetales y 120 contenedores de triaje ecológico.',
          'La oficina internacional de Atlanta respalda este plan con fondos para maquinaria ligera de ingeniería civil.',
          'Se implementará también un programa educativo en 12 escuelas municipales para promover hábitos ecológicos en la niñez.'
        ],
        image: heroHealthImg
      },
      {
        id: 'news-3',
        title: 'Clínicas nutricionales móviles: 1.200 madres y lactantes atendidos en Bas-Fleuve',
        date: '10 de Febrero de 2026',
        category: 'Salud y Nutrición',
        readTime: '3 min de lectura',
        excerpt: 'Frente a las carencias nutricionales en zonas aisladas, nuestras brigadas médicas desplegaron jornadas de detección y auxilio alimentario.',
        content: [
          'Durante dos semanas de gira intensiva, las brigadas médicas visitaron siete aldeas en Bas-Fleuve, administrando suplementos de Vitamina A y harinas enriquecidas locales.',
          'Placide Baundja Ikuba, Chief Operating Officer, reconoció la labor de los voluntarios: « La acción humanitaria de cercanía y la rigurosidad operativa son la base para construir un futuro digno para los niños de nuestro país ».'
        ],
        image: projectAgriImg
      }
    ]
  },
  newsDetail: {
    backToNews: 'Volver al diario de operaciones',
    share: 'Compartir',
    linkCopied: '¡Enlace copiado!',
    readTimeLabel: 'de lectura',
    relatedTitle: 'Otras noticias recientes',
    supportTitle: 'Apoye nuestras acciones en primera línea',
    supportDesc: 'Cada aporte asegura la continuidad de las clínicas pediátricas y de nuestras brigadas de salubridad.',
    donateCta: 'Hacer una donación ahora'
  },
  otherWaysToDonate: {
    backHome: 'Volver al inicio',
    badge: 'Modalidades de Donación y Apoyo',
    title: 'Cada acción transforma concretamente una vida en la RDC.',
    sub: 'Ya sea que se encuentre en la República Democrática del Congo, en la diáspora de América del Norte, Europa o en cualquier rincón del planeta, estos son los canales oficiales y transparentes para colaborar.',
    simBtn: 'Simular donación ($35)',
    exploreBtn: 'Ver cuentas y canales',
    simTitle: 'Simulador de Impacto Directo',
    simSub: 'Compruebe con claridad lo que su donación logra directamente en el terreno:',
    monthly: 'Donación Mensual',
    once: 'Donación Única',
    impactLabel: 'Impacto generado:',
    donateNowBtn: 'Hacer esta donación ahora',
    secureNote: 'Pagos seguros con comprobante formal y auditoría financiera periódica.',
    waysTitle: 'Canales Oficiales de Aporte',
    waysSub: 'Seleccione la opción más adecuada a su país de residencia.',
    mobileMoneyTitle: 'Mobile Money (RDC y África Central)',
    mobileMoneyDesc: 'Ideal para residentes en la RDC y la región de los Grandes Lagos mediante transferencia instantánea.',
    bankTransferTitle: 'Transferencias Bancarias Nacionales e Internacionales',
    bankTransferDesc: 'Cuentas bancarias en Francos Congoleños (CDF) y Dólares (USD) con auditoría anual.',
    copyLabel: 'Copiar',
    copiedLabel: '¡Copiado!',
    cardsTitle: 'Tarjeta de Crédito y PayPal',
    cardsDesc: 'Aporte internacional seguro mediante Visa, MasterCard o PayPal con recibo electrónico inmediato.',
    inKindTitle: 'Donaciones en Especie y Equipamiento Médico',
    inKindDesc: 'Recibimos contenedores con suministros hospitalarios, maquinaria de saneamiento y material escolar.',
    inKindBtn: 'Proponer donación de insumos',
    taxReceiptTitle: 'Transparencia y Certificado Oficial',
    taxReceiptDesc: 'Todas las donaciones reciben constancia oficial y acceso a los informes semestrales de impacto.'
  },
  volunteerModal: {
    title: 'Ser Voluntario Cívico',
    sub: 'Únase a nuestras brigadas en Kongo-Central o a nuestra red internacional de apoyo.',
    nameLabel: 'Nombre completo *',
    namePlaceholder: 'Su nombre completo',
    emailLabel: 'Correo electrónico *',
    phoneLabel: 'Teléfono / WhatsApp *',
    countryLabel: 'País de residencia',
    areaLabel: 'Área de interés',
    areaOptions: [
      'Saneamiento y Salubridad (Boma/Matadi)',
      'Salud y Clínicas móviles',
      'Educación y Juventud',
      'Logística y Distribución',
      'Comunicación e Incidencia Internacional'
    ],
    availLabel: 'Disponibilidad',
    availOptions: [
      'Tiempo completo / Campo',
      'Fines de semana y Misiones puntuales',
      'Voluntariado a distancia (Internacional)'
    ],
    submitBtn: 'Enviar postulación',
    successTitle: '¡Postulación recibida!',
    successDesc: 'Nuestro coordinador de voluntariado se pondrá en contacto en un plazo de 48 horas hábiles.',
    closeBtn: 'Cerrar'
  },
  partnerModal: {
    title: 'Ser Aliado Institucional',
    sub: 'Alcaldías, organismos multilaterales, empresas comprometidas con RSE y fundaciones.',
    orgLabel: 'Nombre de la institución o empresa *',
    orgPlaceholder: 'Ej: Alcaldía, Empresa, Fundación...',
    repLabel: 'Representante / Cargo *',
    repPlaceholder: 'Nombre completo y cargo oficial',
    emailLabel: 'Correo institucional *',
    typeLabel: 'Tipo de entidad',
    typeOptions: [
      'Alcaldía / Entidad Pública',
      'Empresa / Responsabilidad Social',
      'Organismo Internacional / Cooperación',
      'Fundación Filantrópica',
      'Asociación de la Diáspora'
    ],
    msgLabel: 'Resumen de la alianza propuesta *',
    msgPlaceholder: 'Describa brevemente los objetivos de la colaboración...',
    submitBtn: 'Enviar propuesta',
    successTitle: '¡Propuesta enviada con éxito!',
    successDesc: 'Nuestra dirección de alianzas y la secretaría ejecutiva revisarán su solicitud con la máxima prioridad.',
    closeBtn: 'Cerrar'
  },
  contact: {
    sectionKicker: 'CONTACTO Y SEDES',
    title: 'Mantengámonos en contacto directo',
    sub: 'Nuestros equipos en la República Democrática del Congo y en Atlanta están a su completa disposición para dudas, colaboraciones o alianzas.',
    hqDrcTitle: 'Sede Nacional — RDC',
    hqDrcOrg: 'Fundación Pro-Congo — Dirección Provincial',
    hqDrcLoc: 'Boma y Matadi, Provincia de Kongo-Central, República Democrática del Congo',
    intlUsaTitle: 'Oficina Internacional — EE.UU.',
    intlUsaOrg: 'Hub Internacional Fundación Pro-Congo',
    intlUsaLoc: 'Atlanta, Georgia, Estados Unidos de América',
    formTitle: 'Enviar mensaje a la dirección',
    formSub: 'Complete el siguiente formulario para comunicarse directamente con nuestras oficinas.',
    nameLabel: 'Nombre completo *',
    namePlaceholder: 'Su nombre',
    emailLabel: 'Correo electrónico *',
    subjectLabel: 'Asunto del mensaje',
    subjectOptions: [
      'Consulta general de información',
      'Propuesta de donación o patrocinio',
      'Prensa y medios de comunicación',
      'Postulación como voluntario',
      'Otro'
    ],
    msgLabel: 'Su mensaje *',
    msgPlaceholder: '¿Cómo podemos ayudarle?',
    sendBtn: 'Enviar mensaje',
    sentSuccessTitle: '¡Mensaje enviado con éxito!',
    sentSuccessDesc: 'Nos pondremos en contacto con usted a la brevedad posible.'
  },
  footer: {
    desc: 'Organización no gubernamental dedicada a la asistencia social, la salud pública, el saneamiento urbano y el desarrollo humano sostenible en la República Democrática del Congo.',
    certText: 'Transparencia y personería jurídica certificada en la RDC',
    followUs: 'Siga nuestras operaciones en redes sociales',
    quickLinksTitle: 'Navegación',
    programsTitle: 'Áreas de Impacto',
    donateBoxTitle: 'Apoye nuestro trabajo',
    donateBoxDesc: 'Cada donación salva vidas y transforma comunidades en el Congo.',
    donateBoxBtn: 'Donar ahora',
    copyright: '© 2026 Fundación Pro-Congo. Todos los derechos reservados.',
    allRightsReserved: 'En favor del pueblo Congoleño.',
    backToTop: 'Volver arriba'
  }
};
