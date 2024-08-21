import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { EditLabEquipmentMutation } from "rest/capabilities";
import { SingleOthersListMutation } from "rest/others";
import { EditOthersListMutation } from "rest/others";

export default function EditOtherList() {
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

  const singleList = SingleOthersListMutation(formData);
  const editEquipment = EditOthersListMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = singleList?.data?.data?.heading;
    defaultValues.equipmentImage = singleList?.data?.data?.image;
    setDefaultImg(singleList?.data?.data?.image);
    reset(defaultValues);
  }, [singleList?.data?.data]);

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
    formData.append("heading", data?.heading);
    formData.append("image", data?.icon[0]);
    editEquipment.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="others-list" name="Others List" />
      {singleList?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {singleList?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
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
                Icon
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
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt="icon Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="icon Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
            </div>

            {editEquipment?.isPending ? (
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
