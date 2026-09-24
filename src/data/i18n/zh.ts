import { TranslationSchema } from './types';
import heroPeopleImg from '../../assets/images/hero_people_congo_1790205940535.jpg';
import heroActionImg from '../../assets/images/hero_action_boma_1790205949960.jpg';
import heroHealthImg from '../../assets/images/hero_health_care_1790205959462.jpg';
import projectAgriImg from '../../assets/images/project_agriculture_1790205970258.jpg';
import leaderPortraitImg from '../../assets/images/joe_nyakeru_executive_1790216333026.jpg';
import placideBaundjaImg from '../../assets/images/placide_baundja_portrait.jpg';
import maxDeCastroImg from '../../assets/images/max_de_castro_portrait.jpg';
import sandroMonteiroImg from '../../assets/images/sandro_monteiro_portrait.jpg';

export const zhTranslations: TranslationSchema = {
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
  preloader: {
    skip: '跳过介绍',
    loading: '正在加载前线行动...',
    slides: [
      {
        title: '博马清洁行动（Boma Bunkete）— 城市环境治理',
        location: '中刚果省 · 博马',
        tag: '环境卫生治理'
      },
      {
        title: '基层医疗与流动儿科巡回诊所',
        location: '马塔迪与下河区',
        tag: '医疗与应急救助'
      },
      {
        title: '粮食自主与家庭小农合作社扶持',
        location: '中刚果省',
        tag: '可持续农业'
      },
      {
        title: '困境儿童保护与妇女职业技能培训',
        location: '博马 · 卡邦多',
        tag: '社区发展赋能'
      },
      {
        title: '人道主义应急救援物资高效配送',
        location: '刚果民主共和国',
        tag: '人道主义救助'
      }
    ]
  },
  hero: {
    kicker: 'PRO-CONGO 基金会',
    slide1Title: '造福刚果人民。',
    slide1Sub: '与刚果（金）基层社区并肩作战，专注公共医疗、食品安全、城市卫生与有尊严的教育。',
    slide1Cta1: '了解我们的使命',
    slide1Cta2: '立即捐赠',
    slide2Title: '建设洁净刚果，从今天启程。',
    slide2Sub: '博马清洁行动（Boma Bunkete）：清除违规垃圾场、塑料循环处理与社区公民焕新。',
    slide2Cta: '查看重点项目',
    slide3Title: '将健康与希望送到最需要的人身边。',
    slide3Sub: '平价医疗救助、流动儿科诊所及对本地小农合作社的全力扶持。',
    slide3Cta: '支持核心项目'
  },
  mission: {
    sectionKicker: '我们在刚果（金）的承诺',
    title: '维护人类尊严的坚定草根力量。',
    manifestoQuote: '“造福刚果人民。”',
    badgeRdc: '🇨🇩 刚果（金）· 中刚果省',
    oathDesc: '庄严写在官方章程中的无条件行动誓言，每日践行在博马、马塔迪以及中刚果省的大街小巷。',
    ngoLegalCert: '依据刚果民主共和国法律正式注册的非政府组织',
    p1: 'Pro-Congo 基金会源于一个不可妥协的信念：如果母亲、儿童与长者无法获得洁净水源、基本医疗与一日三餐，任何社会都无法实现真正的繁荣。',
    p2: '从中刚果省的基层据点到亚特兰大的国际协作网络，我们与地方政府和传统长者紧密配合，推行透明高效的现场直接援助。',
    p3: '每一笔善款都化作行驶在城市街道上的清洁工程车、分发的营养餐食以及免受疾病威胁的健康生命。',
    valuesTitle: '四大诚信基石',
    values: [
      {
        title: '前线直接行动',
        desc: '常年驻扎社区一线，与地方长者、街区委员会及弱势家庭紧密相连。'
      },
      {
        title: '透明严谨管理',
        desc: '每一分善款均具备完整可追溯性，接受独立财务审计并定期向社会公开报告。'
      },
      {
        title: '扎根自主发展',
        desc: '项目由受过专业培训并获得体面报酬的刚果本土青年主导，亲手建设美好家园。'
      },
      {
        title: '尊严与长远影响',
        desc: '超越临时救济，投资持久的公共基础设施，重塑社区公民自豪感。'
      }
    ]
  },
  impactStats: {
    sectionKicker: '前线扎实成效',
    title: '我们在刚果（金）的可量化成果',
    sub: '经中刚果省市政官方运营报告认证的真实成果。',
    items: [
      {
        id: 'beneficiaires',
        value: 120000,
        suffix: '+',
        label: '直接受益群众',
        description: '在刚果（金）各综合发展项目中获得持续帮扶的儿童、母亲与家庭。'
      },
      {
        id: 'dechets',
        value: 45000,
        suffix: ' 吨',
        label: '清运城市垃圾',
        description: '已收集、分拣并做无害化与可持续循环处理的各类城市生活与塑料垃圾。'
      },
      {
        id: 'communes',
        value: 14,
        suffix: '',
        label: '合作市镇政府',
        description: '签署长期合作协议，确保基层公共项目在当地长久发挥效益。'
      },
      {
        id: 'provinces',
        value: 4,
        suffix: '',
        label: '前线行动基地',
        description: '中刚果省（博马、马塔迪、卡邦多、下河区）与全国协同枢纽。'
      }
    ]
  },
  pillars: {
    sectionKicker: '重点领域',
    title: '改善刚果（金）社区的四大战略支柱。',
    sub: '全方位应对紧急生存危机，构建长效社区自主能力。',
    donateToPillar: '支持该支柱',
    items: [
      {
        id: 'agriculture',
        title: '农业与粮食安全',
        desc: '扶持家庭农业合作社，分发木薯与玉米优良粮种，保障农村粮食自主。',
        tag: '粮食自主',
        keyPoints: [
          '直接支持250公顷粮食作物（木薯、玉米、蔬菜）规模化种植',
          '提供优良粮种与现代化农耕器具',
          '建设直达学校厨房和城市菜市场的短链供销网络'
        ]
      },
      {
        id: 'sante',
        title: '基层医疗卫生',
        desc: '流动儿科诊所、母婴安全分娩包，以及针对贫困家庭的免费筛查救治。',
        tag: '一线医疗',
        keyPoints: [
          '流动医疗巡回车深入下河区偏远孤立村落',
          '儿童营养不良早期筛查与微量元素强化补给',
          '清洁分娩包呵护母婴平安'
        ]
      },
      {
        id: 'social',
        title: '社会帮扶与教育',
        desc: '弱势孤儿保护、妇女职业技能培训中心及青年社区赋能奖学金。',
        tag: '包容与未来',
        keyPoints: [
          '困境街童收容与重返校园支持中心',
          '单亲母亲技能工坊与现代缝纫裁剪培训',
          '为刚果（金）优秀青年设立公民励志奖学金'
        ]
      },
      {
        id: 'assainissement',
        title: '城市环境与卫生整治',
        desc: '城市固废清理转运、雨水渠疏浚排涝、废旧塑料回收与水土流失防治。',
        tag: '卫生与气候',
        keyPoints: [
          '主干道下水道和主要排涝明渠大规模清淤作业',
          '城市塑料废弃物分类与循环利用中心',
          '护坡固土工程防止暴雨冲刷引发冲沟塌陷'
        ]
      }
    ]
  },
  humaneImpact: {
    kicker: '一线实干行动',
    word1: '凝聚。',
    word2: '破局。',
    word3: '改变。',
    body: '漠视无法清理泛滥的垃圾，也无法治愈病弱的儿童。在刚果（金），我们的志愿者与基层工作者每天都在一线行动。加入我们，共同捍卫尊严与希望。',
    cta: '加入志愿者行列'
  },
  projects: {
    sectionKicker: '重点行动成果',
    title: '服务本土人民的实打实成效',
    sub: '了解我们与刚果（金）地方政府和社区委员会在一线携手推进的核心项目。',
    benefitLabel: '直接造福广大社区群众',
    supervisedBy: '由省执行局实地监督',
    supportBtn: '支持此项目',
    items: [
      {
        id: 'boma-bunkete',
        title: '博马清洁行动（Boma Bunkete）',
        subtitle: '垃圾转运与城市新生',
        location: '中刚果省 · 博马',
        image: heroActionImg,
        category: 'assainissement',
        description: '开创性的公共卫生工程，动员逾350名青年志愿者对违规垃圾堆进行地毯式清理，疏通城市排涝渠并回收塑料。',
        stats: [
          { label: '清运垃圾', value: '3.2万+ 吨' },
          { label: '一线志愿者', value: '350+ 人' },
          { label: '治理街区', value: '18 个区域' }
        ],
        impactDetail: '有效消除季节性内涝隐患，显著降低刚果河沿岸居民区疟疾与水源性传染病发病率。'
      },
      {
        id: 'protocole-matadi',
        title: '马塔迪城市排水与卫生防线协议',
        subtitle: '战略排涝管网与港口卫生',
        location: '中刚果省 · 马塔迪',
        image: heroHealthImg,
        category: 'assainissement',
        description: '与马塔迪市政厅签署战略协议，加固排洪河道防线，在主要码头和集市投放分类环保垃圾箱并开展科普。',
        stats: [
          { label: '疏浚河渠', value: '24 公里' },
          { label: '环保垃圾桶', value: '120 个' },
          { label: '惠及家庭', value: '45,000 户' }
        ],
        impactDetail: '守护山坡脆弱地带免受暴雨侵蚀滑坡，守护刚果（金）第一大出海门户的公共卫生安全。'
      },
      {
        id: 'kabondo-communautaire',
        title: '卡邦多社区综合发展项目',
        subtitle: '饮水基础设施与社区赋能',
        location: '博马 · 卡邦多市镇',
        image: heroPeopleImg,
        category: 'social',
        description: '多年期市政合作，兴建太阳能洁净饮水站，修缮青年与妇女职业技能培训中心，常年救助失依孤儿。',
        stats: [
          { label: '洁净饮水站', value: '16 座运行' },
          { label: '培训学员', value: '820+ 人' },
          { label: '扶持微型项目', value: '42 个' }
        ],
        impactDetail: '有效提升女性合作社经济独立能力，为极度贫困家庭儿童提供稳定的初等教育机会。'
      },
      {
        id: 'sante-alimentation',
        title: '可持续健康与食品安全保障',
        subtitle: '母婴营养补给与巡回医疗车',
        location: '博马、马塔迪及下河区农村',
        image: projectAgriImg,
        category: 'agriculture',
        description: '提供治疗性营养补充剂，扶持家庭粮食合作社（木薯、玉米、蔬菜），并派出流动儿科义诊车。',
        stats: [
          { label: '分发营养餐', value: '180,000+ 份' },
          { label: '耕种土地', value: '250 公顷' },
          { label: '免费义诊人次', value: '15,400 次' }
        ],
        impactDetail: '通过本地短链农产品保障粮食安全，显著降低偏远农村儿童重度急性营养不良率。'
      }
    ]
  },
  map: {
    sectionKicker: '工作区域分布',
    title: '我们在刚果（金）的行动网络',
    sub: '点击各基地探索我们常年开展的重点工程与市政合作项目。',
    activeCountPill: '4 个活跃一线基地',
    locations: [
      {
        id: 'boma',
        name: '博马（Boma）',
        zone: '历史名城与内河港口',
        title: '博马清洁行动（Boma Bunkete）与市政环卫',
        desc: 'Pro-Congo 基金会前线青年大队总指挥部。大力清理非正规垃圾倾倒点，改造疏通城市主干道排涝设施，回收塑料。',
        stats: '清运垃圾超 32,000 吨 • 350 名青年志愿者',
        activeInitiatives: [
          '城市生活垃圾系统化收运',
          '主干道路边沟渠深度清淤',
          '与各街区委员会深度联动倡导'
        ]
      },
      {
        id: 'matadi',
        name: '马塔迪（Matadi）',
        zone: '省会中心与主要海运港',
        title: '城市排涝与港口卫生防线协议',
        desc: '与马塔迪市政厅携手治理暴雨冲沟水土流失，在码头及主要批发市场配备密封环保垃圾桶。',
        stats: '疏浚清淤 24 公里 • 投放 120 个环保垃圾箱',
        activeInitiatives: [
          '冲沟生态植被固坡工程',
          '马塔迪港口区域环境整治',
          '在公立中小学推广生态文明'
        ]
      },
      {
        id: 'kabondo',
        name: '卡邦多市镇（Kabondo）',
        zone: '博马东区',
        title: '社区服务中心与安全饮水工程',
        desc: '太阳能社区清洁饮水网络，翻新女子职业技能培训学校，为孤儿提供持续营养援助。',
        stats: '16 座饮水站稳定运行 • 820 名学员结业',
        activeInitiatives: [
          '社区供水管网常态化维护',
          '手工艺与实用缝纫裁缝培训班',
          '向特困单亲母亲提供紧急救济'
        ]
      },
      {
        id: 'bas-fleuve',
        name: '下河区（Bas-Fleuve）',
        zone: '现代农业农村绿带（卢库拉 / 采拉）',
        title: '粮食自主与巡回医疗车队',
        desc: '为乡村小农合作社提供农具种子与仓储物流支持，定期派遣儿科流动义诊医疗车。',
        stats: '耕种 250 公顷土地 • 分发 18 万份营养餐',
        activeInitiatives: [
          '高产抗病木薯与优质玉米良种繁育',
          '偏远村落流动儿科免费义诊',
          '配发本地加工的强化营养粥粉'
        ]
      }
    ]
  },
  team: {
    sectionKicker: '领导团队与治理架构',
    title: '恪尽职守、造福人民的领导集体',
    sub: '卓越的高效治理架构：既有刚果（金）前线的果断指挥，又兼备遍布美国、巴西、西班牙及日本的全球战略网络支持。',
    presidentCardBadge: '执行总裁',
    activeMandate: '现任履职',
    strategicVisionSubtitle: 'Pro-Congo 基金会 — 领导力与战略愿景',
    directorsHeader: '运营决策团队与国际战略枢纽',
    members: [
      {
        name: '乔·尼亚凯鲁（Joe Nyakeru）',
        role: '全国总裁 / 首席执行官 (CEO)',
        location: '全国总部 — 刚果民主共和国',
        image: leaderPortraitImg,
        bio: '富有远见的刚果领袖，深耕弱势群体公益逾15载。在全国范围内坚持不懈地倡导人类尊严、公民复兴与城市宜居生态建设。',
        quote: '我们神圣的使命，是为每一个刚果普通家庭的日常切实带来肉眼可见、可衡量的真实改善。'
      },
      {
        name: '普拉西德·邦贾·伊库巴（Placide Baundja Ikuba）',
        role: '首席运营官 (COO)',
        location: '运营总指挥部 — 金沙萨与国际',
        image: placideBaundjaImg,
        bio: '资深人道主义行动与现场物流供应链专家。统筹协调刚果（金）全境各项目的供应链、运营效率及重点项目的跨领域协同。',
        quote: '卓越的运营效率与扎实的前线执行力，是永久改变同胞生活的关键所在。'
      },
      {
        name: '马克斯·德·卡斯特罗（Max de Castro）',
        role: '首席营销官 (CMO)',
        location: '国际事务与海外侨民部',
        image: maxDeCastroImg,
        bio: '社会影响力营销、机构传播与全球慈善合作专家。主持 Pro-Congo 基金会的国际声誉建设、战略资源动员以及与非洲侨界和全球伙伴的紧密合作。',
        quote: '向全世界伙伴展现刚果人民坚韧不拔的韧性、力量与希望。'
      },
      {
        name: '桑德罗·蒙泰罗（Sandro Monteiro）',
        role: '首席可持续发展官 (CSO)',
        location: '国际战略中心 — 巴西、日本与西班牙',
        image: sandroMonteiroImg,
        bio: '环境可持续发展、生态社会治理与绿色转型资深专家。在巴西、日本和西班牙拥有广泛的国际实绩，领衔气候韧性战略、再生型卫生治理及可持续资源循环利用。',
        quote: '融合巴西、日本与西班牙最前沿的可持续发展智慧，为刚果人民开创绿色繁荣的未来。'
      }
    ]
  },
  partners: {
    sectionKicker: '谁在支持我们',
    title: '国际合作伙伴与赞助机构',
    sub: '享誉全球的国际机构与领军企业同 Pro-Congo 基金会紧密合作，共同加速刚果（金）的人的发展、城市卫生与公共健康。',
    becomePartnerBtn: '成为战略伙伴或赞助商'
  },
  aerialSupport: {
    title: '我 要 支 持',
    subtitle: '多种捐款途径（当地移动支付 M-Pesa / Orange / Airtel、国际信用卡、PayPal 与银行电汇）',
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
  },
  news: {
    sectionKicker: '前线动态与简报',
    title: '我们在刚果（金）的最新前线动态',
    sub: '跟踪了解环卫工程进展与社区医疗巡回大队的每日动向。',
    readArticle: '阅读完整简报',
    items: [
      {
        id: 'news-1',
        title: '博马清洁行动（Boma Bunkete）半年总结：清运垃圾45,000吨，治理18个街区',
        date: '2026年3月14日',
        category: '环境卫生',
        readTime: '阅读时长 3 分钟',
        excerpt: 'Pro-Congo 基金会中刚果省执行局发布了与博马市政当局联合开展的公共卫生工程亮眼成果。',
        content: [
          '在博马市政厅举行的总结会上，全国总裁 Joe Nyakeru 与市政长官共同正式公布了城市环境卫生战役取得的空前成果。',
          '得益于配备现代化防护装备的350多名青年志愿者的无私奉献，主要雨水排涝明渠在热带雨季暴雨来临前实现彻底畅通。',
          '“我们已成功将昔日恶臭扑鼻的非法垃圾场改造成安全的社区活动空间，”现场运营团队负责人表示。'
        ],
        image: heroActionImg
      },
      {
        id: 'news-2',
        title: '与马塔迪市政厅签署历史性协议，治理城市山体冲沟水土流失',
        date: '2026年2月28日',
        category: '战略合作',
        readTime: '阅读时长 4 分钟',
        excerpt: '一项为期三年的雄心勃勃合作框架协议正式落地，旨在保护脆弱山坡居民区免受山体滑坡与塑料污染侵害。',
        content: [
          '港口城市马塔迪面临严峻的地质灾害挑战。该新协议规定建设生态植被护坡堤坝，并投放120个分类环保垃圾箱。',
          '亚特兰大国际办公室为该项目提供专项资金，用于采购轻型土木工程作业机械。',
          '一项涵盖12所市立小学的环保教育计划也将同步开展，从小培养少年儿童的生态文明好习惯。'
        ],
        image: heroHealthImg
      },
      {
        id: 'news-3',
        title: '流动儿科营养诊所：在下河区救助1,200名母亲与婴儿',
        date: '2026年2月10日',
        category: '医疗与营养',
        readTime: '阅读时长 3 分钟',
        excerpt: '针对偏远闭塞地区的严重营养不足状况，我们的医疗团队部署了早期筛查与特需食品援助救济单元。',
        content: [
          '在为期两周的高密度巡诊期间，基金会医疗大队走访了下河区七个偏远村落，为婴幼儿补充维生素A并分发本地配方强化营养粉。',
          '首席运营官 Placide Baundja Ikuba 赞扬了一线医护人员的奉献精神：“扎根基层的直接人道行动与严谨高效的执行力，是为祖国下一代筑牢尊严未来的基石。”'
        ],
        image: projectAgriImg
      }
    ]
  },
  newsDetail: {
    backToNews: '返回前线动态',
    share: '分享',
    linkCopied: '链接已复制！',
    readTimeLabel: '阅读',
    relatedTitle: '更多前线最新简报',
    supportTitle: '支持我们的一线行动',
    supportDesc: '您的每一笔捐助都直接保障流动儿科诊所的运转和城市街道的清洁作业。',
    donateCta: '立即捐赠'
  },
  otherWaysToDonate: {
    backHome: '返回首页',
    badge: '捐赠方式与支持途径',
    title: '每一份支持，都切实改变着刚果人民的命运。',
    sub: '无论您身在刚果民主共和国、北美、欧洲非洲侨界，还是世界任何角落，以下均为透明正规的直接支持通道。',
    simBtn: '模拟捐赠（$35）',
    exploreBtn: '查看账户与转账代码',
    simTitle: '一线实效模拟计算器',
    simSub: '清晰直观地了解您的善款在一线具体能实现什么：',
    monthly: '按月持续捐助',
    once: '单笔爱心捐助',
    impactLabel: '善款成效：',
    donateNowBtn: '立即完成捐赠',
    secureNote: '安全支付，提供官方正规收据与全流程透明审计。',
    waysTitle: '官方捐款入账途径',
    waysSub: '选择最适合您所在地区的便捷方式。',
    mobileMoneyTitle: '移动支付 Mobile Money（刚果及中非地区）',
    mobileMoneyDesc: '非常适合刚果（金）及大湖区居民，即时免手续费转账。',
    bankTransferTitle: '国内与国际银行电汇',
    bankTransferDesc: '常年接受第三方独立审计的刚果法郎（CDF）与美元（USD）专用账户。',
    copyLabel: '复制',
    copiedLabel: '已复制！',
    cardsTitle: '国际信用卡与 PayPal',
    cardsDesc: '支持全球 Visa、MasterCard 或 PayPal 线上快捷支付，即时生成电子收据。',
    inKindTitle: '实物捐赠与医疗工程设备',
    inKindDesc: '我们接收整柜医疗器械、市政环卫工程车辆、药品及教学用具集装箱。',
    inKindBtn: '提交实物捐赠意向',
    taxReceiptTitle: '透明诚信与官方凭证',
    taxReceiptDesc: '所有善款均可开具正式捐款凭证，并享有半年期审计影响力报告。'
  },
  volunteerModal: {
    title: '成为一线青年志愿者',
    sub: '加入我们在中刚果省的前线大队，或参与国际志愿协作支持。',
    nameLabel: '完整姓名 *',
    namePlaceholder: '您的姓名',
    emailLabel: '电子邮箱 *',
    phoneLabel: '联系电话 / WhatsApp *',
    countryLabel: '现居住国家',
    areaLabel: '意向服务领域',
    areaOptions: [
      '环境卫生与垃圾治理（博马 / 马塔迪）',
      '基层医疗与流动义诊',
      '青年关怀与基础教育',
      '物流仓储与物资分发',
      '对外传播与国际倡导'
    ],
    availLabel: '可参与时间',
    availOptions: [
      '全职 / 深入一线驻点',
      '周末与定期特别任务',
      '远程线上志愿协作（国际）'
    ],
    submitBtn: '提交志愿者申请',
    successTitle: '申请已成功提交！',
    successDesc: '我们的志愿者协调员将在 48 个工作小时内与您取得联系。',
    closeBtn: '关闭'
  },
  partnerModal: {
    title: '成为机构战略合作伙伴',
    sub: '市镇政府、国际发展机构、践行企业社会责任（CSR）的领军企业与公益基金会。',
    orgLabel: '机构或企业全称 *',
    orgPlaceholder: '如：某市政府、某企业、某基金会...',
    repLabel: '官方代表姓名与职务 *',
    repPlaceholder: '代表姓名及正式职务',
    emailLabel: '官方公函邮箱 *',
    typeLabel: '机构性质',
    typeOptions: [
      '市镇政府 / 地方公共部门',
      '企业社会责任（CSR）与赞助',
      '国际合作发展组织',
      '慈善公益基金会',
      '海外侨胞协会'
    ],
    msgLabel: '合作构想与意向概述 *',
    msgPlaceholder: '简要描述您的合作目标与计划...',
    submitBtn: '提交合作意向',
    successTitle: '合作意向已成功发送！',
    successDesc: '我们的战略合作部与执行秘书处将以最高优先级审阅并回复您的提案。',
    closeBtn: '关闭'
  },
  contact: {
    sectionKicker: '联系方式与前线据点',
    title: '与我们直接取得联系',
    sub: '我们在刚果民主共和国本土的团队随时为您答疑解惑、探讨合作与支持。',
    hqDrcTitle: '全国总部 — 刚果（金）',
    hqDrcOrg: 'Pro-Congo 基金会 — 省执行局',
    hqDrcLoc: '刚果民主共和国 · 中刚果省 · 博马与马塔迪',
    intlUsaTitle: '国际枢纽 — 美国',
    intlUsaOrg: 'Pro-Congo 基金会国际协调中心',
    intlUsaLoc: '美国佐治亚州亚特兰大市',
    formTitle: '向领导层发送留言',
    formSub: '请填写下方表单，直接与我们的办公人员取得联系。',
    nameLabel: '完整姓名 *',
    namePlaceholder: '您的姓名',
    emailLabel: '电子邮箱 *',
    subjectLabel: '留言主题',
    subjectOptions: [
      '一般信息咨询',
      '爱心捐赠与企业赞助合作',
      '媒体采访与报道联络',
      '志愿者招募咨询',
      '其他事宜'
    ],
    msgLabel: '留言内容 *',
    msgPlaceholder: '请告诉我们您需要什么帮助？',
    sendBtn: '发送留言',
    sentSuccessTitle: '留言已成功发出！',
    sentSuccessDesc: '我们将尽快与您取得联系并予以回复。'
  },
  footer: {
    desc: '致力于推动刚果民主共和国社会救助、公共医疗、城市生态卫生与可持续人类发展的非政府组织。',
    certText: '经刚果（金）政府依法认证，公开透明合规',
    followUs: '在社交网络上关注我们的一线行动',
    quickLinksTitle: '快速导航',
    programsTitle: '核心领域',
    donateBoxTitle: '支持前线实干行动',
    donateBoxDesc: '您的每一份善意，都在守护生命、洁净刚果家园。',
    donateBoxBtn: '立即捐赠',
    copyright: '© 2026 Pro-Congo 基金会。保留所有权利。',
    allRightsReserved: '造福刚果人民。',
    backToTop: '回到顶部'
  }
};
