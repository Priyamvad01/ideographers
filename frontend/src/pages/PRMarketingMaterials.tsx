import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO } from '../components/ui';

const PRMarketingMaterials: React.FC = () => {
  return (
    <>
      <SEO 
        title="Marketing Materials Design | Ideographers" 
        description="We design high-converting marketing collateral, from sales presentations to pitch decks, designed to engage prospects, close deals, and elevate your professional image."
        canonical="/pr-marketing-materials"
        ogTitle="Marketing Materials Design | Ideographers"
        ogDescription="We design high-converting marketing collateral, from sales presentations to pitch decks, designed to engage prospects, close deals, and elevate your professional image."
        ogType="website"
      />
      <ServicePageTemplate
        title="Marketing Materials"
        description="We design high-converting marketing collateral, from sales presentations to pitch decks, designed to engage prospects, close deals, and elevate your professional image."
        overview={{
          title: "Strategic Sales Collateral",
          content: "Your marketing materials are the face of your sales process. We ensure every deck, kit, and presentation is visually compelling and strategically structured to highlight your value proposition effectively."
        }}
        features={[
          "Customized sales presentations/pitch decks",
          "Branded proposal and report templates",
          "Digital and physical sales kits",
          "Promotional event materials"
        ]}
        benefits={[
          "Professional and cohesive sales narrative",
          "Higher conversion rates for sales meetings",
          "Increased confidence in brand presentations",
          "Time-saving branded templates"
        ]}
        process={[
          "Content structure and narrative planning",
          "Design conceptualization and layout",
          "Brand standard alignment and refinement",
          "Production and final file delivery"
        ]}
        whyChooseUs="We don't just 'make it look nice.' We organize your content for clarity and impact, ensuring your marketing materials help your sales team close more deals faster."
        faqs={[
          { question: "Can you update our existing decks?", answer: "Yes, we can modernize and optimize your current sales presentations." },
          { question: "Do you create templates we can edit?", answer: "Absolutely, we provide easy-to-use branded templates for your internal teams." }
        ]}
        ctaTitle="Ready to close more deals?"
        ctaButtonText="Start Marketing Project"
      />
    </>
  );
};

export default PRMarketingMaterials;
