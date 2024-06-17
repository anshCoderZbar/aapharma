import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function ServiceButtons() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  //   const getSupportData = GetTherapeuticsSupport();
  //   const createSupportData = CreateTherapeuticsSupport();

  //   useEffect(() => {
  //     const defaultValues = {};
  //     defaultValues.heading = getSupportData?.data?.data?.heading;
  //     defaultValues.firstButton = getSupportData?.data?.data?.button1;
  //     defaultValues.secondButton = getSupportData?.data?.data?.button2;
  //     defaultValues.thirdButton = getSupportData?.data?.data?.button3;
  //     defaultValues.fourthButton = getSupportData?.data?.data?.button4;
  //     defaultValues.fifthButton = getSupportData?.data?.data?.button5;
  //     defaultValues.sixthButton = getSupportData?.data?.data?.button6;
  //     defaultValues.seventhButton = getSupportData?.data?.data?.button7;
  //     defaultValues.eighthButton = getSupportData?.data?.data?.button8;
  //     defaultValues.subHeading = getSupportData?.data?.data?.description;
  //     reset(defaultValues);
  //   }, [getSupportData?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data.heading);
    formData.append("button1", data.firstButton);
    formData.append("button2", data.secondButton);
    formData.append("button3", data.thirdButton);
    formData.append("button4", data.fourthButton);
    formData.append("button5", data.fifthButton);
    formData.append("button6", data.sixthButton);
    formData.append("button7", data.seventhButton);
    formData.append("button8", data.eighthButton);
    formData.append("subheading", data.subHeading);
    // createSupportData.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="services-buttons" name="Buttons" />

      {false && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {false ? (
        <ComponentLoader />
      ) : (
        <div className="input_banners  mb-3">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-12">
              <label htmlFor="heading" className="form-label">
                Heading
              </label>
              <FormInput
                type="text"
                name="heading"
                placeholder="Heading"
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="firstButton" className="form-label">
                First Button
              </label>
              <FormInput
                type="text"
                name="firstButton"
                placeholder="First Button"
                {...register("firstButton", { required: true })}
              />
              {errors?.firstButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="secondButton" className="form-label">
                Second Button
              </label>
              <FormInput
                type="text"
                name="secondButton"
                placeholder="Second Button"
                {...register("secondButton", { required: true })}
              />
              {errors?.secondButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="thirdButton" className="form-label">
                Third Button
              </label>
              <FormInput
                type="text"
                name="thirdButton"
                placeholder="Third Button"
                {...register("thirdButton", { required: true })}
              />
              {errors?.thirdButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="fourthButton" className="form-label">
                Fourth Button
              </label>
              <FormInput
                type="text"
                name="fourthButton"
                placeholder="Fourth Button"
                {...register("fourthButton", { required: true })}
              />
              {errors?.fourthButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="fifthButton" className="form-label">
                Fifth Button
              </label>
              <FormInput
                type="text"
                name="fifthButton"
                placeholder="Fifth Button"
                {...register("fifthButton", { required: true })}
              />
              {errors?.fifthButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="sixthButton" className="form-label">
                Sixth Button
              </label>
              <FormInput
                type="text"
                name="sixthButton"
                placeholder="Sixth Button"
                {...register("sixthButton", { required: true })}
              />
              {errors?.sixthButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="seventhButton" className="form-label">
                Seventh Button
              </label>
              <FormInput
                type="text"
                name="seventhButton"
                placeholder="Seventh Button"
                {...register("seventhButton", { required: true })}
              />
              {errors?.seventhButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="eighthButton" className="form-label">
                Eighth Button
              </label>
              <FormInput
                type="text"
                name="eighthButton"
                placeholder="Eighth Button"
                {...register("eighthButton", { required: true })}
              />
              {errors?.eighthButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="subHeading" className="form-label">
                Sub Heading
              </label>
              <FormInput
                type="text"
                name="subHeading"
                placeholder="Sub Heading"
                {...register("subHeading", { required: true })}
              />
              {errors?.subHeading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            {false ? (
              <div>
                <ButtonLoader />
              </div>
            ) : (
              <div className="mb-3 col-12">
                <input type="submit" value="submit" className="input_submit" />
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
}
