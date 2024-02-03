import React, { useState } from "react";

import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";

import { ButtonLoader } from "components/Loader/ButtonLoader";

export const ChemicalSynthesisForm = ({
  onSubmit,
  register,
  errors,
  isLoading,
  defaultImg,
  control,
}) => {
  const [perviewImages, setPreviewImages] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const filePreviewUrl = URL.createObjectURL(file);
      setPreviewImages(filePreviewUrl);
    }
  };
  return (
    <form onSubmit={onSubmit} className="row mt-4 mb-3">
      <div className="mb-3 col-md-6">
        <label htmlFor="chemicalIcon" className="form-label">
          Icon (65px * 65 px)
        </label>
        <FormInput
          type="file"
          name="chemicalIcon"
          placeholder="chemicalIcon"
          {...register("chemicalIcon", {
            required: !perviewImages && !defaultImg,
            onChange: (e) => handleChange(e),
          })}
        />
        {errors?.chemicalIcon && (
          <p className="errorMessage">Field is required</p>
        )}
        {perviewImages && (
          <img
            src={perviewImages}
            alt="chemical icon"
            style={{ maxWidth: "300px", marginTop: "10px" }}
          />
        )}
        {!perviewImages && defaultImg && (
          <img
            src={defaultImg}
            alt="chemical icon"
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
          placeholder="Heading"
          {...register("heading", { required: true })}
        />
        {errors?.heading && <p className="errorMessage">Field is required</p>}
      </div>
      <div className="mb-3 col-12">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <TextEditor
          control={control}
          name={`description`}
          {...register(`description`, {
            required: true,
          })}
        />

        {errors?.description && (
          <p className="errorMessage">Field is required</p>
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
