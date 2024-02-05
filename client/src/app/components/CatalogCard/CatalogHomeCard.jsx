import React, { useState } from "react";
import { Link } from "react-router-dom";

import "styles/Catalog.css";
import inStock from "assets/bag-tick.png";
import outStock from "assets/bag-cross.png";
import { AddtoCart } from "../Ui/AddtoCart ";

export const CatalogHomeCard = ({ items, baseUrl }) => {
  const [price, setPrice] = useState("");

  const handlePriceChange = (e) => {
    setPrice(e?.target?.value);
  };

  return (
    <div key={items?.id} className="catalog_card">
      <img
        src={`${baseUrl}/${items?.image ? items?.image : items?.chemicalImage}`}
        alt="img"
        className={`${true ? "opacity-100" : "opacity-25"}`}
      />
      <div className="catalog_content">
        <p
          className="mt-0"
          // dangerouslySetInnerHTML={{
          //   __html:
          // items?.description?.length >= 50
          //   ? items?.heading?.slice(0, 50) + "....."
          //   : items?.heading,
          // }}
        >
          {items?.heading?.length >= 40
            ? items?.heading?.slice(0, 40) + "....."
            : items?.heading}
        </p>
      </div>
      <div className="catalog_content_select">
        <div className="d-flex justify-content-between ">
          {items?.inStock === "true" && (
            <select onChange={handlePriceChange}>
              <option value="">Select Quantity</option>
              {items?.catalog_quantity_price?.length >= 1
                ? JSON.parse(items?.catalog_quantity_price).map(
                    (details, i) => {
                      return (
                        <option value={details?.price} key={i}>
                          {details?.quantity}
                        </option>
                      );
                    }
                  )
                : null}
            </select>
          )}
          {items?.inStock === "true" ? (
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

        <div className="catalog_card_price">
          <h3 className={`${price?.length >= 1 ? "opacity-100" : "opacity-0"}`}>
            Price :
          </h3>
          {price?.length >= 1 && <p>$ {price}</p>}
        </div>
      </div>
      <div className="order_btn">
        {items?.inStock === "true" ? (
          <AddtoCart />
        ) : (
          <button className="add_to_cart">Make Inquiry</button>
        )}
        <Link to={`/catalog/${items?.id}`}>Details</Link>
      </div>
    </div>
  );
};
