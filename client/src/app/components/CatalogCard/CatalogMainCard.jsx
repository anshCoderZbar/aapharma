import React, { useState } from "react";

import { Pagination } from "../Ui/Pagination";

import "styles/Catalog.css";

import { Loader } from "../Ui/Loader";
import { CatalogCard } from "./CatalogCard";

export const CatalogMainCard = ({ chemicals, status }) => {
  const countPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * countPerPage;
  const endIndex = startIndex + countPerPage;

  const updatePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {status && (
        <div className="d-flex justify-content-center">
          <Loader />
        </div>
      )}
      {!status && chemicals?.data?.length <= 0 && <h3>No record found</h3>}
      <div className="row gap_bb gx-4">
        {!status &&
          chemicals?.data?.slice(startIndex, endIndex)?.map((compounts, i) => {
            return (
              <CatalogCard
                baseUrl={chemicals?.baseUrl}
                compounts={compounts}
                key={i}
              />
            );
          })}
      </div>
      {!status && chemicals?.data?.length >= 1 && (
        <Pagination
          total={chemicals?.data?.length}
          current={currentPage}
          pageSize={countPerPage}
          onChange={updatePage}
          nextIcon="next"
          prevIcon="previous"
        />
      )}
    </>
  );
};
