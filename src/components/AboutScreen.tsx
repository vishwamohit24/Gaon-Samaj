import React from 'react';
import { DIRECTORS } from '../data/ngoData';
import { CircularMadhubaniFrame, MandalaHeaderPattern } from './TraditionalPattern';
import { ScreenTab } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Target, Eye, Award, CheckCircle2, Heart } from 'lucide-react';
import { SEO } from './SEO';

interface AboutScreenProps {
  onOpenDonate: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenDonate }) => {
  const { t, isHindi } = useLanguage();

  return (
    <div className="w-full bg-amber-50/30">
      <SEO 
        title={isHindi ? 'हमारे बारे में' : 'About Us'}
        description="Learn about the mission, vision, and leadership of Gaon Samaj. We are building a prosperous and self-reliant Bihar."
        canonicalUrl="/about"
      />
      
      {/* Decorative Mandala Top Accent */}
      <MandalaHeaderPattern />

      {/* Hero Banner */}
      <div className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="bg-amber-400 text-amber-950 font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
            {t('registeredNgo')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            {t('aboutTitle')}
          </h1>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-normal">
            {t('aboutSub')}
          </p>
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-200">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 border border-amber-300">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">{t('ourMission')}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {t('ourMissionText')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-200">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 border border-amber-300">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">{t('ourVision')}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {t('ourVisionText')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-200">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 border border-amber-300">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">{t('ourValues')}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {isHindi
                ? 'जमीनी सहभागिता, महिला नेतृत्व, सामाजिक न्याय, पारदर्शिता और बिहार के सभी 38 जिलों में मापने योग्य सकारात्मक बदलाव।'
                : 'Integrity, transparency, community participation, gender equality, cultural pride, and measurable impact across all 38 districts of Bihar.'}
            </p>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-stone-900 tracking-tight">{t('directorsDesk')}</h2>
          <p className="text-stone-600 text-sm mt-1">
            {isHindi ? 'अनुभवी सामाजिक कार्यकर्ताओं और लोक नीति सलाहकारों का मार्गदर्शक मंडल।' : 'Experienced social workers and policy advisors leading field teams.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
          {DIRECTORS.map((dir) => (
            <div key={dir.id} className="bg-white p-8 rounded-2xl shadow-sm border border-amber-200 flex flex-col items-center text-center">
              <CircularMadhubaniFrame>
                <img src={dir.imageUrl} alt={dir.name} referrerPolicy="no-referrer" className="w-32 h-32 rounded-full object-cover" />
              </CircularMadhubaniFrame>
              <h3 className="text-2xl font-bold text-stone-900 mt-4">{dir.name}</h3>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest mt-1 mb-3">
                {isHindi ? dir.titleHi || dir.title : dir.title}
              </span>
              <p className="text-sm text-stone-600 leading-relaxed font-normal">
                {isHindi ? dir.fullBioHi || dir.fullBio : dir.fullBio}
              </p>
            </div>
          ))}
        </div>

        {/* Governance Callout */}
        <div className="bg-amber-400 rounded-3xl p-8 sm:p-12 text-stone-950 flex flex-col md:flex-row items-center justify-between gap-8 border border-amber-500 shadow-md">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-950" />
              <span className="font-extrabold uppercase tracking-wider text-xs">
                {isHindi ? 'पारदर्शी शासन एवं लेखा-जोखा' : 'Full Governance Transparency'}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              {isHindi ? '80G आयकर छूट प्राप्त एवं पंजीकृत एनजीओ' : 'Registered, Tax-Exempt & Audited NGO'}
            </h3>
            <p className="text-sm text-stone-900 font-medium">
              {isHindi
                ? 'हम वार्षिक ऑडिट रिपोर्ट प्रकाशित करते हैं और दानदाताओं के लिए आयकर धारा 80G के तहत 50% कर छूट रसीद प्रदान करते हैं।'
                : 'We publish independent annual audit reports and maintain full 80G tax exemption compliance for donors across India.'}
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold">
              <span className="flex items-center gap-1 bg-amber-300/80 px-3 py-1 rounded-md border border-amber-500/30">
                <CheckCircle2 className="w-4 h-4 text-amber-950" /> 80G Tax Exemption
              </span>
              <span className="flex items-center gap-1 bg-amber-300/80 px-3 py-1 rounded-md border border-amber-500/30">
                <CheckCircle2 className="w-4 h-4 text-amber-950" /> NITI Aayog Darpan
              </span>
              <span className="flex items-center gap-1 bg-amber-300/80 px-3 py-1 rounded-md border border-amber-500/30">
                <CheckCircle2 className="w-4 h-4 text-amber-950" /> Section 12A Certified
              </span>
            </div>
          </div>

          <button
            onClick={onOpenDonate}
            className="bg-stone-900 hover:bg-stone-950 text-amber-300 font-black px-8 py-4 rounded-xl shadow-md transition-all shrink-0 flex items-center gap-2 text-sm"
          >
            <Heart className="w-4 h-4 fill-amber-300" />
            {t('donateNow')}
          </button>
        </div>

      </div>
    </div>
  );
};
