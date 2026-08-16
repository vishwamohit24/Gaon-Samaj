import React, { useState } from 'react';
import { Story } from '../types';
import { STORIES, BilingualStory } from '../data/ngoData';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { ImpactScreen } from './ImpactScreen';
import { ScreenTab } from '../types';
import { SEO } from './SEO';
import { FlipText } from './FlipText';

interface StoriesScreenProps {
  onSelectStory: (story: Story) => void;
  onOpenDonate: () => void;
}

export const StoriesScreen: React.FC<StoriesScreenProps> = ({ onSelectStory, onOpenDonate }) => {
  const [activeMainTab, setActiveMainTab] = useState<'stories' | 'impact'>('stories');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { t, isHindi } = useLanguage();

  const categories = [
    { id: 'All', label: isHindi ? 'सभी' : 'All' },
    { id: 'Women Empowerment', label: isHindi ? 'महिला सशक्तिकरण' : 'Women Empowerment' },
    { id: 'Education', label: isHindi ? 'शिक्षा' : 'Education' },
    { id: 'Culture & Tourism', label: isHindi ? 'संस्कृति एवं पर्यटन' : 'Culture & Tourism' },
  ];

  const filteredStories = activeCategory === 'All'
    ? STORIES
    : STORIES.filter((s) => s.category === activeCategory);

  return (
    <div className="w-full bg-stone-50/50">
      <SEO 
        title={isHindi ? 'कहानियाँ' : 'Stories & Impact'}
        description="Read success stories from across Bihar. See how Gaon Samaj is changing lives at the grassroots level."
        canonicalUrl="/stories"
      />
      {/* Sub-navigation Tabs */}
      <div className="w-full border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-center py-4">
          <div className="bg-stone-100 p-1 rounded-xl flex gap-1 border border-stone-200">
            <button
              onClick={() => setActiveMainTab('stories')}
              className={`px-6 py-2 rounded-lg text-sm font-black transition-all ${
                activeMainTab === 'stories' ? 'bg-amber-400 text-amber-950 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {isHindi ? 'सफलता की कहानियाँ' : 'Success Stories'}
            </button>
            <button
              onClick={() => setActiveMainTab('impact')}
              className={`px-6 py-2 rounded-lg text-sm font-black transition-all ${
                activeMainTab === 'impact' ? 'bg-amber-400 text-amber-950 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {isHindi ? 'हमारा प्रभाव' : 'Our Impact'}
            </button>
          </div>
        </div>
      </div>

      {activeMainTab === 'impact' ? (
        <ImpactScreen onOpenDonate={onOpenDonate} />
      ) : (
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight mb-2">
            <FlipText>{t('storiesTitle')}</FlipText>
          </h1>
          <p className="text-sm sm:text-base text-stone-600 font-medium">
            {t('storiesSub')}
          </p>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Category filters */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-amber-950 border border-amber-500 shadow-xs font-black'
                  : 'bg-white text-stone-700 hover:bg-amber-100/50 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredStories.map((story: BilingualStory) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={story.imageUrl}
                    alt={isHindi ? story.titleHi || story.title : story.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {isHindi ? story.categoryHi || story.category : story.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-stone-500 mb-3 font-semibold">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-amber-700" /> {story.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-amber-700" /> {isHindi ? story.authorHi || story.author : story.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-amber-700" /> {story.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors mb-2 leading-snug">
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
                  className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold text-xs py-2.5 rounded-lg transition-colors border border-amber-500/30 flex items-center justify-center gap-1.5"
                >
                  {t('readMore')}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
      )}
    </div>
  );
};
