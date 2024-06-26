import React from "react";

import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export const CouponForm = ({ onSubmit, register, errors, isLoading }) => {
  return (
    <form onSubmit={onSubmit} className="row mt-4 mb-3">
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
              name="discountType"
              id="percentage"
              value="percentage"
              {...register("discountType")}
            />
            <label className="form-check-label" htmlFor="percentage">
              Percentage
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="discountType"
              id="flat"
              value="flat"
              {...register("discountType")}
            />
            <label className="form-check-label" htmlFor="flat">
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
        {errors?.discount && <p className="errorMessage">Field is required</p>}
      </div>
      {isLoading ? (
        <div>
          <ButtonLoader />
        </div>
      ) : (
        <div className="mb-3 col-12">
          <input type="submit" value="submit" className="input_submit" />
        </div>
      )}
    </form>
  );
};
