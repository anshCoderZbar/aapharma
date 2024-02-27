import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { ChemistryTabsForm } from "app/common/chemistry-experties/ChemistryTabsForm";
import { GetSingleChemistryTabsMutation } from "rest/chemicalExperties";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { EditChemistryTabsMutation } from "rest/chemicalExperties";
import { ErrorComponent } from "components/Alerts/Error";

export default function EditChemistryTabs() {
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
  const singleTab = GetSingleChemistryTabsMutation(formData);

  const editTabs = EditChemistryTabsMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.sortNo = singleTab?.data?.data?.sortNo;
    defaultValues.heading = singleTab?.data?.data?.heading;
    defaultValues.description = singleTab?.data?.data?.description;
    reset(defaultValues);
  }, [singleTab?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("sortNo", data?.sortNo);
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    editTabs.mutate(formData);
  };

  return (
    <div className="edit_tabs">
      <PageWrapper slug="chemistry-tabs" name="Chemistry Tabs" />
      {singleTab?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {singleTab?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <ChemistryTabsForm
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            control={control}
            errors={errors}
            defaultValue={singleTab?.data?.data?.description}
            isLoading={editTabs?.isPending}
            reset={reset}
          />
        </div>
      )}
    </div>
  );
}
