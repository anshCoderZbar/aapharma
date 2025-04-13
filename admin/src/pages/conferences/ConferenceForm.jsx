import React, { useState } from "react";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { TextEditor } from "components/ui/TextEditor";

export default function ConferenceForm(props) {
  const {
    register,
    handleSubmit,
    errors,
    control,
    isLoading,
    onSubmit,
    defaultValue,
    defaultImages,
  } = props;

  const [perviewImages, setPreviewImages] = useState({
    image: "",
    logo: "",
  });

  const handleChange = (e, type) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages({ ...perviewImages, [type]: imageUrl });
    }
  };

  return (
    <>
      <div className="home_banner_input">
        <form onSubmit={handleSubmit(onSubmit)} className="row mb-3">
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
            {errors?.heading && (
              <p className="errorMessage">Field is required</p>
            )}
          </div>

          <div className="mb-3 col-md-6">
            <label htmlFor="image" className="form-label">
              Image (444px * 296 px)
            </label>
            <FormInput
              type="file"
              name="image"
              placeholder="image"
              {...register("image", {
                required: !perviewImages?.image && !defaultImages?.img1,
                onChange: (e) => handleChange(e, "image"),
              })}
            />
            {errors?.image && <p className="errorMessage">Field is required</p>}
            {perviewImages.image && (
              <img
                src={perviewImages.image}
                alt="main1 Preview"
                className="mt-2"
                style={{ maxWidth: "200px" }}
              />
            )}
            {!perviewImages?.image && defaultImages?.img1 && (
              <img
                src={defaultImages?.img1}
                alt="image Preview"
                className="mt-2"
                style={{ maxWidth: "200px" }}
              />
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="logo" className="form-label">
              Logo
            </label>
            <FormInput
              type="file"
              name="logo"
              placeholder="logo"
              {...register("logo", {
                required: !perviewImages?.logo && !defaultImages?.img2,
                onChange: (e) => handleChange(e, "logo"),
              })}
            />
            {errors?.logo && <p className="errorMessage">Field is required</p>}
            {perviewImages.logo && (
              <img
                src={perviewImages.logo}
                alt="logo Preview"
                className="mt-2"
                style={{ maxWidth: "200px" }}
              />
            )}
            {!perviewImages?.logo && defaultImages?.img2 && (
              <img
                src={defaultImages?.img2}
                alt="logo Preview"
                className="mt-2"
                style={{ maxWidth: "200px" }}
              />
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="subHeading" className="form-label">
              Sub Heading
            </label>
            <FormInput
              type="text"
              name="subHeading"
              placeholder="Sub Heading"
              {...register("subHeading", { required: true })}
            />
            {errors?.subHeading && (
              <p className="errorMessage">Field is required</p>
            )}
          </div>
          <div className="mb-3 col-md-12">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <TextEditor
              control={control}
              name={`description`}
              defaultValue={defaultValue}
              {...register(`description`, {
                required: true,
              })}
            />
            {errors?.description && (
              <p className="errorMessage">field is required</p>
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <FormInput
              type="text"
              name="location"
              placeholder="Location"
              {...register("location", { required: true })}
            />
            {errors?.location && (
              <p className="errorMessage">field is required</p>
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="url" className="form-label">
              URL
            </label>
            <FormInput
              type="text"
              name="url"
              placeholder="URL"
              {...register("url", { required: true })}
            />
            {errors?.url && <p className="errorMessage">field is required</p>}
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
    </>
  );
}
