import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Newspaper, Image as ImageIcon, Calendar, ArrowRight } from 'lucide-react';

export const MediaScreen: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState<'news' | 'gallery'>('news');
  const { t, isHindi } = useLanguage();

  const newsItems = [
    {
      id: 1,
      date: 'Aug 15, 2026',
      title: 'Gaon Samaj Launches Digital Literacy Drive in Samastipur',
      titleHi: 'गांव समाज ने समस्तीपुर में डिजिटल साक्षरता अभियान शुरू किया',
      summary: 'In a massive push for rural education, Gaon Samaj deployed mobile computer labs across 20 remote villages, targeting over 5,000 students.',
      summaryHi: 'ग्रामीण शिक्षा को बढ़ावा देने के लिए, गांव समाज ने 20 दूरस्थ गांवों में मोबाइल कंप्यूटर लैब स्थापित किए हैं, जिससे 5,000 से अधिक छात्रों को लाभ होगा।',
      image: '/media-1.jpg'
    },
    {
      id: 2,
      date: 'Jul 28, 2026',
      title: 'Successful Mega Health Camp Organized for Rural Women',
      titleHi: 'ग्रामीण महिलाओं के लिए सफल मेगा स्वास्थ्य शिविर का आयोजन',
      summary: 'Over 1,200 women received free medical checkups, essential medicines, and maternal care consultations during our weekend health drive.',
      summaryHi: 'हमारे सप्ताहांत स्वास्थ्य अभियान के दौरान 1,200 से अधिक महिलाओं को मुफ्त चिकित्सा जांच, आवश्यक दवाएं और मातृ देखभाल परामर्श प्रदान किया गया।',
      image: '/media-4.jpg'
    },
    {
      id: 3,
      date: 'Jun 05, 2026',
      title: 'Environmental Day: 50,000 Saplings Planted',
      titleHi: 'पर्यावरण दिवस: 50,000 पौधे रोपे गए',
      summary: 'Marking World Environment Day, community leaders and volunteers came together to plant shade and fruit-bearing trees along the riverbanks.',
      summaryHi: 'विश्व पर्यावरण दिवस के अवसर पर, सामुदायिक नेताओं और स्वयंसेवकों ने नदियों के किनारे फलदार और छायादार वृक्षारोपण किया।',
      image: '/media-3.jpg'
    }
  ];

  const galleryImages = [
    '/media-1.jpg',
    '/media-2.jpg',
    '/media-3.jpg',
    '/media-4.jpg',
    '/media-5.jpg',
    '/hero-viksit-bihar.jpg'
  ];

  return (
    <div className="w-full bg-stone-50/50">
      {/* Sub-navigation Tabs */}
      <div className="w-full border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-center py-4">
          <div className="bg-stone-100 p-1 rounded-xl flex gap-1 border border-stone-200">
            <button
              onClick={() => setActiveMainTab('news')}
              className={`px-6 py-2.5 rounded-lg text-sm font-black transition-all flex items-center gap-2 ${
                activeMainTab === 'news' ? 'bg-amber-400 text-amber-950 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              {isHindi ? 'समाचार एवं प्रेस' : 'News & Press'}
            </button>
            <button
              onClick={() => setActiveMainTab('gallery')}
              className={`px-6 py-2.5 rounded-lg text-sm font-black transition-all flex items-center gap-2 ${
                activeMainTab === 'gallery' ? 'bg-amber-400 text-amber-950 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              {isHindi ? 'चित्र दीर्घा (गैलरी)' : 'Photo Gallery'}
            </button>
          </div>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight mb-2">
            {isHindi ? 'मीडिया कक्ष' : 'Media Room'}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 font-medium">
            {isHindi ? 'गांव समाज की नवीनतम गतिविधियों, समाचारों और चित्र दीर्घा से जुड़े रहें।' : 'Stay updated with the latest news, press releases, and photo highlights from our grassroots initiatives.'}
          </p>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {activeMainTab === 'news' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <div key={news.id} className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col group hover:shadow-md transition-all">
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-stone-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow flex items-center gap-1.5 border border-stone-200">
                    <Calendar className="w-3 h-3 text-amber-600" />
                    {news.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-stone-900 mb-2 leading-tight group-hover:text-amber-800 transition-colors">
                    {isHindi ? news.titleHi : news.title}
                  </h3>
                  <p className="text-xs text-stone-600 mb-6 leading-relaxed flex-1">
                    {isHindi ? news.summaryHi : news.summary}
                  </p>
                  <button className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 w-max">
                    {isHindi ? 'पूरा समाचार पढ़ें' : 'Read Full Article'} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="break-inside-avoid relative rounded-xl overflow-hidden group border border-stone-200 shadow-sm cursor-pointer">
                <img src={src} alt={`Gallery Image ${idx + 1}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
