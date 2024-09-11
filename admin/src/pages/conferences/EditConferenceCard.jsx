import { PageWrapper } from "components/ui/PageWrapper";
import ConferenceForm from "./ConferenceForm";
import { useForm } from "react-hook-form";
import { EditConferenceCardsMutation } from "rest/conferences";
import { useParams } from "react-router-dom";
import { GetSingleConferenceCardsMutation } from "rest/conferences";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { useEffect, useState } from "react";

export default function EditConferenceCard() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const formData = new FormData();
  formData.append("id", id);

  const singleCard = GetSingleConferenceCardsMutation(formData);

  const [defaultImages, setDefaultImages] = useState({
    img1: "",
    img2: "",
  });

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = singleCard?.data?.data?.imageHeading;
    defaultValues.image = singleCard?.data?.data?.image;
    defaultValues.logo = singleCard?.data?.data?.logo;
    defaultValues.subHeading = singleCard?.data?.data?.heading;
    defaultValues.description = singleCard?.data?.data?.description;
    defaultValues.location = singleCard?.data?.data?.location;
    defaultValues.url = singleCard?.data?.data?.url;
    setDefaultImages({
      img1: singleCard?.data?.data?.image,
      img2: singleCard?.data?.data?.logo,
    });
    reset(defaultValues);
  }, [singleCard?.data?.data]);

  const editCard = EditConferenceCardsMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("imageHeading", data.heading);
    formData.append("image", data.image[0]);
    formData.append("logo", data.logo[0]);
    formData.append("heading", data.subHeading);
    formData.append("description", data.description);
    formData.append("location", data.location);
    formData.append("url", data.url);
    editCard.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="conference-cards" name="Conference Cards" />
      {singleCard?.isError && (
        <ErrorComponent message="OOPS ! something went wrong" />
      )}
      {singleCard?.isPending ? (
        <ComponentLoader />
      ) : (
        <ConferenceForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          control={control}
          isLoading={editCard?.isPending}
          onSubmit={onSubmit}
          defaultValue={singleCard?.data?.data?.description}
          defaultImages={defaultImages}
        />
      )}
    </>
  );
}
