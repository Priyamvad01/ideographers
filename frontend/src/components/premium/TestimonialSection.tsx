import React from 'react';
import { Container, Section } from '../ui';

const testimonials = [
  { quote: "Ideographers transformed our vision into a stunning reality. The attention to detail and technical precision were unmatched.", author: "Homeowner" },
  { quote: "Professional, innovative, and highly efficient. Our project was completed on time and exceeded all our expectations.", author: "Business Owner" },
  { quote: "A seamless experience from concept to completion. The design is both aesthetically pleasing and highly functional.", author: "Property Developer" },
];

export const TestimonialSection: React.FC = () => (
  <Section className="py-20 bg-gray-50">
    <Container>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <p className="text-gray-600 mb-6 italic">"{t.quote}"</p>
            <p className="font-bold text-gray-900">- {t.author}</p>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
