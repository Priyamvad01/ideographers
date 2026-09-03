import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';

const APIDevelopment: React.FC = () => {
  return (
    <>
      <SEO 
        title="API Development & Integration Services | Ideographers" 
        description="Build secure, scalable, and documented APIs to enable seamless communication across your enterprise ecosystem. Partner with our experts for robust integrations."
        canonical="/services/it-services/api-development"
        ogTitle="API Development & Integration Services | Ideographers"
        ogDescription="Build secure, scalable, and documented APIs to enable seamless communication across your enterprise ecosystem. Partner with our experts for robust integrations."
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'IT Services', path: '/services/it-services' },
        { name: 'API Development', path: '/services/it-services/api-development' }
      ]} />
      <ServiceSchema 
        name="Secure API Development & Integration" 
        description="We build secure, scalable, and beautifully documented APIs that enable seamless communication, high-speed data exchange, and robust integration across your entire enterprise ecosystem." 
      />
      <ServicePageTemplate
        title="Secure API Development & Integration"
      description="We build secure, scalable, and beautifully documented APIs that enable seamless communication, high-speed data exchange, and robust integration across your entire enterprise ecosystem."
      overview={{
        title: "Powering Interconnectivity and Data Flow",
        content: "Modern digital systems require robust, secure, and fast pipelines to exchange data. Our expert API development services ensure that your web, mobile, and cloud platforms communicate in perfect harmony, reducing latency, enhancing data security, and enabling effortless third-party service integration."
      }}
      features={[
        "Custom REST & GraphQL API Design",
        "Robust Security (OAuth2, JWT, Rate Limiting)",
        "Microservices Architecture & Endpoint Optimization",
        "Automated Interactive Documentation (Swagger/OpenAPI)",
        "Third-Party API & Payment Gateway Integration",
        "API Versioning & Lifecycle Management"
      ]}
      benefits={[
        "Seamless Cross-Platform Connectivity",
        "Enhanced Enterprise Agility & Component Reusability",
        "Superior Performance & Sub-Second Latency",
        "Highly Secure Data Protection & Compliance Standards"
      ]}
      process={[
        "API Strategy & Architecture Design",
        "Secure Coding & Endpoint Implementation",
        "Automated Testing & Documentation",
        "Deployment, Gateway Setup & Optimization"
      ]}
      whyChooseUs="At Ideographers, we design APIs with a security-first mindset. Our endpoints are highly optimized, exhaustively tested under load, and self-documenting to allow external and internal teams to integrate with ease."
      faqs={[
        {
          question: "Do you specialize in REST, GraphQL, or both?",
          answer: "We design and develop both RESTful and GraphQL APIs, selecting the technology that best matches your client-side data fetching requirements and system architecture."
        },
        {
          question: "How do you ensure API security and data safety?",
          answer: "We implement industry-standard authentication (like JWT, OAuth2), SSL/TLS encryption, request validation, rate limiting, and regular security audits to prevent vulnerabilities and data leaks."
        },
        {
          question: "Can you provide automated documentation for my API?",
          answer: "Yes, we integrate tools like Swagger/OpenAPI to generate self-updating, interactive documentation that makes it easy for developers to understand and use your API endpoints."
        },
        {
          question: "How do you handle API versioning?",
          answer: "We implement robust versioning strategies to ensure that changes do not break existing client integrations, allowing for smooth updates and maintenance."
        }
      ]}
      ctaTitle="Ready to build secure, robust APIs for your business?"
      ctaButtonText="Consult Our API Experts"
    />
    </>
  );
};

export default APIDevelopment;
