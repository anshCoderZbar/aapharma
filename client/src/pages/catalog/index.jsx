import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "styles/Catalog.css";
import { CatalogMainCard } from "app/components/CatalogCard/CatalogMainCard";
import { CatalogSearchBar } from "app/common/catalog/CatalogSearchBar";
import { useAtom } from "jotai";
import { filteredCatalogs, resetButtonVisibility } from "store/CatalogStore";
import {
  AllChemical,
  CatalogCategory2,
  CatalogCategory3,
  FilterChemical,
} from "rest/catalog";
import { ChevronsRight, X } from "lucide-react";

export const Catalog = () => {
  const navigte = useNavigate();
  const catalogCategory2 = CatalogCategory2();
  const catalogCategory3 = CatalogCategory3();

  const [isResetButtonVisible, setResetButtonVisible] = useAtom(
    resetButtonVisibility
  );
  const [catalogId, setCatalogId] = useState({
    subCategoryId: [],
    supersubcategoryId: [],
  });

  const filterChemical = FilterChemical();
  const allChemicalProducts = AllChemical();
  const [filteredData] = useAtom(filteredCatalogs);

  const handleChange = (e) => {
    const { value } = e.target;
    sessionStorage.setItem("orderBy", value);
    filterChemical.mutate();
  };

  useEffect(() => {
    const categoryId = JSON.parse(sessionStorage.getItem("categoryId") || "[]");
    const subcategoryId = JSON.parse(
      sessionStorage.getItem("subcategoryId") || "[]"
    );
    const supersubcategoryId = JSON.parse(
      sessionStorage.getItem("supersubcategoryId") || "[]"
    );
    const orderBy = sessionStorage.getItem("orderBy");
    const search = sessionStorage.getItem("search");

    const shouldShowButton =
      categoryId.length > 0 ||
      subcategoryId.length > 0 ||
      supersubcategoryId.length > 0 ||
      orderBy !== "" ||
      search !== "";
    setResetButtonVisible(shouldShowButton);
  }, [isResetButtonVisible, filterChemical, catalogId]);

  const handleReset = () => {
    sessionStorage.setItem("categoryId", JSON?.stringify([]));
    sessionStorage.setItem("subcategoryId", JSON?.stringify([]));
    sessionStorage.setItem("supersubcategoryId", JSON?.stringify([]));
    sessionStorage.setItem("orderBy", "");
    sessionStorage.setItem("search", "");
    setCatalogId({ subCategoryId: [], supersubcategoryId: [] });
    setResetButtonVisible(false);
    filterChemical.mutate();
  };

  return (
    <div className="catalog_page">
      <div className="catalog_banner">
        <div className="container-fluid">
          <div className="catalog_banner_heading">
            <div className="catalog_banner_content">
              <p className="d-flex justify-content-center align-items-center gap-2">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>{" "}
                <ChevronsRight /> Catalogs
              </p>
              <h1>Research Tools Catalog</h1>
            </div>
            <div className="catalog_filter_outer">
              <div className=" catalog_inner">
                <div className="filter_left">
                  <CatalogSearchBar
                    catalogId={catalogId}
                    setCatalogId={setCatalogId}
                  />
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
          {isResetButtonVisible && (
            <div className="reset_class">
              {catalogCategory2?.data?.data?.map((elm) => {
                const getSelectedIds = JSON.parse(
                  sessionStorage.getItem("subcategoryId")
                );
                return getSelectedIds.map((data) => {
                  if (elm?.id === Number.parseInt(data)) {
                    return (
                      <div className="catalog_remove_btm" key={elm.id}>
                        {elm?.heading}
                      </div>
                    );
                  } else {
                    return null;
                  }
                });
              })}

              {catalogCategory3?.data?.data?.map((elm) => {
                const getSelectedIds = JSON.parse(
                  sessionStorage.getItem("supersubcategoryId")
                );
                return getSelectedIds.map((data) => {
                  if (elm?.id === Number.parseInt(data)) {
                    return (
                      <div className="catalog_remove_btm" key={elm.id}>
                        {elm?.heading}
                      </div>
                    );
                  } else {
                    return null;
                  }
                });
              })}

              <div className="reset_btn">
                <button onClick={handleReset}>Reset All</button>
              </div>
            </div>
          )}

          <CatalogMainCard
            chemicals={
              filteredData?.status ? filteredData : allChemicalProducts?.data
            }
            status={allChemicalProducts?.isPending || filterChemical?.isPending}
          />
        </div>
      </div>
    </div>
  );
};
