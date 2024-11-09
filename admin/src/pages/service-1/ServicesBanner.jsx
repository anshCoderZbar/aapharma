import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import {
  GetIsotopeBannerMutation,
  EditIsotopeBannerMutation,
} from "rest/isotope";
import { TextEditor } from "components/ui/TextEditor";

export default function ServicesBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const getBanner = GetIsotopeBannerMutation();

  const createBanner = EditIsotopeBannerMutation();

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
    defaultValues.serviceBanner = getBanner?.data?.data?.image;
    setDefaultImg(getBanner?.data?.data?.image);
    reset(defaultValues);
  }, [getBanner?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("image", data?.serviceBanner[0]);
    createBanner.mutate(formData);
  };
  return (
    <div className="process_page">
      <PageWrapper slug="services-banner" name="Services Banner" />
      <div className="home_banner_input">
        {getBanner?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {getBanner?.isPending ? (
          <ComponentLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-12">
              <label htmlFor="serviceBanner" className="form-label">
                Service Banner (1540px * 545 px)
              </label>
              <FormInput
                type="file"
                name="serviceBanner"
                {...register("serviceBanner", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.serviceBanner && (
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
            <div className="mb-3 col-12">
              <label htmlFor="heading" className="form-label">
                Heading
              </label>
              <TextEditor
                name="heading"
                control={control}
                defaultValue={
                  getBanner?.data?.data && getBanner?.data?.data?.heading
                }
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
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
