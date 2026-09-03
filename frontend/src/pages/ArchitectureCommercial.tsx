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

const ArchitectureCommercial: React.FC = () => {
  const trustMetrics = [
    { label: "Business Efficiency", value: "35%" },
    { label: "Projects Delivered", value: "150+" },
    { label: "Floor Optimization", value: "25%" },
    { label: "Client ROI", value: "High" }
  ];

  const deliverables = [
    "Commercial Master Planning & Site Analysis",
    "Functional Spatial Programming & Layouts",
    "Corporate Facade & Identity Integration",
    "Technical Documentation & Zoning Compliance",
    "MEP & Building System Coordination",
    "Construction Management Support"
  ];

  const process = [
    "Organizational Needs & Workflow Assessment",
    "Strategic Site Selection & Planning",
    "Conceptual Architectural Design Development",
    "Detailed Construction Documentation & Regulatory Approval"
  ];

  const faqs = [
    { question: "How do you optimize commercial space?", answer: "We focus on human-centric design, maximizing natural light, improving circulation paths, and designing modular spaces that adapt to changing business needs." },
    { question: "Do you handle large-scale commercial projects?", answer: "Yes, we have extensive experience managing complex, multi-functional commercial developments from planning to construction oversight." }
  ];

  return (
    <>
      <SEO 
        title="Commercial Architecture Services | Ideographers" 
        description="Engineer commercial spaces that empower productivity, enhance brand identity, and maximize operational ROI. Expert design for high-performance workplaces."
        canonical="/services/architecture/commercial-architecture"
        ogTitle="Commercial Architecture Services | Ideographers"
        ogDescription="Engineer commercial spaces that empower productivity, enhance brand identity, and maximize operational ROI. Expert design for high-performance workplaces."
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Architecture', path: '/services/architecture' }, { name: 'Commercial Architecture', path: '/services/architecture/commercial-architecture' }]} />
      <ServiceSchema name="Commercial Architecture" description="High-performance commercial architectural design services." />
      <PremiumHero title="Transformative Commercial Architecture" description="We engineer commercial spaces that empower productivity, enhance brand identity, and maximize operational ROI." />
      <AuthorityStrip metrics={trustMetrics} />
      <DeliverablesCards deliverables={deliverables} />
      <WorkflowProcess process={process} />
      <PremiumSection title="What Our Clients Achieve">
        <p>Operational excellence through optimized workflow, enhanced employee engagement, and a workspace that scales with business growth.</p>
      </PremiumSection>
      <IndustryShowcaseSection items={["Corporate offices", "Retail complexes", "Hospitality spaces designed for peak business performance"]} />
      <WhyChooseIdeographersPanel content="Ideographers merges business strategy with architectural innovation. Our commercial designs are engineered to be high-impact, brand-aligned workspaces that drive employee satisfaction and business productivity." />
      <FAQSection faqs={faqs} />
      <PremiumCTA title="Ready to upgrade your commercial infrastructure?" buttonText="Schedule Consultation" />
    </>
  );
};

export default ArchitectureCommercial;
