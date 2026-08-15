import React, { useState, useEffect } from 'react';
import { ScreenTab, Director, Story, Project } from '../types';
import { HERO_SLIDES, DIRECTORS, FOCUS_AREAS, IMPACT_METRICS, STORIES, BilingualDirector } from '../data/ngoData';
import { MandalaHeaderPattern, CircularMadhubaniFrame, MadhubaniCardCorner } from './TraditionalPattern';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, UserCheck, HeartHandshake, MapPin, Landmark, Sprout, BookOpen, ShieldAlert, Lightbulb, Users, CheckCircle2, HandHeart, ArrowRight, Calendar, User } from 'lucide-react';

interface HomeScreenProps {
  setActiveTab: (tab: ScreenTab) => void;
  onOpenDonate: () => void;
  onSelectProject: (project: Project) => void;
  onSelectStory: (story: Story) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  setActiveTab,
  onOpenDonate,
  onSelectStory,
}) => {
  const [selectedDirector, setSelectedDirector] = useState<BilingualDirector | null>(null);
  const { t, isHindi } = useLanguage();

  // Typewriter Effect State
  const typewriterPhrases = isHindi 
    ? ["हमारे सपनों का बिहार", "एक सशक्त बिहार", "एक समृद्ध बिहार"] 
    : ["a Bihar of Our Dream", "a Stronger Bihar", "a Developed Bihar"];
  const [typewriterText, setTypewriterText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setTypewriterText(currentPhrase.substring(0, typewriterText.length - 1));
        if (typewriterText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setTypewriterText(currentPhrase.substring(0, typewriterText.length + 1));
        if (typewriterText.length === currentPhrase.length) {
          timeout = setTimeout(() => setIsDeleting(true), 2500);
        }
      }, 100);
    }
    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, phraseIndex, isHindi, typewriterPhrases]);

  const renderFocusIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-8 h-8 text-amber-900" />;
      case 'HeartHandshake': return <HeartHandshake className="w-8 h-8 text-amber-900" />;
      case 'MapPin': return <MapPin className="w-8 h-8 text-amber-900" />;
      case 'Landmark': return <Landmark className="w-8 h-8 text-amber-900" />;
      case 'Sprout': return <Sprout className="w-8 h-8 text-amber-900" />;
      case 'BookOpen': return <BookOpen className="w-8 h-8 text-amber-900" />;
      case 'ShieldAlert': return <ShieldAlert className="w-8 h-8 text-amber-900" />;
      case 'Lightbulb': return <Lightbulb className="w-8 h-8 text-amber-900" />;
      default: return <BookOpen className="w-8 h-8 text-amber-900" />;
    }
  };

  return (
    <div className="w-full bg-amber-50/30">

      {/* 1. Traditional Mandala Accent Header Band */}
      <MandalaHeaderPattern />

      {/* 2. New Hero Section with Typewriter */}
      <section className="relative w-full bg-[#FCFAEF] overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32 px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between min-h-[600px] gap-12 lg:gap-8">
        
        {/* Left Column: Text & CTA */}
        <div className="flex-1 max-w-2xl z-10 text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.1] font-black text-stone-900 tracking-tight mb-6">
            <span className="block mb-2">{isHindi ? "आइए बनाएं" : "Let's make"}</span>
            <div className="relative inline-block">
              <span className="text-stone-900 relative z-10 min-h-[60px] inline-block">{typewriterText}</span>
              <span className="animate-pulse">|</span>
              <div className="absolute bottom-1 left-0 w-full h-4 sm:h-5 bg-amber-400/80 -z-10 -rotate-1 rounded-sm transform origin-left"></div>
            </div>
          </h1>
          
          <p className="text-stone-600 text-lg sm:text-xl max-w-xl font-medium mb-10 mx-auto lg:mx-0">
            {isHindi 
              ? "बिहार के गांवों, कस्बों और शहरों में बुनियादी ढांचे, शिक्षा, स्वास्थ्य सेवा और रोजगार के लिए काम करना।"
              : "Working for infrastructure, education, healthcare and employment across villages, towns and cities of Bihar."}
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
            <button
              onClick={() => {
                setActiveTab('projects');
                window.scrollTo(0, 0);
              }}
              className="bg-stone-950 hover:bg-stone-800 text-white font-extrabold px-8 py-3.5 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-base sm:text-lg tracking-wide"
            >
              {isHindi ? "अभी जुड़ें" : "Join now"}
            </button>
            <button
              onClick={() => {
                setActiveTab('impact');
                window.scrollTo(0, 0);
              }}
              className="text-stone-900 font-extrabold hover:text-amber-600 transition-colors flex items-center gap-2 text-base sm:text-lg"
            >
              {isHindi ? "और जानें" : "Discover"} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Masked Image & Stats */}
        <div className="flex-1 relative w-full max-w-xl mx-auto lg:mx-0">
          {/* Decorative Brush Stroke Background */}
          <div className="absolute top-10 -left-12 w-48 h-12 bg-[#8bc34a] opacity-80 rounded-[100%] blur-[2px] transform -rotate-12 z-0 hidden lg:block" style={{ borderRadius: "50% 20% / 10% 40%", clipPath: "polygon(0 10%, 100% 0, 95% 100%, 5% 90%)" }}></div>
          
          {/* Main Map Mask Container */}
          <div className="relative w-full aspect-square z-10" style={{
            // A simplified blob shape resembling Bihar's rough outline for the mask, or using a very organic border-radius as a fallback map-like shape.
            clipPath: "polygon(22% 8%, 45% 2%, 67% 6%, 86% 15%, 97% 33%, 99% 55%, 90% 77%, 74% 94%, 50% 98%, 24% 90%, 9% 75%, 2% 51%, 6% 26%)",
          }}>
            <img 
              src="/hero-healthy-bihar.png" 
              alt="Kid smiling in Bihar" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Map Shadow/Accent Behind */}
          <div className="absolute inset-0 bg-[#e6e2d3] -z-10 translate-x-4 translate-y-6" style={{
            clipPath: "polygon(22% 8%, 45% 2%, 67% 6%, 86% 15%, 97% 33%, 99% 55%, 90% 77%, 74% 94%, 50% 98%, 24% 90%, 9% 75%, 2% 51%, 6% 26%)",
          }}></div>

          {/* Stats Badge */}
          <div className="absolute -bottom-8 -right-4 lg:-right-12 z-20 flex flex-col items-center">
            {/* Decorative yellow brush stroke under stats */}
            <div className="absolute inset-0 bg-amber-400 w-full h-12 top-1/2 -z-10 transform -rotate-6" style={{ clipPath: "polygon(0 20%, 100% 0, 90% 100%, 10% 80%)" }}></div>
            <span className="text-5xl lg:text-6xl font-black text-stone-900 font-anton">38</span>
            <span className="text-xs font-bold text-stone-800 uppercase tracking-widest mt-1">districts<br/>connected</span>
          </div>
        </div>
        
      </section>

      {/* 3. Director's Desk Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-stone-900 tracking-tight">{t('directorsDesk')}</h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {DIRECTORS.map((dir) => (
            <div
              key={dir.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-amber-200/60 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 hover:shadow-md transition-shadow"
            >
              <CircularMadhubaniFrame>
                <img
                  src={dir.imageUrl}
                  alt={dir.name}
                  referrerPolicy="no-referrer"
                  className="w-28 h-28 object-cover rounded-full"
                />
              </CircularMadhubaniFrame>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-stone-900">{dir.name}</h3>
                <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                  {isHindi ? dir.titleHi || dir.title : dir.title}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed font-normal mb-3">
                  {isHindi ? dir.bioHi || dir.bio : dir.bio}
                </p>
                <button
                  onClick={() => setSelectedDirector(dir)}
                  className="text-xs font-extrabold text-amber-800 hover:text-amber-950 hover:underline inline-flex items-center gap-1"
                >
                  {t('readMore')} &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Our Focus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-100/40 border-y border-amber-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-stone-900 tracking-tight">{t('ourFocusTitle')}</h2>
            <p className="text-sm text-stone-600 mt-2 max-w-xl mx-auto font-medium">
              {t('ourFocusSub')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOCUS_AREAS.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveTab('projects');
                  window.scrollTo(0, 0);
                }}
                className="bg-amber-400 hover:bg-amber-400/90 text-stone-900 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1 flex flex-col justify-between border border-amber-500/30 group relative overflow-hidden"
              >
                <MadhubaniCardCorner />

                <div>
                  <div className="w-14 h-14 rounded-xl bg-amber-300/80 border border-amber-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {renderFocusIcon(item.iconName)}
                  </div>

                  <h3 className="text-lg font-bold text-stone-950 mb-1 leading-snug">
                    {isHindi ? item.titleHi || item.title : item.title}
                  </h3>
                  <p className="text-xs text-stone-800 leading-relaxed font-normal">
                    {isHindi ? item.descriptionHi || item.description : item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-500/30 flex items-center justify-between text-xs font-black text-amber-950">
                  <span>{t('explore')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Impact in Numbers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-stone-900 tracking-tight">{t('ourImpactTitle')}</h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Lives Impacted */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-amber-400 flex items-center gap-5 relative overflow-hidden">
            <MadhubaniCardCorner />
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-800 border border-amber-300">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                {t('livesImpacted')}
              </span>
              <span className="text-3xl font-black text-stone-900 tracking-tight">
                {t('livesValue')}
              </span>
            </div>
          </div>

          {/* Card 2: Projects Completed */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-amber-400 flex items-center gap-5 relative overflow-hidden">
            <MadhubaniCardCorner />
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-800 border border-amber-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                {t('projectsCompleted')}
              </span>
              <span className="text-3xl font-black text-stone-900 tracking-tight">
                {t('projectsValue')}
              </span>
            </div>
          </div>

          {/* Card 3: Volunteers Engaged */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-amber-400 flex items-center gap-5 relative overflow-hidden">
            <MadhubaniCardCorner />
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-800 border border-amber-300">
              <HandHeart className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                {t('volunteersEngaged')}
              </span>
              <span className="text-3xl font-black text-stone-900 tracking-tight">
                {t('volunteersValue')}
              </span>
            </div>
          </div>
        </div>

        {/* Link to D3 Impact Gallery */}
        <div className="text-center mt-10">
          <button
            onClick={() => {
              setActiveTab('impact');
              window.scrollTo(0, 0);
            }}
            className="bg-[#064e3b] hover:bg-[#14532d] text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2.5 text-sm border-2 border-[#ea580c]"
          >
            <span>{isHindi ? 'डी3 इंटरएक्टिव प्रभाव गैलरी देखें' : 'View D3 Interactive Impact Gallery'}</span>
            <ArrowRight className="w-4 h-4 text-[#ea580c]" />
          </button>
        </div>
      </section>

      {/* 6. Stories & Updates Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50/50 border-t border-amber-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black text-stone-900 tracking-tight">{t('storiesTitle')}</h2>
              <p className="text-sm text-stone-600 mt-1">
                {t('storiesSub')}
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTab('stories');
                window.scrollTo(0, 0);
              }}
              className="text-sm font-extrabold text-amber-800 hover:text-amber-950 hover:underline flex items-center gap-1"
            >
              {t('viewAllStories')} &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STORIES.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl shadow-sm border border-amber-200/80 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={story.imageUrl}
                      alt={isHindi ? story.titleHi || story.title : story.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-amber-400 text-amber-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                      {isHindi ? story.categoryHi || story.category : story.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-stone-500 mb-2 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-700" /> {story.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-amber-700" /> {isHindi ? story.authorHi || story.author : story.author}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug mb-2">
                      {isHindi ? story.titleHi || story.title : story.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {isHindi ? story.summaryHi || story.summary : story.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectStory(story)}
                    className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold text-xs py-2.5 rounded-lg transition-colors border border-amber-500/30 shadow-xs"
                  >
                    {t('readMore')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Full Bio Modal */}
      {selectedDirector && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-amber-300 relative">
            <button
              onClick={() => setSelectedDirector(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 font-bold text-lg"
            >
              ✕
            </button>
            <div className="flex items-center gap-4 mb-4">
              <CircularMadhubaniFrame>
                <img
                  src={selectedDirector.imageUrl}
                  alt={selectedDirector.name}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </CircularMadhubaniFrame>
              <div>
                <h3 className="text-xl font-bold text-stone-900">{selectedDirector.name}</h3>
                <p className="text-xs font-bold text-amber-700">
                  {isHindi ? selectedDirector.titleHi || selectedDirector.title : selectedDirector.title}
                </p>
                {selectedDirector.email && (
                  <p className="text-xs text-stone-500 mt-1">{selectedDirector.email}</p>
                )}
              </div>
            </div>

            {(selectedDirector.quote || selectedDirector.quoteHi) && (
              <blockquote className="bg-amber-50 border-l-4 border-amber-400 p-3 italic text-xs text-stone-800 mb-4 rounded-r-lg font-medium">
                "{isHindi ? selectedDirector.quoteHi || selectedDirector.quote : selectedDirector.quote}"
              </blockquote>
            )}

            <p className="text-sm text-stone-700 leading-relaxed font-normal mb-6 whitespace-pre-line">
              {isHindi ? selectedDirector.fullBioHi || selectedDirector.fullBio : selectedDirector.fullBio}
            </p>

            <button
              onClick={() => setSelectedDirector(null)}
              className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold py-2.5 rounded-lg transition-colors"
            >
              {t('close')}
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
