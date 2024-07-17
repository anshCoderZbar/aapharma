import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

import { WhitepaperForm } from "app/common/whitepaper/WhitepaperForm";
import { PageWrapper } from "components/ui/PageWrapper";
import { GetSingleWhitePapers } from "rest/whitepaper";
import { EditWhitePaperMutation } from "rest/whitepaper";

export const EditWhitepaper = () => {
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
  const singleWhitepaper = GetSingleWhitePapers(formData);
  const editWhitepaper = EditWhitePaperMutation();

  const [defaultImg, setDefaultImg] = useState("");

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = singleWhitepaper?.data?.data?.heading;
    defaultValues.description = singleWhitepaper?.data?.data?.description;
    // defaultValues.banner = singleWhitepaper?.data?.data?.image;
    // defaultValues.date = dayjs(singleWhitepaper?.data?.data?.date).format(
    //   "MM/DD/YYYY"
    // );
    // setDefaultImg(singleWhitepaper?.data?.data?.image);
    reset(defaultValues);
  }, [singleWhitepaper?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    // formData.append("image", data?.banner[0]);
    formData.append("date", dayjs(data?.date).format("MMMM-DD-YYYY"));
    editWhitepaper.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="all-whitepapers" name="Whitepaper" />
      <div className="home_banner_input">
        <WhitepaperForm
          register={register}
          control={control}
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          addedDescription={singleWhitepaper?.data?.data?.description}
          // defaultImg={defaultImg}
          defaultDate={dayjs(singleWhitepaper?.data?.data?.date)}
          isLoading={editWhitepaper?.isPending}
        />
      </div>
    </>
  );
};
