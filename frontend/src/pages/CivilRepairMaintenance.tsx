import React from 'react';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';
import { PremiumHero, AuthorityStrip, DeliverablesCards, WorkflowProcess, PremiumCTA, WhyChooseIdeographersPanel, FAQSection, PremiumSection } from '../components/premium';

const CivilRepairMaintenance: React.FC = () => {
  const trustMetrics = [{ label: "Assets Maintained", value: "400+" }, { label: "Downtime Reduced", value: "40%" }, { label: "Structural Reliability", value: "100%" }, { label: "Client Satisfaction", value: "100%" }];
  const deliverables = ["Structural Integrity Audits", "Preventive Maintenance Plans", "Concrete/Steel Repair", "Surface Restoration"];
  const process = ["Site & Damage Assessment", "Repair Strategy Development", "Execution & Restoration", "Post-Repair Quality Audit"];
  const faqs = [{ question: "Do you offer emergency repairs?", answer: "Yes, we prioritize critical structural repairs with accelerated response protocols." }];
  return (
    <>
      <SEO 
        title="Civil Repair & Asset Maintenance | Ideographers" 
        description="Extend the life and performance of your physical assets through our expert maintenance, structural reinforcement, and restoration services." 
        canonical="/services/civil-engineering/repair-maintenance"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Civil Engineering', path: '/services/civil-engineering' }, { name: 'Repair & Maintenance', path: '/services/civil-engineering/repair-maintenance' }]} />
      <ServiceSchema name="Repair & Maintenance" description="Expert civil repair, structural reinforcement, and asset maintenance services." />
      <PremiumHero title="Civil Repair & Maintenance" description="We extend the life and performance of your physical assets through proactive maintenance, structural reinforcement, and high-quality restoration services." />
      <AuthorityStrip metrics={trustMetrics} />
      <DeliverablesCards deliverables={deliverables} />
      <WorkflowProcess process={process} />
      <PremiumSection title="What Our Clients Achieve"><p>Asset longevity, reduced long-term repair costs, and restored structural confidence.</p></PremiumSection>
      <PremiumSection title="Industry Applications"><p>Commercial facilities, residential complexes, and industrial warehouses.</p></PremiumSection>
      <WhyChooseIdeographersPanel content="We don't just repair; we revitalize. Our maintenance services ensure your assets continue to serve your business objectives for decades." />
      <FAQSection faqs={faqs} />
      <PremiumCTA title="Ready to restore your asset's performance?" buttonText="Schedule Maintenance Assessment" />
    </>
  );
};
export default CivilRepairMaintenance;
