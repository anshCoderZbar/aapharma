import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { CreateAboutBannerMutation } from "rest/about";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { GetAboutBannerMutation } from "rest/about";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function AboutBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const createBanner = CreateAboutBannerMutation();

  const getBanner = GetAboutBannerMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getBanner?.data?.data?.heading;
    defaultValues.description = getBanner?.data?.data?.description;
    defaultValues.aboutDescription = getBanner?.data?.data?.description2;
    defaultValues.aboutBanner = getBanner?.data?.data?.image;
    setDefaultImg(getBanner?.data?.data?.image);
    reset(defaultValues);
  }, [getBanner?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    formData.append("description2", data?.aboutDescription);
    formData.append("image", data?.aboutBanner[0]);
    createBanner.mutate(formData);
  };

  return (
    <div className="about-us">
      <PageWrapper slug="about-us" name="About Us" />
      {getBanner?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getBanner?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="input_banners  mb-3">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="aboutBanner" className="form-label">
                About Banner (1540px * 545 px)
              </label>
              <FormInput
                type="file"
                name="aboutBanner"
                placeholder="aboutBanner"
                {...register("aboutBanner", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.aboutBanner && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt="about banner Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="about banner Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
            </div>
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
              <textarea
                type="text"
                name="description"
                rows={5}
                className="form-control form_input"
                placeholder="Description"
                {...register("description", { required: true })}
              />
              {errors?.description && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="aboutDescription" className="form-label">
                About Description
              </label>
              <textarea
                type="text"
                name="aboutDescription"
                rows={5}
                className="form-control form_input"
                placeholder=" About Description"
                {...register("aboutDescription", { required: true })}
              />
              {errors?.aboutDescription && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            {createBanner?.isPending ? (
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
