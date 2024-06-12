import React, { useEffect, useState } from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { useForm } from "react-hook-form";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

import {
  EditSmallMoleculeBannerMutation,
  GetSmallMoleculeBannerMutation,
} from "rest/smallMolecule";

export default function SmallMoleculeBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const createBanner = EditSmallMoleculeBannerMutation();

  const getBanner = GetSmallMoleculeBannerMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getBanner?.data?.data?.heading;
    defaultValues.subHeading = getBanner?.data?.data?.subheading;
    reset(defaultValues);
  }, [getBanner?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("subheading", data?.subHeading);
    createBanner.mutate(formData);
  };

  return (
    <div className="process_page">
      <PageWrapper slug="small-molecule-banner" name="Small Molecule Banner" />
      <div className="home_banner_input">
        {getBanner?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {getBanner?.isPending ? (
          <ComponentLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-12">
              <label htmlFor="heading" className="form-label">
                Heading
              </label>
              <FormInput
                type="text"
                name="heading"
                placeholder="heading"
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="subHeading" className="form-label">
                Sub Heading
              </label>
              <FormInput
                type="text"
                name="subHeading"
                placeholder="subHeading"
                {...register("subHeading", { required: true })}
              />
              {errors?.subHeading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            {createBanner?.isPending ? (
              <div>
                <ButtonLoader />
              </div>
            ) : (
              <div className="mb-3 col-12">
                <input type="submit" value="submit" className="input_submit" />
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
