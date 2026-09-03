import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';

interface Props {
  title: string;
  description: string;
}

const OverviewSection: React.FC<Props> = ({ title, description }) => (
  <Section>
    <Container>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-gray-700">{description}</p>
    </Container>
  </Section>
);

export default OverviewSection;
