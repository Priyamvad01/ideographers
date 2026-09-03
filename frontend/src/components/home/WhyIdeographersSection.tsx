import React from 'react';
import { Container } from '../ui';
import { content } from '../../content/company';

const values = [
    { title: 'Multidisciplinary Expertise', description: 'Comprehensive design and engineering capabilities under one roof.' },
    { title: 'End-to-End Solutions', description: 'Seamless project delivery from concept design to final implementation.' },
    { title: 'Design + Tech Integration', description: 'Merging architectural vision with cutting-edge technology for superior results.' },
    { title: 'Client-Centric Delivery', description: 'Tailored approaches focused on your specific business goals.' },
    { title: 'Industry Innovation', description: 'Proactive adoption of new technologies for smarter outcomes.' },
    { title: 'Long-Term Partnership', description: 'Dedicated support for sustainable growth and maintenance.' }
];

export const WhyIdeographersSection: React.FC = () => (
    <section className="py-16">
        <Container>
            <h2 className="text-3xl font-bold mb-12 text-center">{content.home.whyIdeographers.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                    <div key={index} className="p-8 bg-gray-50 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    </section>
);
