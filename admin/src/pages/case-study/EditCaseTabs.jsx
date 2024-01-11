import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { GetSingleCaseStudyTabsMutation } from "rest/caseStudy";
import { EditCaseTabsMutation } from "rest/caseStudy";

export default function EditCaseTabs() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formData = new FormData();
  formData?.append("casestudymainId", id);

  const getSingleCaseStudyTabs = GetSingleCaseStudyTabsMutation(formData);
  const editTabsMutation = EditCaseTabsMutation();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  useEffect(() => {
    const defaultValues = {};
    defaultValues.btnTitle = getSingleCaseStudyTabs?.data?.data?.title;
    defaultValues.heading = getSingleCaseStudyTabs?.data?.data?.heading;
    defaultValues.description = getSingleCaseStudyTabs?.data?.data?.description;
    defaultValues.image = getSingleCaseStudyTabs?.data?.data?.image;
    getSingleCaseStudyTabs?.data?.data?.image &&
      setDefaultImg(getSingleCaseStudyTabs?.data?.data?.image);
    reset(defaultValues);
  }, [getSingleCaseStudyTabs?.data?.data]);

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("casestudymainId", id);
    formData.append("title", data?.btnTitle);
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    formData.append("image", data?.image[0]);
    editTabsMutation.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="case-study-tabs" name="Case Study Tabs" />
      {getSingleCaseStudyTabs?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getSingleCaseStudyTabs?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="btnTitle" className="form-label">
                Button Title
              </label>
              <FormInput
                type="text"
                name="btnTitle"
                placeholder="Button Title"
                {...register("btnTitle", { required: true })}
              />
              {errors?.btnTitle && (
                <p className="errorMessage"> Title is required</p>
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
                <p className="errorMessage">Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="image" className="form-label">
                Image (400px * 460px)
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
                  style={{
                    maxWidth: "200px",
                    marginTop: "10px",
                  }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="image Preview"
                  style={{
                    maxWidth: "200px",
                    marginTop: "10px",
                  }}
                />
              )}
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                type="text"
                name="description"
                rows={5}
                className="form-control form_input"
                placeholder="Description"
                {...register("description", { required: true })}
              />
              {errors?.description && (
                <p className="errorMessage">Description is required</p>
              )}
            </div>

            {editTabsMutation?.isPending ? (
              <div>
                <ButtonLoader />
              </div>
            ) : (
              <div className="my-3 col-12">
                <input type="submit" value="submit" className="input_submit" />
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
}
