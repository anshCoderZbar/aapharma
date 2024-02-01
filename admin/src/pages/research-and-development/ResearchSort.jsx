import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "styles/main.css";
import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function ResearchSort() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const createSortData = { isPending: false, isError: false };
  const getSortData = { isPending: false, isError: false };
  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  //   useEffect(() => {
  //     const defaultValues = {};
  //     defaultValues.heading = getSortData?.data?.data?.heading;
  //     defaultValues.description = getSortData?.data?.data?.description;
  //     defaultValues.image = getSortData?.data?.data?.image;
  //     defaultValues.button1 = getSortData?.data?.data?.button1;
  //     defaultValues.button2 = getSortData?.data?.data?.button2;
  //     defaultValues.button3 = getSortData?.data?.data?.button3;
  //     defaultValues.button4 = getSortData?.data?.data?.button4;
  //     defaultValues.button5 = getSortData?.data?.data?.button5;
  //     defaultValues.button6 = getSortData?.data?.data?.button6;
  //     defaultValues.button7 = getSortData?.data?.data?.button7;
  //     defaultValues.button8 = getSortData?.data?.data?.button8;
  //     setDefaultImg(getSortData?.data?.data?.image);
  //     reset(defaultValues);
  //   }, [getSortData?.data?.data]);

  const onSubmit = (data) => {
    // const formData = new FormData();
    // formData.append("heading", data?.heading);
    // formData.append("description", data?.description);
    // formData.append("image", data?.image[0]);
    // formData.append("button1", data?.button1);
    // formData.append("button2", data?.button2);
    // formData.append("button3", data?.button3);
    // formData.append("button4", data?.button4);
    // formData.append("button5", data?.button5);
    // formData.append("button6", data?.button6);
    // formData.append("button7", data?.button7);
    // formData.append("button8", data?.button8);
    // createSortData.mutate(formData)
    console.log(data);
  };
  return (
    <div className="research_page">
      <PageWrapper slug="research-sort" name="Research And Development SORT" />
      <div className="home_banner_input">
        {getSortData?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {getSortData?.isPending ? (
          <ComponentLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <h2 className="heading_main">Top Buttons</h2>
            <div className="mb-3 col-md-3">
              <label htmlFor="button1" className="form-label">
                First Button
              </label>
              <FormInput
                type="text"
                name="button1"
                placeholder="First Button"
                {...register("button1", { required: true })}
              />
              {errors?.button1 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-3">
              <label htmlFor="button2" className="form-label">
                Second Button
              </label>
              <FormInput
                type="text"
                name="button2"
                placeholder="Second Button"
                {...register("button2", { required: true })}
              />
              {errors?.button2 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-3">
              <label htmlFor="button3" className="form-label">
                Third Button
              </label>
              <FormInput
                type="text"
                name="button3"
                placeholder="Third Button"
                {...register("button3", { required: true })}
              />
              {errors?.button3 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-3">
              <label htmlFor="button4" className="form-label">
                Fourth Button
              </label>
              <FormInput
                type="text"
                name="button4"
                placeholder="Fourth Button"
                {...register("button4", { required: true })}
              />
              {errors?.button4 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-3">
              <label htmlFor="button5" className="form-label">
                Fifth Button
              </label>
              <FormInput
                type="text"
                name="button5"
                placeholder="Fifth Button"
                {...register("button5", { required: true })}
              />
              {errors?.button5 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-md-3">
              <label htmlFor="button6" className="form-label">
                Sixth Button
              </label>
              <FormInput
                type="text"
                name="button6"
                placeholder="Sixth Button"
                {...register("button6", { required: true })}
              />
              {errors?.button6 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-md-3">
              <label htmlFor="button7" className="form-label">
                Seventh Button
              </label>
              <FormInput
                type="text"
                name="button7"
                placeholder="Seventh Button"
                {...register("button7", { required: true })}
              />
              {errors?.button7 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-md-3">
              <label htmlFor="button8" className="form-label">
                Eighth Button
              </label>
              <FormInput
                type="text"
                name="button8"
                placeholder="Eighth Button"
                {...register("button8", { required: true })}
              />
              {errors?.button8 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <h2 className="heading_main mt-4">Sort Details</h2>
            <div className="mb-3 col-md-6">
              <label htmlFor="image" className="form-label">
                Image (800px * 310px)
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
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="sort Preview"
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
                placeholder="heading"
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-4 col-12">
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
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            {createSortData?.isPending ? (
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
