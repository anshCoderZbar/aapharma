import React from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export default function CreateCoupon() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageWrapper slug="all-coupons" name="All Coupons" />
      <div className="home_banner_input">
        <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
          <div className="mb-3 col-md-6">
            <label htmlFor="couponName" className="form-label">
              Coupon Name
            </label>
            <FormInput
              type="text"
              name="couponName"
              placeholder="Coupon Name"
              {...register("couponName", { required: true })}
            />
            {errors?.couponName && (
              <p className="errorMessage">Field is required</p>
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="couponName" className="form-label">
              Discount Type
            </label>
            <div className="d-flex gap-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Percentage
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  Flat
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="discount" className="form-label">
              Discount
            </label>
            <FormInput
              type="number"
              name="discount"
              placeholder="Discount in Percentage or Flat"
              {...register("discount", { required: true })}
            />
            {errors?.discount && (
              <p className="errorMessage">Field is required</p>
            )}
          </div>
          {false ? (
            <ButtonLoader />
          ) : (
            <div className="mb-3 col-12">
              <input type="submit" value="submit" className="input_submit" />
            </div>
          )}
        </form>
      </div>
    </>
  );
}
