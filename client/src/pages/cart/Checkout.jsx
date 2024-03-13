import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { StepsForm } from "./Stepper";
import {
  Building,
  Building2,
  Globe2,
  Landmark,
  MailIcon,
  MapPinned,
  Phone,
  User2,
} from "lucide-react";

import "styles/Cart.css";
import { ZipCode } from "app/common/services/Icons";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("checkPayment");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePayment = (e) => {
    setPaymentMethod(e.target.value);
  };

  console.log(paymentMethod);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="checkout_page">
      <div className="checkout_head">
        <h1 className="main_top_heading text-center">Checkout</h1>
      </div>
      <div className="container-fluid">
        <StepsForm />
        <div className="shipping_form">
          <form>
            <div className="row">
              <div className="col-md-6 col-lg-8">
                <div className="shipping_badge nij_jhy">
                  <h3>Billing Details</h3>
                </div>
                <div className="row moik_kht">
                  <div className={`col-lg-6 for_jh `}>
                    <label
                      htmlFor="firstName"
                      className="form-label ship_lable"
                    >
                      <User2 /> First Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control inp_form ${
                        errors?.firstName ? "border-danger" : ""
                      }`}
                      name="firstName"
                      {...register("firstName", { required: true })}
                    />
                  </div>
                  <div className="col-lg-6 for_jh">
                    <label htmlFor="lastName" className="form-label ship_lable">
                      <User2 /> Last Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control inp_form ${
                        errors?.lastName ? "border-danger" : ""
                      }`}
                      name="lastName"
                      {...register("lastName", { required: true })}
                    />
                  </div>
                  <div className="col-lg-6 for_jh">
                    <label
                      htmlFor="companyName"
                      className="form-label ship_lable"
                    >
                      <Building2 /> Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      className="form-control inp_form"
                      name="companyName"
                      {...register("companyName")}
                    />
                  </div>
                  <div className="col-lg-6 for_jh">
                    <label
                      htmlFor="countryRegion"
                      className="form-label ship_lable"
                    >
                      <Globe2 /> Country / Region *
                    </label>
                    <input
                      type="text"
                      className={`form-control inp_form ${
                        errors?.countryRegion ? "border-danger" : ""
                      }`}
                      name="countryRegion"
                      {...register("countryRegion", { required: true })}
                    />
                  </div>
                  <div className="col-lg-6 for_jh">
                    <label
                      htmlFor="streetAddress"
                      className="form-label ship_lable"
                    >
                      <MapPinned /> Street Address *
                    </label>
                    <input
                      type="text"
                      className={`form-control inp_form ${
                        errors?.streetAddress ? "border-danger" : ""
                      }`}
                      name="streetAddress"
                      {...register("streetAddress", { required: true })}
                    />
                  </div>
                  <div className="col-lg-6 for_jh">
                    <label htmlFor="townCity" className="form-label ship_lable">
                      <Building /> Town / City *
                    </label>
                    <input
                      type="text"
                      className={`form-control inp_form ${
                        errors?.townCity ? "border-danger" : ""
                      }`}
                      name="townCity"
                      {...register("townCity", { required: true })}
                    />
                  </div>
                  <div className="col-lg-6 for_jh">
                    <label htmlFor="state" className="form-label ship_lable">
                      <Landmark />
                      State *
                    </label>
                    <input
                      type="text"
                      className={`form-control inp_form ${
                        errors?.state ? "border-danger" : ""
                      }`}
                      name="state"
                      {...register("state", { required: true })}
                    />
                  </div>
                  <div className="col-lg-6 for_jh">
                    <label htmlFor="zipCode" className="form-label ship_lable">
                      <ZipCode />
                      Zip Code *
                    </label>
                    <input
                      type="number"
                      className={`form-control inp_form ${
                        errors?.zipCode ? "border-danger" : ""
                      }`}
                      name="zipCode"
                      {...register("zipCode", { required: true })}
                    />
                  </div>
                  <div className="col-lg-6 for_jh">
                    <label
                      htmlFor="phoneNumber"
                      className="form-label ship_lable"
                    >
                      <Phone />
                      Phone *
                    </label>
                    <input
                      type="number"
                      className={`form-control inp_form ${
                        errors?.phoneNumber ? "border-danger" : ""
                      }`}
                      name="phoneNumber"
                      {...register("phoneNumber", { required: true })}
                    />
                  </div>
                  <div className="col-lg-6 for_jh">
                    <label
                      htmlFor="emailAddress"
                      className="form-label ship_lable"
                    >
                      <MailIcon />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className={`form-control inp_form ${
                        errors?.emailAddress ? "border-danger" : ""
                      }`}
                      name="emailAddress"
                      {...register("emailAddress", { required: true })}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="shipping_badge ddss_rig">
                  <h3>Additional Information</h3>
                </div>
                <div className="col-12 for_jh mkyou">
                  <label
                    htmlFor="companyName"
                    className="form-label ship_lable"
                  >
                    Order Notes (Optional)
                  </label>
                  <textarea
                    className="form-control txt_arwa"
                    rows="3"
                    name="notes"
                    {...register("notes")}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="order_total">
          <div className="shipping_badge nij_jhy">
            <h3>Your Order</h3>
          </div>
          <div className="row moik_kht">
            <div className="col-lg-6 col-xl-4 vskj">
              <div className="order_subtotal">
                <ul>
                  <li>
                    <span>Product</span>
                    <span>Subtotal</span>
                  </li>
                  <li>
                    <span>6-(5-(Methylsulfonyl)-1...</span>
                    <span>$140.00</span>
                  </li>
                  <li>
                    <span>Subtotal</span>
                    <span>$140.00</span>
                  </li>
                  <li>
                    <span>Total</span>
                    <span>$140.00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-xl-8">
              <div className="payment_type">
                <div className="form-check">
                  <input
                    className="form-check-input "
                    type="radio"
                    id="checkPayment"
                    value="checkPayment"
                    name="paymentMethod"
                    onChange={handlePayment}
                    checked={paymentMethod === "checkPayment"}
                  />
                  <br />
                  <label
                    className="form-check-label pay_lab"
                    htmlFor="checkPayment"
                  >
                    Check Payment
                  </label>
                  <div className="store_loca">
                    <p className="store_para">
                      Please Send A Check To Store Name...
                    </p>
                  </div>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input "
                    type="radio"
                    name="paymentMethod"
                    id="paypal"
                    value="paypal"
                    onChange={handlePayment}
                    checked={paymentMethod === "paypal"}
                  />
                  <br />
                  <label className="form-check-label pay_lab" htmlFor="paypal">
                    Paypal
                    <img
                      src={require("assets/payment_method.png")}
                      alt="payment-img"
                    />
                  </label>
                  <p className="store_para">
                    Your Personal. Data Will Be Used To Process Your Order...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="submit_order">
            <button
              className="primary_buttton"
              onClick={handleSubmit(onSubmit)}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
