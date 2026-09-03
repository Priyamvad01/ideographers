import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';

const CustomSoftwareDevelopment: React.FC = () => {
  return (
    <>
      <SEO 
        title="Custom Software Development Services | Ideographers" 
        description="Get bespoke, enterprise-grade software tailored to solve your unique business challenges and streamline complex operational workflows." 
        canonical="/services/it-services/software-development"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'IT Services', path: '/services/it-services' },
        { name: 'Software Development', path: '/services/it-services/software-development' }
      ]} />
      <ServiceSchema 
        name="Bespoke Software Development" 
        description="Tailored software solutions engineered to address your unique business challenges and streamline complex operational workflows." 
      />
      <ServicePageTemplate
        title="Bespoke Software Development"
      description="Tailored software solutions engineered to address your unique business challenges and streamline complex operational workflows."
      overview={{ title: "Innovating Through Tailored Technology", content: "Off-the-shelf software doesn't always fit. We specialize in building custom, enterprise-grade applications from scratch, designed to scale with your business and integrate perfectly with your existing systems." }}
      features={["Custom Web & Desktop Applications", "Scalable System Architecture", "Data Security & Compliance", "Cloud-Native Design"]}
      benefits={["Increased Operational Efficiency", "Full Customization & Ownership", "Seamless Integration Capability", "Long-term Scalability"]}
      process={["Consultation & Requirement Mapping", "Architecture Design & Prototyping", "Iterative Development & Testing", "Deployment & Post-Launch Support"]}
      whyChooseUs="Our team of senior engineers focuses on crafting high-quality, maintainable software that drives tangible business value and provides a competitive advantage."
      faqs={[
        { question: "How do you ensure the software meets my needs?", answer: "We follow an iterative, collaborative development process with frequent reviews to ensure the final product aligns perfectly with your objectives." },
        { question: "Do you own the source code?", answer: "No, you own 100% of the IP and source code developed for your project upon final delivery." },
        { question: "Do you provide documentation for the software?", answer: "Yes, we provide comprehensive documentation, including technical specifications, user manuals, and API guides to ensure smooth adoption and future maintenance." },
        { question: "How do you ensure the software is secure?", answer: "We adopt a security-first approach, implementing secure coding practices, conducting regular security assessments, and using industry-standard encryption protocols." }
      ]}
      ctaTitle="Develop software that works for you"
      ctaButtonText="Request a Consultation"
    />
    </>
  );
};

export default CustomSoftwareDevelopment;
