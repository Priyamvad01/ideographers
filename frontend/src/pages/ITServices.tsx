import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Section, Card, Button, SEO } from '../components/ui';
import { content } from '../content/company';

const ITServices: React.FC = () => {
  const { itServices } = content.services;
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <SEO 
        title="IT Services & Digital Solutions | Ideographers" 
        description="Explore our IT services, including custom software, enterprise systems, and secure development to drive business success."
        canonical="/it-services"
        ogTitle="IT Services & Digital Solutions | Ideographers"
        ogDescription="Explore our IT services, including custom software, enterprise systems, and secure development to drive business success."
        ogType="website"
      />
      {/* Hero */}
      <Section className="bg-gray-50 py-16 text-center sm:py-20 md:py-24">
        <Container>
          <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">{itServices.title}</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">{itServices.description}</p>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="py-16">
        <Container>
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Enterprise Agility</h3>
                    <p className="text-gray-600">Streamlining business processes with scalable, enterprise-focused technology solutions that grow with your company.</p>
                </Card>
                <Card className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Secure Development</h3>
                    <p className="text-gray-600">Reliable digital solutions that combine practical functionality, quality development, and robust security practices.</p>
                </Card>
            </div>
        </Container>
      </Section>

      {/* Subservices */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Our IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.services.map((service, index) => (
              <Card key={index} className="p-8 flex flex-col hover:shadow-lg transition-shadow bg-white">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-8 flex-grow">{service.summary}</p>
                <Button variant="primary" onClick={() => navigate(service.path)}>Explore</Button>
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

export default ITServices;
