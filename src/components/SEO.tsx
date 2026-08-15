import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: string;
  imageUrl?: string;
}

export const SEO = ({ title, description, canonicalUrl, type = 'website', imageUrl = 'https://gaonsamaj.com/hero-viksit-bihar.jpg' }: SEOProps) => {
  const { isHindi } = useLanguage();
  const siteName = isHindi ? 'गांव समाज' : 'Gaon Samaj';
  const fullTitle = `${title} | ${siteName} - Bihar Social Initiative`;
  const url = canonicalUrl ? `https://gaonsamaj.com${canonicalUrl}` : 'https://gaonsamaj.com';

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="hi" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
    </Helmet>
  );
};
