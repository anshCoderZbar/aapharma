import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { GetTestimonialPageHeading } from "rest/testimonial";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { CreateTestimonialsHeading } from "rest/testimonial";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export default function TestimonialHeading() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const getHeadings = GetTestimonialPageHeading();
  const createHeading = CreateTestimonialsHeading();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getHeadings?.data?.data?.heading;
    defaultValues.subHeading = getHeadings?.data?.data?.description;
    defaultValues.banner = getHeadings?.data?.data?.image;
    setDefaultImg(getHeadings?.data?.data?.image);
    reset(defaultValues);
  }, [getHeadings?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.subHeading);
    formData.append("image", data?.banner[0]);
    createHeading.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="testimonial-content" name="Testimonial Heading" />
      {getHeadings?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getHeadings?.isPending ? (
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
              <label htmlFor="subHeading" className="form-label">
                Sub Heading
              </label>
              <FormInput
                type="text"
                name="subHeading"
                placeholder="Sub Heading"
                {...register("subHeading", { required: true })}
              />
              {errors?.subHeading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="banner" className="form-label">
                Client Banner (1540px * 305px)
              </label>
              <FormInput
                type="file"
                name="banner"
                placeholder="banner"
                {...register("banner", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.banner && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt="banner Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="banner Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
            </div>
            {createHeading?.isPending ? (
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
