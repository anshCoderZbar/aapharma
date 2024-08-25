import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

import "styles/main.css";
import { CreateResearchCollaborationMidSection } from "rest/researchCollaboration";
import { GetResearchCollaborationMidSection } from "rest/researchCollaboration";

export default function ResearchCollaborationMidSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const createSection = CreateResearchCollaborationMidSection();
  const getSection = GetResearchCollaborationMidSection();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getSection?.data?.data?.heading;
    defaultValues.firstAccomplishment =
      getSection?.data?.data?.firstAccomplishment;
    defaultValues.secondAccomplishment =
      getSection?.data?.data?.secondAccomplishment;
    defaultValues.thirdAccomplishment =
      getSection?.data?.data?.thirdAccomplishment;
    reset(defaultValues);
  }, [getSection?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("firstAccomplishment", data?.firstAccomplishment);
    formData.append("secondAccomplishment", data?.secondAccomplishment);
    formData.append("thirdAccomplishment", data?.thirdAccomplishment);
    createSection?.mutate(formData);
  };

  return (
    <div className="others_page">
      <PageWrapper
        slug="research-collaboration-mid-section"
        name="Mid Section"
      />
      {getSection?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}
      {getSection?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-12">
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
                <p className="errorMessage">Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="firstAccomplishment" className="form-label">
                First Accomplishment
              </label>
              <FormInput
                type="text"
                name="firstAccomplishment"
                placeholder=" First Accomplishment"
                {...register("firstAccomplishment", { required: true })}
              />
              {errors?.firstAccomplishment && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="secondAccomplishment" className="form-label">
                Second Accomplishment
              </label>
              <FormInput
                type="text"
                name="secondAccomplishment"
                placeholder="Second Accomplishment"
                {...register("secondAccomplishment", { required: true })}
              />
              {errors?.secondAccomplishment && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="thirdAccomplishment" className="form-label">
                Third Accomplishment
              </label>
              <FormInput
                type="text"
                name="thirdAccomplishment"
                placeholder="Third Accomplishment"
                {...register("thirdAccomplishment", { required: true })}
              />
              {errors?.thirdAccomplishment && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            {createSection?.isPending ? (
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
