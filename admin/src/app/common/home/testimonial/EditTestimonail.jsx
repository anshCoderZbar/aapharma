import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { GetSingleTestimonial } from "rest/home";
import { PageWrapper } from "components/ui/PageWrapper";
import { TestimonialForm } from "./TestimonialForm";
import { UpdateTestimonialMutation } from "rest/home";

export default function EditTestimonail() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const [selectedClient, setSelectedClient] = useState("");
  // const [authorImg, setAuthorImg] = useState("");

  const formData = new FormData();
  formData.append("testimonialId", id);

  const singleTestimonial = GetSingleTestimonial(formData);

  useEffect(() => {
    const defaultValues = {};
    defaultValues.clientId = singleTestimonial?.data?.data?.clientId;
    defaultValues.authorImage = singleTestimonial?.data?.data?.authorImage;
    defaultValues.authorName = singleTestimonial?.data?.data?.authorName;
    defaultValues.authorPosition =
      singleTestimonial?.data?.data?.authorPosition;
    defaultValues.description = singleTestimonial?.data?.data?.description;
    // setAuthorImg(singleTestimonial?.data?.data?.authorImage);
    setSelectedClient(singleTestimonial?.data?.data?.clientId);
    reset(defaultValues);
  }, [singleTestimonial?.data?.data]);

  const editTestimonial = UpdateTestimonialMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("testimonialId", id);
    formData.append("clientId", selectedClient);
    formData.append("authorImage", data?.authorImage[0]);
    formData.append("authorName", data?.authorName);
    formData.append("authorPosition", data?.authorPosition);
    formData.append("description", data?.description);
    editTestimonial.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="home-testimonial" name="Edit Testimonial" />
      <div className="home_banner_input">
        <TestimonialForm
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          control={control}
          errors={errors}
          setSelectedClient={setSelectedClient}
          selectedClient={selectedClient}
          // authorImg={authorImg}
          isLoading={editTestimonial?.isPending}
        />
      </div>
    </>
  );
}
