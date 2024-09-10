import React, { useEffect, useState } from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { useForm } from "react-hook-form";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { TextEditor } from "components/ui/TextEditor";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { Plus, X } from "lucide-react";

import {
  GetLeadDevelopmentMutation,
  EditLeadDevelopmentMutation,
} from "rest/smallMolecule";

export default function LeadDevelopment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    getValues,
  } = useForm();

  const editLeadDevelopment = EditLeadDevelopmentMutation();
  const getLeadDevelopment = GetLeadDevelopmentMutation();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");
  const [list, setList] = useState([{ list: "" }]);

  const handleDeleteInput = (index) => {
    const newArray = [...list];
    newArray.splice(index, 1);
    setList(newArray);
    const listKey = `list_${index + 1}`;
    const newFormData = { ...getValues() };
    delete newFormData[listKey];
    reset(newFormData);
  };

  const handleChange = (e) => {
    const files = e?.target?.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getLeadDevelopment?.data?.data?.heading;
    defaultValues.description = getLeadDevelopment?.data?.data?.description;
    // defaultValues.subHeading = getLeadDevelopment?.data?.data?.subheading;
    defaultValues.image = getLeadDevelopment?.data?.data?.image;
    const defaultInputs =
      getLeadDevelopment?.data?.data?.list?.map((elm) => ({
        list: elm || "",
      })) || [];

    defaultInputs.length >= 1 && setList(defaultInputs);
    defaultInputs?.map((elm, i) => {
      defaultValues[`list_${i + 1}`] = elm.list;
    });
    setDefaultImg(getLeadDevelopment?.data?.data?.image);
    reset(defaultValues);
  }, [getLeadDevelopment?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("image", data?.image[0]);
    formData.append("description", data?.description);
    list.forEach((_, index) => {
      const listKey = `list_${index + 1}`;
      formData.append("list[]", data[listKey]);
    });
    editLeadDevelopment.mutate(formData);
  };

  return (
    <div className="sbdd_page">
      <PageWrapper slug="lead-development" name="Lead Development" />
      <div className="home_banner_input">
        {getLeadDevelopment?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {getLeadDevelopment?.isPending ? (
          <ComponentLoader />
        ) : (
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
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="image" className="form-label">
                Image (504px * 496px)
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
            <div className="mb-3 col-md-6">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                placeholder="Description"
                defaultValue={getLeadDevelopment?.data?.data?.description}
                {...register("description", { required: true })}
              />
              {errors?.description && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="list" className="form-label">
                List
              </label>
              {list.map((_, index) => (
                <div key={index} className="row">
                  <div key={index} className="col-10">
                    <FormInput
                      type="text"
                      name={`list_${index + 1}`}
                      extraClass="mt-2"
                      placeholder="List"
                      {...register(`list_${index + 1}`, {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="col-md-2 d-flex align-items-end">
                    {list?.length > 1 ? (
                      <div onClick={() => handleDeleteInput(index)}>
                        <span className="btn btn-danger btn_cross_vv bottom-0">
                          <X />
                        </span>
                      </div>
                    ) : null}
                    <div className="add_btn">
                      <span
                        onClick={() => setList([...list, { list: "" }])}
                        className="btn btn-success btn_cross_vv2 bottom-0"
                      >
                        <Plus />
                      </span>
                    </div>
                  </div>
                  {errors?.[`list_${index + 1}`] && (
                    <p className="errorMessage">Field is required</p>
                  )}
                </div>
              ))}
            </div>

            {editLeadDevelopment?.isPending ? (
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
    </div>
  );
}
