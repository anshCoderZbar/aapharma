import React, { useState } from "react";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { FormInput } from "components/ui/FormInput";

export const ArticleForm = ({
  onSubmit,
  register,
  control,
  errors,
  isLoading,
  articleImage,
  defaultArticleDesc,
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
    <form onSubmit={onSubmit} className="row mt-4 mb-3">
      <div className="mb-3 col-md-6">
        <label htmlFor="heading" className="form-label">
          Article Heading
        </label>
        <FormInput
          type="text"
          name="heading"
          placeholder="Article Heading"
          {...register("heading", { required: true })}
        />
        {errors?.heading && (
          <p className="errorMessage"> Article Heading is required</p>
        )}
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="articleImage" className="form-label">
          Article Image (590px * 410px)
        </label>
        <FormInput
          type="file"
          name="articleImage"
          placeholder="articleImage"
          {...register("articleImage", {
            required: !previewImage && !articleImage,
            onChange: (e) => handleChange(e),
          })}
        />
        {errors?.articleImage && (
          <p className="errorMessage">Article Image is required</p>
        )}
        {previewImage && (
          <div className="mt-2">
            <img
              src={previewImage}
              alt="File Preview"
              style={{ maxWidth: "350px" }}
            />
          </div>
        )}
        {!previewImage && articleImage && (
          <div className="mt-2">
            <img
              src={articleImage}
              alt="File Preview"
              style={{ maxWidth: "350px" }}
            />
          </div>
        )}
      </div>
      <div className="mb-3 col-md-12">
        <label htmlFor={`description`} className="form-label">
          Description
        </label>
        <TextEditor
          control={control}
          name={`description`}
          defaultValue={defaultArticleDesc && defaultArticleDesc}
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
  );
};
