import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import "styles/main.css";
import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { EditResourcesHeading, GetResourcesHeading } from "rest/resources";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function ResourcesOverview() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const editHeading = EditResourcesHeading();
  const getHeading = GetResourcesHeading();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getHeading?.data?.data?.heading;
    defaultValues.description = getHeading?.data?.data?.description;
    reset(defaultValues);
  }, [getHeading?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    editHeading.mutate(formData);
  };

  return (
    <div className="resources_page">
      <PageWrapper slug="resources-banner" name="Resources Banner" />
      {getHeading?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getHeading?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
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
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                placeholder="Description"
                defaultValue={getHeading?.data?.data?.description}
                {...register("description", { required: true })}
              />
              {errors?.description && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            {editHeading?.isPending ? (
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
