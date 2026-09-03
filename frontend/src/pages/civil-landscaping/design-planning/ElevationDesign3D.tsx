import React from 'react';
import { ServicePageTemplate } from '../../../components/common';

const ElevationDesign3D: React.FC = () => (
  <ServicePageTemplate
    title="Immersive 3D Elevation Design"
    description="Visualize your structure's exterior with stunning 3D elevation designs that bring material, texture, and light to life before construction begins."
    seo={{ title: 'Immersive 3D Elevation Design', description: 'Visualize your structure’s exterior with stunning 3D elevation designs that bring material, texture, and light to life before construction begins.' }}
    overview={{
      title: "See Your Vision Before It’s Built",
      content: "3D elevations are the most powerful tool to communicate the architectural aesthetic. We create hyper-realistic renderings that help you make informed decisions about finishes, lighting, and facade design."
    }}
    features={[
      "Photorealistic 3D Exterior Rendering",
      "Material, Texture & Lighting Studies",
      "Multiple Perspective & Angle Views",
      "Contextual Site Environment Integration"
    ]}
    benefits={[
      "Confidence in architectural aesthetics",
      "Visual alignment for all stakeholders",
      "Easy experimentation with materials & colors",
      "High-impact visuals for marketing & approvals"
    ]}
    process={[
      "Design Brief & Material Specification",
      "3D Modeling & Geometry Setup",
      "Texture, Lighting & Rendering",
      "Final High-Resolution Render Delivery"
    ]}
    whyChooseUs="Our rendering experts understand both architecture and light. We don't just create images; we create immersive experiences that truly reflect the soul of your building."
    faqs={[
      { question: "Do you offer interior rendering?", answer: "This service focuses on exterior elevation; we do provide interior rendering as a separate specialized service." },
      { question: "How many revisions are included?", answer: "Our packages typically include 2 rounds of revisions to ensure the rendering perfectly matches your vision." }
    ]}
    ctaTitle="Ready to visualize your facade?"
    ctaButtonText="Request 3D Elevation"
  />
);

export default ElevationDesign3D;
