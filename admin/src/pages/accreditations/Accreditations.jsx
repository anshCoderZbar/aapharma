import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function Accreditations() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("image", data?.image[0]);
    formData.append("description", data?.description);
    // expertiesIncludes.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="accreditations" name="Accreditations" />
      {false && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {false ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 mb-3">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="heading" className="form-label">
                  Heading
                </label>
                <FormInput
                  type="text"
                  name="heading"
                  placeholder="Heading "
                  {...register("heading", {
                    required: true,
                  })}
                />
                {errors?.heading && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="image" className="form-label">
                  Image (840px * 470px)
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
                    alt="image Preview"
                    style={{ maxWidth: "300px", marginTop: "10px" }}
                  />
                )}
                {!perviewImages && defaultImg && (
                  <img
                    src={defaultImg}
                    alt="image Preview"
                    style={{ maxWidth: "300px", marginTop: "10px" }}
                  />
                )}
              </div>
              <div className="mb-3 col-12">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <TextEditor
                  control={control}
                  name={`description`}
                  defaultValue={""}
                  {...register(`description`, {
                    required: true,
                  })}
                />
                {errors?.description && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              {false ? (
                <div>
                  <ButtonLoader />
                </div>
              ) : (
                <div className="mb-3 col-12">
                  <input
                    type="submit"
                    value="submit"
                    className="input_submit"
                  />
                </div>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
