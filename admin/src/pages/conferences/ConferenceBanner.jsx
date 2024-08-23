import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { TextEditor } from "components/ui/TextEditor";
import { GetConferenceBannerMutation } from "rest/conferences";
import { EditConferenceBannerMutation } from "rest/conferences";

export default function ConferenceBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const conferenceBanner = GetConferenceBannerMutation();
  const editBanner = EditConferenceBannerMutation();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = conferenceBanner?.data?.data?.heading;
    defaultValues.banner = conferenceBanner?.data?.data?.image;
    defaultValues.description = conferenceBanner?.data?.data?.description;
    defaultValues.subHeading = conferenceBanner?.data?.data?.subheading;
    setDefaultImg(conferenceBanner?.data?.data?.image);
    reset(defaultValues);
  }, [conferenceBanner?.data?.data]);

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("subheading", data?.subHeading);
    formData.append("image", data?.banner[0]);
    formData.append("description", data?.description);
    editBanner?.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="conference-banner" name="Conference Banner" />
      {conferenceBanner?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}
      {conferenceBanner?.isPending ? (
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
              <label htmlFor="banner" className="form-label">
                Conference Banner (1540px * 305px)
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
                  alt="Conference banner Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="Conference banner Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
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

            <div className="mb-3 col-md-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                name={`description`}
                defaultValue={conferenceBanner?.data?.data?.description}
                {...register(`description`, {
                  required: true,
                })}
              />
              {errors?.description && (
                <p className="errorMessage">Description is required</p>
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
