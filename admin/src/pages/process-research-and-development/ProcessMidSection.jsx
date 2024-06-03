import React, { useEffect, useState } from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { useForm } from "react-hook-form";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { GetProcessMidSectionMutation } from "rest/ProcessResearchAndDevelopment";
import { EditProcessMidSectionMutation } from "rest/ProcessResearchAndDevelopment";

export default function ProcessMidSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const getSection = GetProcessMidSectionMutation();
  const editSection = EditProcessMidSectionMutation();

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  useEffect(() => {
    const defaultValues = {};
    defaultValues.upperHeading = getSection?.data?.data?.upperheading;
    defaultValues.lowerHeading = getSection?.data?.data?.lowerHeading;
    setDefaultImg(getSection?.data?.data?.image);
    reset(defaultValues);
  }, [getSection?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("upperheading", data?.upperHeading);
    formData.append("image", data?.diagramImage[0]);
    formData.append("lowerHeading", data?.lowerHeading);
    editSection.mutate(formData);
  };

  return (
    <div className="process_page">
      <PageWrapper
        slug="process-banner"
        name="Process Research And Development Banner"
      />
      <div className="home_banner_input">
        {getSection?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {getSection?.isPending ? (
          <ComponentLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-12">
              <label htmlFor="upperHeading" className="form-label">
                Upper Heading
              </label>
              <FormInput
                type="text"
                name="upperHeading"
                placeholder="Upper Heading"
                {...register("upperHeading", { required: true })}
              />
              {errors?.upperHeading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="diagramImage" className="form-label">
                Diagram Image (765px * 765px)
              </label>
              <FormInput
                type="file"
                name="diagramImage"
                placeholder="diagramImage"
                {...register("diagramImage", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.diagramImage && (
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
              <label htmlFor="lowerHeading" className="form-label">
                Lower Heading
              </label>
              <FormInput
                type="text"
                name="lowerHeading"
                placeholder="Lower Heading"
                {...register("lowerHeading", { required: true })}
              />
              {errors?.lowerHeading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            {editSection?.isPending ? (
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
