import React from "react";
import { PageWrapper } from "components/ui/PageWrapper";
import { ChemicalSynthesisForm } from "app/common/chemical-synthesis/ChemicalSynthesisForm";
import { useForm } from "react-hook-form";
import { CreateChemicalSynthesisMutation } from "rest/chemicalSynthesis";

export default function AddChemicalSynthesis() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createChemicalSynthesis = CreateChemicalSynthesisMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data?.chemicalIcon[0]);
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    createChemicalSynthesis.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="chemical-synthesis" name="Chemical Synthesis" />
      <div className="home_banner_input">
        <ChemicalSynthesisForm
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={createChemicalSynthesis?.isPending}
        />
      </div>
    </>
  );
}
