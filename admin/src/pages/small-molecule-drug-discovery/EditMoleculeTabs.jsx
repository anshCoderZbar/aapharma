import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

import {
  GetSingleSmallTabsMutation,
  EditSingleSmallTabsMutation,
} from "rest/smallMolecule";

export default function EditMoleculeTabs() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const formData = new FormData();
  formData?.append("id", id);

  const getSingleTab = GetSingleSmallTabsMutation(formData);
  const editTab = EditSingleSmallTabsMutation();
  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  useEffect(() => {
    const defaultValues = {};
    defaultValues.title = getSingleTab?.data?.data?.title;
    defaultValues.description = getSingleTab?.data?.data?.description;
    defaultValues.image = getSingleTab?.data?.data?.image;
    getSingleTab?.data?.data?.image &&
      setDefaultImg(getSingleTab?.data?.data?.image);
    reset(defaultValues);
  }, [getSingleTab?.data?.data]);

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
    formData.append("title", data?.title);
    formData.append("description", data?.description);
    formData.append("image", data?.image[0]);
    editTab.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="molecule-tabs" name="Molecule Tabs" />
      {getSingleTab?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getSingleTab?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <FormInput
                type="text"
                name="title"
                placeholder="Title"
                {...register("title", { required: true })}
              />
              {errors?.title && (
                <p className="errorMessage"> Title is required</p>
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

            <div className="mb-3 col-md-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                placeholder="Description"
                defaultValue={getSingleTab?.data?.data?.description}
                {...register("description", { required: true })}
              />
              {errors?.description && (
                <p className="errorMessage">Description is required</p>
              )}
            </div>

            {editTab?.isPending ? (
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
