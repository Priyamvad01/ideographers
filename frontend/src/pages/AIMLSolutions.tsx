import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';

const AIMLSolutions: React.FC = () => {
  return (
    <>
      <SEO 
        title="AI & Machine Learning Solutions | Ideographers" 
        description="Unlock actionable insights with our custom AI and Machine Learning models. Automate complex workflows and enhance decision-making."
        canonical="/services/it-services/ai-ml"
        ogTitle="AI & Machine Learning Solutions | Ideographers"
        ogDescription="Unlock actionable insights with our custom AI and Machine Learning models. Automate complex workflows and enhance decision-making."
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'IT Services', path: '/services/it-services' },
        { name: 'AI / ML', path: '/services/it-services/ai-ml' }
      ]} />
      <ServiceSchema 
        name="Innovative AI & Machine Learning Solutions" 
        description="Unlock actionable insights and automate complex workflows with tailored artificial intelligence and machine learning models." 
      />
      <ServicePageTemplate
        title="Innovative AI & Machine Learning Solutions"
      description="Unlock actionable insights and automate complex workflows with tailored artificial intelligence and machine learning models."
      overview={{
        title: "Harnessing the Power of Intelligent Systems",
        content: "From predictive analytics and computer vision to natural language processing and custom automation, our AI/ML solutions are designed to solve real-world business challenges. We don't just build models; we integrate intelligent systems that enhance decision-making, increase efficiency, and provide a competitive edge."
      }}
      features={[
        "Custom Machine Learning Model Development",
        "Predictive Analytics & Forecasting",
        "Natural Language Processing (NLP) Solutions",
        "Computer Vision & Image Recognition Systems",
        "Intelligent Process Automation (IPA)",
        "Recommendation Engines & Personalization"
      ]}
      benefits={[
        "Automated Decision-Making Processes",
        "Deep Data-Driven Insights & Forecasting",
        "Increased Operational Productivity & Efficiency",
        "Enhanced User Experiences via Personalization"
      ]}
      process={[
        "Problem Identification & Data Assessment",
        "Model Design, Training & Validation",
        "System Integration & Prototype Development",
        "Deployment, Continuous Monitoring & Tuning"
      ]}
      whyChooseUs="Ideographers bridges the gap between complex research-level AI and practical business application, ensuring models are accurate, scalable, and fully integrated into your workflows."
      faqs={[
        {
          question: "How do you ensure AI model accuracy?",
          answer: "We follow a rigorous process involving data cleaning, feature engineering, cross-validation, and continuous retraining with new data to ensure models maintain high accuracy over time."
        },
        {
          question: "Can you help automate our existing workflows?",
          answer: "Yes, we analyze your manual workflows and implement intelligent automation that reduces errors, speeds up processing, and allows your team to focus on strategic initiatives."
        },
        {
          question: "What industries do you serve with AI?",
          answer: "We provide AI solutions across various industries, including healthcare, finance, retail, manufacturing, and education, tailoring models to specific industry needs."
        },
        {
          question: "How do you handle AI ethics and bias?",
          answer: "We prioritize ethical AI by actively monitoring models for bias, ensuring data diversity in training sets, and maintaining transparency in how models make predictions."
        }
      ]}
      ctaTitle="Future-proof your business with AI"
      ctaButtonText="Talk to an AI Specialist"
    />
    </>
  );
};

export default AIMLSolutions;
