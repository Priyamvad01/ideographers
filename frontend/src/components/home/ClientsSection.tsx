import React from 'react';
import { Container } from '../ui';
import { content } from '../../content/company';

export const ClientsSection: React.FC = () => {
  // Placeholder logos - in a real app, these would be SVG icons/images
  const clientLogos = Array(6).fill(null);

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold mb-4 text-center">{content.home.clients.title}</h2>
        <p className="text-gray-600 text-center mb-12">{content.home.clients.description}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clientLogos.map((_, index) => (
            <div key={index} className="w-24 h-12 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold rounded">
              Logo {index + 1}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
