import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical: _canonical,
  keywords,
  ogTitle,
  ogDescription,
  ogType = 'website',
}) => {
  const { pathname } = useLocation();
  const siteName = 'Ideographers';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords.join(', ')} />}
        <link rel="canonical" href={pathname} />
        
        <meta property="og:title" content={ogTitle || fullTitle} />
        <meta property="og:description" content={ogDescription || description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content={siteName} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle || fullTitle} />
        <meta name="twitter:description" content={ogDescription || description} />
      </Helmet>
    </HelmetProvider>
  );
};
