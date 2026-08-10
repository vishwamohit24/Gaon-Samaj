import React from 'react';
import { ScreenTab } from '../types';
import { ImpactGallery } from './ImpactGallery';
import { useLanguage } from '../context/LanguageContext';
import { MandalaHeaderPattern } from './TraditionalPattern';
import { Award, Heart, Users, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface ImpactScreenProps {
  setActiveTab: (tab: ScreenTab) => void;
  onOpenDonate: () => void;
}

export const ImpactScreen: React.FC<ImpactScreenProps> = ({ setActiveTab, onOpenDonate }) => {
  const { t, isHindi } = useLanguage();

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#064e3b] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* HERO BANNER SECTION FOR IMPACT */}
      <div className="max-w-7xl mx-auto bg-[#064e3b] text-white rounded-3xl p-8 sm:p-12 border-4 border-[#ea580c] shadow-2xl relative overflow-hidden">
        
        {/* Background Mandala Traditional Pattern Overlay */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <MandalaHeaderPattern className="w-96 h-96 text-white" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#ea580c] text-white font-comic text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
            <Sparkles className="w-4 h-4 text-white" />
            <span>{isHindi ? '100% पारदर्शी जमीनी आंकड़े' : '100% Transparent Grassroots Analytics'}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bhavuka font-black leading-tight text-white">
            {isHindi ? 'हमारा सामाजिक प्रभाव एवं परिवर्तन' : 'COMMUNITY IMPACT & TRANSFORMATION'}
          </h1>

          <p className="font-comic text-sm sm:text-base text-white/90 leading-relaxed">
            {isHindi
              ? 'गांव समाज (बिहार सोशल इनिशिएटिव) के माध्यम से बिहार के 38 जिलों में लाखों जिंदगियों में लाया गया वास्तविक बदलाव। शिक्षा, महिला अधिकार, कला पुनरुद्धार और पर्यावरण संरक्षण।'
              : 'Empowering local populations across Bihar through high-impact initiatives in child literacy, women self-help cooperatives, Madhubani art revival, and environmental sustainability.'}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onOpenDonate}
              className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-comic font-black text-sm px-6 py-3.5 rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{isHindi ? 'हमारे लक्ष्य में सहयोग करें' : 'Support Our Impact'}</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-comic font-bold text-sm px-6 py-3.5 rounded-xl transition-all flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-[#fdba74]" />
              <span>{isHindi ? 'सक्रिय परियोजनाएं देखें' : 'View Field Projects'}</span>
            </button>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-10 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="font-comic text-2xl sm:text-3xl font-bold text-[#fdba74]">5,000,000+</div>
            <div className="font-bhavuka text-xs text-white/80">{isHindi ? 'कुल लाभान्वित' : 'Lives Touched'}</div>
          </div>
          <div>
            <div className="font-comic text-2xl sm:text-3xl font-bold text-[#fdba74]">38</div>
            <div className="font-bhavuka text-xs text-white/80">{isHindi ? 'बिहार जिले शामिल' : 'Districts Covered'}</div>
          </div>
          <div>
            <div className="font-comic text-2xl sm:text-3xl font-bold text-[#fdba74]">200+</div>
            <div className="font-bhavuka text-xs text-white/80">{isHindi ? 'पूर्ण परियोजनाएं' : 'Completed Projects'}</div>
          </div>
          <div>
            <div className="font-comic text-2xl sm:text-3xl font-bold text-[#fdba74]">10,000+</div>
            <div className="font-bhavuka text-xs text-white/80">{isHindi ? 'सक्रिय स्वयंसेवक' : 'Active Volunteers'}</div>
          </div>
        </div>

      </div>

      {/* EMBEDDED D3 IMPACT GALLERY COMPONENT */}
      <div className="max-w-7xl mx-auto">
        <ImpactGallery onOpenDonate={onOpenDonate} />
      </div>

    </div>
  );
};
