import React from 'react';
import { ServicePageTemplate } from '../../../components/common';

const MunicipalDrawingApproval: React.FC = () => (
  <ServicePageTemplate
    title="Municipal Drawing & Approval Support"
    description="We simplify the complex regulatory process by preparing compliant municipal drawings and managing your approval submissions from start to finish."
    seo={{ title: 'Municipal Drawing & Approval Support', description: 'We simplify the complex regulatory process by preparing compliant municipal drawings and managing your approval submissions from start to finish.' }}
    overview={{
      title: "Navigating Regulatory Approval with Ease",
      content: "Obtaining municipal approval is a critical, yet often daunting, phase of construction. We ensure your documentation is fully compliant with local bylaws, reducing submission time and avoiding costly delays."
    }}
    features={[
      "Regulatory-Compliant Drawing Sets",
      "Bylaw & Zoning Code Expertise",
      "Submission Coordination & Follow-up",
      "Objection Handling & Technical Clarification"
    ]}
    benefits={[
      "Reduced time-to-approval for your projects",
      "Elimination of costly redesigns due to non-compliance",
      "Professional representation before regulatory bodies",
      "Stress-free regulatory navigation"
    ]}
    process={[
      "Local Bylaw Analysis",
      "Drafting Approval-Ready Documentation",
      "Submission & Liaison Support",
      "Review & Final Approval Handling"
    ]}
    whyChooseUs="Our deep knowledge of local municipal regulations and established relationships allow us to navigate the approval bureaucracy efficiently, keeping your project timeline on track."
    faqs={[
      { question: "What drawings are required for approval?", answer: "Typically site plans, floor plans, elevations, and structural summaries, all customized to local municipal checklists." },
      { question: "Do you guarantee approval?", answer: "We guarantee that all documentation provided is 100% compliant with local bylaws, providing the highest probability of prompt approval." }
    ]}
    ctaTitle="Ready to secure your project approval?"
    ctaButtonText="Start Approval Process"
  />
);

export default MunicipalDrawingApproval;
