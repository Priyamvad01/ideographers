import React from 'react';
import { Container, Section, Accordion } from '../ui';

interface FAQ { question: string; answer: string }

export const FAQSection: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => (
  <Section className="py-20 bg-white">
    <Container className="max-w-3xl">
      <h2 className="mb-8 text-center text-2xl font-bold sm:mb-12 sm:text-3xl md:text-4xl">Frequently Asked Questions</h2>
      <Accordion items={faqs.map((faq, i) => ({ id: `${i}`, title: faq.question, content: faq.answer }))} />
    </Container>
  </Section>
);
