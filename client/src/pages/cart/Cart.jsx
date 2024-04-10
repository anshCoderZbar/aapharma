import React from "react";
import { useNavigate } from "react-router-dom";

import "styles/Cart.css";
import banner from "assets/page-banners/cart_banner.jpg";
import { GetCartMutation } from "rest/cart";
import { usdFormater } from "lib/utils/functions";
import { Loader } from "app/components/Ui/Loader";
import { CartCard } from "app/components/Cart-Modal/CartCard";

export default function Cart() {
  const navigate = useNavigate();

  const formData = new FormData();
  formData.append("belongsTo", localStorage.getItem("guestId"));

  const getCartDetails = GetCartMutation(formData);

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
          {getCartDetails?.isPending && (
            <div className="d-flex justify-content-center">
              <Loader />
            </div>
          )}
          {getCartDetails?.isSuccess && (
            <>
              <h2 className="main_top_heading cart_hqad">
                {getCartDetails?.data?.data?.length >= 1
                  ? `You have ${getCartDetails?.data?.data?.length} product in cart`
                  : "Cart is empty"}
              </h2>
              {getCartDetails?.data?.data?.length >= 1 && (
                <div className="card_row">
                  <div className="row">
                    <div className="col-lg-12 col-xl-8 card_box">
                      {getCartDetails?.data?.data?.map((items, i, row) => {
                        return (
                          <CartCard
                            items={items}
                            key={i}
                            i={i}
                            row={row}
                            getCartDetails={getCartDetails}
                          />
                        );
                      })}
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
                          {getCartDetails?.data?.subTotal && (
                            <div className="position-relative">
                              <div className="cart_checkout_contianer">
                                <h2 className="main_top_heading cart_hqad">
                                  Cart Totals
                                </h2>
                                <div className="total_price">
                                  <div className="price_total">
                                    <p>Subtotal</p>
                                    <p>
                                      {getCartDetails?.data?.subTotal &&
                                        usdFormater(
                                          getCartDetails?.data?.subTotal
                                        )}
                                    </p>
                                  </div>
                                  <hr />
                                  <div className="price_total">
                                    <p className="fw-bold">Total</p>
                                    <p className="fw-bold">
                                      {getCartDetails?.data?.total &&
                                        usdFormater(
                                          getCartDetails?.data?.total
                                        )}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="checkout_cart">
                                <button
                                  onClick={() => navigate("/checkout")}
                                  className="primary_buttton"
                                >
                                  Proceed to Checkout
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
