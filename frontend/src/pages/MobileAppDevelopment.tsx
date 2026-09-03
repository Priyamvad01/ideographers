import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO } from '../components/ui';

const MobileAppDevelopment: React.FC = () => {
  return (
    <>
      <SEO 
        title="Mobile App Development Services | Ideographers" 
        description="Engineer high-impact, user-centric mobile applications for iOS and Android platforms, driving engagement and business growth."
        canonical="/mobile-app-development"
        ogTitle="Mobile App Development Services | Ideographers"
        ogDescription="Engineer high-impact, user-centric mobile applications for iOS and Android platforms, driving engagement and business growth."
        ogType="website"
      />
      <ServicePageTemplate
        title="Elite Mobile App Development"
      description="We engineer high-impact, user-centric mobile applications for iOS and Android platforms, driving engagement and business growth."
      overview={{ title: "Empowering Your Mobile Strategy", content: "Our mobile solutions focus on seamless performance, intuitive UI/UX, and robust architecture to ensure your brand stands out in the competitive app marketplace. We turn concepts into top-tier mobile experiences." }}
      features={["Native & Cross-Platform Development", "Advanced UI/UX Design", "Secure Backend Integration", "Performance Monitoring & Analytics"]}
      benefits={["Enhanced Customer Interaction", "Higher Brand Retention Rates", "Seamless Offline Functionality", "Scalable Performance"]}
      process={["App Concept & Strategy", "Wireframing & Prototyping", "Rapid Agile Development", "Testing & App Store Deployment"]}
      whyChooseUs="Ideographers brings deep expertise in building apps that not only look stunning but deliver consistent performance under real-world usage conditions."
      faqs={[
        { question: "Do you develop for both iOS and Android?", answer: "Yes, we specialize in both native development and cross-platform solutions like React Native and Flutter." },
        { question: "Can you assist with App Store submission?", answer: "Absolutely, we guide you through the entire app store publishing process, ensuring full compliance with store guidelines." },
        { question: "How do you handle backend integration for mobile apps?", answer: "We develop secure, RESTful or GraphQL APIs that connect your mobile application to your existing backend systems or cloud infrastructure." },
        { question: "What is your approach to mobile UI/UX design?", answer: "We conduct user research, create wireframes, and design intuitive, high-fidelity interfaces that provide a delightful experience across various device screen sizes." }
      ]}
      ctaTitle="Launch your mobile strategy today"
      ctaButtonText="Start Your App Project"
    />
    </>
  );
};

export default MobileAppDevelopment;
