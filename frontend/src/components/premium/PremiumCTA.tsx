import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Section, Button } from '../ui';

interface Props {
  title: string;
  buttonText: string;
}

export const PremiumCTA: React.FC<Props> = ({ title, buttonText }) => {
  const navigate = useNavigate();
  return (
    <Section className="py-24 bg-gray-900 text-white text-center">
      <Container className="max-w-2xl">
        <h2 className="mb-8 text-3xl font-extrabold sm:text-4xl">{title}</h2>
        <Button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 text-xl font-bold rounded-full" onClick={() => navigate('/contact')}>
          {buttonText}
        </Button>
      </Container>
    </Section>
  );
};
