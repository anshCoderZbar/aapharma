import React from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";

import { useForm } from "react-hook-form";
import { TableForm } from "components/Table-form";

export default function AddElement() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    console.log(data);
    // createSupportData.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="services-table" name="Services Table" />
      <div className="input_banners  mb-3">
        <TableForm
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          isLoading={false}
          errors={errors}
        />
      </div>
    </>
  );
}
