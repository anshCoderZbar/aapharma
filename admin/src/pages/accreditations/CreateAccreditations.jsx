import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { CreateAccreditationMutation } from "rest/accreditation";

export default function CreateAccreditations() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");

  const addAccreditation = CreateAccreditationMutation();

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data?.image[0]);
    formData.append("description", data?.description);
    addAccreditation.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="accreditations" name="Accreditations" />

      <div className="home_banner_input">
        <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 mb-3">
          <div className="row">
            <div className="mb-3 col-md-12">
              <label htmlFor="image" className="form-label">
                Image (410px * 260px)
              </label>
              <FormInput
                type="file"
                name="image"
                placeholder="image"
                {...register("image", {
                  required: !perviewImages,
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
            {addAccreditation?.isPending ? (
              <div>
                <ButtonLoader />
              </div>
            ) : (
              <div className="mb-3 col-12">
                <input type="submit" value="submit" className="input_submit" />
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
