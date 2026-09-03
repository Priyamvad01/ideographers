import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  path: string;
}

const labels: Record<string, string> = {
  'civil-landscaping': 'Civil & Landscaping',
  'design-planning': 'Design & Planning',
  'house-planning': 'House Planning',
  'building-planning': 'Building Planning',
  '2d-floor-plans': '2D Floor Plans',
  '3d-elevation-design': '3D Elevation Design',
  'structural-design': 'Structural Design',
  'site-layout-planning': 'Site Layout Planning',
  'autocad-drafting': 'AutoCAD Drafting',
  'municipal-drawing-approval': 'Municipal Drawing Approval',
  'execution-development': 'Execution & Development',
  'repair-maintenance': 'Repair & Maintenance',
  residential: 'Residential Architecture',
  commercial: 'Commercial Architecture',
  interior: 'Interior Space Planning',
  exterior: 'Exterior Design',
  '3d-visualization': '3D Visualization',
  renovation: 'Renovation Design',
  'working-drawings': 'Working Drawings',
  consultation: 'Architectural Consultation',
  'pr-branding': 'PR & Branding',
  'brand-identity': 'Brand Identity',
  'creative-design': 'Creative Design',
  'advertisement-design': 'Advertisement Design',
  'corporate-branding': 'Corporate Branding',
  'social-media-branding': 'Social Media Branding',
  'print-media-design': 'Print Media Design',
  'packaging-design': 'Packaging Design',
  'marketing-materials': 'Marketing Materials',
  'campaign-strategy': 'Campaign Strategy',
  'it-services': 'IT Services',
  'design-development': 'Design & Development',
  'enterprise-services': 'Enterprise Services',
  'industry-maintenance': 'Industry Maintenance',
  'website-development': 'Website Development',
  'mobile-app-development': 'Mobile App Development',
  'ecommerce-development': 'E-Commerce Development',
  'custom-software-development': 'Custom Software Development',
  'custom-software-integration': 'Custom Software Integration',
  'api-development': 'API Development',
  'crm-development': 'CRM Development',
  'cloud-services': 'Cloud Services',
  iot: 'IoT Solutions',
  'data-engineering': 'Data Engineering',
  'ai-ml': 'AI / ML Solutions',
  'fintech-solutions': 'FinTech Solutions',
};

/** Returns a single, route-safe breadcrumb trail for a registered service URL. */
export const getServiceBreadcrumbs = (pathname: string): BreadcrumbItem[] | null => {
  if (pathname === '/services') {
    return [{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }];
  }

  if (!pathname.startsWith('/services/')) return null;

  const segments = pathname.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }];
  let path = '';

  segments.slice(1).forEach((segment) => {
    path += `/${segment}`;
    const routePath = `/services${path}`;

    // Architecture has detail routes but no separately registered architecture-hub route.
    if (routePath === '/services/civil-landscaping/architecture') return;

    items.push({ label: labels[segment] ?? segment, path: routePath });
  });

  return items;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 bg-gray-50 border-b border-gray-100">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8">
        <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-500 flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <svg className="w-3 h-3 mx-2 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {isLast ? (
                  <span className="text-gray-900 font-medium truncate max-w-[200px] md:max-w-none" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.path} className="hover:text-blue-600 transition-colors duration-200">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
