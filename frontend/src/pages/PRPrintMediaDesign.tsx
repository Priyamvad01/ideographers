import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';

const PRPrintMediaDesign: React.FC = () => {
  return (
    <>
      <SEO 
        title="Print Media Design Services | Ideographers" 
        description="Elevate your physical brand presence with high-impact print media design. From brochures to banners, we create tangible brand experiences that leave a lasting impression."
        canonical="/pr-print-media-design"
        ogTitle="Print Media Design Services | Ideographers"
        ogDescription="Elevate your physical brand presence with high-impact print media design. From brochures to banners, we create tangible brand experiences that leave a lasting impression."
        ogType="website"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Print Media Design', path: '/pr-print-media-design' }]} />
      <ServiceSchema name="Print Media Design" description="Elevate your physical brand presence with high-impact print media design." />
      <ServicePageTemplate
        title="Print Media Design"
        description="Elevate your physical brand presence with high-impact print media design. From brochures to banners, we create tangible brand experiences that leave a lasting impression."
        overview={{
          title: "Tangible Brand Storytelling",
          content: "Print remains a powerful marketing tool. We design professional print materials that communicate your value effectively, ensuring a seamless bridge between your digital and physical brand presence."
        }}
        features={[
          "Professional brochures, catalogs, and flyers",
          "Large-format banner and signage design",
          "Corporate profiles and annual reports",
          "Marketing collateral (business cards, folders)"
        ]}
        benefits={[
          "High tactile brand impact",
          "Professional representation at events",
          "Clear communication of complex information",
          "Memorable physical brand touchpoints"
        ]}
        process={[
          "Understanding print usage and distribution",
          "Strategic content and layout design",
          "Pre-press check and material selection guidance",
          "Final production-ready file export"
        ]}
        whyChooseUs="We understand the technical requirements of print media. Our designs are optimized for high-quality production, ensuring your physical assets look as sharp as your digital ones."
        faqs={[
          { question: "Do you manage printing?", answer: "We provide print-ready files and can provide guidance on selecting printing vendors." },
          { question: "What file formats are provided?", answer: "We provide high-resolution, print-ready PDF files with necessary bleed and marks." }
        ]}
        ctaTitle="Ready to elevate your print materials?"
        ctaButtonText="Start Print Project"
      />
    </>
  );
};

export default PRPrintMediaDesign;
