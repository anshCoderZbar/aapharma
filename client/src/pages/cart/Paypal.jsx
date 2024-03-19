import React, { useEffect } from "react";
import { useAtom } from "jotai";

import { initialCheckout } from "store/Cart";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import {
  CreatePaymentMutation,
  ErrorPaymentMutation,
  // GetCartMutation,
  SuccessPaymentMutation,
} from "rest/cart";

import "styles/Cart.css";
// import { useNavigate } from "react-router-dom";

export default function PaypalPayment() {
  // const navigate = useNavigate();
  const formData = new FormData();
  const [checkoutData] = useAtom(initialCheckout);

  // useEffect(() => {
  //   if (!checkoutData?.id) {
  //     window.location.reload();
  //   }
  // }, [checkoutData]);

  formData.append("belongsTo", localStorage.getItem("guestId"));

  // const getCartDetails = GetCartMutation(formData);
  const createPayment = CreatePaymentMutation();
  const successPayment = SuccessPaymentMutation();
  const errorPayment = ErrorPaymentMutation();

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Chemical",
            amount: {
              currency_code: "USD",
              value: 1,
            },
          },
        ],
      })
      .then((orderID) => {
        if (orderID && checkoutData?.id) {
          const orderData = new FormData();
          orderData.append("orderid", checkoutData?.id);
          orderData.append("paypalid", orderID);
          createPayment.mutate(orderData);
        }
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const formData = new FormData();
      formData.append("paypalid", details?.id);
      successPayment.mutate(formData);
    });
  };

  const onError = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const formData = new FormData();
      formData.append("paypalid", details?.id);
      errorPayment.mutate(formData);
    });
  };

  // useEffect(() => {
  //   if (success) {
  //     toast.success("Payment successful!!");
  //     navigate("/");
  //     console.log("Order successful . Your order id is--", orderID);
  //   }
  // }, [success]);

  return (
    <div className="payment_provider_gateway">
      <PayPalScriptProvider
        options={{
          components: "buttons",
          "client-id":
            "AbRVp8EVmpkVDqf6YVwO70jC_a2H--6IjyCfO1J4W3XF5IRyoEFoK2KZAYwlQzYEViTVZv1rDZikWX-c",
        }}
      >
        <PayPalButtons
          style={{ layout: "horizontal" }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
      </PayPalScriptProvider>
    </div>
  );
}
