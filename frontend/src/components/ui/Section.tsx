import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  compact?: boolean;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  compact = false, 
  className = '' 
}) => {
  const padding = compact ? 'py-8' : 'py-16 md:py-24';
  
  return (
    <section className={`${padding} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
