import React from 'react';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';
import { PremiumHero, AuthorityStrip, DeliverablesCards, WorkflowProcess, PremiumCTA, WhyChooseIdeographersPanel, FAQSection, PremiumSection } from '../components/premium';

const CivilDesignPlanning: React.FC = () => {
  const trustMetrics = [{ label: "Site Plans", value: "300+" }, { label: "Approval Rate", value: "100%" }, { label: "Land Optimization", value: "25%" }, { label: "Client Satisfaction", value: "99%" }];
  const deliverables = ["Topographical Analysis", "Master Site Planning", "Regulatory Submission Sets", "Infrastructure Layouts"];
  const process = ["Site Feasibility Analysis", "Layout Conceptualization", "Engineering Documentation", "Regulatory Liaison"];
  const faqs = [{ question: "How does planning benefit us?", answer: "Strategic planning ensures optimal land usage, regulatory compliance, and sets a sustainable foundation for all future development." }];
  return (
    <>
      <SEO 
        title="Strategic Civil Design & Site Planning | Ideographers" 
        description="Ensure optimal land utilization, regulatory compliance, and sustainable development with our strategic civil engineering and planning services." 
        canonical="/services/civil-engineering/site-layout-planning"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Civil Engineering', path: '/services/civil-engineering' }, { name: 'Site Layout Planning', path: '/services/civil-engineering/site-layout-planning' }]} />
      <ServiceSchema name="Site Layout Planning" description="Expert civil design, site planning, and land utilization services." />
      <PremiumHero title="Strategic Civil Design & Planning" description="We engineer the foundation of your project through strategic civil design and site planning, ensuring optimal land utilization, regulatory compliance, and sustainable development." />
      <AuthorityStrip metrics={trustMetrics} />
      <DeliverablesCards deliverables={deliverables} />
      <WorkflowProcess process={process} />
      <PremiumSection title="What Our Clients Achieve"><p>Optimized land value, accelerated project approvals, and a technically robust foundation for construction.</p></PremiumSection>
      <PremiumSection title="Industry Applications"><p>Urban development, residential townships, and industrial estates.</p></PremiumSection>
      <WhyChooseIdeographersPanel content="We combine engineering precision with urban planning expertise to ensure your site is planned for both immediate success and long-term viability." />
      <FAQSection faqs={faqs} />
      <PremiumCTA title="Ready to plan your land's future?" buttonText="Schedule Civil Consultation" />
    </>
  );
};
export default CivilDesignPlanning;
