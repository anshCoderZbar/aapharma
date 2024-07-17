import React, { useEffect, useState } from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { useForm } from "react-hook-form";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { TextEditor } from "components/ui/TextEditor";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { useParams } from "react-router-dom";
import {
  EditProcessTabsMutation,
  SingleProcessTabMutation,
} from "rest/ProcessResearchAndDevelopment";

export default function EditProcessTab() {
  const { id } = useParams();

  const formData = new FormData();
  formData.append("id", id);

  const getSingleTab = SingleProcessTabMutation(formData);
  const editTab = EditProcessTabsMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getSingleTab?.data?.data?.heading;
    defaultValues.description = getSingleTab?.data?.data?.description;
    reset(defaultValues);
  }, [getSingleTab?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    editTab.mutate(formData);
  };

  return (
    <div className="process_page">
      <PageWrapper
        slug="process-bottom-section"
        name="Process Bottom Section"
      />
      {getSingleTab?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getSingleTab?.isPending ? (
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
                placeholder="heading"
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                placeholder="Description"
                defaultValue={getSingleTab?.data?.data?.description}
                {...register("description", { required: true })}
              />
              {errors?.description && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            {editTab?.isPending ? (
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
