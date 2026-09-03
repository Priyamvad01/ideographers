import React from 'react';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';
import { PremiumHero, AuthorityStrip, DeliverablesCards, WorkflowProcess, PremiumCTA, WhyChooseIdeographersPanel, FAQSection, PremiumSection, IndustryShowcaseSection } from '../components/premium';

const Architecture3DVisualization: React.FC = () => {
  const trustMetrics = [{ label: "Renders Delivered", value: "800+" }, { label: "Approval Success", value: "95%" }, { label: "Realistic Detail", value: "100%" }, { label: "Client Satisfaction", value: "100%" }];
  const deliverables = ["Photorealistic Exterior/Interior Renders", "3D Walkthrough Animations", "Material & Lighting Studies", "Contextual Site Integration"];
  const process = ["Input & Requirements Analysis", "3D Modeling & Geometry Setup", "Material, Lighting & Texture Application", "Final Rendering & Optimization"];
  const faqs = [{ question: "How long does a rendering take?", answer: "Turnaround depends on project scope, typically ranging from 3 days to 2 weeks for complex animations." }];
  return (
    <>
      <SEO 
        title="3D Architectural Visualization Services | Ideographers" 
        description="Visualize your projects before they are built with our hyper-realistic 3D rendering and walkthrough services. Expertly crafted to drive stakeholder alignment."
        canonical="/services/architecture/3d-visualization"
        ogTitle="3D Architectural Visualization Services | Ideographers"
        ogDescription="Visualize your projects before they are built with our hyper-realistic 3D rendering and walkthrough services. Expertly crafted to drive stakeholder alignment."
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Architecture', path: '/services/architecture' }, { name: '3D Visualization', path: '/services/architecture/3d-visualization' }]} />
      <ServiceSchema name="3D Visualization" description="Hyper-realistic 3D architectural rendering and walkthrough services." />
      <PremiumHero title="Immersive 3D Architectural Visualization" description="See your vision before it's built with hyper-realistic 3D architectural visualization that captures every nuance of light, material, and spatial atmosphere." />
      <AuthorityStrip metrics={trustMetrics} />
      <DeliverablesCards deliverables={deliverables} />
      <WorkflowProcess process={process} />
      <PremiumSection title="What Our Clients Achieve"><p>Clear stakeholder alignment, faster project approvals, and high-impact marketing materials that sell the project before completion.</p></PremiumSection>
      <IndustryShowcaseSection items={["Real estate developments", "Luxury residential", "Large-scale commercial projects"]} />
      <WhyChooseIdeographersPanel content="We don't just render images; we visualize atmospheres. Our deep architectural understanding ensures our visuals are technically accurate and emotionally evocative." />
      <FAQSection faqs={faqs} />
      <PremiumCTA title="Ready to bring your project to life?" buttonText="Schedule Visualization" />
    </>
  );
};
export default Architecture3DVisualization;
