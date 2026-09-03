import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO } from '../components/ui';

const IoTSolutions: React.FC = () => {
  return (
    <>
      <SEO 
        title="Intelligent IoT Solutions | Ideographers" 
        description="Connect, automate, and optimize your physical assets with our secure, real-time IoT ecosystems that drive operational efficiency."
        canonical="/iot-solutions"
        ogTitle="Intelligent IoT Solutions | Ideographers"
        ogDescription="Connect, automate, and optimize your physical assets with our secure, real-time IoT ecosystems that drive operational efficiency."
        ogType="website"
      />
      <ServicePageTemplate
        title="Intelligent IoT Solutions"
      description="Connect, automate, and optimize your physical assets with secure, real-time IoT ecosystems that drive operational efficiency."
      overview={{
        title: "Building Smart, Connected Environments",
        content: "We design and deploy end-to-end IoT solutions, from sensor selection and connectivity setup to intelligent data processing and intuitive dashboard visualization. Transform your machinery, infrastructure, and products into smart, data-driven assets."
      }}
      features={[
        "Custom Sensor Network & Device Integration",
        "Edge Computing & Real-Time Data Processing",
        "Secure Device Communication (MQTT, CoAP)",
        "Predictive Maintenance & Asset Tracking Systems",
        "Custom IoT Dashboard Development",
        "Automated Industrial Control & Monitoring"
      ]}
      benefits={[
        "Increased Operational Efficiency & Automation",
        "Real-Time Insights for Proactive Decision Making",
        "Significant Reduction in Downtime via Predictive Analytics",
        "Enhanced Asset Security & Lifecycle Management"
      ]}
      process={[
        "Requirement Analysis & Infrastructure Planning",
        "Hardware Integration & Connectivity Setup",
        "Data Pipeline & IoT Platform Development",
        "Testing, Deployment & Continuous Monitoring"
      ]}
      whyChooseUs="Ideographers provides end-to-end IoT expertise, ensuring that your devices not only connect reliably but transmit data securely, with actionable insights presented in real-time."
      faqs={[
        {
          question: "How do you ensure IoT device security?",
          answer: "We implement robust security measures, including device-level authentication, encrypted communication protocols, secure firmware updates, and network segmentation to prevent unauthorized access."
        },
        {
          question: "Can you help with legacy hardware retrofitting?",
          answer: "Yes, we specialize in retrofitting older industrial equipment with modern sensor suites to enable remote monitoring and smart automation without replacing expensive hardware."
        },
        {
          question: "What communication protocols do you support?",
          answer: "We support a wide range of protocols including MQTT, CoAP, HTTP, and LoRaWAN, depending on your device range, power constraints, and data bandwidth needs."
        },
        {
          question: "How do you handle real-time data processing?",
          answer: "We utilize edge computing to process time-sensitive data locally on devices, reducing latency and bandwidth, while sending summarized analytics to the cloud for deeper insight."
        }
      ]}
      ctaTitle="Ready to make your operations smart?"
      ctaButtonText="Talk to an IoT Specialist"
    />
    </>
  );
};

export default IoTSolutions;
