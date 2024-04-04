import React from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { TimelineCard } from "app/common/complex-carbohydate/TimelineCard";
import { CreateCarbohydrateTimeline } from "rest/complexCarbohydrate";

export default function AddCarbohydrateTimeline() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const createTimeline = CreateCarbohydrateTimeline();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("sortNo", data?.sortNo);
    formData.append("year", data?.year);
    formData.append("description", data?.heading1);
    formData.append("description2", data?.heading2);
    formData.append("image", data?.image1[0]);
    formData.append("image2", data?.image2[0]);
    createTimeline.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="carbohydrate-timeline" name="Carbohydrate Timeline" />
      <TimelineCard
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        loading={createTimeline?.isPending}
      />
    </>
  );
}
