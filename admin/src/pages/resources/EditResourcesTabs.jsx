import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { PageWrapper } from "components/ui/PageWrapper";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { X } from "lucide-react";
import { GetAllResourcesTabs } from "rest/resources";
import { SingleResourceTab } from "rest/resources";
import { EditSingleResourcesTab } from "rest/resources";

export default function EditResourcesTabs() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    getValues,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");
  const [inputs, setInputs] = useState([
    {
      tabHeading: "",
      url: "",
      description: "",
    },
  ]);

  const formData = new FormData();
  formData.append("id", id);
  const singleTab = SingleResourceTab(formData);

  const editTab = EditSingleResourcesTab();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = singleTab?.data?.data?.tabHeading;
    const defaultInputs =
      singleTab?.data?.data?.heading &&
      singleTab?.data?.data?.heading?.map((elm, i) => ({
        tabHeading: elm,
        url: singleTab?.data?.data?.link[i],
        description: singleTab?.data?.data?.description[i],
      }));
    setInputs(defaultInputs);
    defaultInputs?.map((elm, i) => {
      defaultValues[`tabHeading_${i + 1}`] = elm?.tabHeading;
      defaultValues[`tabUrl_${i + 1}`] = elm?.url;
      defaultValues[`description_${i + 1}`] = elm?.description;
    });
    setDefaultImg(singleTab?.data?.data?.image);
    reset(defaultValues);
  }, [singleTab?.data?.data]);

  const handleChange = (e) => {
    const files = e.target.files[0];
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
    const urlKey = `tabUrl_${index + 1}`;
    const newFormData = { ...getValues() };
    delete newFormData[tabHeadingKey];
    delete newFormData[urlKey];
    delete newFormData[descriptionKey];
    reset(newFormData);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("tabHeading", data?.heading);
    formData.append("image", data?.image[0]);
    inputs.forEach((_, index) => {
      const tabHeadingKey = `tabHeading_${index + 1}`;
      const descriptionKey = `description_${index + 1}`;
      const urlKey = `tabUrl_${index + 1}`;
      formData.append("heading[]", data[tabHeadingKey]);
      formData.append("description[]", data[descriptionKey]);
      formData.append("link[]", data[urlKey]);
    });
    editTab.mutate(formData);
  };

  return (
    <div className="resources_page">
      <PageWrapper slug="resources-tabs" name="Resources Tabs" />
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
                      <div className="mb-3 col-md-6">
                        <div className="Attachments-x">
                          <div className="luxa_x cv-x cls_jhg vs_inmh">
                            <label
                              htmlFor={`tabUrl_${index + 1}`}
                              className="form-label"
                            >
                              URL
                            </label>
                            <FormInput
                              type="text"
                              name={`tabUrl_${index + 1}`}
                              placeholder="URL"
                              {...register(`tabUrl_${index + 1}`, {
                                required: true,
                              })}
                            />
                            {errors[`tabUrl_${index + 1}`] && (
                              <p className="errorMessage">Field is required</p>
                            )}
                          </div>
                          <div className="luxa_x cv-x2">
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
                        </div>
                      </div>
                      <div className="mb-3 col-12">
                        <label
                          htmlFor={`description_${index + 1}`}
                          className="form-label"
                        >
                          Description
                        </label>
                        <TextEditor
                          control={control}
                          placeholder="Description"
                          defaultValue={
                            singleTab?.data?.data?.description[index]
                          }
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
    </div>
  );
}
