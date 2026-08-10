import React, { useState } from 'react';
import { ScreenTab } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Heart, TreePine, Phone, Mail, Globe, Check, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

interface NavbarProps {
  activeTab: ScreenTab;
  setActiveTab: (tab: ScreenTab) => void;
  onOpenDonate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenDonate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, toggleLang, t, isHindi } = useLanguage();

  const navItems: { id: ScreenTab; labelKey: string }[] = [
    { id: 'home', labelKey: 'navHome' },
    { id: 'about', labelKey: 'navAbout' },
    { id: 'projects', labelKey: 'navProjects' },
    { id: 'focus', labelKey: 'navFocus' },
    { id: 'impact', labelKey: 'navImpact' },
    { id: 'stories', labelKey: 'navStories' },
    { id: 'get-involved', labelKey: 'navGetInvolved' },
    { id: 'contact', labelKey: 'navContact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md border-b border-amber-200">
      {/* Top Utility Bar */}
      <div className="bg-amber-400 text-amber-950 px-4 py-1.5 text-xs font-medium border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center space-x-3">
            <span className="bg-amber-950/10 text-amber-950 px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase border border-amber-950/10">
              {t('registeredNgo')}
            </span>
            <span className="hidden md:inline-flex items-center gap-1 font-semibold text-amber-900">
              <Phone className="w-3 h-3 text-amber-950" /> {t('phone')}
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 font-semibold text-amber-900">
              <Mail className="w-3 h-3 text-amber-950" /> {t('email')}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {/* Social Icons */}
            <div className="flex items-center space-x-2 text-amber-900">
              <a href="#facebook" className="hover:text-amber-950 transition-colors" title="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#instagram" className="hover:text-amber-950 transition-colors" title="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#youtube" className="hover:text-amber-950 transition-colors" title="YouTube">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a href="#linkedin" className="hover:text-amber-950 transition-colors" title="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>

            <span className="text-amber-700">|</span>

            {/* Language Switcher Pill in Top Bar */}
            <div className="flex items-center bg-amber-950/10 p-0.5 rounded-full border border-amber-950/20">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold transition-all ${
                  lang === 'en'
                    ? 'bg-amber-950 text-amber-300 shadow-xs'
                    : 'text-amber-900 hover:text-amber-950'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold transition-all ${
                  lang === 'hi'
                    ? 'bg-amber-950 text-amber-300 shadow-xs'
                    : 'text-amber-900 hover:text-amber-950'
                }`}
                title="हिंदी में बदलें"
              >
                हिंदी
              </button>
            </div>

            <span className="text-amber-700">|</span>

            <button
              onClick={() => {
                setActiveTab('get-involved');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:underline font-bold text-amber-950"
            >
              {t('supportUs')}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center p-2 shadow-sm group-hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center">
                <TreePine className="w-7 h-7 text-emerald-700" />
                <div className="absolute -bottom-1 w-5 h-1 bg-amber-800 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight text-gray-900 leading-none">
                {t('orgName')} <span className="text-amber-600">.COM</span>
              </span>
              <span className="text-[11px] font-extrabold text-amber-800 tracking-wider uppercase mt-0.5">
                {t('orgSubName')}
              </span>
              <span className="text-[10px] text-stone-600 font-semibold italic">
                {t('tagline')}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-3 py-2 text-xs lg:text-sm font-bold rounded-md transition-all duration-200 relative ${
                    isActive
                      ? 'text-amber-950 font-black bg-amber-100/80 border-b-2 border-amber-500 shadow-xs'
                      : 'text-stone-700 hover:text-amber-800 hover:bg-amber-50'
                  }`}
                >
                  {t(item.labelKey)}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-amber-500 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Language Switcher */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Prominent Navbar Language Switch Button */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-100 hover:bg-amber-100 border border-stone-300 hover:border-amber-400 text-stone-800 text-xs font-bold transition-all"
              title="Switch Language / भाषा बदलें"
            >
              <Globe className="w-4 h-4 text-amber-700" />
              <span>{isHindi ? 'English' : 'हिंदी'}</span>
            </button>

            <button
              onClick={onOpenDonate}
              className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 flex items-center gap-2 border border-amber-500/40"
            >
              <Heart className="w-4 h-4 text-amber-950 fill-amber-950" />
              {t('donateNow')}
            </button>
          </div>

          {/* Mobile Menu & Quick Lang Toggle Button */}
          <div className="flex items-center xl:hidden gap-2">
            
            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 rounded-md bg-stone-100 text-stone-900 border border-stone-300 text-xs font-bold flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5 text-amber-700" />
              <span>{lang === 'en' ? 'हिंदी' : 'EN'}</span>
            </button>

            <button
              onClick={onOpenDonate}
              className="bg-amber-400 text-amber-950 font-bold text-xs px-3 py-1.5 rounded-md sm:hidden flex items-center gap-1"
            >
              {t('donate')}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-amber-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-amber-200 shadow-xl px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          
          {/* Mobile Language Bar */}
          <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-amber-700" />
              {t('languageToggleLabel')}:
            </span>
            <div className="flex bg-white rounded-lg border border-amber-300 p-0.5">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-xs font-extrabold rounded-md ${
                  lang === 'en' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-stone-600'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-3 py-1 text-xs font-extrabold rounded-md ${
                  lang === 'hi' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-stone-600'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left px-4 py-3 text-sm font-bold rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-amber-400 text-amber-950 font-extrabold'
                  : 'text-stone-700 hover:bg-amber-50 hover:text-amber-700'
              }`}
            >
              {t(item.labelKey)}
            </button>
          ))}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-black py-3 rounded-lg flex items-center justify-center gap-2 shadow"
            >
              <Heart className="w-5 h-5 fill-amber-950 text-amber-950" />
              {t('donateNow')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
