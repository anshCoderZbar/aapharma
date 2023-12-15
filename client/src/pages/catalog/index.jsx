import React from "react";

import "styles/Catalog.css";
import { CatalogMainCard } from "app/components/CatalogCard/CatalogMainCard";
import { CatalogSearchBar } from "app/common/catalog/CatalogSearchBar";
import { useAtom } from "jotai";
import { categoryChecked, filteredCatalogs } from "store/CatalogStore";
import { AllChemical } from "rest/catalog";

export const Catalog = () => {
  const allChemicalProducts = AllChemical();
  const [categoryCheck] = useAtom(categoryChecked);
  const [filteredData] = useAtom(filteredCatalogs);

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
                  <button className="primary_buttton">Draw Structure</button>
                  <select>
                    <option value="1">Default Sorting</option>
                    <option value="2">Default Sorting 1</option>
                    <option value="3">Default Sorting 2</option>
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
              filteredData && categoryCheck
                ? filteredData
                : allChemicalProducts?.data
            }
          />
        </div>
      </div>
    </div>
  );
};
