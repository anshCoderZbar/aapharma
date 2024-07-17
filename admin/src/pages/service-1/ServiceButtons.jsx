import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { GetIsotopeButtonMutation } from "rest/isotope";
import { EditIsotopeButtonMutation } from "rest/isotope";

export default function ServiceButtons() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const getIsotopeButton = GetIsotopeButtonMutation();
  const editIsotopeButton = EditIsotopeButtonMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getIsotopeButton?.data?.data?.heading;
    defaultValues.firstButton = getIsotopeButton?.data?.data?.firstButton;
    defaultValues.secondButton = getIsotopeButton?.data?.data?.secondButton;
    defaultValues.thirdButton = getIsotopeButton?.data?.data?.thirdButton;
    defaultValues.fourthButton = getIsotopeButton?.data?.data?.fourthButton;
    defaultValues.fifthButton = getIsotopeButton?.data?.data?.fifthButton;
    defaultValues.sixthButton = getIsotopeButton?.data?.data?.sixthButton;
    defaultValues.seventhButton = getIsotopeButton?.data?.data?.seventhButton;
    defaultValues.eighthButton = getIsotopeButton?.data?.data?.eighthButton;
    defaultValues.subHeading = getIsotopeButton?.data?.data?.subheading;
    reset(defaultValues);
  }, [getIsotopeButton?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data.heading);
    formData.append("firstButton", data.firstButton);
    formData.append("secondButton", data.secondButton);
    formData.append("thirdButton", data.thirdButton);
    formData.append("fourthButton", data.fourthButton);
    formData.append("fifthButton", data.fifthButton);
    formData.append("sixthButton", data.sixthButton);
    formData.append("seventhButton", data.seventhButton);
    formData.append("eighthButton", data.eighthButton);
    formData.append("subheading", data.subHeading);
    editIsotopeButton.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="services-buttons" name="Buttons" />

      {getIsotopeButton?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getIsotopeButton?.isPending ? (
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
            <div className="mb-3 col-md-3">
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
            <div className="mb-3 col-md-3">
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
            <div className="mb-3 col-md-3">
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
            <div className="mb-3 col-md-3">
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
            <div className="mb-3 col-md-3">
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
            <div className="mb-3 col-md-3">
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
            <div className="mb-3 col-md-3">
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
            <div className="mb-3 col-md-3">
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
            {editIsotopeButton?.isPending ? (
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
