import React, { useEffect, useState } from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { useForm } from "react-hook-form";
import { CreatePersonnelBanner } from "rest/personnel";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { GetPeronnelBanner } from "rest/personnel";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function PersonnelBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const personnelBanner = CreatePersonnelBanner();
  const getPersonnelBanner = GetPeronnelBanner();
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
    defaultValues.heading = getPersonnelBanner?.data?.data?.heading;
    defaultValues.description = getPersonnelBanner?.data?.data?.description;
    defaultValues.personnelBanner = getPersonnelBanner?.data?.data?.image;
    setDefaultImg(getPersonnelBanner?.data?.data?.image);
    reset(defaultValues);
  }, [getPersonnelBanner?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    formData.append("image", data?.personnelBanner[0]);
    personnelBanner.mutate(formData);
  };
  return (
    <div className="personnel_page">
      <PageWrapper slug="personnel-banner" name="Personnel Banner" />
      <div className="home_banner_input">
        {getPersonnelBanner?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {getPersonnelBanner?.isPending ? (
          <ComponentLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="mainHeading" className="form-label">
                Main Heading
              </label>
              <FormInput
                type="text"
                name="heading"
                placeholder="heading"
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage">Heading is required</p>
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
                <p className="errorMessage">Description is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="personnelBanner" className="form-label">
                Personnel Banner
              </label>
              <FormInput
                type="file"
                name="personnelBanner"
                placeholder="personnelBanner"
                {...register("personnelBanner", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.personnelBanner && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt="personnel banner Preview"
                  className="preview-image"
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="personnel banner Preview"
                  className="preview-image"
                />
              )}
            </div>
            {personnelBanner?.isPending ? (
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
