import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';

interface PremiumSectionProps {
  title: string;
  children: React.ReactNode;
}

export const PremiumSection: React.FC<PremiumSectionProps> = ({ title, children }) => (
  <Section>
    <Container className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{title}</h2>
      <div className="w-full max-w-4xl text-center">{children}</div>
    </Container>
  </Section>
);
