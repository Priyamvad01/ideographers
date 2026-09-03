import React from 'react';
import { Container, Section } from '../ui';

interface Props {
  title?: string;
  items: string[];
}

export const IndustryShowcaseSection: React.FC<Props> = ({ title = "Industry Showcase", items }) => (
  <Section className="py-16 bg-white">
    <Container>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, i) => (
          <span key={i} className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium shadow-sm hover:bg-primary/10 transition-colors">
            {item}
          </span>
        ))}
      </div>
    </Container>
  </Section>
);
