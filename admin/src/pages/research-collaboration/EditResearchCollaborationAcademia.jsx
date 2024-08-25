import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

import { GetSingleResearchCollaborationAcademia } from "rest/researchCollaboration";
import { EditResearchCollaborationAcademiaMutation } from "rest/researchCollaboration";

export default function EditResearchCollaborationAcademia() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formData = new FormData();
  formData.append("id", id);

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const singleAcademia = GetSingleResearchCollaborationAcademia(formData);
  const editAcademia = EditResearchCollaborationAcademiaMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.description = singleAcademia?.data?.data?.description;
    defaultValues.image = singleAcademia?.data?.data?.image;
    setDefaultImg(singleAcademia?.data?.data?.image);
    reset(defaultValues);
  }, [singleAcademia?.data?.data]);

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("description", data?.description);
    formData.append("image", data?.image[0]);
    editAcademia.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="research-collaboration-academia" name="Academia" />
      {singleAcademia?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {singleAcademia?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <FormInput
                type="text"
                name="description"
                placeholder="description"
                {...register("description", { required: true })}
              />
              {errors?.description && (
                <p className="errorMessage">Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="image" className="form-label">
                Image
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
                  alt="Image Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="Image Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
            </div>

            {editAcademia?.isPending ? (
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
    </>
  );
}
