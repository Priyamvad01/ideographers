import React from 'react';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';
import { PremiumHero, AuthorityStrip, DeliverablesCards, WorkflowProcess, PremiumCTA, WhyChooseIdeographersPanel, FAQSection, PremiumSection, IndustryShowcaseSection } from '../components/premium';

const ArchitectureExterior: React.FC = () => {
  const trustMetrics = [{ label: "Facade Designs", value: "120+" }, { label: "Curb Appeal Gain", value: "50%" }, { label: "Material Efficiency", value: "20%" }, { label: "Client Satisfaction", value: "99%" }];
  const deliverables = ["Facade Concept Design", "Material Palette Selection", "Lighting Design Plans", "Exterior Details & Sections"];
  const process = ["Site & Context Analysis", "Facade Concept Development", "Technical Material Detailing", "Design Implementation Oversight"];
  const faqs = [{ question: "Do you design sustainable facades?", answer: "Yes, we integrate sun-shading, thermally efficient materials, and natural ventilation strategies into exterior designs." }];
  return (
    <>
      <SEO 
        title="Exterior Architecture & Facade Design | Ideographers" 
        description="Define your building's architectural character through compelling, sustainable facade design and masterfully balanced material usage. Expert exterior design."
        canonical="/services/architecture/exterior-design"
        ogTitle="Exterior Architecture & Facade Design | Ideographers"
        ogDescription="Define your building's architectural character through compelling, sustainable facade design and masterfully balanced material usage. Expert exterior design."
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Architecture', path: '/services/architecture' }, { name: 'Exterior Design', path: '/services/architecture/exterior-design' }]} />
      <ServiceSchema name="Exterior Design" description="Expert architectural facade design and material specification services." />
      <PremiumHero title="Distinguished Exterior Architecture" description="We define the architectural character of your building through compelling facade design, masterfully balancing material texture, light, and proportion." />
      <AuthorityStrip metrics={trustMetrics} />
      <DeliverablesCards deliverables={deliverables} />
      <WorkflowProcess process={process} />
      <PremiumSection title="What Our Clients Achieve"><p>Signature building aesthetics that significantly enhance curb appeal and property market value.</p></PremiumSection>
      <IndustryShowcaseSection items={["Residential facades", "Commercial landmarks", "Institutional exteriors"]} />
      <WhyChooseIdeographersPanel content="Our facade designs are a testament to architectural storytelling. We treat the exterior not just as a skin, but as the building's defining identity." />
      <FAQSection faqs={faqs} />
      <PremiumCTA title="Ready to define your building's character?" buttonText="Schedule Consultation" />
    </>
  );
};
export default ArchitectureExterior;
