import React from 'react';
import { ServicePageTemplate } from '../components/common';
import { SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';

const CloudServices: React.FC = () => {
  return (
    <>
      <SEO 
        title="Cloud Services & Infrastructure | Ideographers" 
        description="Migrate, scale, and optimize your operations with reliable cloud infrastructure, containerized deployments, and continuous automated pipelines." 
        canonical="/services/it-services/cloud"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'IT Services', path: '/services/it-services' },
        { name: 'Cloud', path: '/services/it-services/cloud' }
      ]} />
      <ServiceSchema 
        name="Next-Gen Cloud Services & Infrastructure" 
        description="Migrate, scale, and optimize your operations with reliable cloud infrastructure, containerized deployments, and continuous automated pipelines." 
      />
      <ServicePageTemplate
        title="Next-Gen Cloud Services & Infrastructure"
      description="Migrate, scale, and optimize your operations with reliable cloud infrastructure, containerized deployments, and continuous automated pipelines."
      overview={{
        title: "Scalable, Secure, and Cost-Efficient Cloud Ecosystems",
        content: "Empower your business with high-availability, fully automated cloud environments. From initial consulting and seamless migration to modern container orchestration and automated CI/CD deployments, we design and manage cloud architectures that ensure your services remain fast, secure, and always-on."
      }}
      features={[
        "Multi-Cloud Solutions (AWS, Azure, Google Cloud)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Container Orchestration (Docker & Kubernetes)",
        "Proactive Cloud Security & Access Auditing",
        "Continuous Integration & Deployment (CI/CD Pipelines)",
        "24/7 Managed Cloud Infrastructure & Support"
      ]}
      benefits={[
        "99.99% High Availability and Fault Tolerance",
        "Significant Cost Optimization & Efficient Scaling",
        "Accelerated Software Delivery via Automated Pipelines",
        "Comprehensive Data Backup & Disaster Recovery Setup"
      ]}
      process={[
        "Cloud Readiness & Architecture Assessment",
        "Infrastructure Blueprint & Security Planning",
        "Automated Environment Provisioning & Migration",
        "Performance Optimization & Continuous Monitoring"
      ]}
      whyChooseUs="Ideographers provides certified cloud architects who focus on both infrastructure efficiency and cloud spend optimization, ensuring you get maximum performance without unexpected costs."
      faqs={[
        {
          question: "How do you handle cloud security?",
          answer: "We implement strict security practices, including IAM (Identity and Access Management) policies, network isolation, VPC setups, data encryption at rest and in transit, and continuous security monitoring."
        },
        {
          question: "Can you help optimize our existing high cloud bills?",
          answer: "Yes, we offer comprehensive cost-optimization audits, identifying idle resources, suggesting serverless alternatives, and configuring automated scaling rules to drastically reduce monthly bills."
        },
        {
          question: "Do you support multi-cloud strategies?",
          answer: "Yes, we have deep expertise in designing and managing multi-cloud environments, ensuring interoperability and vendor neutrality across platforms like AWS, Azure, and GCP."
        },
        {
          question: "What is your approach to disaster recovery?",
          answer: "We design robust disaster recovery strategies, including automated backups, multi-region replication, and failover procedures to ensure business continuity in the event of an outage."
        }
      ]}
      ctaTitle="Ready to scale your business in the cloud?"
      ctaButtonText="Speak with a Cloud Architect"
    />
    </>
  );
};

export default CloudServices;
