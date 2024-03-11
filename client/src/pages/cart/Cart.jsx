import React from "react";

import "styles/Cart.css";
import banner from "assets/page-banners/cart_banner.jpg";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function Cart() {
  return (
    <div className="main_cart_page">
      <div
        className="main_cart_banner"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(48, 48, 114, 1) 0%, rgba(48, 48, 114, 0) 100%), url(${banner})`,
        }}
      >
        <h1>Cart</h1>
      </div>
      <div className="container-fluid">
        <div className="all_products">
          <h2 className="main_top_heading cart_hqad">
            You have 1 product in cart
          </h2>
          <div className="card_row">
            <div className="row">
              <div className="col-lg-12 col-xl-8 card_box">
                <div className="cart_itsm_dif border-bottom border-1">
                  <div className="cart_card">
                    <div className="remove_item_cart">
                      <Trash2 />
                    </div>
                    <div className="cart_image_vko">
                      <img src={require("assets/catalog_img.png")} />
                    </div>
                    <div className="cart_info_vs">
                      <p>
                        6-(5-(Methylsulfonyl)-1,2,3-Thiadiazol-4-Yl)-3-Azabicyclo[3.1.O]Hexane-3-Carboxylate
                      </p>
                      <div className="update_cart_quantity">
                        <div className="cart_top_qt">
                          <div className="cart_top_head">
                            <h3>Price</h3>
                          </div>
                          <div className="cart_top_head">
                            <h3>Quantity</h3>
                          </div>
                          <div className="cart_top_head">
                            <h3>Subtotal</h3>
                          </div>
                        </div>
                        <div className="cart_main_qty">
                          <div className="cart_top_head cart_price">
                            <h3>$140.00</h3>
                          </div>
                          <div className="cart_top_head cart_quantity">
                            <h3>
                              <span className="cart_update_qty_btn">
                                <Minus />
                              </span>
                              1
                              <span className="cart_update_qty_btn">
                                <Plus />
                              </span>
                            </h3>
                          </div>
                          <div className="cart_top_head cart_subtotal">
                            $140.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart_itsm_dif ">
                  <div className="cart_card">
                    <div className="remove_item_cart">
                      <Trash2 />
                    </div>
                    <div className="cart_image_vko">
                      <img src={require("assets/catalog_img.png")} />
                    </div>
                    <div className="cart_info_vs">
                      <p>
                        6-(5-(Methylsulfonyl)-1,2,3-Thiadiazol-4-Yl)-3-Azabicyclo[3.1.O]Hexane-3-Carboxylate
                      </p>
                      <div className="update_cart_quantity">
                        <div className="cart_top_qt">
                          <div className="cart_top_head">
                            <h3>Price</h3>
                          </div>
                          <div className="cart_top_head">
                            <h3>Quantity</h3>
                          </div>
                          <div className="cart_top_head">
                            <h3>Subtotal</h3>
                          </div>
                        </div>
                        <div className="cart_main_qty">
                          <div className="cart_top_head cart_price">
                            <h3>$140.00</h3>
                          </div>
                          <div className="cart_top_head cart_quantity">
                            <h3>
                              <span className="cart_update_qty_btn">
                                <Minus />
                              </span>
                              1
                              <span className="cart_update_qty_btn">
                                <Plus />
                              </span>
                            </h3>
                          </div>
                          <div className="cart_top_head cart_subtotal">
                            $140.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="update_cart_btn">
                  <button className="cart_purple_btn">Update Cart</button>
                </div>
              </div>
              <div className="col-lg-12 col-xl-4">
                <div className="cart_amount_details">
                  <div className="pad_amt">
                    <form>
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        className="coupon_input"
                      />
                      <input
                        type="submit"
                        value="Apply Coupon"
                        className="cart_purple_btn"
                      />
                    </form>
                    <div className="position-relative">
                      <div className="cart_checkout_contianer">
                        <h2 className="main_top_heading cart_hqad">
                          Cart Totals
                        </h2>
                        <div className="total_price">
                          <div className="price_total">
                            <p>Subtotal</p>
                            <p>$140</p>
                          </div>
                          <hr />
                          <div className="price_total">
                            <p className="fw-bold">Total</p>
                            <p className="fw-bold">$140</p>
                          </div>
                        </div>
                      </div>
                      <div className="checkout_cart">
                        <button className="primary_buttton">
                          Proceed to Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
