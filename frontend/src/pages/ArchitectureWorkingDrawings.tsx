import React from 'react';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';
import { PremiumHero, AuthorityStrip, DeliverablesCards, WorkflowProcess, PremiumCTA, WhyChooseIdeographersPanel, FAQSection, PremiumSection, IndustryShowcaseSection } from '../components/premium';

const ArchitectureWorkingDrawings: React.FC = () => {
  const trustMetrics = [{ label: "Drawings Completed", value: "1000+" }, { label: "Compliance Rate", value: "100%" }, { label: "Construction Errors", value: "<1%" }, { label: "Client Satisfaction", value: "100%" }];
  const deliverables = ["Detailed Construction Blueprints", "Structural & MEP Schematics", "Material Specifications", "Installation Details"];
  const process = ["Design Intent Review", "Technical Detailing", "Coordinated Engineering Integration", "Final Drawing Set Review"];
  const faqs = [{ question: "Do your drawings comply with local codes?", answer: "Yes, all drawings strictly adhere to local building codes and industry construction standards." }];
  return (
    <>
      <SEO 
        title="Technical Working Drawings & Blueprints | Ideographers" 
        description="Translate complex design concepts into precise, actionable construction blueprints with our expert technical documentation services." 
        canonical="/services/architecture/working-drawings"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Architecture', path: '/services/architecture' }, { name: 'Working Drawings', path: '/services/architecture/working-drawings' }]} />
      <ServiceSchema name="Working Drawings" description="Precise technical documentation and construction blueprint services." />
      <PremiumHero title="Technical Working Drawings" description="We translate complex design concepts into precise, actionable construction blueprints, ensuring technical accuracy, regulatory compliance, and seamless on-site execution." />
      <AuthorityStrip metrics={trustMetrics} />
      <DeliverablesCards deliverables={deliverables} />
      <WorkflowProcess process={process} />
      <PremiumSection title="What Our Clients Achieve"><p>Reduced construction errors, precise cost estimation, and smooth regulatory approvals.</p></PremiumSection>
      <IndustryShowcaseSection items={["Residential development", "Commercial infrastructure", "Industrial projects"]} />
      <WhyChooseIdeographersPanel content="Our working drawings are the technical engine of your project. We ensure every line drawn is backed by engineering logic and construction feasibility." />
      <FAQSection faqs={faqs} />
      <PremiumCTA title="Need precise technical documentation?" buttonText="Get Blueprints Consultation" />
    </>
  );
};
export default ArchitectureWorkingDrawings;
