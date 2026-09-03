import React from 'react';
import { ServicePageTemplate } from '../../../components/common';

const StructuralDesign: React.FC = () => (
  <ServicePageTemplate
    title="Professional Structural Design & Engineering"
    description="We ensure your building stands strong with rigorous structural design that prioritizes safety, resilience, and cost-effective material usage."
    seo={{ title: 'Professional Structural Design & Engineering', description: 'We ensure your building stands strong with rigorous structural design that prioritizes safety, resilience, and cost-effective material usage.' }}
    overview={{
      title: "The Backbone of Your Construction",
      content: "A beautiful design means nothing without a strong structure. Our engineers focus on load-bearing calculations, seismic resistance, and material optimization to guarantee your project is fundamentally sound and compliant."
    }}
    features={[
      "Advanced Load-Bearing Analysis",
      "Seismic & Climate Resilience Design",
      "Optimized Material Usage & Cost Analysis",
      "Structural Integrity Certification"
    ]}
    benefits={[
      "Guaranteed structural safety and stability",
      "Optimized structural costs via precise engineering",
      "Compliance with rigorous building standards",
      "Long-term structural reliability and durability"
    ]}
    process={[
      "Structural Load Analysis",
      "Foundation & Frame Design",
      "Optimization & Compliance Check",
      "Certification & Final Documentation"
    ]}
    whyChooseUs="Our structural design philosophy is rooted in safety, durability, and efficiency. We ensure your construction project is built on the most solid engineering principles available."
    faqs={[
      { question: "Is structural design mandatory?", answer: "Yes, structural design is essential for safety, durability, and securing the necessary municipal building approvals." },
      { question: "Can you optimize my design for cost?", answer: "Yes, we focus heavily on load optimization and material efficiency to reduce construction costs while maintaining full safety standards." }
    ]}
    ctaTitle="Ready to engineer a safe structure?"
    ctaButtonText="Start Structural Design"
  />
);

export default StructuralDesign;
