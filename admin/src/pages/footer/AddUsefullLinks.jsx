import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import { CreateUsefullLinksMutation } from "rest/footer";

export default function AddUsefullLinks() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createRoutes = CreateUsefullLinksMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data?.name);

    createRoutes.mutate(formData);
  };

  return (
    <div className="resources_page">
      <PageWrapper slug="all-usefull-links" name="Useful Links" />
      <div className="home_banner_input">
        <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 mb-3">
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="name" className="form-label">
                Title
              </label>
              <FormInput
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors?.name && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              {createRoutes?.isPending ? (
                <ButtonLoader />
              ) : (
                <div className="mb-3 col-12">
                  <input
                    type="submit"
                    value="submit"
                    className="input_submit"
                  />
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
