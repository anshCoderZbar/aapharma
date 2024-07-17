import React, { useState } from "react";

import { Layout } from "app/images";

import "styles/auth.css";
import { FormInput } from "components/ui/FormInput";
import { Button } from "components/ui/Button";
import { useForm } from "react-hook-form";
import { loginSchema } from "app/common/auth/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";

import { AdminLogin } from "rest/auth";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const loginMutation = AdminLogin();

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="authentication-wrapper authentication-cover">
      <div className="authentication-inner row m-0">
        <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center p-5">
          <div className="w-100 d-flex justify-content-center">
            <img
              src={Layout?.SIDE_IMAGE}
              className="img-fluid"
              alt="Login"
              width="700"
            />
          </div>
        </div>

        <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4">
          <div className="w-100 mx-auto">
            <div className="app-brand  mb-2">
              <img src={Layout?.LOGO} alt="logo" className="d-block mx-auto" />
            </div>

            <form className="mt-4 mb-3">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <FormInput
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                {errors?.email && (
                  <p className="errorMessage">{errors?.email?.message}</p>
                )}
              </div>
              <div className="mb-3 form-password-toggle">
                <div className="d-flex justify-content-between">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <Link to="/">
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <div className="input-group input-group-merge">
                  <FormInput
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    autoComplete="false"
                    {...register("password")}
                  />
                  {!showPassword && (
                    <span
                      onClick={() => setShowPassword(true)}
                      className="input-group-text cursor_pointer"
                    >
                      <EyeOff />
                    </span>
                  )}
                  {showPassword && (
                    <span
                      onClick={() => setShowPassword(false)}
                      className="input-group-text cursor_pointer"
                    >
                      <Eye />
                    </span>
                  )}
                </div>
                {errors?.password && (
                  <p className="errorMessage">{errors?.password?.message}</p>
                )}
              </div>
            </form>
            {loginMutation?.isPending ? (
              <div className="d-flex justify-content-center">
                <ButtonLoader />
              </div>
            ) : (
              <Button onClick={handleSubmit(onSubmit)}>Sign In</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
