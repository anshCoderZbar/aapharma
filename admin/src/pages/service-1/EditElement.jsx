import React, { useEffect } from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TableForm } from "components/Table-form";
import { GetSingleIsotopeTableMutation } from "rest/isotope";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { EditIsotopeTableMutation } from "rest/isotope";

export default function EditElement() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const formData = new FormData();
  formData.append("id", id);

  const getSingleElement = GetSingleIsotopeTableMutation(formData);
  const editIstopeElement = EditIsotopeTableMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.elements = getSingleElement?.data?.data?.elements;
    defaultValues.atomicNumber = getSingleElement?.data?.data?.atomicNumber;
    defaultValues.parentAtom = getSingleElement?.data?.data?.parentAtom;
    defaultValues.stableIsotope = getSingleElement?.data?.data?.stableIsotope;
    defaultValues.abundance = getSingleElement?.data?.data?.abundance;
    reset(defaultValues);
  }, [getSingleElement?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("elements", data?.elements);
    formData.append("atomicNumber", data?.atomicNumber);
    formData.append("parentAtom", data?.parentAtom);
    formData.append("stableIsotope", data?.stableIsotope);
    formData.append("abundance", data?.abundance);
    editIstopeElement.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="services-table" name="Services Table" />
      <div className="input_banners  mb-3">
        {getSingleElement?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {getSingleElement?.isPending ? (
          <ComponentLoader />
        ) : (
          <TableForm
            register={register}
            onSubmit={handleSubmit(onSubmit)}
            isLoading={editIstopeElement?.isPending}
            errors={errors}
            control={control}
            defaultValue={getSingleElement?.data?.data}
          />
        )}
      </div>
    </>
  );
}
