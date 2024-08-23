import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { TextEditor } from "components/ui/TextEditor";

import "styles/main.css";

import { CreateOverviewBannerMutation } from "rest/overview";
import { GetOverviewBannerMutation } from "rest/overview";

export default function OverviewBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const createBanner = CreateOverviewBannerMutation();
  const getBanner = GetOverviewBannerMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.description = getBanner?.data?.data?.description;
    defaultValues.heading = getBanner?.data?.data?.heading;
    defaultValues.footerDescription = getBanner?.data?.data?.footerDescription;
    reset(defaultValues);
  }, [getBanner?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("subheading", data?.subHeading);
    formData.append("description", data?.description);
    formData.append("footerDescription", data?.footerDescription);
    createBanner?.mutate(formData);
  };

  return (
    <div className="others_page">
      <PageWrapper slug="overview-banner" name="Overview Banner" />
      {getBanner?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}
      {getBanner?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
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
                <p className="errorMessage">Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="description" className="form-label">
                Top Description
              </label>
              <TextEditor
                control={control}
                name={`description`}
                defaultValue={getBanner?.data?.data?.description}
                {...register(`description`, {
                  required: true,
                })}
              />
              {errors?.description && (
                <p className="errorMessage">Top Description is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="footerDescription" className="form-label">
                Bottom Description
              </label>
              <TextEditor
                control={control}
                name={`footerDescription`}
                defaultValue={getBanner?.data?.data?.footerDescription}
                {...register(`footerDescription`, {
                  required: true,
                })}
              />
              {errors?.footerDescription && (
                <p className="errorMessage">Bottom Description is required</p>
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
        </div>
      )}
    </div>
  );
}
