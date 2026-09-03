import React from 'react';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';
import { PremiumHero, AuthorityStrip, DeliverablesCards, WorkflowProcess, PremiumCTA, WhyChooseIdeographersPanel, FAQSection, PremiumSection } from '../components/premium';

const CivilExecutionDevelopment: React.FC = () => {
  const trustMetrics = [{ label: "Projects Built", value: "250+" }, { label: "Schedule Adherence", value: "98%" }, { label: "Safety Record", value: "100%" }, { label: "Client Satisfaction", value: "99%" }];
  const deliverables = ["Construction Management", "Site Supervision", "Quality Control Reports", "Resource Coordination"];
  const process = ["Execution Planning", "Resource & Site Setup", "Supervised Construction", "Quality Audit & Handover"];
  const faqs = [{ question: "How do you control quality?", answer: "We implement rigorous on-site quality control audits at every construction milestone." }];
  return (
    <>
      <SEO 
        title="Civil Construction Management & Development | Ideographers" 
        description="Bring your civil projects to life with meticulous construction management, ensuring on-time delivery and structural excellence." 
        canonical="/services/civil-engineering/project-supervision"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Civil Engineering', path: '/services/civil-engineering' }, { name: 'Project Supervision', path: '/services/civil-engineering/project-supervision' }]} />
      <ServiceSchema name="Project Supervision" description="Expert civil construction management and project supervision services." />
      <PremiumHero title="Expert Execution & Development" description="We bring your civil projects to life with meticulous construction management, ensuring on-time delivery, structural excellence, and uncompromising safety standards." />
      <AuthorityStrip metrics={trustMetrics} />
      <DeliverablesCards deliverables={deliverables} />
      <WorkflowProcess process={process} />
      <PremiumSection title="What Our Clients Achieve"><p>On-time project delivery, structural perfection, and minimized construction-related risks.</p></PremiumSection>
      <PremiumSection title="Industry Applications"><p>Infrastructure construction, commercial builds, and residential developments.</p></PremiumSection>
      <WhyChooseIdeographersPanel content="Our execution teams are focused on precision. We manage the complexity of the construction site so you don't have to." />
      <FAQSection faqs={faqs} />
      <PremiumCTA title="Ready to break ground on your project?" buttonText="Schedule Execution Support" />
    </>
  );
};
export default CivilExecutionDevelopment;
