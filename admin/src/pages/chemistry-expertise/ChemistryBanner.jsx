import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import {
  GetChemistryBannerMutation,
  CreateChemistryBannerMutation,
} from "rest/chemicalExperties";

export default function ChemistryBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const getBanner = GetChemistryBannerMutation();
  const createBanner = CreateChemistryBannerMutation();

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
    defaultValues.chemistryBanner = getBanner?.data?.data?.image;
    setDefaultImg(getBanner?.data?.data?.image);
    reset(defaultValues);
  }, [getBanner?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("image", data?.chemistryBanner[0]);
    formData.append("description", data?.description);
    createBanner.mutate(formData);
  };

  return (
    <div className="chemistry_page">
      <PageWrapper slug="chemistry-banner" name="Chemistry Banner" />
      <div className="home_banner_input">
        {getBanner?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {getBanner?.isPending ? (
          <ComponentLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="chemistryBanner" className="form-label">
                Banner (1540px * 305px)
              </label>
              <FormInput
                type="file"
                name="chemistryBanner"
                placeholder="chemistryBanner"
                {...register("chemistryBanner", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.chemistryBanner && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt="Chemistry banner Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="Chemistry banner Preview"
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
                <p className="errorMessage">Heading is required</p>
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
                <p className="errorMessage">Description is required</p>
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
