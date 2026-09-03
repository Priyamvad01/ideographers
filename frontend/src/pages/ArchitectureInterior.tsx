import React from 'react';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';
import { 
  PremiumHero, 
  AuthorityStrip, 
  DeliverablesCards, 
  WorkflowProcess, 
  PremiumCTA, 
  WhyChooseIdeographersPanel, 
  FAQSection,
  PremiumSection,
  IndustryShowcaseSection
} from '../components/premium';

const ArchitectureInterior: React.FC = () => {
  const trustMetrics = [{ label: "Spaces Designed", value: "300+" }, { label: "Spatial Gain", value: "30%" }, { label: "Design Award Wins", value: "5" }, { label: "Client Satisfaction", value: "100%" }];
  const deliverables = ["Interior Conceptual Design", "Furniture & Layout Plans", "Lighting & Material Schemes", "Custom Joinery Details"];
  const process = ["User Needs Assessment", "Conceptual Design Development", "Detailed Interior Documentation", "Final Execution Supervision"];
  const faqs = [{ question: "Do you offer smart home interiors?", answer: "Yes, we integrate smart lighting, HVAC control, and automated security into our interior designs." }];

  return (
    <>
      <SEO title="Interior Architectural Design | Ideographers" description="Craft immersive, luxurious interiors that balance aesthetic beauty with high-functional ergonomics." canonical="/services/architecture/interior-space-planning" />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Architecture', path: '/services/architecture' }, { name: 'Interior Space Planning', path: '/services/architecture/interior-space-planning' }]} />
      <ServiceSchema name="Interior Space Planning" description="Expert interior architectural design and space planning services." />
      <PremiumHero title="Exquisite Interior Architecture" description="We craft immersive interiors that balance sophisticated aesthetic beauty with intelligent, high-functional ergonomics." />
      <AuthorityStrip metrics={trustMetrics} />
      <DeliverablesCards deliverables={deliverables} />
      <WorkflowProcess process={process} />
      <PremiumSection title="What Our Clients Achieve"><p>Seamless, luxurious living and working environments that enhance daily life quality.</p></PremiumSection>
      <IndustryShowcaseSection items={["Residential luxury", "Corporate offices", "Hospitality interiors"]} />
      <WhyChooseIdeographersPanel content="Our interior approach balances structural knowledge with artistic sensibility, ensuring spaces are beautiful, durable, and ergonomic." />
      <FAQSection faqs={faqs} />
      <PremiumCTA title="Ready to redesign your interior?" buttonText="Schedule Interior Consultation" />
    </>
  );
};
export default ArchitectureInterior;
