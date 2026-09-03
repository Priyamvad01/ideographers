import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO } from '../components/ui';

const PRCreativeDesign: React.FC = () => {
  return (
    <>
      <SEO 
        title="Creative Design Services | Ideographers" 
        description="We turn concepts into compelling visual narratives. Our creative design services focus on producing high-impact assets that captivate audiences and drive engagement."
        canonical="/pr-creative-design"
        ogTitle="Creative Design Services | Ideographers"
        ogDescription="We turn concepts into compelling visual narratives. Our creative design services focus on producing high-impact assets that captivate audiences and drive engagement."
        ogType="website"
      />
      <ServicePageTemplate
        title="Creative Design Services"
        description="We turn concepts into compelling visual narratives. Our creative design services focus on producing high-impact assets that captivate audiences and drive engagement."
        overview={{
          title: "Visual Communication Excellence",
          content: "Whether it's digital assets for campaigns, complex layouts, or custom illustrations, our design team brings artistic precision to every project, ensuring your messaging is always visual, memorable, and on-brand."
        }}
        features={[
          "Custom illustration and icon design",
          "High-end digital campaign assets",
          "Layout and editorial design",
          "Creative asset production for multiple channels"
        ]}
        benefits={[
          "Enhanced audience engagement",
          "Stronger emotional connection to your brand",
          "Professional visual presence across all touchpoints",
          "Consistent visual storytelling"
        ]}
        process={[
          "Understanding project objectives",
          "Creative brainstorming and mood boarding",
          "Drafting, review, and refinement",
          "Final production and asset delivery"
        ]}
        whyChooseUs="Our designs are not just visually stunning; they are strategically developed to solve business problems, convey complex information clearly, and drive action."
        faqs={[
          { question: "Do you provide source files?", answer: "Yes, all final assets include the necessary editable source files." },
          { question: "Can you work within existing brand guidelines?", answer: "Absolutely, we prioritize strict adherence to your brand standards." }
        ]}
        ctaTitle="Ready to create something amazing?"
        ctaButtonText="Start Creative Project"
      />
    </>
  );
};

export default PRCreativeDesign;
