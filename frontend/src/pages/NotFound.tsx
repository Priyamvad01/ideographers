import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SEO, Section } from '../components/ui';

const NotFound: React.FC = () => (
  <>
    <SEO title="Page Not Found" description="The page you are looking for could not be found." />
    <Section className="flex min-h-[60vh] items-center bg-gray-50 py-16 text-center sm:py-24">
      <Container className="max-w-2xl">
        <p className="mb-4 text-sm font-bold tracking-widest text-blue-600">ERROR 404</p>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">Page not found</h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-gray-600 sm:text-xl">The page you requested does not exist or may have moved.</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/" className="inline-flex h-14 items-center justify-center rounded-lg bg-slate-900 px-10 text-lg font-medium text-white transition-colors hover:bg-slate-800">Return Home</Link>
          <Link to="/services" className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-gray-200 px-10 text-lg font-medium text-gray-900 transition-colors hover:border-gray-900">Explore Services</Link>
        </div>
      </Container>
    </Section>
  </>
);

export default NotFound;
