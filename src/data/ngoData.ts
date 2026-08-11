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
    id: 'dir-1',
    name: 'Rajesh Kumar',
    title: 'Founder & Executive Director',
    titleHi: 'संस्थापक एवं कार्यकारी निदेशक',
    bio: 'Dedicated to grassroots change in Bihar for over 20 years. Believes in community-led development and localized problem solving.',
    bioHi: '20 से अधिक वर्षों से बिहार में जमीनी सामाजिक बदलाव के लिए समर्पित। स्थानीय विकास और आत्मनिर्भर गांव में दृढ़ विश्वास।',
    fullBio: 'Rajesh Kumar holds a Master in Social Work from TISS and has spearheaded over 150 village-level development programs across Saran, Muzaffarpur, and Patna districts. His vision centers on self-sustaining rural micro-economies and dignified employment for youth.',
    fullBioHi: 'राजेश कुमार जी ने TISS से सोशल वर्क में परास्नातक किया है और सरन, मुजफ्फरपुर तथा पटना जिलों के 150 से अधिक गांवों में विकास कार्यक्रमों का नेतृत्व किया है। उनका दृष्टिकोण आत्मनिर्भर ग्रामीण अर्थव्यवस्था और युवाओं के सम्मानजनक रोजगार पर केंद्रित है।',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    email: 'rajesh.kumar@gaonsamaj.com',
    quote: 'True empowerment starts when a community realizes it holds the key to its own transformation.',
    quoteHi: 'सच्चा सशक्तिकरण तब शुरू होता है जब एक गांव समाज यह महसूस करता है कि उसके अपने परिवर्तन की कुंजी उसी के हाथों में है।',
  },
  {
    id: 'dir-2',
    name: 'Dr. Anjali Singh',
    title: 'Director of Programs',
    titleHi: 'कार्यक्रम निदेशक',
    bio: 'Expert in social work and policy. Passionate about education and women’s empowerment across rural communities.',
    bioHi: 'सामाजिक नीति और विकास विशेषज्ञ। ग्रामीण समुदायों में बालिका शिक्षा और महिला सशक्तिकरण के प्रति समर्पित।',
    fullBio: 'Dr. Anjali Singh earned her Doctorate in Public Policy from JNU. She leads the NGO’s gender equality frameworks, healthcare mobilization, and digital literacy campaigns, directly touching over 120,000 rural women and young girls.',
    fullBioHi: 'डॉ. अंजलि सिंह ने जेएनयू से लोक नीति में डॉक्टरेट प्राप्त किया है। वह संस्था के महिला अधिकार, प्राथमिक स्वास्थ्य सेवा और डिजिटल साक्षरता अभियानों का नेतृत्व करती हैं, जिससे 120,000 से अधिक ग्रामीण महिलाएं और बालिकाएं लाभान्वित हुई हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    email: 'dr.anjali@gaonsamaj.com',
    quote: 'Educated women and empowered youth are the strongest catalysts for a prosperous Bihar.',
    quoteHi: 'शिक्षित महिलाएं और सशक्त युवा ही समृद्ध बिहार और खुशहाल गांव समाज के सबसे बड़े आधार स्तंभ हैं।',
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
    title: 'Project Young Youth',
    titleHi: 'प्रोजेक्ट यंग यूथ (युवा उत्थान)',
    category: 'Youth',
    categoryHi: 'युवा',
    description: 'Empowering youth with skills, education, and leadership training for a brighter future.',
    descriptionHi: 'युवाओं को कंप्यूटर साक्षरता, व्यावसायिक कौशल और नेतृत्व प्रशिक्षण से सशक्त बनाना।',
    fullDescription: 'Project Young Youth focuses on school dropout prevention, coding and soft-skill bootcamps, and village sports leagues in Saran and Patna districts. Over 15,000 teenagers have completed career readiness modules.',
    fullDescriptionHi: 'प्रोजेक्ट यंग यूथ सरन और पटना जिलों में स्कूल ड्रॉपआउट रोकने, कंप्यूटर कौशल सिखाने और गांव खेल प्रतियोगिताओं का आयोजन करता है। अब तक 15,000 से अधिक युवा लाभान्वित हुए हैं।',
    location: 'Saran & Patna, Bihar',
    locationHi: 'सारण एवं पटना, बिहार',
    beneficiaries: '15,000+ Youth',
    beneficiariesHi: '15,000+ युवा',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80'
    ],
    status: 'active',
    fundedPercentage: 85,
  },
  {
    id: 'proj-2',
    title: 'Empowered Women',
    titleHi: 'सशक्त महिला समिति',
    category: 'Women',
    categoryHi: 'महिला सशक्तिकरण',
    description: 'Supporting women through self-help groups, vocational training, and rights advocacy.',
    descriptionHi: 'स्वयं सहायता समूहों, हस्तशिल्प और मधुबनी कला प्रशिक्षण द्वारा महिलाओं की आत्मनिर्भरता।',
    fullDescription: 'Enables rural women to form independent savings cooperatives, master traditional handloom weaving and Madhubani painting, and access maternal health workshops.',
    fullDescriptionHi: 'ग्रामीण महिलाओं को बचत समूह बनाने, मधुबनी चित्रकला व हथकरघा बुनाई सीखने और मातृ स्वास्थ्य देखभाल कार्यशालाओं में भाग लेने का अवसर।',
    location: 'Madhubani & Darbhanga, Bihar',
    locationHi: 'मधुबनी एवं दरभंगा, बिहार',
    beneficiaries: '28,000+ Women',
    beneficiariesHi: '28,000+ महिलाएं',
    imageUrl: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80'
    ],
    status: 'active',
    fundedPercentage: 92,
  },
  {
    id: 'proj-3',
    title: 'Rural-Urban Tourism',
    titleHi: 'ग्रामीण-शहरी पर्यटन पहल',
    category: 'Tourism',
    categoryHi: 'पर्यटन',
    description: 'Promoting responsible tourism to bridge the rural-urban divide and generate local income.',
    descriptionHi: 'पर्यावरण-अनुकूल ग्राम पर्यटन से गांवों में स्थानीय रोजगार का सृजन।',
    fullDescription: 'Creating village tourism trails in Nalanda, Vaishali, and Bodh Gaya. City visitors experience authentic village life while funding local schools and sanitation facilities.',
    fullDescriptionHi: 'नालंदा, वैशाली और बोधगया में ग्रामीण पर्यटन सर्किट। पर्यटक गांव के जनजीवन का अनुभव करते हैं जिससे गांव के प्राथमिक विद्यालयों और स्वच्छता सुविधाओं को वित्तीय सहायता मिलती है।',
    location: 'Nalanda & Rajgir, Bihar',
    locationHi: 'नालंदा एवं राजगीर, बिहार',
    beneficiaries: '45 Village Homestays',
    beneficiariesHi: '45 ग्रामीण होमस्टे',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    fundedPercentage: 70,
  },
  {
    id: 'proj-4',
    title: 'Environment & Afforestation',
    titleHi: 'पर्यावरण संवर्धन एवं हरियाली',
    category: 'Environment',
    categoryHi: 'पर्यावरण',
    description: 'Focusing on sustainable practices, afforestation, and environmental conservation.',
    descriptionHi: 'सघन वृक्षारोपण, पोखर संरक्षण और विद्यालय जल संचयन।',
    fullDescription: 'Mobilizing villagers to plant shade and fruit-bearing trees along village roads and riverbanks. Rainwater harvesting pits installed in 120 drought-prone schools.',
    fullDescriptionHi: 'सड़कों और नदियों के किनारे फलदार वृक्षारोपण। 120 सूखा आशंकित ग्रामीण विद्यालयों में वर्षा जल संचयन प्रणाली की स्थापना।',
    location: 'Gaya & Aurangabad, Bihar',
    locationHi: 'गया एवं औरंगाबाद, बिहार',
    beneficiaries: '120 Villages',
    beneficiariesHi: '120 गांव',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    fundedPercentage: 78,
  },
  {
    id: 'proj-5',
    title: 'Cultural Tourism & Heritage',
    titleHi: 'सांस्कृतिक विरासत एवं धरोहर',
    category: 'Culture',
    categoryHi: 'संस्कृति',
    description: 'Preserving and promoting Bihar’s rich cultural heritage, art, and ancient traditions.',
    descriptionHi: 'बिहार की प्राचीन लोक कलाओं, शिल्पकला और ऐतिहासिक स्थलों का संरक्षण।',
    fullDescription: 'Organizing regional art fairs, documenting oral folk history, and training youth as certified heritage guides for international & national tourists.',
    fullDescriptionHi: 'लोक कला मेलों का आयोजन, मौखिक लोक इतिहास का दस्तावेजीकरण और स्थानीय युवाओं को प्रमाणित हेरिटेज गाइड के रूप में प्रशिक्षित करना।',
    location: 'Bodh Gaya & Vaishali',
    locationHi: 'बोधगया एवं वैशाली, बिहार',
    beneficiaries: '3,500 Artisans & Guides',
    beneficiariesHi: '3,500 कलाकार व गाइड',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    fundedPercentage: 88,
  },
  {
    id: 'proj-6',
    title: 'Education for All',
    titleHi: 'सबके लिए नि:शुल्क शिक्षा',
    category: 'Education',
    categoryHi: 'शिक्षा',
    description: 'Ensuring access to quality education, libraries, and digital literacy for all children.',
    descriptionHi: 'हर ग्रामीण बच्चे तक डिजिटल साक्षरता और शाम के अध्ययन केंद्रों की पहुंच।',
    fullDescription: 'Operating 85 evening learning centers for first-generation learners, equipped with tablets, audio-visual storytelling, and nutritional snacks.',
    fullDescriptionHi: 'प्रथम पीढ़ी के शिक्षार्थियों के लिए 85 सांध्य शिक्षण केंद्र, जहां टैबलेट, ऑडियो-विजुअल कहानियों और पौष्टिक अल्पाहार की व्यवस्था है।',
    location: 'Muzaffarpur & Samastipur',
    locationHi: 'मुजफ्फरपुर एवं समस्तीपुर, बिहार',
    beneficiaries: '18,500 Children',
    beneficiariesHi: '18,500 बच्चे',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    fundedPercentage: 95,
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
