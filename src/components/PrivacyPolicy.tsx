import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { SEO } from './SEO';

export const PrivacyPolicy: React.FC = () => {
  const { isHindi } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title={isHindi ? 'गोपनीयता नीति' : 'Privacy Policy'} 
        description={isHindi ? 'गांव समाज की गोपनीयता नीति और डेटा सुरक्षा दिशानिर्देश।' : 'Gaon Samaj Foundation Privacy Policy and data protection guidelines.'}
        canonicalUrl="/privacy-policy"
      />
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200">
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-200">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            {isHindi ? 'गोपनीयता नीति' : 'Privacy Policy'}
          </h1>
          <p className="text-stone-500 mt-2 font-medium">
            {isHindi ? 'अंतिम अपडेट: 15 अगस्त, 2026' : 'Last Updated: August 15, 2026'}
          </p>
        </div>

        <div className="prose prose-amber max-w-none prose-headings:font-bold prose-headings:text-stone-900 prose-p:text-stone-700 prose-p:leading-relaxed">
          {isHindi ? (
            <>
              <h3>1. प्रस्तावना</h3>
              <p>
                गांव समाज फाउंडेशन ("हम", "हमारा", "हमें") आपकी गोपनीयता का सम्मान करता है। यह नीति बताती है कि हम आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और सुरक्षित करते हैं।
              </p>

              <h3>2. हम क्या जानकारी एकत्र करते हैं</h3>
              <ul>
                <li><strong>व्यक्तिगत जानकारी:</strong> नाम, ईमेल पता, फोन नंबर (स्वयंसेवक या दानकर्ता पंजीकरण के समय)।</li>
                <li><strong>वित्तीय जानकारी:</strong> दान प्रक्रिया के लिए (सभी लेनदेन सुरक्षित तीसरे पक्ष के भुगतान गेटवे द्वारा संसाधित किए जाते हैं। हम कार्ड की जानकारी संग्रहीत नहीं करते हैं)।</li>
                <li><strong>तकनीकी जानकारी:</strong> वेबसाइट उपयोग डेटा और कुकीज़ के माध्यम से प्राप्त जानकारी।</li>
              </ul>

              <h3>3. हम आपकी जानकारी का उपयोग कैसे करते हैं</h3>
              <p>हम इस जानकारी का उपयोग केवल निम्नलिखित के लिए करते हैं:</p>
              <ul>
                <li>दान रसीदें (80G) और कर लाभ दस्तावेज़ जारी करने के लिए।</li>
                <li>हमारी परियोजनाओं और पहलों के बारे में अपडेट भेजने के लिए।</li>
                <li>स्वयंसेवक आवेदनों का प्रबंधन करने के लिए।</li>
              </ul>

              <h3>4. डेटा सुरक्षा</h3>
              <p>
                हम आपकी जानकारी की सुरक्षा के लिए उद्योग-मानक एन्क्रिप्शन और सुरक्षा उपायों का उपयोग करते हैं। हम कभी भी आपकी व्यक्तिगत जानकारी को विपणन उद्देश्यों के लिए तीसरे पक्ष को नहीं बेचते या किराए पर नहीं देते हैं।
              </p>

              <h3>5. संपर्क करें</h3>
              <p>
                गोपनीयता नीति के बारे में किसी भी प्रश्न के लिए, कृपया हमसे contact@gaonsamaj.com पर संपर्क करें।
              </p>
            </>
          ) : (
            <>
              <h3>1. Introduction</h3>
              <p>
                Gaon Samaj Foundation ("we", "our", "us") respects your privacy. This policy explains how we collect, use, and protect your personal information when you use our website or interact with our services.
              </p>

              <h3>2. Information We Collect</h3>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number (collected during volunteer registration, contact inquiries, or donations).</li>
                <li><strong>Financial Information:</strong> For processing donations (all transactions are securely processed by third-party payment gateways. We DO NOT store credit/debit card information).</li>
                <li><strong>Technical Data:</strong> Standard website analytics and usage data via cookies to improve user experience.</li>
              </ul>

              <h3>3. How We Use Your Information</h3>
              <p>We use this information exclusively for the following purposes:</p>
              <ul>
                <li>To process donations and issue 80G tax exemption receipts.</li>
                <li>To send updates about our initiatives, projects, and impact.</li>
                <li>To manage and coordinate volunteer applications.</li>
                <li>To comply with legal and regulatory obligations in India.</li>
              </ul>

              <h3>4. Data Security</h3>
              <p>
                We implement industry-standard encryption and security measures to protect your data. <strong>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</strong>
              </p>

              <h3>5. Analytics and Cookies</h3>
              <p>
                We use essential cookies to ensure the website functions correctly and anonymous analytics to understand how visitors interact with our content. You can configure your browser to decline non-essential cookies.
              </p>

              <h3>6. Contact Us</h3>
              <p>
                If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact our Data Protection Officer at:
                <br /><br />
                <strong>Email:</strong> privacy@gaonsamaj.com<br />
                <strong>Address:</strong> Gaon Samaj Foundation, Boring Road, Patna, Bihar - 800001
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
