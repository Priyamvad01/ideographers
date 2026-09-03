import React from 'react';
import { ServicePageTemplate } from '../../../components/common';

const AutoCADDrafting: React.FC = () => (
  <ServicePageTemplate
    title="Precision AutoCAD Drafting Services"
    description="We provide high-precision, standards-compliant AutoCAD drafting to transform architectural concepts into flawless construction-ready blueprints."
    seo={{ title: 'Precision AutoCAD Drafting Services', description: 'We provide high-precision, standards-compliant AutoCAD drafting to transform architectural concepts into flawless construction-ready blueprints.' }}
    overview={{
      title: "Technical Accuracy at Every Scale",
      content: "AutoCAD drafting is the foundation of structural accuracy. We convert design concepts into meticulous technical schematics, ensuring compliance with building codes and facilitating smooth construction workflows."
    }}
    features={[
      "Professional 2D & 3D CAD Drafting",
      "Construction-Ready Blueprint Generation",
      "Sketch-to-Digital Precision Conversion",
      "Standardized Layer & Dimension Adherence"
    ]}
    benefits={[
      "Minimized construction rework through drawing accuracy",
      "Faster regulatory approval via standards compliance",
      "Clear, readable documentation for on-site execution",
      "Optimized structural planning for cost efficiency"
    ]}
    process={[
      "Project Requirements & Standardization Analysis",
      "Initial Drafting & Conceptual Layout",
      "Technical Detailing & Dimensional Accuracy Review",
      "Final Cleanup, Quality Audit & File Delivery"
    ]}
    whyChooseUs="Our team of drafting specialists leverages deep architectural and structural knowledge to ensure your technical drawings are not only precise but optimized for buildability and compliance."
    faqs={[
      { question: "What formats do you deliver?", answer: "We deliver industry-standard DWG, DXF, and PDF formats, tailored to your required layering and drafting standards." },
      { question: "Do you offer sketch conversion?", answer: "Yes, we specialize in converting hand-drawn concepts or site measurements into professional-grade CAD documentation." }
    ]}
    ctaTitle="Ready to finalize your technical designs?"
    ctaButtonText="Request Drafting Services"
  />
);

export default AutoCADDrafting;
