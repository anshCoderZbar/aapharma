import React from "react";

import { PageWrapper } from "components/ui/PageWrapper";
import { useForm } from "react-hook-form";
import { TextEditor } from "components/ui/TextEditor";
import { FormInput } from "components/ui/FormInput";
import { CreateTimelineMutation } from "rest/about";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export default function AddTimeline() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const createTimeline = CreateTimelineMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.timeline);
    formData.append("description", data?.description);
    createTimeline.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="about-add-timeline" name="Add Timeline" />
      <div className="input_banners mb-3">
        <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
          <div className="mb-3 col-md-6">
            <label htmlFor="timeline" className="form-label">
              Timeline
            </label>
            <FormInput
              type="text"
              name="timeline"
              placeholder="Timeline"
              {...register("timeline", { required: true })}
            />
            {errors?.timeline && (
              <p className="errorMessage"> Timeline is required</p>
            )}
          </div>

          <div className="mb-3 col-md-12">
            <label htmlFor={`description`} className="form-label">
              Description
            </label>
            <TextEditor
              control={control}
              name={`description`}
              {...register(`description`, {
                required: true,
              })}
            />
            {errors.description && (
              <p className="errorMessage">Description is required</p>
            )}
          </div>
          {createTimeline?.isPending ? (
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
    </>
  );
}
