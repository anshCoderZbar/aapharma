import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

import "styles/editor.css";

import { PageWrapper } from "components/ui/PageWrapper";

import { EditorComponent } from "components/editor-component";
import { useParams, useSearchParams } from "react-router-dom";

import { ChemicalForm } from "components/chemical-form";

import { FetchAllCatalogsL1 } from "rest/catalog";
import { FetchSingleChemical } from "rest/chemical";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { UpdateChemical } from "rest/chemical";
import { queryClient } from "queryclient";

export default function EditChemical() {
  const { id } = useParams();

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
  const [currentSmilie, setCurrentSmilie] = useState("");
  const [img, setImg] = useState("");
  const [base64Img, setBase64Img] = useState();
  const [inputs, setInputs] = useState([]);
  const [priceInputs, setPriceInputs] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [subChild, setSubChild] = useState([]);

  const [subCategoryData, setSubCategoryData] = useState([]);
  const [fileTabs, setFileTabs] = useState({ chemical: false, file: false });
  const [defaultImg, setDefaultImg] = useState("");

  const fetchSingleChemical = FetchSingleChemical(id);

  const fetchCatalogs = FetchAllCatalogsL1();

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
    defaultValues.chemicalMolecule =
      fetchSingleChemical?.data?.data?.chemicalMolecule;
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

    // master catalog
    const masterCatalogStr =
      fetchSingleChemical?.data?.data?.catalog.split("@@");
    const masterCatalogNumbers = masterCatalogStr?.map((str) => Number(str));
    masterCatalogNumbers && setSelectedCategories(masterCatalogNumbers);

    fetchSingleChemical?.data?.data?.catalog2 &&
      fetchSingleChemical?.data?.data?.catalog2
        ?.split("@@")
        ?.forEach((elm, i) => {
          if (!subCategoryData.some((item) => item.value === elm)) {
            setSubCategoryData((subCategoryData) => [
              ...subCategoryData,
              {
                name: Number.parseInt(
                  fetchSingleChemical?.data?.data?.catalog?.split("@@")[i]
                ),
                value: elm,
              },
            ]);
          }
        });

    fetchSingleChemical?.data?.data?.catalog3 &&
      fetchSingleChemical?.data?.data?.catalog3
        ?.split("@@")
        ?.forEach((elm, i) => {
          if (!subChild.some((item) => item.value === elm)) {
            setSubChild((subChild) => [
              ...subChild,
              {
                key: Number.parseInt(
                  fetchSingleChemical?.data?.data?.catalog?.split("@@")[i]
                ),
                prevCat: Number(
                  fetchSingleChemical?.data?.data?.catalog2?.split("@@")[i]
                ),
                value: elm,
              },
            ]);
          }
        });
    setDefaultImg(
      `${fetchSingleChemical?.data?.baseUrl}/${fetchSingleChemical?.data?.data?.chemicalImage}`
    );
    reset({ ...defaultValues });
  }, [fetchSingleChemical?.data?.data]);

  const updateChemical = UpdateChemical();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("sortNo", data?.sortNo);
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    // formData.append("image", base64Img);
    // formData.append("molecule", currentMolecule);
    formData.append("image", fileTabs?.chemical ? base64Img : "");
    formData.append("molecule", fileTabs?.chemical ? currentMolecule : "");
    formData.append("smiles", fileTabs?.chemical ? currentSmilie : "");
    formData.append(
      "chemicalImage",
      fileTabs?.file ? data?.chemicalImage[0] : undefined
    );

    formData.append(
      "chemicalMolecule",
      fileTabs?.file ? data?.chemicalMolecule : ""
    );

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

    mainCat?.forEach((data) => {
      formData.append("catalog[]", data);
    });
    subCat?.forEach((data) => {
      data && formData.append("catalog2[]", data);
    });

    superSubCat?.forEach((data) => {
      data && formData.append("catalog3[]", data);
    });
    updateChemical.mutate(formData);
  };

  useEffect(() => {
    if (fetchSingleChemical?.data?.data?.image) {
      setFileTabs({ chemical: true, file: false });
    } else if (fetchSingleChemical?.data?.data?.chemicalImage) {
      setFileTabs({ chemical: false, file: true });
    }
  }, [fetchSingleChemical?.data?.data]);

  return (
    <div className="chemical_editor">
      <PageWrapper slug="chemical-editor" name="Chemical Editor" />

      {fetchSingleChemical?.isPending ? (
        <ComponentLoader />
      ) : (
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
                checked={fileTabs?.chemical}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Chemical Editor
              </label>
            </div>
            <div
              onClick={() => setFileTabs({ chemical: false, file: true })}
              className="form-check"
            >
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
                checked={fileTabs?.file}
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
              initialMolecule={
                fetchSingleChemical?.data?.data?.molecule?.length >= 1
                  ? fetchSingleChemical?.data?.data?.molecule
                  : ""
              }
              initialSmilie={
                fetchSingleChemical?.data?.data?.smiles?.length >= 1
                  ? fetchSingleChemical?.data?.data?.smiles
                  : ""
              }
              setCurrentSmilie={setCurrentSmilie}
            />
          )}
          <ChemicalForm
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            control={control}
            mainCategoryData={fetchCatalogs?.data?.data}
            subSuperChemicalFilterId={searchParams.get("super-sub-cat")}
            isLoading={updateChemical?.isPending}
            getValues={getValues}
            reset={reset}
            inputs={inputs}
            setInputs={setInputs}
            priceInputs={priceInputs}
            setPriceInputs={setPriceInputs}
            mainCategoryFilterId={searchParams.get("main-cat")}
            subChemicalFilterId={searchParams.get("sub-cat")}
            superChemicalFilterId={searchParams.get("super-sub-cat")}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            subChild={subChild}
            setSubChild={setSubChild}
            subCategoryData={subCategoryData}
            setSubCategoryData={setSubCategoryData}
            showFiles={fileTabs?.file}
            // setDefaultImg={setDefaultImg}
            defaultImg={defaultImg}
            defaultDesc={fetchSingleChemical?.data?.data?.description}
            compoundDesc={
              fetchSingleChemical?.data?.data?.catalog_details &&
              JSON.parse(fetchSingleChemical?.data?.data?.catalog_details)
            }
          />
        </div>
      )}
    </div>
  );
}
