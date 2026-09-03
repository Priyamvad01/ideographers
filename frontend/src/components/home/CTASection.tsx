import React from 'react';
import { Container, Button } from '../ui';
import { content } from '../../content/company';
import { useNavigate } from 'react-router-dom';

export const CTASection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
        <Container>
            <h2 className="text-4xl font-bold mb-8">{content.home.cta.title}</h2>
            <Button onClick={() => navigate('/contact')} className="bg-white text-blue-600 hover:bg-gray-100">
                {content.home.cta.buttonText}
            </Button>
        </Container>
    </section>
  );
};
