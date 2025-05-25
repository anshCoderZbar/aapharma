import React, { useEffect, useState } from "react";
import { Modal } from "../Modal";
import { useNavigate } from "react-router-dom";

import "styles/Cart.css";
import { CartBagIcon } from "./CartBagIcon";
import { Trash2 } from "lucide-react";
import { closeModal, usdFormater } from "lib/utils/functions";
import { DeleteFromCartMutation, GetCartMutation } from "rest/cart";
import { Loader } from "app/components/Ui/Loader";

export const CartModal = ({ id }) => {
  const navigate = useNavigate();

  const formData = new FormData();
  formData.append("belongsTo", localStorage.getItem("guestId"));
  const getCartDetails = GetCartMutation(formData);

  const deleteCartMutation = DeleteFromCartMutation();

  const deleteCartItem = (cartId) => {
    const formData = new FormData();
    formData.append("id", cartId);
    deleteCartMutation.mutate(formData);
  };

  return (
    <Modal id={id} extra="cart_csx">
      <div className="cart_modal_act flex-column">
        <button className="primary_buttton shoppi_btn">
          <span>
            <CartBagIcon />
          </span>
          Your Cart
        </button>
        {getCartDetails?.isPending && (
          <div className="d-flex justify-content-center">
            <Loader />
          </div>
        )}
        {getCartDetails?.isSuccess && (
          <div className="cart_inner">
            {getCartDetails?.data?.data?.length >= 1 ? (
              getCartDetails?.data?.data?.map((items, i) => {
                return (
                  <div key={i} className="cart_items">
                    <div className="add_cart_item">
                      <div
                        onClick={() => deleteCartItem(items?.id)}
                        className="remove_item_cart"
                      >
                        <Trash2 />
                      </div>
                      <div className="cart_img">
                        <img
                          src={`${getCartDetails?.data?.baseUrl}/${items?.chemicalDetail?.image}`}
                        />
                      </div>
                      <div className="added_heading">
                        <p>
                          {items?.chemicalDetail?.heading &&
                            items?.chemicalDetail?.heading}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2 className="main_top_heading cart_hqad mt-3 mb-3 text-center">
                Cart is empty
              </h2>
            )}
            <div className="sub_total_jh">
              <p>
                {getCartDetails?.data?.subTotal &&
                  `Subtotal : ${usdFormater(getCartDetails?.data?.subTotal)}`}
              </p>
            </div>
            <div className="cart_buttons_bsg">
              <button
                onClick={() => {
                  navigate("/research-tools-catalog");
                  closeModal();
                }}
                className="primary_buttton"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => {
                  navigate("/cart");
                  closeModal();
                }}
                className="primary_buttton"
              >
                View Cart
              </button>
              {getCartDetails?.data?.data?.length >= 1 ? (
                <button
                  onClick={() => {
                    navigate("/checkout");
                    closeModal();
                  }}
                  className="primary_buttton"
                >
                  Checkout
                </button>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
