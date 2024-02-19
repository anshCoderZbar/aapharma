import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { TextEditor } from "components/ui/TextEditor";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import {
  GetSingleOperatingPhilosophyDiagram,
  EditOperatingPhilosophyDiagramMutation,
} from "rest/personnel";

export default function EditOperatingDiagram() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const formData = new FormData();
  formData?.append("operatingphilosophygraphId", id);

  const singleOperatingDiagram = GetSingleOperatingPhilosophyDiagram(formData);
  const editOperatingDiagram = EditOperatingPhilosophyDiagramMutation();

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
    defaultValues.sortNo = singleOperatingDiagram?.data?.data?.sortNo;
    defaultValues.heading = singleOperatingDiagram?.data?.data?.title;
    defaultValues.description = singleOperatingDiagram?.data?.data?.description;
    defaultValues.icon = singleOperatingDiagram?.data?.data?.image;
    setDefaultImg(singleOperatingDiagram?.data?.data?.image);
    reset(defaultValues);
  }, [singleOperatingDiagram?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("operatingphilosophygraphId", id);
    formData.append("sortNo", data?.sortNo);
    formData.append("title", data?.heading);
    formData.append("description", data?.description);
    formData.append("image", data?.icon[0]);
    editOperatingDiagram.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="operating-philosophy" name="Operating Philosophy" />
      <div className="home_banner_input">
        {singleOperatingDiagram?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {singleOperatingDiagram?.isPending ? (
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
                defaultValue={singleOperatingDiagram?.data?.data?.description}
                {...register(`description`, {
                  required: true,
                })}
              />
              {errors?.description && (
                <p className="errorMessage">Description is required</p>
              )}
            </div>

            {editOperatingDiagram?.isPending ? (
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
