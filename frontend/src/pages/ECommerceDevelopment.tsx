import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';

const ECommerceDevelopment: React.FC = () => {
  return (
    <>
      <SEO 
        title="E-Commerce Development Services | Ideographers" 
        description="Build robust, secure, and conversion-focused e-commerce platforms that provide seamless shopping experiences."
        canonical="/e-commerce-development"
        ogTitle="E-Commerce Development Services | Ideographers"
        ogDescription="Build robust, secure, and conversion-focused e-commerce platforms that provide seamless shopping experiences."
        ogType="website"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'E-Commerce Development', path: '/e-commerce-development' }]} />
      <ServiceSchema name="Advanced E-Commerce Solutions" description="Build robust, secure, and conversion-focused e-commerce platforms that provide seamless shopping experiences for your customers." />
      <ServicePageTemplate
        title="Advanced E-Commerce Solutions"
      description="Build robust, secure, and conversion-focused e-commerce platforms that provide seamless shopping experiences for your customers."
      overview={{ title: "Scaling Your Online Retail Business", content: "We create tailor-made e-commerce platforms that integrate flawlessly with your inventory, payment gateways, and shipping logistics. Our solutions are designed to handle high traffic and drive revenue growth." }}
      features={["Custom Shopping Cart Development", "Secure Payment Gateway Integration", "Inventory Management Systems", "Advanced Search & Filtering"]}
      benefits={["Higher Conversion Rates", "Seamless Customer Experience", "Scalability for High Traffic", "Robust Security & Data Protection"]}
      process={["Requirement & Platform Strategy", "UI/UX & Cart Flow Design", "Development & Integration", "Testing, Launch & Optimization"]}
      whyChooseUs="Ideographers delivers e-commerce solutions that prioritize security, speed, and user experience, helping you build trust and drive sales."
      faqs={[
        { question: "Which e-commerce platforms do you specialize in?", answer: "We are proficient in modern platforms like Shopify, Magento, WooCommerce, and custom MERN-stack solutions tailored to your needs." },
        { question: "Can you help with payment gateway security?", answer: "Yes, security is a priority. We implement PCI-compliant payment integrations and secure data handling procedures." },
        { question: "How do you handle product inventory synchronization?", answer: "We integrate your e-commerce store with your inventory management system, ensuring stock levels are updated in real-time across all sales channels." },
        { question: "What tools do you use for e-commerce analytics?", answer: "We implement advanced analytics tools like Google Analytics and custom tracking solutions to give you actionable insights into customer behavior and sales performance." }
      ]}
      ctaTitle="Scale your online retail business"
      ctaButtonText="Start Your E-Commerce Project"
    />
    </>
  );
};

export default ECommerceDevelopment;
