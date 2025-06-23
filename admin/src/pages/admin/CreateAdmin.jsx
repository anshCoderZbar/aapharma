import React from "react";
import { useForm } from "react-hook-form";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import { CreateAdminMutation } from "rest/admin";

export default function CreateAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createAdmin = CreateAdminMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    createAdmin.mutate(formData);
  };

  return (
    <div className="resources_page">
      <PageWrapper slug="add-admin" name="Create Admin" />

      <div className="home_banner_input">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 mb-3">
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <FormInput
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && <p className="errorMessage">Name is required</p>}
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <FormInput
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMessage">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <FormInput
                type="password"
                name="password"
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && (
                <p className="errorMessage">
                  Password must be at least 6 characters
                </p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              {createAdmin?.isPending ? (
                <ButtonLoader />
              ) : (
                <div className="mb-3 col-12">
                  <input
                    type="submit"
                    value="Submit"
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
