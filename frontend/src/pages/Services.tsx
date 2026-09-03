import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Section, Card, Button, SEO } from '../components/ui';
import { content } from '../content/company';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    { title: content.services.civil.title, description: content.services.civil.description, path: '/services/civil-landscaping' },
    { title: content.services.prBranding.title, description: content.services.prBranding.description, path: '/services/pr-branding' },
    { title: content.services.itServices.title, description: content.services.itServices.description, path: '/services/it-services' },
  ];

  return (
    <div className="bg-white">
      <SEO title="Our Services | Engineering, Architectural, Branding, IT" description="Explore our multidisciplinary services, including engineering, architectural design, branding, and technology solutions to drive your business growth." />
      {/* Hero */}
      <Section className="bg-gray-50 py-16 text-center sm:py-20 md:py-24">
        <Container>
          <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Our Professional Services</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">Multidisciplinary engineering, architecture, branding, and technology solutions tailored to drive business growth.</p>
        </Container>
      </Section>

      {/* Trust Metrics */}
      <Section className="py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[ { val: "500+", label: "Projects" }, { val: "10+", label: "Years Exp" }, { val: "100%", label: "Satisfaction" }, { val: "4", label: "Core Pillars" }].map((stat, i) => (
              <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <div className="text-2xl font-bold text-blue-600 sm:text-3xl">{stat.val}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((cat) => (
              <Card key={cat.title} className="p-8 flex flex-col hover:shadow-lg transition-shadow bg-white">
                <h2 className="text-2xl font-bold mb-4">{cat.title}</h2>
                <p className="text-gray-600 mb-8 flex-grow">{cat.description}</p>
                <Button variant="primary" onClick={() => navigate(cat.path)}>Explore Category</Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-20 text-center">
        <Container>
          <Card className="bg-blue-600 p-6 text-white sm:p-8 md:p-12">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Ready To Start Your Next Project?</h2>
            <Button className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => navigate('/contact')}>Get Consultation</Button>
          </Card>
        </Container>
      </Section>
    </div>
  );
};

export default Services;
