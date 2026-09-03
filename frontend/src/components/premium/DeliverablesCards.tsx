import React from 'react';
import { Container, Section } from '../ui';

interface Props {
  deliverables: string[];
}

export const DeliverablesCards: React.FC<Props> = ({ deliverables }) => (
  <Section className="py-16 bg-gray-50">
    <Container>
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">What You Receive</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {deliverables.map((item, i) => (
          <div key={i} className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg mb-6 flex items-center justify-center text-primary font-bold text-xl">
              {i + 1}
            </div>
            <p className="text-gray-800 font-semibold text-lg">{item}</p>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
