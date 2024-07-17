import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { SingleLabEquipmentMutation } from "rest/capabilities";
import { EditLabEquipmentMutation } from "rest/capabilities";

export default function EditLabEquipment() {
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

  const singleEquipment = SingleLabEquipmentMutation(formData);
  const editEquipment = EditLabEquipmentMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = singleEquipment?.data?.data?.heading;
    defaultValues.equipmentImage = singleEquipment?.data?.data?.image;
    setDefaultImg(singleEquipment?.data?.data?.image);
    reset(defaultValues);
  }, [singleEquipment?.data?.data]);

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
    formData.append("image", data?.equipmentImage[0]);
    editEquipment.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="all-lab-equipment" name="Lab Equipment" />
      {singleEquipment?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {singleEquipment?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="mainHeading" className="form-label">
                Main Heading
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
              <label htmlFor="equipmentImage" className="form-label">
                Equipment Image (445px * 405px)
              </label>
              <FormInput
                type="file"
                name="equipmentImage"
                placeholder="equipmentImage"
                {...register("equipmentImage", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.equipmentImage && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt="Equipment Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="Equipment Preview"
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
