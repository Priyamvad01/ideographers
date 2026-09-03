import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Accordion, Container, Section, Button, SEO } from '../ui';
import { Breadcrumbs } from '../navigation/Breadcrumbs';
import type { BreadcrumbItem } from '../navigation/Breadcrumbs';

interface ServicePageTemplateProps {
  title: string;
  description: string;
  overview: {
    title: string;
    content: string;
  };
  trustMetrics?: { label: string; value: string }[];
  features: string[];
  benefits: string[];
  deliverables?: string[];
  process: string[];
  projectOutcomes?: string[];
  industryApplications?: string[];
  whyChooseUs: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaButtonText: string;
  breadcrumbs?: BreadcrumbItem[];
  seo?: { title: string; description: string };
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  description,
  overview,
  trustMetrics,
  features,
  benefits,
  deliverables,
  process,
  projectOutcomes,
  industryApplications,
  whyChooseUs,
  faqs,
  ctaTitle,
  ctaButtonText,
  breadcrumbs,
  seo,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {seo && <SEO title={seo.title} description={seo.description} />}
    <Section className="py-16">
      <Container>
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">{title}</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">{description}</p>
        </div>

        {/* Breadcrumbs */}
        {breadcrumbs && (
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        {/* Overview */}
        <div className="mb-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold mb-4">{overview.title}</h2>
          <p className="text-lg text-gray-600">{overview.content}</p>
        </div>

        {/* Trust Metrics */}
        {trustMetrics && (
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {trustMetrics.map((metric, i) => (
              <div key={i} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm text-center">
                <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Features & Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <span className="mr-3 text-primary">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Business Benefits</h2>
            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <span className="mr-3 text-primary">✓</span> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverables */}
        {deliverables && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What You Receive</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {deliverables.map((item, i) => (
                <div key={i} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process */}
        <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
                {process.map((step, i) => (
                    <div key={i} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary mb-4">{i + 1}</div>
                        <p className="text-gray-700">{step}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Project Outcomes */}
        {projectOutcomes && (
          <div className="mb-16 p-10 bg-gray-900 text-white rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Outcomes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projectOutcomes.map((outcome, i) => (
                <p key={i} className="text-lg text-gray-300">✓ {outcome}</p>
              ))}
            </div>
          </div>
        )}

        {/* Industry Applications */}
        {industryApplications && (
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Industry Applications</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {industryApplications.map((app, i) => (
                        <span key={i} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700">{app}</span>
                    ))}
                </div>
            </div>
        )}

        {/* Why Choose Us */}
        <div className="mb-16 p-10 bg-primary/5 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Ideographers</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">{whyChooseUs}</p>
        </div>

        {/* FAQ */}
        <div className="mb-16">
            <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
            <Accordion items={faqs.map((faq, i) => ({ id: `${i}`, title: faq.question, content: faq.answer }))} />
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-900 p-12 rounded-2xl text-white">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">{ctaTitle}</h2>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg" onClick={() => navigate('/contact')}>{ctaButtonText}</Button>
        </div>
      </Container>
    </Section>
    </>
  );
};
