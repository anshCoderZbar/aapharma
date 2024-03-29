import React, { useState } from "react";
import { Link } from "react-router-dom";

import "styles/Catalog.css";
import inStock from "assets/bag-tick.png";
import outStock from "assets/bag-cross.png";
import { AddtoCart } from "../Ui/AddtoCart ";

export const CatalogHomeCard = ({ items, baseUrl }) => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handlePriceChange = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    setQuantity(el?.getAttribute("id"));
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
        <p className="mt-0">
          {items?.heading?.length >= 40
            ? items?.heading?.slice(0, 40) + "....."
            : items?.heading}
        </p>
      </div>
      <div className="catalog_content_select">
        <div className="d-flex justify-content-between align-items-center">
          <select
            className={`${items?.inStock === "true" ? "visible" : "invisible"}`}
            onChange={handlePriceChange}
          >
            <option value="">Quantity</option>
            {items?.catalog_quantity_price?.length >= 1
              ? JSON.parse(items?.catalog_quantity_price).map((details, i) => {
                  return (
                    <option
                      id={details?.quantity}
                      value={details?.price}
                      key={i}
                    >
                      {details?.quantity}
                    </option>
                  );
                })
              : null}
          </select>
          <div className="catalog_card_price">
            <h3
              className={`fw-semibold ${
                price?.length >= 1 ? "opacity-100" : "opacity-0"
              }`}
            ></h3>
            {price?.length >= 1 && <p className="fw-semibold">${price}</p>}
          </div>
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
      </div>
      <div className="order_btn">
        {items?.inStock === "true" ? (
          <AddtoCart
            id={items?.id}
            price={price}
            isDisabled={!price}
            quantity={quantity}
          />
        ) : (
          <button className="add_to_cart">Make Inquiry</button>
        )}
        <Link to={`/catalog/${items?.id}`}>Details</Link>
      </div>
    </div>
  );
};
