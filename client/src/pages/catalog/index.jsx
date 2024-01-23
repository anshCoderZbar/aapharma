import React from "react";
import { useNavigate } from "react-router-dom";

import "styles/Catalog.css";
import { CatalogMainCard } from "app/components/CatalogCard/CatalogMainCard";
import { CatalogSearchBar } from "app/common/catalog/CatalogSearchBar";
import { useAtom } from "jotai";
import { categoryChecked, filteredCatalogs } from "store/CatalogStore";
import { AllChemical, FilterChemical } from "rest/catalog";
import { catalogFilterSchema } from "store/CatalogFilter";

export const Catalog = () => {
  const navigte = useNavigate();
  const filterChemical = FilterChemical();
  const allChemicalProducts = AllChemical();
  const [categoryCheck] = useAtom(categoryChecked);
  const [filteredData] = useAtom(filteredCatalogs);
  const [catalogSchema, setCatalogSchema] = useAtom(catalogFilterSchema);

  const handleChange = (e) => {
    const { value } = e.target;
    sessionStorage.setItem("orderBy", value);
    filterChemical.mutate();
  };

  return (
    <div className="catalog_page">
      <div className="catalog_banner">
        <div className="container-fluid">
          <div className="catalog_banner_heading">
            <h1>Catalogs</h1>
            <div className="catalog_filter_outer">
              <div className=" catalog_inner">
                <div className="filter_left">
                  <CatalogSearchBar />
                </div>
                <div className="filter_right">
                  <button
                    onClick={() => navigte("/chemical-editor")}
                    className="primary_buttton"
                  >
                    Draw Structure
                  </button>
                  <select onChange={handleChange}>
                    <option value="">Default Sorting</option>
                    <option value="lh">Low to High</option>
                    <option value="hl">High to Low</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="catalog_main_card">
        <div className="container-fluid">
          <CatalogMainCard
            chemicals={
              filteredData?.data?.length >= 1
                ? filteredData
                : allChemicalProducts?.data
            }
            status={allChemicalProducts?.isPending || filterChemical?.isPending}
          />
        </div>
      </div>
    </div>
  );
};
