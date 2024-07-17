import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "styles/main.css";
import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { useParams } from "react-router-dom";
import {
  GetSingleResearchDevelopmentTabs,
  EditResearchTabs,
} from "rest/researchDevelopement";

export default function ResearchModificationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();

  const formData = new FormData();
  formData.append("id", id);

  const getSingleTabs = GetSingleResearchDevelopmentTabs(formData);
  const createModificationData = EditResearchTabs();
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
    defaultValues.heading = getSingleTabs?.data?.data?.heading;
    defaultValues.image = getSingleTabs?.data?.data?.image;
    setDefaultImg(getSingleTabs?.data?.data?.image);
    reset(defaultValues);
  }, [getSingleTabs?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("heading", data?.heading);
    formData.append("image", data?.image[0]);
    createModificationData.mutate(formData);
  };
  return (
    <div className="research_page">
      <PageWrapper
        slug="research-modification"
        name="Research And Development Modification"
      />
      <div className="home_banner_input">
        {getSingleTabs?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {getSingleTabs?.isPending ? (
          <ComponentLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
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
              <label htmlFor="image" className="form-label">
                Image (1700px * 690px)
              </label>
              <FormInput
                type="file"
                name="image"
                placeholder="image"
                {...register("image", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.image && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt="sort Preview"
                  style={{ maxWidth: "500px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="sort Preview"
                  style={{ maxWidth: "500px", marginTop: "10px" }}
                />
              )}
            </div>

            {createModificationData?.isPending ? (
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
