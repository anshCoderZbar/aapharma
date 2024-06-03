import React, { useEffect, useState } from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { useForm } from "react-hook-form";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { TextEditor } from "components/ui/TextEditor";

import { CreateProcessTabsMutation } from "rest/ProcessResearchAndDevelopment";

export default function AddProcessTab() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const addTabs = CreateProcessTabsMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    addTabs.mutate(formData);
  };

  return (
    <div className="process_page">
      <PageWrapper
        slug="process-bottom-section"
        name="Process Bottom Section"
      />
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
              defaultValue={""}
              {...register("description", { required: true })}
            />
            {errors?.description && (
              <p className="errorMessage">Field is required</p>
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
    </div>
  );
}
