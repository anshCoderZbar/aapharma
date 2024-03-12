import React from "react";
import { StepsForm } from "./Stepper";

export default function Checkout() {
  return (
    <div className="checkout_page">
      <div className="checkout_head">
        <h1 className="main_top_heading text-center">Checkout</h1>
      </div>
      <StepsForm />
    </div>
  );
}
