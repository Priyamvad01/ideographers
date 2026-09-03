import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Section, Card, Button, SEO, StructuredData } from '../components/ui';
import { aboutContent } from '../content/about';
import { companyData } from '../constants/company';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-0 py-0">
      <SEO 
        title="About Us" 
        description="Learn about Ideographers: your partner for end-to-end engineering, architectural, branding, and IT solutions."
        canonical="/about"
        ogTitle="About Us | Ideographers"
        ogDescription="Learn about Ideographers: your partner for end-to-end engineering, architectural, branding, and IT solutions."
        ogType="website"
      />
      <StructuredData
        data={{
          '@type': 'AboutPage',
          'mainEntity': {
            '@type': 'Organization',
            'name': companyData.name,
            'description': companyData.shortDescription,
            'url': 'https://ideographers.com',
          },
        }}
      />
      {/* 1. Company Introduction */}
      <Section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">{aboutContent.intro.title}</h1>
              <p className="text-xl text-gray-700 mb-4">{aboutContent.intro.description}</p>
              <p className="text-gray-600 mb-8">{aboutContent.intro.overview}</p>
            </div>
            <Card className="p-8 border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-6">Ideographers Advantage</h3>
                <ul className="space-y-4">
                    {['Multidisciplinary Expertise', 'Design Excellence', 'Technology Driven', 'End-to-End Solutions'].map((item) => (
                        <li key={item} className="flex items-center text-lg text-gray-700">
                            <span className="mr-3 text-blue-600">✓</span> {item}
                        </li>
                    ))}
                </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gray-50 py-16">
        <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { label: "Projects Delivered", value: "500+" },
                    { label: "Industry Expertise", value: "10+ Yrs" },
                    { label: "Service Domains", value: "5" },
                    { label: "Client Satisfaction", value: "100%" }
                ].map((stat, i) => (
                    <div key={i} className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                        <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>
        </Container>
      </Section>

      {/* 2 & 3. Vision & Mission */}
      <Section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">{aboutContent.vision.title}</h2>
              <p className="text-lg text-gray-700">{aboutContent.vision.description}</p>
            </Card>
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">{aboutContent.mission.title}</h2>
              <p className="text-lg text-gray-700">{aboutContent.mission.description}</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. Core Values */}
      <Section className="bg-gray-50 py-16">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {aboutContent.coreValues.map((value) => (
              <Card key={value.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Leadership */}
      <Section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutContent.leadership.map((member) => (
              <Card key={member.name} className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                {member.quote && <p className="text-gray-600 italic">"{member.quote}"</p>}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Company Journey */}
      <Section className="bg-gray-50 py-16">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {aboutContent.journey.map((milestone) => (
              <div key={milestone.year} className="flex gap-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-24 text-blue-600 font-bold text-xl pt-1">{milestone.year}</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Why Choose Us */}
      <Section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutContent.whyChooseUs.map((feature) => (
              <Card key={feature.title} className="p-6 transition-transform hover:scale-105">
                <h3 className="text-xl font-bold mb-2 text-blue-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 py-20 text-white text-center">
        <Container>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Let's Build Something Exceptional</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Partner with Ideographers to bring your multidisciplinary projects to life with precision and innovation.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" onClick={() => navigate('/services')}>Explore Services</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/contact')}>Contact Us</Button>
            </div>
        </Container>
      </Section>
    </div>
  );
};

export default About;
