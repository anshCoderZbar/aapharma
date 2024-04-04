import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

import { GetCaseStudyGraphContentMutation } from "rest/caseStudy";
import { EditCaseStudyGraphContentMutation } from "rest/caseStudy";

export default function CaseStudyGraphContent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const caseStudyGraphData = GetCaseStudyGraphContentMutation();
  const editCaseStudyGraphData = EditCaseStudyGraphContentMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = caseStudyGraphData?.data?.data?.heading;
    defaultValues.subHeading = caseStudyGraphData?.data?.data?.subheading;
    reset(defaultValues);
  }, [caseStudyGraphData?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("subheading", data?.subHeading);
    editCaseStudyGraphData.mutate(formData);
  };

  return (
    <>
      <PageWrapper
        slug="case-graph-content"
        name="Case Study Diagram Content"
      />
      {caseStudyGraphData?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {caseStudyGraphData?.isPending ? (
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

            <div className="mb-3 col-md-12">
              <label htmlFor="subHeading" className="form-label">
                Sub Heading
              </label>

              <TextEditor
                control={control}
                placeholder="subHeading"
                defaultValue={caseStudyGraphData?.data?.data?.subheading}
                name="subHeading"
                {...register("subHeading", { required: true })}
              />

              {errors?.subHeading && (
                <p className="errorMessage">Sub Heading is required</p>
              )}
            </div>

            {editCaseStudyGraphData?.isPending ? (
              <div>
                <ButtonLoader />
              </div>
            ) : (
              <div className="my-3 col-12">
                <input type="submit" value="submit" className="input_submit" />
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
}
