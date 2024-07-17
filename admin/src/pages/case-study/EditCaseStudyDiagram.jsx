import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import {
  GetSingleCaseDiagramMutation,
  EditCaseDiagramMutation,
} from "rest/caseStudy";

export default function EditCaseStudyDiagram() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const formData = new FormData();
  formData?.append("case_study_graphId", id);

  const singleCaseDiagram = GetSingleCaseDiagramMutation(formData);
  const editCaseDiagram = EditCaseDiagramMutation();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  useEffect(() => {
    const defaultValues = {};
    defaultValues.sortNo = singleCaseDiagram?.data?.data?.sortNo;
    defaultValues.heading = singleCaseDiagram?.data?.data?.title;
    defaultValues.description = singleCaseDiagram?.data?.data?.description;
    defaultValues.icon = singleCaseDiagram?.data?.data?.image;
    setDefaultImg(singleCaseDiagram?.data?.data?.image);
    reset(defaultValues);
  }, [singleCaseDiagram?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("case_study_graphId", id);
    formData.append("sortNo", data?.sortNo);
    formData.append("title", data?.heading);
    formData.append("description", data?.description);
    formData.append("image", data?.icon[0]);
    editCaseDiagram.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="case-study-diagram" name="Case Study Diargam" />
      <div className="home_banner_input">
        {singleCaseDiagram?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {singleCaseDiagram?.isPending ? (
          <ComponentLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="sortNo" className="form-label">
                Sort No
              </label>
              <FormInput
                type="number"
                name="sortNo"
                placeholder="Sort No"
                {...register("sortNo", { required: true })}
              />
              {errors?.sortNo && (
                <p className="errorMessage"> Sort No is required</p>
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
              <label htmlFor="icon" className="form-label">
                Icon (41px * 41px)
              </label>
              <FormInput
                type="file"
                name="icon"
                placeholder="icon"
                {...register("icon", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.icon && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt="icon Preview"
                  style={{
                    maxWidth: "100px",
                    marginTop: "10px",
                    backgroundColor: "#2a3071",
                  }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="icon Preview"
                  style={{
                    maxWidth: "100px",
                    marginTop: "10px",
                    backgroundColor: "#2a3071",
                  }}
                />
              )}
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                name="description"
                placeholder="Description"
                defaultValue={singleCaseDiagram?.data?.data?.description}
                {...register("description", { required: true })}
              />
              {errors?.description && (
                <p className="errorMessage">Description is required</p>
              )}
            </div>

            {editCaseDiagram?.isPending ? (
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
    </>
  );
}
