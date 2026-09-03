import React from 'react';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';
import { PremiumHero, AuthorityStrip, DeliverablesCards, WorkflowProcess, PremiumCTA, WhyChooseIdeographersPanel, FAQSection, PremiumSection, IndustryShowcaseSection } from '../components/premium';

const ArchitectureRenovation: React.FC = () => {
  const trustMetrics = [{ label: "Renovations", value: "90+" }, { label: "Structural Integrity", value: "100%" }, { label: "Value Appreciation", value: "20%" }, { label: "Client Satisfaction", value: "98%" }];
  const deliverables = ["Existing Condition Assessment", "Renovation & Retrofit Planning", "Structural Strengthening Plans", "Modern Amenity Integration"];
  const process = ["Site & Structural Survey", "Adaptive Re-use Strategy", "Renovation Blueprinting", "Construction Oversight"];
  const faqs = [{ question: "Do you renovate historical buildings?", answer: "Yes, we prioritize heritage conservation alongside modern upgrades." }];
  return (
    <>
      <SEO title="Architectural Renovation & Adaptive Re-use | Ideographers" description="Breathe new life into your structures with our renovation services, blending historical character with modern performance." canonical="/services/architecture/renovation-design" />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Architecture', path: '/services/architecture' }, { name: 'Renovation Design', path: '/services/architecture/renovation-design' }]} />
      <ServiceSchema name="Renovation Design" description="Expert architectural renovation, retrofit, and adaptive re-use services." />
      <PremiumHero title="Renovation & Adaptive Re-use" description="We breathe new life into existing structures through thoughtful renovation, blending historical character with modern performance and functional requirements." />
      <AuthorityStrip metrics={trustMetrics} />
      <DeliverablesCards deliverables={deliverables} />
      <WorkflowProcess process={process} />
      <PremiumSection title="What Our Clients Achieve"><p>Extended building lifespan, modernized functionality, and significantly improved property value.</p></PremiumSection>
      <IndustryShowcaseSection items={["Heritage conservation", "Office retrofits", "Residential upgrades"]} />
      <WhyChooseIdeographersPanel content="We see opportunity in existing structures. Our renovation approach is rooted in careful analysis to ensure new additions enhance, rather than disrupt, the original intent." />
      <FAQSection faqs={faqs} />
      <PremiumCTA title="Ready to reinvent your space?" buttonText="Schedule Renovation Consultation" />
    </>
  );
};
export default ArchitectureRenovation;
