import React from 'react';
import { Container, Button } from '../ui';
import { content } from '../../content/company';
import { useNavigate } from 'react-router-dom';

const featuredServices = [
    { title: 'Civil & Landscaping', description: 'Expert design and sustainable planning for residential and commercial infrastructure.' },
    { title: 'Architecture Services', description: 'Innovative architectural vision combined with precision engineering and functional space design.' },
    { title: 'PR & Branding', description: 'Strategic brand identity development that builds lasting connections and maximizes market impact.' },
    { title: 'IT Development', description: 'Scalable, secure digital solutions designed to elevate your online presence and user engagement.' },
    { title: 'Enterprise IT Services', description: 'Robust data engineering, AI/ML solutions, and cloud infrastructure for modern enterprise agility.' },
    { title: 'Industry Maintenance', description: 'Comprehensive long-term maintenance, support, and optimization to ensure sustainable system performance.' }
];

export const FeaturedServicesSection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="py-16 bg-gray-50">
            <Container>
                <h2 className="text-3xl font-bold mb-4 text-center">{content.home.featuredServices.title}</h2>
                <p className="text-gray-600 text-center mb-12">{content.home.featuredServices.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredServices.map((service, index) => (
                        <div key={index} className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <Button onClick={() => navigate('/services')}>Learn More</Button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
