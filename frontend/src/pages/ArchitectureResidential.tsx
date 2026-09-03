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
  TestimonialSection,
  IndustryShowcaseSection
} from '../components/premium';

const ArchitectureResidential: React.FC = () => {
  // ... (trustMetrics, deliverables, process, faqs)
  // [Retaining previous constants]
  const trustMetrics = [
    { label: "Years Experience", value: "15+" },
    { label: "Projects Delivered", value: "200+" },
    { label: "Energy Savings", value: "40%" },
    { label: "Client Satisfaction", value: "99%" }
  ];

  const deliverables = [
    "Detailed Architectural Concept & Floor Plans",
    "3D Visualization & Interior Material Mood Boards",
    "Comprehensive Construction Technical Drawings",
    "Structural, MEP, & Sustainability Specifications",
    "Municipal Approval & Permit Documentation",
    "Construction Oversight & Quality Audit Reports"
  ];

  const process = [
    "In-depth Lifestyle & Site Feasibility Analysis",
    "Conceptual Vision & Iterative 3D Modeling",
    "Comprehensive Construction & Technical Documentation",
    "Proactive Construction Administration & Quality Oversight"
  ];

  const faqs = [
    {
      question: "How do you integrate sustainability into residential design?",
      answer: "We utilize passive design techniques, energy-efficient material selection, smart home automation for energy management, and optimization of natural lighting and ventilation to minimize environmental impact and costs."
    },
    {
      question: "What is your approach to interior flow and space planning?",
      answer: "We conduct detailed lifestyle analysis to understand how you inhabit your home. Our planning focuses on intuitive transitions, maximizing usable square footage, and creating multipurpose areas that adapt to your evolving needs."
    },
    {
      question: "Do you provide turnkey architectural services?",
      answer: "Yes, we offer comprehensive services from initial concept and municipal approval drawings through to technical construction documentation and construction supervision."
    },
    {
      question: "How do you manage the renovation of existing historical homes?",
      answer: "We employ a preservation-first mindset, meticulously assessing the original structure while seamlessly integrating modern amenities and structural enhancements to ensure comfort without compromising the home's character."
    }
  ];

  return (
    <>
      <SEO 
        title="Bespoke Residential Architectural Design | Ideographers" 
        description="Craft exquisite residential sanctuaries that harmonize architectural elegance with high-performance functionality." 
        canonical="/services/architecture/residential-architecture"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Architecture', path: '/services/architecture' }, { name: 'Residential Architecture', path: '/services/architecture/residential-architecture' }]} />
      <ServiceSchema name="Residential Architecture" description="Bespoke residential architectural design and planning services." />
      <PremiumHero 
        title="Bespoke Residential Architectural Design"
        description="We craft exquisite residential sanctuaries that harmonize architectural elegance with high-performance functionality, transforming your unique vision into a sustainable and enduring home."
      />
      <PremiumSection title="Overview">
        <p>Expert residential architectural services tailored to your lifestyle and vision.</p>
      </PremiumSection>
      <AuthorityStrip metrics={trustMetrics} />
      <PremiumSection title="Key Features">
        <p>High-performance design, sustainable materials, and personalized space planning.</p>
      </PremiumSection>
      <PremiumSection title="Business Benefits">
        <p>Increased property value, energy efficiency, and long-term durability.</p>
      </PremiumSection>
      <DeliverablesCards deliverables={deliverables} />
      <WorkflowProcess process={process} />
      <PremiumSection title="What Our Clients Achieve">
        <p>Realized dream homes that perfectly align with their lifestyle and sustainability goals.</p>
      </PremiumSection>
      <IndustryShowcaseSection items={["Showcasing excellence in modern and traditional residential architecture."]} />
      <WhyChooseIdeographersPanel content="We bridge the gap between creative design and technical precision. Ideographers combines artisanal attention to detail with evidence-based engineering, ensuring your home is both a stunning masterpiece and a high-performance, comfortable living environment." />
      <FAQSection faqs={faqs} />
      <TestimonialSection />
      <PremiumCTA 
        title="Ready to begin your architectural journey?"
        buttonText="Request a Premium Architectural Consultation"
      />
    </>
  );
};

export default ArchitectureResidential;
