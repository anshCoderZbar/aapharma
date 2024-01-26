import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { GetCarbohydrateDescription } from "rest/complexCarbohydrate";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { CreateCarbohydrateDescription } from "rest/complexCarbohydrate";

export default function CarbohydrateDescription() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const getDescription = GetCarbohydrateDescription();
  const createDesciption = CreateCarbohydrateDescription();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getDescription?.data?.data?.bottomheading;
    defaultValues.description = getDescription?.data?.data?.bottomdescription;
    reset(defaultValues);
  }, [getDescription?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("bottomheading", data?.heading);
    formData.append("bottomdescription", data?.description);
    createDesciption.mutate(formData);
  };

  return (
    <>
      <PageWrapper
        slug="carbohydrate-description"
        name="Carbohydrate Description"
      />
      {getDescription?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getDescription?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="col-12">
              <div className="mb-3 col-md-6">
                <label htmlFor="mainHeading" className="form-label">
                  Timeline Diagram Bottom Heading
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
            </div>
            <div className="mb-3 col-12">
              <label htmlFor={`description`} className="form-label">
                Diagram Description
              </label>
              <TextEditor
                control={control}
                name={`description`}
                {...register(`description`, {
                  required: true,
                })}
              />
              {errors[`description`] && (
                <p className="errorMessage">Description is required</p>
              )}
            </div>
            {createDesciption?.isPending ? (
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
