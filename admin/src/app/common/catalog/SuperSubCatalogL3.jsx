import React from "react";

import { CatalogForm } from "components/catalog-form";
import { useForm } from "react-hook-form";
import { superSubCatalogSchema } from "./validation";
import { FetchAllCatalogsL1 } from "rest/catalog";
import { FetchAllCatalogsL2 } from "rest/catalog";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddCatalogL3Fn } from "rest/catalog";

export const SuperSubCatalogL3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({ resolver: yupResolver(superSubCatalogSchema) });

  const fetchCatalogs = FetchAllCatalogsL1();
  const fetchAllSubCatalogs = FetchAllCatalogsL2();

  const addSuperSubCatalog = AddCatalogL3Fn(reset);
  const onSubmit = (data) => {
    addSuperSubCatalog.mutate(data);
  };

  return (
    <CatalogForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      control={control}
      isSubCategoryEnable={true}
      subCategory={fetchCatalogs?.data?.data}
      isSuperSubCategoryEnable={true}
      superSubCategory={fetchAllSubCatalogs?.data?.data}
      isLoading={addSuperSubCatalog?.isPending}
    />
  );
};
