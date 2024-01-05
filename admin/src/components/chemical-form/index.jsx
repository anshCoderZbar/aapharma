import React, { useState } from "react";
import { TextEditor } from "components/ui/TextEditor";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { X } from "lucide-react";

export const ChemicalForm = ({
  onSubmit,
  register,
  errors,
  control,
  isLoading,
  mainCategoryData,
  subCategoryData,
  superSubCategoryData,
  mainCategoryFilterId,
  subChemicalFilterId,
  subSuperChemicalFilterId,
  getValues,
  reset,
  inputs,
  setInputs,
  priceInputs,
  setPriceInputs,
}) => {
  const [superSubCat, setSuperSubCat] = useState("");
  const [searchLastLevCat, setSearchLastLevCat] = useState("");

  const handleAddInputs = (e) => {
    setInputs([...inputs, { label: "", description: "" }]);
  };

  const handleAddPriceInputs = (e) => {
    setPriceInputs([...priceInputs, { quantity: "", price: "" }]);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
    const labelKey = `label_${index + 1}`;
    const descriptionKey = `description_${index + 1}`;
    const newFormData = { ...getValues() };
    delete newFormData[labelKey];
    delete newFormData[descriptionKey];
    reset(newFormData);
  };

  const handlePriceDeleteInput = (index) => {
    const newPriceArray = [...priceInputs];
    newPriceArray.splice(index, 1);
    setPriceInputs(newPriceArray);
    const quantityKey = `quantity_${index + 1}`;
    const priceKey = `price_${index + 1}`;
    const newFormData = { ...getValues() };
    delete newFormData[quantityKey];
    delete newFormData[priceKey];
    reset(newFormData);
  };

  const filterSuperSubCategory = subCategoryData?.filter((data) => {
    return (
      Number.parseInt(data?.catalog) ===
      Number.parseInt(superSubCat || mainCategoryFilterId)
    );
  });

  const filterSuperSubLastCategory = superSubCategoryData?.filter((data) => {
    return (
      Number.parseInt(data?.catalog2) ===
        Number.parseInt(searchLastLevCat || subChemicalFilterId) &&
      Number.parseInt(data?.catalog) ===
        Number.parseInt(superSubCat || mainCategoryFilterId)
    );
  });

  return (
    <div className="edit_catalog_page mb-4">
      <div className="catalog_single_page_inputs">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="mb-3 col-12">
              <label htmlFor="sortNo" className="form-label">
                Sort no
              </label>
              <FormInput
                type="text"
                name="sortNo"
                placeholder="Sort no"
                {...register("sortNo", { required: true })}
              />
              {errors?.sortNo && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
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
            <div className="mb-3 col-md-4">
              <label htmlFor="mainCategory" className="form-label">
                Master Category
              </label>
              <select
                className="form-select text-capitalize"
                name="mainCategory"
                aria-label="Default select example"
                {...register("mainCategory", {
                  required: true,
                  onChange: (e) => setSuperSubCat(e.target.value),
                })}
              >
                <option value={""}>Select Master Category</option>
                {mainCategoryData?.map((category, i) => {
                  return (
                    <option key={i} value={category?.id}>
                      {category?.heading}
                    </option>
                  );
                })}
              </select>
              {errors?.mainCategory && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="subCategory" className="form-label">
                Sub Category
              </label>
              <select
                className="form-select text-capitalize"
                name="subCategory"
                aria-label="Default select example"
                {...register("subCategory", {
                  required: true,
                  onChange: (e) => setSearchLastLevCat(e.target.value),
                })}
              >
                <option value={""}>Select Sub Category</option>
                {filterSuperSubCategory?.length >= 1 ? (
                  filterSuperSubCategory?.map((subCategory, i) => {
                    return (
                      <option key={i} value={subCategory?.id}>
                        {subCategory?.heading}
                      </option>
                    );
                  })
                ) : (
                  <option disabled value={""}>
                    {superSubCat.length < 1
                      ? "Please Select Master Category First"
                      : "Sub Category Not Present"}
                  </option>
                )}
              </select>
              {errors?.subCategory && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="superCategory" className="form-label">
                Sub Child Category
              </label>
              <select
                className="form-select text-capitalize"
                name="superCategory"
                aria-label="Default select example"
                {...register("superCategory", { required: true })}
              >
                <option value={""}>Select Sub Child Category</option>
                {filterSuperSubLastCategory?.length >= 1 ? (
                  filterSuperSubLastCategory?.map((subCategory, i) => {
                    return (
                      <option key={i} value={subCategory?.id}>
                        {subCategory?.heading}
                      </option>
                    );
                  })
                ) : (
                  <option disabled value={""}>
                    {searchLastLevCat.length < 1
                      ? "Please Select Master Category First"
                      : "Sub Category Not Present"}
                  </option>
                )}
              </select>
              {errors?.superCategory && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="">
              <div className="col-md-8">
                {inputs?.map((inputElm, index) => {
                  return (
                    <div key={index} className="row">
                      {inputs?.length > 1 ? (
                        <div
                          onClick={() => handleDeleteInput(index)}
                          className="d-flex justify-content-end"
                        >
                          <span className="btn btn-danger">
                            <X />
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="mb-3 col-md-6">
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
                      <div className="mb-3 col-md-6">
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
                    </div>
                  );
                })}
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <span onClick={handleAddInputs} className="btn btn-danger">
                  Add More
                </span>
              </div>
            </div>
            <div className="">
              <div className="col-md-8 mt-2">
                {priceInputs?.map((inputElm, index) => {
                  return (
                    <div key={index} className="row">
                      {priceInputs?.length > 1 ? (
                        <div
                          onClick={() => handlePriceDeleteInput(index)}
                          className="d-flex justify-content-end"
                        >
                          <span className="btn btn-danger">
                            <X />
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="mb-3 col-md-6">
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
                      <div className="mb-3 col-md-6">
                        <label
                          htmlFor={`price_${index + 1}`}
                          className="form-label"
                        >
                          Price
                        </label>
                        <FormInput
                          type="text"
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
                    </div>
                  );
                })}
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <span onClick={handleAddPriceInputs} className="btn btn-danger">
                  Add More
                </span>
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

{
  /*
<div className="mb-3 col-md-4">
<label htmlFor="mv" className="form-label">
  MV
</label>
<FormInput
  type="text"
  name="mv"
  placeholder="MV"
  {...register("mv")}
/>
{errors?.mv && (
  <p className="errorMessage">{errors?.mv?.message}</p>
)}
</div>
<div className="mb-3 col-md-4">
<label htmlFor="hbd" className="form-label">
  HBD
</label>
<FormInput
  type="text"
  name="hbd"
  placeholder="HBD"
  {...register("hbd")}
/>
{errors?.hbd && (
  <p className="errorMessage">{errors?.hbd?.message}</p>
)}
</div>
<div className="mb-3 col-md-4">
<label htmlFor="hba" className="form-label">
  HBA
</label>
<FormInput
  type="text"
  name="hba"
  placeholder="HBA"
  {...register("hba")}
/>
{errors?.hba && (
  <p className="errorMessage">{errors?.hba?.message}</p>
)}
</div>
<div className="mb-3 col-md-4">
<label htmlFor="rotb" className="form-label">
  Rotb
</label>
<FormInput
  type="text"
  name="rotb"
  placeholder="Rotb"
  {...register("rotb")}
/>
{errors?.rotb && (
  <p className="errorMessage">{errors?.rotb?.message}</p>
)}
</div>
<div className="mb-3 col-md-4">
<label htmlFor="fap3" className="form-label">
  Fap3
</label>
<FormInput
  type="text"
  name="fap3"
  placeholder="Fap3"
  {...register("fap3")}
/>
{errors?.fap3 && (
  <p className="errorMessage">{errors?.fap3?.message}</p>
)}
</div> 

 <div className="mb-3 col-md-4">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <FormInput
                type="text"
                name="price"
                placeholder="Price"
                {...register("price")}
              />
              {errors?.price && (
                <p className="errorMessage">{errors?.price?.message}</p>
              )}
            </div>
*/
}
