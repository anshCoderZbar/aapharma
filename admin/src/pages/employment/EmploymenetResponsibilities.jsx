import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { TextEditor } from "components/ui/TextEditor";
import { GetEmploymentResponsibilities } from "rest/employment";
import { UpdateEmploymentResponsibilities } from "rest/employment";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function EmploymenetResponsibilities() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const getResponsibilities = GetEmploymentResponsibilities();
  const updateResponsibilities = UpdateEmploymentResponsibilities();

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  useEffect(() => {
    const defaultValues = {};
    defaultValues.description = getResponsibilities?.data?.data?.heading;
    defaultValues.list = getResponsibilities?.data?.data?.list;
    defaultValues.sideDescription =
      getResponsibilities?.data?.data?.description;
    setDefaultImg(getResponsibilities?.data?.data?.image);
    // const defaultInputs =
    //   getResponsibilities?.data?.data?.list?.map((elm) => ({
    //     list: elm || "",
    //   })) || [];

    // defaultInputs.length >= 1 && setList(defaultInputs);
    // defaultInputs?.map((elm, i) => {
    //   defaultValues[`list_${i + 1}`] = elm.list;
    // });
    reset(defaultValues);
  }, [getResponsibilities?.data?.data]);

  // const handleDeleteInput = (index) => {
  //   const newArray = [...list];
  //   newArray.splice(index, 1);
  //   setList(newArray);
  //   const listKey = `list_${index + 1}`;
  //   const newFormData = { ...getValues() };
  //   delete newFormData[listKey];
  //   reset(newFormData);
  // };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.description);
    formData.append("description", data?.sideDescription);
    formData.append("list", data?.list);
    formData.append("image", data?.btmImage[0]);
    // list.forEach((_, index) => {
    //   const listKey = `list_${index + 1}`;
    //   formData.append("list[]", data[listKey]);
    // });
    updateResponsibilities?.mutate(formData);
    console.log(data?.description);
  };
  return (
    <div className="employment_page">
      <PageWrapper slug="employment-responsibilities" name="Responsibilities" />
      {getResponsibilities?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getResponsibilities?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 mb-3">
            <div className="row">
              <div className="mb-4 col-12">
                <label htmlFor={`description`} className="form-label">
                  Description
                </label>
                <TextEditor
                  control={control}
                  name={`description`}
                  defaultValue={getResponsibilities?.data?.data?.heading}
                  {...register(`description`, {
                    required: true,
                  })}
                />
                {errors.description && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="mb-3 col-12">
                <label htmlFor="list" className="form-label">
                  List
                </label>
                <TextEditor
                  control={control}
                  name={`list`}
                  defaultValue={getResponsibilities?.data?.data?.list}
                  {...register(`list`, {
                    required: true,
                  })}
                />
                {errors?.list && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
            </div>
            <div className="mb-4 col-12">
              <label htmlFor={`sideDescription`} className="form-label">
                Side Description
              </label>
              <TextEditor
                control={control}
                name={`sideDescription`}
                defaultValue={getResponsibilities?.data?.data?.description}
                {...register(`sideDescription`, {
                  required: true,
                })}
              />
              {errors.sideDescription && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="btmImage" className="form-label">
                Image (1320px * 620 px)
              </label>
              <FormInput
                type="file"
                name="btmImage"
                placeholder="btmImage"
                {...register("btmImage", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.btmImage && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt="bottom banner Preview"
                  style={{ maxWidth: "500px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="bottom banner Preview"
                  style={{ maxWidth: "500px", marginTop: "10px" }}
                />
              )}
            </div>
            {updateResponsibilities?.isPending ? (
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
    </div>
  );
}
