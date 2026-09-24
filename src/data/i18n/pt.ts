import { TranslationSchema } from './types';
import heroPeopleImg from '../../assets/images/hero_people_congo_1790205940535.jpg';
import heroActionImg from '../../assets/images/hero_action_boma_1790205949960.jpg';
import heroHealthImg from '../../assets/images/hero_health_care_1790205959462.jpg';
import projectAgriImg from '../../assets/images/project_agriculture_1790205970258.jpg';
import leaderPortraitImg from '../../assets/images/joe_nyakeru_executive_1790216333026.jpg';
import placideBaundjaImg from '../../assets/images/placide_baundja_portrait.jpg';
import maxDeCastroImg from '../../assets/images/max_de_castro_portrait.jpg';
import sandroMonteiroImg from '../../assets/images/sandro_monteiro_portrait.jpg';

export const ptTranslations: TranslationSchema = {
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
  preloader: {
    skip: 'Pular introdução',
    loading: 'Carregando detalhes da missão...',
    slides: [
      {
        title: 'Operação « Boma Bunkete » — Salubridade urbana',
        location: 'Boma, Kongo-Central',
        tag: 'Saneamento & Salubridade'
      },
      {
        title: 'Atenção primária & clínicas pediátricas móveis',
        location: 'Matadi & Bas-Fleuve',
        tag: 'Saúde & Emergência Médica'
      },
      {
        title: 'Soberania alimentar & apoio a cooperativas',
        location: 'Kongo-Central',
        tag: 'Agricultura Sustentável'
      },
      {
        title: 'Proteção à infância & capacitação profissional',
        location: 'Kabondo, Boma',
        tag: 'Desenvolvimento Comunitário'
      },
      {
        title: 'Logística de distribuição de socorro humanitário',
        location: 'República Democrática do Congo',
        tag: 'Socorro Humanitário'
      }
    ]
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
    badgeRdc: '🇨🇩 RDC — Kongo-Central',
    oathDesc: 'Um juramento de ação incondicional consagrado em nossos estatutos oficiais e realizado diariamente nas ruas de Boma, Matadi e em todo o Kongo-Central.',
    ngoLegalCert: 'ONG oficialmente registrada sob as leis da República Democrática do Congo',
    p1: 'A Fundação Pro-Congo nasceu de uma certeza inegociável: nenhuma nação floresce enquanto mães, crianças e idosos forem privados de água potável, saúde digna e alimento cotidiano.',
    p2: 'Desde a nossa base no Kongo-Central até o núcleo de apoio internacional em Atlanta, atuamos com equipes locais, em estreita articulação com lideranças tradicionais e prefeituras municipais.',
    p3: 'Cada recurso mobilizado se converte em caminhões de coleta rodando, refeições distribuídas e proteção contra enfermidades evitáveis.',
    valuesTitle: 'Nossos 4 pilares de integridade',
    values: [
      {
        title: 'Ação Direta de Campo',
        desc: 'Presença permanente junto a lideranças comunitárias, autoridades locais e famílias em maior vulnerabilidade.'
      },
      {
        title: 'Transparência & Rigor Absoluto',
        desc: 'Cada recurso investido possui rastreabilidade total, auditoria independente e prestação de contas pública.'
      },
      {
        title: 'Raízes & Soberania Local',
        desc: 'Nossos projetos são liderados por cidadãos congoleses capacitados e remunerados com dignidade para transformar sua própria terra.'
      },
      {
        title: 'Dignidade & Sustentabilidade',
        desc: 'Superar o assistencialismo pontual para erguer infraestruturas duradouras e devolver o orgulho cívico ao povo.'
      }
    ]
  },
  impactStats: {
    sectionKicker: 'RESULTADOS NO TERRENO',
    title: 'O impacto mensurável da nossa atuação na RDC',
    sub: 'Resultados concretos certificados pelos relatórios operacionais municipais no Kongo-Central.',
    items: [
      {
        id: 'beneficiaires',
        value: 120000,
        suffix: '+',
        label: 'Beneficiários Diretos',
        description: 'Crianças, mães e famílias atendidas por nossos programas integrados na RDC.'
      },
      {
        id: 'dechets',
        value: 45000,
        suffix: ' T',
        label: 'Resíduos Recolhidos',
        description: 'Toneladas de lixo urbano e plástico coletadas, triadas e tratadas de forma sustentável.'
      },
      {
        id: 'communes',
        value: 14,
        suffix: '',
        label: 'Municípios Parceiros',
        description: 'Acordos municipais ativos garantindo impacto territorial sustentável.'
      },
      {
        id: 'provinces',
        value: 4,
        suffix: '',
        label: 'Polos de Ação na RDC',
        description: 'Kongo-Central (Boma, Matadi, Kabondo, Bas-Fleuve) e articulação nacional.'
      }
    ]
  },
  pillars: {
    sectionKicker: 'EIXOS DE ATUAÇÃO',
    title: 'Quatro pilares estratégicos para transformar a RDC.',
    sub: 'Uma abordagem integrada que atende às emergências vitais e constrói a soberania comunitária duradoura.',
    donateToPillar: 'Apoiar este eixo',
    items: [
      {
        id: 'agriculture',
        title: 'Agricultura & Alimentação',
        desc: 'Fortalecimento de cooperativas agrícolas familiares, sementes selecionadas de mandioca e milho, e segurança alimentar.',
        tag: 'Soberania Alimentar',
        keyPoints: [
          'Apoio direto a 250 hectares de lavouras comunitárias (mandioca, milho, hortaliças)',
          'Distribuição de sementes selecionadas e ferramentas agrícolas modernas',
          'Circuitos curtos ligando os agricultores às cozinhas escolares e mercados urbanos'
        ]
      },
      {
        id: 'sante',
        title: 'Serviços de Saúde',
        desc: 'Clínicas móveis pediátricas, suprimentos obstétricos e atendimento de triagem gratuito para famílias vulneráveis.',
        tag: 'Saúde de Primeira Linha',
        keyPoints: [
          'Unidades médicas móveis alcançando vilarejos remotos do Bas-Fleuve',
          'Diagnóstico precoce de desnutrição infantil e suplementação vitamínica',
          'Kits de parto seguro e proteção à saúde materna e neonatal'
        ]
      },
      {
        id: 'social',
        title: 'Serviços Sociais & Educação',
        desc: 'Acolhimento de crianças vulneráveis, centros de capacitação profissional feminina e bolsas de inclusão comunitária.',
        tag: 'Inclusão & Futuro',
        keyPoints: [
          'Acolhimento e reinserção escolar de crianças em situação de vulnerabilidade',
          'Oficinas de capacitação técnica e costura para mães solo',
          'Bolsas de mérito cívico para jovens estudantes na RDC'
        ]
      },
      {
        id: 'assainissement',
        title: 'Saneamento & Meio Ambiente',
        desc: 'Remoção de resíduos sólidos urbanos, desassoreamento de canais de drenagem, reciclagem plástica e controle de erosão.',
        tag: 'Salubridade & Clima',
        keyPoints: [
          'Campanhas maciças de limpeza de galerias e canais pluviais',
          'Centrais de triagem e valorização de resíduos plásticos urbanos',
          'Obras de estabilização de encostas e combate a voçorocas de erosão'
        ]
      }
    ]
  },
  humaneImpact: {
    kicker: 'AÇÃO DE LINHA DE FRENTE',
    word1: 'UNIR.',
    word2: 'AGIR.',
    word3: 'Mudar.',
    body: 'A inércia não vai limpar nossas ruas, curar crianças enfermas ou alimentar famílias necessitadas. Na República Democrática do Congo, nossos voluntários e agentes cívicos atuam na linha de frente todos os dias. Junte-se ao nosso movimento.',
    cta: 'Ser voluntário'
  },
  projects: {
    sectionKicker: 'OPERAÇÕES DE DESTAQUE',
    title: 'Realizações tangíveis a serviço da população',
    sub: 'Conheça nossas operações prioritárias realizadas na linha de frente em cooperação com as prefeituras e comitês comunitários da RDC.',
    benefitLabel: 'Benefício direto para as comunidades',
    supervisedBy: 'Supervisionado pela Direção Provincial',
    supportBtn: 'Apoiar este projeto',
    items: [
      {
        id: 'boma-bunkete',
        title: 'Operação « Boma Bunkete »',
        subtitle: 'Remoção de resíduos & regeneração urbana',
        location: 'Boma, Kongo-Central',
        image: heroActionImg,
        category: 'assainissement',
        description: 'Programa histórico de salubridade pública mobilizando mais de 350 voluntários cívicos para erradicação sistemática de lixões clandestinos, desobstrução de canais e reciclagem de plásticos.',
        stats: [
          { label: 'Resíduos Coletados', value: '32.000+ T' },
          { label: 'Voluntários em Campo', value: '350+' },
          { label: 'Bairros Saneados', value: '18 setores' }
        ],
        impactDetail: 'Previne enchentes sazonais e reduz drasticamente a incidência de malária e doenças hídricas para os ribeirinhos do Rio Congo.'
      },
      {
        id: 'protocole-matadi',
        title: 'Protocolo de Saneamento de Matadi',
        subtitle: 'Drenagem estratégica & higiene portuária',
        location: 'Matadi, Kongo-Central',
        image: heroHealthImg,
        category: 'assainissement',
        description: 'Acordo estratégico com a Prefeitura de Matadi para reabilitação das redes de drenagem, instalação de lixeiras ecológicas e conscientização eco-cidadã.',
        stats: [
          { label: 'Canais Reabilitados', value: '24 km' },
          { label: 'Lixeiras Ecológicas', value: '120 unid.' },
          { label: 'Famílias Atendidas', value: '45.000' }
        ],
        impactDetail: 'Protege encostas vulneráveis contra erosões torrenciais e preserva as condições sanitárias do principal porto marítimo da RDC.'
      },
      {
        id: 'kabondo-communautaire',
        title: 'Desenvolvimento Comunitário de Kabondo',
        subtitle: 'Infraestrutura hídrica & resiliência local',
        location: 'Município de Kabondo, Boma',
        image: heroPeopleImg,
        category: 'social',
        description: 'Convênio plurianual para fornecimento de água potável, modernização de centros de aprendizagem técnica para jovens e mulheres, e amparo a orfãos.',
        stats: [
          { label: 'Chafarizes Ativos', value: '16 unidades' },
          { label: 'Jovens Formados', value: '820+' },
          { label: 'Microprojetos', value: '42' }
        ],
        impactDetail: 'Promove a autonomia econômica feminina e assegura escolarização contínua para crianças em situação de extrema vulnerabilidade.'
      },
      {
        id: 'sante-alimentation',
        title: 'Programas de Saúde & Alimentação Sustentável',
        subtitle: 'Nutrição materna & clínicas móveis',
        location: 'Boma, Matadi & zonas rurais do Kongo-Central',
        image: projectAgriImg,
        category: 'agriculture',
        description: 'Distribuição de suplementos nutricionais terapêuticos, suporte a cooperativas agrícolas familiares (mandioca, milho, hortaliças) e atendimento pediátrico gratuito.',
        stats: [
          { label: 'Refeições Entregues', value: '180.000+' },
          { label: 'Hectares Cultivados', value: '250 ha' },
          { label: 'Consultas Gratuitas', value: '15.400' }
        ],
        impactDetail: 'Garante segurança alimentar local por circuitos curtos e reduz comprovadamente a desnutrição infantil severa nas comunidades atendidas.'
      }
    ]
  },
  map: {
    sectionKicker: 'PRESENÇA GEOGRÁFICA',
    title: 'Onde atuamos no território congolês',
    sub: 'Clique em cada polo para explorar nossos projetos permanentes e acordos municipais.',
    activeCountPill: '4 Polos Operacionais Ativos',
    locations: [
      {
        id: 'boma',
        name: 'Boma',
        zone: 'Cidade histórica & Porto fluvial',
        title: 'Operação « Boma Bunkete » & Limpeza Urbana',
        desc: 'Quartel-general das brigadas cívicas da Fundação Pro-Congo. Limpeza sistemática de lixões clandestinos, desobstrução de canais pluviais e reciclagem plástica.',
        stats: '32.000+ toneladas recolhidas • 350 voluntários cívicos',
        activeInitiatives: [
          'Coleta sistemática de resíduos sólidos domiciliares',
          'Desobstrução de galerias ao longo das principais vias',
          'Sensibilização ativa de comitês de bairro'
        ]
      },
      {
        id: 'matadi',
        name: 'Matadi',
        zone: 'Capital provincial & Porto Marítimo',
        title: 'Protocolo de Drenagem & Defesa Sanitária',
        desc: 'Parceria direta com a Prefeitura de Matadi para conter voçorocas de erosão e equipar cais e mercados com contentores herméticos.',
        stats: '24 km de canais desassoreados • 120 lixeiras ecológicas',
        activeInitiatives: [
          'Contenção vegetalizada de encostas e ravinas',
          'Instalações de saneamento no porto de Matadi',
          'Campanhas de educação ambiental nas escolas municipais'
        ]
      },
      {
        id: 'kabondo',
        name: 'Município de Kabondo',
        zone: 'Boma Leste',
        title: 'Polo Comunitário & Acesso à Água Potável',
        desc: 'Rede de chafarizes de água potável comunitários, reforma do centro de ofícios para mulheres e apoio nutricional a orfãos.',
        stats: '16 chafarizes em operação • 820 jovens formados',
        activeInitiatives: [
          'Manutenção comunitária das redes de abastecimento',
          'Oficinas de costura, artesanato e capacitação',
          'Assistência emergencial a mães solo'
        ]
      },
      {
        id: 'bas-fleuve',
        name: 'Distrito do Bas-Fleuve',
        zone: 'Cinturão Agro-Rural (Lukula / Tshela)',
        title: 'Soberania Alimentar & Brigadas Médicas',
        desc: 'Apoio logístico e distribuição de sementes a cooperativas de pequenos agricultores e atendimento médico pediátrico móvel.',
        stats: '250 hectares cultivados • 180.000 rações distribuídas',
        activeInitiatives: [
          'Multiplicação de sementes sadias de mandioca e milho',
          'Consultas pediátricas móveis gratuitas',
          'Distribuição de farinha enriquecida de produção local'
        ]
      }
    ]
  },
  team: {
    sectionKicker: 'GOVERNANÇA & DIREÇÃO',
    title: 'Uma equipe dedicada a serviço do povo',
    sub: 'Uma liderança executiva que une comando operacional direto no terreno da RDC a pontes estratégicas internacionais (Estados Unidos, Brasil, Espanha, Japão).',
    presidentCardBadge: 'Presidência Executiva',
    activeMandate: 'Mandato Ativo',
    strategicVisionSubtitle: 'Fundação Pro-Congo — Liderança & Visão Estratégica',
    directorsHeader: 'Diretoria Operacional & Polos Internacionais',
    members: [
      {
        name: 'Joe Nyakeru',
        role: 'Presidente Nacional / CEO',
        location: 'Sede Nacional — República Democrática do Congo',
        image: leaderPortraitImg,
        bio: 'Líder visionário congolês engajado há mais de 15 anos a serviço das comunidades vulneráveis. Voz incansável pela dignidade humana, renovação cívica e salubridade urbana em toda a República.',
        quote: 'Nossa missão sagrada é levar transformação concreta, visível e mensurável para a vida cotidiana de cada família congolesa.'
      },
      {
        name: 'Placide Baundja Ikuba',
        role: 'Chief Operating Officer (COO)',
        location: 'Diretoria Operacional — Kinshasa & Internacional',
        image: placideBaundjaImg,
        bio: 'Estrategista experiente em gestão de operações humanitárias e desdobramento logístico em campo. Supervisiona cadeias de suprimentos, eficiência operacional dos programas na RDC e coordenação multissetorial das ações prioritárias.',
        quote: 'A excelência operacional e o rigor no terreno são as chaves essenciais para transformar de forma duradoura a vida dos nossos cidadãos.'
      },
      {
        name: 'Max de Castro',
        role: 'Chief Marketing Officer (CMO)',
        location: 'Diretoria Internacional & Diáspora',
        image: maxDeCastroImg,
        bio: 'Estrategista em marketing de impacto, comunicação institucional e articulação filantrópica global. Orquestra a visibilidade internacional da Fundação Pro-Congo, a mobilização de recursos estratégicos e parcerias perenes com a diáspora e apoiadores mundiais.',
        quote: 'Fazer ressoar a força, a resiliência e a esperança do povo congolês junto a parceiros do mundo inteiro.'
      },
      {
        name: 'Sandro Monteiro',
        role: 'Chief Sustainability Officer (CSO)',
        location: 'Polo Internacional — Brasil, Japão & Espanha',
        image: sandroMonteiroImg,
        bio: 'Especialista de alto nível em sustentabilidade ambiental, governança socioambiental e transição ecológica. Com sólida trajetória internacional e realizações de grande porte no Brasil, no Japão e na Espanha, lidera estratégias de resiliência climática, saneamento regenerativo e valorização circular de recursos.',
        quote: 'Integrar as mais avançadas inovações de sustentabilidade do Brasil, do Japão e da Espanha a serviço de um futuro verde e próspero para o povo congolês.'
      }
    ]
  },
  partners: {
    sectionKicker: 'QUEM NOS APOIA',
    title: 'Parceiros & Mecenas Internacionais',
    sub: 'Grandes instituições e empresas de renome mundial se unem às ações prioritárias da Fundação Pro-Congo para acelerar o desenvolvimento humano, a salubridade e a saúde na RDC.',
    becomePartnerBtn: 'Tornar-se mecenas ou parceiro'
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
  },
  news: {
    sectionKicker: 'DIÁRIO DE OPERAÇÕES',
    title: 'Últimas notícias das nossas missões na RDC',
    sub: 'Acompanhe o dia a dia das frentes de saneamento urbano e o trabalho de nossas brigadas de saúde comunitária.',
    readArticle: 'Ler notícia completa',
    items: [
      {
        id: 'news-1',
        title: 'Balanço semestral da Operação « Boma Bunkete »: 45.000 toneladas recolhidas e 18 bairros saneados',
        date: '14 de Março de 2026',
        category: 'Saneamento',
        readTime: '3 min de leitura',
        excerpt: 'A diretoria provincial da Fundação Pro-Congo apresenta um balanço expressivo da campanha de salubridade pública em Boma.',
        content: [
          'Reunidos na prefeitura de Boma, o Presidente Nacional Joe Nyakeru e as autoridades municipais oficializaram os resultados históricos da campanha de saneamento urbano.',
          'Graças ao empenho de mais de 350 voluntários cívicos equipados com material de proteção, os principais canais de escoamento foram desobstruídos antes das fortes chuvas tropicais.',
          '« Transformamos antigos lixões insalubres em espaços comunitários seguros », afirmou a diretoria de operações.'
        ],
        image: heroActionImg
      },
      {
        id: 'news-2',
        title: 'Assinatura do protocolo histórico com a Prefeitura de Matadi para contenção de encostas e drenagem',
        date: '28 de Fevereiro de 2026',
        category: 'Parcerias',
        readTime: '4 min de leitura',
        excerpt: 'Um ambicioso acordo de cooperação de três anos foi firmado para proteger bairros vulneráveis contra erosões e poluição plástica.',
        content: [
          'A cidade portuária de Matadi enfrenta sérios desafios geotécnicos. Este novo protocolo prevê contenções vegetalizadas e a instalação de 120 lixeiras ecológicas seletivas.',
          'O escritório internacional em Atlanta apoia esta iniciativa com financiamento direcionado a maquinário leve de engenharia.',
          'Um programa educativo atenderá também 12 escolas municipais para incentivar hábitos ecológicos entre os jovens.'
        ],
        image: heroHealthImg
      },
      {
        id: 'news-3',
        title: 'Clínicas nutricionais móveis: 1.200 mães e bebês atendidos no Bas-Fleuve',
        date: '10 de Fevereiro de 2026',
        category: 'Saúde & Nutrição',
        readTime: '3 min de leitura',
        excerpt: 'Diante das carências nutricionais em áreas isoladas, nossas equipes médicas realizaram triagens e distribuíram suporte alimentar.',
        content: [
          'Durante duas semanas de circuito intensivo, as brigadas de saúde visitaram sete vilarejos do Bas-Fleuve, administrando suplementos de Vitamina A e farinhas locais enriquecidas.',
          'Placide Baundja Ikuba, Chief Operating Officer, elogiou o trabalho dos voluntários: « A ação humanitária de proximidade e o rigor na execução são a base para construir um futuro digno para os nossos jovens ».'
        ],
        image: projectAgriImg
      }
    ]
  },
  newsDetail: {
    backToNews: 'Voltar ao diário de operações',
    share: 'Compartilhar',
    linkCopied: 'Link copiado!',
    readTimeLabel: 'de leitura',
    relatedTitle: 'Outras notícias recentes',
    supportTitle: 'Apoie nossas ações na linha de frente',
    supportDesc: 'Cada contribuição mantém as clínicas pediátricas ativas e as brigadas de saneamento em campo.',
    donateCta: 'Fazer uma doação agora'
  },
  otherWaysToDonate: {
    backHome: 'Voltar ao início',
    badge: 'Modalidades de Doação & Apoio',
    title: 'Cada gesto transforma concretamente uma vida na RDC.',
    sub: 'Esteja você na República Democrática do Congo, no Brasil, em Portugal, na América do Norte ou em qualquer lugar do mundo, aqui estão os canais diretos e transparentes para agir conosco.',
    simBtn: 'Simular doação ($35)',
    exploreBtn: 'Ver contas & canais',
    simTitle: 'Simulador de Impacto Direto',
    simSub: 'Veja de forma transparente o que a sua contribuição realiza diretamente no terreno:',
    monthly: 'Doação Mensal',
    once: 'Doação Única',
    impactLabel: 'Impacto gerado:',
    donateNowBtn: 'Fazer esta doação agora',
    secureNote: 'Transações seguras com comprovante oficial e prestação de contas transparente.',
    waysTitle: 'Canais Oficiais de Repasse',
    waysSub: 'Escolha o meio mais conveniente de acordo com a sua região.',
    mobileMoneyTitle: 'Mobile Money (RDC & África Central)',
    mobileMoneyDesc: 'Ideal para residentes na RDC e Grandes Lagos via transferência direta instantânea.',
    bankTransferTitle: 'Transferências Bancárias Nacionais & Internacionais',
    bankTransferDesc: 'Contas bancárias dedicadas em Francos Congoleses (CDF) e Dólares (USD) auditadas anualmente.',
    copyLabel: 'Copiar',
    copiedLabel: 'Copiado!',
    cardsTitle: 'Cartão de Crédito, Pix & PayPal',
    cardsDesc: 'Pagamentos internacionais por Visa, Mastercard ou PayPal com recibo eletrônico imediato.',
    inKindTitle: 'Doações em Espécie & Equipamentos Médicos',
    inKindDesc: 'Recebemos contêineres de insumos médicos, maquinário urbano, medicamentos e material escolar.',
    inKindBtn: 'Propor doação de materiais',
    taxReceiptTitle: 'Transparência & Recibo Oficial',
    taxReceiptDesc: 'Todas as doações recebem recibo formal e acesso aos relatórios semestrais de auditoria.'
  },
  volunteerModal: {
    title: 'Seja um Voluntário Cívico',
    sub: 'Junte-se às nossas brigadas no Kongo-Central ou ao suporte voluntário internacional.',
    nameLabel: 'Nome completo *',
    namePlaceholder: 'Seu nome completo',
    emailLabel: 'Endereço de e-mail *',
    phoneLabel: 'Telefone / WhatsApp *',
    countryLabel: 'País de residência',
    areaLabel: 'Área de interesse',
    areaOptions: [
      'Saneamento & Salubridade (Boma/Matadi)',
      'Saúde & Clínicas móveis',
      'Educação & Juventude',
      'Logística & Distribuição',
      'Comunicação & Advocacia Internacional'
    ],
    availLabel: 'Disponibilidade',
    availOptions: [
      'Tempo integral / Campo',
      'Finais de semana & Missões pontuais',
      'Voluntariado remoto (Internacional)'
    ],
    submitBtn: 'Enviar candidatura',
    successTitle: 'Candidatura enviada com sucesso!',
    successDesc: 'Nossa coordenação de voluntariado entrará em contato em até 48 horas úteis.',
    closeBtn: 'Fechar'
  },
  partnerModal: {
    title: 'Seja um Parceiro Institucional',
    sub: 'Prefeituras, órgãos governamentais, empresas com responsabilidade social e fundações.',
    orgLabel: 'Nome da instituição ou empresa *',
    orgPlaceholder: 'Ex: Prefeitura, Empresa, Fundação...',
    repLabel: 'Representante / Cargo *',
    repPlaceholder: 'Nome completo e cargo oficial',
    emailLabel: 'E-mail institucional *',
    typeLabel: 'Tipo de organização',
    typeOptions: [
      'Prefeitura / Órgão Público',
      'Empresa / Responsabilidade Social',
      'Organismo Internacional / Cooperação',
      'Fundação Filantrópica',
      'Associação da Diáspora'
    ],
    msgLabel: 'Resumo da proposta de parceria *',
    msgPlaceholder: 'Descreva resumidamente os objetivos de cooperação...',
    submitBtn: 'Submeter proposta',
    successTitle: 'Proposta enviada com sucesso!',
    successDesc: 'Nossa diretoria de parcerias e o secretariado executivo analisarão sua proposta com a máxima prioridade.',
    closeBtn: 'Fechar'
  },
  contact: {
    sectionKicker: 'CONTATO & SEDES',
    title: 'Fale diretamente conosco',
    sub: 'Nossas equipes na República Democrática do Congo estão à sua disposição para esclarecer dúvidas e receber propostas.',
    hqDrcTitle: 'Sede Nacional — RDC',
    hqDrcOrg: 'Fundação Pro-Congo — Direção Provincial',
    hqDrcLoc: 'Boma & Matadi, Província do Kongo-Central, República Democrática do Congo',
    intlUsaTitle: 'Polo Internacional — EUA',
    intlUsaOrg: 'Hub Internacional Fundação Pro-Congo',
    intlUsaLoc: 'Atlanta, Georgia, Estados Unidos da América',
    formTitle: 'Envie uma mensagem à diretoria',
    formSub: 'Preencha os campos abaixo para falar diretamente com os nossos escritórios.',
    nameLabel: 'Nome completo *',
    namePlaceholder: 'Seu nome',
    emailLabel: 'Endereço de e-mail *',
    subjectLabel: 'Assunto da mensagem',
    subjectOptions: [
      'Informações gerais',
      'Doação / Parceria empresarial',
      'Assessoria de imprensa',
      'Candidatura voluntária',
      'Outro'
    ],
    msgLabel: 'Sua mensagem *',
    msgPlaceholder: 'Como podemos ajudar?',
    sendBtn: 'Enviar mensagem',
    sentSuccessTitle: 'Mensagem enviada com sucesso!',
    sentSuccessDesc: 'Retornaremos o seu contato o mais breve possível.'
  },
  footer: {
    desc: 'Organização não governamental dedicada à assistência social, saúde pública, saneamento urbano e desenvolvimento humano sustentável na República Democrática do Congo.',
    certText: 'Transparência e conformidade jurídica certificada na RDC',
    followUs: 'Acompanhe nossas operações nas redes sociais',
    quickLinksTitle: 'Navegação',
    programsTitle: 'Eixos de Atuação',
    donateBoxTitle: 'Apoie o nosso trabalho',
    donateBoxDesc: 'Cada contribuição salva vidas e regenera comunidades congolesas.',
    donateBoxBtn: 'Doe agora',
    copyright: '© 2026 Fundação Pro-Congo. Todos os direitos reservados.',
    allRightsReserved: 'Em favor do povo Congolês.',
    backToTop: 'Voltar ao topo'
  }
};
