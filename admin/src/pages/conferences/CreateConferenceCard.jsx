import React from "react";
import ConferenceForm from "./ConferenceForm";
import { useForm } from "react-hook-form";
import { CreateConferenceCardsMutation } from "rest/conferences";
import { PageWrapper } from "components/ui/PageWrapper";

export default function CreateConferenceCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const createCard = CreateConferenceCardsMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("imageHeading", data.heading);
    formData.append("image", data.image[0]);
    formData.append("logo", data.logo[0]);
    formData.append("heading", data.subHeading);
    formData.append("description", data.description);
    formData.append("location", data.location);
    formData.append("url", data.url);
    createCard.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="conference-cards" name="Conference Cards" />
      <ConferenceForm
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        control={control}
        isLoading={createCard?.isPending}
        onSubmit={onSubmit}
      />
    </>
  );
}
