import React, { useEffect, useState } from "react";

import { ButtonLoader } from "components/Loader/ButtonLoader";
import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";
import { TextEditor } from "components/ui/TextEditor";
import { useForm } from "react-hook-form";
import { GetVisionMutation } from "rest/home";
import { CreateVisionMutation } from "rest/home";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function HomeVision() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const [previewImage, setPreviewImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const homeVision = CreateVisionMutation();
  const getVision = GetVisionMutation();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreviewImage(previewURL);
    }
  };

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getVision?.data?.data?.heading;
    defaultValues.description = getVision?.data?.data?.description;
    defaultValues.image = getVision?.data?.data?.image;
    setImageUrl(`${getVision?.data?.baseUrl}/${getVision?.data?.data?.image}`);
    reset(defaultValues);
  }, [getVision?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    formData.append("image", data?.image[0]);
    homeVision.mutate(formData);
  };

  return (
    <div className="vision_page">
      <PageWrapper slug="home-vision" name="Home Vision" />
      {getVision?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}

      {getVision?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="mainHeading" className="form-label">
                Heading
              </label>
              <FormInput
                type="text"
                name="heading"
                placeholder="heading"
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage"> Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="image" className="form-label">
                Banner (2500px * 1080px)
              </label>
              <FormInput
                type="file"
                name="image"
                placeholder="image"
                {...register("image", {
                  required: !previewImage && !imageUrl,
                  onChange: (e) => handleFileChange(e),
                })}
              />
              {errors?.image && (
                <p className="errorMessage"> Image is required</p>
              )}
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Featured Image Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
              {!previewImage && imageUrl && (
                <img
                  src={imageUrl}
                  alt="Featured Image Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
            </div>
            <div className="mb-3 col-md-6">
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
                <p className="errorMessage">Description is required</p>
              )}
            </div>
            {homeVision?.isPending ? (
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
