import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { GetInvolvedScreen } from './GetInvolvedScreen';
import { ScreenTab } from '../types';
import { SEO } from './SEO';
import { FlipText } from './FlipText';

interface ContactScreenProps {
  onOpenDonate: (customAmount?: number) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onOpenDonate }) => {
  const [activeMainTab, setActiveMainTab] = useState<'contact' | 'involved'>('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const { t, isHindi } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full bg-amber-50/20">
      <SEO 
        title={isHindi ? 'संपर्क करें' : 'Contact Us'}
        description="Get in touch with Gaon Samaj. We would love to hear from you."
        canonicalUrl="/contact"
      />
      {/* Sub-navigation Tabs */}
      <div className="w-full border-b border-amber-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-center py-4">
          <div className="bg-amber-100/50 p-1 rounded-xl flex gap-1 border border-amber-200">
            <button
              onClick={() => setActiveMainTab('contact')}
              className={`px-6 py-2 rounded-lg text-sm font-black transition-all ${
                activeMainTab === 'contact' ? 'bg-amber-400 text-amber-950 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {isHindi ? 'संपर्क करें' : 'Contact Us'}
            </button>
            <button
              onClick={() => setActiveMainTab('involved')}
              className={`px-6 py-2 rounded-lg text-sm font-black transition-all ${
                activeMainTab === 'involved' ? 'bg-amber-400 text-amber-950 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {isHindi ? 'सहयोग करें' : 'Get Involved'}
            </button>
          </div>
        </div>
      </div>

      {activeMainTab === 'involved' ? (
        <GetInvolvedScreen onOpenDonate={onOpenDonate} />
      ) : (
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight mb-2">
            <FlipText>{t('contactUs')}</FlipText>
          </h1>
          <p className="text-sm text-stone-600 font-medium">
            {isHindi
              ? 'क्या आपके पास हमारी पहल के बारे में प्रश्न हैं या सहयोग करना चाहते हैं? पटना टीम से संपर्क करें।'
              : 'Have questions about our initiatives or want to collaborate? Get in touch with our team in Patna.'}
          </p>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Contact Details Card */}
          <div className="bg-white rounded-2xl p-8 border border-amber-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-black text-stone-900 border-b border-amber-200 pb-3">
              <FlipText>{isHindi ? 'मुख्यालय व संपर्क केंद्र' : 'Headquarters & Offices'}</FlipText>
            </h2>

            <div className="space-y-5 text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 border border-amber-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">{isHindi ? 'मुख्य पंजीकृत कार्यालय' : 'Main Registered Office'}</h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed font-normal">
                    {t('patnaOffice')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 border border-amber-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">{isHindi ? 'फोन व हेल्पलाइन' : 'Phone & Helpline'}</h3>
                  <p className="text-xs text-stone-600 mt-1 font-normal">
                    +91-81232 2031 / +91-81720 0200<br />
                    Toll Free: 1800-345-2026 (Mon-Sat, 9AM - 6PM)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 border border-amber-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">{isHindi ? 'ईमेल पता' : 'Email Addresses'}</h3>
                  <p className="text-xs text-stone-600 mt-1 font-normal">
                    contact@gaonsamaj.com / contact@biharsocial.org<br />
                    donor.relations@gaonsamaj.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 border border-amber-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">{isHindi ? 'कार्यालय समय' : 'Office Hours'}</h3>
                  <p className="text-xs text-stone-600 mt-1 font-normal">
                    {isHindi ? 'सोमवार से शनिवार: सुबह 9:00 - शाम 6:30' : 'Monday to Saturday: 9:00 AM – 6:30 PM (IST)'}<br />
                    {isHindi ? 'रविवार: अवकाश (क्षेत्रीय टीम सक्रिय)' : 'Sunday: Closed (Field teams active)'}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Visual Preview Box */}
            <div className="relative rounded-xl overflow-hidden border border-amber-300 h-48 bg-amber-100 flex items-center justify-center text-center p-4">
              <div className="absolute inset-0 bg-cover bg-center filter opacity-40" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')` }}></div>
              <div className="relative z-10 bg-white/90 backdrop-blur-xs p-4 rounded-xl border border-amber-400 shadow-sm">
                <MapPin className="w-6 h-6 text-amber-700 mx-auto mb-1" />
                <p className="font-bold text-xs text-stone-900">{isHindi ? 'पटना मुख्यालय मानचित्र' : 'Patna Headquarters Map'}</p>
                <p className="text-[10px] text-stone-600">Boring Road, Patna, Bihar 800001</p>
              </div>
            </div>

          </div>

          {/* Contact Inquiry Form */}
          <div className="bg-white rounded-2xl p-8 border border-amber-200 shadow-sm">
            <h2 className="text-2xl font-black text-stone-900 mb-6 border-b border-amber-200 pb-3">
              <FlipText>{isHindi ? 'संदेश भेजें' : 'Send a Message'}</FlipText>
            </h2>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-950 p-6 rounded-xl text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-bold text-lg">{isHindi ? 'संदेश सफलतापूर्वक भेजा गया!' : 'Message Sent Successfully!'}</h3>
                <p className="text-xs text-emerald-800 mt-1">
                  {isHindi ? 'संपर्क करने के लिए धन्यवाद। पटना कार्यालय से हमारी टीम जल्द आपसे संपर्क करेगी।' : 'Thank you for reaching out. A representative from our Patna office will respond shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">{t('fullName')}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('fullName')}
                    className="w-full px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">{t('emailAddress')}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">{t('phoneMobile')}</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 Mobile"
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">{isHindi ? 'विषय' : 'Subject'}</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={isHindi ? 'जैसे: स्वयंसेवक पूछताछ, सीएसआर सहयोग' : 'E.g. Volunteer Query, CSR Partnership'}
                    className="w-full px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">{t('message')}</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('message')}
                    className="w-full px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-black py-3.5 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 text-sm border border-amber-500/50"
                >
                  <Send className="w-4 h-4" />
                  {isHindi ? 'संदेश जमा करें' : 'Submit Message'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
      )}
    </div>
  );
};
