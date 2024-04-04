import React, { useState } from "react";

import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export const TimelineCard = (props) => {
  const {
    onSubmit,
    register,
    errors,
    loading,
    defaultImages,
    setDefaultImages,
  } = props;

  const [perviewImages, setPreviewImages] = useState({
    image1: "",
    image2: "",
  });

  const handleChange = (e, type) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages({ ...perviewImages, [type]: imageUrl });
    }
  };

  return (
    <div className="home_banner_input">
      <form onSubmit={onSubmit} className="row mt-4 mb-3">
        <div className="mb-3 col-md-6">
          <label htmlFor="sortNo" className="form-label">
            Sort No
          </label>
          <FormInput
            type="number"
            name="sortNo"
            placeholder="Sort No"
            {...register("sortNo", { required: true })}
          />
          {errors?.sortNo && <p className="errorMessage">Field is required</p>}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="year" className="form-label">
            Year
          </label>
          <FormInput
            type="number"
            name="Year"
            placeholder="year"
            {...register("year", { required: true })}
          />
          {errors?.year && <p className="errorMessage">Field is required</p>}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="heading1" className="form-label">
            Upper Heading
          </label>
          <FormInput
            type="text"
            name="heading1"
            placeholder="First Heading"
            {...register("heading1")}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="image1" className="form-label">
            Upper Image
          </label>
          <FormInput
            type="file"
            name="image1"
            placeholder="image1"
            {...register("image1", {
              // required: !perviewImages?.image1 && !defaultImages?.img1,
              onChange: (e) => handleChange(e, "image1"),
            })}
          />
          {errors?.image1 && <p className="errorMessage">Field is required</p>}
          {perviewImages?.image1 && (
            <img
              src={perviewImages?.image1}
              alt="image1 Preview"
              className="mt-2 "
              style={{ maxWidth: "250px" }}
            />
          )}
          {!perviewImages?.image1 && defaultImages?.img1 && (
            <img
              src={defaultImages?.img1}
              alt="image1 Preview"
              className="mt-2"
              style={{ maxWidth: "250px" }}
            />
          )}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="heading2" className="form-label">
            Lower Heading
          </label>
          <FormInput
            type="text"
            name="heading2"
            placeholder="First Heading"
            {...register("heading2")}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="image2" className="form-label">
            Lower Image
          </label>
          <FormInput
            type="file"
            name="image2"
            placeholder="image2"
            {...register("image2", {
              onChange: (e) => handleChange(e, "image2"),
            })}
          />
          {perviewImages?.image2 && (
            <img
              src={perviewImages?.image2}
              alt="image2 Preview"
              className="mt-2 "
              style={{ maxWidth: "250px" }}
            />
          )}
          {!perviewImages?.image2 && defaultImages?.img2 && (
            <img
              src={defaultImages?.img2}
              alt="image2 Preview"
              className="mt-2"
              style={{ maxWidth: "250px" }}
            />
          )}
        </div>
        {loading ? (
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
