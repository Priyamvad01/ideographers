import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';

const PRPackagingDesign: React.FC = () => {
  return (
    <>
      <SEO 
        title="Packaging Design Services | Ideographers" 
        description="Your product deserves to stand out. We create innovative, functional packaging designs that grab shelf attention, tell your brand story, and drive purchasing decisions."
        canonical="/pr-packaging-design"
        ogTitle="Packaging Design Services | Ideographers"
        ogDescription="Your product deserves to stand out. We create innovative, functional packaging designs that grab shelf attention, tell your brand story, and drive purchasing decisions."
        ogType="website"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Packaging Design', path: '/pr-packaging-design' }]} />
      <ServiceSchema name="Packaging Design" description="Innovative and functional packaging design." />
      <ServicePageTemplate
        title="Packaging Design"
        description="Your product deserves to stand out. We create innovative, functional packaging designs that grab shelf attention, tell your brand story, and drive purchasing decisions."
        overview={{
          title: "Packaging That Performs",
          content: "Packaging is the silent salesman. We balance aesthetic appeal with practical considerations like material strength, cost-efficiency, and user experience to ensure your product succeeds in a crowded retail environment."
        }}
        features={[
          "Strategic shelf-impact design",
          "Custom structural packaging solutions",
          "Label design and product branding",
          "Regulatory and compliance information layout"
        ]}
        benefits={[
          "Increased retail sales and conversions",
          "Enhanced brand perception and value",
          "Improved product protection",
          "Clearer consumer communication"
        ]}
        process={[
          "Understanding product market and competitors",
          "Conceptualizing design and form factor",
          "Prototyping and shelf-impact testing",
          "Final production-ready file generation"
        ]}
        whyChooseUs="We blend creative vision with logistical expertise. Our packaging designs are created with mass production in mind, ensuring your final product looks identical to the initial design concept."
        faqs={[
          { question: "Do you handle structural design?", answer: "Yes, we design both the graphic elements and the form factor for your packaging." },
          { question: "Can you work with my existing printers?", answer: "Absolutely, our files are designed to be compatible with standard manufacturing processes." }
        ]}
        ctaTitle="Ready to make a shelf impact?"
        ctaButtonText="Start Packaging Project"
      />
    </>
  );
};

export default PRPackagingDesign;
