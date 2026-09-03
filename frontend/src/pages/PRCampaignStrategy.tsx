import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO } from '../components/ui';

const PRCampaignStrategy: React.FC = () => {
  return (
    <>
      <SEO 
        title="Marketing Campaign Strategy | Ideographers" 
        description="Develop data-backed, creative-led marketing campaign strategies to maximize reach, engagement, and conversion."
        canonical="/pr-campaign-strategy"
        ogTitle="Marketing Campaign Strategy | Ideographers"
        ogDescription="Develop data-backed, creative-led marketing campaign strategies to maximize reach, engagement, and conversion."
        ogType="website"
      />
      <ServicePageTemplate
        title="Campaign Strategy"
      description="We develop data-backed, creative-led marketing campaign strategies that align with your business objectives to maximize reach, engagement, and conversion."
      overview={{
        title: "Results-Driven Planning",
        content: "A great campaign starts with a strong strategy. We analyze your market, define your audience, and plan the channels and creative approach to ensure your campaign delivers maximum ROI."
      }}
      features={[
        "Audience segmentation and targeting",
        "Multi-channel campaign planning",
        "Campaign creative and messaging roadmap",
        "KPI definition and performance tracking plan"
      ]}
      benefits={[
        "Increased marketing efficiency and ROI",
        "Clearer understanding of target audience",
        "Cohesive and impactful execution",
        "Measurable campaign performance"
      ]}
      process={[
        "Business objective discovery",
        "Audience, competitor, and market analysis",
        "Strategic campaign framework development",
        "Execution roadmap and measurement setup"
      ]}
      whyChooseUs="We balance high-level strategic planning with pragmatic execution. Our strategies are built to be actionable, scalable, and focused on tangible business outcomes."
      faqs={[
        { question: "Do you assist with campaign execution?", answer: "Yes, we provide end-to-end support from planning to execution and analysis." },
        { question: "How do you measure success?", answer: "We establish clear KPIs aligned with your business goals at the start of our planning process." }
      ]}
      ctaTitle="Ready to launch a winning campaign?"
      ctaButtonText="Start Campaign Strategy"
    />
    </>
  );
};

export default PRCampaignStrategy;
