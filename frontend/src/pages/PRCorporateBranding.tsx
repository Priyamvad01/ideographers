import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO } from '../components/ui';

const PRCorporateBranding: React.FC = () => {
  return (
    <>
      <SEO 
        title="Corporate Branding Services | Ideographers" 
        description="Build and maintain a strong corporate identity that fosters trust, attracts talent, and commands respect in the marketplace."
        canonical="/pr-corporate-branding"
        ogTitle="Corporate Branding Services | Ideographers"
        ogDescription="Build and maintain a strong corporate identity that fosters trust, attracts talent, and commands respect in the marketplace."
        ogType="website"
      />
      <ServicePageTemplate
        title="Corporate Branding"
      description="We help enterprises build and maintain a strong corporate identity that fosters trust, attracts talent, and commands respect in the marketplace."
      overview={{
        title: "Building Corporate Authority",
        content: "Corporate branding is about consistency and reputation. We develop comprehensive brand systems that ensure every internal and external touchpoint reflects your corporate vision and values accurately."
      }}
      features={[
        "Corporate identity systems (Visual & Verbal)",
        "Employer branding strategies",
        "Internal communication design",
        "Corporate event and environment branding"
      ]}
      benefits={[
        "Strengthened market positioning",
        "Enhanced credibility with stakeholders",
        "Improved talent attraction and retention",
        "Cohesive corporate culture representation"
      ]}
      process={[
        "Corporate vision and culture audit",
        "Brand framework development",
        "Visual system and guideline creation",
        "Corporate communication and touchpoint rollout"
      ]}
      whyChooseUs="We understand the scale and complexity of corporate branding. We provide scalable solutions that work across borders, departments, and diverse business units."
      faqs={[
        { question: "What is the difference between brand and corporate branding?", answer: "Corporate branding encompasses the entire entity, including internal culture and stakeholder reputation." },
        { question: "Do you work with global teams?", answer: "Yes, we design branding systems meant for international scalability." }
      ]}
      ctaTitle="Ready to solidify your corporate reputation?"
      ctaButtonText="Start Corporate Branding"
    />
    </>
  );
};

export default PRCorporateBranding;
