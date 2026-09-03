import React from 'react';
import { Container, Section } from '../ui';

interface Props {
  title: string;
  description: string;
}

export const PremiumHero: React.FC<Props> = ({ title, description }) => (
  <Section className="py-24 bg-gray-900 text-white text-center">
    <Container className="max-w-4xl">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">{title}</h1>
      <p className="mb-8 text-lg font-light leading-relaxed text-gray-300 sm:text-xl md:text-2xl">{description}</p>
    </Container>
  </Section>
);
