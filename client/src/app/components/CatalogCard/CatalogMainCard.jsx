import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Pagination } from "../Ui/Pagination";

import "styles/Catalog.css";
import inStock from "assets/bag-tick.png";
import outStock from "assets/bag-cross.png";
import { AddtoCart } from "../Ui/AddtoCart ";
import { Loader } from "../Ui/Loader";

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
      <div className="row">
        {!status &&
          chemicals?.data?.slice(startIndex, endIndex)?.map((compounts, i) => {
            return (
              <div key={i} className="col-md-6 ">
                <div className="catalog_main_bg">
                  <div className="row">
                    <div className="col-sm-6  col-md-12 col-xl-6">
                      <div className="compount_img">
                        <img
                          src={`${chemicals?.baseUrl}/${compounts?.image}`}
                          alt="catalogImg"
                        />
                      </div>
                      <div className="compount_img_details">
                        <ul>
                          {JSON.parse(compounts.catalog_details).length >= 1
                            ? JSON.parse(compounts.catalog_details).map(
                                (details, i) => {
                                  return (
                                    <li key={i}>
                                      <p className="detail_type">
                                        {details?.label}
                                      </p>
                                      <p className="detail_desc">
                                        {details?.description}
                                      </p>
                                    </li>
                                  );
                                }
                              )
                            : ""}
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6  col-md-12 col-xl-6">
                      <div className="catalog_content catalog_main_content">
                        <p
                          className="mt-0"
                          dangerouslySetInnerHTML={{
                            __html:
                              compounts?.description?.length >= 300
                                ? compounts?.description?.slice(0, 300) +
                                  "....."
                                : compounts?.description,
                          }}
                        />
                        <div className="cata_main_mrt nm_x">
                          <div className="d-flex justify-content-between mxs">
                            <select>
                              <option value="1">1g-81$</option>
                              <option value="2">2g-82$</option>
                              <option value="3">3g-83$</option>
                            </select>
                            {true ? (
                              <div className="d-flex align-items-center stock">
                                <img src={inStock} alt="stock" />
                                <span style={{ color: "#1aa338" }}>
                                  In Stock
                                </span>
                              </div>
                            ) : (
                              <div className="d-flex align-items-center stock">
                                <img src={outStock} alt="stock" />
                                <span style={{ color: "#FC0D1B" }}>
                                  Out of stock
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="order_btn">
                            {true ? (
                              <AddtoCart />
                            ) : (
                              <button className="add_to_cart">
                                Make Inquiry
                              </button>
                            )}
                            <Link
                              to={`/catalog/${compounts?.id}`}
                              className="cstm_mrg"
                            >
                              Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
