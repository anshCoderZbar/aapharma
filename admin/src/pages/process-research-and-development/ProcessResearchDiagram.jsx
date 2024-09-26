import React, { useEffect } from "react";
import { PageWrapper } from "components/ui/PageWrapper";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { GetProcessDiagramMutation } from "rest/ProcessResearchAndDevelopment";
import { useForm } from "react-hook-form"; // Make sure to import useForm
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { EditProcessDiagramMutation } from "rest/ProcessResearchAndDevelopment";

export default function ProcessResearchDiagram() {
  const getProcessDiagram = GetProcessDiagramMutation();

  const editDiagram = EditProcessDiagramMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading1 = getProcessDiagram?.data?.data?.heading1;
    defaultValues.heading2 = getProcessDiagram?.data?.data?.heading2;
    defaultValues.heading3 = getProcessDiagram?.data?.data?.heading3;
    defaultValues.heading4 = getProcessDiagram?.data?.data?.heading4;
    defaultValues.heading5 = getProcessDiagram?.data?.data?.heading5;
    defaultValues.heading6 = getProcessDiagram?.data?.data?.heading6;
    defaultValues.heading7 = getProcessDiagram?.data?.data?.heading7;
    defaultValues.heading8 = getProcessDiagram?.data?.data?.heading8;
    reset(defaultValues);
  }, [getProcessDiagram?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading1", data.heading1);
    formData.append("heading2", data.heading2);
    formData.append("heading3", data.heading3);
    formData.append("heading4", data.heading4);
    formData.append("heading5", data.heading5);
    formData.append("heading6", data.heading6);
    formData.append("heading7", data.heading7);
    formData.append("heading8", data.heading8);
    editDiagram.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="process-diagram" name="Process Diagram" />
      {getProcessDiagram?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getProcessDiagram?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-12">
              <label htmlFor="heading1" className="form-label">
                Heading 1
              </label>
              <FormInput
                type="text"
                name="heading1"
                placeholder="Heading 1"
                {...register("heading1", { required: true })}
              />
              {errors.heading1 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-md-12">
              <label htmlFor="heading2" className="form-label">
                Heading 2
              </label>
              <FormInput
                type="text"
                name="heading2"
                placeholder="Heading 2"
                {...register("heading2", { required: true })}
              />
              {errors.heading2 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-md-12">
              <label htmlFor="heading3" className="form-label">
                Heading 3
              </label>
              <FormInput
                type="text"
                name="heading3"
                placeholder="Heading 3"
                {...register("heading3", { required: true })}
              />
              {errors.heading3 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-md-12">
              <label htmlFor="heading4" className="form-label">
                Heading 4
              </label>
              <FormInput
                type="text"
                name="heading4"
                placeholder="Heading 4"
                {...register("heading4", { required: true })}
              />
              {errors.heading4 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-md-12">
              <label htmlFor="heading5" className="form-label">
                Heading 5
              </label>
              <FormInput
                type="text"
                name="heading5"
                placeholder="Heading 5"
                {...register("heading5", { required: true })}
              />
              {errors.heading5 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-md-12">
              <label htmlFor="heading6" className="form-label">
                Heading 6
              </label>
              <FormInput
                type="text"
                name="heading6"
                placeholder="Heading 6"
                {...register("heading6", { required: true })}
              />
              {errors.heading6 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-md-12">
              <label htmlFor="heading7" className="form-label">
                Heading 7
              </label>
              <FormInput
                type="text"
                name="heading7"
                placeholder="Heading 7"
                {...register("heading7", { required: true })}
              />
              {errors.heading7 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-md-12">
              <label htmlFor="heading8" className="form-label">
                Heading 8
              </label>
              <FormInput
                type="text"
                name="heading8"
                placeholder="Heading 8"
                {...register("heading8", { required: true })}
              />
              {errors.heading8 && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            {editDiagram?.isPending ? (
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
