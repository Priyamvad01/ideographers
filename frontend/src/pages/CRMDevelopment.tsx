import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';

const CRMDevelopment: React.FC = () => {
  return (
    <>
      <SEO 
        title="CRM Development & Integration Services | Ideographers" 
        description="Optimize your sales, automate support, and build customer relationships with our custom-built CRM solutions." 
        canonical="/services/it-services/crm"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'IT Services', path: '/services/it-services' },
        { name: 'CRM', path: '/services/it-services/crm' }
      ]} />
      <ServiceSchema 
        name="Enterprise CRM Development & Customization" 
        description="Optimize your sales pipeline, automate customer support, and cultivate lasting customer relationships with custom-built CRM solutions and seamless integrations." 
      />
      <ServicePageTemplate
        title="Enterprise CRM Development & Customization"
      description="Optimize your sales pipeline, automate customer support, and cultivate lasting customer relationships with custom-built CRM solutions and seamless integrations."
      overview={{
        title: "Streamline Relationships and Maximize Sales",
        content: "A successful business runs on strong relationships. We build, customize, and integrate enterprise-grade CRM platforms that empower your sales, marketing, and support teams with deep behavioral insights, automated communication pipelines, and centralized data management."
      }}
      features={[
        "Custom Sales & Lead Automation Pipelines",
        "Third-Party Platform & Marketing Integration",
        "Comprehensive Customer Support Workflows",
        "Real-Time BI Dashboards & Data Analytics",
        "CRM Consulting & Roadmap Definition",
        "CRM Migration & Legacy Data Transition"
      ]}
      benefits={[
        "Increased Sales & Marketing Team Productivity",
        "Enhanced Customer Experience, Trust & Retention",
        "Highly Accurate Data-Driven Sales Forecasting",
        "Centralized, Organized & Secure Customer Records"
      ]}
      process={[
        "Business Process Mapping & CRM Consulting",
        "Custom Development & System Configuration",
        "Data Migration & External API Integration",
        "Testing, User Training & Live Launch"
      ]}
      whyChooseUs="Ideographers merges strategic business consulting with cutting-edge software engineering. We don't just deploy a CRM; we align the software with your specific sales methodology and operations to ensure maximum ROI."
      faqs={[
        {
          question: "Do you build custom CRMs or integrate existing platforms?",
          answer: "We do both! We develop bespoke custom CRM systems from scratch for unique business models, and we also customize and integrate leading platforms like Salesforce, Zoho, and HubSpot."
        },
        {
          question: "Can you migrate our legacy customer data?",
          answer: "Yes, we handle complete, secure data migration from your legacy spreadsheets or older systems, ensuring zero data loss and maintaining data integrity throughout the process."
        },
        {
          question: "How does CRM integration improve sales?",
          answer: "By centralizing customer data and automating follow-ups, CRM integration ensures no lead is missed and empowers sales teams to focus on high-value interactions."
        },
        {
          question: "Do you provide user training for the new CRM?",
          answer: "Yes, we provide hands-on training sessions and user documentation to ensure your team is confident and productive with the new CRM system from day one."
        }
      ]}
      ctaTitle="Transform your customer experience"
      ctaButtonText="Contact CRM Specialists"
    />
    </>
  );
};

export default CRMDevelopment;
