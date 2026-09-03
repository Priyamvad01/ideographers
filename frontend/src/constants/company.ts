export interface CoreValue {
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface SEO {
  title: string;
  description: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
}

export interface TimelineEvent {
  year: string;
  event: string;
}

export const companyData = {
  name: 'Ideographers',
  tagline: 'Designing Futures, Building Realities.',
  shortDescription: 'Ideographers is a multidisciplinary firm specializing in engineering, architecture, landscaping, branding, and IT solutions.',
  fullDescription: 'Ideographers integrates cutting-edge engineering precision with creative architectural vision and digital innovation to deliver comprehensive solutions for modern business and infrastructure needs.',
  mission: 'To provide holistic, sustainable, and innovative design and engineering solutions that empower our clients to achieve their visionary goals.',
  vision: 'To be a globally recognized leader in multidisciplinary design and technology, known for excellence, creativity, and integrity.',
  coreValues: [
    { title: 'Innovation', description: 'Embracing new technologies and creative methodologies.' },
    { title: 'Integrity', description: 'Operating with transparency and ethical standards.' },
    { title: 'Excellence', description: 'Delivering high-quality outcomes consistently.' },
  ] as CoreValue[],
  whyChooseUs: [
    { title: 'Integrated Services', description: 'A one-stop solution for design, engineering, and digital needs.' },
    { title: 'Client-Centric Approach', description: 'Customized solutions tailored to specific project requirements.' },
  ] as CoreValue[],
  statistics: [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
  ] as Stat[],
  contact: {
    address: '123 Ideation Avenue, Innovation City, Tech State 90210',
    email: 'ideographers@gmail.com',
    phone: '+1 (555) 123-4567',
    businessHours: 'Mon-Fri: 9:00 AM - 6:00 PM',
  },
  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/ideographers' },
    { platform: 'Instagram', url: 'https://instagram.com/ideographers' },
  ] as SocialLink[],
  footerLinks: [
    { label: 'Terms of Service', url: '/terms' },
    { label: 'Privacy Policy', url: '/privacy' },
  ] as FooterLink[],
  seoDefaults: {
    title: 'Ideographers | Design, Engineering, and IT Solutions',
    description: 'Comprehensive design, engineering, landscaping, branding, and IT services from Ideographers.',
  } as SEO,
  leadership: [
    { name: 'Jane Doe', role: 'Chief Executive Officer' },
    { name: 'John Smith', role: 'Chief Technology Officer' },
  ] as LeadershipMember[],
  clients: ['Client A', 'Client B', 'Client C'],
  industriesServed: ['Construction', 'Technology', 'Real Estate', 'Retail'],
  certifications: ['ISO 9001:2015', 'Industry Standard Certification'],
  timeline: [
    { year: '2020', event: 'Ideographers founded.' },
    { year: '2025', event: 'Expanded services to include comprehensive IT integration.' },
  ] as TimelineEvent[],
};
