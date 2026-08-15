import { Director, FocusArea, Project, Story, UpcomingProject, ImpactMetric } from '../types';

export interface BilingualHeroSlide {
  id: string;
  title: string;
  titleHi: string;
  subtitle: string;
  subtitleHi: string;
  imageUrl: string;
  tag: string;
  tagHi: string;
  ctaText: string;
  ctaTextHi: string;
}

export const HERO_SLIDES: BilingualHeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Empowering Bihar, Together',
    titleHi: 'सशक्त बिहार, समृद्ध गांव समाज',
    subtitle: 'Building a sustainable future through education, women empowerment, and community action across all 38 districts of Bihar with Gaon Samaj.',
    subtitleHi: 'गांव समाज संस्था के माध्यम से बिहार के सभी 38 जिलों में शिक्षा, महिला सशक्तिकरण और ग्रामीण विकास की दिशा में सतत प्रयास।',
    imageUrl: '/hero-healthy-bihar.png',
    tag: 'Youth & Education',
    tagHi: 'युवा एवं शिक्षा',
    ctaText: 'Learn More',
    ctaTextHi: 'अधिक जानें',
  },
  {
    id: 'slide-2',
    title: 'Madhubani Art & Craft Revival',
    titleHi: 'मधुबनी कला एवं शिल्प पुनरुद्धार',
    subtitle: 'Providing direct livelihoods to rural craftswomen while preserving Bihar’s 3,000-year-old heritage art forms.',
    subtitleHi: 'बिहार की 3000 साल पुरानी पारंपरिक मधुबनी चित्रकला को सहेजते हुए ग्रामीण महिलाओं को सीधा रोजगार उपलब्ध कराना।',
    imageUrl: '/hero-empowered-bihar.png',
    tag: 'Cultural Heritage',
    tagHi: 'सांस्कृतिक विरासत',
    ctaText: 'Explore Artisans',
    ctaTextHi: 'कलाकारों को देखें',
  },
  {
    id: 'slide-3',
    title: 'Eco-Tourism along River Ganga',
    titleHi: 'गंगा तट एवं ग्रामीण इको-टूरिज्म',
    subtitle: 'Connecting rural communities in Vikramshila, Nalanda, and Rajgir with green tourism and cultural exchanges.',
    subtitleHi: 'विक्रमशिला, नालंदा और राजगीर के ग्रामीण समुदायों को हरित पर्यटन और सांस्कृतिक आदान-प्रदान से जोड़ना।',
    imageUrl: '/hero-cultural-bihar.png',
    tag: 'Sustainable Living',
    tagHi: 'सतत ग्रामीण विकास',
    ctaText: 'View Initiatives',
    ctaTextHi: 'पहल देखें',
  },
  {
    id: 'slide-4',
    title: 'Grassroots Agricultural Growth',
    titleHi: 'जमीनी स्तर पर कृषि एवं किसान विकास',
    subtitle: 'Equipping smallholder farmers with solar water pumps, organic fertilizer knowledge, and direct market access.',
    subtitleHi: 'छोटे किसानों को सौर ऊर्जा सिंचाई पंप, जैविक खाद तकनीक और सीधे बाजार से जोड़कर आत्मनिर्भर बनाना।',
    imageUrl: '/hero-viksit-bihar.jpg',
    tag: 'Rural Economy',
    tagHi: 'ग्रामीण अर्थव्यवस्था',
    ctaText: 'Farmer Stories',
    ctaTextHi: 'किसान गाथाएं',
  },
];

export interface BilingualDirector extends Director {
  titleHi?: string;
  bioHi?: string;
  fullBioHi?: string;
  quoteHi?: string;
}

export const DIRECTORS: BilingualDirector[] = [
  {
    id: 'dir-3',
    name: 'Shri Sanjay Mayukh Ji',
    title: 'Patron & Guide',
    titleHi: 'संरक्षक एवं मार्गदर्शक',
    bio: 'Member of the Bihar Legislative Council (MLC) and National Spokesperson for the BJP. Known for his grassroots experience and strategic role in Bihar.',
    bioHi: 'बिहार विधान परिषद (एमएलसी) के सदस्य और भाजपा के राष्ट्रीय प्रवक्ता। अपने जमीनी अनुभव और बिहार में रणनीतिक भूमिका के लिए जाने जाते हैं।',
    fullBio: 'Shri Sanjay Mayukh Ji is a prominent Indian politician, currently serving as a Member of the Bihar Legislative Council (MLC) and National Spokesperson for the Bharatiya Janata Party (BJP). He holds a PhD, M.A., and P.G. Diploma in Rural Management from Patna University.\n\nKnown for his long-standing grassroots experience, he is a key strategist within Bihar\'s political landscape. As a patron and guide to the Gaon Samaj initiative, he brings decades of public service experience, strategic vision, and a deep commitment to the development of rural Bihar.',
    fullBioHi: 'श्री संजय मयूख जी एक प्रमुख भारतीय राजनीतिज्ञ हैं, जो वर्तमान में बिहार विधान परिषद (एमएलसी) के सदस्य और भारतीय जनता पार्टी (भाजपा) के राष्ट्रीय प्रवक्ता के रूप में कार्यरत हैं। उन्होंने पटना विश्वविद्यालय से ग्रामीण प्रबंधन में पीएचडी, एम.ए. और पी.जी. डिप्लोमा किया है।\n\nअपने दीर्घकालिक जमीनी अनुभव के लिए जाने जाने वाले, वह बिहार के राजनीतिक परिदृश्य में एक प्रमुख रणनीतिकार हैं। गांव समाज पहल के संरक्षक और मार्गदर्शक के रूप में, वे अपने साथ सार्वजनिक सेवा का दशकों का अनुभव, रणनीतिक दृष्टिकोण और ग्रामीण बिहार के विकास के प्रति गहरी प्रतिबद्धता लाते हैं।',
    imageUrl: '/director-sanjay.jpg',
    email: 'sanjay.mayukh@gmail.com',
    quote: 'Empowering the grassroots is the key to building a strong and self-reliant Bihar.',
    quoteHi: 'जमीनी स्तर को सशक्त बनाना ही एक मजबूत और आत्मनिर्भर बिहार के निर्माण की कुंजी है।',
    socials: { facebook: '#', twitter: '#', instagram: '#', youtube: '#' },
  },
  {
    id: 'dir-1',
    name: 'Kundan Kumar Singh',
    title: 'Founder, Politico Insights | President, Gaonsamaj.com',
    titleHi: 'संस्थापक, पॉलिटिको इनसाइट्स | अध्यक्ष, गाँवसमाज.कॉम',
    bio: 'The Architect of Strategy. Hailing from the historic and politically vibrant soil of Siwan, Bihar. Engaged deeply in social work and grassroots action.',
    bioHi: 'रणनीति के शिल्पकार। सीवान, बिहार की ऐतिहासिक और राजनीतिक रूप से जीवंत धरती से जुड़े हुए हैं। सामाजिक कार्यों में जमीनी स्तर पर सक्रिय।',
    fullBio: 'Kundan Kumar Singh’s journey began in the vibrant soil of Siwan, Bihar, where his modest roots and rigorous UPSC preparation at Delhi University gave him a firsthand understanding of India\'s administrative flaws. Engaging deeply in social work and filing RTIs during his academic years, he recognized the stark divide between government policy on paper and actual grassroots implementation.\n\nChanneling this realization into action, he founded Politico Insights to bridge the gap between political leaders and the electorate through high-tech data synchronization. Today, he operates as the strategic backbone for over 15 high-profile leaders, commanding their campaign planning and daily constituency execution with ruthless efficiency.\n\nDespite his high-stakes political work, Kundan remains deeply committed to social upliftment as the President of Gaonsamaj.com. Under his leadership, the initiative has provided free internships to over 800 students, empowering a new generation of capable youth with the guiding belief that there are still "more ways to go, more years to come, more stories to write."',
    fullBioHi: 'कुंदन कुमार सिंह की यात्रा बिहार के सीवान की जीवंत धरती से शुरूരുവ हुई, जहां उनकी साधारण जड़ों और दिल्ली विश्वविद्यालय में कठोर यूपीएससी की तैयारी ने उन्हें भारत की प्रशासनिक खामियों की प्रत्यक्ष समझ दी। अपने शैक्षणिक वर्षों के दौरान सामाजिक कार्यों में गहराई से जुड़ने और आरटीआई दायर करने से, उन्होंने कागजों पर सरकारी नीति और वास्तविक जमीनी कार्यान्वयन के बीच के स्पष्ट अंतर को पहचाना।\n\nइस अहसास को कार्रवाई में बदलते हुए, उन्होंने उच्च तकनीक वाले डेटा सिंक्रोनाइज़ेशन के माध्यम से राजनीतिक नेताओं और मतदाताओं के बीच की खाई को पाटने के लिए पॉलिटिको इनसाइट्स की स्थापना की। आज, वह 15 से अधिक हाई-प्रोफाइल नेताओं के लिए रणनीतिक रीढ़ के रूप में काम करते हैं, और उनके चुनाव अभियान की योजना और दैनिक निर्वाचन क्षेत्र के निष्पादन को शानदार दक्षता के साथ संचालित करते हैं।\n\nअपने हाई-स्टेक राजनीतिक कार्य के बावजूद, कुंदन Gaonsamaj.com के अध्यक्ष के रूप में सामाजिक उत्थान के प्रति गहराई से प्रतिबद्ध हैं। उनके नेतृत्व में, इस पहल ने 800 से अधिक छात्रों को मुफ्त इंटर्नशिप प्रदान की है, और एक नए पीढ़ी के सक्षम युवाओं को इस मार्गदर्शक विश्वास के साथ सशक्त बनाया है कि अभी भी "कई रास्ते तय करने हैं, कई साल आने बाकी हैं, और कई कहानियां लिखनी हैं।"',
    imageUrl: '/director-kundan.jpg',
    email: 'kundan@gaonsamaj.com',
    quote: 'More ways to go, more years to come, more stories to write. Stay tuned.',
    quoteHi: 'अभी कई रास्ते तय करने हैं, कई साल आने बाकी हैं, और कई कहानियां लिखनी हैं। हमसे जुड़े रहें।',
    socials: { facebook: '#', twitter: '#', instagram: '#', youtube: '#' },
  },
  {
    id: 'dir-2',
    name: 'Chetna Jhamb',
    title: 'Entrepreneur & Political Leader',
    titleHi: 'उद्यमी और राजनीतिक नेता',
    bio: 'Business entrepreneur and politician from Samastipur, Bihar. Known for her journey from modest beginnings to a global entrepreneur.',
    bioHi: 'समस्तीपुर, बिहार की एक उद्यमी और राजनीतिज्ञ। एक साधारण शुरुआत से वैश्विक उद्यमी बनने तक के सफर के लिए जानी जाती हैं।',
    fullBio: 'Chetna Jhamb is a prominent business entrepreneur and politician from Samastipur, Bihar. Her journey is a testament to resilience, rising from modest beginnings to establishing herself as a global entrepreneur. She serves as a director for multiple ventures, including Skamakhi Technology Private Limited and Skanda Hei HR International Private Limited.\n\nBeyond her business acumen, Chetna is deeply invested in the political and social landscape of Bihar. She began her political journey working closely at the grassroots level with the Jan Suraaj initiative to bring about systemic change, and later joined the Bharatiya Janata Party (BJP).\n\nAs a leader, she has been actively involved in electoral politics, including contesting the Bihar assembly elections from the Samastipur constituency. Her transition from corporate leadership to public service reflects her commitment to empowering the people of Bihar and fostering long-term development in the region.',
    fullBioHi: 'चेतना झांब समस्तीपुर, बिहार की एक प्रमुख उद्यमी और राजनीतिज्ञ हैं। उनकी यात्रा एक साधारण शुरुआत से एक वैश्विक उद्यमी के रूप में खुद को स्थापित करने तक, उनके दृढ़ संकल्प का प्रमाण है। वह स्कामाखी टेक्नोलॉजी प्राइवेट लिमिटेड और स्कंद हेई एचआर इंटरनेशनल प्राइवेट लिमिटेड सहित कई उपक्रमों के निदेशक के रूप में कार्य करती हैं।\n\nअपने व्यावसायिक कौशल के अलावा, चेतना बिहार के राजनीतिक और सामाजिक परिदृश्य में गहराई से निवेशित हैं। उन्होंने जन सुराज पहल के साथ अपनी राजनीतिक यात्रा शुरू की, व्यवस्थागत परिवर्तन लाने के लिए जमीनी स्तर पर काम किया, और बाद में भारतीय जनता पार्टी (भाजपा) में शामिल हो गईं।\n\nएक नेता के रूप में, वह चुनावी राजनीति में सक्रिय रूप से शामिल रही हैं, जिसमें समस्तीपुर निर्वाचन क्षेत्र से बिहार विधानसभा चुनाव लड़ना शामिल है। कॉर्पोरेट नेतृत्व से सार्वजनिक सेवा में उनका परिवर्तन बिहार के लोगों को सशक्त बनाने और क्षेत्र में दीर्घकालिक विकास को बढ़ावा देने के प्रति उनकी प्रतिबद्धता को दर्शाता है।',
    imageUrl: '/director-chetna.jpg',
    email: 'chetna@gaonsamaj.com',
    quote: 'Empowerment begins at the grassroots. When we uplift our communities, we build a stronger Bihar.',
    quoteHi: 'सशक्तिकरण की शुरुआत जमीनी स्तर से होती है। जब हम अपने समुदायों का उत्थान करते हैं, तो हम एक मजबूत बिहार का निर्माण करते हैं।',
    socials: { facebook: '#', twitter: '#', instagram: '#', youtube: '#' },
  },
];

export interface BilingualFocusArea extends FocusArea {
  titleHi?: string;
  descriptionHi?: string;
  detailedInfoHi?: string;
}

export const FOCUS_AREAS: BilingualFocusArea[] = [
  {
    id: 'young-youth',
    title: 'Project Young Youth',
    titleHi: 'प्रोजेक्ट यंग यूथ (युवा विकास)',
    description: 'Nurturing leadership, digital skills, and vocational training for the next generation.',
    descriptionHi: 'भावी पीढ़ी के लिए नेतृत्व क्षमता, कंप्यूटर साक्षरता और व्यावसायिक प्रशिक्षण।',
    iconName: 'UserCheck',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    detailedInfo: 'Includes youth leadership clubs, computer literacy centers, sports programs, and career counseling for rural adolescents.',
    detailedInfoHi: 'युवा नेतृत्व क्लब, मुफ्त कंप्यूटर केंद्र, खेलकूद प्रतियोगिताएं और ग्रामीण किशोर-किशोरियों के लिए करियर परामर्श।',
    projectsCount: 24,
  },
  {
    id: 'empowered-women',
    title: 'Empowered Women',
    titleHi: 'सशक्त महिला समिति',
    description: 'Supporting women through self-help groups, craft cooperatives, and rights advocacy.',
    descriptionHi: 'स्वयं सहायता समूहों, हस्तशिल्प समितियों और अधिकार जागरूकता से महिलाओं का सशक्तिकरण।',
    iconName: 'HeartHandshake',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    detailedInfo: 'Establishing micro-finance networks, Madhubani artisan clusters, sanitary health access, and legal literacy workshops.',
    detailedInfoHi: 'सूक्ष्म ऋण व्यवस्था, मधुबनी चित्रकला क्लस्टर, सैनिटरी स्वास्थ्य किट वितरण और कानूनी साक्षरता कार्यशालाएं।',
    projectsCount: 38,
  },
  {
    id: 'rural-urban-tourism',
    title: 'Rural-Urban Tourism',
    titleHi: 'ग्रामीण-शहरी पर्यटन',
    description: 'Promoting eco-friendly tourism to bridge the rural-urban divide and generate local income.',
    descriptionHi: 'गांव और शहर की दूरी घटाने और स्थानीय स्तर पर आजीविका बढ़ाने हेतु पर्यावरण-अनुकूल पर्यटन।',
    iconName: 'MapPin',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    detailedInfo: 'Developing farm-stays, village heritage walks around Rajgir and Bodh Gaya, and promoting local culinary traditions.',
    detailedInfoHi: 'राजगीर, वैशाली और बोधगया के आसपास विलेज होमस्टे, ग्राम भ्रमण और पारंपरिक बिहारी व्यंजनों को प्रोत्साहन।',
    projectsCount: 15,
  },
  {
    id: 'cultural-tourism',
    title: 'Cultural Tourism',
    titleHi: 'सांस्कृतिक विरासत एवं पर्यटन',
    description: 'Preserving and promoting Bihar’s rich cultural heritage, art traditions, and monuments.',
    descriptionHi: 'बिहार की 3000 वर्ष पुरानी गौरवशाली कला, लोक संगीत और ऐतिहासिक स्मारकों का संरक्षण।',
    iconName: 'Landmark',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    detailedInfo: 'Restoration awareness at ancient sites, hosting cultural festivals, and supporting folk musicians and Madhubani artists.',
    detailedInfoHi: 'प्राचीन ऐतिहासिक धरोहरों की देखभाल, लोक संगीत उत्सव आयोजन और आंचलिक लोक कलाकारों का समर्थन।',
    projectsCount: 18,
  },
  {
    id: 'environment',
    title: 'Environment & Afforestation',
    titleHi: 'पर्यावरण एवं वृक्षारोपण',
    description: 'Focusing on sustainable practices, afforestation, water harvesting, and eco-restoration.',
    descriptionHi: 'वृक्षारोपण अभियान, पारंपरिक पोखरों का पुनरुद्धार और वर्षा जल संचयन।',
    iconName: 'Sprout',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    detailedInfo: 'Plantation of 500,000+ native saplings, rejuvenation of traditional Pokhars (ponds), and clean solar energy adoption.',
    detailedInfoHi: '5 लाख से अधिक पौधे लगाना, पारंपरिक पोखरों का जीर्णोद्धार और गांवों में सोलर लाइट स्थापना।',
    projectsCount: 29,
  },
  {
    id: 'education',
    title: 'Quality Education',
    titleHi: 'गुणवत्तापूर्ण शिक्षा',
    description: 'Ensuring access to quality education, libraries, and digital learning tools for every child.',
    descriptionHi: 'हर ग्रामीण बच्चे के लिए स्मार्ट लाइब्रेरी, ई-लर्निंग और शाम के अध्ययन केंद्र।',
    iconName: 'BookOpen',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    detailedInfo: 'Building smart village classrooms, mobile library vans, teacher training programs, and remedial after-school coaching.',
    detailedInfoHi: 'स्मार्ट गांव कक्षाएं, मोबाइल लाइब्रेरी वैन, शिक्षक प्रशिक्षण कार्यक्रम और नि:शुल्क ट्यूशन केंद्र।',
    projectsCount: 45,
  },
  {
    id: 'anti-drug-policy',
    title: 'Anti-Drug Policy',
    titleHi: 'नशा मुक्ति अभियान',
    description: 'Combating substance abuse with community awareness, youth rehab counseling, and policy support.',
    descriptionHi: 'नुक्कड़ नाटक, परामर्श शिविर और नशा मुक्ति जन-जागरूकता अभियान।',
    iconName: 'ShieldAlert',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    detailedInfo: 'Nukad natak (street plays), de-addiction helpline support, peer-led youth clubs, and community vigilance committees.',
    detailedInfoHi: 'नुक्कड़ नाटक प्रदर्शन, नशा मुक्ति परामर्श हेल्पलाइन, और ग्राम पंचायत स्तर पर सतर्कता समितियां।',
    projectsCount: 12,
  },
  {
    id: 'startup',
    title: 'Startup & Incubation',
    titleHi: 'ग्रामीण स्टार्टअप एवं इंक्यूबेशन',
    description: 'Incubating and supporting local agri-tech and social micro-enterprises for economic growth.',
    descriptionHi: 'स्थानीय कृषि-तकनीक और ग्रामीण सूक्ष्म-उद्यमियों को प्रोत्साहन व अनुदान सहायता।',
    iconName: 'Lightbulb',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    detailedInfo: 'Seed funding grants for grassroots entrepreneurs, mentorship from industry experts, and food processing co-ops.',
    detailedInfoHi: 'ग्रामीण उद्यमियों को ₹50,000 का प्रारंभिक अनुदान, विशेषज्ञों का मार्गदर्शन और खाद्य प्रसंस्करण समूह।',
    projectsCount: 20,
  },
];

export interface BilingualImpactMetric extends ImpactMetric {
  labelHi?: string;
  descriptionHi?: string;
}

export const IMPACT_METRICS: BilingualImpactMetric[] = [
  {
    id: 'lives',
    label: 'Lives Impacted',
    labelHi: 'लाभान्वित ग्रामीण',
    value: '5,000,000+',
    icon: 'Users',
    description: 'Beneficiaries across healthcare, education, and livelihood support in Bihar.',
    descriptionHi: 'बिहार भर में शिक्षा, स्वास्थ्य और आजीविका योजनाओं से लाभान्वित ग्रामीण नागरिक।',
  },
  {
    id: 'projects',
    label: 'Projects Completed',
    labelHi: 'पूर्ण परियोजनाएं',
    value: '200+',
    icon: 'CheckCircle2',
    description: 'Grassroots initiatives executed in collaboration with village Panchayats.',
    descriptionHi: 'ग्राम पंचायतों और स्थानीय समूहों के सहयोग से पूर्ण की गई विकास योजनाएं।',
  },
  {
    id: 'volunteers',
    label: 'Volunteers Engaged',
    labelHi: 'सक्रिय स्वयंसेवक',
    value: '10,000+',
    icon: 'HandHeart',
    description: 'Dedicated youth, students, and professionals driving active field programs.',
    descriptionHi: 'क्षेत्रीय अभियानों में समर्पित रूप से कार्यरत छात्र, युवा और विषय विशेषज्ञ।',
  },
];

export interface BilingualProject extends Project {
  titleHi?: string;
  categoryHi?: string;
  descriptionHi?: string;
  fullDescriptionHi?: string;
  locationHi?: string;
  beneficiariesHi?: string;
}

export const PROJECTS: BilingualProject[] = [
  {
    id: 'proj-1',
    title: 'Nasha Mukt Bihar',
    titleHi: 'नशा मुक्त बिहार',
    category: 'Health',
    categoryHi: 'स्वास्थ्य',
    description: 'Anti-Drug, Health & Fitness Initiative to protect youth and strengthen families.',
    descriptionHi: 'युवाओं और परिवारों को नशे से बचाने के लिए स्वास्थ्य और फिटनेस पहल।',
    fullDescription: 'Nasha Mukt Bihar is a statewide social movement involving doctors, educators, and youth leaders. It focuses on prevention, awareness, counselling, and positive alternatives like sports. The vision is to build a long-term "Nashamukt Bihar Model" through social participation.',
    fullDescriptionHi: 'नशा मुक्त बिहार एक राज्यव्यापी सामाजिक आंदोलन है जिसमें डॉक्टर, शिक्षक और युवा नेता शामिल हैं। यह रोकथाम, जागरूकता, परामर्श और खेल जैसे सकारात्मक विकल्पों पर केंद्रित है।',
    location: 'Across Bihar',
    locationHi: 'संपूर्ण बिहार',
    beneficiaries: 'Youth & Families',
    beneficiariesHi: 'युवा और परिवार',
    imageUrl: '/media-4.jpg',
    status: 'active',
    fundedPercentage: 80,
  },
  {
    id: 'proj-2',
    title: 'Gram Swaraj Samman',
    titleHi: 'ग्राम स्वराज सम्मान',
    category: 'Governance',
    categoryHi: 'सुशासन',
    description: 'Strengthening democratic participation and responsible local leadership.',
    descriptionHi: 'लोकतांत्रिक भागीदारी और जिम्मेदार स्थानीय नेतृत्व को मजबूत करना।',
    fullDescription: 'Gram Swaraj Samman empowers youth, women, and self-help groups to participate in discussions related to governance, public services, and local development. It includes leadership workshops, development dialogues, and awareness campaigns.',
    fullDescriptionHi: 'ग्राम स्वराज सम्मान युवाओं, महिलाओं और स्वयं सहायता समूहों को शासन, सार्वजनिक सेवाओं और स्थानीय विकास से संबंधित चर्चाओं में भाग लेने के लिए सशक्त बनाता है।',
    location: 'Rural Bihar',
    locationHi: 'ग्रामीण बिहार',
    beneficiaries: 'Villages & Towns',
    beneficiariesHi: 'गांव और कस्बे',
    imageUrl: '/media-2.jpg',
    status: 'active',
    fundedPercentage: 92,
  },
  {
    id: 'proj-3',
    title: 'Maa Ganga Bihar Tourism',
    titleHi: 'माँ गंगा बिहार पर्यटन',
    category: 'Tourism',
    categoryHi: 'पर्यटन',
    description: 'Connecting Bihar’s villages, culture, and riverfronts into a sustainable tourism ecosystem.',
    descriptionHi: 'बिहार के गांवों, संस्कृति और नदी तटों को पर्यटन पारिस्थितिकी तंत्र से जोड़ना।',
    fullDescription: 'Inspired by "Beyond Tourism – Live Bihar", this project promotes rural tourism, Ganga riverfront experiences, and home stays. It aims to create livelihood opportunities for women’s groups, artists, and local entrepreneurs.',
    fullDescriptionHi: '"बियॉन्ड टूरिज्म - लाइव बिहार" से प्रेरित होकर, यह परियोजना ग्रामीण पर्यटन, गंगा रिवरफ्रंट और होम स्टे को बढ़ावा देती है।',
    location: 'Ganga Riverfronts',
    locationHi: 'गंगा नदी के तट',
    beneficiaries: 'Local Entrepreneurs',
    beneficiariesHi: 'स्थानीय उद्यमी',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    fundedPercentage: 70,
  },
  {
    id: 'proj-4',
    title: 'Young Youth for Education',
    titleHi: 'युवा शिक्षा मिशन',
    category: 'Education',
    categoryHi: 'शिक्षा',
    description: 'Guiding children toward education, discipline, and future opportunities.',
    descriptionHi: 'बच्चों को शिक्षा, अनुशासन और भविष्य के अवसरों की ओर ले जाना।',
    fullDescription: 'This initiative provides mentorship, career guidance, and digital exposure to rural and economically weaker students. Youth volunteers help prevent school dropouts and build confidence in young minds.',
    fullDescriptionHi: 'यह पहल ग्रामीण और आर्थिक रूप से कमजोर छात्रों को मेंटरशिप, करियर मार्गदर्शन और डिजिटल एक्सपोजर प्रदान करती है।',
    location: 'Rural Schools',
    locationHi: 'ग्रामीण विद्यालय',
    beneficiaries: 'Students',
    beneficiariesHi: 'छात्र',
    imageUrl: '/media-1.jpg',
    status: 'active',
    fundedPercentage: 85,
  },
  {
    id: 'proj-5',
    title: 'Plantation Drive',
    titleHi: 'वृक्षारोपण अभियान',
    category: 'Environment',
    categoryHi: 'पर्यावरण',
    description: 'Green River & Environmental Action near Budhi Gandak River.',
    descriptionHi: 'बूढ़ी गंडक नदी के पास पर्यावरण संरक्षण और वृक्षारोपण।',
    fullDescription: 'A participatory step toward restoring green cover, reducing erosion, and improving biodiversity. Local residents and volunteers plant native species along riverbanks to ensure a healthier environment for future generations.',
    fullDescriptionHi: 'हरित आवरण को बहाल करने और जैव विविधता में सुधार की दिशा में एक भागीदारी कदम। स्थानीय निवासी नदी तटों पर पौधे लगाते हैं।',
    location: 'Budhi Gandak River',
    locationHi: 'बूढ़ी गंडक नदी',
    beneficiaries: 'Future Generations',
    beneficiariesHi: 'भावी पीढ़ियां',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    fundedPercentage: 78,
  },
  {
    id: 'proj-6',
    title: 'Art & Cinema for Local Culture',
    titleHi: 'कला और सिनेमा पहल',
    category: 'Culture',
    categoryHi: 'संस्कृति',
    description: 'Preserving Bihar’s rich cultural heritage through visual arts and cinema.',
    descriptionHi: 'दृश्य कला और सिनेमा के माध्यम से बिहार की समृद्ध सांस्कृतिक विरासत का संरक्षण।',
    fullDescription: 'This initiative supports cultural events, folk performances, short films, and digital storytelling to modernize and promote local art forms. It encourages youth participation in creative fields.',
    fullDescriptionHi: 'यह पहल स्थानीय कला रूपों को आधुनिक बनाने और बढ़ावा देने के लिए सांस्कृतिक कार्यक्रमों, लघु फिल्मों और डिजिटल कहानी का समर्थन करती है।',
    location: 'Across Bihar',
    locationHi: 'संपूर्ण बिहार',
    beneficiaries: 'Artists & Creators',
    beneficiariesHi: 'कलाकार और रचनाकार',
    imageUrl: '/media-5.jpg',
    status: 'active',
    fundedPercentage: 88,
  },
  {
    id: 'proj-6',
    title: 'Art & Cinema for Local Culture',
    titleHi: 'कला और सिनेमा पहल',
    category: 'Culture',
    categoryHi: 'संस्कृति',
    description: 'Preserving Bihar’s rich cultural heritage through visual arts and cinema.',
    descriptionHi: 'दृश्य कला और सिनेमा के माध्यम से बिहार की समृद्ध सांस्कृतिक विरासत का संरक्षण।',
    fullDescription: 'This initiative supports cultural events, folk performances, short films, and digital storytelling to modernize and promote local art forms. It encourages youth participation in creative fields.',
    fullDescriptionHi: 'यह पहल स्थानीय कला रूपों को आधुनिक बनाने और बढ़ावा देने के लिए सांस्कृतिक कार्यक्रमों, लघु फिल्मों और डिजिटल कहानी का समर्थन करती है।',
    location: 'Across Bihar',
    locationHi: 'संपूर्ण बिहार',
    beneficiaries: 'Artists & Creators',
    beneficiariesHi: 'कलाकार और रचनाकार',
    imageUrl: '/media-5.jpg',
    status: 'active',
    fundedPercentage: 88,
  },
];

export interface BilingualUpcomingProject extends UpcomingProject {
  titleHi?: string;
  descriptionHi?: string;
}

export const UPCOMING_PROJECTS: BilingualUpcomingProject[] = [
  {
    id: 'up-1',
    title: 'Digital Literacy Drive',
    titleHi: 'डिजिटल साक्षरता रथ',
    timeline: 'Q3 2025',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80',
    description: 'Deploying mobile computer labs to remote villages in Kosi region.',
    descriptionHi: 'कोसी क्षेत्र के सुदूर गांवों में मोबाइल कंप्यूटर लैब वैन संचालित करना।',
  },
  {
    id: 'up-2',
    title: 'Clean Water Initiative - Phase 2',
    titleHi: 'शुद्ध पेयजल अभियान - चरण 2',
    timeline: 'Q4 2025',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=300&q=80',
    description: 'Installing arsenic filtration plants across 40 fluorosis-affected hamlets.',
    descriptionHi: 'फ्लोरोसिस व आर्सेनिक प्रभावित 40 गांवों में फिल्टर जल संयंत्र की स्थापना।',
  },
  {
    id: 'up-3',
    title: 'Women’s Health Camps',
    titleHi: 'महिला स्वास्थ्य जांच शिविर',
    timeline: 'Q1 2026',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=300&q=80',
    description: 'Mobile medical vans offering free anemia screening and gynecological care.',
    descriptionHi: 'मोबाइल मेडिकल वैन द्वारा नि:शुल्क एनीमिया जांच और स्त्री रोग विशेषज्ञ देखभाल।',
  },
  {
    id: 'up-4',
    title: 'Bihar Heritage Festival',
    titleHi: 'गांव समाज विरासत उत्सव',
    timeline: 'Q2 2026',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80',
    description: '3-day state-wide celebration of Madhubani art, Chhath cultural songs, and rural cuisine.',
    descriptionHi: 'मधुबनी कला, छठ लोकगीतों और पारंपरिक व्यंजनों का 3 दिवसीय राज्यस्तरीय महोत्सव।',
  },
];

export interface BilingualStory extends Story {
  titleHi?: string;
  summaryHi?: string;
  fullContentHi?: string;
  categoryHi?: string;
  authorHi?: string;
}

export const STORIES: BilingualStory[] = [
  {
    id: 'story-1',
    title: 'Empowering Rural Women Through Art',
    titleHi: 'कला के जरिए आत्मनिर्भर बनतीं ग्रामीण महिलाएं',
    summary: 'Empowering Rural Women Through Art is meeting women thousands and earning micro rates while reviving traditional Madhubani heritage.',
    summaryHi: 'पारंपरिक मधुबनी चित्रकला के जरिए सैकड़ों ग्रामीण महिलाएं आत्मनिर्भर बनकर सम्मानजनक कमाई कर रही हैं।',
    fullContent: 'In Madhubani village, over 150 women have turned traditional wall paintings into vibrant canvas artwork exported across India and abroad. The cooperative managed by Gaon Samaj Foundation ensures fair wages, direct bank transfers, and healthcare benefits for their families. Sunita Devi, a lead artist, shares how painting helped her pay for her daughter’s college education.',
    fullContentHi: 'मधुबनी जिले के गांवों में 150 से अधिक महिलाओं ने कैनवास पर चित्रकला बनाकर देश-विदेश तक अपनी पहचान बनाई है। गांव समाज फाउंडेशन द्वारा संचालित इस समिति के माध्यम से महिलाओं को सीधे बैंक खाते में उचित पारिश्रमिक मिलता है। मुख्य कलाकार सुनीता देवी बताती हैं कि पेंटिंग ने उनकी बेटी की कॉलेज पढ़ाई का खर्च पूरा किया।',
    date: '3.7.2023',
    author: 'Priya Sharma',
    authorHi: 'प्रिया शर्मा',
    imageUrl: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80',
    category: 'Women Empowerment',
    categoryHi: 'महिला सशक्तिकरण',
    readTime: '4 min read',
  },
  {
    id: 'story-2',
    title: 'A New School for Saran’s Children',
    titleHi: 'सारण के बच्चों के लिए नया आधुनिक विद्यालय',
    summary: 'A new school for Saran’s children is opening to allow children continuous access to structured learning and digital literacy tools.',
    summaryHi: 'सारण जिले में गांव समाज के सहयोग से निर्मित नए प्राथमिक विद्यालय से बच्चों को डिजिटल साक्षरता मिल रही है।',
    fullContent: 'With support from local villagers and corporate partners, Gaon Samaj Foundation inaugurated a 6-classroom eco-friendly school building in Saran district. Equipped with solar-powered smart boards, clean drinking water filters, and a library stocked with 2,000 Hindi & English books, the school now educates 340 children.',
    fullContentHi: 'ग्रामीणों और सहयोगियों के समर्थन से गांव समाज फाउंडेशन ने सरन जिले में 6 कमरों वाला पर्यावरण-अनुकूल विद्यालय निर्मित किया है। इसमें सौर ऊर्जा से चलने वाले स्मार्ट बोर्ड, आरओ पेयजल और 2,000 पुस्तकों की लाइब्रेरी है, जहां 340 बच्चे पढ़ाई कर रहे हैं।',
    date: '27.3.2023',
    author: 'Rajesh Kumar',
    authorHi: 'राजेश कुमार',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    category: 'Education',
    categoryHi: 'शिक्षा',
    readTime: '5 min read',
  },
  {
    id: 'story-3',
    title: 'Bihar’s Cultural Festival: A Huge Success',
    titleHi: 'गांव समाज सांस्कृतिक महोत्सव: अभूतपूर्व सफलता',
    summary: 'Bihar’s Cultural Festival: A huge success bringing together folk musicians, Madhubani artisans, and eco-tourists under one roof.',
    summaryHi: 'पटना के गांधी मैदान में आयोजित 3 दिवसीय सांस्कृतिक महोत्सव में 45,000 से अधिक दर्शक पहुंचे।',
    fullContent: 'Held at Gandhi Maidan in Patna, the 3-day cultural showcase attracted over 45,000 visitors. The festival featured live Madhubani painting masterclasses, Bhojpuri and Maithili folk music performances, and organic food stalls managed by women self-help groups.',
    fullContentHi: 'गांधी मैदान पटना में आयोजित इस 3 दिवसीय महोत्सव में लोक कलाकारों, मधुबनी चित्रकारों और महिला स्वयं सहायता समूहों द्वारा निर्मित जैविक खाद्य स्टालों को अपार सराहना मिली।',
    date: '2.13.2023',
    author: 'Amitabh Roy',
    authorHi: 'अमिताभ रॉय',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    category: 'Culture & Tourism',
    categoryHi: 'संस्कृति एवं पर्यटन',
    readTime: '3 min read',
  },
];
