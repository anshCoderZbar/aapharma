import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { PublicRoute } from "./Public";
import { PrivateRoutes } from "./Private";

import Login from "pages/auth/Login";
import Dashboard from "pages/dashboard";
import { Catalog } from "pages/catalog/Catalog";
import EditCatalog from "pages/catalog/EditCatalog";
import CreateChemical from "pages/chemical-editor/CreateChemical";
import ChemicalPage from "pages/chemical-editor";
import EditChemical from "pages/chemical-editor/EditChemical";
import { CatalogSubMenu } from "pages/catalog/CatalogSubMenu";
import EditSubCatalog from "pages/catalog/EditSubCatalog";
import CatalogSuperSubMenu from "pages/catalog/CatalogSuperSubMenu";
import EditSuperSubCatalog from "pages/catalog/EditSuperSubCatalog";
import AddUtils from "pages/chemical-editor/AddUtils";
import { HomeBanner } from "pages/index-page/HomeBanner";
import HomeAbout from "pages/index-page/HomeAbout";
import HomeService from "pages/index-page/HomeService";
import AddService from "app/common/home/service/AddService";
import EditService from "app/common/home/service/EditService";
import HomeVision from "pages/index-page/HomeVision";
import HomeClient from "pages/index-page/Client";
import EditClient from "app/common/home/clients/EditClient";
import HomeTestimonial from "pages/index-page/HomeTestimonial";
import AddTestimonail from "app/common/home/testimonial/AddTestimonail";
import EditTestimonail from "app/common/home/testimonial/EditTestimonail";
import HomeArticle from "pages/index-page/HomeArticle";
import AddArticle from "app/common/home/articles/AddArticle";
import EditArticle from "app/common/home/articles/EditArticle";
import Settings from "pages/settings";
import AboutBanner from "pages/about/AboutBanner";
import AboutCardDetails from "pages/about/AboutDetails";
import AboutTimeline from "pages/about/AboutTimeline";
import AddTimeline from "app/common/about/AddTimeline";
import { EditTimeline } from "app/common/about/EditTimeline";
import PersonnelBanner from "pages/personnel/PersonnelBanner";
import PersonnelCharacterized from "pages/personnel/PersonnelCharacterized";
import OurTeam from "pages/personnel/OurTeam";
import AddTeamMember from "app/common/personnel/AddTeamMember";
import EditTeamMember from "app/common/personnel/EditTeamMember";
import OperatingPhilosophy from "pages/operating-philosophy/OperatingPhilosophy";
import HomeServiceContent from "pages/index-page/HomeServiceContent";
import ChemicalSynthesis from "pages/chemical-synthesis/ChemicalSynthesis";
import AddChemicalSynthesis from "pages/chemical-synthesis/AddChemicalSynthesis";
import EditChemicalSynthesis from "pages/chemical-synthesis/EditChemicalSynthesis";
import ExpertiseIncludes from "pages/chemical-synthesis/ExpertiseIncludes";
import EditOperatingDiagram from "app/common/operating-philosophy/EditOperatingDiagram";
import CaseStudyTabs from "pages/case-study/CaseStudyTabs";
import EditCaseTabs from "pages/case-study/EditCaseTabs";
import CaseStudyGraphContent from "pages/case-study/CaseStudyGraphContent";
import CaseStudyDiagram from "pages/case-study/CaseStudyDiagram";
import EditCaseStudyDiagram from "pages/case-study/EditCaseStudyDiagram";
import TestimonialHeading from "pages/testimonial/TestimonialHeading";
import AllTestimonial from "pages/testimonial/AllTestimonial";
import CreateTestimonial from "pages/testimonial/CreateTestimonial";
import EditTestimonials from "pages/testimonial/EditTestimonials";
import TherapeuticsBanner from "pages/therapeutics/TherapeuticsBanner";
import TherapeuticsSupports from "pages/therapeutics/TherapeuticsSupports";
import TherapeuticsSteps from "pages/therapeutics/TherapeuticsSteps";
import EditTherapeuticsSteps from "pages/therapeutics/EditTherapeuticsSteps";
import AdcLinker from "pages/therapeutics/AdcLinker";
import BottomSection from "pages/therapeutics/BottomSection";
import CarbohydrateBanner from "pages/complex-carbohydrate/CarbohydrateBanner";
import CarbohydateTimeline from "pages/complex-carbohydrate/CarbohydateTimeline";
import AddCarbohydrateTimeline from "pages/complex-carbohydrate/AddCarbohydrateTimeline";
import EditCarbohydrateTimeline from "pages/complex-carbohydrate/EditCarbohydrateTimeline";
import CarbohydrateDescription from "pages/complex-carbohydrate/CarbohydrateDescription";
import CarbohydrateDiagram from "pages/complex-carbohydrate/CarbohydrateDiagram";
import EditCarbohydrateDiagram from "pages/complex-carbohydrate/EditCarbohydrateDiagram";
import EmploymentBanner from "pages/employment/EmploymentBanner";
import EmploymenetResponsibilities from "pages/employment/EmploymenetResponsibilities";

export const AllRoutes = (props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/dashboard" />,
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoutes>
          <Dashboard />
        </PrivateRoutes>
      ),
    },
    {
      path: "/home-banner",
      element: (
        <PrivateRoutes>
          <HomeBanner />
        </PrivateRoutes>
      ),
    },
    {
      path: "/home-about",
      element: (
        <PrivateRoutes>
          <HomeAbout />
        </PrivateRoutes>
      ),
    },
    {
      path: "/home-services",
      element: (
        <PrivateRoutes>
          <HomeService />
        </PrivateRoutes>
      ),
    },
    {
      path: "/home-add-services",
      element: (
        <PrivateRoutes>
          <AddService />
        </PrivateRoutes>
      ),
    },
    {
      path: "/home-service-content",
      element: (
        <PrivateRoutes>
          <HomeServiceContent />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-home-service/:id",
      element: (
        <PrivateRoutes>
          <EditService />
        </PrivateRoutes>
      ),
    },
    {
      path: "/home-vision",
      element: (
        <PrivateRoutes>
          <HomeVision />
        </PrivateRoutes>
      ),
    },
    {
      path: "/home-client",
      element: (
        <PrivateRoutes>
          <HomeClient />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-home-clients/:id",
      element: (
        <PrivateRoutes>
          <EditClient />
        </PrivateRoutes>
      ),
    },
    {
      path: "/home-testimonial",
      element: (
        <PrivateRoutes>
          <HomeTestimonial />
        </PrivateRoutes>
      ),
    },
    {
      path: "/home-add-testimonial",
      element: (
        <PrivateRoutes>
          <AddTestimonail />
        </PrivateRoutes>
      ),
    },
    {
      path: "/home-edit-testimonial/:id",
      element: (
        <PrivateRoutes>
          <EditTestimonail />
        </PrivateRoutes>
      ),
    },
    {
      path: "/home-article",
      element: (
        <PrivateRoutes>
          <HomeArticle />
        </PrivateRoutes>
      ),
    },
    {
      path: "/home-add-article",
      element: (
        <PrivateRoutes>
          <AddArticle />
        </PrivateRoutes>
      ),
    },
    {
      path: "/home-edit-article/:id",
      element: (
        <PrivateRoutes>
          <EditArticle />
        </PrivateRoutes>
      ),
    },
    {
      path: "/master-category",
      element: (
        <PrivateRoutes>
          <Catalog />
        </PrivateRoutes>
      ),
    },
    {
      path: "/master-category/:id",
      element: (
        <PrivateRoutes>
          <EditCatalog />
        </PrivateRoutes>
      ),
    },
    {
      path: "/sub-category",
      element: (
        <PrivateRoutes>
          <CatalogSubMenu />
        </PrivateRoutes>
      ),
    },
    {
      path: "/sub-category/:id",
      element: (
        <PrivateRoutes>
          <EditSubCatalog />
        </PrivateRoutes>
      ),
    },
    {
      path: "/sub-child-category",
      element: (
        <PrivateRoutes>
          <CatalogSuperSubMenu />
        </PrivateRoutes>
      ),
    },
    {
      path: "/sub-child-category/:id",
      element: (
        <PrivateRoutes>
          <EditSuperSubCatalog />
        </PrivateRoutes>
      ),
    },
    {
      path: "/product-management",
      element: (
        <PrivateRoutes>
          <ChemicalPage />
        </PrivateRoutes>
      ),
    },
    {
      path: "/chemical-editor",
      element: (
        <PrivateRoutes>
          <CreateChemical />
        </PrivateRoutes>
      ),
    },
    {
      path: "/add-utils",
      element: (
        <PrivateRoutes>
          <AddUtils />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-chemical/:id",
      element: (
        <PrivateRoutes>
          <EditChemical />
        </PrivateRoutes>
      ),
    },
    {
      path: "/about-banner",
      element: (
        <PrivateRoutes>
          <AboutBanner />
        </PrivateRoutes>
      ),
    },
    {
      path: "/about-card-details",
      element: (
        <PrivateRoutes>
          <AboutCardDetails />
        </PrivateRoutes>
      ),
    },
    {
      path: "/about-timeline",
      element: (
        <PrivateRoutes>
          <AboutTimeline />
        </PrivateRoutes>
      ),
    },
    {
      path: "/about-add-timeline",
      element: (
        <PrivateRoutes>
          <AddTimeline />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-about-timeline/:id",
      element: (
        <PrivateRoutes>
          <EditTimeline />
        </PrivateRoutes>
      ),
    },
    {
      path: "/personnel-banner",
      element: (
        <PrivateRoutes>
          <PersonnelBanner />
        </PrivateRoutes>
      ),
    },
    {
      path: "/personnel-description",
      element: (
        <PrivateRoutes>
          <PersonnelCharacterized />
        </PrivateRoutes>
      ),
    },
    {
      path: "/our-team",
      element: (
        <PrivateRoutes>
          <OurTeam />
        </PrivateRoutes>
      ),
    },
    {
      path: "/add-team-members",
      element: (
        <PrivateRoutes>
          <AddTeamMember />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-team-members/:id",
      element: (
        <PrivateRoutes>
          <EditTeamMember />
        </PrivateRoutes>
      ),
    },
    {
      path: "/operating-philosophy",
      element: (
        <PrivateRoutes>
          <OperatingPhilosophy />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-operating-diagram/:id",
      element: (
        <PrivateRoutes>
          <EditOperatingDiagram />
        </PrivateRoutes>
      ),
    },
    {
      path: "/chemical-synthesis",
      element: (
        <PrivateRoutes>
          <ChemicalSynthesis />
        </PrivateRoutes>
      ),
    },
    {
      path: "/add-chemical-synthesis",
      element: (
        <PrivateRoutes>
          <AddChemicalSynthesis />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-chemical-synthesis/:id",
      element: (
        <PrivateRoutes>
          <EditChemicalSynthesis />
        </PrivateRoutes>
      ),
    },
    {
      path: "/expertise-includes",
      element: (
        <PrivateRoutes>
          <ExpertiseIncludes />
        </PrivateRoutes>
      ),
    },
    {
      path: "/case-study-tabs",
      element: (
        <PrivateRoutes>
          <CaseStudyTabs />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-case-tabs/:id",
      element: (
        <PrivateRoutes>
          <EditCaseTabs />
        </PrivateRoutes>
      ),
    },
    {
      path: "/case-graph-content",
      element: (
        <PrivateRoutes>
          <CaseStudyGraphContent />
        </PrivateRoutes>
      ),
    },
    {
      path: "/case-study-diagram",
      element: (
        <PrivateRoutes>
          <CaseStudyDiagram />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-case-diagram/:id",
      element: (
        <PrivateRoutes>
          <EditCaseStudyDiagram />
        </PrivateRoutes>
      ),
    },
    {
      path: "/testimonial-content",
      element: (
        <PrivateRoutes>
          <TestimonialHeading />
        </PrivateRoutes>
      ),
    },
    {
      path: "/all-testimonial",
      element: (
        <PrivateRoutes>
          <AllTestimonial />
        </PrivateRoutes>
      ),
    },
    {
      path: "/create-testimonials",
      element: (
        <PrivateRoutes>
          <CreateTestimonial />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-testimonials/:id",
      element: (
        <PrivateRoutes>
          <EditTestimonials />
        </PrivateRoutes>
      ),
    },
    {
      path: "/therapeutics-banner",
      element: (
        <PrivateRoutes>
          <TherapeuticsBanner />
        </PrivateRoutes>
      ),
    },
    {
      path: "/therapeutics-supports",
      element: (
        <PrivateRoutes>
          <TherapeuticsSupports />
        </PrivateRoutes>
      ),
    },
    {
      path: "/therapeutics-steps",
      element: (
        <PrivateRoutes>
          <TherapeuticsSteps />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-therapeutics-steps/:id",
      element: (
        <PrivateRoutes>
          <EditTherapeuticsSteps />
        </PrivateRoutes>
      ),
    },
    {
      path: "/therapeutics-adc",
      element: (
        <PrivateRoutes>
          <AdcLinker />
        </PrivateRoutes>
      ),
    },
    {
      path: "/therapeutics-bottom",
      element: (
        <PrivateRoutes>
          <BottomSection />
        </PrivateRoutes>
      ),
    },
    {
      path: "/carbohydrate-banner",
      element: (
        <PrivateRoutes>
          <CarbohydrateBanner />
        </PrivateRoutes>
      ),
    },
    {
      path: "/carbohydrate-timeline",
      element: (
        <PrivateRoutes>
          <CarbohydateTimeline />
        </PrivateRoutes>
      ),
    },
    {
      path: "/add-carbohydrate-timeline",
      element: (
        <PrivateRoutes>
          <AddCarbohydrateTimeline />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-carbohydrate-timeline/:id",
      element: (
        <PrivateRoutes>
          <EditCarbohydrateTimeline />
        </PrivateRoutes>
      ),
    },
    {
      path: "/carbohydrate-description",
      element: (
        <PrivateRoutes>
          <CarbohydrateDescription />
        </PrivateRoutes>
      ),
    },
    {
      path: "/carbohydrate-diagram",
      element: (
        <PrivateRoutes>
          <CarbohydrateDiagram />
        </PrivateRoutes>
      ),
    },
    {
      path: "/edit-carbohydrate-diagram/:id",
      element: (
        <PrivateRoutes>
          <EditCarbohydrateDiagram />
        </PrivateRoutes>
      ),
    },
    {
      path: "/employment-banner",
      element: (
        <PrivateRoutes>
          <EmploymentBanner />
        </PrivateRoutes>
      ),
    },
    {
      path: "/employment-responsibilities",
      element: (
        <PrivateRoutes>
          <EmploymenetResponsibilities />
        </PrivateRoutes>
      ),
    },
    {
      path: "/settings",
      element: (
        <PrivateRoutes>
          <Settings />
        </PrivateRoutes>
      ),
    },
    {
      path: "/login",
      element: (
        <PublicRoute restricted={props?.restricted}>
          <Login />
        </PublicRoute>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
