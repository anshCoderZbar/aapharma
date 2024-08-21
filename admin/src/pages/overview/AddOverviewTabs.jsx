import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { AddOverviewTabsMutation } from "rest/overview";
import { TextEditor } from "components/ui/TextEditor";

export default function AddOverviewTabs() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addTabs = AddOverviewTabsMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    addTabs.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="others-list" name="Others List" />
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
              name={`description`}
              {...register(`description`, {
                required: true,
              })}
            />
            {errors?.description && (
              <p className="errorMessage"> Description is required</p>
            )}
          </div>

          {addTabs?.isPending ? (
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
    </>
  );
}
