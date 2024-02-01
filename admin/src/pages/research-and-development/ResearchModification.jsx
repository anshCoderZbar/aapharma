import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "styles/main.css";
import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function ResearchModification() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const createModificationData = { isPending: false, isError: false };
  const getModificationData = { isPending: false, isError: false };
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
  //     defaultValues.heading = getModificationData?.data?.data?.heading;
  //     defaultValues.description = getModificationData?.data?.data?.description;
  //     defaultValues.image = getModificationData?.data?.data?.image;
  //     defaultValues.button1 = getModificationData?.data?.data?.button1;
  //     defaultValues.button2 = getModificationData?.data?.data?.button2;
  //     defaultValues.button3 = getModificationData?.data?.data?.button3;
  //     defaultValues.button4 = getModificationData?.data?.data?.button4;
  //     setDefaultImg(getModificationData?.data?.data?.image);
  //     reset(defaultValues);
  //   }, [getModificationData?.data?.data]);

  const onSubmit = (data) => {
    // const formData = new FormData();
    // formData.append("heading", data?.heading);
    // formData.append("description", data?.description);
    // formData.append("image", data?.image[0]);
    // formData.append("button1", data?.button1);
    // formData.append("button2", data?.button2);
    // formData.append("button3", data?.button3);
    // formData.append("button4", data?.button4);
    // createModificationData.mutate(formData)
    console.log(data);
  };
  return (
    <div className="research_page">
      <PageWrapper
        slug="research-modification"
        name="Research And Development Modification"
      />
      <div className="home_banner_input">
        {getModificationData?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {getModificationData?.isPending ? (
          <ComponentLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-12">
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
            {/* <h2 className="heading_main">Buttons</h2> */}
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

            {/* <h2 className="heading_main mt-4">Modifcation Details</h2> */}

            <div className="mb-3 col-md-12">
              <label htmlFor="image" className="form-label">
                Image (1700px * 690px)
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
                  style={{ maxWidth: "500px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="sort Preview"
                  style={{ maxWidth: "500px", marginTop: "10px" }}
                />
              )}
            </div>

            <div className="mb-4 col-md-12">
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

            {createModificationData?.isPending ? (
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
