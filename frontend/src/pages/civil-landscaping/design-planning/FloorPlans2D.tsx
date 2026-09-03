import React from 'react';
import { ServicePageTemplate } from '../../../components/common';

const FloorPlans2D: React.FC = () => (
  <ServicePageTemplate
    title="Professional 2D Floor Planning"
    description="We provide precise 2D floor planning that balances spatial efficiency, ergonomic flow, and functional requirements for all types of structures."
    seo={{ title: 'Professional 2D Floor Planning', description: 'We provide precise 2D floor planning that balances spatial efficiency, ergonomic flow, and functional requirements for all types of structures.' }}
    overview={{
      title: "The Foundation of Every Space",
      content: "A well-planned 2D floor plan is the blueprint of a functional life. We focus on ergonomic circulation, furniture arrangement, and spatial efficiency to create layouts that are both intuitive and highly usable."
    }}
    features={[
      "Precise Architectural 2D Drafting",
      "Ergonomic Spatial Layouts",
      "Detailed Dimensioning & Annotation",
      "Furniture & Equipment Layout Design"
    ]}
    benefits={[
      "Optimized functionality and movement flow",
      "Accurate space allocation for all user needs",
      "Clear communication for contractors",
      "Foundation for all future interior/3D design"
    ]}
    process={[
      "Functional Requirements Analysis",
      "Initial Spatial Zoning & Layout",
      "Detailed Drafting & Dimensioning",
      "Review & Refinement"
    ]}
    whyChooseUs="We understand that 2D plans are the most crucial communication tool between you and your builder. Our plans are clean, detailed, and meticulously dimensioned."
    faqs={[
      { question: "Do you include furniture layouts?", answer: "Yes, we can provide detailed furniture layouts to ensure spatial adequacy in all rooms." },
      { question: "Is a floor plan sufficient for construction?", answer: "A 2D plan is the necessary foundation, but it should be paired with elevation, structural, and service plans for full construction." }
    ]}
    ctaTitle="Ready to design your layout?"
    ctaButtonText="Request Floor Plan"
  />
);

export default FloorPlans2D;
