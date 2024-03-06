import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { TextEditor } from "components/ui/TextEditor";

import { GetWhitePaperBanner } from "rest/whitepaper";
import { CreateWhitePaperBannerMutation } from "rest/whitepaper";

export default function WhitepaperBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const getBanner = GetWhitePaperBanner();
  const editBanner = CreateWhitePaperBannerMutation();

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
    defaultValues.subHeading = getBanner?.data?.data?.subheading;
    defaultValues.banner = getBanner?.data?.data?.image;
    defaultValues.description = getBanner?.data?.data?.description;
    defaultValues.slogan = getBanner?.data?.data?.slogan;
    defaultValues.authorName = getBanner?.data?.data?.sloganBy;
    setDefaultImg(getBanner?.data?.data?.image);
    reset(defaultValues);
  }, [getBanner?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("subheading", data?.subHeading);
    formData.append("image", data?.banner[0]);
    formData.append("description", data?.description);
    formData.append("slogan", data?.slogan);
    formData.append("sloganBy", data?.authorName);
    editBanner.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="operating-philosophy" name="Operating Philosophy" />
      {getBanner?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getBanner?.isPending ? (
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
                <p className="errorMessage">Heading is required</p>
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
                <p className="errorMessage">Sub Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="banner" className="form-label">
                Whitepaper Banner (1540px * 305px)
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
                  alt="whitepaper banner Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="whitepaper banner Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                name={`description`}
                defaultValue={getBanner?.data?.data?.description}
                {...register(`description`, {
                  required: true,
                })}
              />
              {errors?.description && (
                <p className="errorMessage">Description is required</p>
              )}
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="slogan" className="form-label">
                Slogan
              </label>
              <FormInput
                type="text"
                name="slogan"
                placeholder="Slogan"
                {...register("slogan", { required: true })}
              />
              {errors?.slogan && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="authorName" className="form-label">
                Author Name
              </label>
              <FormInput
                type="text"
                name="authorName"
                placeholder="Author Name"
                {...register("authorName", { required: true })}
              />
              {errors?.slogan && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            {editBanner?.isPending ? (
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
