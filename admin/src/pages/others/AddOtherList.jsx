import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { AddOthersListMutation } from "rest/others";

export default function AddOtherList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const addList = AddOthersListMutation();

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("image", data?.icon[0]);
    addList.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="others-list" name="Others List" />
      <div className="home_banner_input">
        <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
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
              <p className="errorMessage">Heading is required</p>
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="icon" className="form-label">
              Icon
            </label>
            <FormInput
              type="file"
              name="icon"
              placeholder="icon"
              {...register("icon", {
                required: !perviewImages,
                onChange: (e) => handleChange(e),
              })}
            />
            {errors?.icon && <p className="errorMessage">Field is required</p>}
            {perviewImages && (
              <img
                src={perviewImages}
                alt="Equipment Preview"
                style={{ maxWidth: "300px", marginTop: "10px" }}
              />
            )}
          </div>

          {addList?.isPending ? (
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
