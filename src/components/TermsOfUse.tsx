import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText } from 'lucide-react';
import { SEO } from './SEO';

export const TermsOfUse: React.FC = () => {
  const { isHindi } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title={isHindi ? 'नियम व शर्तें' : 'Terms of Use'} 
        description={isHindi ? 'गांव समाज के उपयोग की शर्तें।' : 'Gaon Samaj Foundation Terms of Use.'}
        canonicalUrl="/terms-of-use"
      />
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200">
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-200">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            {isHindi ? 'नियम व शर्तें' : 'Terms of Use'}
          </h1>
          <p className="text-stone-500 mt-2 font-medium">
            {isHindi ? 'अंतिम अपडेट: 15 अगस्त, 2026' : 'Last Updated: August 15, 2026'}
          </p>
        </div>

        <div className="prose prose-amber max-w-none prose-headings:font-bold prose-headings:text-stone-900 prose-p:text-stone-700 prose-p:leading-relaxed">
          {isHindi ? (
            <>
              <h3>1. स्वीकृति</h3>
              <p>
                gaonsamaj.com ("वेबसाइट") का उपयोग करके, आप इन नियमों और शर्तों से बंधे होने के लिए सहमत हैं। यदि आप सहमत नहीं हैं, तो कृपया वेबसाइट का उपयोग न करें।
              </p>
              <h3>2. दान और धनवापसी नीति</h3>
              <p>
                गांव समाज फाउंडेशन को दिए गए सभी दान स्वैच्छिक हैं। एक बार दान सफलतापूर्वक संसाधित हो जाने के बाद, इसे वापस नहीं किया जाएगा। 80G कर छूट रसीदें केवल तभी जारी की जाएंगी जब दानकर्ता आवश्यक पैन कार्ड विवरण प्रदान करेंगे।
              </p>
            </>
          ) : (
            <>
              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing and using gaonsamaj.com ("the Website"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              
              <h3>2. Intellectual Property</h3>
              <p>
                All content published and made available on our Website is the property of Gaon Samaj Foundation. This includes, but is not limited to images, text, logos, documents, and downloadable files.
              </p>

              <h3>3. Donations and Refund Policy</h3>
              <p>
                All donations made to Gaon Samaj Foundation are voluntary and non-refundable. Once a donation is successfully processed, it cannot be refunded or cancelled. 80G tax exemption receipts will only be issued if the donor provides the required PAN card details during the transaction.
              </p>

              <h3>4. Limitation of Liability</h3>
              <p>
                Gaon Samaj Foundation and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses including legal fees from your use of the site.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
