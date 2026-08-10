import React from 'react';
import { Story } from '../types';
import { BilingualStory } from '../data/ngoData';
import { useLanguage } from '../context/LanguageContext';
import { X, Calendar, User, Clock, Share2 } from 'lucide-react';

interface StoryDetailModalProps {
  story: Story | null;
  onClose: () => void;
}

export const StoryDetailModal: React.FC<StoryDetailModalProps> = ({ story, onClose }) => {
  const { t, isHindi } = useLanguage();

  if (!story) return null;

  const bStory = story as BilingualStory;

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-300 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-900/60 text-white hover:bg-amber-400 hover:text-amber-950 flex items-center justify-center transition-all shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full bg-stone-100">
          <img
            src={story.imageUrl}
            alt={isHindi ? bStory.titleHi || story.title : story.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="bg-amber-400 text-amber-950 font-bold text-xs px-3 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">
              {isHindi ? bStory.categoryHi || story.category : story.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {isHindi ? bStory.titleHi || story.title : story.title}
            </h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          
          <div className="flex items-center gap-4 text-xs text-stone-500 border-b border-stone-200 pb-3 font-semibold">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-700" /> {story.date}</span>
            <span className="flex items-center gap-1"><User className="w-4 h-4 text-amber-700" /> {isHindi ? bStory.authorHi || story.author : story.author}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-amber-700" /> {story.readTime}</span>
          </div>

          <div className="space-y-4">
            <p className="text-stone-800 text-base font-semibold leading-relaxed italic bg-amber-50 p-4 rounded-xl border-l-4 border-amber-400">
              "{isHindi ? bStory.summaryHi || story.summary : story.summary}"
            </p>
            <p className="text-stone-700 text-sm leading-relaxed font-normal whitespace-pre-line">
              {isHindi ? bStory.fullContentHi || story.fullContent : story.fullContent}
            </p>
          </div>

          <div className="pt-4 border-t border-stone-200 flex justify-between items-center">
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert(isHindi ? 'कहानी का लिंक कॉपी हो गया!' : 'Story link copied to clipboard!');
              }}
              className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-2"
            >
              <Share2 className="w-3.5 h-3.5" /> {isHindi ? 'साझा करें' : 'Share Article'}
            </button>
            <button
              onClick={onClose}
              className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold px-6 py-2 rounded-lg text-xs"
            >
              {t('close')}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
