import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO } from '../components/ui';

const PRAdvertisementDesign: React.FC = () => {
  return (
    <>
      <SEO 
        title="Advertisement Design Services | Ideographers" 
        description="Design persuasive, high-conversion advertisements tailored to grab attention and drive measurable results for your campaigns."
        canonical="/pr-advertisement-design"
        ogTitle="Advertisement Design Services | Ideographers"
        ogDescription="Design persuasive, high-conversion advertisements tailored to grab attention and drive measurable results for your campaigns."
        ogType="website"
      />
      <ServicePageTemplate
        title="Advertisement Design"
      description="We design persuasive, high-conversion advertisements tailored to stop the scroll, grab attention, and drive measurable results for your campaigns."
      overview={{
        title: "Ads That Convert",
        content: "Effective advertising requires a perfect blend of creativity and data-driven design. We create campaign assets that communicate your core offer instantly, encouraging your target audience to take action."
      }}
      features={[
        "High-impact digital ad creative (Display/Social)",
        "Compelling print advertisement design",
        "Outdoor media and OOH assets",
        "Ad variations for A/B testing"
      ]}
      benefits={[
        "Improved Click-Through Rates (CTR)",
        "Lower Customer Acquisition Costs (CAC)",
        "Stronger brand recall in ads",
        "Consistent messaging across channels"
      ]}
      process={[
        "Campaign goal analysis and audience targeting",
        "Creative concept development and messaging",
        "Ad layout design and refinement",
        "Performance-optimized asset export"
      ]}
      whyChooseUs="We understand what makes an ad perform. Our design team focuses on clear hierarchies, strong call-to-actions, and brand-driven visuals to maximize your campaign's effectiveness."
      faqs={[
        { question: "Do you handle ad copy too?", answer: "Yes, we can collaborate on both creative design and high-converting ad copy." },
        { question: "Can you resize ads for different platforms?", answer: "Absolutely, we provide asset adaptation for all major advertising platforms." }
      ]}
      ctaTitle="Ready to launch high-converting ads?"
      ctaButtonText="Start Ad Campaign"
    />
    </>
  );
};

export default PRAdvertisementDesign;
