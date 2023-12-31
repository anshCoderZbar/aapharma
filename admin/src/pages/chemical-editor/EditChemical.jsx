import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import "styles/editor.css";

import { PageWrapper } from "components/ui/PageWrapper";

import { EditorComponent } from "components/editor-component";
import { useParams, useSearchParams } from "react-router-dom";

import { ChemicalForm } from "components/chemical-form";

import { FetchAllCatalogsL1 } from "rest/catalog";
import { FetchAllCatalogsL2 } from "rest/catalog";
import { FetchAllCatalogsL3 } from "rest/catalog";
import { FetchSingleChemical } from "rest/chemical";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { UpdateChemical } from "rest/chemical";

export default function EditChemical() {
  const { id } = useParams();

  const [searchParams] = useSearchParams();

  const [currentMolecule, setCurrentMolecule] = useState("");
  const [img, setImg] = useState("");
  const [base64Img, setBase64Img] = useState();
  const [inputs, setInputs] = useState([]);
  const [priceInputs, setPriceInputs] = useState([]);

  const fetchSingleChemical = FetchSingleChemical(id);

  const fetchCatalogs = FetchAllCatalogsL1();
  const fetchAllSubCatalogs = FetchAllCatalogsL2();
  const fetchAllSuperSubCatalogs = FetchAllCatalogsL3();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    getValues,
  } = useForm();

  async function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  img && blobToBase64(img).then((base64String) => setBase64Img(base64String));
  useEffect(() => {
    const defaultValues = {};
    defaultValues.sortNo = fetchSingleChemical?.data?.data?.sortNo;
    defaultValues.heading = fetchSingleChemical?.data?.data?.heading;
    defaultValues.description = fetchSingleChemical?.data?.data?.description;
    defaultValues.productClass = fetchSingleChemical?.data?.data?.productClass;
    defaultValues.mainCategory = fetchSingleChemical?.data?.data?.catalog;
    defaultValues.subCategory = fetchSingleChemical?.data?.data?.catalog2;
    defaultValues.superCategory = fetchSingleChemical?.data?.data?.catalog3;
    defaultValues.clogP = fetchSingleChemical?.data?.data?.clogP;
    defaultValues.mv = fetchSingleChemical?.data?.data?.mv;
    defaultValues.hbd = fetchSingleChemical?.data?.data?.hbd;
    defaultValues.hba = fetchSingleChemical?.data?.data?.hba;
    defaultValues.rotb = fetchSingleChemical?.data?.data?.rotb;
    defaultValues.fap3 = fetchSingleChemical?.data?.data?.fap3;
    defaultValues.price = fetchSingleChemical?.data?.data?.price;
    const catalogDetails = fetchSingleChemical?.data?.data?.catalog_details;

    if (catalogDetails) {
      const parsedCatalogDetails = JSON.parse(catalogDetails);
      const newInputs = parsedCatalogDetails.map((data, i) => {
        defaultValues[`label_${i + 1}`] = data?.label;
        defaultValues[`description_${i + 1}`] = data?.description;
      });
      setInputs(newInputs);
    }
    const priceDetails =
      fetchSingleChemical?.data?.data?.catalog_quantity_price;
    if (priceDetails) {
      const parsedPriceDetails = JSON.parse(priceDetails);
      const priceInputs = parsedPriceDetails.map((data, i) => {
        defaultValues[`quantity_${i + 1}`] = data?.quantity;
        defaultValues[`price_${i + 1}`] = data?.price;
      });
      setPriceInputs(priceInputs);
    }
    reset({ ...defaultValues });
  }, [fetchSingleChemical?.data?.data]);

  const updateChemical = UpdateChemical();

  const onSubmit = async (data) => {
    if (currentMolecule?.length >= 1) {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("sortNo", data?.sortNo);
      formData.append("image", base64Img);
      formData.append("heading", data?.heading);
      formData.append("catalog", data?.mainCategory);
      formData.append("catalog2", data?.subCategory);
      formData.append("catalog3", data?.superCategory);
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

      formData.append(
        "catalog_details",
        organizedData?.length >= 1 && JSON.stringify(organizedData)
      );
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
        "catalog_quantity_price",
        organizedPriceData?.length >= 1 && JSON.stringify(organizedPriceData)
      );
      updateChemical.mutate(formData);
    }
    return;
  };

  return (
    <div className="chemical_editor">
      <PageWrapper slug="chemical-editor" name="Chemical Editor" />
      {fetchSingleChemical?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="editor_Form">
          <EditorComponent
            setCurrentMolecule={setCurrentMolecule}
            setImg={setImg}
            initialMolecule={
              fetchSingleChemical?.data?.data?.molecule?.length >= 1
                ? fetchSingleChemical?.data?.data?.molecule
                : ""
            }
          />
          <ChemicalForm
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            control={control}
            mainCategoryData={fetchCatalogs?.data?.data}
            subCategoryData={fetchAllSubCatalogs?.data?.data}
            superSubCategoryData={fetchAllSuperSubCatalogs?.data?.data}
            mainCategoryFilterId={searchParams.get("main-cat")}
            subChemicalFilterId={searchParams.get("sub-cat")}
            subSuperChemicalFilterId={searchParams.get("super-sub-cat")}
            isLoading={updateChemical?.isPending}
            getValues={getValues}
            reset={reset}
            inputs={inputs}
            setInputs={setInputs}
            priceInputs={priceInputs}
            setPriceInputs={setPriceInputs}
          />
        </div>
      )}
    </div>
  );
}
