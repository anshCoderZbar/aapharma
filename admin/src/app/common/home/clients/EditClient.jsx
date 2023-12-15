import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { GetSingleClient } from "rest/home";
import { useParams } from "react-router-dom";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { UpdateClientMutation } from "rest/home";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export default function EditClient() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [previewImage, setPreviewImage] = useState("");

  const formData = new FormData();
  formData.append("clientId", id);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const filePreviewUrl = URL.createObjectURL(file);
      setPreviewImage(filePreviewUrl);
    }
  };

  const getSingleClient = GetSingleClient(formData);

  const editClient = UpdateClientMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("clientId", id);
    formData.append("image", data?.image[0]);
    editClient.mutate(formData);
  };

  return (
    <div className="client_page">
      <PageWrapper slug="home-client" name="Home Client" />
      {getSingleClient?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input mb-3">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="mainHeading" className="form-label">
                Image
              </label>
              <FormInput
                type="file"
                name="image"
                placeholder="image"
                {...register("image", {
                  required:
                    !previewImage && !getSingleClient?.data?.data?.image,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.image && (
                <p className="errorMessage"> Image is required</p>
              )}
              {previewImage && (
                <div className="mt-2">
                  <img
                    src={previewImage}
                    alt="File Preview"
                    style={{ maxWidth: "100px" }}
                  />
                </div>
              )}
              {!previewImage && getSingleClient?.data?.data?.image && (
                <img
                  src={getSingleClient?.data?.data?.image}
                  alt="Featured Image Preview"
                  style={{ maxWidth: "100px" }}
                />
              )}
            </div>
            {editClient?.isPending ? (
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
      )}
    </div>
  );
}
