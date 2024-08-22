import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { AddSynthesisMutation } from "rest/synthesis";

export default function AddSynthesis() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const addEquipment = AddSynthesisMutation();

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
    formData.append("image", data?.equipmentImage[0]);
    addEquipment.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="all-synthesis" name="All Synthesis" />
      <div className="home_banner_input">
        <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
          <div className="mb-3 col-md-6">
            <label htmlFor="mainHeading" className="form-label">
              Main Heading
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
            <label htmlFor="equipmentImage" className="form-label">
              Synthesis Image (445px * 405px)
            </label>
            <FormInput
              type="file"
              name="equipmentImage"
              placeholder="equipmentImage"
              {...register("equipmentImage", {
                required: !perviewImages,
                onChange: (e) => handleChange(e),
              })}
            />
            {errors?.equipmentImage && (
              <p className="errorMessage">Field is required</p>
            )}
            {perviewImages && (
              <img
                src={perviewImages}
                alt="Equipment Preview"
                style={{ maxWidth: "300px", marginTop: "10px" }}
              />
            )}
          </div>

          {addEquipment?.isPending ? (
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
