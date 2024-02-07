import React, { useState } from "react";
import { Link } from "react-router-dom";

import inStock from "assets/bag-tick.png";
import outStock from "assets/bag-cross.png";
import { AddtoCart } from "../Ui/AddtoCart ";

export const CatalogCard = ({ baseUrl, compounts, key }) => {
  const [price, setPrice] = useState("");

  const handlePriceChange = (e) => {
    const { value } = e?.target;
    setPrice(value);
  };
  return (
    <div key={key} className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
      <div className="catalog_main_bg">
        <div className="row h-100">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6">
            <div className="mcpc">
              <div className="compount_img">
                <img
                  src={`${baseUrl}/${
                    compounts?.image
                      ? compounts?.image
                      : compounts?.chemicalImage
                  }`}
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
                              <p className="detail_type">{details?.label}</p>
                              <p
                                className="detail_desc"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    details?.description?.length > 15
                                      ? details?.description?.slice(0, 15) +
                                        "..."
                                      : details?.description,
                                }}
                              />
                            </li>
                          );
                        }
                      )
                    : ""}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6">
            <div className="catalog_content catalog_main_content">
              <div className="mix-xxx">
                <p
                  className="mt-0"
                  dangerouslySetInnerHTML={{
                    __html:
                      compounts?.description?.length >= 300
                        ? compounts?.description?.slice(0, 300) + "....."
                        : compounts?.description,
                  }}
                />
              </div>
              <div className="m_x_x">
                <div className="oPc">
                  <div className="catalog_content_select cata_main_mrt nm_x">
                    <div className="d-flex justify-content-between mxs">
                      <select
                        className={`${
                          compounts?.inStock === "true"
                            ? "visible"
                            : "invisible"
                        }`}
                        onChange={handlePriceChange}
                      >
                        <option value="">Quantity</option>
                        {compounts?.catalog_quantity_price?.length >= 1
                          ? JSON.parse(compounts?.catalog_quantity_price).map(
                              (details, i) => {
                                return (
                                  <option
                                    id={details?.price}
                                    value={details?.price}
                                    key={i}
                                  >
                                    {details?.quantity}
                                  </option>
                                );
                              }
                            )
                          : null}
                      </select>
                      <div className="catalog_card_price">
                        <h3
                          className={`${
                            price?.length >= 1 ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          Price :
                        </h3>
                        {price?.length >= 1 && <p>$ {price}</p>}
                      </div>
                      {compounts?.inStock === "true" ? (
                        <div className="d-flex align-items-center stock">
                          <img src={inStock} alt="stock" />
                          <span style={{ color: "#1aa338" }}>In Stock</span>
                        </div>
                      ) : (
                        <div className="d-flex align-items-center stock">
                          <img src={outStock} alt="stock" />
                          <span style={{ color: "#FC0D1B" }}>Out of stock</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="order_btn">
                    {compounts?.inStock === "true" ? (
                      <AddtoCart />
                    ) : (
                      <button className="add_to_cart">Make Inquiry</button>
                    )}
                    <Link to={`/catalog/${compounts?.id}`} className="cstm_mrg">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
