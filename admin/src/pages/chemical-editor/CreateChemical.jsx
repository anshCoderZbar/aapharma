import { useForm } from "react-hook-form";
import React, { useState } from "react";

import "styles/editor.css";

import { PageWrapper } from "components/ui/PageWrapper";

import { ChemicalForm } from "components/chemical-form";
import { FetchAllCatalogsL1 } from "rest/catalog";
import { CreateChemicalFn } from "rest/chemical";
import { useSearchParams } from "react-router-dom";
import { EditorComponent } from "components/editor-component";

export default function CreateChemical() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
  } = useForm();

  const [searchParams] = useSearchParams();

  const mainCatQueryParam = searchParams.get("main-cat");
  const subCatQueryParam = searchParams.get("sub-cat");
  const superSubCatParam = searchParams.get("super-sub-cat");

  const mainCat = mainCatQueryParam
    ? mainCatQueryParam.split(",").map((elm) => Number(elm))
    : [];
  const subCat = subCatQueryParam
    ? subCatQueryParam?.split(",").map((elm) => Number(elm))
    : [];
  const superSubCat = superSubCatParam
    ? superSubCatParam?.split(",").map((elm) => Number(elm))
    : [];

  const [currentMolecule, setCurrentMolecule] = useState("");
  const [img, setImg] = useState("");
  const [base64Img, setBase64Img] = useState();

  const [inputs, setInputs] = useState([{ label: "", description: "" }]);
  const [priceInputs, setPriceInputs] = useState([{ quantity: "", price: "" }]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [subChild, setSubChild] = useState([]);

  const [subCategoryData, setSubCategoryData] = useState([]);

  const fetchCatalogs = FetchAllCatalogsL1();

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
    formData.append("description", data?.description);
    formData.append("molecule", currentMolecule);

    const organizedData = [];
    Object.keys(data).forEach((key) => {
      if (key.includes("label")) {
        const labelNumber = key.split("_")[1];
        const descriptionKey = `description_${labelNumber}`;
        if (data[descriptionKey]) {
          organizedData.push({
            label: data[key],
            description: data[descriptionKey],
          });
        }
      }
    });
    const organizedPriceData = [];
    Object.keys(data).forEach((key) => {
      if (key.includes("quantity")) {
        const quantityNumber = key.split("_")[1];
        const priceKey = `price_${quantityNumber}`;
        if (data[priceKey]) {
          organizedPriceData.push({
            quantity: data[key],
            price: data[priceKey],
          });
        }
      }
    });

    formData.append(
      "catalog_details",
      organizedData?.length >= 1 && JSON.stringify(organizedData)
    );
    formData.append(
      "catalog_quantity_price",
      organizedPriceData?.length >= 1 && JSON.stringify(organizedPriceData)
    );

    mainCat?.forEach((data) => {
      formData.append("catalog[]", data);
    });
    subCat?.forEach((data) => {
      data && formData.append("catalog2[]", data);
    });

    superSubCat?.forEach((data) => {
      data && formData.append("catalog3[]", data);
    });
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
          isLoading={createChemical?.isPending}
          getValues={getValues}
          reset={reset}
          inputs={inputs}
          setInputs={setInputs}
          priceInputs={priceInputs}
          setPriceInputs={setPriceInputs}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          subChild={subChild}
          setSubChild={setSubChild}
          subCategoryData={subCategoryData}
          setSubCategoryData={setSubCategoryData}
        />
      </div>
    </div>
  );
}
