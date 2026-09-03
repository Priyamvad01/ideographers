import React from 'react';
import { Container } from '../ui';
import { content } from '../../content/company';

const projects = [
    { category: 'Architecture', title: 'Modern Villa', description: 'A sleek, sustainable residential design.' },
    { category: 'Civil', title: 'Commercial Complex', description: 'Large-scale infrastructure development.' },
    { category: 'IT', title: 'FinTech App', description: 'Secure financial management platform.' }
];

export const FeaturedProjectsSection: React.FC = () => (
    <section className="py-16">
        <Container>
            <h2 className="text-3xl font-bold mb-12 text-center">{content.home.featuredProjects.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="h-48 bg-gray-200 flex items-center justify-center">Image Placeholder</div>
                        <div className="p-6">
                            <p className="text-blue-600 text-sm font-semibold mb-2">{project.category}</p>
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>
);
