import React from "react";
import { PageWrapper } from "components/ui/PageWrapper";
import { TestimonialForm2 } from "app/common/testimonial/TestimonialForm2";
import { useForm } from "react-hook-form";
import { CreateTestimonial2 } from "rest/testimonial";

export default function CreateTestimonial() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const addTestimonial = CreateTestimonial2();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("clientImage", data?.clientLogo[0]);
    formData.append("authorPosition", data?.authorPosition);
    formData.append("description", data?.description);
    formData.append("authorName", data?.authorName);
    addTestimonial.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="all-testimonial" name="All Testimonial" />
      <TestimonialForm2
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        control={control}
        errors={errors}
        isLoading={addTestimonial?.isPending}
      />
    </>
  );
}
