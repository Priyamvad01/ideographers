import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Section, Button, SEO } from '../components/ui';
import { content } from '../content/company';

const ITDesignDevelopment: React.FC = () => {
  const { itServices } = content.services;
  const navigate = useNavigate();

  return (
    <Section>
      <SEO 
        title="IT Design & Development Services | Ideographers" 
        description="Professional IT design and development solutions tailored to your unique business needs and growth objectives."
        canonical="/it-design-development"
        ogTitle="IT Design & Development Services | Ideographers"
        ogDescription="Professional IT design and development solutions tailored to your unique business needs and growth objectives."
        ogType="website"
      />
      <Container>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">Design & Development</h1>
        <p className="text-gray-600 mb-8">Professional design and development solutions tailored to your business needs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itServices.designDevelopment.map((service, index) => (
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

export default ITDesignDevelopment;
