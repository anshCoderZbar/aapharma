import React from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { ChemistryTabsForm } from "app/common/chemistry-experties/ChemistryTabsForm";
import { CreateChemistryTabsMutation } from "rest/chemicalExperties";

export default function AddChemistryTabs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const createTabs = CreateChemistryTabsMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("sortNo", data?.sortNo);
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    createTabs.mutate(formData);
  };

  return (
    <div className="add_chemistry_tabs">
      <PageWrapper slug="add-chemistry-tabs" name="Chemistry Tabs" />
      <div className="home_banner_input">
        <ChemistryTabsForm
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          control={control}
          errors={errors}
          defaultValue={""}
          isLoading={createTabs?.isPending}
        />
      </div>
    </div>
  );
}
