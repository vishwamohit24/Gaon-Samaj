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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedDirector, setSelectedDirector] = useState<BilingualDirector | null>(null);
  const { t, isHindi } = useLanguage();

  // Auto-advance hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  // Helper to render icon for Focus Areas
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

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <div className="w-full bg-amber-50/30">

      {/* 1. Traditional Mandala Accent Header Band */}
      <MandalaHeaderPattern />

      {/* 2. Hero Image Carousel */}
      <section className="relative w-full bg-stone-900 text-white overflow-hidden">
        {/* Carousel Slider Images */}
        <div className="relative aspect-[1200/630] sm:aspect-auto sm:h-[460px] lg:h-[540px] w-full overflow-hidden bg-stone-950">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={isHindi ? slide.titleHi : slide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform sm:scale-105 transition-transform duration-7000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-transparent"></div>
            </div>
          ))}

          {/* Carousel Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md hover:bg-amber-400 hover:text-amber-950 text-white flex items-center justify-center transition-all shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md hover:bg-amber-400 hover:text-amber-950 text-white flex items-center justify-center transition-all shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Hero Overlay Banner Box - Attached below on mobile, overlay on desktop */}
        <div className="relative sm:absolute sm:bottom-0 sm:inset-x-0 z-20 pb-4 pt-4 sm:pb-8 sm:pt-16 bg-stone-900 sm:bg-transparent sm:bg-gradient-to-t sm:from-stone-950/60 sm:to-transparent px-4 sm:px-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b-4 border-amber-500 sm:border-0">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setActiveTab('projects');
                window.scrollTo(0, 0);
              }}
              className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold px-5 sm:px-7 py-2 sm:py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 border border-amber-500 text-sm sm:text-base"
            >
              {isHindi ? activeSlide.ctaTextHi : activeSlide.ctaText}
            </button>
            <button
              onClick={onOpenDonate}
              className="bg-stone-800/80 hover:bg-stone-800 text-amber-300 border border-amber-400/40 font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all shadow-md text-sm sm:text-base"
            >
              {t('supportCause')}
            </button>
          </div>

          {/* Carousel Dots */}
          <div className="flex space-x-2 pb-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-amber-400 w-8' : 'bg-white/40 hover:bg-white/70 shadow-sm'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
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

            <p className="text-sm text-stone-700 leading-relaxed font-normal mb-6">
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
