import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

import "styles/main.css";
import { TextEditor } from "components/ui/TextEditor";

export default function ResearchCollaborationDiagram() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const createBanner = { isPending: false, isError: false };
  const getBanner = { isPending: false, isError: false };

  // useEffect(() => {
  //   const defaultValues = {};
  //   defaultValues.description = getBanner?.data?.data?.description;
  //   defaultValues.heading = getBanner?.data?.data?.heading;
  //   reset(defaultValues);
  // }, [getBanner?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    formData.append("firstButton", data?.firstButton);
    formData.append("secondButton", data?.secondButton);
    formData.append("thirdButton", data?.thirdButton);
    formData.append("fourthButton", data?.fourthButton);
    formData.append("fifthButton", data?.fifthButton);
    // createBanner?.mutate(formData);
    console.log(data);
  };

  return (
    <div className="others_page">
      <PageWrapper
        slug="research-collaboration-diagram"
        name="Research Collaboration Diagram"
      />
      {getBanner?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}
      {getBanner?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-12">
              <label htmlFor="" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                name={`description`}
                // defaultValue={getBanner?.data?.data?.description}
                {...register(`description`, {
                  required: true,
                })}
              />
              {errors?.description && (
                <p className="errorMessage"> Description is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="leftHeading" className="form-label">
                Left Heading
              </label>
              <FormInput
                type="text"
                name="leftHeading"
                placeholder="Left Heading"
                {...register("leftHeading", { required: true })}
              />
              {errors?.leftHeading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="rightHeading" className="form-label">
                Right Heading
              </label>
              <FormInput
                type="text"
                name="rightHeading"
                placeholder="Right Heading"
                {...register("rightHeading", { required: true })}
              />
              {errors?.rightHeading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="leftText" className="form-label">
                Left Text
              </label>
              <FormInput
                type="text"
                name="leftText"
                placeholder="Left Text"
                {...register("leftText", { required: true })}
              />
              {errors?.leftText && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="blueButton" className="form-label">
                Blue Button
              </label>
              <FormInput
                type="text"
                name="blueButton"
                placeholder="Blue Button"
                {...register("blueButton", { required: true })}
              />
              {errors?.blueButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="rightText" className="form-label">
                Right Text
              </label>
              <FormInput
                type="text"
                name="rightText"
                placeholder="Right Text"
                {...register("rightText", { required: true })}
              />
              {errors?.rightText && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="firstButton" className="form-label">
                First Button
              </label>
              <FormInput
                type="text"
                name="firstButton"
                placeholder=" First Button"
                {...register("firstButton", { required: true })}
              />
              {errors?.firstButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="secondButton" className="form-label">
                Second Button
              </label>
              <FormInput
                type="text"
                name="secondButton"
                placeholder="Second Button"
                {...register("secondButton", { required: true })}
              />
              {errors?.secondButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="thirdButton" className="form-label">
                Third Button
              </label>
              <FormInput
                type="text"
                name="thirdButton"
                placeholder="Third Button"
                {...register("thirdButton", { required: true })}
              />
              {errors?.thirdButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            {createBanner?.isPending ? (
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
