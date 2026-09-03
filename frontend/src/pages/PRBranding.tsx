import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Accordion, Container, Section, Card, Button, SEO } from '../components/ui';
import { content } from '../content/company';

const PRBranding: React.FC = () => {
  const { prBranding } = content.services;
  const navigate = useNavigate();
  
  return (
    <div className="space-y-0">
      <SEO title="PR & Branding Services | Ideographers" description="Explore our PR & Branding services, including brand identity, campaign strategy, and corporate branding to elevate your market presence." />
      {/* 1. Hero */}
      <Section className="py-16 text-center sm:py-20 md:py-24">
        <Container>
          <h1 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">{prBranding.title}</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">{prBranding.description}</p>
        </Container>
      </Section>

      {/* 2. PR & Branding Services Hub */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Our PR & Branding Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prBranding.services.map((service, i) => (
              <Card key={i} className="p-6 flex flex-col hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.summary}</p>
                <Button variant="outline" onClick={() => navigate(service.path)}>Explore</Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Existing Template Content (Overview, Features, etc.) */}
      <Section className="py-16">
        <Container>
            <div className="mb-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold mb-4">Our Branding Philosophy</h2>
                <p className="text-lg text-gray-600">Branding is about creating a cohesive, memorable identity that resonates with your audience. We offer a holistic range of services to build, strengthen, and evolve your brand.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                    <ul className="space-y-3">
                        {["Strategic Brand Identity Design", "Cohesive Creative & Visual Systems", "Targeted Campaign Strategy", "Enterprise Corporate Branding"].map((f, i) => <li key={i} className="flex items-start text-gray-700"><span>✓</span> {f}</li>)}
                    </ul>
                </div>
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6">Business Benefits</h2>
                    <ul className="space-y-3">
                        {["Differentiated market presence", "Increased brand recognition and trust", "Consistent brand messaging", "Stronger customer connection"].map((b, i) => <li key={i} className="flex items-start text-gray-700"><span>✓</span> {b}</li>)}
                    </ul>
                </div>
            </div>

            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {["Brand Discovery & Analysis", "Strategy & Concept Development", "Design & Asset Creation", "Implementation & Optimization"].map((step, i) => (
                        <div key={i} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                            <div className="text-blue-600 font-bold mb-2">{i + 1}</div>
                            <p className="text-gray-700 font-semibold">{step}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-16 p-10 bg-blue-50 rounded-2xl text-center">
                <h2 className="text-3xl font-bold mb-6">Why Choose Ideographers</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">We combine creative excellence with strategic rigor to build brands that not only look good but perform exceptionally, helping you achieve your long-term business goals.</p>
            </div>

            <div className="mb-16">
                <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
                <Accordion items={[{ id: 'rebranding', title: 'Can you help with rebranding?', content: 'Yes, we specialize in both creating new brands and revitalizing existing ones.' }, { id: 'scalability', title: 'Do you work with startups and enterprises?', content: 'Absolutely, our branding services are scalable and tailored to businesses of all sizes.' }]} />
            </div>

            <div className="rounded-2xl bg-gray-900 p-6 text-center text-white sm:p-8 md:p-12">
                <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Ready to elevate your brand?</h2>
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg" onClick={() => navigate('/contact')}>Get Branding Consultation</Button>
            </div>
        </Container>
      </Section>
    </div>
  );
};

export default PRBranding;
