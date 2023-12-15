import React, { useEffect, useState } from "react";
import { PageWrapper } from "components/ui/PageWrapper";
import { useForm } from "react-hook-form";

import "styles/main.css";

import { TestimonialForm } from "app/common/home/testimonial/TestimonialForm";
import { CreateTestimonial } from "rest/home";

export default function AddTestimonail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [selectedClient, setSelectedClient] = useState("");

  const addTestimonial = CreateTestimonial();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("clientId", selectedClient);
    formData.append("authorImage", data?.authorImage[0]);
    formData.append("authorName", data?.authorName);
    formData.append("authorPosition", data?.authorPosition);
    formData.append("description", data?.description);
    addTestimonial.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="home-testimonial" name="Home Testimonial" />
      <div className="home_banner_input">
        <TestimonialForm
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          control={control}
          errors={errors}
          setSelectedClient={setSelectedClient}
          selectedClient={selectedClient}
          isLoading={addTestimonial?.isPending}
        />
      </div>
    </>
  );
}
