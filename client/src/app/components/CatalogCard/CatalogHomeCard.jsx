import React from "react";
import { Link } from "react-router-dom";

import "styles/Catalog.css";
import inStock from "assets/bag-tick.png";
import outStock from "assets/bag-cross.png";
import { AddtoCart } from "../Ui/AddtoCart ";

export const CatalogHomeCard = ({ items, baseUrl }) => {
  return (
    <div key={items?.id} className="catalog_card">
      <img
        src={`${baseUrl}/${items?.image}`}
        alt="img"
        className={`${true ? "opacity-100" : "opacity-25"}`}
      />
      <div className="catalog_content">
        <p
          className="mt-0"
          dangerouslySetInnerHTML={{
            __html:
              items?.description?.length >= 50
                ? items?.description?.slice(0, 50) + "....."
                : items?.description,
          }}
        />
        <div className="d-flex justify-content-between">
          <select>
            <option value="1">1g-81$</option>
            <option value="2">2g-82$</option>
            <option value="3">3g-83$</option>
          </select>
          {true ? (
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
        <div className="order_btn">
          {true ? (
            <AddtoCart />
          ) : (
            <button className="add_to_cart">Make Inquiry</button>
          )}
          <Link to={`/catalog/${items?.id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
};
