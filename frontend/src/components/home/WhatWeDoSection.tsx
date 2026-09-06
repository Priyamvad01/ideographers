import React from 'react';
import { Container } from '../ui';
import { content } from '../../content/company';

const services = [
  'Civil & Design', 'Architecture', 'Landscaping', 
  'Branding & Advertising', 'IT Services'
];

export const WhatWeDoSection: React.FC = () => (
  <section className="py-16">
    <Container>
      <h2 className="text-3xl font-bold mb-4 text-center">{content.home.whatWeDo.title}</h2>
      <p className="text-gray-600 text-center mb-12">{content.home.whatWeDo.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{service}</h3>
            <p className="text-gray-600">Innovative solutions for {service.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
