import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { EditAccredationMutation } from "rest/capabilities";
import { GetSingleAccreditationMutation } from "rest/accreditation";
import { useParams } from "react-router-dom";
import { EditAccreditationMutation } from "rest/accreditation";

export default function EditAccreditations() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const { id } = useParams();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const getAccredation = GetSingleAccreditationMutation(id);
  const editAccredation = EditAccreditationMutation(id);

  useEffect(() => {
    const defaultValues = {};
    defaultValues.image = getAccredation?.data?.data?.image;
    defaultValues.description = getAccredation?.data?.data?.description;
    setDefaultImg(
      "https://coderzbar.net/pharmacy_dev/" + getAccredation?.data?.data?.image
    );
    reset(defaultValues);
  }, [getAccredation?.data?.data]);

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
    editAccredation.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="accreditations" name="Accreditations" />
      {getAccredation?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getAccredation?.isPending ? (
        <ComponentLoader />
      ) : (
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
                    style={{ maxWidth: "300px", marginTop: "10px" }}
                  />
                )}
                {!perviewImages && defaultImg && (
                  <img
                    src={defaultImg}
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
                  defaultValue={getAccredation?.data?.data?.description}
                  {...register(`description`, {
                    required: true,
                  })}
                />
                {errors?.description && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              {editAccredation?.isPending ? (
                <div>
                  <ButtonLoader />
                </div>
              ) : (
                <div className="mb-3 col-12">
                  <input
                    type="submit"
                    value="submit"
                    className="input_submit"
                  />
                </div>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
