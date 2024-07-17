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
    getValues,
  } = useForm();

  const [defaultImg, setDefaultImg] = useState("");
  const [inputs, setInputs] = useState([
    { authorName: "", authorPosition: "", description: "" },
  ]);

  const formData = new FormData();
  formData.append("testimonialId", id);

  const singleTestimonial = GetSingleTestimonial2(formData);
  const editTestimonial = UpdateTestimonialMutation2();

  useEffect(() => {
    const defaultValues = {};
    console.log(singleTestimonial?.data?.data);
    const defaultInputs =
      singleTestimonial?.data?.data?.testimonials?.map((elm) => ({
        authorName: elm?.authorName || "",
        authorPosition: elm?.authorPosition || "",
        description: elm?.description || "",
      })) || [];

    defaultInputs.length >= 1 && setInputs(defaultInputs);
    defaultInputs?.map((elm, index) => {
      defaultValues[`authorName_${index + 1}`] = elm?.authorName;
      defaultValues[`authorPosition_${index + 1}`] = elm?.authorPosition;
      defaultValues[`description_${index + 1}`] = elm?.description;
    });

    // singleTestimonial?.data?.data?.authorName?.map((elm, index) => {
    //   defaultValues[`authorName_${index + 1}`] = elm;
    // });
    // singleTestimonial?.data?.data?.authorPosition?.map((elm, index) => {
    //   defaultValues[`authorPosition_${index + 1}`] = elm;
    // });
    // singleTestimonial?.data?.data?.description?.map((elm, index) => {
    //   defaultValues[`description_${index + 1}`] = elm;
    // });

    setDefaultImg(singleTestimonial?.data?.data?.clientImage);
    reset(defaultValues);
  }, [singleTestimonial?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("testimonialId", id);
    formData.append("clientImage", data?.clientLogo[0]);
    inputs.forEach((_, index) => {
      const authorNameKey = `authorName_${index + 1}`;
      const authorPositionKey = `authorPosition_${index + 1}`;
      const descriptionKey = `description_${index + 1}`;

      formData.append("authorName[]", data[authorNameKey]);
      formData.append("authorPosition[]", data[authorPositionKey]);
      formData.append("description[]", data[descriptionKey]);
    });
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
          inputs={inputs}
          reset={reset}
          setInputs={setInputs}
          getValues={getValues}
          testimonialDesc={singleTestimonial?.data?.data?.testimonials}
        />
      )}
    </>
  );
}
