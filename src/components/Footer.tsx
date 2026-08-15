import React, { useState } from 'react';
import { ScreenTab } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, Globe, MapPin, Facebook, Instagram, Linkedin, Youtube, Award, CheckCircle2, Heart, Send } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ScreenTab) => void;
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenDonate }) => {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribedSuccess, setSubscribedSuccess] = useState(false);
  const { t, isHindi } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setSubscribedSuccess(true);
      setTimeout(() => setSubscribedSuccess(false), 4000);
      setSubscribedEmail('');
    }
  };

  return (
    <footer className="w-full">
      {/* Top Golden Yellow Main Footer Band */}
      <div className="bg-amber-400 text-amber-950 py-12 px-4 sm:px-6 lg:px-8 border-t-4 border-amber-500 relative overflow-hidden">
        
        {/* Decorative background traditional lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#78350f_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          
          {/* About Us Column */}
          <div className="space-y-4">
            <img src="/logo.jpg" alt="Gaon Samaj Logo" className="w-40 h-auto bg-white p-2 rounded-2xl shadow-sm border-2 border-amber-500/30" />
            <p className="text-sm leading-relaxed text-amber-900 font-medium">
              {t('aboutUsFooter')}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 bg-amber-500/40 text-amber-950 text-xs font-bold px-2.5 py-1 rounded border border-amber-600/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-900" />
                {isHindi ? '80G एवं 12A पंजीकृत एनजीओ' : '80G & 12A Certified NGO'}
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-amber-950 tracking-tight">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm text-amber-900 font-medium">
              <li>
                <button onClick={() => { setActiveTab('home'); window.scrollTo(0,0); }} className="hover:underline hover:text-amber-950">
                  {t('navHome')}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('about'); window.scrollTo(0,0); }} className="hover:underline hover:text-amber-950">
                  {t('navAbout')}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('projects'); window.scrollTo(0,0); }} className="hover:underline hover:text-amber-950">
                  {t('navProjects')}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('focus'); window.scrollTo(0,0); }} className="hover:underline hover:text-amber-950">
                  {t('navFocus')}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('stories'); window.scrollTo(0,0); }} className="hover:underline hover:text-amber-950">
                  {t('navStories')}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('contact'); window.scrollTo(0,0); }} className="hover:underline hover:text-amber-950">
                  {t('navGetInvolved')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-amber-950 tracking-tight">{t('contactInfo')}</h3>
            <ul className="space-y-3 text-sm text-amber-900 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                <span>{t('patnaOffice')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-900 shrink-0" />
                <span>+91-81232 2031 / +91-81720 0200</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-900 shrink-0" />
                <span>contact@gaonsamaj.com / contact@biharsocial.org</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-amber-900 shrink-0" />
                <span>gaonsamaj.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-amber-950 tracking-tight">{t('subscribeNewsletter')}</h3>
            <p className="text-xs text-amber-900 font-medium leading-relaxed">
              {t('newsletterSub')}
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex bg-white rounded-lg shadow-sm overflow-hidden p-1 border border-amber-600/30">
                <input
                  type="email"
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  placeholder={t('emailAddress')}
                  required
                  className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 text-xs font-bold rounded-md transition-colors flex items-center gap-1 shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  {t('subscribe')}
                </button>
              </div>
              {subscribedSuccess && (
                <p className="text-xs font-bold text-emerald-950 animate-fadeIn">
                  ✓ {isHindi ? 'धन्यवाद! आपका सब्सक्रिप्शन सफलतापूर्वक हो गया है।' : 'Thank you! You have been subscribed to updates.'}
                </p>
              )}
            </form>

            <div className="pt-3">
              <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider mb-2">{isHindi ? 'सोशल मीडिया पर जुड़ें' : 'Connect With Us'}</h4>
              <div className="flex space-x-3 text-amber-950">
                <a href="#facebook" className="w-8 h-8 rounded-full bg-amber-500/50 hover:bg-amber-600 hover:text-white flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#instagram" className="w-8 h-8 rounded-full bg-amber-500/50 hover:bg-amber-600 hover:text-white flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#linkedin" className="w-8 h-8 rounded-full bg-amber-500/50 hover:bg-amber-600 hover:text-white flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#youtube" className="w-8 h-8 rounded-full bg-amber-500/50 hover:bg-amber-600 hover:text-white flex items-center justify-center transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Certification Seals Row */}
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-amber-500/40 flex flex-wrap justify-center items-center gap-8 text-amber-950 text-xs font-bold">
          <div className="flex items-center gap-2 bg-amber-300/60 px-4 py-2 rounded-full border border-amber-500/30">
            <Award className="w-4 h-4 text-amber-900" />
            <span>{isHindi ? 'नीति आयोग दर्पण पंजीकृत एनजीओ' : 'NITI Aayog Darpan Registered NGO'}</span>
          </div>
          <div className="flex items-center gap-2 bg-amber-300/60 px-4 py-2 rounded-full border border-amber-500/30">
            <CheckCircle2 className="w-4 h-4 text-amber-900" />
            <span>{isHindi ? '80G आयकर छूट प्रमाण पत्र (भारत)' : '80G Tax Exemption Eligible (India)'}</span>
          </div>
          <div className="flex items-center gap-2 bg-amber-300/60 px-4 py-2 rounded-full border border-amber-500/30">
            <Heart className="w-4 h-4 text-amber-900" />
            <span>{isHindi ? 'गाँव समाज समाज सेवी पहल' : 'Gaon Samaj Social Initiative'}</span>
          </div>
        </div>
      </div>

      {/* Dark Brown Bottom Bar */}
      <div className="bg-[#2a1708] text-amber-100/80 py-4 px-4 sm:px-6 lg:px-8 border-t border-amber-900/50 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2026 Gaon Samaj (Bihar Social Initiative). gaonsamaj.com. All Rights Reserved.</p>
          <div className="flex items-center space-x-4 font-semibold">
            <button onClick={() => { setActiveTab('about'); window.scrollTo(0,0); }} className="hover:text-amber-300 transition-colors">
              {isHindi ? 'गोपनीयता नीति' : 'Privacy Policy'}
            </button>
            <span>•</span>
            <button onClick={() => { setActiveTab('contact'); window.scrollTo(0,0); }} className="hover:text-amber-300 transition-colors">
              {isHindi ? 'नियम व शर्तें' : 'Terms of Use'}
            </button>
            <span>•</span>
            <button onClick={onOpenDonate} className="text-amber-400 font-bold hover:underline">
              {t('supportCause')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
