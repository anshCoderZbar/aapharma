import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";

import { setPaypal } from "store/Cart";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { GetCartMutation } from "rest/cart";
import { useNavigate } from "react-router-dom";

export default function PaypalPayment() {
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const navigate = useNavigate();
  const formData = new FormData();
  formData.append("belongsTo", localStorage.getItem("guestId"));

  const getCartDetails = GetCartMutation(formData);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Chemical",
            amount: {
              currency_code: "USD",
              // value: getCartDetails?.data?.total,
              value: 1,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      console.log(payer);
      setSuccess(true);
    });
  };

  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      toast.success("Payment successful!!");
      navigate("/");
      console.log("Order successful . Your order id is--", orderID);
    }
  }, [success]);

  return (
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
      />
    </PayPalScriptProvider>
  );
}
