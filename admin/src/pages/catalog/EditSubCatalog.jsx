import { yupResolver } from "@hookform/resolvers/yup";
import { subCatalogSchema } from "app/common/catalog/validation";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { CatalogForm } from "components/catalog-form";
import { PageWrapper } from "components/ui/PageWrapper";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { UpdateCatalogL2 } from "rest/catalog";
import { FetchSubSingleCatalog } from "rest/catalog";
import { FetchAllCatalogsL1 } from "rest/catalog";
import { ErrorComponent } from "components/Alerts/Error";

export default function EditSubCatalog() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({ resolver: yupResolver(subCatalogSchema) });

  const fetchCatalogs = FetchAllCatalogsL1();

  const fetchSubSingleCatalog = FetchSubSingleCatalog(id);

  useEffect(() => {
    const defaultValues = {};
    defaultValues.sortNo = fetchSubSingleCatalog?.data?.data?.sortNo;
    defaultValues.heading = fetchSubSingleCatalog?.data?.data?.heading;
    defaultValues.subCategory = fetchSubSingleCatalog?.data?.data?.catalog;

    reset({ ...defaultValues });
  }, [fetchSubSingleCatalog?.data?.data]);

  const updateSubCatalog = UpdateCatalogL2(id);

  const onSubmit = (data) => {
    updateSubCatalog?.mutate(data);
  };

  return (
    <div>
      <PageWrapper slug="catalogL2" name="Catalog Edit Sub Menu" />
      {fetchSubSingleCatalog?.error ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}
      {fetchSubSingleCatalog?.isPending ? (
        <ComponentLoader />
      ) : (
        <CatalogForm
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
          control={control}
          isSubCategoryEnable={true}
          subCategory={fetchCatalogs?.data?.data}
          isLoading={updateSubCatalog?.isPending}
          heading1="Level 2"
          heading2="Level 1"
        />
      )}
    </div>
  );
}
