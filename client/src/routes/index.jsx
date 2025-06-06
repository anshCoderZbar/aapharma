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
import StableIsotopeCompounds from "pages/services/StableIsotopeCompounds";
import Whitepaper from "pages/resources/Whitepaper";
import Employement from "pages/contact/Employement";
import Resources from "pages/resources/Resources";
import Capabilities from "pages/capabilities/Capabilities";
import ChemistryExpertise from "pages/capabilities/ChemistryExpertise";
import LabEquipment from "pages/capabilities/LabEquipment";
import AnalyticalInstrumentation from "pages/capabilities/AnalyticalInstrumentation";
import Partners from "pages/capabilities/Partners";
import Accreditations from "pages/capabilities/Accreditations";
import AntibodyDrugConjugates from "pages/services/AntibodyDrugConjugates";
import { ChemicalEditor } from "pages/catalog/ChemicalEditor";
import WhitepaperDetail from "pages/resources/WhitepaperDetail";
import Cart from "pages/cart/Cart";
import Checkout from "pages/cart/Checkout";
import Conference from "pages/resources/Conference";
import PaypalPayment from "pages/cart/Paypal";
import ProcessResearchandDevelopment from "pages/services/ProcessResearchandDevelopment";
import SmallMoleculesDrugDiscovery from "pages/services/SmallMoleculesDrugDiscovery";
import ProjectManagement from "pages/services/ProjectManagement";
import ResearchCollaboration from "pages/services/ResearchCollaboration";
import Others from "pages/services/Others";
import Overview from "pages/capabilities/Overview";
import Synthesis from "pages/capabilities/Synthesis";
import ArticlePage from "pages/home/ArticlePage";

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
            path="/article/:id"
            element={
              <PublicRoutes>
                <ArticlePage />
              </PublicRoutes>
            }
          />
          <Route
            path="/research-tools-catalog"
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
            path="/about-AAPharmaSyn"
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
            path="/storage-and-inventory-management"
            element={
              <PublicRoutes>
                <CaseStudy />
              </PublicRoutes>
            }
          />
          <Route
            path="/lipids"
            element={
              <PublicRoutes>
                <ResearchAndDevelopement />
              </PublicRoutes>
            }
          />
          <Route
            path="/process-research-and-development"
            element={
              <PublicRoutes>
                <ProcessResearchandDevelopment />
              </PublicRoutes>
            }
          />
          <Route
            path="/small-molecule-drug-discovery"
            element={
              <PublicRoutes>
                <SmallMoleculesDrugDiscovery />
              </PublicRoutes>
            }
          />
          <Route
            path="/project-management"
            element={
              <PublicRoutes>
                <ProjectManagement />
              </PublicRoutes>
            }
          />
          <Route
            path="/other"
            element={
              <PublicRoutes>
                <Others />
              </PublicRoutes>
            }
          />
          <Route
            path="/research-collaboration"
            element={
              <PublicRoutes>
                <ResearchCollaboration />
              </PublicRoutes>
            }
          />
          <Route
            path="/carbohydrates"
            element={
              <PublicRoutes>
                <Carbohydrates />
              </PublicRoutes>
            }
          />
          <Route
            path="/stable-isotope-compounds"
            element={
              <PublicRoutes>
                <StableIsotopeCompounds />
              </PublicRoutes>
            }
          />
          <Route
            path="/antibody-drug-conjugates"
            element={
              <PublicRoutes>
                <AntibodyDrugConjugates />
              </PublicRoutes>
            }
          />
          <Route
            path="/useful-guides"
            element={
              <PublicRoutes>
                <Resources />
              </PublicRoutes>
            }
          />
          <Route
            path="/whitepapers"
            element={
              <PublicRoutes>
                <Whitepaper />
              </PublicRoutes>
            }
          />
          <Route
            path="/whitepaper/:id"
            element={
              <PublicRoutes>
                <WhitepaperDetail />
              </PublicRoutes>
            }
          />
          <Route
            path="/conferences"
            element={
              <PublicRoutes>
                <Conference />
              </PublicRoutes>
            }
          />
          <Route
            path="/employment"
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
            path="/overview"
            element={
              <PublicRoutes>
                <Overview />
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
          {/* <Route
            path="/lab-equipment"
            element={
              <PublicRoutes>
                <LabEquipment />
              </PublicRoutes>
            }
          /> */}
          <Route
            path="/synthesis-equipments"
            element={
              <PublicRoutes>
                {/* <Synthesis /> */}
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
            path="/partners"
            element={
              <PublicRoutes>
                <Partners />
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
          <Route
            path="/cart"
            element={
              <PublicRoutes>
                <Cart />
              </PublicRoutes>
            }
          />
          <Route
            path="/checkout"
            element={
              <PublicRoutes>
                <Checkout />
              </PublicRoutes>
            }
          />
          <Route
            path="/paypal-payment"
            element={
              <PublicRoutes>
                <PaypalPayment />
              </PublicRoutes>
            }
          />
        </Routes>
      </AutoScroll>
    </BrowserRouter>
  );
};
