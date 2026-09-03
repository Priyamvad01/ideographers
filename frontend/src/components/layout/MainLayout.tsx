import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { HelmetProvider } from 'react-helmet-async';
import { RouteStructuredData, SitewideSchemas } from '../ui';
import { Breadcrumbs, getServiceBreadcrumbs } from '../navigation';

const MainLayout: React.FC = () => {
  const { pathname } = useLocation();
  const breadcrumbs = getServiceBreadcrumbs(pathname);

  return (
    <HelmetProvider>
      <div className="main-layout">
        <SitewideSchemas />
        <RouteStructuredData />
        <Navbar />
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default MainLayout;
