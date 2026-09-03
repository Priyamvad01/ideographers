import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';

const CustomSoftwareIntegration: React.FC = () => {
  return (
    <>
      <SEO 
        title="Software Integration Services | Ideographers" 
        description="Bridge the gap between your essential software tools, ensuring unified data flow, improved productivity, and automated workflows." 
        canonical="/services/it-services/custom-software-integration"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'IT Services', path: '/services/it-services' },
        { name: 'Custom Software Integration', path: '/services/it-services/custom-software-integration' }
      ]} />
      <ServiceSchema 
        name="Seamless Software Integration" 
        description="Connect your disparate business systems and platforms to ensure unified data flow, improved operational productivity, and automated workflows." 
      />
      <ServicePageTemplate
        title="Seamless Software Integration"
      description="Connect your disparate business systems and platforms to ensure unified data flow, improved operational productivity, and automated workflows."
      overview={{ title: "Breaking Down Data Silos", content: "We bridge the gap between your essential software tools—whether legacy systems, SaaS platforms, or custom applications. Our integration services ensure your tech stack works in harmony, eliminating manual data entry and minimizing errors." }}
      features={["API Development & Management", "Enterprise Middleware Solutions", "Data Synchronization & Mapping", "Legacy System Modernization"]}
      benefits={["Unified Data Visibility", "Automated Business Workflows", "Reduced Operational Costs", "Improved System Agility"]}
      process={["Systems Assessment & Analysis", "Integration Strategy Mapping", "Middleware Development & Testing", "Deployment & Verification"]}
      whyChooseUs="Our deep understanding of complex system architecture enables us to connect tools safely, securely, and with zero disruption to your daily operations."
      faqs={[
        { question: "Can you integrate legacy systems?", answer: "Yes, we specialize in modernizing and integrating older, legacy systems with modern cloud-based and SaaS platforms." },
        { question: "How do you handle data security during integration?", answer: "We prioritize security by utilizing encrypted protocols, secure API authentication, and strictly following compliance standards." },
        { question: "What are the common challenges in system integration?", answer: "Common challenges include data mapping, system compatibility, and maintaining uptime; our team proactively manages these through thorough analysis and robust testing." },
        { question: "How long does a typical integration project take?", answer: "Timeline depends on the complexity of the systems; we provide a clear roadmap and timeline during the initial assessment phase." }
      ]}
      ctaTitle="Optimize your IT ecosystem"
      ctaButtonText="Talk to an Integration Expert"
    />
    </>
  );
};

export default CustomSoftwareIntegration;
