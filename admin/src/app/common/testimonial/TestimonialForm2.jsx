import { ButtonLoader } from "components/Loader/ButtonLoader";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import React, { useState } from "react";

export const TestimonialForm2 = ({
  register,
  onSubmit,
  control,
  errors,
  defaultImg,
  isLoading,
}) => {
  const [previewImage, setPreviewImage] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const filePreviewUrl = URL.createObjectURL(file);
      setPreviewImage(filePreviewUrl);
    }
  };
  return (
    <div className="home_banner_input">
      <form onSubmit={onSubmit} className="row mt-4 mb-3">
        <div className="mb-3 col-6">
          <label htmlFor="client" className="form-label">
            Client Logo
          </label>
          <FormInput
            type="file"
            name="clientLogo"
            placeholder="Client Image"
            {...register("clientLogo", {
              required: !previewImage && !defaultImg,
              onChange: (e) => handleChange(e),
            })}
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="personnel banner Preview"
              style={{ maxWidth: "100px", marginTop: "10px" }}
            />
          )}
          {!previewImage && defaultImg && (
            <img
              src={defaultImg}
              alt="personnel banner Preview"
              style={{ maxWidth: "100px", marginTop: "10px" }}
            />
          )}
          {errors?.client && <p className="errorMessage">client is required</p>}
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
          {errors?.authorName && (
            <p className="errorMessage">Author Name is required</p>
          )}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="authorPosition" className="form-label">
            Author Position
          </label>
          <FormInput
            type="text"
            name="authorPosition"
            placeholder="Author Position"
            {...register("authorPosition", { required: true })}
          />
          {errors?.authorPosition && (
            <p className="errorMessage">Author Position is required</p>
          )}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor={`description`} className="form-label">
            Description
          </label>
          <TextEditor
            control={control}
            name={`description`}
            {...register(`description`, {
              required: true,
            })}
          />
          {errors.description && (
            <p className="errorMessage">Description is required</p>
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
