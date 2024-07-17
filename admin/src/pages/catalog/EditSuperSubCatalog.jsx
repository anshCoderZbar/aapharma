import { yupResolver } from "@hookform/resolvers/yup";
import { superSubCatalogSchema } from "app/common/catalog/validation";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { CatalogForm } from "components/catalog-form";
import { PageWrapper } from "components/ui/PageWrapper";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useSearchParams } from "react-router-dom";
import { UpdateCatalogL3 } from "rest/catalog";
import { FetchSuperSubSingleCatalog } from "rest/catalog";
import { FetchAllCatalogsL2 } from "rest/catalog";
import { FetchAllCatalogsL1 } from "rest/catalog";
import { ErrorComponent } from "components/Alerts/Error";

export default function EditSubCatalog() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({ resolver: yupResolver(superSubCatalogSchema) });

  const fetchCatalogs = FetchAllCatalogsL1();
  const fetchAllSubCatalogs = FetchAllCatalogsL2();

  const fetchSuperSubSingleCatalog = FetchSuperSubSingleCatalog(id);

  useEffect(() => {
    const defaultValues = {};
    defaultValues.sortNo = fetchSuperSubSingleCatalog?.data?.data?.sortNo;
    defaultValues.heading = fetchSuperSubSingleCatalog?.data?.data?.heading;
    defaultValues.subCategory = fetchSuperSubSingleCatalog?.data?.data?.catalog;
    defaultValues.superSubCategoryName =
      fetchSuperSubSingleCatalog?.data?.data?.catalog2;
    reset({ ...defaultValues });
  }, [fetchSuperSubSingleCatalog?.data?.data]);

  const updateSuperSubCatalog = UpdateCatalogL3(id);

  const onSubmit = (data) => {
    updateSuperSubCatalog?.mutate(data);
  };

  return (
    <>
      <PageWrapper slug="catalogL2" name="Catalog Edit Supers Sub Menu" />
      {fetchSuperSubSingleCatalog?.error ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}
      {false ? (
        <ComponentLoader />
      ) : (
        <CatalogForm
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
          control={control}
          isSubCategoryEnable={true}
          subCategory={fetchCatalogs?.data?.data}
          isSuperSubCategoryEnable={true}
          superSubCategory={fetchAllSubCatalogs?.data?.data}
          isLoading={updateSuperSubCatalog?.isPending}
          subCatalogFilterIdLev1={searchParams.get("catalogId")}
          heading1="Level 3"
          heading2="Level 1"
          heading3="Level 2"
        />
      )}
    </>
  );
}
