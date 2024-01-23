import React from "react";
import AutoScroll from "app/components/Ui/AutoScroll";
import { PublicRoutes } from "./public";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import { Home } from "pages/home";
import { Catalog } from "pages/catalog";
import { CatalogDetails } from "pages/catalog/CatalogDetails";
import { TestimonialsPage } from "pages/testimonials";
import { Contact } from "pages/contact";
import { AboutUs } from "pages/about-us/AboutUs";
import Personnel from "pages/about-us/Personnel";
import OperatingPhilosophy from "pages/about-us/OperatingPhilosophy";
import ServicesPage from "pages/services/Services";
import CustomChemicalSynthesis from "pages/services/CustomChemicalSynthesis";
import CaseStudy from "pages/services/CaseStudy";
import ResearchAndDevelopement from "pages/services/ResearchAndDevelopement";
import Carbohydrates from "pages/services/Carbohydrates";
import Services1 from "pages/services/Services1";
import Whitepaper from "pages/resources/Whitepaper";
import Employement from "pages/contact/Employement";
import Resources from "pages/resources/Resources";
import Capabilities from "pages/capabilities/Capabilities";
import ChemistryExpertise from "pages/capabilities/ChemistryExpertise";
import LabEquipment from "pages/capabilities/LabEquipment";
import AnalyticalInstrumentation from "pages/capabilities/AnalyticalInstrumentation";
import Accreditations from "pages/capabilities/Accreditations";
import Services2 from "pages/services/Services2";
import { ChemicalEditor } from "pages/catalog/ChemicalEditor";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <AutoScroll>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoutes>
                <Home />
              </PublicRoutes>
            }
          />
          <Route
            path="/catalog"
            element={
              <PublicRoutes>
                <Catalog />
              </PublicRoutes>
            }
          />
          <Route
            path="/chemical-editor"
            element={
              <PublicRoutes>
                <ChemicalEditor />
              </PublicRoutes>
            }
          />
          <Route
            path="/catalog/:id"
            element={
              <PublicRoutes>
                <CatalogDetails />
              </PublicRoutes>
            }
          />
          <Route
            path="/testimonials"
            element={
              <PublicRoutes>
                <TestimonialsPage />
              </PublicRoutes>
            }
          />
          <Route
            path="/contact-us"
            element={
              <PublicRoutes>
                <Contact />
              </PublicRoutes>
            }
          />
          <Route
            path="/about-us"
            element={
              <PublicRoutes>
                <AboutUs />
              </PublicRoutes>
            }
          />
          <Route
            path="/personnel"
            element={
              <PublicRoutes>
                <Personnel />
              </PublicRoutes>
            }
          />
          <Route
            path="/operating-philosophy"
            element={
              <PublicRoutes>
                <OperatingPhilosophy />
              </PublicRoutes>
            }
          />
          <Route
            path="/services"
            element={
              <PublicRoutes>
                <ServicesPage />
              </PublicRoutes>
            }
          />
          <Route
            path="/custom-chemical-synthesis"
            element={
              <PublicRoutes>
                <CustomChemicalSynthesis />
              </PublicRoutes>
            }
          />
          <Route
            path="/case-study"
            element={
              <PublicRoutes>
                <CaseStudy />
              </PublicRoutes>
            }
          />
          <Route
            path="/research-and-development"
            element={
              <PublicRoutes>
                <ResearchAndDevelopement />
              </PublicRoutes>
            }
          />
          <Route
            path="/custom-synthesis-of-complex-carbohydrates"
            element={
              <PublicRoutes>
                <Carbohydrates />
              </PublicRoutes>
            }
          />
          <Route
            path="/services-1"
            element={
              <PublicRoutes>
                <Services1 />
              </PublicRoutes>
            }
          />
          <Route
            path="/services-2"
            element={
              <PublicRoutes>
                <Services2 />
              </PublicRoutes>
            }
          />
          <Route
            path="/resources"
            element={
              <PublicRoutes>
                <Resources />
              </PublicRoutes>
            }
          />
          <Route
            path="/whitepaper"
            element={
              <PublicRoutes>
                <Whitepaper />
              </PublicRoutes>
            }
          />
          <Route
            path="/employement"
            element={
              <PublicRoutes>
                <Employement />
              </PublicRoutes>
            }
          />
          <Route
            path="/capabilities"
            element={
              <PublicRoutes>
                <Capabilities />
              </PublicRoutes>
            }
          />
          <Route
            path="/chemistry-expertise"
            element={
              <PublicRoutes>
                <ChemistryExpertise />
              </PublicRoutes>
            }
          />
          <Route
            path="/lab-equipment"
            element={
              <PublicRoutes>
                <LabEquipment />
              </PublicRoutes>
            }
          />
          <Route
            path="/analytical-instrumentation"
            element={
              <PublicRoutes>
                <AnalyticalInstrumentation />
              </PublicRoutes>
            }
          />
          <Route
            path="/accreditations"
            element={
              <PublicRoutes>
                <Accreditations />
              </PublicRoutes>
            }
          />
        </Routes>
      </AutoScroll>
    </BrowserRouter>
  );
};
