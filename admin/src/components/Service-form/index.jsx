import React, { useState } from "react";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import "styles/main.css";

export const ServiceForm = ({
  onSubmit,
  register,
  errors,
  isLoading,
  images,
}) => {
  const [filePreviews, setFilePreviews] = useState({
    featuredImagePreview: "",
    iconPreview: "",
  });

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setFilePreviews((prevState) => ({
        ...prevState,
        [`${type}Preview`]: previewURL,
      }));
    }
  };

  return (
    <div className="home_banner_input">
      <form onSubmit={onSubmit} className="row mt-4 mb-3">
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
            <p className="errorMessage"> Heading is required</p>
          )}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="icon" className="form-label">
            Icon (150px * 180px)
          </label>
          <div className="main_icons">
            <div className="icon__img">
              <FormInput
                type="file"
                name="icon"
                placeholder="icon"
                {...register("icon", {
                  required: !filePreviews?.iconPreview && !images?.defaultIcon,
                  onChange: (e) => handleFileChange(e, "icon"),
                })}
              />
              {errors?.icon && (
                <p className="errorMessage"> icon is required</p>
              )}
            </div>
            <div className="icon__preview">
              {filePreviews?.iconPreview && (
                <img
                  src={filePreviews.iconPreview}
                  alt="Featured Image Preview"
                  style={{ maxWidth: "100px" }}
                />
              )}
              {!filePreviews.iconPreview && images?.defaultIcon && (
                <img
                  src={images?.defaultIcon}
                  alt="Featured Image Preview"
                  style={{ maxWidth: "100px" }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="featuredImage" className="form-label">
            Background Image (475px * 650px)
          </label>
          <FormInput
            type="file"
            name="featuredImage"
            placeholder="featuredImage"
            {...register("featuredImage", {
              required:
                !filePreviews?.featuredImagePreview && !images?.defaultImage,
              onChange: (e) => handleFileChange(e, "featuredImage"),
            })}
          />
          {errors?.featuredImage && (
            <p className="errorMessage"> Featured Image is required</p>
          )}
          {filePreviews?.featuredImagePreview && (
            <img
              src={filePreviews.featuredImagePreview}
              alt="Featured Image Preview"
              style={{ maxWidth: "100px" }}
              className="mt-2"
            />
          )}
          {!filePreviews.featuredImagePreview && images?.defaultImage && (
            <img
              src={images?.defaultImage}
              alt="Featured Image Preview"
              style={{ maxWidth: "100px" }}
              className="mt-2"
            />
          )}
        </div>
        {isLoading ? (
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
  );
};
