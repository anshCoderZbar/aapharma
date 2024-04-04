import React from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";

import { CouponForm } from "app/common/orders/CouponForm";
import { CreateNewCoupon } from "rest/main";

export default function CreateCoupon() {
  const createCoupon = CreateNewCoupon();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("couponName", data?.couponName);
    formData.append("discount", data?.discount);
    formData.append("discountType", data?.discountType);
    createCoupon.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="all-coupons" name="All Coupons" />
      <div className="home_banner_input">
        <CouponForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          register={register}
          isLoading={createCoupon?.isPending}
        />
      </div>
    </>
  );
}
