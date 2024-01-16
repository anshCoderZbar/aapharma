import React, { useEffect, useState } from "react";
import { TextEditor } from "components/ui/TextEditor";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { Plus, X } from "lucide-react";
import { FilterSubCategoryMutation } from "rest/catalog";
import { FilterSubChildCategoryMutation } from "rest/catalog";
import { GetAllSubCategories } from "rest/catalog";

export const ChemicalForm = ({
  onSubmit,
  register,
  errors,
  control,
  isLoading,
  mainCategoryData,
  getValues,
  reset,
  inputs,
  setInputs,
  priceInputs,
  setPriceInputs,
  selectedCategories,
  setSelectedCategories,
  subChild,
  setSubChild,
  subCategoryData,
  setSubCategoryData,
  subChemicalFilterId,
  superChemicalFilterId,
}) => {
  const [selectedSubCategoryIds, setSelectedSubCategoryIds] = useState([]);
  const filterSubCatalog = FilterSubCategoryMutation();
  const filterSubChildCategory = FilterSubChildCategoryMutation();

  const subChildIds = mainCategoryData?.map((elm) => elm?.id);
  const allSubCategory = GetAllSubCategories(subChildIds);

  const handleAddInputs = (e) => {
    setInputs([...inputs, { label: "", description: "" }]);
  };

  const handleAddPriceInputs = () => {
    setPriceInputs([...priceInputs, { quantity: "", price: "" }]);
  };

  const handleDeleteInputFn = (index, inputArray, setArray, keyPrefixArray) => {
    const newArray = [...inputArray];
    newArray.splice(index, 1);
    setArray(newArray);

    keyPrefixArray.forEach((keyPrefix) => {
      const inputKey = `${keyPrefix}_${index + 1}`;
      const newFormData = { ...getValues() };
      delete newFormData[inputKey];
      reset(newFormData);
    });
  };

  const handleDeleteInput = (index) => {
    handleDeleteInputFn(index, inputs, setInputs, ["label", "description"]);
  };

  const handlePriceDeleteInput = (index) => {
    handleDeleteInputFn(index, priceInputs, setPriceInputs, [
      "quantity",
      "price",
    ]);
  };

  const handleCheckboxChange = (categoryId) => {
    setSelectedCategories((prevSelectedCategories) => {
      let updatedCategories;
      if (prevSelectedCategories.includes(categoryId)) {
        updatedCategories = prevSelectedCategories.filter(
          (id) => id !== categoryId
        );
      } else {
        updatedCategories = [...prevSelectedCategories, categoryId];
      }
      updatedCategories.sort((a, b) => a - b);
      return updatedCategories;
    });

    filterSubCatalog.mutate();
  };

  useEffect(() => {
    if (selectedCategories.length > 0) {
      filterSubCatalog.mutate(
        {
          categoryIds: selectedCategories,
        },
        {
          onSuccess: () => {
            return;
          },
        }
      );
    }
  }, [selectedCategories]);

  const handleSubCategoryChange = (e, id) => {
    const { name, value } = e.target;

    const index = selectedSubCategoryIds.findIndex(
      (item) => item.name === name
    );

    if (index !== -1) {
      setSelectedSubCategoryIds((prevValue) => [
        ...prevValue.slice(0, index),
        { name, value },
        ...prevValue.slice(index + 1),
      ]);
    } else {
      setSelectedSubCategoryIds((prevValue) => [
        ...prevValue,
        { name, value, mainId: id },
      ]);
    }
  };

  const handleSubCatChange = (e) => {
    const { name, value } = e.target;

    if (name) {
      const index = subCategoryData.findIndex((item) => item.name === name);

      if (index !== -1) {
        setSubCategoryData((prevValue) => [
          ...prevValue.slice(0, index),
          { name, value },
          ...prevValue.slice(index + 1),
        ]);
      } else {
        const firstEmptyIndex = subCategoryData.findIndex(
          (item) => item.name === "" && item.value === ""
        );

        if (firstEmptyIndex !== -1) {
          setSubCategoryData((prevValue) => [
            ...prevValue.slice(0, firstEmptyIndex),
            { name, value },
            ...prevValue.slice(firstEmptyIndex + 1),
          ]);
        }
      }
    }
  };

  useEffect(() => {
    let newState = [];
    let myArray = subChemicalFilterId.split(",");
    newState = [...newState, ...myArray];
    newState = newState.concat(selectedSubCategoryIds.map((elm) => elm.value));
    filterSubChildCategory.mutate({
      subcategoryIds: newState,
    });
  }, [selectedSubCategoryIds]);

  const handleSubChildCategoryChange = (e) => {
    const { name, value } = e.target;

    if (name) {
      const index = subChild.findIndex((item) => item.name === name);

      if (index !== -1) {
        setSubChild((prevValue) => [
          ...prevValue.slice(0, index),
          { name, value },
          ...prevValue.slice(index + 1),
        ]);
      } else {
        const firstEmptyIndex = subChild.findIndex(
          (item) => item.name === "" && item.value === ""
        );
        if (firstEmptyIndex !== -1) {
          setSubChild((prevValue) => [
            ...prevValue.slice(0, firstEmptyIndex),
            { name, value },
            ...prevValue.slice(firstEmptyIndex + 1),
          ]);
        }
      }
    }
  };

  const uniqueCombosSet = new Set();
  const newCatalog =
    allSubCategory?.isSuccess &&
    allSubCategory?.data?.filteredSubcategories.reduce((result, elm) => {
      const id = elm?.catalog;
      const category = elm?.categoryName;
      const comboString = JSON.stringify({ id, category });

      if (!uniqueCombosSet.has(comboString)) {
        uniqueCombosSet.add(comboString);
        result.push({ id, category });
      }

      return result;
    }, []);

  const groupedByCatalog =
    newCatalog &&
    newCatalog.map((data) => {
      return {
        categoryHeading: data?.category,
        key: data?.id,
        value: allSubCategory.data.filteredSubcategories.filter(
          (element) => element.catalog === data?.id
        ),
      };
    });

  return (
    <div className="edit_catalog_page mb-4">
      <div className="catalog_single_page_inputs">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="heading" className="form-label">
                Heading
              </label>
              <FormInput
                type="text"
                name="heading"
                placeholder="Heading"
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="sortNo" className="form-label">
                Sort no
              </label>
              <FormInput
                type="number"
                name="sortNo"
                placeholder="Sort no"
                {...register("sortNo", { required: true })}
              />
              {errors?.sortNo && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="hba" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                name="description"
                {...register("description", { required: true })}
              />
              {errors?.description && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-12">
              <h4 htmlFor="mainCategory" className="form-label chem_cat">
                Master Category
              </h4>
              <div className="d-flex chem_radio">
                {mainCategoryData?.length >= 1 &&
                  mainCategoryData?.map((category, i) => (
                    <div key={i} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name={category?.id}
                        value={category?.id}
                        id={`flexRadioDefault${i}`}
                        onChange={() => handleCheckboxChange(category?.id)}
                        checked={selectedCategories?.includes(category?.id)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`flexRadioDefault${i}`}
                      >
                        {category?.heading}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
            {groupedByCatalog?.length >= 1 &&
              groupedByCatalog?.map((elm) => {
                const selectedCatalogKey = elm.key;

                const filteredData = elm.value.filter(
                  (item) => item.catalog === selectedCatalogKey
                );

                return selectedCategories?.map((toogelId, mainIndex) => {
                  return (
                    <React.Fragment key={mainIndex}>
                      <div
                        className={`mb-3 col-md-6 ${
                          toogelId === selectedCatalogKey ? "d-block" : "d-none"
                        }`}
                      >
                        <label htmlFor="subCategory" className="form-label">
                          {elm?.categoryHeading} Sub Category
                        </label>
                        <select
                          className="form-select text-capitalize"
                          name={`subCategory_${selectedCatalogKey}`}
                          aria-label="Default select example"
                          onChange={(e) => {
                            handleSubCategoryChange(e, selectedCatalogKey);
                            handleSubCatChange(e);
                          }}
                        >
                          <option value={""}>Select Sub Category</option>
                          {filteredData.length >= 1 &&
                            filteredData.map((subCategory, i) => (
                              <option
                                selected={
                                  subChemicalFilterId &&
                                  subChemicalFilterId?.includes(subCategory?.id)
                                }
                                key={i}
                                value={subCategory?.id}
                              >
                                {subCategory?.heading}
                              </option>
                            ))}
                        </select>
                        {errors?.subCategory && (
                          <p className="errorMessage">Field is required</p>
                        )}
                      </div>
                      <div
                        className={`mb-3 col-md-6 ${
                          toogelId === selectedCatalogKey ? "d-block" : "d-none"
                        }`}
                      >
                        <label htmlFor="superCategory" className="form-label">
                          {elm?.categoryHeading} Sub Child Category
                        </label>
                        <select
                          className="form-select text-capitalize"
                          name={`superCategory_${selectedCatalogKey}`}
                          aria-label="Default select example"
                          onChange={handleSubChildCategoryChange}
                        >
                          <option value={""}>Select Sub Child Category</option>
                          {filterSubCatalog?.data?.filteredSubcategories
                            ?.length >= 1
                            ? filterSubChildCategory?.data?.filteredSubchildcategories
                                .filter(
                                  (subCategory) =>
                                    subCategory.catalog === selectedCatalogKey
                                )
                                .map((subCategory, i) => {
                                  return (
                                    <option
                                      key={i}
                                      value={subCategory?.id}
                                      selected={
                                        (Number.parseInt(
                                          subChild[mainIndex].value
                                        ) === subCategory?.id &&
                                          subChild[mainIndex]?.name ===
                                            `superCategory_${selectedCatalogKey}`) ||
                                        (superChemicalFilterId &&
                                          superChemicalFilterId?.includes(
                                            subCategory?.id
                                          ))
                                      }
                                    >
                                      {subCategory?.heading}
                                    </option>
                                  );
                                })
                            : null}
                        </select>
                        {errors?.superCategory && (
                          <p className="errorMessage">Field is required</p>
                        )}
                      </div>
                    </React.Fragment>
                  );
                });
              })}
            <div className="col-md-12">
              <div className="rows_content">
                <h3>Product Class And Compount Management</h3>
                {inputs?.map((inputElm, index) => {
                  return (
                    <div key={index} className="row">
                      <div className="mb-3 col-md-5">
                        <label
                          htmlFor={`label_${index + 1}`}
                          className="form-label"
                        >
                          label
                        </label>
                        <FormInput
                          type="text"
                          name={`label_${index + 1}`}
                          placeholder="label"
                          {...register(`label_${index + 1}`, {
                            required: true,
                          })}
                        />
                        {errors[`label_${index + 1}`] && (
                          <p className="errorMessage">field is required</p>
                        )}
                      </div>
                      <div className="mb-3 col-md-5">
                        <label
                          htmlFor={`description_${index + 1}`}
                          className="form-label"
                        >
                          Description
                        </label>
                        <FormInput
                          type="text"
                          placeholder="description"
                          name={`description_${index + 1}`}
                          {...register(`description_${index + 1}`, {
                            required: true,
                          })}
                        />
                        {errors[`description_${index + 1}`] && (
                          <p className="errorMessage">field is required</p>
                        )}
                      </div>
                      <div className="col-md-2 d-flex align-items-end">
                        {inputs?.length > 1 ? (
                          <div onClick={() => handleDeleteInput(index)}>
                            <span className="btn btn-danger btn_cross_vv">
                              <X />
                            </span>
                          </div>
                        ) : null}
                        <div className="add_btn">
                          <span
                            onClick={handleAddInputs}
                            className="btn btn-success btn_cross_vv2"
                          >
                            <Plus />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-12">
              <div className="rows_content">
                <h3>Quantity And Price Management</h3>
                {priceInputs?.map((inputElm, index) => {
                  return (
                    <div key={index} className="row">
                      <div className="mb-3 col-md-5">
                        <label
                          htmlFor={`quantity_${index + 1}`}
                          className="form-label"
                        >
                          Quantity
                        </label>
                        <FormInput
                          type="text"
                          name={`quantity_${index + 1}`}
                          placeholder="quantity"
                          {...register(`quantity_${index + 1}`, {
                            required: true,
                          })}
                        />
                        {errors[`quantity_${index + 1}`] && (
                          <p className="errorMessage">field is required</p>
                        )}
                      </div>
                      <div className="mb-3 col-md-5">
                        <label
                          htmlFor={`price_${index + 1}`}
                          className="form-label"
                        >
                          Price
                        </label>
                        <FormInput
                          type="number"
                          placeholder="price"
                          name={`price_${index + 1}`}
                          {...register(`price_${index + 1}`, {
                            required: true,
                          })}
                        />
                        {errors[`price_${index + 1}`] && (
                          <p className="errorMessage">field is required</p>
                        )}
                      </div>
                      <div className="col-md-2 d-flex align-items-end">
                        {priceInputs?.length > 1 ? (
                          <div onClick={() => handlePriceDeleteInput(index)}>
                            <span className="btn btn-danger btn_cross_vv">
                              <X />
                            </span>
                          </div>
                        ) : null}
                        <div className="add_btn">
                          <span
                            onClick={handleAddPriceInputs}
                            className="btn btn-success btn_cross_vv2"
                          >
                            <Plus />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {isLoading ? (
            <ButtonLoader />
          ) : (
            <div className="mb-3 col-12">
              <input type="submit" value="submit" className="input_submit" />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
