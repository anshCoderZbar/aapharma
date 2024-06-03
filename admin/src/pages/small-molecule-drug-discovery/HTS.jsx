import React, { useEffect, useState } from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { useForm } from "react-hook-form";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function HTS() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState({
    image1: "",
    image2: "",
  });

  const [defaultImages, setDefaultImages] = useState({
    img1: "",
    img2: "",
  });

  const handleChange = (e, type) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages({ ...perviewImages, [type]: imageUrl });
    }
  };

  // useEffect(() => {
  //   const defaultValues = {};
  //   defaultValues.heading = getBanner?.data?.data?.heading;
  //   setDefaultImg(getBanner?.data?.data?.image);
  //   reset(defaultValues);
  // }, [getBanner?.data?.data]);

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    // formData.append("");
    // createBanner.mutate(formData);
  };

  return (
    <div className="process_page">
      <PageWrapper
        slug="process-banner"
        name="Process Research And Development Banner"
      />
      <div className="home_banner_input">
        {false && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {false ? (
          <ComponentLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-12">
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
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                placeholder="Description"
                defaultValue={""}
                {...register("description", { required: true })}
              />
              {errors?.description && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="firstButton" className="form-label">
                First Button
              </label>
              <FormInput
                type="text"
                name="firstButton"
                placeholder="First Button"
                {...register("firstButton", { required: true })}
              />
              {errors?.firstButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="secondButton" className="form-label">
                Second Button
              </label>
              <FormInput
                type="text"
                name="secondButton"
                placeholder="Second Button"
                {...register("secondButton", { required: true })}
              />
              {errors?.secondButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="thirdButton" className="form-label">
                Third Button
              </label>
              <FormInput
                type="text"
                name="thirdButton"
                placeholder="Third Button"
                {...register("thirdButton", { required: true })}
              />
              {errors?.thirdButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="fourthButton" className="form-label">
                Fourth Button
              </label>
              <FormInput
                type="text"
                name="fourthButton"
                placeholder="Fourth Button"
                {...register("fourthButton", { required: true })}
              />
              {errors?.fourthButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="fifthButton" className="form-label">
                Fifth Button
              </label>
              <FormInput
                type="text"
                name="fifthButton"
                placeholder="Fifth Button"
                {...register("fifthButton", { required: true })}
              />
              {errors?.fifthButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="image1" className="form-label">
                Image 1 (466px * 439px)
              </label>
              <FormInput
                type="file"
                name="image1"
                placeholder="image1"
                {...register("image1", {
                  required: !perviewImages?.image1 && !defaultImages?.img1,
                  onChange: (e) => handleChange(e, "image1"),
                })}
              />
              {errors?.image1 && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages?.image1 && (
                <img
                  src={perviewImages?.image1}
                  alt="image1 Preview"
                  className="mt-2"
                  style={{ maxWidth: "500px" }}
                />
              )}
              {!perviewImages?.image1 && defaultImages?.img1 && (
                <img
                  src={defaultImages?.img1}
                  alt="image1 Preview"
                  className="mt-2"
                  style={{ maxWidth: "500px" }}
                />
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="imageSubHeading" className="form-label">
                Image Sub Heading
              </label>
              <FormInput
                type="text"
                name="imageSubHeading"
                placeholder="Fifth Button"
                {...register("imageSubHeading", { required: true })}
              />
              {errors?.image1SubHeading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="image2" className="form-label">
                Image 2 (466px * 439px)
              </label>
              <FormInput
                type="file"
                name="image2"
                placeholder="image2"
                {...register("image2", {
                  required: !perviewImages?.image2 && !defaultImages?.img2,
                  onChange: (e) => handleChange(e, "image2"),
                })}
              />
              {errors?.image2 && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages?.image2 && (
                <img
                  src={perviewImages?.image2}
                  alt="image2 Preview"
                  className="mt-2"
                  style={{ maxWidth: "500px" }}
                />
              )}
              {!perviewImages?.image2 && defaultImages?.img2 && (
                <img
                  src={defaultImages?.img2}
                  alt="image2 Preview"
                  className="mt-2"
                  style={{ maxWidth: "500px" }}
                />
              )}
            </div>
            {false ? (
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
