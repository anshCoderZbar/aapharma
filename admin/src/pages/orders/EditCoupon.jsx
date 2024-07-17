import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { CouponForm } from "app/common/orders/CouponForm";
import { useParams } from "react-router-dom";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { GetSingleCoupon, EditCouponMutation } from "rest/main";

export default function EditCoupon() {
  const { id } = useParams();

  const formData = new FormData();
  formData.append("id", id);

  const singleCoupon = GetSingleCoupon(formData);
  const editCoupon = EditCouponMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.couponName = singleCoupon?.data?.data?.couponName;
    defaultValues.discount = singleCoupon?.data?.data?.discount;
    defaultValues.discountType = singleCoupon?.data?.data?.discountType;
    reset(defaultValues);
  }, [singleCoupon?.data?.data]);

  const onSubmit = (data) => {
    formData.append("id", id);
    formData.append("couponName", data?.couponName);
    formData.append("discount", data?.discount);
    formData.append("discountType", data?.discountType);
    editCoupon.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="all-coupons" name="All Coupons" />
      {singleCoupon?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : (
        ""
      )}
      {singleCoupon?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <CouponForm
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
            register={register}
            isLoading={editCoupon?.isPending}
          />
        </div>
      )}
    </>
  );
}
