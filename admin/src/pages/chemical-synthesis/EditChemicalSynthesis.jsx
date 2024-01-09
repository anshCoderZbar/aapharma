import React, { useState, useEffect } from "react";
import { PageWrapper } from "components/ui/PageWrapper";
import { useForm } from "react-hook-form";
import { ChemicalSynthesisForm } from "app/common/chemical-synthesis/ChemicalSynthesisForm";
import { GetSingleChemicalSynthesisMutation } from "rest/chemicalSynthesis";
import { useParams } from "react-router-dom";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { UpdateChemicalSynthesisMutation } from "rest/chemicalSynthesis";

export default function EditChemicalSynthesis() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [defaultImg, setDefaultImg] = useState("");

  const formData = new FormData();
  formData.append("customchemicalsynthesisId", id);

  const singleChemicalSynthesisMutation =
    GetSingleChemicalSynthesisMutation(formData);
  const updateChemicalSynthesis = UpdateChemicalSynthesisMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading =
      singleChemicalSynthesisMutation?.data?.data?.heading;
    defaultValues.description =
      singleChemicalSynthesisMutation?.data?.data?.description;
    defaultValues.chemicalIcon =
      singleChemicalSynthesisMutation?.data?.data?.image;
    setDefaultImg(singleChemicalSynthesisMutation?.data?.data?.image);
    reset(defaultValues);
  }, [singleChemicalSynthesisMutation?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("customchemicalsynthesisId", id);
    formData.append("image", data?.chemicalIcon[0]);
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    updateChemicalSynthesis?.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="chemical-synthesis" name="Chemical Synthesis" />
      {singleChemicalSynthesisMutation?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {singleChemicalSynthesisMutation?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {singleChemicalSynthesisMutation?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <ChemicalSynthesisForm
            register={register}
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
            isLoading={updateChemicalSynthesis?.isPending}
            defaultImg={defaultImg}
          />
        </div>
      )}
    </>
  );
}
