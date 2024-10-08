import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import {
  EditProjectManagementBanner,
  GetProjectManagementBanner,
} from "rest/projectManagement";

export default function ProjectManagementBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const createBanner = EditProjectManagementBanner();
  const getBanner = GetProjectManagementBanner();

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
    // setDefaultImg(getBanner?.data?.data?.image);
    reset(defaultValues);
  }, [getBanner?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    // formData.append("image", data?.bannerImage[0]);
    createBanner.mutate(formData);
  };
  return (
    <>
      <PageWrapper
        slug="project-management-banner"
        name="Project Management Banner"
      />
      {getBanner?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getBanner?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
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
            {/* <div className="mb-3 col-md-6">
              <label htmlFor="bannerImage" className="form-label">
                Banner Image (1540px * 305px)
              </label>
              <FormInput
                type="file"
                name="bannerImage"
                placeholder="bannerImage"
                {...register("bannerImage", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.bannerImage && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt=" banner Preview"
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
            </div> */}

            <div className="mb-3 col-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <FormInput
                type="text"
                name="description"
                placeholder="description"
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
        </div>
      )}
    </>
  );
}
