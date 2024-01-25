import React, { useEffect, useState } from "react";

import { TimelineCard } from "app/common/complex-carbohydate/TimelineCard";
import { PageWrapper } from "components/ui/PageWrapper";
import { useForm } from "react-hook-form";
import { SingleCarbohydrateTimeline } from "rest/complexCarbohydrate";
import { useParams } from "react-router-dom";
import { UpdateCarbohydrateTimeline } from "rest/complexCarbohydrate";

export default function EditCarbohydrateTimeline() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [defaultImages, setDefaultImages] = useState({
    img1: "",
    img2: "",
  });

  const formData = new FormData();
  formData.append("id", id);
  const singleTimeline = SingleCarbohydrateTimeline(formData);

  const updateTimeline = UpdateCarbohydrateTimeline();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.sortNo = singleTimeline?.data?.data?.sortNo;
    defaultValues.year = singleTimeline?.data?.data?.year;
    defaultValues.heading1 = singleTimeline?.data?.data?.description;
    defaultValues.heading2 = singleTimeline?.data?.data?.description2;
    setDefaultImages({
      img1: singleTimeline?.data?.data?.image,
      img2: singleTimeline?.data?.data?.image2,
    });
    reset(defaultValues);
  }, [singleTimeline?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("sortNo", data?.sortNo);
    formData.append("year", data?.year);
    formData.append("description", data?.heading1);
    formData.append("description2", data?.heading2);
    formData.append("image", data?.image1[0]);
    formData.append("image2", data?.image2[0]);
    updateTimeline.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="carbohydrate-timeline" name="Carbohydrate Timeline" />
      <TimelineCard
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        defaultImages={defaultImages}
        setDefaultImages={setDefaultImages}
        loading={updateTimeline?.isPending}
      />
    </>
  );
}
