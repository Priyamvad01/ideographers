import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Section, Button, SEO } from '../components/ui';
import { content } from '../content/company';

const ITEnterpriseServices: React.FC = () => {
  const { itServices } = content.services;
  const navigate = useNavigate();

  return (
    <Section>
      <SEO 
        title="IT Enterprise Services | Ideographers" 
        description="Streamlining business processes with our scalable, enterprise-focused technology solutions."
        canonical="/it-enterprise-services"
        ogTitle="IT Enterprise Services | Ideographers"
        ogDescription="Streamlining business processes with our scalable, enterprise-focused technology solutions."
        ogType="website"
      />
      <Container>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">Enterprise Services</h1>
        <p className="text-gray-600 mb-8">Streamlining business processes with scalable, enterprise-focused technology solutions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itServices.enterpriseServices.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{service.summary}</p>
              <Button onClick={() => navigate(service.path)}>Explore</Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ITEnterpriseServices;
