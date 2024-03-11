import React from "react";
import { Modal } from "../Modal";
import { useNavigate } from "react-router-dom";

import "styles/Cart.css";
import { CartBagIcon } from "./CartBagIcon";
import { Trash2 } from "lucide-react";
import { closeModal } from "lib/utils/functions";

export const CartModal = ({ id }) => {
  const navigate = useNavigate();

  return (
    <Modal id={id} extra="cart_csx">
      <div className="cart_modal_act">
        <div className="cart_inner">
          <button className="primary_buttton shoppi_btn">
            <span>
              <CartBagIcon />
            </span>
            Your Cart
          </button>
          <div className="cart_items">
            <div className="add_cart_item">
              <div className="remove_item_cart">
                <Trash2 />
              </div>
              <div className="cart_img">
                <img src={require("assets/catalog_img.png")} />
              </div>
              <div className="added_heading">
                <p>
                  6-(5-(Methylsulfonyl)-1,2,3-Thiadiazol-4-Yl)-3-Azabicyclo[3.1.O]Hexane-3-Carboxylate
                </p>
              </div>
            </div>
          </div>
          <div className="sub_total_jh">
            <p>Subtotal: $140.00</p>
          </div>
          <div className="cart_buttons_bsg">
            <button
              onClick={() => {
                navigate("/catalog");
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
            <button className="primary_buttton">Checkout</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
