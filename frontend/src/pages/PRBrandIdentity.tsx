import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO } from '../components/ui';

const PRBrandIdentity: React.FC = () => {
  return (
    <>
      <SEO 
        title="Brand Identity Design Services | Ideographers" 
        description="Craft cohesive, authentic brand identities that articulate your business values, resonate with your target audience, and set you apart."
        canonical="/pr-brand-identity"
        ogTitle="Brand Identity Design Services | Ideographers"
        ogDescription="Craft cohesive, authentic brand identities that articulate your business values, resonate with your target audience, and set you apart."
        ogType="website"
      />
      <ServicePageTemplate
        title="Brand Identity Design"
      description="We craft cohesive, authentic brand identities that articulate your business values, resonate with your target audience, and set you apart in a competitive market."
      overview={{
        title: "Defining Your Brand Presence",
        content: "A brand is more than just a logo; it is the total perception of your business. Our comprehensive identity design process integrates your core vision into a unified visual and verbal system."
      }}
      features={[
        "Strategic brand positioning and messaging",
        "Customized logo systems and icon sets",
        "Comprehensive brand style guides and guidelines",
        "Unified color palettes and typography systems"
      ]}
      benefits={[
        "Increased brand recognition and recall",
        "Improved customer trust and loyalty",
        "Cohesive communication across all platforms",
        "Differentiated market presence"
      ]}
      process={[
        "Discovery and market research",
        "Strategic concept development",
        "Visual identity design and refinement",
        "Brand guideline implementation"
      ]}
      whyChooseUs="We combine creative excellence with strategic rigor to build brands that don't just look good—they perform. Our holistic approach ensures your identity evolves with your business goals."
      faqs={[
        { question: "How long does the branding process take?", answer: "Typically, a complete identity project ranges from 4 to 8 weeks depending on scope." },
        { question: "Can you refresh an existing brand?", answer: "Yes, we specialize in brand evolution and strategic refreshing." }
      ]}
      ctaTitle="Ready to define your brand identity?"
      ctaButtonText="Start Branding Project"
    />
    </>
  );
};

export default PRBrandIdentity;
