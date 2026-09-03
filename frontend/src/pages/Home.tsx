import React from 'react';
import { SEO } from '../components/ui';
import { 
  HeroSection, 
  ClientsSection, 
  WhatWeDoSection, 
  FeaturedServicesSection, 
  WhyIdeographersSection, 
  ProcessSection, 
  FeaturedProjectsSection, 
  CTASection 
} from '../components/home';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Home | Ideographers"
        description="Ideographers provides expert architectural, civil, and custom software services to transform your vision into reality."
        canonical="/"
      />
      <HeroSection />
      <ClientsSection />
      <WhatWeDoSection />
      <FeaturedServicesSection />
      <WhyIdeographersSection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <CTASection />
    </>
  );
};

export default Home;
