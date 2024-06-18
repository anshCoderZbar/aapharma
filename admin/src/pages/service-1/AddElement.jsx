import React from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";

import { useForm } from "react-hook-form";
import { TableForm } from "components/Table-form";
import { AddIsotopeTableMutation } from "rest/isotope";

export default function AddElement() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const addElementTable = AddIsotopeTableMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("elements", data?.elements);
    formData.append("atomicNumber", data?.atomicNumber);
    formData.append("parentAtom", data?.parentAtom);
    formData.append("stableIsotope", data?.stableIsotope);
    formData.append("abundance", data?.abundance);
    addElementTable.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="services-table" name="Services Table" />
      <div className="input_banners  mb-3">
        <TableForm
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          isLoading={addElementTable?.isPending}
          errors={errors}
        />
      </div>
    </>
  );
}
