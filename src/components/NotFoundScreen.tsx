import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { SEO } from './SEO';
import { Link } from 'react-router-dom';

export const NotFoundScreen: React.FC = () => {
  const { isHindi } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-stone-50 py-24 px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
      <SEO 
        title={isHindi ? 'पृष्ठ नहीं मिला (404)' : 'Page Not Found (404)'} 
        description={isHindi ? 'यह पृष्ठ उपलब्ध नहीं है।' : 'The page you are looking for is not available.'}
      />
      <div className="max-w-md mx-auto text-center">
        <div className="w-24 h-24 bg-red-100 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-red-200 shadow-sm transform -rotate-6">
          <ShieldAlert className="w-12 h-12" />
        </div>
        <h1 className="text-7xl font-black text-stone-900 tracking-tighter mb-2">404</h1>
        <h2 className="text-2xl font-bold text-stone-800 mb-4">
          {isHindi ? 'पृष्ठ नहीं मिला' : 'Page Not Found'}
        </h2>
        <p className="text-stone-600 mb-8 font-medium">
          {isHindi 
            ? 'क्षमा करें, आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है या हटा दिया गया है।' 
            : 'Sorry, the page you are looking for does not exist, has been removed, or is temporarily unavailable.'}
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black px-6 py-3 rounded-xl shadow-xs transition-colors border border-amber-500/50"
        >
          <ArrowLeft className="w-5 h-5" />
          {isHindi ? 'होम पेज पर लौटें' : 'Return to Home'}
        </Link>
      </div>
    </div>
  );
};
