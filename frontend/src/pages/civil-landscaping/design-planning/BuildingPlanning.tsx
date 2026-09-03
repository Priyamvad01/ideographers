import React from 'react';
import { ServicePageTemplate } from '../../../components/common';

const BuildingPlanning: React.FC = () => (
  <ServicePageTemplate
    title="Comprehensive Building Planning Services"
    description="We provide holistic building planning services, ensuring that space, functionality, and regulatory compliance are perfectly balanced for your new construction project."
    seo={{ title: 'Comprehensive Building Planning Services', description: 'We provide holistic building planning services, ensuring that space, functionality, and regulatory compliance are perfectly balanced for your new construction project.' }}
    overview={{
      title: "Visionary Planning for Modern Structures",
      content: "Building planning is more than layout; it's about creating efficient, sustainable spaces that serve long-term utility. Our planning process integrates user needs with site constraints to build structures that stand the test of time."
    }}
    features={[
      "Integrated Space Layout Planning",
      "Functionality & Flow Optimization",
      "Building Code & Zoning Compliance Check",
      "Sustainable Design Strategy Integration"
    ]}
    benefits={[
      "Maximized space utilization & efficiency",
      "Aligned functional requirements with design goals",
      "Early identification of regulatory hurdles",
      "Future-proof, scalable structural layouts"
    ]}
    process={[
      "Initial Consultation & Needs Assessment",
      "Site Analysis & Constraint Evaluation",
      "Conceptual Building Layout Planning",
      "Regulatory Compliance & Final Planning"
    ]}
    whyChooseUs="Our team approaches building planning through a lens of sustainability, efficiency, and structural harmony, ensuring that the foundation of your construction is solid from day one."
    faqs={[
      { question: "How does planning differ from design?", answer: "Planning focuses on functionality, spatial flow, and regulation, while design explores the aesthetic and experiential aspects of the structure." },
      { question: "Do you handle zoning compliance?", answer: "Yes, we integrate zoning and building code compliance check from the very first planning phase." }
    ]}
    ctaTitle="Ready to plan your next building?"
    ctaButtonText="Schedule Building Planning"
  />
);

export default BuildingPlanning;
