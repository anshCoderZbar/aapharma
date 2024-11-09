import React, { useEffect, useState } from "react";

import { PageWrapper } from "components/ui/PageWrapper";
import { TextEditor } from "components/ui/TextEditor";
import { useForm } from "react-hook-form";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { FormInput } from "components/ui/FormInput";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

import {
  GetIsotopeDetailsMutation,
  EditIsotopeDetailsMutation,
} from "rest/isotope";

export default function ServiceDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const getDetails = GetIsotopeDetailsMutation();
  const editDetails = EditIsotopeDetailsMutation();
  const [images, setImages] = useState({ image1: "", image2: "" });
  const [filePreviews, setFilePreviews] = useState({
    image1Preview: "",
    image2Preview: "",
  });

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getDetails?.data?.data?.heading;
    defaultValues.image1 = getDetails?.data?.data?.image1;
    defaultValues.image2 = getDetails?.data?.data?.image2;
    defaultValues.description1 = getDetails?.data?.data?.description1;
    defaultValues.description2 = getDetails?.data?.data?.description2;
    setImages({
      image1: getDetails?.data?.data?.image1,
      image2: getDetails?.data?.data?.image2,
    });
    reset(defaultValues);
  }, [getDetails?.data?.data]);

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setFilePreviews((prevState) => ({
        ...prevState,
        [`${type}Preview`]: previewURL,
      }));
    }
  };
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("image1", data?.image1[0]);
    formData.append("image2", data?.image2[0]);
    formData.append("description1", data?.description1);
    formData.append("description2", data?.description2);
    editDetails.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="services-details" name="Services Details" />
      <div className="input_banners  mb-3">
        {getDetails?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {getDetails?.isPending ? (
          <ComponentLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-12">
              <label htmlFor="heading" className="form-label">
                Heading
              </label>
              <TextEditor
                name="heading"
                control={control}
                defaultValue={
                  getDetails?.data?.data && getDetails?.data?.data?.heading
                }
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="image1" className="form-label">
                Image 1 (423px * 310px)
              </label>
              <div className="main_icons">
                <FormInput
                  type="file"
                  name="image1"
                  placeholder="image1"
                  {...register("image1", {
                    required: !filePreviews?.image1Preview && !images?.image1,
                    onChange: (e) => handleFileChange(e, "image1"),
                  })}
                />
                {errors?.image1 && (
                  <p className="errorMessage">Icon is required</p>
                )}
                <div className="icon__preview">
                  {filePreviews?.image1Preview && (
                    <img
                      src={filePreviews.image1Preview}
                      alt="Featured Image Preview"
                      style={{ maxWidth: "300px" }}
                    />
                  )}
                  {!filePreviews.image1Preview && images?.image1 && (
                    <img
                      src={images?.image1}
                      alt="Featured Image Preview"
                      style={{ maxWidth: "300px" }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="description1" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                name="description1"
                defaultValue={
                  getDetails?.data?.data && getDetails?.data?.data?.description1
                }
                {...register("description1", { required: true })}
              />
              {errors?.description1 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="image2" className="form-label">
                Image 2 (423px * 310px)
              </label>
              <div className="main_icons">
                <FormInput
                  type="file"
                  name="image2"
                  placeholder="image2"
                  {...register("image2", {
                    required: !filePreviews?.image2Preview && !images?.image2,
                    onChange: (e) => handleFileChange(e, "image2"),
                  })}
                />
                {errors?.image2 && (
                  <p className="errorMessage">Icon is required</p>
                )}
                <div className="icon__preview">
                  {filePreviews?.image2Preview && (
                    <img
                      src={filePreviews.image2Preview}
                      alt="Featured Image Preview"
                      style={{ maxWidth: "300px" }}
                    />
                  )}
                  {!filePreviews.image2Preview && images?.image2 && (
                    <img
                      src={images?.image2}
                      alt="Featured Image Preview"
                      style={{ maxWidth: "300px" }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="description2" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                name="description2"
                defaultValue={
                  getDetails?.data?.data && getDetails?.data?.data?.description2
                }
                {...register("description2", { required: true })}
              />
              {errors?.description2 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            {editDetails?.isPending ? (
              <div>
                <ButtonLoader />
              </div>
            ) : (
              <div className="mb-3 col-12 ">
                <input type="submit" value="submit" className="input_submit" />
              </div>
            )}
          </form>
        )}
      </div>
    </>
  );
}
