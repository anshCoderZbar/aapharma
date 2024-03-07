import React from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";

import { PageWrapper } from "components/ui/PageWrapper";
import { WhitepaperForm } from "app/common/whitepaper/WhitepaperForm";
import { CreateWhitePaperMutation } from "rest/whitepaper";

export const AddWhitepaper = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const addWhitepaper = CreateWhitePaperMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    formData.append("image", data?.banner[0]);
    formData.append("date", dayjs(data?.date).format("MMMM-DD-YYYY"));
    addWhitepaper.mutate(formData);
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
          isLoading={addWhitepaper?.isPending}
        />
      </div>
    </>
  );
};
