import React from "react";

import cartBag from "assets/add_cart.svg";

export const AddtoCart = (props) => {
  return (
    <button className={`add_to_cart ${props?.extra}`}>
      <img src={cartBag} alt="cart-bag" className="cart-img" />
      Add to Cart
    </button>
  );
};
