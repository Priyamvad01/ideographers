import React from 'react';
import { Button } from '../ui';
import { content } from '../../content/company';
import heroBackground from "../../assets/images/hero/hero-background.png";
import heroBackgroundWebp from "../../assets/images/hero/hero-background.webp";
import { useNavigate } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative flex min-h-[620px] flex-col items-center justify-center overflow-hidden bg-white py-24 sm:min-h-[680px] md:min-h-[720px] md:py-32">
      {/* Background Image */}
      <picture className="absolute inset-0 z-0">
        <source srcSet={heroBackgroundWebp} type="image/webp" />
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          width={1536}
          height={1024}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <div className="absolute inset-0 z-0 bg-white/70" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-6">
          {content.hero.eyebrow}
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
          {content.hero.heading}
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-gray-600 sm:text-xl">
          {content.hero.description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button variant="primary" size="lg" onClick={() => navigate('/services')}>{content.hero.primaryCta}</Button>
          <Button variant="outline" size="lg" onClick={() => navigate('/contact')}>Let's Talk</Button>
        </div>
      </div>
    </section>
  );
};
