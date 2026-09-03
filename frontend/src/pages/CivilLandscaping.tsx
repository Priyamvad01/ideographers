import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Section, Card, Button, SEO, BreadcrumbSchema, ServiceSchema } from '../components/ui';
import { content } from '../content/company';

const CivilLandscaping: React.FC = () => {
  const { civil } = content.services;
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <SEO 
        title="Civil Engineering & Landscaping Services | Ideographers" 
        description="Expert civil design, site planning, construction execution, and maintenance for residential, commercial, and industrial projects." 
        canonical="/services/landscaping"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Landscaping', path: '/services/landscaping' }]} />
      <ServiceSchema name="Landscaping" description="Expert landscaping and site development services." />
      {/* Hero */}
      <Section className="bg-gray-50 py-16 text-center sm:py-20 md:py-24">
        <Container>
          <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">{civil.title}</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">{civil.description}</p>
        </Container>
      </Section>

      {/* Overview */}
      <Section className="py-16">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 flex flex-col">
                <h3 className="text-xl font-bold mb-4">Design & Planning</h3>
                <p className="text-gray-600 mb-6 flex-grow">{civil.summary.designPlanning}</p>
                <Button variant="outline" onClick={() => navigate('/services/civil-landscaping/design-planning')}>Explore</Button>
            </Card>
            <Card className="p-8 flex flex-col">
                <h3 className="text-xl font-bold mb-4">Execution</h3>
                <p className="text-gray-600 mb-6 flex-grow">{civil.summary.executionDevelopment}</p>
                <Button variant="outline" onClick={() => navigate('/services/civil-landscaping/execution-development')}>Explore</Button>
            </Card>
            <Card className="p-8 flex flex-col">
                <h3 className="text-xl font-bold mb-4">Maintenance</h3>
                <p className="text-gray-600 mb-6 flex-grow">{civil.summary.repairMaintenance}</p>
                <Button variant="outline" onClick={() => navigate('/services/civil-landscaping/repair-maintenance')}>Explore</Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Subservices */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">{civil.architectureServices.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {civil.architectureServices.items.map((item) => (
              <Card key={item.title} className="p-6 flex flex-col hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{item.summary}</p>
                <Button variant="outline" onClick={() => navigate(item.path)}>Explore</Button>
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

export default CivilLandscaping;
