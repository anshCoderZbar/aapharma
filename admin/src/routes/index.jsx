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
      path: "/catalogL1",
      element: (
        <PrivateRoutes>
          <Catalog />
        </PrivateRoutes>
      ),
    },
    {
      path: "/catalogL1/:id",
      element: (
        <PrivateRoutes>
          <EditCatalog />
        </PrivateRoutes>
      ),
    },
    {
      path: "/catalogL2",
      element: (
        <PrivateRoutes>
          <CatalogSubMenu />
        </PrivateRoutes>
      ),
    },
    {
      path: "/catalogL2/:id",
      element: (
        <PrivateRoutes>
          <EditSubCatalog />
        </PrivateRoutes>
      ),
    },
    {
      path: "/catalogL3",
      element: (
        <PrivateRoutes>
          <CatalogSuperSubMenu />
        </PrivateRoutes>
      ),
    },
    {
      path: "/catalogL3/:id",
      element: (
        <PrivateRoutes>
          <EditSuperSubCatalog />
        </PrivateRoutes>
      ),
    },
    {
      path: "/chemical",
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
