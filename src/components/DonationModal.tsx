import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Heart, QrCode, CreditCard, Landmark, CheckCircle2, Download, ShieldCheck, FileText } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, initialAmount = 1500 }) => {
  const [step, setStep] = useState<'amount' | 'details' | 'payment' | 'receipt'>('amount');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(initialAmount || 1500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const { t, isHindi } = useLanguage();

  // Donor Details
  const [donor, setDonor] = useState({
    name: '',
    email: '',
    phone: '',
    panNumber: '',
    address: 'Patna, Bihar',
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [transactionId, setTransactionId] = useState<string>('');

  if (!isOpen) return null;

  const currentFinalAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donor.name || !donor.email || !donor.phone) {
      alert(isHindi ? 'कृपया अपना नाम, ईमेल और फोन नंबर दर्ज करें।' : 'Please fill in your name, email and phone number.');
      return;
    }
    setStep('payment');
  };

  const handleCompletePayment = () => {
    const txId = 'GSI-' + Math.floor(100000 + Math.random() * 900000);
    setTransactionId(txId);
    setStep('receipt');
  };

  const handleReset = () => {
    setStep('amount');
    setSelectedAmount(1500);
    setCustomAmount('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-amber-300 relative my-8">
        
        {/* Header Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-800 p-2 rounded-full hover:bg-stone-100 font-bold"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-amber-100 border border-amber-300 rounded-full flex items-center justify-center mx-auto mb-2 text-amber-900">
            <Heart className="w-6 h-6 fill-amber-500 text-amber-900" />
          </div>
          <h2 className="text-2xl font-black text-stone-900">
            {isHindi ? 'गाँव समाज (बिहार सोशल इनिशिएटिव) हेतु दान करें' : 'Support Gaon Samaj / Bihar Social Initiative'}
          </h2>
          <p className="text-xs text-stone-600 mt-1 font-medium">
            {isHindi ? 'आयकर अधिनियम की धारा 80G के तहत 100% कर छूट प्राप्त' : '100% Tax Exempted under Section 80G of Income Tax Act'}
          </p>
        </div>

        {/* STEP 1: AMOUNT SELECTION */}
        {step === 'amount' && (
          <div className="space-y-6">
            {/* Type Toggle */}
            <div className="bg-amber-100/60 p-1 rounded-xl border border-amber-300 flex">
              <button
                onClick={() => setDonationType('one-time')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                  donationType === 'one-time' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-stone-700'
                }`}
              >
                {t('oneTimeContribution')}
              </button>
              <button
                onClick={() => setDonationType('monthly')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                  donationType === 'monthly' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-stone-700'
                }`}
              >
                {t('monthlySupporter')}
              </button>
            </div>

            {/* Presets */}
            <div className="grid grid-cols-3 gap-3">
              {[500, 1500, 5000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount('');
                  }}
                  className={`p-3 rounded-xl border-2 text-center transition-all ${
                    selectedAmount === amt && !customAmount
                      ? 'bg-amber-400/20 border-amber-500 font-extrabold text-stone-900 shadow-xs'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-amber-300'
                  }`}
                >
                  <span className="text-lg font-black block">₹{amt}</span>
                  <span className="text-[10px] text-stone-500 font-medium">
                    {amt === 500
                      ? t('childSupplies')
                      : amt === 1500
                      ? t('familyHealth')
                      : t('cleanWater')}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">{t('customAmount')} (₹)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 font-bold">₹</span>
                <input
                  type="number"
                  placeholder="E.g. 2500"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(0);
                  }}
                  className="w-full pl-8 pr-3 py-2.5 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={() => {
                if (currentFinalAmount <= 0) {
                  alert(isHindi ? 'कृपया एक वैध दान राशि चुनें।' : 'Please select or enter a valid donation amount.');
                  return;
                }
                setStep('details');
              }}
              className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-black py-3.5 rounded-xl shadow-xs transition-colors text-sm"
            >
              {isHindi ? `₹${currentFinalAmount} दान जारी रखें` : `Continue with ₹${currentFinalAmount}`} &rarr;
            </button>
          </div>
        )}

        {/* STEP 2: DONOR DETAILS */}
        {step === 'details' && (
          <form onSubmit={handleNextToPayment} className="space-y-4">
            <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs flex justify-between items-center">
              <span>{isHindi ? 'दान राशि' : 'Amount'}: <strong className="text-stone-900 font-bold">₹{currentFinalAmount} ({donationType})</strong></span>
              <button type="button" onClick={() => setStep('amount')} className="text-amber-800 font-bold hover:underline">
                {isHindi ? 'बदलें' : 'Change'}
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">{t('fullName')} *</label>
              <input
                type="text"
                required
                value={donor.name}
                onChange={(e) => setDonor({ ...donor, name: e.target.value })}
                placeholder={t('fullName')}
                className="w-full px-3.5 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">{t('emailAddress')} *</label>
                <input
                  type="email"
                  required
                  value={donor.email}
                  onChange={(e) => setDonor({ ...donor, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full px-3.5 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">{t('phoneMobile')} *</label>
                <input
                  type="tel"
                  required
                  value={donor.phone}
                  onChange={(e) => setDonor({ ...donor, phone: e.target.value })}
                  placeholder="+91 Mobile"
                  className="w-full px-3.5 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">{isHindi ? 'पैन नंबर (80G रसीद हेतु)' : 'PAN Number (Optional for 80G Receipt)'}</label>
              <input
                type="text"
                value={donor.panNumber}
                onChange={(e) => setDonor({ ...donor, panNumber: e.target.value.toUpperCase() })}
                placeholder="ABCDE1234F"
                maxLength={10}
                className="w-full px-3.5 py-2 border border-stone-300 rounded-lg text-sm uppercase focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
              <p className="text-[10px] text-stone-500 mt-1">{isHindi ? 'धारा 80G के तहत 50% आयकर छूट का दावा करने के लिए आवश्यक।' : 'Required if claiming 50% tax deduction under Sec 80G in India.'}</p>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => setStep('amount')}
                className="bg-stone-100 text-stone-700 font-bold px-4 py-3 rounded-xl text-xs"
              >
                {isHindi ? 'पीछे' : 'Back'}
              </button>
              <button
                type="submit"
                className="flex-1 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black py-3 rounded-xl shadow-xs transition-colors text-sm"
              >
                {isHindi ? 'भुगतान हेतु आगे बढ़ें' : 'Proceed to Payment'}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: PAYMENT METHOD SIMULATION */}
        {step === 'payment' && (
          <div className="space-y-6">
            <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs flex justify-between items-center">
              <div>
                <span className="block font-bold text-stone-900">{donor.name}</span>
                <span className="text-stone-500">{donor.email}</span>
              </div>
              <span className="text-base font-black text-stone-900">₹{currentFinalAmount}</span>
            </div>

            {/* Payment Method Tabs */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setPaymentMethod('upi')}
                className={`p-3 rounded-xl border text-center text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                  paymentMethod === 'upi' ? 'bg-amber-400/20 border-amber-500 text-amber-950' : 'bg-white border-stone-200 text-stone-600'
                }`}
              >
                <QrCode className="w-5 h-5 text-amber-800" />
                <span>UPI / QR</span>
              </button>
              <button
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-xl border text-center text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                  paymentMethod === 'card' ? 'bg-amber-400/20 border-amber-500 text-amber-950' : 'bg-white border-stone-200 text-stone-600'
                }`}
              >
                <CreditCard className="w-5 h-5 text-amber-800" />
                <span>{isHindi ? 'कार्ड' : 'Card'}</span>
              </button>
              <button
                onClick={() => setPaymentMethod('netbanking')}
                className={`p-3 rounded-xl border text-center text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                  paymentMethod === 'netbanking' ? 'bg-amber-400/20 border-amber-500 text-amber-950' : 'bg-white border-stone-200 text-stone-600'
                }`}
              >
                <Landmark className="w-5 h-5 text-amber-800" />
                <span>{isHindi ? 'नेटबैंकिंग' : 'NetBanking'}</span>
              </button>
            </div>

            {paymentMethod === 'upi' && (
              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200 text-center space-y-3">
                <p className="text-xs font-bold text-stone-700">{isHindi ? 'गूगल पे, फोनपे, पेटीएम या भीम ऐप से स्कैन करें' : 'Scan QR Code via GPay, PhonePe, Paytm, or BHIM'}</p>
                <div className="w-36 h-36 bg-white p-2 border-2 border-amber-400 rounded-xl mx-auto flex items-center justify-center shadow-inner">
                  {/* Simulated QR Code SVG */}
                  <svg className="w-full h-full text-stone-900" viewBox="0 0 100 100" fill="currentColor">
                    <rect x="10" y="10" width="25" height="25" rx="3" />
                    <rect x="15" y="15" width="15" height="15" fill="white" />
                    <rect x="18" y="18" width="9" height="9" />
                    
                    <rect x="65" y="10" width="25" height="25" rx="3" />
                    <rect x="70" y="15" width="15" height="15" fill="white" />
                    <rect x="73" y="18" width="9" height="9" />
                    
                    <rect x="10" y="65" width="25" height="25" rx="3" />
                    <rect x="15" y="70" width="15" height="15" fill="white" />
                    <rect x="18" y="73" width="9" height="9" />
                    
                    <rect x="40" y="10" width="15" height="15" />
                    <rect x="40" y="30" width="15" height="15" />
                    <rect x="40" y="55" width="20" height="10" />
                    <rect x="65" y="40" width="25" height="25" />
                    <rect x="70" y="45" width="15" height="15" fill="white" />
                  </svg>
                </div>
                <p className="text-[11px] font-mono text-amber-900 font-bold">UPI ID: donate.gaonsamaj@upi</p>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="space-y-3 bg-stone-50 p-4 rounded-xl border border-stone-200">
                <input
                  type="text"
                  placeholder="Card Number (4532 .... .... ....)"
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="MM/YY" className="px-3 py-2 border border-stone-300 rounded-lg text-xs" />
                  <input type="password" placeholder="CVV" maxLength={4} className="px-3 py-2 border border-stone-300 rounded-lg text-xs" />
                </div>
              </div>
            )}

            {paymentMethod === 'netbanking' && (
              <div className="grid grid-cols-2 gap-2">
                {['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank'].map((b) => (
                  <button key={b} className="p-2.5 border border-stone-300 rounded-lg text-xs font-bold text-stone-700 hover:border-amber-400">
                    {b}
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={handleCompletePayment}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-3.5 rounded-xl shadow-sm transition-colors text-sm flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5" />
              {isHindi ? `भुगतान पूरा करें (₹${currentFinalAmount})` : `Complete Contribution (₹${currentFinalAmount})`}
            </button>
          </div>
        )}

        {/* STEP 4: RECEIPT & 80G TAX CERTIFICATE */}
        {step === 'receipt' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
              <h3 className="text-xl font-black text-emerald-950">{isHindi ? 'सहयोग हेतु हार्दिक धन्यवाद!' : 'Thank You for Your Support!'}</h3>
              <p className="text-xs text-emerald-800 mt-1">
                {isHindi ? `आपका ₹${currentFinalAmount} का योगदान सफल रहा। ट्रांजेक्शन आईडी: ` : `Your payment of ₹${currentFinalAmount} was successful. Transaction ID: `}
                <strong>{transactionId}</strong>
              </p>
            </div>

            {/* Simulated 80G Certificate Receipt Card */}
            <div className="bg-amber-50 p-5 rounded-2xl border-2 border-amber-300 text-xs text-stone-800 space-y-3 font-sans">
              <div className="flex justify-between items-center border-b border-amber-300 pb-2">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-amber-800" />
                  <span className="font-bold text-stone-900">{isHindi ? '80G आयकर छूट आधिकारिक रसीद' : '80G Official Tax Exemption Receipt'}</span>
                </div>
                <span className="bg-amber-200 text-amber-950 font-bold text-[10px] px-2 py-0.5 rounded">
                  Reg No: AAATB1234F
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div><span className="text-stone-500">{isHindi ? 'दाता का नाम:' : 'Donor Name:'}</span> <strong className="block text-stone-900">{donor.name || 'Anonymous'}</strong></div>
                <div><span className="text-stone-500">{isHindi ? 'तिथि:' : 'Date:'}</span> <strong className="block text-stone-900">{new Date().toLocaleDateString('en-IN')}</strong></div>
                <div><span className="text-stone-500">{isHindi ? 'पैन नंबर:' : 'PAN Number:'}</span> <strong className="block text-stone-900">{donor.panNumber || 'N/A'}</strong></div>
                <div><span className="text-stone-500">{isHindi ? 'राशि:' : 'Amount:'}</span> <strong className="block text-stone-900">₹{currentFinalAmount} INR</strong></div>
              </div>

              <div className="pt-2 border-t border-amber-300 text-[10px] text-stone-600">
                Issued by Gaon Samaj (Bihar Social Initiative), Boring Road, Patna, Bihar. Eligible for 50% deduction under Sec 80G.
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => alert(`Downloading 80G Receipt PDF for ${transactionId}...`)}
                className="flex-1 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold py-3 rounded-xl shadow-xs transition-colors text-xs flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" /> {isHindi ? '80G रसीद डाउनलोड करें' : 'Download 80G Receipt'}
              </button>
              <button
                onClick={handleReset}
                className="bg-stone-900 hover:bg-stone-950 text-white font-bold px-6 py-3 rounded-xl text-xs"
              >
                {t('close')}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
