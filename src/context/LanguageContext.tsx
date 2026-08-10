import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  isHindi: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Top Utility Bar
    registeredNgo: 'Registered NGO in Bihar • gaonsamaj.com',
    supportUs: 'Support Us',
    phone: '+91-81232 2031 / +91-81720 0200',
    email: 'contact@gaonsamaj.com',

    // Branding
    orgName: 'GAON SAMAJ',
    orgSubName: 'BIHAR SOCIAL INITIATIVE',
    tagline: 'Empowering Village Communities across Bihar',

    // Nav Items
    navHome: 'Home',
    navAbout: 'About Us',
    navProjects: 'Projects & Initiatives',
    navFocus: 'Focus Areas',
    navImpact: 'Impact',
    navStories: 'Stories',
    navGetInvolved: 'Get Involved',
    navContact: 'Contact',
    donateNow: 'Donate Now',
    donate: 'Donate',

    // Hero Section
    heroTag1: 'Youth & Education',
    heroTitle1: 'Empowering Bihar, Together',
    heroSub1: 'Building a sustainable future through education, women empowerment, and community action across all 38 districts of Bihar with Gaon Samaj.',
    
    heroTag2: 'Cultural Heritage',
    heroTitle2: 'Madhubani Art & Craft Revival',
    heroSub2: 'Providing direct livelihoods to rural craftswomen while preserving Bihar’s 3,000-year-old heritage art forms.',
    
    heroTag3: 'Sustainable Living',
    heroTitle3: 'Eco-Tourism along River Ganga',
    heroSub3: 'Connecting rural communities in Vikramshila, Nalanda, and Rajgir with green tourism and cultural exchanges.',

    heroTag4: 'Rural Economy',
    heroTitle4: 'Grassroots Agricultural Growth',
    heroSub4: 'Equipping smallholder farmers with solar water pumps, organic fertilizer knowledge, and direct market access.',

    learnMore: 'Learn More',
    supportCause: 'Support Cause',
    explore: 'Explore',
    readMore: 'Read More',
    close: 'Close',

    // Directors Desk
    directorsDesk: "Director's Desk",
    founderTitle: 'Founder & Executive Director',
    programDirectorTitle: 'Director of Programs',

    // Our Focus
    ourFocusTitle: 'Our Focus Areas',
    ourFocusSub: 'Addressing multi-dimensional rural development across Bihar with dedicated, targeted initiative programs.',

    // Focus Area Titles
    focusYouth: 'Project Young Youth',
    focusYouthDesc: 'Nurturing leadership, digital skills, and vocational training for the next generation.',
    focusWomen: 'Empowered Women',
    focusWomenDesc: 'Supporting women through self-help groups, craft cooperatives, and rights advocacy.',
    focusTourism: 'Rural-Urban Tourism',
    focusTourismDesc: 'Promoting eco-friendly tourism to bridge the rural-urban divide and generate local income.',
    focusCulture: 'Cultural Tourism',
    focusCultureDesc: 'Preserving and promoting Bihar’s rich cultural heritage, art traditions, and monuments.',
    focusEnvironment: 'Environment',
    focusEnvironmentDesc: 'Focusing on sustainable practices, afforestation, water harvesting, and eco-restoration.',
    focusEducation: 'Education',
    focusEducationDesc: 'Ensuring access to quality education, libraries, and digital learning tools for every child.',
    focusAntiDrug: 'Anti-Drug Policy',
    focusAntiDrugDesc: 'Combating substance abuse with community awareness, youth rehab counseling, and policy support.',
    focusStartup: 'Startup & Incubation',
    focusStartupDesc: 'Incubating and supporting local agri-tech and social micro-enterprises for economic growth.',

    // Impact
    ourImpactTitle: 'Our Impact in Numbers',
    livesImpacted: 'Lives Impacted',
    livesValue: '5,000,000+',
    projectsCompleted: 'Projects Completed',
    projectsValue: '200+',
    volunteersEngaged: 'Volunteers Engaged',
    volunteersValue: '10,000+',

    // Stories
    storiesTitle: 'Stories & Updates',
    storiesSub: 'Read real impact stories from village communities across Bihar.',
    viewAllStories: 'View All Stories',

    // About Screen
    aboutTitle: 'About Gaon Samaj Foundation',
    aboutSub: 'Dedicated to uplifting rural communities, championing education, and fostering sustainable livelihoods across Bihar.',
    ourMission: 'Our Mission',
    ourMissionText: 'To catalyze sustainable, community-driven transformation in rural Bihar by bridging educational gaps, empowering women, preserving cultural heritage, and strengthening local village economies.',
    ourVision: 'Our Vision',
    ourVisionText: 'A prosperous, self-reliant Bihar where every rural family has access to quality education, healthcare, clean environment, and dignified earning opportunities.',
    ourValues: 'Our Core Values',
    value1Title: 'Grassroots Community Ownership',
    value1Desc: 'We work directly with Panchayat members and village committees to solve problems at the root level.',
    value2Title: 'Inclusivity & Gender Equity',
    value2Desc: 'Ensuring equal participation and leadership for women and youth in every village initiative.',
    value3Title: 'Integrity & Transparency',
    value3Desc: '100% transparent utilization of donor contributions with published financial reports and 80G tax exemption benefits.',

    // Projects Screen
    projectsTitle: 'Projects & Initiatives',
    projectsSub: 'Discover active field programs running across Bihar’s 38 districts.',
    filterAll: 'All Projects',
    filterYouth: 'Youth',
    filterWomen: 'Women',
    filterEducation: 'Education',
    filterEnvironment: 'Environment',
    filterTourism: 'Tourism & Culture',
    location: 'Location',
    beneficiaries: 'Beneficiaries',
    fundingStatus: 'Funding Status',
    upcomingTitle: 'Upcoming Initiatives',

    // Volunteer / Get Involved
    getInvolvedTitle: 'Get Involved with Gaon Samaj',
    getInvolvedSub: 'Join us as a volunteer, donor, or partner to create lasting social impact in Bihar.',
    volunteerHeading: 'Volunteer Application Form',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    phoneMobile: 'Phone / Mobile',
    interestArea: 'Area of Interest',
    selectDistrict: 'Select District in Bihar',
    message: 'Your Message / How you want to contribute',
    submitApplication: 'Submit Volunteer Application',
    thankYouVolunteer: 'Thank you for registering! Our field coordinator will contact you shortly.',

    // Contact Screen
    contactTitle: 'Contact Gaon Samaj',
    contactSub: 'Have questions, partnership proposals, or want to visit our field projects? Reach out to us.',
    officeAddress: 'Head Office Address',
    officeAddressText: 'Gaon Samaj Foundation / Bihar Social Initiative, Boring Road, Patna, Bihar - 800001',
    phoneNumbers: 'Phone Numbers',
    emailUs: 'Email Us',
    sendUsMessage: 'Send Us a Message',
    subject: 'Subject',
    sendMessage: 'Send Message',

    // Donation Modal
    donateModalTitle: 'Support Gaon Samaj Initiative',
    taxExemptBadge: '100% Tax Exempted under Section 80G of Income Tax Act',
    oneTimeContribution: 'One-Time Contribution',
    monthlySupporter: 'Monthly Supporter',
    childSupplies: 'Child Education',
    familyHealth: 'Family Health',
    cleanWater: 'Clean Water & Agri',
    customAmount: 'Or Enter Custom Amount (₹)',
    continueWith: 'Continue with',
    proceedToPayment: 'Proceed to Payment',
    donorDetails: 'Donor Information',
    panOptional: 'PAN Number (Optional for 80G Tax Receipt)',
    panHelp: 'Required if claiming 50% tax deduction under Sec 80G in India.',
    upiQr: 'UPI / QR',
    card: 'Card',
    netBanking: 'NetBanking',
    completeContribution: 'Complete Contribution',
    thankYouDonation: 'Thank You for Your Support!',
    receiptTitle: '80G Official Tax Exemption Receipt',
    downloadReceipt: 'Download 80G Receipt',
    done: 'Done',

    // Footer
    footerDesc: 'Gaon Samaj Foundation (biharsocial.org / gaonsamaj.com) is a registered Non-Governmental Organization empowering village communities across Bihar through education, women empowerment, eco-tourism, and sustainable agriculture.',
    quickLinks: 'Quick Links',
    districtsCovered: '38 Districts of Bihar',
    copyright: '© 2026 Gaon Samaj Foundation. All rights reserved. Registered under Indian Societies Registration Act.',
    languageToggleLabel: 'Language',
  },
  hi: {
    // Top Utility Bar
    registeredNgo: 'बिहार में पंजीकृत एनजीओ • gaonsamaj.com',
    supportUs: 'हमारा सहयोग करें',
    phone: '+91-81232 2031 / +91-81720 0200',
    email: 'contact@gaonsamaj.com',

    // Branding
    orgName: 'गांव समाज',
    orgSubName: 'बिहार सोशल इनिशिएटिव',
    tagline: 'समग्र बिहार के ग्रामीण समुदायों का सशक्तिकरण',

    // Nav Items
    navHome: 'मुख्य पृष्ठ',
    navAbout: 'हमारे बारे में',
    navProjects: 'परियोजनाएं एवं पहल',
    navFocus: 'मुख्य क्षेत्र',
    navImpact: 'हमारा प्रभाव',
    navStories: 'सफलता की कहानियां',
    navGetInvolved: 'हमसे जुड़ें',
    navContact: 'संपर्क करें',
    donateNow: 'दान करें',
    donate: 'दान',

    // Hero Section
    heroTag1: 'युवा एवं शिक्षा',
    heroTitle1: 'सशक्त बिहार, समृद्ध गांव समाज',
    heroSub1: 'गांव समाज संस्था के माध्यम से बिहार के सभी 38 जिलों में शिक्षा, महिला सशक्तिकरण और ग्रामीण विकास की दिशा में कार्यरत।',

    heroTag2: 'सांस्कृतिक विरासत',
    heroTitle2: 'मधुबनी कला एवं शिल्प पुनरुद्धार',
    heroSub2: 'बिहार की 3000 साल पुरानी पारंपरिक मधुबनी चित्रकला को पुनर्जीवित करते हुए ग्रामीण महिलाओं को सीधा रोजगार देना।',

    heroTag3: 'सतत जीवन शैली',
    heroTitle3: 'गंगा किनारे इको-टूरिज्म',
    heroSub3: 'विक्रमशिला, नालंदा और राजगीर के ग्रामीण क्षेत्रों को पर्यावरण-अनुकूल पर्यटन और सांस्कृतिक आदान-प्रदान से जोड़ना।',

    heroTag4: 'ग्रामीण अर्थव्यवस्था',
    heroTitle4: 'जमीनी स्तर पर कृषि विकास',
    heroSub4: 'छोटे किसानों को सौर ऊर्जा सिंचाई पंप, जैविक खाद तकनीक और सीधे बाजार तक पहुंच उपलब्ध कराना।',

    learnMore: 'अधिक जानें',
    supportCause: 'सहयोग दें',
    explore: 'देखें',
    readMore: 'आगे पढ़ें',
    close: 'बंद करें',

    // Directors Desk
    directorsDesk: 'निदेशक का संदेश',
    founderTitle: 'संस्थापक एवं कार्यकारी निदेशक',
    programDirectorTitle: 'कार्यक्रम निदेशक',

    // Our Focus
    ourFocusTitle: 'हमारे मुख्य कार्यक्षेत्र',
    ourFocusSub: 'बिहार के ग्रामीण क्षेत्रों में शिक्षा, स्वास्थ्य, कृषि और कौशल विकास हेतु समर्पित योजनाएं।',

    // Focus Area Titles
    focusYouth: 'प्रोजेक्ट यंग यूथ (युवा विकास)',
    focusYouthDesc: 'भावी पीढ़ी के लिए नेतृत्व क्षमता, डिजिटल कौशल और व्यावसायिक प्रशिक्षण।',
    focusWomen: 'सशक्त महिला',
    focusWomenDesc: 'स्वयं सहायता समूहों, हस्तशिल्प समितियों और अधिकार जागरूकता से महिलाओं को आत्मनिर्भर बनाना।',
    focusTourism: 'ग्रामीण-शहरी पर्यटन',
    focusTourismDesc: 'गांव और शहर के बीच दूरी घटाने और स्थानीय आय बढ़ाने हेतु पर्यावरण-अनुकूल पर्यटन।',
    focusCulture: 'सांस्कृतिक पर्यटन',
    focusCultureDesc: 'बिहार की समृद्ध सांस्कृतिक विरासत, कला परंपराओं और ऐतिहासिक स्मारकों का संरक्षण।',
    focusEnvironment: 'पर्यावरण एवं वृक्षारोपण',
    focusEnvironmentDesc: 'वृक्षारोपण, जल संरक्षण, पोखरों का जीर्णोद्धार और सौर ऊर्जा को बढ़ावा देना।',
    focusEducation: 'गुणवत्तापूर्ण शिक्षा',
    focusEducationDesc: 'हर बच्चे के लिए स्मार्ट क्लास, ई-लाइब्रेरी और गुणवत्तापूर्ण अध्ययन सामग्री सुनिश्चित करना।',
    focusAntiDrug: 'नशा मुक्ति अभियान',
    focusAntiDrugDesc: 'समुदाय जागरूकता, नुक्कड़ नाटक और युवा परामर्श केंद्र से नशा मुक्ति।',
    focusStartup: 'ग्रामीण स्टार्टअप एवं इंक्यूबेशन',
    focusStartupDesc: 'स्थानीय कृषि-तकनीक और ग्रामीण सूक्ष्म-उद्यमों को अनुदान और मार्गदर्शन देना।',

    // Impact
    ourImpactTitle: 'आंकड़ों में हमारा प्रभाव',
    livesImpacted: 'लाभान्वित ग्रामीण नागरिक',
    livesValue: '50,00,000+',
    projectsCompleted: 'पूर्ण की गई परियोजनाएं',
    projectsValue: '200+',
    volunteersEngaged: 'सक्रिय स्वयंसेवक',
    volunteersValue: '10,000+',

    // Stories
    storiesTitle: 'सफलता की कहानियां एवं समाचार',
    storiesSub: 'बिहार के गांवों से बदलाव और आत्म-निर्भरता की प्रेरणादायक गाथाएं पढ़ें।',
    viewAllStories: 'सभी कहानियां देखें',

    // About Screen
    aboutTitle: 'गांव समाज फाउंडेशन के बारे में',
    aboutSub: 'ग्रामीण बिहार के उत्थान, शिक्षा के प्रसार और आत्मनिर्भर स्वरोजगार के लिए निरंतर समर्पित संस्थान।',
    ourMission: 'हमारा लक्ष्य (Mission)',
    ourMissionText: 'बिहार के ग्रामीण इलाकों में शिक्षा की खाई को पाटना, महिलाओं को आर्थिक रूप से सशक्त बनाना, सांस्कृतिक धरोहरों को सहेजना और ग्राम पंचायतों के साथ मिलकर खुशहाल गांव समाज का निर्माण करना।',
    ourVision: 'हमारी दृष्टि (Vision)',
    ourVisionText: 'एक ऐसा समृद्ध और स्वावलंबी बिहार जहां हर ग्रामीण परिवार को गुणवत्तापूर्ण शिक्षा, उत्तम स्वास्थ्य, स्वच्छ पर्यावरण और सम्मानजनक आजीविका प्राप्त हो।',
    ourValues: 'हमारे मूल सिद्धांत',
    value1Title: 'जमीनी स्तर पर सहभागिता',
    value1Desc: 'हम ग्राम प्रधानों, पंचों और युवाओं के साथ मिलकर समस्याओं का स्थायी समाधान खोजते हैं।',
    value2Title: 'समानता एवं महिला नेतृत्व',
    value2Desc: 'हर सामाजिक और आर्थिक पहल में महिलाओं और युवाओं की बराबरी की भागीदारी।',
    value3Title: 'पारदर्शिता एवं निष्ठा',
    value3Desc: 'दानदाताओं के प्रत्येक योगदान का 100% पारदर्शी लेखा-जोखा और आयकर धारा 80G के तहत छूट।',

    // Projects Screen
    projectsTitle: 'परियोजनाएं एवं पहल',
    projectsSub: 'बिहार के 38 जिलों में चल रही हमारी जमीनी विकास योजनाओं की जानकारी।',
    filterAll: 'सभी परियोजनाएं',
    filterYouth: 'युवा विकास',
    filterWomen: 'महिला सशक्तिकरण',
    filterEducation: 'शिक्षा',
    filterEnvironment: 'पर्यावरण',
    filterTourism: 'पर्यटन एवं संस्कृति',
    location: 'स्थान',
    beneficiaries: 'लाभार्थी',
    fundingStatus: 'फंडिंग की स्थिति',
    upcomingTitle: 'आगामी पहल',

    // Volunteer / Get Involved
    getInvolvedTitle: 'गांव समाज से जुड़ें',
    getInvolvedSub: 'बिहार में सकारात्मक सामाजिक बदलाव लाने के लिए स्वयंसेवक, सहयोगी या दानदाता के रूप में हमसे जुड़ें।',
    volunteerHeading: 'स्वयंसेवक पंजीकरण फॉर्म',
    fullName: 'पूरा नाम',
    emailAddress: 'ईमेल पता',
    phoneMobile: 'फोन / मोबाइल नंबर',
    interestArea: 'रुचि का क्षेत्र',
    selectDistrict: 'बिहार का जिला चुनें',
    message: 'आपका संदेश / आप किस तरह योगदान देना चाहते हैं',
    submitApplication: 'स्वयंसेवक आवेदन भेजें',
    thankYouVolunteer: 'पंजीकरण के लिए धन्यवाद! हमारे क्षेत्र समन्वयक शीघ्र ही आपसे संपर्क करेंगे।',

    // Contact Screen
    contactTitle: 'गांव समाज से संपर्क करें',
    contactSub: 'क्या आपके पास कोई प्रश्न, साझेदारी प्रस्ताव है या हमारे प्रोजेक्ट्स देखना चाहते हैं? हमसे संपर्क करें।',
    officeAddress: 'मुख्य कार्यालय का पता',
    officeAddressText: 'गांव समाज फाउंडेशन / बिहार सोशल इनिशिएटिव, बोरिंग रोड, पटना, बिहार - 800001',
    phoneNumbers: 'फोन नंबर',
    emailUs: 'ईमेल करें',
    sendUsMessage: 'हमें संदेश भेजें',
    subject: 'विषय',
    sendMessage: 'संदेश भेजें',

    // Donation Modal
    donateModalTitle: 'गांव समाज पहल में सहयोग करें',
    taxExemptBadge: 'आयकर अधिनियम की धारा 80G के तहत 100% कर मुक्त योगदान',
    oneTimeContribution: 'एकमुश्त योगदान',
    monthlySupporter: 'मासिक सहयोगी',
    childSupplies: 'बाल शिक्षा',
    familyHealth: 'पारिवारिक स्वास्थ्य',
    cleanWater: 'शुद्ध पेयजल व कृषि',
    customAmount: 'या अपनी इच्छा अनुसार राशि दर्ज करें (₹)',
    continueWith: 'आगे बढ़ें ₹',
    proceedToPayment: 'भुगतान के लिए आगे बढ़ें',
    donorDetails: 'दानदाता की जानकारी',
    panOptional: 'पैन नंबर (80G रसीद हेतु वैकल्पि)',
    panHelp: 'भारत में धारा 80G के तहत 50% कर छूट दावा करने के लिए आवश्यक।',
    upiQr: 'यूपीआई / क्यूआर',
    card: 'कार्ड',
    netBanking: 'नेटबैंकिंग',
    completeContribution: 'योगदान पूर्ण करें',
    thankYouDonation: 'आपके बहुमूल्य सहयोग के लिए धन्यवाद!',
    receiptTitle: '80G आधिकारिक कर छूट रसीद',
    downloadReceipt: '80G रसीद डाउनलोड करें',
    done: 'संपन्न',

    // Footer
    footerDesc: 'गांव समाज फाउंडेशन (gaonsamaj.com) बिहार में शिक्षा, महिला सशक्तिकरण, कृषि और ग्रामीण पर्यटन के माध्यम से गांवों के कायाकल्प के लिए प्रतिबद्ध एक पंजीकृत गैर-सरकारी संगठन है।',
    quickLinks: 'त्वरित लिंक',
    districtsCovered: 'बिहार के सभी 38 जिले',
    copyright: '© 2026 गांव समाज फाउंडेशन। सर्वाधिकार सुरक्षित। भारतीय सोसाइटी पंजीकरण अधिनियम के तहत पंजीकृत।',
    languageToggleLabel: 'भाषा',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isHindi: lang === 'hi' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
