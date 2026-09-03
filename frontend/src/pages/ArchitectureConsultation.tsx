import React from 'react';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';
import { PremiumHero, AuthorityStrip, DeliverablesCards, WorkflowProcess, PremiumCTA, WhyChooseIdeographersPanel, FAQSection, PremiumSection, IndustryShowcaseSection } from '../components/premium';

const ArchitectureConsultation: React.FC = () => {
  const trustMetrics = [{ label: "Projects Advised", value: "200+" }, { label: "Project Success", value: "98%" }, { label: "Cost Savings", value: "15%" }, { label: "Client Satisfaction", value: "100%" }];
  const deliverables = ["Strategic Project Assessment", "Feasibility & Zoning Reports", "Design Concept Validation", "Risk Management Plans"];
  const process = ["Client Needs & Goal Definition", "Site & Context Assessment", "Strategic Options Analysis", "Actionable Recommendation Report"];
  const faqs = [{ question: "How does consultation save costs?", answer: "We identify project risks early, optimize planning, and prevent costly design revisions before construction begins." }];
  return (
    <>
      <SEO 
        title="Architectural Consultancy Services | Ideographers" 
        description="Get strategic, data-driven architectural advice to de-risk projects, optimize potential, and ensure design success. Partner with our experts."
        canonical="/services/architecture/architectural-consultation"
        ogTitle="Architectural Consultancy Services | Ideographers"
        ogDescription="Get strategic, data-driven architectural advice to de-risk projects, optimize potential, and ensure design success. Partner with our experts."
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Architecture', path: '/services/architecture' }, { name: 'Architectural Consultation', path: '/services/architecture/architectural-consultation' }]} />
      <ServiceSchema name="Architectural Consultation" description="Expert architectural guidance and strategic project planning." />
      <PremiumHero title="Architectural Consultancy" description="Empowering developers and homeowners with strategic, data-driven architectural advice to de-risk projects, optimize potential, and ensure design success." />
      <AuthorityStrip metrics={trustMetrics} />
      <DeliverablesCards deliverables={deliverables} />
      <WorkflowProcess process={process} />
      <PremiumSection title="What Our Clients Achieve"><p>Informed decision-making, reduced project risk, and maximized development potential.</p></PremiumSection>
      <IndustryShowcaseSection items={["Real estate planning", "Large-scale infrastructure", "Luxury developments"]} />
      <WhyChooseIdeographersPanel content="Our consultancy is built on years of experience. We provide the clarity and expertise you need to navigate the complexities of architectural development." />
      <FAQSection faqs={faqs} />
      <PremiumCTA title="Need expert architectural guidance?" buttonText="Schedule Consultation" />
    </>
  );
};
export default ArchitectureConsultation;
