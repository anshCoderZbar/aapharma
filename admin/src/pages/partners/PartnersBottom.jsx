import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { TextEditor } from "components/ui/TextEditor";
import { GetPartnerBottomMutation } from "rest/partner";
import { EditPartnerBottomMutation } from "rest/partner";

export default function PartnersBottom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const getBottom = GetPartnerBottomMutation();
  const createBottom = EditPartnerBottomMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.description = getBottom?.data?.data?.description;
    setDefaultImg(getBottom?.data?.data?.image);
    reset(defaultValues);
  }, [getBottom?.data?.data]);

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data?.bgImg[0]);
    formData.append("description", data?.description);
    createBottom?.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="partner-cards" name="Partner Cards" />
      <div className="home_banner_input">
        <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
          <div className="mb-3 col-md-6">
            <label htmlFor="bgImg" className="form-label">
              Background Image (1540px * 305px)
            </label>
            <FormInput
              type="file"
              name="bgImg"
              placeholder="bgImg"
              {...register("bgImg", {
                required: !perviewImages && !defaultImg,
                onChange: (e) => handleChange(e),
              })}
            />
            {errors?.bgImg && <p className="errorMessage">Field is required</p>}
            {perviewImages && (
              <img
                src={perviewImages}
                alt="bgImg Preview"
                style={{ maxWidth: "300px", marginTop: "10px" }}
              />
            )}
            {!perviewImages && defaultImg && (
              <img
                src={defaultImg}
                alt="bgImg Preview"
                style={{ maxWidth: "300px", marginTop: "10px" }}
              />
            )}
          </div>

          <div className="mb-3 col-md-12">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <TextEditor
              control={control}
              name={`description`}
              defaultValue={getBottom?.data?.data?.description}
              {...register(`description`, {
                required: true,
              })}
            />
            {errors?.description && (
              <p className="errorMessage">Description is required</p>
            )}
          </div>

          {createBottom?.isPending ? (
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
    </>
  );
}
