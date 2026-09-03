import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './components/layout/MainLayout';
import { ErrorBoundary } from './components/common';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const CivilLandscaping = lazy(() => import('./pages/CivilLandscaping'));
const CivilDesignPlanning = lazy(() => import('./pages/CivilDesignPlanning'));
const CivilExecutionDevelopment = lazy(() => import('./pages/CivilExecutionDevelopment'));
const CivilRepairMaintenance = lazy(() => import('./pages/CivilRepairMaintenance'));
const ArchitectureResidential = lazy(() => import('./pages/ArchitectureResidential'));
const ArchitectureCommercial = lazy(() => import('./pages/ArchitectureCommercial'));
const ArchitectureInterior = lazy(() => import('./pages/ArchitectureInterior'));
const ArchitectureExterior = lazy(() => import('./pages/ArchitectureExterior'));
const Architecture3DVisualization = lazy(() => import('./pages/Architecture3DVisualization'));
const ArchitectureRenovation = lazy(() => import('./pages/ArchitectureRenovation'));
const ArchitectureWorkingDrawings = lazy(() => import('./pages/ArchitectureWorkingDrawings'));
const ArchitectureConsultation = lazy(() => import('./pages/ArchitectureConsultation'));
const PRBranding = lazy(() => import('./pages/PRBranding'));
const PRBrandIdentity = lazy(() => import('./pages/PRBrandIdentity'));
const PRCreativeDesign = lazy(() => import('./pages/PRCreativeDesign'));
const PRAdvertisementDesign = lazy(() => import('./pages/PRAdvertisementDesign'));
const PRCorporateBranding = lazy(() => import('./pages/PRCorporateBranding'));
const PRSocialMediaBranding = lazy(() => import('./pages/PRSocialMediaBranding'));
const PRPrintMediaDesign = lazy(() => import('./pages/PRPrintMediaDesign'));
const PRPackagingDesign = lazy(() => import('./pages/PRPackagingDesign'));
const PRMarketingMaterials = lazy(() => import('./pages/PRMarketingMaterials'));
const PRCampaignStrategy = lazy(() => import('./pages/PRCampaignStrategy'));
const ITServices = lazy(() => import('./pages/ITServices'));
const ITDesignDevelopment = lazy(() => import('./pages/ITDesignDevelopment'));
const ITEnterpriseServices = lazy(() => import('./pages/ITEnterpriseServices'));
const IndustryMaintenance = lazy(() => import('./pages/IndustryMaintenance'));
const WebsiteDevelopment = lazy(() => import('./pages/WebsiteDevelopment'));
const MobileAppDevelopment = lazy(() => import('./pages/MobileAppDevelopment'));
const ECommerceDevelopment = lazy(() => import('./pages/ECommerceDevelopment'));
const CustomSoftwareDevelopment = lazy(() => import('./pages/CustomSoftwareDevelopment'));
const CustomSoftwareIntegration = lazy(() => import('./pages/CustomSoftwareIntegration'));
const CRMDevelopment = lazy(() => import('./pages/CRMDevelopment'));
const CloudServices = lazy(() => import('./pages/CloudServices'));
const IoTSolutions = lazy(() => import('./pages/IoTSolutions'));
const DataEngineering = lazy(() => import('./pages/DataEngineering'));
const AIMLSolutions = lazy(() => import('./pages/AIMLSolutions'));
const FinTechSolutions = lazy(() => import('./pages/FinTechSolutions'));
const APIDevelopment = lazy(() => import('./pages/APIDevelopment'));
const HousePlanning = lazy(() => import('./pages/civil-landscaping/design-planning/HousePlanning'));
const BuildingPlanning = lazy(() => import('./pages/civil-landscaping/design-planning/BuildingPlanning'));
const FloorPlans2D = lazy(() => import('./pages/civil-landscaping/design-planning/FloorPlans2D'));
const ElevationDesign3D = lazy(() => import('./pages/civil-landscaping/design-planning/ElevationDesign3D'));
const StructuralDesign = lazy(() => import('./pages/civil-landscaping/design-planning/StructuralDesign'));
const SiteLayoutPlanning = lazy(() => import('./pages/civil-landscaping/design-planning/SiteLayoutPlanning'));
const AutoCADDrafting = lazy(() => import('./pages/civil-landscaping/design-planning/AutoCADDrafting'));
const MunicipalDrawingApproval = lazy(() => import('./pages/civil-landscaping/design-planning/MunicipalDrawingApproval'));
const NotFound = lazy(() => import('./pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'services/civil-landscaping', element: <CivilLandscaping /> },
      { path: 'services/civil-landscaping/design-planning', element: <CivilDesignPlanning /> },
      { path: 'services/civil-landscaping/design-planning/house-planning', element: <HousePlanning /> },
      { path: 'services/civil-landscaping/design-planning/building-planning', element: <BuildingPlanning /> },
      { path: 'services/civil-landscaping/design-planning/2d-floor-plans', element: <FloorPlans2D /> },
      { path: 'services/civil-landscaping/design-planning/3d-elevation-design', element: <ElevationDesign3D /> },
      { path: 'services/civil-landscaping/design-planning/structural-design', element: <StructuralDesign /> },
      { path: 'services/civil-landscaping/design-planning/site-layout-planning', element: <SiteLayoutPlanning /> },
      { path: 'services/civil-landscaping/design-planning/autocad-drafting', element: <AutoCADDrafting /> },
      { path: 'services/civil-landscaping/design-planning/municipal-drawing-approval', element: <MunicipalDrawingApproval /> },
      { path: 'services/civil-landscaping/execution-development', element: <CivilExecutionDevelopment /> },
      { path: 'services/civil-landscaping/repair-maintenance', element: <CivilRepairMaintenance /> },
      { path: 'services/civil-landscaping/architecture/residential', element: <ArchitectureResidential /> },
      { path: 'services/civil-landscaping/architecture/commercial', element: <ArchitectureCommercial /> },
      { path: 'services/civil-landscaping/architecture/interior', element: <ArchitectureInterior /> },
      { path: 'services/civil-landscaping/architecture/exterior', element: <ArchitectureExterior /> },
      { path: 'services/civil-landscaping/architecture/3d-visualization', element: <Architecture3DVisualization /> },
      { path: 'services/civil-landscaping/architecture/renovation', element: <ArchitectureRenovation /> },
      { path: 'services/civil-landscaping/architecture/working-drawings', element: <ArchitectureWorkingDrawings /> },
      { path: 'services/civil-landscaping/architecture/consultation', element: <ArchitectureConsultation /> },
      { path: 'services/pr-branding', element: <PRBranding /> },
      { path: 'services/pr-branding/brand-identity', element: <PRBrandIdentity /> },
      { path: 'services/pr-branding/creative-design', element: <PRCreativeDesign /> },
      { path: 'services/pr-branding/advertisement-design', element: <PRAdvertisementDesign /> },
      { path: 'services/pr-branding/corporate-branding', element: <PRCorporateBranding /> },
      { path: 'services/pr-branding/social-media-branding', element: <PRSocialMediaBranding /> },
      { path: 'services/pr-branding/print-media-design', element: <PRPrintMediaDesign /> },
      { path: 'services/pr-branding/packaging-design', element: <PRPackagingDesign /> },
      { path: 'services/pr-branding/marketing-materials', element: <PRMarketingMaterials /> },
      { path: 'services/pr-branding/campaign-strategy', element: <PRCampaignStrategy /> },
      { path: 'services/it-services', element: <ITServices /> },
      { path: 'services/it-services/design-development', element: <ITDesignDevelopment /> },
      { path: 'services/it-services/enterprise-services', element: <ITEnterpriseServices /> },
      { path: 'services/it-services/industry-maintenance', element: <IndustryMaintenance /> },
      { path: 'services/it-services/design-development/website-development', element: <WebsiteDevelopment /> },
      { path: 'services/it-services/design-development/mobile-app-development', element: <MobileAppDevelopment /> },
      { path: 'services/it-services/design-development/ecommerce-development', element: <ECommerceDevelopment /> },
      { path: 'services/it-services/design-development/custom-software-development', element: <CustomSoftwareDevelopment /> },
      { path: 'services/it-services/design-development/custom-software-integration', element: <CustomSoftwareIntegration /> },
      { path: 'services/it-services/enterprise-services/crm-development', element: <CRMDevelopment /> },
      { path: 'services/it-services/enterprise-services/cloud-services', element: <CloudServices /> },
      { path: 'services/it-services/enterprise-services/iot', element: <IoTSolutions /> },
      { path: 'services/it-services/enterprise-services/data-engineering', element: <DataEngineering /> },
      { path: 'services/it-services/enterprise-services/ai-ml', element: <AIMLSolutions /> },
      { path: 'services/it-services/enterprise-services/fintech-solutions', element: <FinTechSolutions /> },
      { path: 'services/it-services/design-development/api-development', element: <APIDevelopment /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div role="status" className="min-h-screen bg-white" aria-label="Loading page" />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}
