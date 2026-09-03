import React from 'react';
import { Container, Section } from '../ui';

interface Props {
  content: string;
}

export const WhyChooseIdeographersPanel: React.FC<Props> = ({ content }) => (
  <Section className="py-20 bg-primary/5">
    <Container className="max-w-3xl text-center">
      <h2 className="text-3xl font-bold mb-8">Why Choose Ideographers</h2>
      <p className="text-xl text-gray-700 leading-relaxed">{content}</p>
    </Container>
  </Section>
);
