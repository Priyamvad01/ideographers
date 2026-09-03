import React from 'react';
import { Container, Section } from '../ui';

interface Metric { label: string; value: string }
export const AuthorityStrip: React.FC<{ metrics: Metric[] }> = ({ metrics }) => (
  <Section className="py-12 bg-white border-y border-gray-100">
    <Container className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
      {metrics.map((m, i) => (
        <div key={i} className="text-center">
          <div className="mb-1 text-2xl font-bold text-gray-900 sm:text-3xl">{m.value}</div>
          <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{m.label}</div>
        </div>
      ))}
    </Container>
  </Section>
);
