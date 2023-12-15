import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import "styles/editor.css";

import { PageWrapper } from "components/ui/PageWrapper";

import { EditorComponent } from "components/editor-component";
import { ChemicalForm } from "components/chemical-form";
import { FetchAllCatalogsL1 } from "rest/catalog";
import { FetchAllCatalogsL2 } from "rest/catalog";
import { FetchAllCatalogsL3 } from "rest/catalog";
import { chemicalSchema } from "app/common/chemical/validation";
import { CreateChemicalFn } from "rest/chemical";

export default function CreateChemical() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({ resolver: yupResolver(chemicalSchema) });

  const [currentMolecule, setCurrentMolecule] = useState("");
  const [img, setImg] = useState("");
  const [base64Img, setBase64Img] = useState();

  const fetchCatalogs = FetchAllCatalogsL1();
  const fetchAllSubCatalogs = FetchAllCatalogsL2();
  const fetchAllSuperSubCatalogs = FetchAllCatalogsL3();

  const createChemical = CreateChemicalFn(reset);

  async function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  img && blobToBase64(img).then((base64String) => setBase64Img(base64String));

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("sortNo", data?.sortNo);
    formData.append("image", base64Img);
    formData.append("heading", data?.heading);
    formData.append("catalog", data?.mainCategory);
    formData.append("catalog2", data?.subCategory);
    formData.append("catalog3", data?.superCategory);
    formData.append("description", data?.description);
    formData.append("productClass", data?.productClass);
    formData.append("clogP", data?.clogP);
    formData.append("mv", data?.mv);
    formData.append("hbd", data?.hbd);
    formData.append("hba", data?.hba);
    formData.append("rotb", data?.rotb);
    formData.append("fap3", data?.fap3);
    formData.append("price", data?.price);
    formData.append("molecule", currentMolecule);
    createChemical.mutate(formData);
  };

  return (
    <div className="chemical_editor">
      <PageWrapper slug="chemical-editor" name="Chemical Editor" />
      <div className="editor_Form">
        <EditorComponent
          setCurrentMolecule={setCurrentMolecule}
          setImg={setImg}
        />
        <ChemicalForm
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
          control={control}
          mainCategoryData={fetchCatalogs?.data?.data}
          subCategoryData={fetchAllSubCatalogs?.data?.data}
          superSubCategoryData={fetchAllSuperSubCatalogs?.data?.data}
          isLoading={createChemical?.isPending}
        />
        {/* <img src={base64Img} alt="Base64 Image" /> */}
      </div>
    </div>
  );
}
