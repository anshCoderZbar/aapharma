import React, { useState } from "react";

import { Minus, Plus, Trash2 } from "lucide-react";
import { usdFormater } from "lib/utils/functions";
import { ButtonLoader } from "app/components/Ui/ButtonLoader";
import { DeleteFromCartMutation, UpdateCartMutation } from "rest/cart";

export const CartCard = ({ items, i, row, getCartDetails }) => {
  const deleteCartMutation = DeleteFromCartMutation();
  const updateCartQuantity = UpdateCartMutation();

  const [itemQuantity, setitemQuantity] = useState(
    Number.parseInt(items?.quantity)
  );

  const updateGramQuantity = (e, id) => {
    const { value } = e.target;
    const getClass = e.target.selectedOptions[0];

    const formData = new FormData();
    formData.append("id", id);
    formData.append("attribute_pa_qty", value);
    formData.append("price", getClass.getAttribute("data-price"));
    updateCartQuantity.mutate(formData);
  };

  const updateCart = (quantity, id) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("quantity", quantity);
    updateCartQuantity.mutate(formData);
  };

  const deleteCartItem = (cartId) => {
    const formData = new FormData();
    formData.append("id", cartId);
    deleteCartMutation.mutate(formData);
  };

  return (
    <div
      key={i}
      className={`cart_itsm_dif ${
        i + 1 !== row.length ? "border-bottom" : ""
      } border-1`}
    >
      <div className="cart_card">
        <div
          onClick={() => deleteCartItem(items?.id)}
          className="remove_item_cart"
        >
          {deleteCartMutation?.isPending ? <ButtonLoader /> : <Trash2 />}
        </div>
        <div className="cart_image_vko">
          <img
            src={`${getCartDetails?.data?.baseUrl}/${items?.chemicalDetail?.image}`}
          />
        </div>
        <div className="cart_info_vs">
          <p>
            {items?.chemicalDetail?.heading && items?.chemicalDetail?.heading}
          </p>
          <div className="update_cart_quantity">
            <div className="cart_top_qt">
              <div className="cart_top_head">
                <h3>Price</h3>
              </div>
              <div className="cart_top_head">
                <h3>Quantity(gm)</h3>
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
                <h3>{usdFormater(items?.price.replaceAll(",", ""))}</h3>
              </div>
              <div className="cart_top_head cart_price">
                <select
                  className="select_fi_oi"
                  defaultValue={items?.attribute_pa_qty}
                  onChange={(e) => updateGramQuantity(e, items?.id)}
                >
                  {JSON.parse(
                    items?.chemicalDetail?.catalog_quantity_price
                  )?.map((elm, i) => {
                    return (
                      <option
                        key={i}
                        value={elm?.quantity.replaceAll(" ", "-")}
                        data-price={elm?.price}
                      >
                        {elm?.quantity}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="cart_top_head cart_quantity">
                <h3>
                  <button
                    onClick={() => {
                      setitemQuantity(itemQuantity - 1);
                      updateCart(itemQuantity - 1, items?.id);
                    }}
                    className="cart_update_qty_btn"
                    disabled={itemQuantity < 2}
                  >
                    <Minus />
                  </button>
                  {itemQuantity && itemQuantity}
                  <button
                    onClick={() => {
                      setitemQuantity(itemQuantity + 1);
                      updateCart(itemQuantity + 1, items?.id);
                    }}
                    className="cart_update_qty_btn"
                  >
                    <Plus />
                  </button>
                </h3>
              </div>
              <div className="cart_top_head cart_subtotal">
                <h3>{items?.subTotal && usdFormater(items?.subTotal)}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
