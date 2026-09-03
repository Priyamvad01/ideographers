import React from 'react';
import { ServicePageTemplate } from '../../../components/common';

const SiteLayoutPlanning: React.FC = () => (
  <ServicePageTemplate
    title="Strategic Site Layout Planning"
    description="We optimize your land usage through strategic site layout planning, balancing aesthetics, functionality, circulation, and environmental harmony."
    seo={{ title: 'Strategic Site Layout Planning', description: 'We optimize your land usage through strategic site layout planning, balancing aesthetics, functionality, circulation, and environmental harmony.' }}
    overview={{
      title: "Optimizing Your Land Potential",
      content: "The way a building sits on a site dictates its success. Our site layout planning considers sunlight, accessibility, topography, and future scalability to create the perfect environment for your project."
    }}
    features={[
      "Topographical & Site Analysis",
      "Optimized Circulation & Accessibility",
      "Zoning & Setback Planning",
      "Environmental & Landscape Harmony"
    ]}
    benefits={[
      "Maximized usable land area and potential",
      "Improved building orientation for energy efficiency",
      "Streamlined logistical & vehicular movement",
      "Balanced harmony between nature and structure"
    ]}
    process={[
      "Site Visit & Topography Analysis",
      "Constraint & Opportunity Mapping",
      "Conceptual Site Layout Development",
      "Final Master Planning & Approval"
    ]}
    whyChooseUs="We understand that the context of a site is just as important as the building itself. We plan for the land, not just on it, to ensure long-term value."
    faqs={[
      { question: "Why is site layout planning important?", answer: "It determines everything from sunlight and views to logistical efficiency and drainage, significantly affecting long-term usability and value." },
      { question: "Do you consider drainage in site planning?", answer: "Yes, water management and sustainable drainage are critical aspects of our site layout planning process." }
    ]}
    ctaTitle="Ready to maximize your site potential?"
    ctaButtonText="Start Site Planning"
  />
);

export default SiteLayoutPlanning;
