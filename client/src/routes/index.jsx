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
import { AboutUs } from "pages/about-us";

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
        </Routes>
      </AutoScroll>
    </BrowserRouter>
  );
};
