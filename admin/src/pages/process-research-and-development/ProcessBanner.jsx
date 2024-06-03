import React, { useEffect, useState } from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { useForm } from "react-hook-form";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { GetProcessBannerMutation } from "rest/ProcessResearchAndDevelopment";
import { EditProcessBannerMutation } from "rest/ProcessResearchAndDevelopment";

export default function ProcessBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const getBanner = GetProcessBannerMutation();

  const createBanner = EditProcessBannerMutation();

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getBanner?.data?.data?.heading;
    defaultValues.description = getBanner?.data?.data?.description;
    defaultValues.subHeading = getBanner?.data?.data?.subheading;
    setDefaultImg(getBanner?.data?.data?.image);
    reset(defaultValues);
  }, [getBanner?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    formData.append("image", data?.processImage[0]);
    formData.append("subheading", data?.subHeading);
    createBanner.mutate(formData);
  };
  return (
    <div className="process_page">
      <PageWrapper
        slug="process-banner"
        name="Process Research And Development Banner"
      />
      <div className="home_banner_input">
        {getBanner?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {getBanner?.isPending ? (
          <ComponentLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="processImage" className="form-label">
                Research Banner (840px * 674px)
              </label>
              <FormInput
                type="file"
                name="processImage"
                placeholder="processImage"
                {...register("processImage", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.processImage && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt="Image Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="Image Preview"
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
                defaultValue={getBanner?.data?.data?.description}
                {...register("description", { required: true })}
              />
              {errors?.description && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-12">
              <label htmlFor="subHeading" className="form-label">
                Sub Heading
              </label>
              <FormInput
                type="text"
                name="subHeading"
                placeholder="subHeading"
                {...register("subHeading", { required: true })}
              />
              {errors?.subHeading && (
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
        )}
      </div>
    </div>
  );
}
