import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { companyData } from '../../constants/company';

interface StructuredDataProps {
  data: object;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          ...data,
        })}
      </script>
    </Helmet>
  );
};

export const SitewideSchemas: React.FC = () => {
  const organizationSchema = {
    '@type': 'Organization',
    'name': companyData.name,
    'url': 'https://ideographers.com',
    'logo': 'https://ideographers.com/favicon.svg',
    'description': companyData.shortDescription,
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': companyData.contact.phone,
      'contactType': 'customer service',
      'email': companyData.contact.email,
    },
  };

  const localBusinessSchema = {
    '@type': 'LocalBusiness',
    'name': companyData.name,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': companyData.contact.address,
    },
    'telephone': companyData.contact.phone,
    'openingHours': companyData.contact.businessHours,
  };

  const websiteSchema = {
    '@type': 'WebSite',
    'name': companyData.name,
    'url': 'https://ideographers.com',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://ideographers.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={websiteSchema} />
    </>
  );
};

export const BreadcrumbSchema: React.FC<{ items: { name: string; path: string }[] }> = ({ items }) => {
  void items;
  return null;
  /* Legacy per-page calls are retained while route-level metadata emits one canonical breadcrumb schema. */
  /*
  const { pathname } = useLocation();
  const currentItem = items[items.length - 1];
  const synchronizedItems = [
    { name: 'Home', path: '/' },
    ...(pathname === '/' ? [] : [{ name: currentItem.name, path: pathname }]),
  ];
  const schema = {
    '@type': 'BreadcrumbList',
    'itemListElement': synchronizedItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://ideographers.com${item.path}`,
    })),
  };
  return <StructuredData data={schema} />;
  */
};

export const ServiceSchema: React.FC<{ name: string; description: string }> = ({ name, description }) => {
  void name;
  void description;
  return null;
  /* Legacy per-page calls are retained while route-level metadata emits one canonical service schema. */
  /*
  const { pathname } = useLocation();
  const schema = {
    '@type': 'Service',
    'name': name,
    'description': description,
    'url': `https://ideographers.com${pathname}`,
    'provider': {
      '@type': 'Organization',
      'name': companyData.name,
    },
  };
  return <StructuredData data={schema} />;
  */
};

const routeLabel = (pathname: string) => pathname === '/'
  ? 'Home'
  : pathname.split('/').filter(Boolean).at(-1)!.split('-').map((part) => {
    if (part === 'ai') return 'AI';
    if (part === 'ml') return 'ML';
    if (part === 'iot') return 'IoT';
    if (/^\d/.test(part)) return part.toUpperCase();
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join(' ');

/** Emits one route-synchronized schema set for every rendered public route. */
export const RouteStructuredData: React.FC = () => {
  const { pathname } = useLocation();
  const name = routeLabel(pathname);
  const url = `https://ideographers.com${pathname}`;
  const isServiceRoute = pathname === '/services' || pathname.startsWith('/services/');
  const breadcrumbItems = pathname.split('/').filter(Boolean).map((segment, index, segments) => ({
    '@type': 'ListItem',
    position: index + 2,
    name: routeLabel(`/${segment}`),
    item: `https://ideographers.com/${segments.slice(0, index + 1).join('/')}`,
  }));

  return (
    <>
      <StructuredData data={{ '@type': 'WebPage', name, url }} />
      {isServiceRoute && <StructuredData data={{
        '@type': 'BreadcrumbList',
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ideographers.com/' }, ...breadcrumbItems],
      }} />}
      {isServiceRoute && <StructuredData data={{
        '@type': 'Service',
        name,
        description: `Learn about ${name} services from ${companyData.name}.`,
        url,
        provider: { '@type': 'Organization', name: companyData.name },
      }} />}
    </>
  );
};
