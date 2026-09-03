import React from 'react';
import { Container, Section } from '../ui';

interface Props {
  process: string[];
}

export const WorkflowProcess: React.FC<Props> = ({ process }) => (
  <Section className="py-16">
    <Container>
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Workflow</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {process.map((step, i) => (
          <div key={i} className="relative flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6">
              {i + 1}
            </div>
            <p className="text-gray-800 font-semibold">{step}</p>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
