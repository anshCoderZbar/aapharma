import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageWrapper } from "components/ui/PageWrapper";
import { useForm } from "react-hook-form";
import { TextEditor } from "components/ui/TextEditor";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { GetSingleTimeline } from "rest/about";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { UpdateTimelineMutation } from "rest/about";

export const EditTimeline = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const formData = new FormData();
  formData.append("timelineId", id);

  const singleTimeline = GetSingleTimeline(formData);
  const updateTimeline = UpdateTimelineMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.timeline = singleTimeline?.data?.data?.heading;
    defaultValues.description = singleTimeline?.data?.data?.description;
    reset(defaultValues);
  }, [singleTimeline?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("timelineId", id);
    formData.append("heading", data?.timeline);
    formData.append("description", data?.description);
    updateTimeline.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="about-timeline" name="Edit Timeline" />
      {singleTimeline?.isPending ? (
        <ComponentLoader />
      ) : (
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

            <div className="mb-3 col-md-6">
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
            {updateTimeline?.isPending ? (
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
};
