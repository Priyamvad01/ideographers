import React from 'react';
import { ServicePageTemplate } from '../../../components/common';

const HousePlanning: React.FC = () => (
  <ServicePageTemplate
    title="Custom House Planning & Design"
    description="We turn your dream home into reality with bespoke house planning that emphasizes comfort, functionality, aesthetic beauty, and structural integrity."
    seo={{ title: 'Custom House Planning & Design', description: 'We turn your dream home into reality with bespoke house planning that emphasizes comfort, functionality, aesthetic beauty, and structural integrity.' }}
    overview={{
      title: "Creating Spaces That Feel Like Home",
      content: "Planning a home is a deeply personal process. We focus on understanding your lifestyle, space requirements, and design preferences to create custom plans that are not just beautiful, but liveable and efficient."
    }}
    features={[
      "Bespoke Floor Plan Design",
      "Lifestyle-Driven Space Layouts",
      "Vastu/Feng Shui Integration (On Demand)",
      "Smart Space & Energy Efficiency"
    ]}
    benefits={[
      "A home designed specifically for your lifestyle",
      "Optimized natural light and ventilation flow",
      "Increased property valuation through custom design",
      "Efficient construction planning for cost control"
    ]}
    process={[
      "Lifestyle Needs Assessment",
      "Spatial Requirements & Zoning",
      "Drafting Custom Floor Plans",
      "Final Design Review & Refinement"
    ]}
    whyChooseUs="We understand that a house is more than four walls—it's a home. Our planning process emphasizes empathy, functional layout, and your unique personality in every square foot."
    faqs={[
      { question: "Can you incorporate Vastu?", answer: "Yes, we are experienced in integrating Vastu principles into house planning without compromising functional requirements." },
      { question: "How long does planning take?", answer: "Timeline varies by complexity; typically, custom home planning takes 2-6 weeks from initial consultation to final blueprints." }
    ]}
    ctaTitle="Ready to plan your dream home?"
    ctaButtonText="Start Your House Plan"
  />
);

export default HousePlanning;
