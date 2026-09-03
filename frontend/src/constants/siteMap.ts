export interface NavItem {
  name: string;
  path: string;
}

/** Canonical route registry. App.tsx remains the router source of truth. */
const routePaths = [
  '/', '/services',
  '/services/civil-landscaping',
  '/services/civil-landscaping/design-planning',
  '/services/civil-landscaping/design-planning/house-planning',
  '/services/civil-landscaping/design-planning/building-planning',
  '/services/civil-landscaping/design-planning/2d-floor-plans',
  '/services/civil-landscaping/design-planning/3d-elevation-design',
  '/services/civil-landscaping/design-planning/structural-design',
  '/services/civil-landscaping/design-planning/site-layout-planning',
  '/services/civil-landscaping/design-planning/autocad-drafting',
  '/services/civil-landscaping/design-planning/municipal-drawing-approval',
  '/services/civil-landscaping/execution-development',
  '/services/civil-landscaping/repair-maintenance',
  '/services/civil-landscaping/architecture/residential',
  '/services/civil-landscaping/architecture/commercial',
  '/services/civil-landscaping/architecture/interior',
  '/services/civil-landscaping/architecture/exterior',
  '/services/civil-landscaping/architecture/3d-visualization',
  '/services/civil-landscaping/architecture/renovation',
  '/services/civil-landscaping/architecture/working-drawings',
  '/services/civil-landscaping/architecture/consultation',
  '/services/pr-branding', '/services/pr-branding/brand-identity',
  '/services/pr-branding/creative-design', '/services/pr-branding/advertisement-design',
  '/services/pr-branding/corporate-branding', '/services/pr-branding/social-media-branding',
  '/services/pr-branding/print-media-design', '/services/pr-branding/packaging-design',
  '/services/pr-branding/marketing-materials', '/services/pr-branding/campaign-strategy',
  '/services/it-services', '/services/it-services/design-development',
  '/services/it-services/enterprise-services', '/services/it-services/industry-maintenance',
  '/services/it-services/design-development/website-development',
  '/services/it-services/design-development/mobile-app-development',
  '/services/it-services/design-development/ecommerce-development',
  '/services/it-services/design-development/custom-software-development',
  '/services/it-services/design-development/custom-software-integration',
  '/services/it-services/enterprise-services/crm-development',
  '/services/it-services/enterprise-services/cloud-services',
  '/services/it-services/enterprise-services/iot',
  '/services/it-services/enterprise-services/data-engineering',
  '/services/it-services/enterprise-services/ai-ml',
  '/services/it-services/enterprise-services/fintech-solutions',
  '/services/it-services/design-development/api-development',
  '/about', '/contact',
] as const;

const toName = (path: string) => path === '/'
  ? 'Home'
  : path.split('/').at(-1)!.split('-').map((word) => word === 'iot' ? 'IoT' : word.toUpperCase()).join(' ');

export const pages: NavItem[] = routePaths.map((path) => ({ name: toName(path), path }));
export const services = pages.filter((page) => page.path.startsWith('/services/'));
