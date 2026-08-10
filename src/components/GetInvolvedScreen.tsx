import React, { useState } from 'react';
import { VolunteerFormData, ScreenTab } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Star, ShieldCheck, Heart, Building2, Send } from 'lucide-react';

interface GetInvolvedScreenProps {
  onOpenDonate: (customAmount?: number) => void;
  setActiveTab: (tab: ScreenTab) => void;
}

export const GetInvolvedScreen: React.FC<GetInvolvedScreenProps> = ({ onOpenDonate }) => {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedPreset, setSelectedPreset] = useState<number>(1500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const { t, isHindi } = useLanguage();

  // Volunteer form state
  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: '',
    email: '',
    phone: '',
    areaOfInterest: 'Education',
    district: 'Patna',
    message: '',
  });

  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
    setTimeout(() => {
      setVolunteerSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        areaOfInterest: 'Education',
        district: 'Patna',
        message: '',
      });
    }, 4500);
  };

  const handleDonateSubmit = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedPreset;
    onOpenDonate(amount);
  };

  return (
    <div className="w-full bg-amber-50/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* 1. Hero Banner with Overlay */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg bg-stone-950 text-white border border-amber-300/40">
          <div className="relative h-[320px] sm:h-[400px] w-full">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80"
              alt="Gaon Samaj Initiatives"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-10 z-10 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3 drop-shadow-md">
              {t('getInvolvedTitle')}: <br />
              <span className="text-amber-400">
                {isHindi ? 'बदलाव के भागीदार बनें' : 'Transform Lives in Bihar'}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-stone-200 max-w-2xl font-normal leading-relaxed">
              {t('getInvolvedSub')}
            </p>
          </div>
        </div>

        {/* 2. Main Split View Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Donate Section */}
          <div className="bg-amber-100/50 rounded-2xl p-6 sm:p-8 border border-amber-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-black text-stone-900 mb-6 text-center">
                {isHindi ? 'बिहार के भविष्य हेतु योगदान करें' : "Donate for Bihar's Future"}
              </h2>

              {/* One-Time / Monthly Toggle */}
              <div className="bg-white p-1 rounded-xl shadow-inner border border-amber-300 flex mb-6">
                <button
                  onClick={() => setDonationType('one-time')}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    donationType === 'one-time'
                      ? 'bg-amber-400 text-amber-950 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {t('oneTimeContribution')}
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    donationType === 'monthly'
                      ? 'bg-amber-400 text-amber-950 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {t('monthlySupporter')}
                </button>
              </div>

              {/* Preset Amounts (₹500, ₹1500, ₹5000) */}
              <div className="space-y-3 mb-6">
                <div
                  onClick={() => {
                    setSelectedPreset(500);
                    setCustomAmount('');
                  }}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex justify-between items-center ${
                    selectedPreset === 500 && !customAmount
                      ? 'bg-amber-50 border-amber-500 shadow-xs'
                      : 'bg-white border-amber-200 hover:border-amber-300'
                  }`}
                >
                  <div>
                    <span className="text-xl font-black text-stone-900">₹500</span>
                    <p className="text-xs text-stone-600 font-medium mt-0.5">{t('childSupplies')}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPreset === 500 && !customAmount ? 'border-amber-500 bg-amber-400' : 'border-stone-300'
                  }`}>
                    {selectedPreset === 500 && !customAmount && <div className="w-2 h-2 rounded-full bg-amber-950"></div>}
                  </div>
                </div>

                <div
                  onClick={() => {
                    setSelectedPreset(1500);
                    setCustomAmount('');
                  }}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex justify-between items-center ${
                    selectedPreset === 1500 && !customAmount
                      ? 'bg-amber-50 border-amber-500 shadow-xs'
                      : 'bg-white border-amber-200 hover:border-amber-300'
                  }`}
                >
                  <div>
                    <span className="text-xl font-black text-stone-900">₹1500</span>
                    <p className="text-xs text-stone-600 font-medium mt-0.5">{t('familyHealth')}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPreset === 1500 && !customAmount ? 'border-amber-500 bg-amber-400' : 'border-stone-300'
                  }`}>
                    {selectedPreset === 1500 && !customAmount && <div className="w-2 h-2 rounded-full bg-amber-950"></div>}
                  </div>
                </div>

                <div
                  onClick={() => {
                    setSelectedPreset(5000);
                    setCustomAmount('');
                  }}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex justify-between items-center ${
                    selectedPreset === 5000 && !customAmount
                      ? 'bg-amber-50 border-amber-500 shadow-xs'
                      : 'bg-white border-amber-200 hover:border-amber-300'
                  }`}
                >
                  <div>
                    <span className="text-xl font-black text-stone-900">₹5000</span>
                    <p className="text-xs text-stone-600 font-medium mt-0.5">{t('cleanWater')}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPreset === 5000 && !customAmount ? 'border-amber-500 bg-amber-400' : 'border-stone-300'
                  }`}>
                    {selectedPreset === 5000 && !customAmount && <div className="w-2 h-2 rounded-full bg-amber-950"></div>}
                  </div>
                </div>
              </div>

              {/* Custom Amount Input */}
              <div className="bg-white p-3 rounded-xl border border-amber-300 mb-6">
                <label className="block text-xs font-bold text-stone-700 mb-1">{t('customAmount')}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 font-bold">₹</span>
                  <input
                    type="number"
                    placeholder="E.g. 2500"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedPreset(0);
                    }}
                    className="w-full pl-8 pr-3 py-2 border border-stone-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Primary Donate CTA Button */}
              <button
                onClick={handleDonateSubmit}
                className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold py-4 rounded-xl shadow-md transition-all text-base border border-amber-500/50 flex items-center justify-center gap-2 mb-8"
              >
                <Heart className="w-5 h-5 fill-amber-950" />
                {t('donateNow')}
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="bg-amber-200/40 rounded-xl p-4 border border-amber-300/60 grid grid-cols-3 gap-2 text-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center mb-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-stone-900">80G Tax Exempt</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center mb-1">
                  <Star className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-stone-900">Registered NGO</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center mb-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-stone-900">Secure Payment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Become a Volunteer */}
          <div className="space-y-8">

            <div className="bg-amber-100/50 rounded-2xl p-6 sm:p-8 border border-amber-200 shadow-sm">
              <h2 className="text-2xl font-black text-stone-900 mb-6 text-center">
                {t('volunteerHeading')}
              </h2>

              {volunteerSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-950 p-6 rounded-xl text-center animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">{t('thankYouVolunteer')}</h3>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">{t('fullName')} *</label>
                    <input
                      type="text"
                      required
                      placeholder={t('fullName')}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">{t('emailAddress')} *</label>
                    <input
                      type="email"
                      required
                      placeholder={t('emailAddress')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">{t('phoneMobile')} *</label>
                    <input
                      type="tel"
                      required
                      placeholder={t('phoneMobile')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">{t('interestArea')}</label>
                    <select
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    >
                      <option value="Education">{isHindi ? 'शिक्षा एवं डिजिटल क्लास' : 'Education & Digital Classrooms'}</option>
                      <option value="Health">{isHindi ? 'स्वास्थ्य सेवा एवं मेडिकल कैंप' : 'Healthcare & Medical Camps'}</option>
                      <option value="Skill Development">{isHindi ? 'कौशल विकास व मधुबनी कला' : 'Skill Development & Madhubani Art'}</option>
                      <option value="Women Rights">{isHindi ? 'महिला सशक्तिकरण व स्वयं सहायता समूह' : 'Women Empowerment & Self-Help Groups'}</option>
                      <option value="Environment">{isHindi ? 'पर्यावरण व वृक्षारोपण' : 'Afforestation & Eco-Restoration'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">{t('message')}</label>
                    <textarea
                      rows={3}
                      placeholder={t('message')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold py-3.5 rounded-xl shadow-md transition-all text-sm border border-amber-500/50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {t('submitApplication')}
                  </button>
                </form>
              )}
            </div>

            {/* Corporate Partnerships Box */}
            <div className="bg-amber-100/50 rounded-2xl p-6 sm:p-8 border border-amber-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-amber-200 mx-auto flex items-center justify-center text-amber-900 mb-3 border border-amber-300">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-stone-900 mb-2">
                {isHindi ? 'कॉर्पोरेट सीएसआर साझेदारी' : 'Corporate Partnerships'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-medium mb-5 max-w-md mx-auto">
                {isHindi
                  ? 'बिहार के समग्र विकास हेतु सीएसआर पहल, परियोजना सह-वित्तीय पोषण और कर्मचारी स्वयंसेवक अभियानों में सहभागी बनें।'
                  : 'Join like-minded organizations and community leaders to collaborate on CSR initiatives, co-funding, and employee volunteer drives for Bihar’s development.'}
              </p>

              {partnerSubmitted ? (
                <div className="bg-amber-200/80 text-amber-950 text-xs font-bold py-2.5 rounded-lg animate-fadeIn">
                  ✓ {isHindi ? 'प्रस्ताव प्राप्त हुआ! हमारी सीएसआर टीम जल्द संपर्क करेगी।' : 'Partner request received. Our CSR desk will get back to you!'}
                </div>
              ) : (
                <button
                  onClick={() => {
                    setPartnerSubmitted(true);
                    setTimeout(() => setPartnerSubmitted(false), 4000);
                  }}
                  className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold px-8 py-3 rounded-xl shadow-xs border border-amber-500/50 text-sm transition-all"
                >
                  {isHindi ? 'हमारे साथ साझीदार बनें' : 'Partner with Us'}
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
