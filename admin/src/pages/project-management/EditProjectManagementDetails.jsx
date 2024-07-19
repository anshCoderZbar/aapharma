import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { PageWrapper } from "components/ui/PageWrapper";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { X } from "lucide-react";
import { useParams } from "react-router-dom";

import {
  SingleProjectManagementLists,
  EditProjectManagementList,
} from "rest/projectManagement";

export default function EditProjectManagementTabs() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");
  const [inputs, setInputs] = useState([
    {
      tabHeading: "",
      description: "",
    },
  ]);

  const formData = new FormData();
  formData.append("id", id);
  const singleTab = SingleProjectManagementLists(formData);
  const editTab = EditProjectManagementList();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = singleTab?.data?.data?.heading;
    defaultValues.image = singleTab?.data?.data?.image;

    const defaultInputs =
      singleTab?.data?.data?.headings &&
      singleTab?.data?.data?.headings?.map((_, i) => ({
        heading: singleTab?.data?.data?.headings[i],
        description: singleTab?.data?.data?.descriptions[i],
      }));

    setInputs(defaultInputs);
    defaultInputs?.map((elm, i) => {
      defaultValues[`tabHeading_${i + 1}`] = elm?.heading;
      defaultValues[`description_${i + 1}`] = elm?.description;
    });

    setDefaultImg(singleTab?.data?.data?.image);
    reset(defaultValues);
  }, [singleTab?.data?.data]);

  const handleChange = (e) => {
    const files = e?.target?.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const handleAddInputs = () => {
    setInputs([...inputs, { tabHeading: "", url: "", description: "" }]);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
    const tabHeadingKey = `tabHeading_${index + 1}`;
    const descriptionKey = `description_${index + 1}`;
    const newFormData = { ...getValues() };
    delete newFormData[tabHeadingKey];
    delete newFormData[descriptionKey];
    reset(newFormData);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("heading", data?.heading);
    formData.append("image", data?.image[0]);
    inputs.forEach((_, index) => {
      const tabHeadingKey = `tabHeading_${index + 1}`;
      const descriptionKey = `description_${index + 1}`;
      formData.append("headings[]", data[tabHeadingKey]);
      formData.append("descriptions[]", data[descriptionKey]);
    });

    editTab.mutate(formData);
  };

  return (
    <>
      <PageWrapper
        slug="project-management-Lists"
        name="Project Management List"
      />
      {singleTab?.isError && (
        <ErrorComponent message="OOPS! something went wrong please try again later" />
      )}
      {singleTab?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 mb-3">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="heading" className="form-label">
                  Heading
                </label>
                <FormInput
                  type="text"
                  name="heading"
                  placeholder="Heading"
                  {...register("heading", { required: true })}
                />
                {errors?.heading && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="image" className="form-label">
                  Image (696px * 723px)
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
              {inputs?.length >= 1 &&
                inputs?.map((_, index) => {
                  return (
                    <div key={index} className="row cxxxz">
                      <div className="mb-3 col-md-6">
                        <label
                          htmlFor={`tabHeading_${index + 1}`}
                          className="form-label"
                        >
                          Heading
                        </label>
                        <FormInput
                          type="text"
                          name={`tabHeading_${index + 1}`}
                          placeholder="Heading"
                          {...register(`tabHeading_${index + 1}`, {
                            required: true,
                          })}
                        />
                        {errors[`tabHeading_${index + 1}`] && (
                          <p className="errorMessage">Field is required</p>
                        )}
                      </div>
                      <div className="luxa_x cv-x2 wssklj">
                        {inputs?.length > 1 && (
                          <div
                            onClick={() => handleDeleteInput(index)}
                            className="d-flex justify-content-end"
                          >
                            <span className="btn btn-danger">
                              <X />
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="mb-3 col-12">
                        <label
                          htmlFor={`description_${index + 1}`}
                          className="form-label"
                        >
                          Description
                        </label>
                        <FormInput
                          type="text"
                          placeholder="Description"
                          {...register(`description_${index + 1}`, {
                            required: true,
                          })}
                        />
                        {errors[`description_${index + 1}`] && (
                          <p className="errorMessage">Field is required</p>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="row">
              <div className="col-6">
                {editTab?.isPending ? (
                  <ButtonLoader />
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
              <div className="col-6">
                <div className="d-flex justify-content-end">
                  <span onClick={handleAddInputs} className="btn btn-success">
                    Add More
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
