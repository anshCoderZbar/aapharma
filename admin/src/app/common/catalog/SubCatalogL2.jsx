import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { CatalogForm } from "components/catalog-form";
import { useForm } from "react-hook-form";
import { FetchAllCatalogsL1 } from "rest/catalog";
import { AddCatalogL2Fn } from "rest/catalog";
import { subCatalogSchema } from "./validation";

export const SubCatalogL2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({ resolver: yupResolver(subCatalogSchema) });

  const fetchCatalogs = FetchAllCatalogsL1();

  const AddCatalogMutationL2 = AddCatalogL2Fn(reset);

  const onSubmit = (data) => {
    AddCatalogMutationL2.mutate(data);
  };

  return (
    <CatalogForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      control={control}
      isSubCategoryEnable={true}
      subCategory={fetchCatalogs?.data?.data}
      isLoading={AddCatalogMutationL2?.isPending}
      heading1="Sub Category"
      heading2="Master Category"
    />
  );
};
