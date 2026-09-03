import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';

const IndustryMaintenance: React.FC = () => {
  return (
    <>
      <SEO 
        title="Industry Maintenance & Support | Ideographers" 
        description="Ensure your business systems remain secure, performant, and future-proof with our comprehensive industry-focused support services."
        canonical="/industry-maintenance"
        ogTitle="Industry Maintenance & Support | Ideographers"
        ogDescription="Ensure your business systems remain secure, performant, and future-proof with our comprehensive industry-focused support services."
        ogType="website"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Industry Maintenance', path: '/industry-maintenance' }]} />
      <ServiceSchema name="Industry Solutions & Long-Term Maintenance" description="Ensure your business systems remain secure, performant, and future-proof with our comprehensive industry-focused support and maintenance services." />
      <ServicePageTemplate
        title="Industry Solutions & Long-Term Maintenance"
      description="Ensure your business systems remain secure, performant, and future-proof with our comprehensive industry-focused support and maintenance services."
      overview={{
        title: "Your Long-Term Technology Partner",
        content: "Technology is not a one-time project; it requires continuous care, updates, and optimization to remain effective. We provide industry-specific technology solutions combined with dedicated, long-term maintenance and technical support to ensure your systems support your business growth sustainably."
      }}
      features={[
        "24/7 Application Performance Monitoring",
        "Routine Software Updates & Security Patching",
        "Industry-Specific Optimization (Education, Healthcare, Retail, etc.)",
        "Proactive Bug Fixing & Technical Support",
        "System Infrastructure Scalability Management",
        "Future-Proofing & Technology Upgrades"
      ]}
      benefits={[
        "Minimized Downtime via Proactive Maintenance",
        "Consistent System Performance & Reliability",
        "Enhanced Security Against Evolving Threats",
        "Dedicated Support Focused on Your Business Goals"
      ]}
      process={[
        "System Assessment & Current State Analysis",
        "Maintenance Planning & Support Agreement Setup",
        "Continuous Optimization, Monitoring & Updates",
        "Periodic Strategy Reviews & Future-Proofing"
      ]}
      whyChooseUs="Ideographers acts as an extension of your own team. We don't just fix issues; we actively monitor, optimize, and evolve your systems so you can focus on core business operations."
      faqs={[
        {
          question: "Do you support applications developed by others?",
          answer: "Yes, we provide comprehensive technical assessment and maintenance services for applications developed by other teams, ensuring they meet modern standards for security and performance."
        },
        {
          question: "What is included in your maintenance packages?",
          answer: "Our maintenance packages include routine performance monitoring, security patching, bug fixes, software updates, and dedicated technical support hours to handle ongoing requirements."
        },
        {
          question: "How do you handle emergency support requests?",
          answer: "We offer dedicated emergency response channels with guaranteed response times to address critical system issues immediately and minimize downtime."
        },
        {
          question: "Do you provide regular system reports?",
          answer: "Yes, we provide monthly or quarterly performance reports, detailing system uptime, security status, identified issues, and proactive recommendations for further optimization."
        }
      ]}
      ctaTitle="Keep your business running smoothly"
      ctaButtonText="Explore Maintenance Plans"
    />
    </>
  );
};

export default IndustryMaintenance;
