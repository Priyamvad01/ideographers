import React from 'react';
import { Container } from '../ui';
import { content } from '../../content/company';

const steps = ['Discovery', 'Planning', 'Design', 'Development', 'Delivery', 'Support'];

export const ProcessSection: React.FC = () => (
    <section className="py-16 bg-gray-50">
        <Container>
            <h2 className="text-3xl font-bold mb-12 text-center">{content.home.process.title}</h2>
            <div className="flex flex-col md:flex-row justify-between gap-4">
                {steps.map((step, index) => (
                    <div key={index} className="flex-1 text-center p-4">
                        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mx-auto mb-4">
                            {index + 1}
                        </div>
                        <h3 className="font-semibold">{step}</h3>
                    </div>
                ))}
            </div>
        </Container>
    </section>
);
