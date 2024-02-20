import React, { useState } from "react";
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
    reset,
    getValues,
  } = useForm();

  const addTestimonial = CreateTestimonial2();
  const [inputs, setInputs] = useState([
    { authorName: "", authorPosition: "", description: "" },
  ]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("clientImage", data?.clientLogo[0]);
    inputs.forEach((_, index) => {
      const authorNameKey = `authorName_${index + 1}`;
      const authorPositionKey = `authorPosition_${index + 1}`;
      const descriptionKey = `description_${index + 1}`;

      formData.append("authorName[]", data[authorNameKey]);
      formData.append("authorPosition[]", data[authorPositionKey]);
      formData.append("description[]", data[descriptionKey]);
    });
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
        inputs={inputs}
        reset={reset}
        setInputs={setInputs}
        getValues={getValues}
      />
    </>
  );
}
