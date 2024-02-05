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
  const [fileTabs, setFileTabs] = useState({ chemical: false, file: false });
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
    // createChemical.mutate(formData);
    console.log(data);
  };

  return (
    <div className="chemical_editor">
      <PageWrapper slug="chemical-editor" name="Chemical Editor" />
      <div className="editor_Form">
        <div className="d-flex file_radio">
          <div
            onClick={() => setFileTabs({ chemical: true, file: false })}
            className="form-check"
          >
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Chemical Editor
            </label>
          </div>
          <div
            onClick={() => {
              setFileTabs({ chemical: false, file: true });
              // setCurrentMolecule("");
            }}
            className="form-check"
          >
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Image
            </label>
          </div>
        </div>
        {fileTabs?.chemical && (
          <EditorComponent
            setCurrentMolecule={setCurrentMolecule}
            setImg={setImg}
          />
        )}
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
          showFiles={fileTabs?.file}
        />
      </div>
    </div>
  );
}
