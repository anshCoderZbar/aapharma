import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { Plus, X } from "lucide-react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { useParams } from "react-router-dom";
import { GetSingleTherapeuticsSteps } from "rest/therapeutics";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { EditTherapeuticsStepsMutation } from "rest/therapeutics";

export default function EditTherapeuticsSteps() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    getValues,
  } = useForm();

  const formData = new FormData();
  formData.append("servicethirdId", id);

  const singleStep = GetSingleTherapeuticsSteps(formData);
  const updateStep = EditTherapeuticsStepsMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.step = singleStep?.data?.data?.buttonText;
    defaultValues.stepDescription = singleStep?.data?.data?.title;
    defaultValues.bottomHeading = singleStep?.data?.data?.bottomHeading;
    const defaultInputs =
      singleStep?.data?.data?.heading?.map((elm) => ({
        list: elm || "",
      })) || [];

    defaultInputs.length >= 1 && setList(defaultInputs);
    defaultInputs?.map((elm, i) => {
      defaultValues[`list_${i + 1}`] = elm.list;
    });
    setDefaultImg(singleStep?.data?.data?.icon);
    reset(defaultValues);
  }, [singleStep?.data?.data]);

  const [list, setList] = useState([{ list: "" }]);

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const handleDeleteInput = (index) => {
    const newArray = [...list];
    newArray.splice(index, 1);
    setList(newArray);
    const listKey = `list_${index + 1}`;
    const newFormData = { ...getValues() };
    delete newFormData[listKey];
    reset(newFormData);
  };

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("servicethirdId", id);
    formData.append("title", data?.stepDescription);
    formData.append("bottomHeading", data?.bottomHeading);
    formData.append("icon", data?.icon[0]);
    formData.append("buttonText", data?.step);
    list.forEach((_, index) => {
      const listKey = `list_${index + 1}`;
      formData.append("heading[]", data[listKey]);
    });
    updateStep.mutate(formData);
  };

  return (
    <div className="therapeutics_page">
      <PageWrapper slug="therapeutics-steps" name="Steps" />
      {singleStep?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {singleStep?.idPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="icon" className="form-label">
                Icon (80px * 80px)
              </label>
              <FormInput
                type="file"
                name="icon"
                placeholder="icon"
                {...register("icon", {
                  // required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.icon && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt="icon Preview"
                  style={{
                    maxWidth: "100px",
                    marginTop: "10px",
                  }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="icon Preview"
                  style={{
                    maxWidth: "100px",
                    marginTop: "10px",
                  }}
                />
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="step" className="form-label">
                Step
              </label>
              <FormInput
                type="text"
                name="step"
                placeholder="Step"
                {...register("step", { required: true })}
              />
              {errors?.step && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="list" className="form-label">
                Step Heading
              </label>
              {list.map((item, index) => (
                <div key={index} className="row">
                  <div key={index} className="col-10">
                    <FormInput
                      type="text"
                      name={`list_${index + 1}`}
                      extraClass="mt-2"
                      placeholder="Step Heading"
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
            <div className="mb-3 col-md-6">
              <label htmlFor="stepDescription" className="form-label">
                Step Description
              </label>
              <FormInput
                type="text"
                name="stepDescription"
                placeholder="Step Description"
                {...register("stepDescription", { required: true })}
              />
              {errors?.stepDescription && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="bottomHeading" className="form-label">
                Challenge
              </label>
              <FormInput
                type="text"
                name="bottomHeading"
                placeholder="Challenge"
                {...register("bottomHeading", { required: true })}
              />
              {errors?.bottomHeading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            {updateStep?.isPending ? (
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
