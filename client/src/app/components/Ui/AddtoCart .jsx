import React from "react";

import cartBag from "assets/add_cart.svg";
import { AddToCartMutation } from "rest/cart";

export const AddtoCart = (props) => {
  const addToCart = AddToCartMutation();

  const handleSubmit = (id, price, quantity) => {
    const formData = new FormData();
    formData.append("product_id", id);
    formData.append("price", price);
    formData.append("attribute_pa_qty", quantity);
    formData.append("quantity", 1);
    formData.append("belongsTo", localStorage.getItem("guestId"));
    addToCart.mutate(formData);
  };
  return (
    <button
      onClick={() =>
        handleSubmit(
          props?.id,
          props?.price?.replaceAll(",", ""),
          props?.quantity?.replaceAll(" ", "-")
        )
      }
      id={props?.id}
      className={`add_to_cart ${props?.extra} ${
        props?.isDisabled ? "disabled_btn_cart" : ""
      }`}
      disabled={props?.isDisabled}
    >
      <img src={cartBag} alt="cart-bag" className="cart-img" />
      Add to Cart
    </button>
  );
};
