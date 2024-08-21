import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

import { SingleOverviewTabsMutation } from "rest/overview";
import { TextEditor } from "components/ui/TextEditor";
import { EditOverviewTabsMutation } from "rest/overview";

export default function EditOverviewTabs() {
  const { id } = useParams();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formData = new FormData();
  formData.append("id", id);

  const singleTab = SingleOverviewTabsMutation(formData);
  const editTabs = EditOverviewTabsMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = singleTab?.data?.data?.heading;
    defaultValues.description = singleTab?.data?.data?.description;
    reset(defaultValues);
  }, [singleTab?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    editTabs.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="others-list" name="Others List" />
      {singleTab?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {singleTab?.isPending ? (
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
                <p className="errorMessage">Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                defaultValue={singleTab?.data?.data?.description}
                name={`description`}
                {...register(`description`, {
                  required: true,
                })}
              />
              {errors?.description && (
                <p className="errorMessage"> Description is required</p>
              )}
            </div>
            {editTabs?.isPending ? (
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
