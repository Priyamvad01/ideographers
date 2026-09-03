import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO } from '../components/ui';

const WebsiteDevelopment: React.FC = () => {
  return (
    <>
      <SEO 
        title="Professional Website Development | Ideographers" 
        description="We craft high-performance, responsive, and secure websites tailored to your unique business requirements to elevate your digital presence."
        canonical="/website-development"
        ogTitle="Professional Website Development | Ideographers"
        ogDescription="We craft high-performance, responsive, and secure websites tailored to your unique business requirements to elevate your digital presence."
        ogType="website"
      />
      <ServicePageTemplate
        title="Professional Website Development"
        description="We craft high-performance, responsive, and secure websites tailored to your unique business requirements to elevate your digital presence."
        overview={{ title: "Transforming Ideas into Digital Experiences", content: "Our expert team leverages cutting-edge technologies to build scalable, user-centric websites that drive engagement and convert visitors into loyal customers. From sleek marketing sites to complex web applications, we deliver excellence." }}
        features={["Responsive Design (Mobile-First)", "Custom CMS Development", "SEO-Optimized Architecture", "Performance Tuning & Speed Optimization"]}
        benefits={["Increased Brand Credibility", "Higher User Engagement & Conversion", "Scalable Infrastructure for Growth", "Full Ownership & Flexibility"]}
        process={["Requirements Gathering & Strategy", "UI/UX Design & Prototyping", "Agile Development & QA", "Deployment & Ongoing Support"]}
        whyChooseUs="At Ideographers, we combine aesthetic design with robust engineering, ensuring your website not only looks professional but performs optimally under any load."
        faqs={[
          { question: "What is your typical development timeline?", answer: "Timelines vary by project scope, but we prioritize efficient delivery through our Agile methodology, typically ranging from 4-12 weeks." },
          { question: "Do you offer post-launch maintenance?", answer: "Yes, we provide comprehensive support and maintenance packages to keep your website secure and updated." },
          { question: "What is your process for SEO optimization?", answer: "We implement best practices from the start, including semantic HTML structure, fast page load speeds, and optimized meta-data to boost search rankings." },
          { question: "Can I manage the website content myself?", answer: "Yes, we integrate user-friendly Content Management Systems (CMS) tailored to your needs, giving you full control to update your content easily." }
        ]}
        ctaTitle="Ready to elevate your online presence?"
        ctaButtonText="Contact Our Experts"
      />
    </>
  );
};

export default WebsiteDevelopment;
