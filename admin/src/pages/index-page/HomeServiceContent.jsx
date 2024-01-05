import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { HomeServicesHeadings } from "rest/home";
import { GetHomeServicesHeadings } from "rest/home";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { PageWrapper } from "components/ui/PageWrapper";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export default function HomeServiceContent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();
  const homeServicesHeadings = HomeServicesHeadings();
  const getHomeServicesHeadings = GetHomeServicesHeadings();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    homeServicesHeadings.mutate(formData);
  };

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getHomeServicesHeadings?.data?.data?.heading;
    defaultValues.description =
      getHomeServicesHeadings?.data?.data?.description;
    reset(defaultValues);
  }, [getHomeServicesHeadings?.data?.data]);
  return (
    <>
      <PageWrapper slug="home-services-content" name="Home Services Content" />

      {getHomeServicesHeadings?.isError && (
        <ErrorComponent message="OOPS! some error occured" />
      )}
      {getHomeServicesHeadings?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="mainHeading" className="form-label">
                Heading
              </label>
              <FormInput
                type="text"
                name="heading"
                placeholder="heading"
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage"> Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor={`description`} className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                name={`description`}
                {...register(`description`, {
                  required: true,
                })}
              />
              {errors.description && (
                <p className="errorMessage">Description is required</p>
              )}
            </div>
            {homeServicesHeadings?.isPending ? (
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
