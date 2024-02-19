import { TestimonialForm2 } from "app/common/testimonial/TestimonialForm2";
import { ErrorComponent } from "components/Alerts/Error";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { PageWrapper } from "components/ui/PageWrapper";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { UpdateTestimonialMutation2 } from "rest/testimonial";
import { GetSingleTestimonial2 } from "rest/testimonial";

export default function EditTestimonials() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const [defaultImg, setDefaultImg] = useState("");

  const formData = new FormData();
  formData.append("testimonialId", id);

  const singleTestimonial = GetSingleTestimonial2(formData);
  const editTestimonial = UpdateTestimonialMutation2();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.authorName = singleTestimonial?.data?.data?.authorName;
    defaultValues.authorPosition =
      singleTestimonial?.data?.data?.authorPosition;
    defaultValues.description = singleTestimonial?.data?.data?.description;
    setDefaultImg(singleTestimonial?.data?.data?.clientImage);
    reset(defaultValues);
  }, [singleTestimonial?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("testimonialId", id);
    formData.append("clientImage", data?.clientLogo[0]);
    formData.append("authorPosition", data?.authorPosition);
    formData.append("description", data?.description);
    formData.append("authorName", data?.authorName);
    editTestimonial.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="all-testimonial" name="All Testimonial" />
      {singleTestimonial?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {singleTestimonial?.isPending ? (
        <ComponentLoader />
      ) : (
        <TestimonialForm2
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          control={control}
          errors={errors}
          defaultImg={defaultImg}
          setDefaultImg={setDefaultImg}
          isLoading={editTestimonial?.isPending}
          testimonialDesc={singleTestimonial?.data?.data?.description}
        />
      )}
    </>
  );
}
