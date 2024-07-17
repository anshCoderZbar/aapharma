import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function ProjectManagementBottomDescription() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const createDesc = false;
  const getDesc = false;

  // useEffect(() => {
  //   const defaultValues = {};
  //   defaultValues.heading = getDesc?.data?.data?.heading;
  //   defaultValues.description = getDesc?.data?.data?.description;
  //   reset(defaultValues);
  // }, [getDesc?.data?.data]);

  const onSubmit = (data) => {
    // const formData = new FormData();
    // formData.append("heading", data?.heading);
    // formData.append("description", data?.description);
    // formData.append("image", data?.bannerImage[0]);
    // createBanner.mutate(formData);
  };

  return (
    <>
      <PageWrapper
        slug="project-management-bottom-description"
        name="Project Management Bottom Description"
      />
      {getDesc?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getDesc?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                name={`description`}
                defaultValue={"getPersonnelBanner?.data?.data?.description"}
                {...register(`description`, {
                  required: true,
                })}
              />
              {errors?.description && (
                <p className="errorMessage">Description is required</p>
              )}
            </div>
            <div className="mb-3 col-12">
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

            {createDesc?.isPending ? (
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
