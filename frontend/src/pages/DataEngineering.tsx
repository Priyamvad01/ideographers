import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';

const DataEngineering: React.FC = () => {
  return (
    <>
      <SEO 
        title="Data Engineering & Warehousing Services | Ideographers" 
        description="Transform raw data into a reliable, scalable asset with our high-performance data pipelines and warehousing solutions."
        canonical="/data-engineering"
        ogTitle="Data Engineering & Warehousing Services | Ideographers"
        ogDescription="Transform raw data into a reliable, scalable asset with our high-performance data pipelines and warehousing solutions."
        ogType="website"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Data Engineering', path: '/data-engineering' }]} />
      <ServiceSchema name="Advanced Data Engineering & Warehousing" description="Transform raw data into a reliable, scalable asset. We design and build high-performance data pipelines, warehouses, and integration systems." />
      <ServicePageTemplate
        title="Advanced Data Engineering & Warehousing"
      description="Transform raw data into a reliable, scalable asset. We design and build high-performance data pipelines, warehouses, and integration systems."
      overview={{
        title: "Unlocking Business Intelligence through Data",
        content: "Data is your most valuable business asset, but only if it's accessible, clean, and structured. Our data engineering services focus on building robust infrastructure that captures, transforms, and stores your data, providing the foundation for analytics, reporting, and AI-driven insights."
      }}
      features={[
        "Custom Data Architecture Design & Strategy",
        "Robust ETL/ELT Pipeline Development",
        "Modern Data Warehousing & Lakehouse Solutions",
        "Real-Time Data Streaming & Processing",
        "Data Quality Management & Cleaning",
        "Secure Data Integration & API Connectivity"
      ]}
      benefits={[
        "Single Source of Truth for Enterprise Data",
        "Accelerated Time-to-Insight for Business Analytics",
        "Highly Scalable Infrastructure for Growing Data Needs",
        "Improved Data Accuracy & Compliance Standards"
      ]}
      process={[
        "Requirement Analysis & Data Strategy",
        "Data Architecture Design & Modeling",
        "Pipeline Development & Infrastructure Setup",
        "Validation, Testing & Performance Tuning"
      ]}
      whyChooseUs="We build data systems that are not just performant today but extensible for tomorrow's analytics requirements, ensuring security, consistency, and reliability across your entire organization."
      faqs={[
        {
          question: "What types of data sources can you integrate?",
          answer: "We have experience integrating data from diverse sources, including enterprise databases, SaaS platforms, cloud storage, third-party APIs, and real-time streaming services."
        },
        {
          question: "How do you ensure data security and compliance?",
          answer: "We implement rigorous data governance policies, utilizing encryption at rest and in transit, secure access controls, and auditing tools to ensure compliance with relevant standards."
        },
        {
          question: "Can you help with data migration between warehouses?",
          answer: "Yes, we handle complex data migration projects, ensuring data integrity, minimal downtime, and proper validation during the transition to new data warehouse architectures."
        },
        {
          question: "How do you handle real-time data streaming?",
          answer: "We leverage modern technologies like Apache Kafka or cloud-native streaming services to ingest and process data in real-time for immediate analysis and decision-making."
        }
      ]}
      ctaTitle="Ready to turn your data into insights?"
      ctaButtonText="Talk to a Data Expert"
    />
    </>
  );
};

export default DataEngineering;
